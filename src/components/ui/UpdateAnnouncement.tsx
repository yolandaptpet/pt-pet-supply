import { useState, useEffect } from "react";

const UpdateAnnouncement = () => {
  const [id, setId] = useState<string | null>(null);
  const [status, setStatus] = useState<"active" | "inactive">("inactive");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isConfirmation, setIsConfirmation] = useState(false);
  const [confirmInput, setConfirmInput] = useState("");

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

  const handleStatusChange = (newStatus: "active" | "inactive") => {
    setStatus(newStatus);
    if (newStatus === "inactive") {
      setContent("");
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
        body: JSON.stringify({ id, content: status === "active" ? content : "", status }),
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

  const handleConfirmInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    return <p className="ml-4 pb-10 text-bold text-xl">Loading announcements editor...</p>;
  }

  return (
    <div className="mx-4 pt-4 pb-16">
      <h1 className="font-bold text-2xl pb-2">Announcements Banner</h1>
      <div>
        <div className="mb-2 text-xl">
          <label className="mr-4">
            <input
              type="radio"
              name="status"
              value="inactive"
              checked={status === "inactive"}
              onChange={() => handleStatusChange("inactive")}
            />{" "}
            Off
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="active"
              checked={status === "active"}
              onChange={() => handleStatusChange("active")}
            />{" "}
            On
          </label>
        </div>

        <div>
          <textarea
            id="announcementInput"
            placeholder="Enter text here; Minimum of 60 characters, Maximum of 105."
            disabled={status === "inactive"}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            minLength={60}
            maxLength={105}
            className="p-1 w-4/5 lg:w-full h-24 border rounded-md"
          />
        </div>
      </div>
      <button
        onClick={confirmSave}
        className="mt-2 px-4 py-2 bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold rounded-3xl"
      >
        Save
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-6 w-1/3">
            <h2 className="text-lg font-semibold mb-4">
              {isConfirmation ? "Confirm Submission" : "Message"}
            </h2>
            <p className="mb-4">{modalMessage}</p>
            {isConfirmation ? (
              <div>
                <input
                  type="text"
                  value={confirmInput}
                  onChange={handleConfirmInputChange}
                  placeholder="Type 'yes' to confirm"
                  className="w-full p-2 border rounded mb-4"
                />
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleConfirm}
                    disabled={confirmInput.toLowerCase() !== "yes"}
                    className={`px-4 py-2 ${
                      confirmInput.toLowerCase() === "yes"
                        ? "bg-[#7F0201] text-white"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    } rounded-3xl mr-2`}
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      setConfirmInput("");
                    }}
                    className="px-4 py-2 bg-gray-300 text-black rounded-3xl"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-black rounded-3xl"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateAnnouncement;