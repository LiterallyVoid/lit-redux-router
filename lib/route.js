var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { connect, installRouter } from 'pwa-helpers';
import { addRoute, setActiveRoute } from "./actions.js";
import { getRouteParams, isRouteActive } from "./selectors.js";
// eslint-disable-next-line @typescript-eslint/init-declarations, @typescript-eslint/naming-convention, @typescript-eslint/no-explicit-any
export let RouteClass;
// eslint-disable-next-line max-lines-per-function
export default (store) => {
    var Route_1;
    //
    /**
     * Element that renders its content or a component
     * when browser route matches
     * @element lit-route
     * @demo ../demo/index.html
     */
    let Route = Route_1 = class Route extends connect(store)(LitElement) {
        constructor() {
            super(...arguments);
            this.active = false;
            this.scrollDisable = false;
            this.params = {};
            this.isResolving = false;
        }
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        async firstUpdated() {
            var _a, _b;
            await this.updateComplete;
            if (!Route_1.routerInstalled) {
                installRouter(({ pathname, search, hash }) => {
                    const path = pathname + search + hash;
                    store.dispatch(setActiveRoute(path));
                });
                Route_1.routerInstalled = true;
            }
            let current = this.parentElement;
            let { path } = this;
            while (current) {
                const closestLitRoute = current.closest('lit-route');
                if (closestLitRoute) {
                    path = `${(_a = closestLitRoute.path) !== null && _a !== void 0 ? _a : ''}${path !== null && path !== void 0 ? path : ''}`;
                }
                current = (_b = closestLitRoute === null || closestLitRoute === void 0 ? void 0 : closestLitRoute.parentElement) !== null && _b !== void 0 ? _b : null;
            }
            const hasChildRoutes = Boolean(this.querySelector('lit-route'));
            if (hasChildRoutes) {
                path += '.*';
            }
            this.path = path;
            if (typeof this.path !== 'undefined') {
                store.dispatch(addRoute(this.path));
            }
        }
        stateChanged(newState) {
            const isActive = isRouteActive(newState, this.path);
            const hasBecomeActive = !this.active && isActive;
            this.active = isActive;
            this.params = getRouteParams(newState, this.path);
            if (this.active && this.resolve) {
                this.setResolving();
                this.resolve()
                    .then(() => {
                    this.unsetResolving();
                })
                    .catch(() => {
                    this.unsetResolving();
                });
            }
            if (this.active && !this.scrollDisable) {
                if (typeof this.scrollOpt === 'undefined') {
                    window.scrollTo(0, 0);
                }
                else if (hasBecomeActive) {
                    this.scrollIntoView(this.scrollOpt);
                }
            }
        }
        render() {
            if (!this.active) {
                return nothing;
            }
            if (this.resolve && this.isResolving) {
                return typeof this.loading === 'undefined' ? nothing : this.getTemplate(this.loading);
            }
            if (typeof this.component === 'undefined') {
                return html `<slot></slot>`;
            }
            return this.getTemplate(this.component, this.params);
        }
        getTemplate(component, attributesObject) {
            const tagName = component.replace(/[^A-Za-z0-9-]/u, '');
            let attributes = '';
            if (attributesObject) {
                attributes = Object.keys(attributesObject)
                    .map((param) => ` ${param}="${this.params[param]}"`)
                    .join('');
            }
            const template = `<${tagName}${attributes}></${tagName}>`;
            return html `${unsafeHTML(template)}`;
        }
        setResolving() {
            if (typeof this.component !== 'undefined' &&
                typeof window.customElements.get(this.component) === 'undefined') {
                this.isResolving = true;
            }
        }
        unsetResolving() {
            if (typeof this.component !== 'undefined' &&
                typeof window.customElements.get(this.component) !== 'undefined') {
                this.isResolving = false;
            }
        }
    };
    Route.routerInstalled = false;
    __decorate([
        property({ reflect: true, type: Boolean })
    ], Route.prototype, "active", void 0);
    __decorate([
        property({ type: String })
    ], Route.prototype, "component", void 0);
    __decorate([
        property({ type: String })
    ], Route.prototype, "path", void 0);
    __decorate([
        property()
    ], Route.prototype, "resolve", void 0);
    __decorate([
        property({ type: String })
    ], Route.prototype, "loading", void 0);
    __decorate([
        property({ type: Object })
    ], Route.prototype, "scrollOpt", void 0);
    __decorate([
        property({ type: Boolean })
    ], Route.prototype, "scrollDisable", void 0);
    __decorate([
        state()
    ], Route.prototype, "params", void 0);
    __decorate([
        state()
    ], Route.prototype, "isResolving", void 0);
    Route = Route_1 = __decorate([
        customElement('lit-route')
    ], Route);
    RouteClass = Route;
};
//# sourceMappingURL=route.js.map