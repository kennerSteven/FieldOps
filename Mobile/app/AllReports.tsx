import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { GetReports } from "../Src/Features/ListReport/Services/GetReports";
import { NewReportType } from "../Src/Features/NewReport/Types/Report.type";
import Report from "../Src/Features/ListReport/Components/Report";
import Layout from "@/Layouts/Layout";
import Entypo from "@expo/vector-icons/Entypo";

export default function AllReports() {
  const [reports, setReports] = useState<NewReportType[]>([]);

  useEffect(() => {
    async function fetchReports() {
      const allReports = await GetReports();
      setReports(allReports);
    }

    fetchReports();
  }, []);

  if (reports.length === 0) {
    return (
      <Layout
        topLabel="Reportes"
        topLabelicon={<Entypo name="bar-graph" size={24} color="#007AFF" />}
      >
        <View
          style={{
            margin: "auto",
            marginTop: 150,
          }}
        >
          <View
            style={{
              padding: 40,
              borderRadius: 25,
              alignItems: "center",
              width: "100%",
            }}
          >
            <View
              style={{
                backgroundColor: "#E1E9FF",
                padding: 20,
                borderRadius: 20,
                marginBottom: 20,

                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 10,
                elevation: 3,
              }}
            >
              <Entypo name="bar-graph" size={40} color="#007AFF" />
            </View>

            <Text
              style={{
                fontSize: 22,
                fontWeight: "800",
                color: "#3e3e3e",
                textAlign: "center",
                letterSpacing: -0.5,
              }}
            >
              No hay reportes
            </Text>

            <Text
              style={{
                fontSize: 15,
                color: "#8e8e93",
                marginTop: 10,
                textAlign: "center",
              }}
            >
              Todo está limpio por aquí.
            </Text>
          </View>
        </View>
      </Layout>
    );
  }
  return (
    <Layout
      topLabel="Reportes"
      topLabelicon={<Entypo name="bar-graph" size={24} color="#007AFF" />}
    >
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
