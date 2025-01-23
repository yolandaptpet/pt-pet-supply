import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_CXfaa4O1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DKADQWoF.mjs';
import { jsx, jsxs } from 'react/jsx-runtime.js';
import { useState, useEffect } from 'react';
import { o as officialStoreHours, c as getCollection } from '../chunks/_astro_content_DVOxf79D.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const UpdateAnnouncement = () => {
  const [id, setId] = useState(null);
  const [status, setStatus] = useState("inactive");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isConfirmation, setIsConfirmation] = useState(false);
  const [confirmInput, setConfirmInput] = useState("");
  const [charCount, setCharCount] = useState(0);
  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const response = await fetch("/api/announcements");
        if (response.ok) {
          const data = await response.json();
          const currentAnnouncement = data[0];
          if (currentAnnouncement) {
            setId(currentAnnouncement._id);
            setStatus(currentAnnouncement.status);
            setContent(currentAnnouncement.status === "active" ? currentAnnouncement.content : "");
          }
        } else {
          console.error("Failed to fetch announcements");
        }
      } catch (error) {
        console.error("Error fetching announcements:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAnnouncement();
  }, []);
  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    if (newStatus === "inactive") {
      setContent("");
      setCharCount(0);
    }
  };
  const handleSave = async () => {
    if (!id) {
      setModalMessage("Announcement ID is missing.");
      setIsModalOpen(true);
      setIsConfirmation(false);
      return;
    }
    if (status === "active" && (content.length < 60 || content.length > 105)) {
      setModalMessage("Content must be between 60 and 105 characters.");
      setIsModalOpen(true);
      setIsConfirmation(false);
      return;
    }
    try {
      const response = await fetch("/api/announcements", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, content: status === "active" ? content : "", status })
      });
      if (!response.ok) {
        setModalMessage("Failed to update announcement.");
        setIsModalOpen(true);
        setIsConfirmation(false);
      } else {
        setModalMessage("Announcement updated successfully!");
        setIsModalOpen(true);
        setIsConfirmation(false);
      }
    } catch (error) {
      console.error("Error updating announcement:", error);
      setModalMessage("An error occurred. Please try again.");
      setIsModalOpen(true);
      setIsConfirmation(false);
    }
  };
  const confirmSave = () => {
    setIsModalOpen(true);
    setModalMessage("Type 'yes' to confirm the updated Announcements Banner.");
    setIsConfirmation(true);
  };
  const handleConfirmInputChange = (e) => {
    setConfirmInput(e.target.value);
  };
  const handleConfirm = () => {
    if (confirmInput.toLowerCase() === "yes") {
      handleSave();
      setIsModalOpen(false);
      setConfirmInput("");
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsx("p", { className: "ml-4 pb-10 text-2xl", children: "Loading announcements editor..." });
  }
  return /* @__PURE__ */ jsxs("div", { className: "mx-4 pt-4 pb-16", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-bold text-2xl pb-2", children: "Announcements Banner" }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-2 text-xl", children: [
        /* @__PURE__ */ jsxs("label", { className: "mr-4", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "radio",
              name: "status",
              value: "inactive",
              checked: status === "inactive",
              onChange: () => handleStatusChange("inactive")
            }
          ),
          " ",
          "Off"
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "radio",
              name: "status",
              value: "active",
              checked: status === "active",
              onChange: () => handleStatusChange("active")
            }
          ),
          " ",
          "On"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "textarea",
          {
            id: "announcementInput",
            placeholder: "Enter text here; Minimum of 60 characters, Maximum of 105.",
            disabled: status === "inactive",
            value: content,
            onChange: (e) => {
              setContent(e.target.value);
              setCharCount(e.target.value.length);
            },
            minLength: 60,
            maxLength: 105,
            className: "p-1 w-4/5 lg:w-full h-24 border rounded-md"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
          "Characters: ",
          charCount,
          "/105"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: confirmSave,
        className: "mt-2 px-4 py-2 bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold rounded-3xl",
        children: "Save"
      }
    ),
    isModalOpen && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg p-6 w-2/3 md:w-1/3", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold mb-4", children: isConfirmation ? "Confirm Submission" : "Message" }),
      /* @__PURE__ */ jsx("p", { className: "mb-4", children: modalMessage }),
      isConfirmation ? /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            value: confirmInput,
            onChange: handleConfirmInputChange,
            placeholder: "Type 'yes' to confirm",
            className: "w-full p-2 border rounded mb-4"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex justify-end", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleConfirm,
              disabled: confirmInput.toLowerCase() !== "yes",
              className: `px-4 py-2 ${confirmInput.toLowerCase() === "yes" ? "bg-[#7F0201] text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"} rounded-3xl mr-2`,
              children: "Confirm"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                setIsModalOpen(false);
                setConfirmInput("");
              },
              className: "px-4 py-2 bg-gray-300 text-black rounded-3xl",
              children: "Cancel"
            }
          )
        ] })
      ] }) : /* @__PURE__ */ jsx("div", { className: "mt-4 flex justify-end", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setIsModalOpen(false),
          className: "px-4 py-2 bg-gray-300 text-black rounded-3xl",
          children: "Close"
        }
      ) })
    ] }) })
  ] });
};

