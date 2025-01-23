import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, g as createAstro, b as renderComponent, j as renderTransition, h as defineScriptVars } from '../chunks/astro/server_CXfaa4O1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DKADQWoF.mjs';
import 'clsx';
/* empty css                                 */
import { jsx, jsxs, Fragment } from 'react/jsx-runtime.js';
import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { c as getCollection, d as $$Button, e as officialStaffList, o as officialStoreHours } from '../chunks/_astro_content_DVOxf79D.mjs';
/* empty css                                  */
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import MobileDetect from 'mobile-detect';
import { z } from 'zod';
import imageCompression from 'browser-image-compression';
import { FaQuestionCircle, FaUpload, FaImage, FaTimes } from 'react-icons/fa';
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro();
const $$Socials = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Socials;
  const { bgColor, hoverColor } = Astro2.props;
  const socialPlatforms = ["facebook", "x", "instagram", "email"];
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-center space-x-1" data-astro-cid-fg4z72tz> ${socialPlatforms.map((platform, index) => {
    let href = "";
    switch (platform) {
      case "x":
        href = "https://x.com/pt_pet";
        break;
      case "email":
        href = "mailto:yolanda@ptpet.net";
        break;
      default:
        href = `https://www.${platform}.com/ptpetsupply`;
    }
    return renderTemplate`<a${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`inline-flex items-center justify-center p-1 bg-[#${bgColor}] text-white text-xl font-bold tracking-wider rounded-xl drop-shadow-2xl hover:bg-[${hoverColor}] focus:outline-none focus:ring-2 focus:ring-gray-300 opacity-0 z-10`, "class")}${addAttribute(`view-transition-name: social-icon-${index}; animation: fade-in 0.9s ${index * 0.7}s forwards;`, "style")} data-astro-cid-fg4z72tz> <img${addAttribute(`src/assets/${platform}-logo.png`, "src")}${addAttribute(`${platform.charAt(0).toUpperCase() + platform.slice(1)} Logo`, "alt")} class="w-6 h-6 rounded-full" data-astro-cid-fg4z72tz> </a>`;
  })} </div>  `;
}, "C:/Users/digga/pt-pet-supply/src/components/ui/Socials.astro", undefined);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro();
const $$ExternalLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ExternalLinks;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<section class="flex"> <div class="relative top-9 md:top-11 flex flex-col items-center justify-center z-10"> <h3 class="text-2xl md:text-3xl xl:text-4xl custom-font text-white underline">\nCustomer Resources:\n</h3> <a id="astro-loyalty-link" href="https://secure.astroloyalty.com/members.php?ld=xZzugnkcBMFfSCrQA%2F4%3D" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center text-3xl xl:text-4xl pt-1.5 tracking-wider custom-font link-underline z-10">\nAstro Loyalty\n</a> </div> </section> <script type="module">\n  document.addEventListener("DOMContentLoaded", () => {\n    const link = document.getElementById("astro-loyalty-link");\n\n    if (link) {\n      link.addEventListener("click", (e) => {\n        if ("startViewTransition" in document) {\n          e.preventDefault();\n          document.startViewTransition(() => {\n            window.location.href = link.href;\n          });\n        }\n      });\n    }\n  });\n<\/script>'])), maybeRenderHead());
}, "C:/Users/digga/pt-pet-supply/src/components/sections/ExternalLinks.astro", undefined);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="relative mx-auto flex flex-col items-center min-h-[400px] max-w-none"> <img src="/src/assets/brass-hero-top.webp" alt="Brass fixture section divider" class="absolute top-6 object-cover h-1/4 md:h-1/3 xl:h-2/5 2xl:h-1/2 w-auto mx-auto"> <img src="src/assets/logo.webp" alt="PT Pet Supply logo" class="absolute object-contain h-[255px] md:h-[300px] xl:h-[350px] 2xl:h-[440px] w-auto pt-2 drop-shadow-2xl z-10"> <a href="https://www.google.com/maps/place/P+T+Pet+Supply/@42.0714526,-71.8662691,17z/data=!4m6!3m5!1s0x89e41ed7234c136d:0xe30644b400274c0!8m2!3d42.0714526!4d-71.8662691!16s%2Fg%2F1tt1tq6m?entry=ttu&g_ep=EgoyMDI0MTAxNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" class="absolute top-60 md:top-70 xl:top-78 2xl:top-104"> <img src="src/assets/address-sign.webp" alt="Address sign" class="object-contain h-[55px] md:h-[70px] xl:h-[80px] 2xl:h-[105px] w-auto drop-shadow-2xl -z-20"> </a> <div class="flex flex-col justify-center items-center"> <div class="chalkboard flex flex-col items-center"> <img src="/src/assets/horizontal-chalkboard.webp" alt="Chalkboard" class="hidden md:block h-auto w-[500px] xl:w-[600px] 2xl:w-[700px] absolute -bottom-56 xl:-bottom-78 2xl:-bottom-120 mr-12 xl:mr-16"> <img src="/src/assets/vertical-chalkboard.webp" alt="Chalkboard" class="block md:hidden w-[230px] absolute -bottom-68 -mx-5 mr-7"> </div> <div class="absolute top-74 md:top-84 xl:top-100 2xl:top-124"> ${renderComponent($$result, "ExternalLinks", $$ExternalLinks, {})} <div class="pt-27 md:pt-13 xl:pt-16 2xl:pt-22"> ${renderComponent($$result, "Socials", $$Socials, { "hoverColor": "#A52A2A" })} </div> </div> </div> <img src="/src/assets/mainecoon.webp" alt="Maine Coon" class="absolute -bottom-14 xl:-bottom-32 2xl:-bottom-64 left-0 -ml-24 min-[380px]:-ml-16 min-[550px]:-ml-8 min-[610px]:-ml-4 min-[670px]:ml-2 md:-ml-28 min-[800px]:-ml-14 lg:ml-10 xl:ml-30 2xl:ml-24 min-[1650px]:ml-36 min-[1800px]:ml-48 min-[2000px]:ml-74 min-[320px]:h-[330px] min-[475px]:h-[370px] md:h-[480px] xl:h-[600px] drop-shadow-2xl w-auto max-h-[700px] object-contain -mb-48 md:-mb-80"> <img src="/src/assets/husky.webp" alt="Siberian Husky" class="absolute -bottom-14 xl:-bottom-32 2xl:-bottom-64 right-0 -mr-28 min-[380px]:-mr-20 min-[550px]:-mr-12 min-[610px]:-mr-6 min-[670px]:-mr-0 md:-mr-32 min-[800px]:-mr-20 lg:mr-4 xl:mr-30 2xl:mr-20 min-[1650px]:mr-32 min-[1800px]:mr-44 min-[2000px]:mr-70 min-[320px]:h-[330px] min-[475px]:h-[370px] md:h-[480px] xl:h-[600px] drop-shadow-2xl w-auto max-h-[700px] object-contain -mb-48 md:-mb-80"> <img src="/src/assets/landscape.webp" alt="Background landscape" class="absolute inset-0 left-1/2 transform -translate-x-1/2 w-full h-full xl:h-[450px] 2xl:h-[570px] object-cover z-[-2]"> <img src="/src/assets/fence.png" alt="Background picket fence" class="absolute bottom-14 2xl:-bottom-4 left-1/2 transform -translate-x-1/2 w-full h-[63%] xl:h-[69%] 2xl:h-[95%] max-w-none object-cover -mb-28 md:-mb-36 xl:-mb-48 2xl:-mb-72 z-[-1]"> </section>`;
}, "C:/Users/digga/pt-pet-supply/src/components/sections/Hero.astro", undefined);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about" class="min-[1536px]:mt-32 mx-10 sm:mx-14 md:mx-28 lg:mx-64 xl:mx-80 2xl:mx-96 min-[1700px]:mx-120 min-[1900px]:mx-144 lg:my-10 pt-72 xl:pt-96 2xl:pt-120 pl-2 pb-8 text-md md:text-base lg:text-large"> <p class="text-[#452B1F]">
At PT Pet Supply, we've been dedicated to providing healthy, trustworthy
    products for pets for over 20 years. Our passion-driven business began with
    a simple vision: to help pet owners give their animals the best care. This
    love for animals was further deepened when we started volunteering at
    Siberian Husky Rescue in 2000.
<br> <br>
Today, we're proud to offer not only quality products but also personalized grooming
    services and expert advice from our knowledgeable and friendly staff. We're committed
    to helping you make informed choices for your pet's health and happiness.
<br> <br>
Thank you for choosing us as your trusted partner in your pet's well-being. We
    look forward to serving you and your furry companions for many more years to
    come!
</p> </section>`;
}, "C:/Users/digga/pt-pet-supply/src/components/sections/About.astro", undefined);

const Modal = ({ review, onClose }) => {
  useEffect(() => {
    const element = document.querySelector("#modal");
    if (element && document.startViewTransition) {
      document.startViewTransition(() => {
        element.animate([{ transform: "scale(0.9)", opacity: 0 }, { transform: "scale(1)", opacity: 1 }], {
          duration: 300,
          easing: "ease-in-out"
        });
      });
    }
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      id: "modal",
      className: "fixed inset-0 bg-gray-500 bg-opacity-50 z-50 flex justify-center items-center",
      "aria-modal": "true",
      role: "dialog",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "relative z-60 w-[320px] min-[500px]:w-[420px] md:w-[510px] lg:w-[510px] h-auto py-10 flex flex-col rounded-3xl bg-gradient-to-br from-[#f9dcb1] to-[#ffc76dd0] drop-shadow-2xl",
          style: { backdropFilter: "blur(35px)" },
          children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center px-6 max-[500px]:mt-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-[#ffffffc9] px-3.5 pt-2 pb-1 mb-3 w-fit text-2xl rounded-xl drop-shadow-md", children: [
              /* @__PURE__ */ jsxs("span", { className: "font-semibold tracking-tighter", children: [
                review.author.split(" ")[0],
                "  ",
                review.author.split(" ")[1]?.[0].toUpperCase(),
                "."
              ] }),
              /* @__PURE__ */ jsx("span", { className: "ml-2 text-yellow-500", children: "★".repeat(review.rating) })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[#452B1F] mt-1.5 mx-4 text-lg", children: review.text }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: onClose,
                className: "absolute top-4 left-4 p-1 bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold rounded-xl",
                "aria-label": "Close modal",
                children: /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "w-8 h-8",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M6 18L18 6M6 6l12 12"
                      }
                    )
                  }
                )
              }
            )
          ] })
        },
        review.id
      )
    }
  );
};
const Reviews = ({ businessId, apiKey }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedReview, setSelectedReview] = useState(null);
  const [debouncedBusinessId] = useDebounce(businessId, 500);
  useEffect(() => {
    const fetchReviews = async () => {
      if (typeof window === "undefined" || !window.google) {
        setError("Google Maps API not loaded");
        setLoading(false);
        return;
      }
      try {
        const service = new google.maps.places.PlacesService(document.createElement("div"));
        service.getDetails(
          {
            placeId: businessId,
            fields: ["reviews"]
          },
          (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && place?.reviews) {
              const filteredReviews = place.reviews.filter((review) => (review.rating ?? 0) >= 4).map((review) => ({
                id: review.time.toString(),
                author: review.author_name,
                rating: review.rating ?? 0,
                text: review.text ?? ""
              })).slice(0, 3);
              setReviews(filteredReviews);
            } else {
              setError("No reviews available");
            }
            setLoading(false);
          }
        );
      } catch (err) {
        setError("Failed to fetch reviews");
        setLoading(false);
      }
    };
    fetchReviews();
  }, [businessId, apiKey, debouncedBusinessId]);
  const handleModalOpen = (review) => {
    document.body.style.overflow = "hidden";
    setSelectedReview(review);
  };
  const handleModalClose = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setSelectedReview(null);
      });
    } else {
      setSelectedReview(null);
    }
    document.body.style.overflow = "auto";
  };
  if (loading) return /* @__PURE__ */ jsx("p", { children: "Loading..." });
  if (error) return /* @__PURE__ */ jsx("p", { children: error });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    selectedReview && /* @__PURE__ */ jsx(Modal, { review: selectedReview, onClose: handleModalClose }),
    /* @__PURE__ */ jsx("section", { className: "space-y-4 lg:space-y-0 lg:space-x-6 lg:flex mb-8", children: reviews.map((review) => /* @__PURE__ */ jsxs(
      "div",
      {
        onClick: () => handleModalOpen(review),
        className: "relative w-[300px] min-[500px]:w-[348px] md:w-[445px] lg:w-[285px] xl:w-[320px] h-[150px] flex-grow flex items-center justify-between rounded-3xl bg-gradient-to-br from-[#f9dcb157] to-[#ffc76d81] drop-shadow-2xl cursor-pointer",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-5 -left-2", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "src/assets/review-icon.svg",
              alt: "Review author photo",
              className: "w-[55px] h-auto rounded-2xl p-1.5 bg-gradient-to-tl from-[#7F0201] via-[#A52A2A] to-[#FFC66D]"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "ml-12 px-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center text-xl", children: [
              /* @__PURE__ */ jsxs("span", { className: "font-semibold tracking-tighter", children: [
                review.author.split(" ")[0],
                "  ",
                review.author.split(" ")[1]?.[0].toUpperCase(),
                "."
              ] }),
              /* @__PURE__ */ jsx("span", { className: "ml-2 text-yellow-500", children: "★".repeat(review.rating) })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[#452B1F] max-h-16 mt-1.5 tracking-tighter line-clamp-3", children: review.text })
          ] })
        ]
      },
      review.id
    )) })
  ] });
};

const $$Astro$2 = createAstro();
const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Testimonials;
  const businessId = "ChIJbRNMI9ce5IkRwHQCQEtkMA4";
  const { apiKey } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col xl:flex-row xl:mx-24 justify-center items-center pt-10"> ${renderComponent($$result, "Reviews", Reviews, { "businessId": businessId, "apiKey": apiKey, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/digga/pt-pet-supply/src/components/ui/Reviews", "client:component-export": "default" })} </div> <div class="flex flex-col items-center pb-16"> <h3 class="text-xl font-bold tracking-widest">Find More Reviews on:</h3> <div class="flex items-center space-x-2 mt-2"> <a href="https://www.facebook.com/ptpetsupply/reviews" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-3 py-1.5 bg-[#7F0201] text-white text-xl font-bold tracking-wider rounded-xl drop-shadow-2xl hover:bg-[#A52A2A] focus:outline-none focus:ring-2 focus:ring-gray-300"> <img src="src/assets/facebook-logo.png" alt="Facebook Logo" class="w-5 h-5 mr-2">
Facebook
</a> <a href="https://www.google.com/search?q=pt+pet+supply&rlz=1C1CHBF_enUS987US987&oq=pt+pet+supply&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIYCAEQLhgnGK8BGMcBGMkDGIAEGIoFGI4FMgYIAhAjGCcyCAgDEAAYFhgeMggIBBAAGBYYHjIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDQ1NjhqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8#lrd=0x89e41ed7234c136d:0xe30644b400274c0,1,,,," target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-3 py-1.5 bg-[#7F0201] text-white text-xl font-bold tracking-wider rounded-xl drop-shadow-2xl hover:bg-[#A52A2A] focus:outline-none focus:ring-2 focus:ring-gray-300"> <img src="src/assets/google-logo.png" alt="Google Logo" class="w-5 h-5 mr-2">
Google
</a> </div> </div>`;
}, "C:/Users/digga/pt-pet-supply/src/components/sections/Testimonials.astro", undefined);

