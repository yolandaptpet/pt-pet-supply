import React, { useState, useEffect } from 'react';

interface StoreHours {
  [day: string]: {
    open: string;
    close: string;
  };
}

interface UpdateHoursProps {
  storeHours: StoreHours;
}

const UpdateHours: React.FC<UpdateHoursProps> = ({ storeHours }) => {
  const [id, setId] = useState<string | null>(null);
  const [selectedHours, setSelectedHours] = useState<'normal' | 'adjusted'>(
    'normal'
  );
  const [normalHours, setNormalHours] = useState<StoreHours>();
  const [adjustedHours, setAdjustedHours] = useState<StoreHours>();
  const [loading, setLoading] = useState(true);
  const [editableHours, setEditableHours] = useState(storeHours);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isConfirmation, setIsConfirmation] = useState(false);
  const [confirmInput, setConfirmInput] = useState("");
  
  useEffect (() => {
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
        body: JSON.stringify({ id, activeHours: selectedHours, adjusted: editableHours }),
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

  const handleTimeChange = (day: string, values: { open?: string; close?: string }) => {
    setEditableHours((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        ...values,
      },
    }));
  };  

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedHours(event.target.value as 'normal' | 'adjusted');

    if (event.target.value === 'normal' && normalHours !== undefined) {
      setEditableHours(normalHours);
    } else if (event.target.value === 'adjusted' && adjustedHours !== undefined) {
      setEditableHours(adjustedHours);
    }
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
    return <p className="ml-4 pb-10 text-2xl">Loading store hours editor...</p>;
  }

  return (
    <div className="mx-4 pb-5">
      <h1 className="font-bold text-2xl">Update Hours of Operation</h1>
      <div className="max-w-lg my-5">
        <div className="mb-4 text-lg">
          <label className="mr-4">
            <input
              type="radio"
              name="hours-toggle"
              value="normal"
              checked={selectedHours === 'normal'}
              onChange={handleToggleChange}
            />
            Normal Hours
          </label>
          <label>
            <input
              type="radio"
              name="hours-toggle"
              value="adjusted"
              checked={selectedHours === 'adjusted'}
              onChange={handleToggleChange}
            />
            Adjusted Hours
          </label>
        </div>

        <table id="hours-table" className="w-full border-collapse text-lg">
          <thead>
            <tr>
              <th className="p-2 border border-gray-300 text-left">Day</th>
              <th className="p-2 border border-gray-300 text-left">
                Opening Time
              </th>
              <th className="p-2 border border-gray-300 text-left">
                Closing Time
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(storeHours).map(([day, hours]) => (
              <tr key={day}>
                <td className="p-2 border border-gray-300">{day}</td>
                <td className="p-2 border border-gray-300">
                  <input
                    type="time"
                    value={editableHours[day].open}
                    className="w-full p-1 box-border disabled:bg-gray-200 disabled:cursor-not-allowed"
                    disabled={selectedHours === 'normal'}
                    onChange={(e) => handleTimeChange(day, { open: e.target.value })}
                  />
                </td>
                <td className="p-2 border border-gray-300">
                  <input
                    type="time"
                    value={editableHours[day].close}
                    className="w-full p-1 box-border disabled:bg-gray-200 disabled:cursor-not-allowed"
                    disabled={selectedHours === 'normal'}
                    onChange={(e) => handleTimeChange(day, { close: e.target.value })}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button  onClick={confirmSave} className="mt-4 px-4 py-2 bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold rounded-3xl">
          Save
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
            <div className="bg-white rounded-lg p-6 w-2/3 md:w-1/3">
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
    </div>
  );
};

export default UpdateHours;