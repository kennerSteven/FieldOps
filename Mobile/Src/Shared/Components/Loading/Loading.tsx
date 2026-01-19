import { ActivityIndicator, View, Text } from "react-native";
import { styles } from "./Loading.style";
export default function Loading({ elementToLoad }: { elementToLoad: string }) {
  return (
    <View style={[styles.containerLoading]}>
      <ActivityIndicator size="large" color="#2563eb" />
      <Text style={[styles.textLoading]}>Cargando {elementToLoad} ...</Text>
    </View>
  );
}