const $$Buffer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative mx-auto flex flex-col items-center h-[210px] sm:h-[280px] md:h-[330px] lg:h-[472px]"> <img src="/src/assets/animals.webp" alt="Many animals in a row" class="absolute inset-0 left-1/2 transform -translate-x-1/2 w-full h-full object-cover z-[-2]"> </section>`;
}, "C:/Users/digga/pt-pet-supply/src/components/ui/Buffer.astro", undefined);

const $$Products = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="products" class="md:mx-12 lg:mx-36 xl:mx-48 2xl:mx-64 min-[1700px]:mx-80 min-[1900px]:mx-110 -mt-36 pt-32 xl:pt-44"> <img src="/src/assets/products.webp" alt="Products logo" class="h-[130px] md:h-[160px] lg:h-[215px] w-auto mx-auto my-6 mt-16"> <p class="mx-10 sm:mx-16 md:mx-28 text-[#452B1F]">
Tortor vulputate netus nam sagittis, imperdiet pharetra porttitor taciti
    maecenas. Metus posuere consectetur non fermentum lacus eget tempor feugiat
    aenean. Lorem feugiat integer purus nullam penatibus faucibus semper
    ridiculus dui. Dolor blandit laoreet nisi iaculis curae; primis posuere
    tortor venenatis? Elit praesent tempor dictum fusce amet duis dictumst
    laoreet tellus. Montes dignissim nam massa quam auctor nisl torquent congue
    sit. Duis sodales volutpat turpis nostra morbi mus porttitor proin montes?
    Scelerisque dis elit nostra accumsan viverra auctor dui nascetur congue. Et
    porttitor eget mi nullam habitant fames odio sociis sed. Nunc velit dictum
    odio posuere hac senectus posuere lectus nullam?
