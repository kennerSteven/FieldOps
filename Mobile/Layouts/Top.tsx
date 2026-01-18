import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Top() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 10,
   

        backgroundColor: "#007AFF",
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "600", color: "#fefefe" }}>
        Nuevo Reporte
      </Text>
      <AntDesign name="tool" size={30} color="#fefefe" />
    </View>
  );
}
