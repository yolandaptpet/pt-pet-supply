import { c as createComponent, r as renderTemplate, m as maybeRenderHead, g as createAstro, a as addAttribute, b as renderComponent, j as renderTransition, k as renderUniqueStylesheet, l as renderScriptElement, n as createHeadAndContent, u as unescapeHTML } from './astro/server_CXfaa4O1.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { r as removeBase, i as isRemotePath, V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_B5QhSQrZ.mjs';
import * as devalue from 'devalue';

const $$Astro$2 = createAstro();
const $$Announcements = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Announcements;
  const { activeAnnouncement, body } = Astro2.props;
  return renderTemplate`${activeAnnouncement === true ? renderTemplate`${maybeRenderHead()}<section class="flex bg-[#7F0201] text-sm lg:text-base font-bold tracking-wider lg:tracking-widest text-white text-outline-white" data-astro-cid-ngenzr6f><h2 class="scroll-text mx-auto justify-between px-6 py-2 whitespace-nowrap" data-astro-cid-ngenzr6f>${body}</h2></section>` : renderTemplate`<section class="h-5 bg-[#7F0201]" data-astro-cid-ngenzr6f></section>`}`;
}, "C:/Users/digga/pt-pet-supply/src/components/sections/Announcements.astro", undefined);

const officialStoreInfo = () => {
  let storeInfo = {
    name: "PT Pet Supply",
    address: "86 Worcester Rd, Webster",
    phoneNumber: "508•943•9600"
  };
  return storeInfo;
};
const normalizeFileName = (name) => {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
};
const officialStoreHours = async () => {
  try {
    const status = "http://localhost:4321";
    const response = await fetch(`${status}/api/store-info`);
    const data = await response.json();
    if (!response.ok || !data || !data[0]) {
      console.error("Failed to fetch valid store information.");
      return null;
    }
    const storeInfo = data[0].info;
    const activeHours = storeInfo.storeHours.activeHours;
    const storeHours = activeHours === "normal" ? storeInfo.storeHours.normal : activeHours === "adjusted" ? storeInfo.storeHours.adjusted : null;
    if (!storeHours) {
      console.error("Invalid activeHours value or missing store hours.");
      return null;
    }
    return storeHours;
  } catch (error) {
    console.error("Error fetching store hours:", error);
    return null;
  }
};
const officialStaffList = async () => {
  try {
    const status = "http://localhost:4321";
    const response = await fetch(`${status}/api/staff`);
    const data = await response.json();
    if (!response.ok || !data.members || !Array.isArray(data.members) || data.members.length === 0) {
      console.error("Failed to fetch valid staff information.");
      return [];
    }
    const staffList = data.members.map((member) => {
      const normalizedFullName = normalizeFileName(member.fullName);
      const imageSrc = `/src/assets/staff/${normalizedFullName}.webp`;
      return {
        ...member,
        imageSrc
      };
    });
    return staffList;
  } catch (error) {
    console.error("Error fetching staff list:", error);
    return [];
  }
};

const $$Astro$1 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    text,
    href,
    type = "button",
    class: className = ""
  } = Astro2.props;
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`button ${className}`, "class")}>${text}</a>` : renderTemplate`<button${addAttribute(type, "type")}${addAttribute(`button ${className}`, "class")}>${text}</button>`}`;
}, "C:/Users/digga/pt-pet-supply/src/components/ui/Button.astro", undefined);

