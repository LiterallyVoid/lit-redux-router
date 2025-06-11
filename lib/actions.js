import { checkNavigation } from "./service.js";
export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["ADD_ROUTE"] = "ADD_ROUTE";
    ActionTypes["NAVIGATE"] = "NAVIGATE";
    ActionTypes["SET_ACTIVE_ROUTE"] = "SET_ACTIVE_ROUTE";
})(ActionTypes || (ActionTypes = {}));
export const addRoute = (path) => ({
    path,
    type: ActionTypes.ADD_ROUTE,
});
export const navigate = (path) => {
    checkNavigation(path);
    return {
        path,
        type: ActionTypes.NAVIGATE,
    };
};
export const setActiveRoute = (path) => ({
    path,
    type: ActionTypes.SET_ACTIVE_ROUTE,
});
//# sourceMappingURL=actions.js.map