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
    bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisi purus sagittis eros quam dui commodo egestas ac. Hendrerit placerat donec tincidunt mollis fusce diam pharetra. Vitae tempus orci amet vitae a elit quam dictumst? Risus blandit potenti tortor consectetur pretium vivamus.",
    imageSrc: "https://placehold.co/600x400",
  },
  {
    name: "John Smith",
    role: "Sales Manager",
    bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisi purus sagittis eros quam dui commodo egestas ac. Hendrerit placerat donec tincidunt mollis fusce diam pharetra. Vitae tempus orci amet vitae a elit quam dictumst? Risus blandit potenti tortor consectetur pretium vivamus.",
    imageSrc: "https://placehold.co/600x400",
  },
  {
    name: "Sarah Thompson",
    role: "Lead Designer",
    bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisi purus sagittis eros quam dui commodo egestas ac. Hendrerit placerat donec tincidunt mollis fusce diam pharetra. Vitae tempus orci amet vitae a elit quam dictumst? Risus blandit potenti tortor consectetur pretium vivamus.",
    imageSrc: "https://placehold.co/600x400",
  },
  {
    name: "Mike Johnson",
    role: "Developer",
    bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisi purus sagittis eros quam dui commodo egestas ac. Hendrerit placerat donec tincidunt mollis fusce diam pharetra. Vitae tempus orci amet vitae a elit quam dictumst? Risus blandit potenti tortor consectetur pretium vivamus.",
    imageSrc: "https://placehold.co/600x400",
  },
];

const StaffCarousel: React.FC<{ staffList?: StaffProps[] }> = ({ staffList = defaultStaffList }) => (
  <div className="max-w-2xl mx-auto">
    {staffList.map((staff, index) => (
      <div className="min-h-[400px] flex items-center justify-center bg-[#FFC66D] rounded-3xl">
        <StaffCard key={index} {...staff} />
      </div>
    ))}
  </div>
);

export default StaffCarousel;