const getStoreStatus = async () => {
  const storeHours = await officialStoreHours();
  if (!storeHours) {
    return "Store Hours Unavailable";
  }
  const now = /* @__PURE__ */ new Date();
  const currentDay = now.toLocaleString("en-US", {
    timeZone: "America/New_York",
    weekday: "long"
  }).toLowerCase();
  const currentTime = now.toLocaleString("en-US", {
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
  const [currentHour, currentMinute] = currentTime.split(":").map(Number);
  const todayHours = storeHours[currentDay];
  if (todayHours) {
    const [openHour, openMinute] = todayHours.open.split(":").map(Number);
    const [closeHour, closeMinute] = todayHours.close.split(":").map(Number);
    const currentTimeInMinutes = currentHour * 60 + currentMinute;
    const openTimeInMinutes = openHour * 60 + openMinute;
    const closeTimeInMinutes = closeHour * 60 + closeMinute;
    if (currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes < closeTimeInMinutes) {
      const closeTimeFormatted = `${closeHour % 12 || 12}PM`;
      return `Open until ${closeTimeFormatted}`;
    } else {
      let nextOpenDay = currentDay;
      let nextOpenTime = null;
      while (!nextOpenTime) {
        const nextDayIndex = (Object.keys(storeHours).indexOf(nextOpenDay) + 1) % 7;
        nextOpenDay = Object.keys(storeHours)[nextDayIndex];
        const nextDayHours = storeHours[nextOpenDay];
        if (nextDayHours) {
          nextOpenTime = nextDayHours.open;
        }
      }
      const [nextOpenHour] = nextOpenTime.split(":").map(Number);
      const nextOpenTimeFormatted = `${nextOpenHour % 12 || 12}AM`;
      return `Closed until ${nextOpenTimeFormatted}`;
    }
  }
  return null;
};
const $$OpenStatus = createComponent(async ($$result, $$props, $$slots) => {
  const storeStatus = await getStoreStatus();
  return renderTemplate`${maybeRenderHead()}<div class="z-10"> ${renderComponent($$result, "Button", $$Button, { "text": storeStatus, "href": "/#contact", "onClick": () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), "class": "flex justify-center font-bold tracking-tighter sm:tracking-tight md:tracking-base text-xs min-[380px]:text-sm min-[520px]:text-lg min-[400px]:mt-0.5 min-[520px]:-mt-0.5 min-[575px]:-mt-1 min-[580px]:text-xl min-[600px]:-mt-0.5 sm:-mt-1 text-[#FFC66D] text-outline" })} </div>`;
}, "C:/Users/digga/pt-pet-supply/src/components/sections/OpenStatus.astro", undefined);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Links = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<!-- Main container with Alpine.js logic -->", '<div x-data="{ open: false }" class="relative overflow-x-hidden" data-astro-cid-z43pmzdo> <div class="hidden xl:flex font-bold lg:text-xl lg:space-x-4" data-astro-cid-z43pmzdo> ', " ", " ", " ", ' </div> <!-- Hamburger Icon for mobile screens --> <div class="xl:hidden" data-astro-cid-z43pmzdo> <button @click="open = true" class="p-2 sm:p-4" data-astro-cid-z43pmzdo> <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-z43pmzdo> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-z43pmzdo></path> </svg> </button> </div> <!-- Sidebar controlled by Alpine.js --> <div x-show="open" x-cloak x-transition:enter="transition ease-out duration-300" x-transition:enter-start="translate-x-full" x-transition:enter-end="translate-x-0" x-transition:leave="transition ease-in duration-300" x-transition:leave-start="translate-x-0" x-transition:leave-end="translate-x-full" @click="open = false" class="fixed top-0 right-0 w-3/5 md:w-1/3 max-w-full h-full bg-white shadow-lg transform z-50 xl:w-64 overflow-hidden text-xl" data-astro-cid-z43pmzdo> <img src="/src/assets/sidebar.webp" alt="Barn panelling" class="absolute h-[100vh] w-[100vw] object-cover z-[-10] overflow-hidden" data-astro-cid-z43pmzdo> <div class="p-2" data-astro-cid-z43pmzdo> <!-- Close button --> <button class="bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold p-1 rounded-xl" data-astro-cid-z43pmzdo> <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-z43pmzdo> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-z43pmzdo></path> </svg> </button> <!-- Sidebar Buttons --> <div class="mt-8 pl-4 flex flex-col items-center text-center space-y-4" data-astro-cid-z43pmzdo> ', " ", " ", " ", ' </div> </div> </div> <!-- Backdrop for mobile --> <div x-show="open" x-cloak x-transition.opacity @click="open = false" class="fixed inset-0 bg-black opacity-50 z-40" data-astro-cid-z43pmzdo></div> </div> <script src="//unpkg.com/alpinejs" defer><\/script> '])), maybeRenderHead(), renderComponent($$result, "Button", $$Button, { "text": "Products", "href": "/#products", "class": "xl:pl-1 2xl:pl-3 no-underline", "data-astro-cid-z43pmzdo": true, "data-astro-transition-scope": renderTransition($$result, "yti3jwms") }), renderComponent($$result, "Button", $$Button, { "text": "Pet Grooming", "href": "/#grooming", "class": "xl:pl-1 2xl:pl-3 no-underline", "data-astro-prefetch": true, "data-astro-cid-z43pmzdo": true, "data-astro-transition-scope": renderTransition($$result, "grir6wv3") }), renderComponent($$result, "Button", $$Button, { "text": "Our Pack", "href": "/#staff", "class": "xl:pl-1 2xl:pl-3 no-underline", "data-astro-cid-z43pmzdo": true, "data-astro-transition-scope": renderTransition($$result, "3imvwqe4") }), renderComponent($$result, "Button", $$Button, { "text": "Blog", "href": "/blog", "class": "xl:pl-1 2xl:pl-3 no-underline", "data-astro-cid-z43pmzdo": true, "data-astro-transition-scope": renderTransition($$result, "vs2e74yc") }), renderComponent($$result, "Button", $$Button, { "text": "Products", "href": "/#products", "class": "bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold w-[80%] pl-4 p-2 rounded-xl drop-shadow-2xl no-underline", "data-astro-cid-z43pmzdo": true, "data-astro-transition-scope": renderTransition($$result, "rii7rehi") }), renderComponent($$result, "Button", $$Button, { "text": "Pet Grooming", "href": "/#grooming", "class": "bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold w-[80%] pl-4 p-2 rounded-xl drop-shadow-2xl no-underline", "data-astro-prefetch": true, "data-astro-cid-z43pmzdo": true, "data-astro-transition-scope": renderTransition($$result, "we2rll6o") }), renderComponent($$result, "Button", $$Button, { "text": "Our Pack", "href": "/#staff", "class": "bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold w-[80%] pl-4 p-2 rounded-xl drop-shadow-2xl no-underline", "data-astro-cid-z43pmzdo": true, "data-astro-transition-scope": renderTransition($$result, "7hnck2re") }), renderComponent($$result, "Button", $$Button, { "text": "Blog", "href": "/blog", "class": "bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold w-[80%] pl-4 p-2 rounded-xl drop-shadow-2xl no-underline", "data-astro-cid-z43pmzdo": true, "data-astro-transition-scope": renderTransition($$result, "wlhylrxr") }));
}, "C:/Users/digga/pt-pet-supply/src/components/sections/Links.astro", "self");

