import { ViewStyle, TextStyle } from "react-native";

export const HeaderContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 25,
  paddingTop: 40,
  paddingBottom: 10,
  backgroundColor: "#ffffff",
  borderBottomWidth: 1,
  borderBottomColor: "#ebebeb",
};

export const TitleText: TextStyle = {
  fontSize: 24,
  fontWeight: "700",
  color: "#1a1a1a",
  letterSpacing: -0.5,
};

export const IconWrapper: ViewStyle = {
  backgroundColor: "#f0f4ff",
  padding: 10,
  borderRadius: 12,
  alignItems: "center",
  justifyContent: "center",
};