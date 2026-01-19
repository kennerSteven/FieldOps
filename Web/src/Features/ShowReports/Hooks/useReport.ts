import { useState, useEffect } from "react";
import { GetReports } from "../Services/Reports";

export interface Report {
  id: string;
  Description: string;
  Priority: string;
  Localitation: {
    latitude: number;
    longitude: number;
  };
  img: { uri: string }[];
  createdAt: {
    _seconds: number;
    _nanoseconds: number;
  };
  requires_supervisor: boolean;
}

export const useReports = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchReports = async () => {
    try {
      setLoading(true);
      const data = await GetReports();
      setReports(data);
    } catch (err) {
      setError("Error al cargar los datos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return { reports, loading, error, refresh: fetchReports };
};