const phone = new Proxy({"src":"/_astro/phone.tdA5vD4S.webp","width":398,"height":710,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/digga/pt-pet-supply/src/assets/phone.webp";
							}
							
							return target[name];
						}
					});

const mapPin = new Proxy({"src":"/_astro/map-pin.PYQqxQAl.webp","width":426,"height":679,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/digga/pt-pet-supply/src/assets/map-pin.webp";
							}
							
							return target[name];
						}
					});

const openSignBackground = new Proxy({"src":"/_astro/openclose.D-k2Zckf.webp","width":691,"height":230,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/digga/pt-pet-supply/src/assets/openclose.webp";
							}
							
							return target[name];
						}
					});

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const phoneNumber = officialStoreInfo().phoneNumber;
  const address = officialStoreInfo().address;
  return renderTemplate`${maybeRenderHead()}<section class="flex w-full min-h-[58px] min-[500px]:min-h-[66px] min-[580px]:min-h-[72px] font-bold mx-auto px-4 xl:px-12 min-[1650px]:px-32 2xl:px-18 pt-2 xl:pt-6 pb-1 xl:pb-5 bg-[#FFC66D]"> <div class="my-auto flex-1 flex items-start xl:items-center text-sm font-bold min-[520px]:text-lg xl:pl-0 pt-1 -mr-10 2xl:ml-16"> <!-- Phone Section --> <a${addAttribute(`tel:${phoneNumber}`, "href")} class="pl-2 min-[450px]:pl-3 pr-1 sm:pr-2 sm:mt-0.5 min-[520px]:mt-1 xl:-mt-1 h-[16px] sm:h-[20px] xl:h-[32px]"> <img${addAttribute(phone.src, "src")} alt="phone" class="h-full"> </a> <a${addAttribute(`tel:${phoneNumber}`, "href")} class="max-w-[125px] sm:text-lg"> <span class="xl:hidden">Call</span> <span class="hidden xl:inline">${phoneNumber}</span> </a> <!-- Address Section --> <a href="https://www.google.com/maps/place/P+T+Pet+Supply/@42.0714526,-71.8662691,17z/data=!4m6!3m5!1s0x89e41ed7234c136d:0xe30644b400274c0!8m2!3d42.0714526!4d-71.8662691!16s%2Fg%2F1tt1tq6m?entry=ttu&g_ep=EgoyMDI0MTAxNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" class="flex items-center sm:text-lg"> <img${addAttribute(mapPin.src, "src")} alt="GPS Pin" class="-mt-1 pl-2 sm:pl-3.5 pr-1 sm:pr-2 h-[16px] sm:h-[20px] xl:h-[34px]"> <span class="xl:hidden">Visit</span> <span class="hidden xl:inline">${address}</span> </a> </div> <!-- Center Open/Close Sign --> <div class="relative m-auto mx-14 flex-1 flex justify-center items-center"> ${renderComponent($$result, "OpenStatus", $$OpenStatus, { "class": "absolute inset-0 flex justify-center items-center" })} <img${addAttribute(openSignBackground.src, "src")} alt="Open/Close Sign Background" class="absolute top-0 left-1/2 transform -translate-x-1/2 pb-1 -mt-2 min-[370px]:-mt-2.5 min-[430px]:-mt-3 min-[470px]:-mt-3.5 min-[500px]:-mt-4 min-[575px]:-mt-5 sm:-mt-6" style="width: 195px; height: auto;"> </div> <!-- Links Section --> <div class="flex-1 flex justify-end items-center -ml-10 2xl:mr-16"> ${renderComponent($$result, "Links", $$Links, { "class": "flex" })} </div> </section>`;
}, "C:/Users/digga/pt-pet-supply/src/components/sections/Navbar.astro", undefined);

