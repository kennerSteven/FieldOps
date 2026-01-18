import { TextStyle } from "react-native";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

export const camera: ViewStyle = {
  borderRadius: 12,
  backgroundColor: "#D0E4FF",
  padding: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: 110,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 2,
  marginHorizontal: 5,
};

export const textCamera: TextStyle = {
  color: "#007AFF",
  paddingVertical: 2,
  fontWeight: "500",
  marginTop: 6,
  textAlign: "center",
};

export const cameraIcon: TextStyle = {
  backgroundColor: "#007AFF33",
  borderRadius: 10,
  padding: 5,
  justifyContent: "center",
  alignItems: "center",
};

export const containerImg: ViewStyle = {
  paddingVertical: 20,
  paddingHorizontal: 8,
  borderRadius: 10,
  borderStyle: "dashed",
  borderWidth: 2,
  borderColor: "#e0e0e0",
  marginBottom: 12,
};
