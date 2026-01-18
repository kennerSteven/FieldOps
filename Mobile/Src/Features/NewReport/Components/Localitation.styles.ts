import { TextStyle } from "react-native";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

export const localitation: ViewStyle = {
  borderRadius: 10,
  backgroundColor: "#F2F6FF",

  padding: 6,
  display: "flex",

  alignItems: "center",

  width: 260,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 2,
  margin: "auto",

};

export const textLocalitation: TextStyle = {
  color: "#007AFF",
  fontSize: 16,
  fontWeight: "500",

  textAlign: "center",
};

export const cameraIcon: TextStyle = {
  backgroundColor: "#007AFF33",
  borderRadius: 14,
  padding: 5,
  paddingHorizontal:30,
  justifyContent: "center",
  alignItems: "center",
};
