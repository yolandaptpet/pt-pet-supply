import { useEffect, useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import MobileDetect from "mobile-detect";
import StaffCard from "./StaffCard";

interface StaffListProps {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
}

const StaffCarousel = ({ staffList }: { staffList: StaffListProps[] }) => {
  const [staffMember, setStaffMember] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const md = new MobileDetect(userAgent);
    setIsMobile(!!md.mobile());
  }, []);

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

  const goToStaffMember = (index: number) => {
    setStaffMember(index);
  };

  // Handle swipe gestures
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStart - touchEnd > 50) {
      // Swiped left
      nextStaffMember();
    }
    if (touchStart - touchEnd < -50) {
      // Swiped right
      previousStaffMember();
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto" 
         onTouchStart={handleTouchStart} 
         onTouchEnd={handleTouchEnd}>
      {/* Left Arrow */}
      {!isMobile && (
        <ArrowBigLeft
          className="absolute h-[50%] w-[15%] px-8 top-1/2 transform -translate-y-1/2 left-4 cursor-pointer z-10 -ml-48 bg-[#7F0201] bg-opacity-60 text-white text-outline-white rounded-3xl"
          style={{ backdropFilter: "blur(35px)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.width = "18%";
            e.currentTarget.style.transition = "all 0.2s ease-in-out";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.width = "15%";
            e.currentTarget.style.transition = "all 0.2s ease-in-out";
          }}
          onClick={previousStaffMember}
        />
      )}

      {/* Carousel */}
      <div className="overflow-hidden px-8">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${staffMember * 100.35}%)` }}
        >
          {staffList.map((staff, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-[70%] mx-2.5 ${
                index === staffMember ? "scale-100" : "scale-90"
              } ${index === 0 ? "ml-56 md:ml-28" : ""}`}
              style={{
                transform: `translateX(${staffMember * 40}%)`,
                transition: "transform 0.9s",
              }}
            >
              <div
                className="w-[65%] md:w-full min-h-[400px] flex items-center justify-center rounded-3xl drop-shadow-xl bg-[#7F0201] bg-opacity-50"
                style={{ backdropFilter: "blur(35px)" }}
              >
                <StaffCard {...staff} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      {!isMobile && (
        <ArrowBigRight
          className="absolute h-[50%] w-[15%] px-8 top-1/2 transform -translate-y-1/2 right-4 cursor-pointer z-10 -mr-48 bg-[#7F0201] bg-opacity-60 text-white text-outline-white rounded-3xl"
          style={{ backdropFilter: "blur(35px)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.width = "18%";
            e.currentTarget.style.transition = "all 0.2s ease-in-out";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.width = "15%";
            e.currentTarget.style.transition = "all 0.2s ease-in-out";
          }}
          onClick={nextStaffMember}
        />
      )}

      {/* Index Buttons */}
      <div className="flex justify-center mt-4 space-x-2">
        {staffList.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === staffMember ? "bg-[#7F0201]" : "bg-gray-400"
            }`}
            onClick={() => goToStaffMember(index)}
            aria-label={`Go to staff member ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default StaffCarousel;
