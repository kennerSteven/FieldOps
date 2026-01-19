import { Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { styles } from "./VoidSection";
export default function VoidSection({voidItem}:{voidItem:string}) {
  return (
    <View style={[styles.ContainerVoidContet]}>
      <View style={[styles.ContentVoidContent]}>
        <View style={[styles.IconContaier]}>
          <Entypo name="bar-graph" size={40} color="#007AFF" />
        </View>

        <Text style={[styles.BoldTitle]}>No hay {voidItem}</Text>

        <Text style={[styles.LightText]}>Todo está limpio por aquí.</Text>
      </View>
    </View>
  );
}
