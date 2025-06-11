import reducer from "./lib/reducer.js";
import Route from "./lib/route.js";
export const connectRouter = (store) => {
    store.addReducers({ router: reducer });
    // eslint-disable-next-line new-cap
    Route(store);
};
export { navigate } from './lib/actions.js';
//# sourceMappingURL=lit-redux-router.js.map