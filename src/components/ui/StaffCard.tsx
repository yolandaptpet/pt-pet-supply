interface StaffCardProps {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
};

const StaffCard: React.FC<StaffCardProps> = ({ name, role, bio, imageSrc }) => {
  return (
    <div className=" p-4">
      <img
        className="w-full h-auto object-cover mb-4 rounded"
        src={imageSrc}
        alt={name}
      />
      <h4 className="text-xl font-bold">{name}</h4>
      <h5 className="text-lg font-semibold text-[#2C2F33]">{role}</h5>
      <p className="mt-2">{bio}</p>
    </div>
  );
};

export default StaffCard;