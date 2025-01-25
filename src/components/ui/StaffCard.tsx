interface StaffCardProps {
  fullName: string;
  role: string[];
  bio: string;
  imageSrc: string;
};

import React from 'react';

const StaffCard: React.FC<StaffCardProps> = ({ fullName, role, bio, imageSrc }) => {
  return (
    <div className="px-4 py-10">
      <img
        className="w-[65%] h-auto object-cover mx-auto mb-4 rounded-xl"
        src={imageSrc}
        alt={`${fullName}'s photo`}
      />
      <h4 className="text-xl font-bold text-[#F2F2F2]">{fullName}</h4>
      <h5 className="text-md font-semibold text-[#FFC66D]">{role.map((r) => r).join(", ")}</h5>
      <p className="px-6 pb-2 mt-2 text-[#D3D3D3] tracking-normal line-clamp-4">{bio}</p>
    </div>
  );
};

export default StaffCard;