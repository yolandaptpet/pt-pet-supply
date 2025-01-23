import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DJqfklJ8.mjs';
import { manifest } from './manifest_CzHdRUdc.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/_---auth_.astro.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/admin.astro.mjs');
const _page4 = () => import('./pages/api/announcements.astro.mjs');
const _page5 = () => import('./pages/api/contact-form.astro.mjs');
const _page6 = () => import('./pages/api/staff.astro.mjs');
const _page7 = () => import('./pages/api/store-info.astro.mjs');
const _page8 = () => import('./pages/api/submit-post.astro.mjs');
const _page9 = () => import('./pages/blog/_slug_.astro.mjs');
const _page10 = () => import('./pages/blog.astro.mjs');
const _page11 = () => import('./pages/grooming.astro.mjs');
const _page12 = () => import('./pages/login.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/auth-astro/src/api/[...auth].ts", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/admin.astro", _page3],
    ["src/pages/api/announcements.ts", _page4],
    ["src/pages/api/contact-form.ts", _page5],
    ["src/pages/api/staff.ts", _page6],
    ["src/pages/api/store-info.ts", _page7],
    ["src/pages/api/submit-post.ts", _page8],
    ["src/pages/blog/[slug].astro", _page9],
    ["src/pages/blog/index.astro", _page10],
    ["src/pages/grooming.astro", _page11],
    ["src/pages/login.astro", _page12],
    ["src/pages/index.astro", _page13]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "36366701-af27-4e3d-a29b-7f9f9c71e3c6",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
