import { c as createComponent, r as renderTemplate } from '../chunks/astro/server_CXfaa4O1.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Grooming = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- ---
import Layout from "../components/layouts/Layout.astro";

import Booking from "../components/sections/Booking.astro";
import Services from "../components/sections/Services.astro";

import "@/styles/globals.css";
---

<Layout title="Grooming">
  <div class="h-screen">
    <Booking />
    <Services />
  </div>
</Layout> -->`;
}, "C:/Users/digga/pt-pet-supply/src/pages/grooming.astro", undefined);

const $$file = "C:/Users/digga/pt-pet-supply/src/pages/grooming.astro";
const $$url = "/grooming";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Grooming,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
