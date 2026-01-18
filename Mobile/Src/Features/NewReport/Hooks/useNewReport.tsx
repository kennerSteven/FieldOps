import { useState } from "react";
import type { NewReportType } from "../Types/Report.type";
import type { ErrorsReport } from "../Types/Errors.type";
import { ReportCreate } from "../Services/Report";
import {router} from "expo-router"
export default function useNewReport() {
  const [report, setReport] = useState<NewReportType>({
    Description: "",
    Priority: "",
    Localitation: null,
    img: [],
  });

  const [errors, setErrors] = useState<ErrorsReport>({
    Description: "",
    Priority: "",
    Localitation: "",
    img: "",
  });

  const validate = (): boolean => {
    const newErrors: ErrorsReport = {
      Description: "",
      Priority: "",
      Localitation: "",
      img: "",
    };

    let hasError = false;

    if (!report.Description.trim()) {
      newErrors.Description = "Ingresa una descripción por favor";
      hasError = true;
    }

    if (!report.Priority.trim()) {
      newErrors.Priority = "Selecciona una prioridad por favor";
      hasError = true;
    }

    if (!report.Localitation) {
      newErrors.Localitation = "No hay una localización detectada";
      hasError = true;
    }

    if (report.img.length === 0) {
      newErrors.img = "Adjunta al menos 1 imagen (máx 3)";
      hasError = true;
    }

    setErrors(newErrors);
    return !hasError;
  };

  const submitReport = async () => {
    if (!validate()) return;

    try {
      await ReportCreate(report);
      console.log("Reporte enviado con éxito ");

      setReport({
        Description: "",
        Priority: "",
        Localitation: null,
        img: [],
      });
    } catch (error) {
      console.error("Error enviando el reporte:", error);
    }
    router.push("/AllReports")
  };

  return { report, setReport, errors, submitReport };
}
