import axios from "axios";
import type { NewReportType } from "../Types/Report.type";

export const ReportCreate = async ({ ...data }: NewReportType) => {
  try {
    const { data: response } = await axios.post(
      "http://TU_IP_LOCAL:3000/send-data",
      data,
    );
    return response;
  } catch (err) {
    console.error("Error enviando datos:", err);
    throw err;
  }
};
