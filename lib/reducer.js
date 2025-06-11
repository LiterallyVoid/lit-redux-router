import { ActionTypes } from "./actions.js";
import { refreshRoute } from "./service.js";
const initialState = {
    activeRoute: '/',
    routes: {},
};
const reducer = (state = initialState, { type = '', path = '' } = {}) => {
    switch (type) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
        case ActionTypes.NAVIGATE:
        // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison, no-fallthrough
        case ActionTypes.SET_ACTIVE_ROUTE:
            return {
                ...state,
                activeRoute: path,
                routes: Object.keys(state.routes).reduce((routes, routeName) => ({
                    ...routes,
                    [routeName]: refreshRoute(routeName, path),
                }), {}),
            };
        // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
        case ActionTypes.ADD_ROUTE:
            return {
                ...state,
                routes: {
                    ...state.routes,
                    [path]: refreshRoute(path, state.activeRoute),
                },
            };
        default:
            return state;
    }
};
export default reducer;
//# sourceMappingURL=reducer.js.map