import Kpi from "../Src/Features/KpiReport/Components/Kpi";
import Layout from "@/Layouts/Layout";
import { View } from "react-native";
import { Image } from "expo-image";

import AntDesign from "@expo/vector-icons/AntDesign";

export default function MainKpi() {
  return (
    <Layout
      topLabel="Principal"
      topLabelicon={<AntDesign name="home" size={24} color="#007AFF" />}
    >
      <View style={{ margin: "auto", marginVertical: 10 }}>
        <Image
          source={require("../assets/Svg/mainImg.svg")}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <View
        style={{
          marginHorizontal: 30,
          flexDirection: "row",
          marginTop: 30,
          gap: 15,
        }}
      >
        <Kpi
          title="Daño Grave"
          value={2}
          iconName="alert-outline"
          priority="high"
        />
        <Kpi title="Daño Severo" value={2} iconName="alert" priority="medium" />
      </View>
      <View
        style={{
          marginHorizontal: 30,
          flexDirection: "row",
          marginVertical: 10,
          gap: 15,
        }}
      >
        <Kpi title="Daño Breve" value={2} iconName="map" priority="low" />
        <Kpi title="Total de reportes" value={2} iconName="graph" priority="primary" />
      </View>
    </Layout>
  );
}
