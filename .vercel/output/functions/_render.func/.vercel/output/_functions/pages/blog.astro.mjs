import { c as createComponent, r as renderTemplate, b as renderComponent, g as createAstro, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_CXfaa4O1.mjs';
import 'kleur/colors';
import { $ as $$BlogLayout } from '../chunks/BlogLayout_eZmFuB9a.mjs';
import { c as getCollection } from '../chunks/_astro_content_Dgtleold.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const backArrow = "../../../images/arrow.svg";
  const posts = await getCollection("blog");
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime();
  });
  const postsPerPage = 12;
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  const currentPage = Number(Astro2.url.searchParams.get("page") || 1);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = sortedPosts.slice(startIndex, endIndex);
  const allTags = Array.from(new Set(posts.flatMap((post) => post.data.tags)));
  const formatDate = (date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}\u2022${day}\u2022${year}`;
  };
  return renderTemplate`${renderComponent($$result, "BlogLayout", $$BlogLayout, { "id": "blog", "title": "Blog | PT Pet Supply", "class": "relative w-screen h-screen overflow-hidden", "data-astro-cid-5tznm7mj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg min-h-screen w-[100vw] pb-10 flex justify-center" data-astro-cid-5tznm7mj> <div class="overlay" data-astro-cid-5tznm7mj></div> <div class="flex-col justify-center w-[100vw] max-w-[1200px]" data-astro-cid-5tznm7mj> <div class="pt-4 pl-4 flex justify-between items-start drop-shadow-lg" data-astro-cid-5tznm7mj> <button class="flex items-center bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold py-1.5 px-3 rounded-xl no-underline" data-astro-prefetch onclick="window.location.href = '/'" data-astro-cid-5tznm7mj> <img${addAttribute(backArrow, "src")} alt="Back Arrow" class="w-4 my-0" style="filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(360deg) brightness(100%) contrast(100%);" data-astro-cid-5tznm7mj>
&nbsp; Store Page
</button> </div> <div class="flex flex-col justify-center text-center w-3/4 md:w-2/3 pt-2 mx-auto" data-astro-cid-5tznm7mj> <p class="font-bold text-[#452B1F]" data-astro-cid-5tznm7mj>
At PT Pet Supply, our mission is to provide pet parents with reliable,
          natural, and sustainable products that promote the health, happiness,
          and well-being of their pets. Through this blog, we aim to educate,
          inspire, and empower pet owners to make informed choices about the
          products and practices they incorporate into their pets&#39; lives. We
          are committed to fostering a community that values the importance of
          nature-based solutions and responsible pet care.
</p> <div class="flex-col pr-4 -mr-4" data-astro-cid-5tznm7mj> <div class="flex justify-start items-start space-x-1" data-astro-cid-5tznm7mj> <h3 class="flex justify-start text-sm tracking-widest my-0 -mb-4 ml-10" data-astro-cid-5tznm7mj>
Filter by:
</h3> </div> <div class="scroll-wrapper" data-astro-cid-5tznm7mj> <div class="tag-container scrollbar-hide flex space-x-1 p-2 overflow-x-auto pb-1 drop-shadow-lg" data-astro-cid-5tznm7mj>  ${allTags.map((tag) => renderTemplate`<button class="tag-button bg-[#7F0201] hover:bg-[#A52A2A] text-white text-md tracking-narrow px-3 mb-3 rounded-xl whitespace-nowrap"${addAttribute(tag, "data-tag")} data-astro-cid-5tznm7mj> ${tag} </button>`)} </div> </div> </div> </div> <div id="post-container" class="flex justify-center max-w-[1200px]" data-astro-cid-5tznm7mj> <div class="grid min-[690px]:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 place-items-center sm:w-[690px] lg:w-[1020px] 2xl:w-[1530px] 2xl:-mx-20 px-4 pt-6 pb-16 drop-shadow-2xl" id="post-grid" data-astro-cid-5tznm7mj>  ${paginatedPosts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}/`, "href")} class="no-underline" data-astro-cid-5tznm7mj> <div class="post-card relative flex flex-col w-[320px] min-[450px]:w-[400px] min-[690px]:w-[320px] lg:w-[320px] rounded-3xl border bg-[#F9DCB1]"${addAttribute(post.data.tags.join(","), "data-tags")} data-astro-cid-5tznm7mj> <img src="https://placehold.co/400x270" alt="Hashtag photo" class="rounded-t-3xl my-0" data-astro-cid-5tznm7mj> <div class="py-2 px-4 rounded-xl" data-astro-cid-5tznm7mj> <h1 class="mb-1 font-bold no-underline text-lg tracking-tighter" data-astro-cid-5tznm7mj> ${post.data.title} </h1> <time class="absolute bottom-0 right-3 text-sm tracking-wider font-bold mb-2" data-astro-cid-5tznm7mj> ${formatDate(new Date(post.data.publishDate))} </time> <div class="flex space-x-1" data-astro-cid-5tznm7mj> ${post.data.tags.map((tag) => renderTemplate`<button class="bg-[#7F0201] text-white text-sm tracking-narrow px-2 rounded-xl pointer-events-none" data-astro-cid-5tznm7mj> ${tag} </button>`)} </div> </div> <p class="min-h-[70px] mt-2 mx-2 leading-5" data-astro-cid-5tznm7mj> ${post.data.description} </p> </div> </a>`)} </div> </div>  <div class="pagination flex justify-center mt-4 space-x-4" data-astro-cid-5tznm7mj> ${currentPage > 1 && renderTemplate`<a${addAttribute(`?page=${currentPage - 1}`, "href")} class="pagination-button" data-astro-cid-5tznm7mj>
Previous
</a>`} ${Array.from({ length: totalPages }, (_, i) => renderTemplate`<a${addAttribute(`?page=${i + 1}`, "href")}${addAttribute(`pagination-button ${currentPage === i + 1 ? "active" : ""}`, "class")} data-astro-cid-5tznm7mj> ${i + 1} </a>`)} ${currentPage < totalPages && renderTemplate`<a${addAttribute(`?page=${currentPage + 1}`, "href")} class="pagination-button" data-astro-cid-5tznm7mj>
Next
</a>`} </div> </div> </div> ` })}  `;
}, "C:/Users/digga/pt-pet-supply/src/pages/blog/index.astro", undefined);

const $$file = "C:/Users/digga/pt-pet-supply/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
