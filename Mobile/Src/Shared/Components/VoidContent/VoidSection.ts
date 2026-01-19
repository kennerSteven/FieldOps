import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  ContainerVoidContet: { marginTop: 150, alignItems: "center" },

  ContentVoidContent: {
    padding: 40,
    borderRadius: 25,
    alignItems: "center",
    width: "100%",
  },

  IconContaier: {
    backgroundColor: "#E1E9FF",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  BoldTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#3e3e3e",
    textAlign: "center",
  },
  LightText: {
    fontSize: 15,
    color: "#8e8e93",
    marginTop: 10,
    textAlign: "center",
  },
});
