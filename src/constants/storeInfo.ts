interface StoreInfo {
  name: string;
  address: string;
  phoneNumber: string;
}

interface StoreHours {
  [key: string]: { open: string; close: string };
}

interface StaffProps {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
}

export const officialStoreInfo = () => {
  let storeInfo: StoreInfo = {
    name: "PT Pet Supply",
    address: "86 Worcester Rd, Webster",
    phoneNumber: "508•943•9600",
  };

  return storeInfo;
};

export const officialStoreHours = async (): Promise<StoreHours | null> => {
  try {
    const status = "http://localhost:4321";
    const response = await fetch(`${status}/api/store-info`);
    const data = await response.json();

    if (!response.ok || !data || !data[0]) {
      console.error("Failed to fetch valid store information.");
      return null;
    }

    const storeInfo = data[0].info;

    const activeHours: string = storeInfo.storeHours.activeHours;

    const storeHours: StoreHours =
      activeHours === "normal"
        ? storeInfo.storeHours.normal
        : activeHours === "adjusted"
        ? storeInfo.storeHours.adjusted
        : null;

    if (!storeHours) {
      console.error("Invalid activeHours value or missing store hours.");
      return null;
    }

    return storeHours;
  } catch (error) {
    console.error("Error fetching store hours:", error);
    return null;
  }
};

export const officialStaffList = () => {
  let staffList: StaffProps[] = [
    {
      id: 1,
      name: "Yolanda DeGaetano",
      role: "Owner",
      bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisi purus sagittis eros quam dui commodo egestas ac. Hendrerit placerat donec tincidunt mollis fusce diam pharetra. Vitae tempus orci amet vitae a elit quam dictumst? Risus blandit potenti tortor consectetur pretium vivamus.",
      imageSrc: "https://placehold.co/600x400",
    },
    {
      id: 2,
      name: "Carlos Martinez",
      role: "Sales Manager",
      bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisi purus sagittis eros quam dui commodo egestas ac. Hendrerit placerat donec tincidunt mollis fusce diam pharetra. Vitae tempus orci amet vitae a elit quam dictumst? Risus blandit potenti tortor consectetur pretium vivamus.",
      imageSrc: "https://placehold.co/600x400",
    },
    {
      id: 3,
      name: "Sarah Thompson",
      role: "Lead Designer",
      bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisi purus sagittis eros quam dui commodo egestas ac. Hendrerit placerat donec tincidunt mollis fusce diam pharetra. Vitae tempus orci amet vitae a elit quam dictumst? Risus blandit potenti tortor consectetur pretium vivamus.",
      imageSrc: "https://placehold.co/600x400",
    },
    {
      id: 4,
      name: "Alex Ramirez",
      role: "Developer",
      bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisi purus sagittis eros quam dui commodo egestas ac. Hendrerit placerat donec tincidunt mollis fusce diam pharetra. Vitae tempus orci amet vitae a elit quam dictumst? Risus blandit potenti tortor consectetur pretium vivamus.",
      imageSrc: "https://placehold.co/600x400",
    },
    {
      id: 5,
      name: "Mia Jenkins",
      role: "Customer Support",
      bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisi purus sagittis eros quam dui commodo egestas ac. Hendrerit placerat donec tincidunt mollis fusce diam pharetra. Vitae tempus orci amet vitae a elit quam dictumst? Risus blandit potenti tortor consectetur pretium vivamus.",
      imageSrc: "https://placehold.co/600x400",
    },
    {
      id: 6,
      name: "Laura Patel",
      role: "Marketing Specialist",
      bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisi purus sagittis eros quam dui commodo egestas ac. Hendrerit placerat donec tincidunt mollis fusce diam pharetra. Vitae tempus orci amet vitae a elit quam dictumst? Risus blandit potenti tortor consectetur pretium vivamus.",
      imageSrc: "https://placehold.co/600x400",
    },
    {
      id: 7,
      name: "Ethan Brooks",
      role: "Developer",
      bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisi purus sagittis eros quam dui commodo egestas ac. Hendrerit placerat donec tincidunt mollis fusce diam pharetra. Vitae tempus orci amet vitae a elit quam dictumst? Risus blandit potenti tortor consectetur pretium vivamus.",
      imageSrc: "https://placehold.co/600x400",
    },
    {
      id: 8,
      name: "Olivia Carter",
      role: "Graphic Designer",
      bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisi purus sagittis eros quam dui commodo egestas ac. Hendrerit placerat donec tincidunt mollis fusce diam pharetra. Vitae tempus orci amet vitae a elit quam dictumst? Risus blandit potenti tortor consectetur pretium vivamus.",
      imageSrc: "https://placehold.co/600x400",
    },
  ];

  return staffList;
};