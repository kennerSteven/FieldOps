import { ViewStyle, TextStyle } from "react-native";

export const NavbarStyle: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  paddingVertical: 15,
  backgroundColor: "#ffffff",
  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,
  position: "absolute",
  bottom: 0,
  width: "100%",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: -2 },
  shadowOpacity: 0.05,
  shadowRadius: 10,
  elevation: 5,
};

export const NavButton: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
};

export const IconContainer: ViewStyle = {
  marginBottom: 4,
  alignItems: "center",
  justifyContent: "center",
};

export const NavText: TextStyle = {
  fontSize: 11,
  color: "#9e9e9e",
  fontWeight: "500",
};