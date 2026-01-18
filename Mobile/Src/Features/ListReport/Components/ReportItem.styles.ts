import { ViewStyle, TextStyle, ImageStyle } from "react-native";

export const ContainerReport: ViewStyle = {
  display:"flex",
  flexDirection: "row",
  justifyContent:"space-between",
  padding: 16,
  backgroundColor: "#ffffff",
  borderRadius: 16,
  marginVertical: 8,
  marginHorizontal: 20,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.05,
  shadowRadius: 8,
  elevation: 3,
  gap: 12,
};

export const InfoSection: ViewStyle = {
  flex: 1,
  justifyContent: "space-between",
};

export const DescriptionWrapper: ViewStyle = {
width:140, 

};

export const TitleReport: TextStyle = {
  color: "#616161",
  fontSize: 15,
  fontWeight: "600",
  lineHeight: 20,
  
};

export const GradientOverlay: ViewStyle = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: 20,
};

export const FooterRow: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: 6,

  paddingVertical:7,
  paddingHorizontal:4,
  borderRadius:10
};

export const PriorityBadge: ViewStyle = {
  backgroundColor: "#fff1f1",
  paddingVertical: 4,
  paddingHorizontal: 10,
  borderRadius: 6,
 

};

export const LocationText: TextStyle = {
  fontSize: 12,
  color: "#555",
};

export const BlueLabel: TextStyle = {
  color: "#007AFF",
  fontWeight: "700",
  fontSize:12
};

export const ImageContainer: ImageStyle = {
  width: 140,
  height: 150,
  borderRadius: 12,
  backgroundColor: "#f0f0f0",
};