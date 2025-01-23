import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderComponent, d as renderHead, e as createTransitionScope, f as renderSlot, g as createAstro } from './astro/server_CXfaa4O1.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$ViewTransitions, b as $$Footer } from './_astro_content_Dgtleold.mjs';
/* empty css                          */
/* empty css                          */

const $$Astro = createAstro();
const $$BlogLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const { title, description, publishDate, tags } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-rvott5xz> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description"${addAttribute(description, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><title>${title}</title><link rel="preload" href="/fonts/CenzoFlare-Regular.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "animate", "data-astro-cid-rvott5xz": true })}${renderHead()}</head> <body data-astro-cid-rvott5xz> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-rvott5xz": true, "data-astro-transition-persist": createTransitionScope($$result, "d7uwo4kq") })} <article data-astro-cid-rvott5xz> <header data-astro-cid-rvott5xz> <time data-astro-cid-rvott5xz>${publishDate}</time> ${tags?.map((tag) => renderTemplate`<span class="tag" data-astro-cid-rvott5xz>${tag}</span>`)} </header> <main data-astro-cid-rvott5xz> <article class="prose" data-astro-cid-rvott5xz> ${renderSlot($$result, $$slots["default"])} </article> </main> </article> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-rvott5xz": true })} </body></html>`;
}, "C:/Users/digga/pt-pet-supply/src/components/layouts/BlogLayout.astro", "self");

export { $$BlogLayout as $ };
