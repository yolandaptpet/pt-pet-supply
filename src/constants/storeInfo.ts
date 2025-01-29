interface StoreInfo {
  name: string;
  address: string;
  phoneNumber: string;
}

interface StoreHours {
  [key: string]: { open: string; close: string };
}

export interface StaffProps {
  staff_id: string;
  fullName: string;
  role: string[];
  bio: string;
  imageSrc: string;
}

export interface ProductBrands {
  dogs: string[];
  cats: string[];
  smallAnimals: string[];
}

export const officialStoreInfo = () => {
  let storeInfo: StoreInfo = {
    name: "PT Pet Supply",
    address: "86 Worcester Rd, Webster",
    phoneNumber: "508•943•9600",
  };

  return storeInfo;
};

const normalizeFileName = (name: string): string => {
  return name.toLowerCase().replace(/[^a-z0-9]/g, ''); // Keep only alphanumeric characters
};

const statusUrls = [
  "https://ptpet.net",
  "https://pt-pet-supply.vercel.app",
  "http://localhost:4321",
  "http://localhost:3000",
];

export const officialStoreHours = async (): Promise<StoreHours | null> => {
  for (const status of statusUrls) {
    try {
      const response = await fetch(`${status}/api/store-info`);
      if (!response.ok) {
        console.error(`Failed to fetch from ${status}: Response not OK`);
        continue;
      }

      const data = await response.json();
      if (!data || !data[0]) {
        console.error(`Invalid data from ${status}`);
        continue;
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
        console.error(`Invalid activeHours value or missing store hours from ${status}`);
        continue;
      }

      return storeHours;
    } catch (error) {
      console.error(`Error fetching store hours from ${status}:`, error);
    }
  }

  console.error("All fetch attempts failed.");
  return null;
};

export const officialStaffList = async (): Promise<StaffProps[]> => {
  for (const status of statusUrls) {
    try {
      const response = await fetch(`${status}/api/staff`);
      const data = await response.json();

      if (!response.ok || !data.members || !Array.isArray(data.members) || data.members.length === 0) {
        console.warn(`Invalid staff data from ${status}`);
        continue;
      }

      const staffList: StaffProps[] = data.members.map((member: StaffProps) => {
        const normalizedFullName = normalizeFileName(member.fullName);
        const imageSrc = `/src/assets/staff/${normalizedFullName}.webp`;
        return {
          ...member,
          imageSrc,
        };
      });

      return staffList;
    } catch (error) {
      console.error(`Error fetching staff list from ${status}:`, error);
    }
  }

  console.error("All fetch attempts failed.");
  return [];
};

export const getProductBrands = (): ProductBrands => {
  return {
    dogs: [],
    cats: [],
    smallAnimals: []    
  }
};