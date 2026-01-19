import axios from "axios";
import type { NewReportType } from "../Types/Report.type";

export const ReportCreate = async ({ ...data }: NewReportType) => {
  try {
    const { data: response } = await axios.post(
      "https://api-akayi7xlpa-uc.a.run.app/FieldOps",
      data,
    );
    return response;
  } catch (err) {
    console.error("Error enviando datos:", err);
    throw err;
  }
};
