import { parse } from 'regexparam';
export const refreshRoute = (route, activeRoute) => {
    const { pattern, keys } = parse(route);
    // eslint-disable-next-line prefer-named-capture-group
    const noQueryRoute = activeRoute.replace(/(\?|#).*/u, '');
    const match = pattern.exec(noQueryRoute);
    const active = pattern.test(noQueryRoute);
    return {
        active,
        params: active
            ? keys.reduce((list, item, index) => {
                var _a;
                return ({
                    ...list,
                    [item]: (_a = match === null || match === void 0 ? void 0 : match[index + 1]) !== null && _a !== void 0 ? _a : '',
                });
            }, {})
            : {},
    };
};
export const checkNavigation = (route) => {
    window.history.pushState({}, '', route);
};
//# sourceMappingURL=service.js.map