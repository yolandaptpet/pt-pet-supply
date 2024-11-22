import React, { useState } from 'react';

interface StoreHours {
  [day: string]: {
    open: string;
    close: string;
  };
}

interface HoursProps {
  storeHours: StoreHours;
}

const UpdateHours: React.FC<HoursProps> = ({ storeHours }) => {
  const [selectedHours, setSelectedHours] = useState<'default' | 'custom'>(
    'default'
  );

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedHours(event.target.value as 'default' | 'custom');
  };

  return (
    <div className="mx-4 pb-5">
      <h1 className="font-bold text-2xl">Update Hours of Operation</h1>
      <div className="max-w-lg my-5">
        <div className="mb-4 text-lg">
          <label className="mr-4">
            <input
              type="radio"
              name="hours-toggle"
              value="default"
              checked={selectedHours === 'default'}
              onChange={handleToggleChange}
            />
            Normal Hours
          </label>
          <label>
            <input
              type="radio"
              name="hours-toggle"
              value="custom"
              checked={selectedHours === 'custom'}
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
                    value={hours.open}
                    className="w-full p-1 box-border disabled:bg-gray-200 disabled:cursor-not-allowed"
                    disabled={selectedHours === 'default'}
                  />
                </td>
                <td className="p-2 border border-gray-300">
                  <input
                    type="time"
                    value={hours.close}
                    className="w-full p-1 box-border disabled:bg-gray-200 disabled:cursor-not-allowed"
                    disabled={selectedHours === 'default'}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="mt-2 px-4 py-2 bg-[#7F0201] hover:bg-[#A52A2A] text-white rounded-3xl">
          Save
        </button>
      </div>
    </div>
  );
};

export default UpdateHours;