const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const fetchAnnouncements = async () => {
    try {
      const baseUrl = "http://localhost:4321";
      const response = await fetch(`${baseUrl}/api/announcements`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      if (data && data.length > 0) {
        const { content: content2, status: status2 } = data[0];
        return { content: content2, status: status2 };
      } else {
        console.warn("No announcements found.");
        return { content: "", status: "inactive" };
      }
    } catch (error) {
      console.error("Failed to fetch announcements:", error);
      return { content: "", status: "inactive" };
    }
  };
  const { content, status } = await fetchAnnouncements();
  const activeAnnouncement = status === "active";
  const body = content;
  return renderTemplate`<!-- A small invisible trigger element above the header to control sticky behavior -->${maybeRenderHead()}<div id="trigger" style="height: 1px; background-color: #7F0201;"></div> <header id="header" class="transition-all duration-300"> ${renderComponent($$result, "Announcements", $$Announcements, { "id": "announcements", "activeAnnouncement": activeAnnouncement, "body": body })} ${renderComponent($$result, "Navbar", $$Navbar, { "id": "navbar" })} </header> <!-- Spacer to preserve space when header becomes sticky --> <div id="spacer" class="hidden"></div> `;
}, "C:/Users/digga/pt-pet-supply/src/components/sections/Header.astro", undefined);

