import { useState } from "react";
import { NewReportType } from "../../NewReport/Types/Report.type";
import { GetReports } from "../Services/GetReports";

export default function useKpi() {
  const [reports, setReports] = useState<NewReportType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [voidReports, setVoidReports] = useState<boolean>(false);

  async function GetAllReports() {
    try {
      const allReports = await GetReports();

      setReports(allReports);
      setVoidReports(allReports.length === 0);
    } catch (error) {
      console.log("Error al leer los reportes", error);
    } finally {
      setLoading(false);
    }
  }

  return {
    GetAllReports,
    reports,
    loading,
    voidReports,
    setReports,
    setLoading,
    setVoidReports,
  };
}
