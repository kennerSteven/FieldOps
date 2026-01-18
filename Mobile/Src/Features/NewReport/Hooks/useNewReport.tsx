import { useState } from "react";
import type { NewReportType } from "../Types/Report.type";
import type { ErrorsReport } from "../Types/Errors.type";
import axios from "axios";

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
      const response = await axios.post(
        "https://api-akayi7xlpa-uc.a.run.app/tasks",
        report,
      );
      console.log("Reporte enviado:", response.data);
    } catch (err) {
      console.error("Error enviando el reporte:", err);
    }
  };

  return { report, setReport, errors, setErrors, submitReport };
}