</p> <div class="mx-5 py-10"> <ul class="grid grid-cols-2 gap-4 text-center text-[#452B1F]"> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> <li>Vestibulum auctor dapibus neque.</li> <li>Nunc dignissim risus id metus.</li> <li>Cras ornare tristique elit.</li> <li>Vivamus vestibulum ntulla nec ante.</li> <li>Praesent placerat risus quis eros.</li> <li>Fusce pellentesque suscipit nibh.</li> <li>Integer vitae libero ac risus egestas placerat.</li> <li>Vestibulum commodo felis quis tortor.</li> <li>Ut aliquam sollicitudin leo.</li> <li>Cras iaculis ultricies nulla.</li> <li>Donec quis dui at dolor tempor interdum.</li> <li>Vivamus vestibulum ntulla nec ante.</li> </ul> </div> <div class="mx-6"> <img src="/src/assets/divider.webp" alt="Brass fixture section divider" class="pt-3 my-4 lg:my-12 h-[30%] w-auto mx-auto transform -scale-x-100"> </div> </section>`;
}, "C:/Users/digga/pt-pet-supply/src/components/sections/Products.astro", undefined);

const $$Grooming = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="grooming" class="md:mx-12 lg:mx-36 xl:mx-48 2xl:mx-64 min-[1700px]:mx-80 min-[1900px]:mx-110 min-h-[700px] -mt-36 mb-32 min-[1077px]:mb-48 min-[1298px]:mb-28 pt-44"> <img src="/src/assets/pet-grooming.webp" alt="Products logo" class="h-[150px] md:h-[180px] lg:h-[235px] w-auto mx-auto mb-6"> <p class="mx-10 sm:mx-16 md:mx-28 text-[#452B1F]">
Grooming services typically include a range of treatments to keep pets clean
    and healthy. <span class="font-bold">Full service baths</span>
involve washing and conditioning the pet&#39;s coat, followed by drying.
<span class="font-bold">Haircuts</span> are offered for pets needing a trim or
    specific grooming style. <span class="font-bold">Tidy-ups</span>
focus on lighter grooming, such as trimming around the face, paws, or tail. <span class="font-bold">Nail trims</span> or <span class="font-bold">dremmeling</span> are done to maintain healthy nails,
    with dremmeling being a smoother, more rounded alternative to traditional clipping.
    These services help maintain a pet’s hygiene, appearance, and comfort.
</p> <p class="mx-16 sm:mx-36 md:mx-48 text-[#452B1F] text-center font-bold mt-6 lg:mb-36">
Prices vary depending on the breed and size of the dog.
<br> <br>
Cat nail trims and tidy-ups are also available.
</p> </section>`;
}, "C:/Users/digga/pt-pet-supply/src/components/sections/Grooming.astro", undefined);

