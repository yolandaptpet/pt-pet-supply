import React, { useState } from 'react';

import { officialStaffList } from '@/constants/StoreInfo.astro';

const StaffGrid = () => {
  const [staffList, setStaffList] = useState(officialStaffList);

  // Function to update a staff member
  const updateStaff = (index: number) => {
    const staff = staffList[index];
    const newName = prompt('Enter new full name:', staff.name);
    const newRole = prompt('Enter new role:', staff.role);
    const newBio = prompt('Enter new bio:', staff.bio);
    const newImage = prompt('Enter new profile image URL:', staff.imageSrc);

    if (newName && newRole && newBio && newImage) {
      const updatedStaff = [...staffList];
      updatedStaff[index] = {
        ...staff,
        name: newName,
        role: newRole,
        bio: newBio,
        imageSrc: newImage,
      };
      setStaffList(updatedStaff);
    }
  };

  // Function to delete a staff member
  const deleteStaff = (index: number) => {
    const updatedStaff = staffList.filter((_, i) => i !== index);
    setStaffList(updatedStaff);
  };

  // Function to add a new staff member
  const addStaff = () => {
    const name = prompt('Enter full name:');
    const role = prompt('Enter roles:');
    const bio = prompt('Enter bio:');
    const imageSrc = prompt(
      'Enter profile image URL:',
      'https://via.placeholder.com/150'
    );

    if (name && role && bio && imageSrc) {
      const newStaff = {
        id: staffList.length + 1,
        name,
        role,
        bio,
        imageSrc,
      };
      setStaffList([...staffList, newStaff]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Staff List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {staffList.map((staff, index) => (
          <div
            key={staff.id}
            className="bg-white shadow-md rounded-md p-4"
          >
            <img
              src={staff.imageSrc}
              alt={staff.name}
              className="rounded-md mb-3 object-cover w-full h-40"
            />
            <h3 className="text-lg font-semibold">{staff.name}</h3>
            <p className="text-sm text-gray-500">
              <strong>Roles:</strong> {staff.role}
            </p>
            <p className="text-sm text-gray-600 mb-4">{staff.bio}</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded mb-2 mr-1.5"
              onClick={() => updateStaff(index)}
            >
              Update
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded"
              onClick={() => deleteStaff(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <button
        className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold ml-4 py-2 px-4 rounded"
        onClick={addStaff}
      >
        Add Staff Member
      </button>
    </div>
  );
};

export default StaffGrid;
