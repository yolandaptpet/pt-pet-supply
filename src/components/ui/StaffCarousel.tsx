import { Carousel } from "flowbite-react";
import StaffCard from "./StaffCard";

interface StaffProps {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
}

const defaultStaffList: StaffProps[] = [
  {
    name: "Yolanda DeGaetano",
    role: "Owner",
    bio: "Yolanda has over 10 years of experience in marketing and specializes in customer relations.",
    imageSrc: "https://placehold.co/600x400",
  },
  {
    name: "John Smith",
    role: "Sales Manager",
    bio: "John is an expert in business-to-business sales and customer retention strategies.",
    imageSrc: "https://placehold.co/600x400",
  },
  {
    name: "Sarah Thompson",
    role: "Lead Designer",
    bio: "Sarah has a keen eye for detail and brings a unique design aesthetic to all our projects.",
    imageSrc: "https://placehold.co/600x400",
  },
  {
    name: "Mike Johnson",
    role: "Developer",
    bio: "Mike specializes in full-stack development, with a focus on performance and scalability.",
    imageSrc: "https://placehold.co/600x400",
  },
];

const StaffCarousel: React.FC<{ staffList?: StaffProps[] }> = ({ staffList = defaultStaffList }) => (
  <div className="max-w-2xl mx-auto">
    <Carousel slideInterval={15000} indicators leftControl={<span className="sr-only">Previous</span>} rightControl={<span className="sr-only">Next</span>}>
      {staffList.map((staff, index) => (
        <div key={index} className="min-h-[400px] flex items-center justify-center bg-[#FFC66D] rounded-3xl">
          <StaffCard {...staff} />
        </div>
      ))}
    </Carousel>
  </div>
);

export default StaffCarousel;
