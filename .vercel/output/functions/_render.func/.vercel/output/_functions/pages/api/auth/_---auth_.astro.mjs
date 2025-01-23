import { A as AstroAuth } from '../../../chunks/server_k17Eg22a.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const { GET, POST } = AstroAuth();

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
