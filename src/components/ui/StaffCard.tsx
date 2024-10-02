interface StaffCardProps {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
};

const StaffCard: React.FC<StaffCardProps> = ({ name, role, bio, imageSrc }) => {
  return (
    <div className="p-4">
      <img
        className="w-full h-auto object-cover mb-4 rounded"
        src={imageSrc}
        alt={`${name}'s photo`}
      />
      <h4 className="pl-6 text-xl font-bold text-[#F2F2F2]">{name}</h4>
      <h5 className="pl-6 text-lg font-semibold text-[#FFC66D]">{role}</h5>
      <p className="px-6 pb-2 mt-2 text-[#D3D3D3]">{bio}</p>
    </div>
  );
};

export default StaffCard;