const UpdateHours = ({ storeHours }) => {
  const [id, setId] = useState(null);
  const [selectedHours, setSelectedHours] = useState(
    "normal"
  );
  const [normalHours, setNormalHours] = useState();
  const [adjustedHours, setAdjustedHours] = useState();
  const [loading, setLoading] = useState(true);
  const [editableHours, setEditableHours] = useState(storeHours);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isConfirmation, setIsConfirmation] = useState(false);
  const [confirmInput, setConfirmInput] = useState("");
  useEffect(() => {
    const fetchActiveHours = async () => {
      try {
        const response = await fetch("/api/store-info");
        if (!response.ok) throw new Error("Failed to fetch active hours");
        const data = await response.json();
        const databaseInfo = data[0];
        const storeInfo = databaseInfo.info;
        if (storeInfo) {
          setId(databaseInfo._id);
          setNormalHours(storeInfo.storeHours.normal);
          setAdjustedHours(storeInfo.storeHours.adjusted);
          if (storeInfo.storeHours.activeHours === "normal") {
            setSelectedHours("normal");
          } else if (storeInfo.storeHours.activeHours === "adjusted") {
            setSelectedHours("adjusted");
          }
        }
      } catch (error) {
        setModalMessage("Error fetching active hours.");
        setIsModalOpen(true);
      } finally {
        setLoading(false);
      }
    };
    fetchActiveHours();
  }, []);
  const handleSave = async () => {
    console.log("ID:", id);
    console.log("Editable Hours:", editableHours);
    if (!id || !editableHours) return;
    if (!id) {
      setModalMessage("Store Info ID is missing.");
      setIsModalOpen(true);
      setIsConfirmation(false);
      return;
    }
    try {
      const response = await fetch("/api/store-info", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, activeHours: selectedHours, adjusted: editableHours })
      });
      if (!response.ok) {
        setModalMessage("Failed to update store hours.");
        setIsModalOpen(true);
        setIsConfirmation(false);
      } else {
        setModalMessage("Store hours updated successfully!");
        setIsModalOpen(true);
        setIsConfirmation(false);
      }
    } catch (error) {
      console.error("Error updating store hours:", error);
      setModalMessage("An error occurred. Please try again.");
      setIsModalOpen(true);
      setIsConfirmation(false);
    }
  };
  const confirmSave = () => {
    setIsModalOpen(true);
    setModalMessage("Type 'yes' to confirm the updated Hours of Operation.");
    setIsConfirmation(true);
  };
  const handleTimeChange = (day, values) => {
    setEditableHours((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        ...values
      }
    }));
  };
  const handleToggleChange = (event) => {
    setSelectedHours(event.target.value);
    if (event.target.value === "normal" && normalHours !== undefined) {
      setEditableHours(normalHours);
    } else if (event.target.value === "adjusted" && adjustedHours !== undefined) {
      setEditableHours(adjustedHours);
    }
  };
  const handleConfirmInputChange = (e) => {
    setConfirmInput(e.target.value);
  };
  const handleConfirm = () => {
    if (confirmInput.toLowerCase() === "yes") {
      handleSave();
      setIsModalOpen(false);
      setConfirmInput("");
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsx("p", { className: "ml-4 pb-10 text-2xl", children: "Loading store hours editor..." });
  }
  return /* @__PURE__ */ jsxs("div", { className: "mx-4 pb-5", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-bold text-2xl", children: "Update Hours of Operation" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-lg my-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4 text-lg", children: [
        /* @__PURE__ */ jsxs("label", { className: "mr-4", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "radio",
              name: "hours-toggle",
              value: "normal",
              checked: selectedHours === "normal",
              onChange: handleToggleChange
            }
          ),
          "Normal Hours"
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "radio",
              name: "hours-toggle",
              value: "adjusted",
              checked: selectedHours === "adjusted",
              onChange: handleToggleChange
            }
          ),
          "Adjusted Hours"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("table", { id: "hours-table", className: "w-full border-collapse text-lg", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "p-2 border border-gray-300 text-left", children: "Day" }),
          /* @__PURE__ */ jsx("th", { className: "p-2 border border-gray-300 text-left", children: "Opening Time" }),
          /* @__PURE__ */ jsx("th", { className: "p-2 border border-gray-300 text-left", children: "Closing Time" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: Object.entries(storeHours).map(([day]) => /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { className: "p-2 border border-gray-300", children: day }),
          /* @__PURE__ */ jsx("td", { className: "p-2 border border-gray-300", children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "time",
              value: editableHours[day].open,
              className: "w-full p-1 box-border disabled:bg-gray-200 disabled:cursor-not-allowed",
              disabled: selectedHours === "normal",
              onChange: (e) => handleTimeChange(day, { open: e.target.value })
            }
          ) }),
          /* @__PURE__ */ jsx("td", { className: "p-2 border border-gray-300", children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "time",
              value: editableHours[day].close,
              className: "w-full p-1 box-border disabled:bg-gray-200 disabled:cursor-not-allowed",
              disabled: selectedHours === "normal",
              onChange: (e) => handleTimeChange(day, { close: e.target.value })
            }
          ) })
        ] }, day)) })
      ] }),
      /* @__PURE__ */ jsx("button", { onClick: confirmSave, className: "mt-4 px-4 py-2 bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold rounded-3xl", children: "Save" }),
      isModalOpen && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg p-6 w-2/3 md:w-1/3", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold mb-4", children: isConfirmation ? "Confirm Submission" : "Message" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: modalMessage }),
        isConfirmation ? /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value: confirmInput,
              onChange: handleConfirmInputChange,
              placeholder: "Type 'yes' to confirm",
              className: "w-full p-2 border rounded mb-4"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 flex justify-end", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleConfirm,
                disabled: confirmInput.toLowerCase() !== "yes",
                className: `px-4 py-2 ${confirmInput.toLowerCase() === "yes" ? "bg-[#7F0201] text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"} rounded-3xl mr-2`,
                children: "Confirm"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  setIsModalOpen(false);
                  setConfirmInput("");
                },
                className: "px-4 py-2 bg-gray-300 text-black rounded-3xl",
                children: "Cancel"
              }
            )
          ] })
        ] }) : /* @__PURE__ */ jsx("div", { className: "mt-4 flex justify-end", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsModalOpen(false),
            className: "px-4 py-2 bg-gray-300 text-black rounded-3xl",
            children: "Close"
          }
        ) })
      ] }) })
    ] })
  ] });
};

