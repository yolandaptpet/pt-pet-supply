import React, { useState } from "react";
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
        className="absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer z-10"
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
              className={`flex-shrink-0 w-[80%] mx-4 ${index === staffMember ? "scale-100" : "scale-90 opacity-50 -z-10"}`}
              style={{
                transform: `translateX(${staffMember * 20}%)`,
                transition: "transform 0.9s",
              }}
            >
              <div className="min-h-[400px] flex items-center justify-center bg-[#FFC66D] rounded-3xl">
                <StaffCard {...staff} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <ArrowBigRight
        className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer z-10"
        onClick={nextStaffMember}
      />
    </div>
  );
};

export default StaffCarousel;