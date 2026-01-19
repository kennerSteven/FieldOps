import { useState, useEffect } from "react";
import { GetKpi } from "../Services/GetKpi";

export const useKpiData = () => {
  const [data, setData] = useState({ alta: 0, media: 0, baja: 0, total: 0 });

  const fetchKpis = async () => {
    try {
      const res = await GetKpi();
  
      const cleanData = res?.data || res; 
      if (cleanData) setData(cleanData);
    } catch (err) {
      console.error("Error KPI:", err);
    }
  };

  useEffect(() => {
    fetchKpis();
  }, []);

  return { data, fetchKpis };
};