const $$Admin = createComponent(async ($$result, $$props, $$slots) => {
  const backArrow = "../../../images/arrow.svg";
  const storeHours = await officialStoreHours();
  const allTags = await getCollection("blog").then((collection) => {
    const tags = collection.flatMap((entry) => entry.data.tags);
    return Array.from(new Set(tags));
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "admin", "class": "h-screen", "data-astro-cid-2zp6q64z": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pt-4 pl-4 flex justify-between items-start drop-shadow-lg" data-astro-cid-2zp6q64z> <button class="flex items-center bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold py-1.5 px-3 rounded-xl no-underline" data-astro-prefetch onclick="window.location.href = '/'" data-astro-cid-2zp6q64z> <img${addAttribute(backArrow, "src")} alt="Back Arrow" class="w-4 my-0" style="filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(360deg) brightness(100%) contrast(100%);" data-astro-cid-2zp6q64z>
&nbsp; Store Page
</button> </div> <div class="xl:mx-10 2xl:mx-20" data-astro-cid-2zp6q64z> <div class="flex justify-center font-bold text-md pl-4 pt-4 pb-8 drop-shadow-xl tracking-wide" data-astro-cid-2zp6q64z> <div class="flex items-center text-center bg-[#F9DCB1] p-2 rounded-3xl" data-astro-cid-2zp6q64z> <div class="text-xl" data-astro-cid-2zp6q64z>🚨</div> <p class="px-2 text-sm sm:text-base" data-astro-cid-2zp6q64z>
For clarification on any of the website's functionality,
<a href="https://docs.samsnug.net" target="_blank" class="max-md:block text-[#7F0201] underline" data-astro-cid-2zp6q64z>consult the documentation</a> </p> <div class="text-xl" data-astro-cid-2zp6q64z>🚨</div> </div> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-4" data-astro-cid-2zp6q64z> <div class="lg:col-span-1" data-astro-cid-2zp6q64z> ${renderComponent($$result2, "UpdateAnnouncement", UpdateAnnouncement, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/UpdateAnnouncement", "client:component-export": "default", "data-astro-cid-2zp6q64z": true })} ${renderComponent($$result2, "UpdateHours", UpdateHours, { "client:load": true, "storeHours": storeHours ?? {}, "client:component-hydration": "load", "client:component-path": "C:/Users/digga/pt-pet-supply/src/components/ui/UpdateHours.tsx", "client:component-export": "default", "data-astro-cid-2zp6q64z": true })} </div> ${renderComponent($$result2, "DraftPost", null, { "allTags": allTags, "client:only": "react", "client:component-hydration": "only", "data-astro-cid-2zp6q64z": true, "client:component-path": "C:/Users/digga/pt-pet-supply/src/components/ui/DraftPost.tsx", "client:component-export": "default" })} </div> <!-- <div class="flex flex-col items-center pb-4 mx-auto">
      <h1 class="font-bold text-2xl pb-2 mx-4">Update Staff Bios</h1>
      <button
        id="staff-toggle-button"
        class="w-36 mb-4 mx-4 px-4 py-2 bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold rounded-3xl"
      >
        Show Staff List
      </button>

      <div id="staff-list-section" class="hidden w-full mx-4">
        <AdminStaffGrid client:load staffMembers={staffMembers} />
      </div>
    </div> --> </div> ` })}  `;
}, "C:/Users/digga/pt-pet-supply/src/pages/admin.astro", undefined);

const $$file = "C:/Users/digga/pt-pet-supply/src/pages/admin.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Admin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
