interface StoreInfo {
  name: string;
  address: string;
  phoneNumber: string;
}

interface StoreHours {
  [key: string]: { open: string; close: string };
}

interface StaffProps {
  staff_id: string;
  fullName: string;
  role: string[];
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

export const officialStaffList = async (): Promise<StaffProps[]> => {
  try {
    const status = "http://localhost:4321";
    const response = await fetch(`${status}/api/staff`);
    const data = await response.json();

    if (!response.ok || !data.members || !Array.isArray(data.members) || data.members.length === 0) {
      console.error("Failed to fetch valid staff information.");
      return [];
    }

    const staffList: StaffProps[] = data.members;

    return staffList;
  } catch (error) {
    console.error("Error fetching staff list:", error);
    return [];
  }
};