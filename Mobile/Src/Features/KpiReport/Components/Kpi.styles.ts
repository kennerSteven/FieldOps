import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 24,
    padding: 18,
    minHeight: 150,
    justifyContent: "space-between",
    backgroundColor: "rgb(255, 255, 255)",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 15,

    elevation: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: "800",
    color: "#1C1C1E",

    letterSpacing: 0.5,
    opacity: 0.8,
  },
  iconWrapper: {
    padding: 10,
    borderRadius: 14,
    backgroundColor: "rgba(255, 255, 255, 0.65)",
    width: 60,

    borderColor: "rgba(255, 255, 255, 0.8)",
  },
  footer: {
    gap: 8,
  },
  descriptionContainer: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  descriptionText: {
    fontSize: 10,
    color: "#3A3A3C",
    fontWeight: "600",
  },
  value: {
    fontSize: 32,
    fontWeight: "900",
    color: "#1C1C1E",
    letterSpacing: -1,
  },

  high: {
    backgroundColor: "#FFE9E9",
  },
  medium: {
    backgroundColor: "#FFF4DB",
  },
  low: {
    backgroundColor: "#E7F9ED",
  },
  primary: {
    backgroundColor: "#D0E4FF",
  },
});
