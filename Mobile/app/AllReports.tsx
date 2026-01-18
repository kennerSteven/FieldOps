import { useEffect, useState } from "react";
import { View,  } from "react-native";
import { GetReports } from "../Src/Features/ListReport/Services/GetReports";
import { NewReportType } from "../Src/Features/NewReport/Types/Report.type";
import Report from "../Src/Features/ListReport/Components/Report";
import Layout from "@/Layouts/Layout";
import Entypo from '@expo/vector-icons/Entypo';
export default function AllReports() {
  const [reports, setReports] = useState<NewReportType[]>([]);

  useEffect(() => {
    async function fetchReports() {
      const allReports = await GetReports();
      setReports(allReports);
    }

    fetchReports();
  }, []);

  return (
    <Layout topLabel="Reportes" topLabelicon={<Entypo name="bar-graph" size={24} color="#007AFF" />}  >
      <View style={{ flex: 1, padding: 10 }}>
      {reports.map((report, key) => (
        <View key={key}>
          <Report
            Description={report.Description}
            Localitation={report.Localitation}
            Date="asd"
            Priority={report.Priority}
            img={report.img}
          />
        </View>
      ))}
    </View>
  </Layout>
  );
}
