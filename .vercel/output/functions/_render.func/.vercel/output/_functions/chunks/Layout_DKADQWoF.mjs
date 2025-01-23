import { c as createComponent, r as renderTemplate, h as defineScriptVars, g as createAstro, a as addAttribute, b as renderComponent, d as renderHead, e as createTransitionScope, f as renderSlot } from './astro/server_CXfaa4O1.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$ViewTransitions, b as $$Footer } from './_astro_content_DVOxf79D.mjs';
/* empty css                          */
import 'clsx';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw) }));
var _a;
const $$Astro$1 = createAstro();
const $$GoogleMapsLoader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GoogleMapsLoader;
  const { apiKey } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<script>(function(){", '\n  function loadGoogleMapsScript() {\n    return new Promise((resolve, reject) => {\n      if (!document.querySelector(`script[src*="maps.googleapis.com"]`)) {\n        const script = document.createElement("script");\n        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,maps,geocoding,marker&callback=initMap&loading=async`;\n        script.async = true;\n        script.defer = true;\n        script.onload = () => {\n          console.log("Google Maps script loaded");\n          resolve();\n        };\n        script.onerror = () => reject("Google Maps script failed to load.");\n        document.head.appendChild(script);\n      } else {\n        resolve();\n      }\n    });\n  }\n\n  if (typeof window !== "undefined") {\n    window.initMap = () => {\n      console.log("Google Maps API initialized.");\n    };\n\n    loadGoogleMapsScript()\n      .then(() => console.log("Google Maps script loaded"))\n      .catch((error) => console.error(error));\n  }\n})();<\/script>'], ["<script>(function(){", '\n  function loadGoogleMapsScript() {\n    return new Promise((resolve, reject) => {\n      if (!document.querySelector(\\`script[src*="maps.googleapis.com"]\\`)) {\n        const script = document.createElement("script");\n        script.src = \\`https://maps.googleapis.com/maps/api/js?key=\\${apiKey}&libraries=places,maps,geocoding,marker&callback=initMap&loading=async\\`;\n        script.async = true;\n        script.defer = true;\n        script.onload = () => {\n          console.log("Google Maps script loaded");\n          resolve();\n        };\n        script.onerror = () => reject("Google Maps script failed to load.");\n        document.head.appendChild(script);\n      } else {\n        resolve();\n      }\n    });\n  }\n\n  if (typeof window !== "undefined") {\n    window.initMap = () => {\n      console.log("Google Maps API initialized.");\n    };\n\n    loadGoogleMapsScript()\n      .then(() => console.log("Google Maps script loaded"))\n      .catch((error) => console.error(error));\n  }\n})();<\/script>'])), defineScriptVars({ apiKey }));
}, "C:/Users/digga/pt-pet-supply/src/components/ui/GoogleMapsLoader.astro", undefined);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const apiKey = "AIzaSyDR7XmG8MGJdivvMFt3H7FPQBw1D04XkVI";
  return renderTemplate`<html lang="en" data-astro-cid-gxcatbgd> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>PT Pet Supply</title><link rel="preload" href="/fonts/CenzoFlare-Regular.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/SanelmaW00-Regular.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "animate", "data-astro-cid-gxcatbgd": true })}${renderComponent($$result, "GoogleMapsLoader", $$GoogleMapsLoader, { "apiKey": apiKey, "data-astro-cid-gxcatbgd": true })}${renderHead()}</head> <body data-astro-cid-gxcatbgd> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-gxcatbgd": true, "data-astro-transition-persist": createTransitionScope($$result, "rzitdxlt") })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-gxcatbgd": true })} </body></html>`;
}, "C:/Users/digga/pt-pet-supply/src/components/layouts/Layout.astro", "self");

export { $$Layout as $ };