const $$Astro$1 = createAstro();
const $$BlogPostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPostCard;
  const { post } = Astro2.props;
  const formatDate = (date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}\u2022${day}\u2022${year}`;
  };
  const postDescription = post ? post.data.description : "";
  const postTitle = post ? post.data.title : "";
  const postDate = post ? formatDate(post.data.publishDate) : "";
  return renderTemplate`${maybeRenderHead()}<section class="flex-col-1 my-auto ml-6"> <a${addAttribute(`/blog/${post?.slug}/`, "href")}> <div class="relative w-[300px] min-h-[130px] sm:w-[410px] sm:h-[180px] md:w-[500px] 2xl:w-[600px] md:h-[170px] flex py-5 rounded-3xl bg-gradient-to-br from-[#f9dcb157] to-[#ffc76d81]"${addAttribute({ backdropFilter: "blur(35px)" }, "style")} onclick="window.location.href = \`/blog/\${post?.slug}/\`"> <div class="absolute top-6 -left-9 md:top-3 md:-left-5"> <img src="https://placehold.co/350x350/png" alt="Blog tag photo" class="w-[90px] 2xl:w-[115px] h-auto rounded-2xl"> </div> <div class="ml-14 md:ml-20 2xl:ml-24 px-4"> <div> <h1 class="font-bold text-xl">${postTitle}</h1> <h2 class="py-1 text-[#452B1F] flex-grow line-clamp-3 mb-2"> ${postDescription} </h2> </div> <p class="absolute bottom-1 right-4 font-bold text-[#7F0201]"> ${postDate} </p> </div> </div> </a> </section>`;
}, "C:/Users/digga/pt-pet-supply/src/components/ui/BlogPostCard.astro", undefined);

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime();
  });
  const uniquePosts = Array.from(new Set(sortedPosts.map((post) => post.slug))).map((slug) => sortedPosts.find((post) => post.slug === slug)).filter((post) => post !== undefined);
  const recentPosts = uniquePosts.slice(0, 3);
  return renderTemplate`${maybeRenderHead()}<section class="flex-col mx-10 px-4 my-8 lg:my-20 drop-shadow-2xl"> <div class="left col-1"> <img src="/src/assets/brass-sidebar.webp" alt="Brass sidebar" class="hidden min-[900px]:block absolute bottom-36 left-0 min-[900px]:-ml-4 lg:ml-0 min-[1150px]:ml-8 xl:ml-20 2xl:ml-32 min-[1700px]:ml-64 min-[1900px]:ml-80 h-[600px] lg:h-[750px] drop-shadow-2xl w-auto object-contain transform -scale-x-100"> </div> <div class="center col-1"> <img src="/src/assets/recent-blog-posts.webp" alt="Products logo" class="h-[150px] md:h-[180px] lg:h-[235px] w-auto mx-auto mb-6"> <div class="grid grid-cols-1 place-items-center gap-4 xl:flex-row xl:mx-24 justify-center items-center pb-10"> ${recentPosts.map((post) => renderTemplate`${renderComponent($$result, "BlogPostCard", $$BlogPostCard, { "post": post, "key": post.slug })}`)} </div> <div class="flex flex-1 justify-center font-bold text-xl lg:text-2xl tracking-wider"> ${renderComponent($$result, "Button", $$Button, { "text": "View More Posts", "href": "/blog", "class": "bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold py-2 px-4 mb-8 rounded-xl", "data-astro-prefetch": true, "data-astro-transition-scope": renderTransition($$result, "hdlr7ywv") })} </div> </div> <div class="right col-1"> <img src="/src/assets/brass-sidebar.webp" alt="Brass sidebar" class="hidden min-[900px]:block absolute bottom-36 right-0 min-[900px]:-mr-4 lg:mr-0 min-[1150px]:mr-8 xl:mr-20 2xl:mr-32 min-[1700px]:mr-64 min-[1900px]:mr-80 h-[600px] lg:h-[750px] drop-shadow-2xl w-auto object-contain"> </div> </section>`;
}, "C:/Users/digga/pt-pet-supply/src/components/sections/Blog.astro", "self");

const StaffCard = ({ fullName, role, bio, imageSrc }) => {
  return /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        className: "w-full h-auto object-cover mb-4 rounded",
        src: imageSrc,
        alt: `${fullName}'s photo`
      }
    ),
    /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-[#F2F2F2]", children: fullName }),
    /* @__PURE__ */ jsx("h5", { className: "text-md font-semibold text-[#FFC66D]", children: role.map((r) => r).join(", ") }),
    /* @__PURE__ */ jsx("p", { className: "px-6 pb-2 mt-2 text-[#D3D3D3]", children: bio })
  ] });
};

