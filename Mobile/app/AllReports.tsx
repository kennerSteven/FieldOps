import { useEffect, useState } from "react";
import {  ScrollView } from "react-native";
import { GetReports } from "../Src/Features/ListReport/Services/GetReports";
import { NewReportType } from "../Src/Features/NewReport/Types/Report.type";
import Report from "../Src/Features/ListReport/Components/Report";
import Layout from "@/Layouts/Layout";
import Entypo from "@expo/vector-icons/Entypo";
import Loading from "@/Src/Shared/Components/Loading/Loading";
import VoidSection from "@/Src/Shared/Components/VoidContent/VoidContent";

export default function AllReports() {
  const [reports, setReports] = useState<NewReportType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReports() {
      try {
        setLoading(true);
        const allReports = await GetReports();
        setReports(allReports || []);
      } catch (error) {
        console.error("Error fetching reports:", error);
        setReports([]);
      } finally {
        setLoading(false);
      }
    }
    fetchReports();
  }, []);

  if (loading) {
    return (
      <Layout topLabel="Reportes" topLabelicon={<Entypo name="bar-graph" size={24} color="#007AFF" />}>
        <Loading elementToLoad="reportes" />
      </Layout>
    );
  }

  if (reports.length === 0) {
    return (
      <Layout topLabel="Reportes" topLabelicon={<Entypo name="bar-graph" size={24} color="#007AFF" />}>
        <VoidSection voidItem="reportes" />
      </Layout>
    );
  }

  return (
    <Layout topLabel="Reportes" topLabelicon={<Entypo name="bar-graph" size={24} color="#007AFF" />}>
      <ScrollView style={{ flex: 1, padding: 10 }}>
        {reports.map((report, index) => (
          <Report
            key={ index}
            Description={report.Description}
            Localitation={report.Localitation}
            Date="19/01/2026"
            Priority={report.Priority}
            img={report.img}
          />
        ))}
      </ScrollView>
    </Layout>
  );
}