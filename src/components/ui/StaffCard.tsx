interface StaffCardProps {
  fullName: string;
  role: string[];
  bio: string;
  imageSrc: string;
};

const StaffCard: React.FC<StaffCardProps> = ({ fullName, role, bio, imageSrc }) => {
  return (
    <div className="p-4">
      <img
        className="w-full h-auto object-cover mb-4 rounded"
        src={imageSrc}
        alt={`${fullName}'s photo`}
      />
      <h4 className="text-xl font-bold text-[#F2F2F2]">{fullName}</h4>
      <h5 className="text-md font-semibold text-[#FFC66D]">{role.map((r) => r).join(", ")}</h5>
      <p className="px-6 pb-2 mt-2 text-[#D3D3D3]">{bio}</p>
    </div>
  );
};

export default StaffCard;