const StaffCarousel = ({ staffList }) => {
  const [staffMember, setStaffMember] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  let timeoutId;
  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const md = new MobileDetect(userAgent);
    setIsMobile(!!md.mobile());
  }, []);
  const previousStaffMember = () => {
    setStaffMember(
      (prev) => prev === 0 ? staffList.length - 1 : prev - 1
    );
    startPauseTimeout();
  };
  const nextStaffMember = () => {
    setStaffMember(
      (prev) => prev === staffList.length - 1 ? 0 : prev + 1
    );
    startPauseTimeout();
  };
  const goToStaffMember = (index) => {
    setStaffMember(index);
    startPauseTimeout();
  };
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };
  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };
  const handleSwipe = () => {
    if (touchStart - touchEnd > 50) {
      nextStaffMember();
    }
    if (touchStart - touchEnd < -50) {
      previousStaffMember();
    }
  };
  const startPauseTimeout = () => {
    clearTimeout(timeoutId);
    setIsPaused(true);
    timeoutId = setTimeout(() => setIsPaused(false), 3e4);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused) {
        nextStaffMember();
      }
    }, 1e4);
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [isPaused]);
  const handleMouseEnter = () => startPauseTimeout();
  const handleMouseLeave = () => setIsPaused(false);
  const handleIndexButtonClick = (index) => {
    goToStaffMember(index);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative max-w-4xl mx-auto",
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      children: [
        !isMobile && /* @__PURE__ */ jsx(
          ArrowBigLeft,
          {
            className: "absolute h-[50%] w-[15%] px-8 top-1/2 transform -translate-y-1/2 left-4 cursor-pointer z-10 -ml-48 bg-[#7F0201] bg-opacity-60 text-white text-outline-white rounded-3xl",
            style: { backdropFilter: "blur(35px)" },
            onMouseEnter: (e) => {
              e.currentTarget.style.width = "18%";
              e.currentTarget.style.transition = "all 0.2s ease-in-out";
            },
            onMouseLeave: (e) => {
              e.currentTarget.style.width = "15%";
              e.currentTarget.style.transition = "all 0.2s ease-in-out";
            },
            onClick: previousStaffMember
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden px-8", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex transition-transform duration-500",
            style: { transform: `translateX(-${staffMember * 100.35}%)` },
            children: staffList.map((staff, index) => /* @__PURE__ */ jsx(
              "div",
              {
                className: `flex-shrink-0 w-[70%] mx-2.5 ${index === staffMember ? "scale-100" : "scale-90"} ${index === 0 ? "ml-56 md:ml-28" : ""}`,
                style: {
                  transform: `translateX(${staffMember * 40}%)`,
                  transition: "transform 0.9s"
                },
                children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "md:w-full min-h-[400px] flex items-center justify-center rounded-3xl drop-shadow-xl bg-[#7F0201] bg-opacity-50",
                    style: { backdropFilter: "blur(35px)" },
                    children: /* @__PURE__ */ jsx(StaffCard, { ...staff })
                  }
                )
              },
              index
            ))
          }
        ) }),
        !isMobile && /* @__PURE__ */ jsx(
          ArrowBigRight,
          {
            className: "absolute h-[50%] w-[15%] px-8 top-1/2 transform -translate-y-1/2 right-4 cursor-pointer z-10 -mr-48 bg-[#7F0201] bg-opacity-60 text-white text-outline-white rounded-3xl",
            style: { backdropFilter: "blur(35px)" },
            onMouseEnter: (e) => {
              e.currentTarget.style.width = "18%";
              e.currentTarget.style.transition = "all 0.2s ease-in-out";
            },
            onMouseLeave: (e) => {
              e.currentTarget.style.width = "15%";
              e.currentTarget.style.transition = "all 0.2s ease-in-out";
            },
            onClick: nextStaffMember
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-4 space-x-2", children: staffList.map((_, index) => /* @__PURE__ */ jsx(
          "button",
          {
            className: `w-5 h-5 rounded-full ${index === staffMember ? "bg-[#7F0201]" : "bg-gray-400"}`,
            onClick: () => handleIndexButtonClick(index),
            "aria-label": `Go to staff member ${index + 1}`
          },
          index
        )) })
      ]
    }
  );
};

