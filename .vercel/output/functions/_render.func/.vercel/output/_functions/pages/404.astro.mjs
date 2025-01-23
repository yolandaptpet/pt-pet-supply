import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CXfaa4O1.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-zetdm5md> <div class="inner-container" data-astro-cid-zetdm5md> <img src="src/assets/404.webp" alt="Funny cat" data-astro-cid-zetdm5md> <h3 class="text" data-astro-cid-zetdm5md>Whoopsies! You weren't supposed to see this page.</h3> <a href="/" class="link" data-astro-cid-zetdm5md>Return to Store</a> </div> </div> `;
}, "C:/Users/digga/pt-pet-supply/src/pages/404.astro", undefined);

const $$file = "C:/Users/digga/pt-pet-supply/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
