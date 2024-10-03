import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import StaffCard from "./StaffCard";

interface StaffListProps {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
}

const StaffCarousel = ({ staffList }: { staffList: StaffListProps[] }) => {
  const [staffMember, setStaffMember] = useState(0);

  const previousStaffMember = () => {
    setStaffMember((prev) =>
      prev === 0 ? staffList.length - 1 : prev - 1
    );
  };

  const nextStaffMember = () => {
    setStaffMember((prev) =>
      prev === staffList.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <ArrowBigLeft
        className="absolute h-full w-[15%] px-8 top-1/2 transform -translate-y-1/2 left-4 cursor- z-10 -ml-48 text-white text-outline-white rounded-3xl"
        style={{ backdropFilter: 'blur(35px)' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.width = "18%"; // Increase width%
          e.currentTarget.style.transition = "all 0.2s ease-in-out";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.width = "15%"; // Reset width to original
          e.currentTarget.style.transition = "all 0.2s ease-in-out";
        }}
        onClick={previousStaffMember}
      />

      <div className="overflow-hidden px-8">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${staffMember * 100}%)` }}
        >
          {staffList.map((staff, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-[70%] mx-2.5 ${
                index === staffMember ? "scale-100" : "scale-90"
              } ${index === 0 ? "ml-28" : ""}`}
              style={{
                transform: `translateX(${staffMember * 40}%)`,
                transition: "transform 0.9s",
              }}
            >
              <div className="min-h-[400px] flex items-center justify-center rounded-3xl drop-shadow-xl"
              style={{ backdropFilter: 'blur(35px)' }}>
                <StaffCard {...staff} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <ArrowBigRight
        className="absolute h-full w-[15%] px-8 top-1/2 transform -translate-y-1/2 right-4 cursor-pointer z-10 -mr-48 text-white text-outline-white rounded-3xl"
        style={{ backdropFilter: 'blur(35px)' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.width = "18%"; // Increase width%
          e.currentTarget.style.transition = "all 0.2s ease-in-out";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.width = "15%"; // Reset width to original
          e.currentTarget.style.transition = "all 0.2s ease-in-out";
        }}
        onClick={nextStaffMember}
      />
    </div>
  );
};

export default StaffCarousel;