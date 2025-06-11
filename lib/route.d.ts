import type { LazyStore } from 'pwa-helpers/lazy-reducer-enhancer.ts';
import type { Store } from 'redux';
export declare let RouteClass: any;
declare const _default: (store: LazyStore & Store) => void;
export default _default;
declare global {
    interface Window {
        decodeURIComponent: (encodedURIComponent: string) => string;
    }
}
//# sourceMappingURL=route.d.ts.map