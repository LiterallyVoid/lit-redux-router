import type { Route, RouterState } from './reducer.ts';
export interface State {
    router: RouterState;
}
export declare const getRoute: ({ router: { routes } }: State, route?: string) => Route | undefined;
export declare const noRouteActive: ({ router: { routes } }: State) => boolean;
export declare const isRouteActive: (state: State, route?: string) => boolean;
export declare const getRouteParams: (state: State, route?: string) => NonNullable<Route["params"]>;
//# sourceMappingURL=selectors.d.ts.map