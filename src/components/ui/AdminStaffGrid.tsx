import { useState } from 'react';
import type { StaffProps } from '../../constants/storeInfo';

interface AdminStaffGridProps {
  staffMembers: StaffProps[];
}

const AdminStaffGrid = ({ staffMembers }: AdminStaffGridProps) => {
  const [staffList, setStaffList] = useState<StaffProps[]>(staffMembers);
  const [editMode, setEditMode] = useState(false);

  const updateStaff = (index: number) => {
    if (staffList[index]) {
      const staff = staffList[index];
      const newName = prompt('Enter full name:', staff.fullName);
      const newRoles = prompt(
        'Enter role(s) (comma-separated):',
        staff.role.join(', ')
      );
      const newBio = prompt('Enter bio:', staff.bio);
      const newImage = prompt('Enter profile image URL:', staff.imageSrc);

      if (
        newName &&
        newRoles &&
        newBio &&
        newImage
      ) {
        const updatedStaff = [...staffList];
        updatedStaff[index] = {
          ...staff,
          fullName: newName,
          role: newRoles.split(',').map((role) => role.trim()),
          bio: newBio,
          imageSrc: newImage,
        };
        setStaffList(updatedStaff);
      }
    }
  };

  const deleteStaff = (index: number) => {
    if (staffList[index]) {
      const updatedStaff = staffList.filter((_, i) => i !== index);
      setStaffList(updatedStaff);
    }
  };

  const addStaff = () => {
    const name = prompt('Enter full name:');
    const roles = prompt('Enter roles (comma-separated):');
    const bio = prompt('Enter bio:');
    const imageSrc = prompt(
      'Enter profile image URL:',
      'https://via.placeholder.com/150'
    );

    if (
      name &&
      roles &&
      bio &&
      imageSrc
    ) {
      const newStaff = {
        staff_id: (staffList.length + 1).toString(),
        fullName: name,
        role: roles.split(',').map((role) => role.trim()),
        bio,
        imageSrc,
      };
      setStaffList([...staffList, newStaff]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Staff List</h1>
      {staffList.map((staff, index) => (
        <div
          key={staff.staff_id}
          className="max-w-[600px] bg-gray-100 shadow-md rounded-md p-5 border-gray-300 border-2"
        >
          {editMode === true ? (
            <>
              <div className='grid grid-cols-2 gap-6'>
                <div>
                  <img
                    src={staff.imageSrc}
                    alt={`${staff.fullName}'s photo`}
                    className="w-full h-auto object-cover mb-2 rounded-xl"
                  />
                </div>
                <div className='mt-6'>
                  <input
                    id="image_src"
                    type="file"
                    accept=".jpg, .jpeg, .png, .gif"
                    className="w-full h-8 text-md"
                    onChange={(e) => {
                      const target = e.target as HTMLInputElement;
                      if (target.type === 'file' && target.files) {
                        if (target.files.length > 0) {
                          const updatedStaff = [...staffList];
                          updatedStaff[index] = {
                            ...updatedStaff[index],
                            imageSrc: URL.createObjectURL(target.files[0]),
                          };
                          setStaffList(updatedStaff);
                        }
                      }
                    }}
                  />
                  <div className='mt-6 space-y-3'>
                    Name:
                    <input
                      id="full-name"
                      value={staff.fullName}
                      className="text-lg border border-gray-300 ml-1 pl-2"
                      onChange={(e) => {
                        const updatedStaff = [...staffList];
                        updatedStaff[index] = {
                          ...updatedStaff[index],
                          fullName: e.target.value,
                        };
                        setStaffList(updatedStaff);
                      }}
                    />
                    Role:
                    <input
                      id="role"
                      value={staff.role.join(', ')}
                      className="text-lg border border-gray-300 ml-2 pl-2"
                      onChange={(e) => {
                        const updatedStaff = [...staffList];
                        updatedStaff[index] = {
                          ...updatedStaff[index],
                          role: e.target.value.split(',').map((role) => role.trim()),
                        };
                        setStaffList(updatedStaff);
                      }}
                    />
                  </div>
                </div>
              </div>
              <h3 className='mt-2'>Bio:</h3>
              <textarea
                id="bio"
                value={staff.bio}
                className="w-full min-h-[150px] text-md border border-gray-300 px-2 py-1"
                onChange={(e) => {
                  const updatedStaff = [...staffList];
                  updatedStaff[index] = {
                    ...updatedStaff[index],
                    bio: e.target.value,
                  };
                  setStaffList(updatedStaff);
                }}
              />
              <div className='flex items-center justify-center mt-3'>
                <button
                  className="bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold rounded-3xl ml-2 px-3 py-1"
                  onClick={() => {
                    updateStaff(index);
                  }}
                >
                  Update
                </button>
                <button
                  className="bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold rounded-3xl ml-2 px-3 py-1"
                  onClick={() => {
                    setEditMode(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <div className='flex items-center justify-center'>
              <span className='text-lg tracking-wider font-bold'>{staff.fullName}</span>
              <button
                className="bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold rounded-3xl ml-4 px-3 py-1"
                onClick={(e) => {
                  const updatedStaffList = [...staffList];
                  updatedStaffList[index] = {
                    ...updatedStaffList[index],
                    fullName: (e.currentTarget as HTMLInputElement).value,
                  };
                  setEditMode(true);
                }}
              >
                Edit
              </button>
              <button
                className="bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold rounded-3xl ml-2 px-3 py-1"
                onClick={() => {
                  deleteStaff(index);
                  updateStaff(index);
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
      {staffList.length > 0 && (
        <div className="flex justify-center mt-8">
          <button
            className="w-40 px-4 py-2 bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold rounded-3xl"
            onClick={addStaff}
          >
            Add Staff Member
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminStaffGrid;