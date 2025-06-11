import { type Actions } from './actions.ts';
export interface Route {
    active: boolean;
    params?: Record<string, string>;
}
export interface RouterState {
    activeRoute: string;
    routes: Record<string, Route>;
}
interface Action {
    type?: string;
    path?: string;
}
declare const reducer: (state?: RouterState, { type, path }?: Action | Actions) => RouterState;
export default reducer;
//# sourceMappingURL=reducer.d.ts.map