import { c as createComponent, r as renderTemplate, b as renderComponent, g as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_CXfaa4O1.mjs';
import 'kleur/colors';
import { $ as $$BlogLayout } from '../../chunks/BlogLayout_eZmFuB9a.mjs';
import { g as getEntry } from '../../chunks/_astro_content_Dgtleold.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const backArrow = "../../../images/arrow.svg";
  const { slug } = Astro2.params;
  const post = await getEntry(
    "blog",
    slug
  );
  const { Content } = post ? await post.render() : { Content: null };
  const formatDate = (date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}\u2022${day}\u2022${year}`;
  };
  return renderTemplate`${renderComponent($$result, "BlogLayout", $$BlogLayout, { "id": post?.slug, "title": post?.data.title, "class": "relative", "data-astro-cid-4sn4zg3r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg w-[100vw] pb-48 lg:pb-64 flex justify-center" data-astro-cid-4sn4zg3r> <div class="flex-col-1 justify-center" data-astro-cid-4sn4zg3r> <div class="pt-4 pl-4 flex justify-between items-start drop-shadow-lg" data-astro-cid-4sn4zg3r> <button class="flex items-center bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold py-1.5 px-3 rounded-xl no-underline" data-astro-prefetch onclick="window.location.href = '/blog'" data-astro-cid-4sn4zg3r> ${renderTemplate`<img${addAttribute(backArrow, "src")} alt="Back Arrow" class="w-4 my-0" style="filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(360deg) brightness(100%) contrast(100%);" data-astro-cid-4sn4zg3r>`}
&nbsp; All Posts
</button> </div> <div class="flex flex-col justify-center mx-auto" data-astro-cid-4sn4zg3r> <div class="mx-auto ml-4 md:ml-12 mr-7 md:mr-16 max-w-[1200px]" data-astro-cid-4sn4zg3r> <div class="pt-8" data-astro-cid-4sn4zg3r> <div class="ml-4 pb-4" data-astro-cid-4sn4zg3r> <time class="font-bold text-lg tracking-widest" data-astro-cid-4sn4zg3r> ${post ? renderTemplate`<div data-astro-cid-4sn4zg3r> ${formatDate(post.data.publishDate)} &nbsp;
<span class="text-color-[#7F0201]" data-astro-cid-4sn4zg3r>|</span>&nbsp;&nbsp; PT
                      Pet Supply
</div>` : "Unknown Date | PT Pet Supply"} </time> </div> <h1 class="md:tracking-wider drop-shadow-md" data-astro-cid-4sn4zg3r>${post?.data.title}</h1> <img src="https://placehold.co/1400x300" alt="Associated hashtag photo" class="w-[100%] h-[100%]" data-astro-cid-4sn4zg3r> </div> <div class="flex space-x-1 pb-10 drop-shadow-lg" data-astro-cid-4sn4zg3r> ${post?.data.tags.map((tag) => renderTemplate`<button class="bg-[#7F0201] text-white text-md md:text-xl md:tracking-widest px-2 md:px-3 md:py-1 rounded-xl pointer-events-none" data-astro-cid-4sn4zg3r> ${tag} </button>`)} </div> <article class="pb-16 text-lg text-[#452B1F]" data-astro-cid-4sn4zg3r> ${Content ? renderTemplate`${renderComponent($$result2, "Content", Content, { "data-astro-cid-4sn4zg3r": true })}` : renderTemplate`<p data-astro-cid-4sn4zg3r>Content not available</p>`} </article> </div> </div> </div> </div> ` })} `;
}, "C:/Users/digga/pt-pet-supply/src/pages/blog/[slug].astro", undefined);

const $$file = "C:/Users/digga/pt-pet-supply/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