const $$Astro = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/digga/pt-pet-supply/node_modules/astro/components/ViewTransitions.astro", undefined);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const name = officialStoreInfo().name;
  const address = officialStoreInfo().address;
  return renderTemplate`${maybeRenderHead()}<section class="text-center py-6 bg-[#FFC66D] -mt-1"> <div class="font-bold tracking-widest"> <h2 class="text-lg md:text-xl">${name}</h2> <h2 class="text-sm md:text-md">${address} MA</h2> <h3 class="text-sm md:text-md">Serving The Community Since 2004</h3> </div> <h3 class="text-widest text-base pt-4 md:text-md"> <a href="https://www.jdegaetano.com" target="_blank">Designed and Developed by Justin DeGaetano</a> </h3> <h3>
Fonts made by <a href="http://www.webfontfree.com" target="_blank">Web Free Fonts</a> is licensed by <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank">CC 4.0 BY</a> </h3> </section>`;
}, "C:/Users/digga/pt-pet-supply/src/components/sections/Footer.astro", undefined);

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = undefined;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_GOOGLE_API_KEY": "AIzaSyDR7XmG8MGJdivvMFt3H7FPQBw1D04XkVI", "PUBLIC_SITE_URL": "ptpet.net", "SITE": undefined, "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(`The collection ${JSON.stringify(collection)} does not exist.`);
      return undefined;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return undefined;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return undefined;
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/test-blog-post1.md": () => import('./test-blog-post1_BgKTO70x.mjs'),"/src/content/blog/test-blog-post10.md": () => import('./test-blog-post10_DBC2SzOY.mjs'),"/src/content/blog/test-blog-post11.md": () => import('./test-blog-post11_LKsjbrAC.mjs'),"/src/content/blog/test-blog-post2.md": () => import('./test-blog-post2_CYV7gG4H.mjs'),"/src/content/blog/test-blog-post3.md": () => import('./test-blog-post3_CVcjidiE.mjs'),"/src/content/blog/test-blog-post4.md": () => import('./test-blog-post4_J2354BV8.mjs'),"/src/content/blog/test-blog-post5.md": () => import('./test-blog-post5_CCMS6QQg.mjs'),"/src/content/blog/test-blog-post6.md": () => import('./test-blog-post6_D1z1DOWx.mjs'),"/src/content/blog/test-blog-post7.md": () => import('./test-blog-post7_BvOU-Aqe.mjs'),"/src/content/blog/test-blog-post8.md": () => import('./test-blog-post8_BNXEG_Sh.mjs'),"/src/content/blog/test-blog-post9.md": () => import('./test-blog-post9_Bnt9To1C.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"test-blog-post1":"/src/content/blog/test-blog-post1.md","test-blog-post10":"/src/content/blog/test-blog-post10.md","test-blog-post2":"/src/content/blog/test-blog-post2.md","test-blog-post11":"/src/content/blog/test-blog-post11.md","test-blog-post3":"/src/content/blog/test-blog-post3.md","test-blog-post4":"/src/content/blog/test-blog-post4.md","test-blog-post5":"/src/content/blog/test-blog-post5.md","test-blog-post6":"/src/content/blog/test-blog-post6.md","test-blog-post7":"/src/content/blog/test-blog-post7.md","test-blog-post8":"/src/content/blog/test-blog-post8.md","test-blog-post9":"/src/content/blog/test-blog-post9.md"}}};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/test-blog-post1.md": () => import('./test-blog-post1_6R9CvHeM.mjs'),"/src/content/blog/test-blog-post10.md": () => import('./test-blog-post10_CGw61xdL.mjs'),"/src/content/blog/test-blog-post11.md": () => import('./test-blog-post11_B2tLtPvM.mjs'),"/src/content/blog/test-blog-post2.md": () => import('./test-blog-post2_Dpuf-GL8.mjs'),"/src/content/blog/test-blog-post3.md": () => import('./test-blog-post3_K6RcWFSd.mjs'),"/src/content/blog/test-blog-post4.md": () => import('./test-blog-post4_DMtvqNec.mjs'),"/src/content/blog/test-blog-post5.md": () => import('./test-blog-post5_BjZYstBI.mjs'),"/src/content/blog/test-blog-post6.md": () => import('./test-blog-post6_Bffybghm.mjs'),"/src/content/blog/test-blog-post7.md": () => import('./test-blog-post7_Cfkd0oXv.mjs'),"/src/content/blog/test-blog-post8.md": () => import('./test-blog-post8_CzFH0DtD.mjs'),"/src/content/blog/test-blog-post9.md": () => import('./test-blog-post9_k8oJMmuC.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
});

export { $$Header as $, $$ViewTransitions as a, $$Footer as b, getCollection as c, $$Button as d, officialStaffList as e, getEntry as g, officialStoreHours as o };
