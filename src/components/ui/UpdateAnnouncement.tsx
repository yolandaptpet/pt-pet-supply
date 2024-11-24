import React from 'react';

const UpdateAnnouncement = () => {
  return (
    <div className="mx-4 pt-4 pb-16">
    <h1 className="font-bold text-2xl pb-2">Announcements Banner</h1>
    <div>
      <div className="mb-2 text-xl">
        <label className="mr-4">
          <input type="radio" name="toggle" value="off" checked /> Off
        </label>
        <label>
          <input type="radio" name="toggle" value="on" /> On
        </label>
      </div>

      <div>
        <textarea
          id="toggledInput"
          placeholder="Enter text here; Minimum of 60 characters, Maximum of 105."
          disabled
          minLength={60}
          maxLength={60}
          className="p-1 disabled:bg-gray-200 disabled:cursor-not-allowed w-4/5 lg:w-full h-24"
        ></textarea>
      </div>
    </div>
    <button
      className="mt-2 px-4 py-2 bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold rounded-3xl"
    >
      Save
    </button>
  </div>
  )
}

export default UpdateAnnouncement