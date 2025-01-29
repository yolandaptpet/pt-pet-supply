import { Google } from "arctic";

export const google = new Google(
  (import.meta as any).env.GOOGLE_CLIENT_ID,
  (import.meta as any).env.GOOGLE_CLIENT_SECRET,
  "https://www.ptpet.net/admin"
);