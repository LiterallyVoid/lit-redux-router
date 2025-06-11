export const getRoute = ({ router: { routes } }, route) => 
// eslint-disable-next-line no-undefined
typeof route !== 'undefined' && route in routes ? routes[route] : undefined;
export const noRouteActive = ({ router: { routes } }) => Object.keys(routes).reduce((noActive, route) => noActive && !routes[route].active, true);
export const isRouteActive = (state, route) => { var _a; return typeof route === 'undefined' ? noRouteActive(state) : Boolean((_a = getRoute(state, route)) === null || _a === void 0 ? void 0 : _a.active); };
export const getRouteParams = (state, route) => { var _a, _b; return (_b = (_a = getRoute(state, route)) === null || _a === void 0 ? void 0 : _a.params) !== null && _b !== void 0 ? _b : {}; };
//# sourceMappingURL=selectors.js.map