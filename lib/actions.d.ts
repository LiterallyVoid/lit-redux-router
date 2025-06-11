import type { Action } from 'redux';
export declare enum ActionTypes {
    ADD_ROUTE = "ADD_ROUTE",
    NAVIGATE = "NAVIGATE",
    SET_ACTIVE_ROUTE = "SET_ACTIVE_ROUTE"
}
export interface Actions extends Action {
    path: string;
    type: string;
}
export declare const addRoute: (path: string) => Actions;
export declare const navigate: (path: string) => Actions;
export declare const setActiveRoute: (path: string) => Actions;
//# sourceMappingURL=actions.d.ts.map