const $$Staff = createComponent(async ($$result, $$props, $$slots) => {
  const staffList = await officialStaffList();
  return renderTemplate`${maybeRenderHead()}<section id="staff" class="relative pb-10 tracking-wider text-center overflow-hidden -mt-48 mb-8 pt-56"> <img src="src/assets/panel.webp" alt="Wood paneling background" class="absolute z-[-2] bottom-0 w-full h-[85%] object-cover"> <h3 class="inline-block p-4 md:p-6 font-bold text-4xl tracking-widest bg-[#7F0201] bg-opacity-80 text-white text-outline-white rounded-3xl"${addAttribute({ backdropFilter: "blur(35px)" }, "style")}>
Meet Our Pack
</h3> <div class="flex justify-center py-3 md:py-5"> ${renderComponent($$result, "StaffCarousel", StaffCarousel, { "staffList": staffList, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/digga/pt-pet-supply/src/components/ui/StaffCarousel.tsx", "client:component-export": "default" })} </div> </section>`;
}, "C:/Users/digga/pt-pet-supply/src/components/sections/Staff.astro", undefined);

const StoreHours = ({ storeHours }) => {
  const convertTo12Hour = (time24) => {
    const [hours] = time24.split(":");
    let period = "AM";
    let hours12 = parseInt(hours, 10);
    if (hours12 >= 12) {
      period = "PM";
      if (hours12 > 12) {
        hours12 -= 12;
      }
    }
    if (hours12 === 0) {
      hours12 = 12;
    }
    return `${hours12}${period}`;
  };
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return /* @__PURE__ */ jsxs("div", { className: "lg:pt-6", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "/src/assets/store-hours.webp",
        alt: "Products logo",
        className: "h-[150px] md:h-[180px] lg:h-[235px] w-auto mx-auto mb-4"
      }
    ),
    storeHours && Object.entries(storeHours).map(([day, hours]) => /* @__PURE__ */ jsxs("div", { className: "flex text-lg font-bold md:text-xl justify-center tracking-wider md:tracking-widest text-[#452B1F]", children: [
      capitalizeFirstLetter(day),
      ": ",
      convertTo12Hour(hours.open),
      " to ",
      convertTo12Hour(hours.close)
    ] }, day))
  ] });
};

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required")
});
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [images, setImages] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files || []);
    setImages((prevImages) => [...prevImages, ...files]);
  };
  const handleImageDelete = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };
  const compressImages = async (files) => {
    const options = { maxSizeMB: 3, maxWidthOrHeight: 800 };
    const compressedImages = await Promise.all(
      files.map((file) => imageCompression(file, options))
    );
    const base64Images = await Promise.all(
      compressedImages.map(
        (file) => new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.readAsDataURL(file);
        })
      )
    );
    return base64Images;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      contactSchema.parse(formData);
      setIsSubmitting(true);
      setSuccessMessage(null);
      const base64Images = await compressImages(images);
      const emailData = {
        ...formData,
        images: base64Images
      };
      const response = await fetch("/api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(emailData)
      });
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      setFormData({ name: "", email: "", subject: "", message: "" });
      setImages([]);
      setErrors({});
      setSuccessMessage("Your message has been sent successfully!");
    } catch (err) {
      if (err instanceof z.ZodError) {
        setErrors(err.flatten().fieldErrors);
      } else {
        setSuccessMessage("An error occurred while sending your message. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center", children: [
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: handleSubmit,
        className: "flex flex-col items-center w-full max-w-lg px-4",
        children: [
          /* @__PURE__ */ jsx("label", { className: "block font-bold text-[#452B1F]", children: "Name:" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              name: "name",
              placeholder: "Enter your name...",
              value: formData.name,
              onChange: handleChange,
              disabled: isSubmitting,
              className: "w-4/5 md:w-2/3 p-1 border rounded text-center text-[#452B1F]"
            }
          ),
          errors.name && /* @__PURE__ */ jsx("span", { className: "text-red-500 animate-slide-in", children: errors.name.join(", ") }),
          /* @__PURE__ */ jsx("label", { className: "block font-bold pt-2 text-[#452B1F]", children: "Email:" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              name: "email",
              placeholder: "Enter your email...",
              value: formData.email,
              onChange: handleChange,
              disabled: isSubmitting,
              className: "w-4/5 md:w-2/3 p-1 border rounded text-center text-[#452B1F]"
            }
          ),
          errors.email && /* @__PURE__ */ jsx("span", { className: "text-red-500 animate-slide-in", children: errors.email.join(", ") }),
          /* @__PURE__ */ jsx("label", { className: "block font-bold pt-2 text-[#452B1F]", children: "Subject:" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              name: "subject",
              placeholder: "Enter a subject...",
              value: formData.subject,
              onChange: handleChange,
              disabled: isSubmitting,
              className: "w-4/5 md:w-2/3 p-1 border rounded text-center text-[#452B1F]"
            }
          ),
          errors.subject && /* @__PURE__ */ jsx("span", { className: "text-red-500 animate-slide-in", children: errors.subject.join(", ") }),
          /* @__PURE__ */ jsx("label", { className: "block font-bold pt-4 text-[#452B1F]", children: "Message:" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              name: "message",
              placeholder: "Enter your message...",
              value: formData.message,
              onChange: handleChange,
              disabled: isSubmitting,
              className: "w-full md:w-4/5 py-2 px-6 border rounded min-h-[15vh] text-[#452B1F]"
            }
          ),
          errors.message && /* @__PURE__ */ jsx("span", { className: "text-red-500 animate-slide-in", children: errors.message.join(", ") }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("label", { className: "block font-bold pt-4 text-[#452B1F]", children: "Attach Images:" }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "relative ml-1 mt-3 flex items-center",
                onMouseEnter: () => setShowTooltip(true),
                onMouseLeave: () => setShowTooltip(false),
                onClick: () => setShowTooltip(!showTooltip),
                children: [
                  /* @__PURE__ */ jsx(
                    FaQuestionCircle,
                    {
                      size: 20,
                      className: "text-gray-600 cursor-pointer hover:text-gray-800"
                    }
                  ),
                  showTooltip && /* @__PURE__ */ jsxs("p", { className: "absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-black text-white text-sm rounded p-2 shadow-lg", children: [
                    "Attaching images is optional, but can help assist us with addressing your pet's needs!",
                    /* @__PURE__ */ jsx("br", {}),
                    /* @__PURE__ */ jsx("br", {}),
                    "Maximum of 5 images."
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-4/5 mx-auto flex flex-col items-center drop-shadow-2xl", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "file-upload",
                type: "file",
                multiple: true,
                accept: "image/*",
                onChange: handleImageUpload,
                disabled: isSubmitting,
                className: "hidden"
              }
            ),
            /* @__PURE__ */ jsxs(
              "label",
              {
                htmlFor: "file-upload",
                className: "cursor-pointer flex items-center gap-2 bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold py-1 px-3 rounded-xl",
                children: [
                  /* @__PURE__ */ jsx(FaUpload, { size: 12 }),
                  /* @__PURE__ */ jsx("span", { children: "Upload Files" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-1 mb-4", children: images.map((_, index) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "relative flex items-center justify-center w-12 h-12 border rounded bg-gray-100",
              children: [
                /* @__PURE__ */ jsx(FaImage, { size: 30, className: "text-gray-400" }),
                /* @__PURE__ */ jsx(
                  FaTimes,
                  {
                    onClick: () => handleImageDelete(index),
                    className: "absolute top-0 right-0 text-red-500 cursor-pointer",
                    size: 20
                  }
                )
              ]
            },
            index
          )) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              disabled: isSubmitting,
              className: "bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold text-xl w-48 my-2 py-2.5 px-2 rounded-xl drop-shadow-2xl",
              children: isSubmitting ? "Sending..." : "Send Message"
            }
          )
        ]
      }
    ),
    successMessage && /* @__PURE__ */ jsx("p", { className: "text-green-500 mt-4", children: successMessage })
  ] });
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Map = createComponent(async ($$result, $$props, $$slots) => {
  const ADDRESS = "86 Worcester Rd, Webster, MA 01570";
  return renderTemplate(_a || (_a = __template(["", '<div id="map" class="w-[300px] min-[600px]:w-[400px] md:w-[300px] lg:w-[400px] h-[250px] md:h-[500px]"></div> <script>(function(){', '\n  async function initMap() {\n    console.log("initMap function executed");\n    const { Map } = await google.maps.importLibrary("maps");\n    console.log("Google Maps library imported");\n    const { Geocoder } = await google.maps.importLibrary("geocoding");\n    console.log("Geocoding library imported");\n    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");\n    console.log("AdvancedMarkerElement library imported");\n\n    const map = new Map(document.getElementById("map"), {\n      zoom: 17,\n      center: { lat: 0, lng: 0 },\n      mapId: "DEMO_MAP_ID",\n    });\n\n    const geocoder = new Geocoder();\n    try {\n      const results = await geocoder.geocode({ address: ADDRESS });\n      console.log("Geocoding Results:", results);\n\n      if (results.results.length > 0) {\n        const location = results.results[0].geometry.location;\n        map.setCenter(location);\n        new AdvancedMarkerElement({\n          map: map,\n          position: location,\n        });\n      } else {\n        throw new Error("No results found");\n      }\n    } catch (error) {\n      console.error("Geocode was not successful:", error);\n    }\n  }\n\n  if (typeof window !== "undefined") {\n    window.initMap = initMap;\n  }\n\n  document.addEventListener("astro:page-load", () => {\n    if (window.initMap) {\n      window.initMap();\n    }\n  });\n\n  if (!window.google || !window.google.maps) {\n    console.error("Google Maps library not loaded");\n    return;\n  }\n})();<\/script>'])), maybeRenderHead(), defineScriptVars({ ADDRESS }));
}, "C:/Users/digga/pt-pet-supply/src/components/ui/Map.astro", undefined);

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const { apiKey } = Astro2.props;
  const backArrow = "../../../images/arrow.svg";
  const storeHours = await officialStoreHours();
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="flex-row-reverse md:flex md:flex-1 justify-center pt-20 md:pt-6 md:px-6 xl:px-32 2xl:px-64 bg-[#FFC66D] min-h-[750px]"> <div class="relative flex-1 text-center my-auto"> <div class="relative mx-auto"> ${renderComponent($$result, "StoreHours", StoreHours, { "client:idle": true, "storeHours": storeHours, "client:component-hydration": "idle", "client:component-path": "C:/Users/digga/pt-pet-supply/src/components/ui/StoreHours", "client:component-export": "default" })} </div> <h3 class="font-bold text-xl md:text-3xl pt-12 tracking-widest">
Have Any Questions?
</h3> <h4 class="text-large md:text-xl pt-1.5 text-[#452B1F]">
Find out how we can help you!
</h4> <div class="flex flex-1 text-xl md:text-2xl pt-4 pb-12 md-pb-0 justify-center"> <button id="openModal" class="bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold py-2 px-4 rounded-xl drop-shadow-2xl">
Message Us
</button> </div> </div> <div class="flex flex-1 justify-center my-auto"> ${renderComponent($$result, "Map", $$Map, { "apiKey": apiKey })} </div> </section> <!-- Modal --> <div id="contactModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full opacity-0 pointer-events-none transition-opacity duration-300 ease-in-out"> <div class="relative top-32 sm:top-36 md:top-48 mx-auto md:py-6 p-5 max-w-[600px] w-[90%] shadow-lg rounded-xl bg-[#FFC66D] transform scale-95 transition-transform duration-300 ease-in-out"> <div class="relative mt-3 text-center"> <img src="/src/assets/message-us.webp" alt="Message Us sign" class="h-[150px] md:h-[180px] w-auto mx-auto mb-2"> <img src="/src/assets/brass-divider.webp" alt="Brass divider" class="h-[50px] md:h-[70px] w-auto mx-auto transform -scale-x-100 drop-shadow-2xl"> <div class="py-3"> ${renderComponent($$result, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/digga/pt-pet-supply/src/components/ui/ContactForm", "client:component-export": "default" })} </div> <div class="absolute -top-7 left-1 md:left-6 items-center"> <button id="closeModal" class="w-10 sm:w-12 h-10 sm:h-12 mt-6 bg-[#7F0201] text-white text-xl font-bold tracking-wider rounded-xl drop-shadow-2xl hover:bg-[#A52A2A] focus:outline-none focus:ring-2 focus:ring-gray-300"> <img${addAttribute(backArrow, "src")} alt="back arrow" class="w-6 sm:w-7 m-auto" style="filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(360deg) brightness(100%) contrast(100%); drop-shadow-2xl"> </button> </div> </div> </div> </div> `;
}, "C:/Users/digga/pt-pet-supply/src/components/sections/Contact.astro", undefined);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "home", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "About", $$About, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Testimonials", $$Testimonials, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Buffer", $$Buffer, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Products", $$Products, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Grooming", $$Grooming, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Staff", $$Staff, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Blog", $$Blog, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Contact", $$Contact, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "C:/Users/digga/pt-pet-supply/src/pages/index.astro", undefined);

const $$file = "C:/Users/digga/pt-pet-supply/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
