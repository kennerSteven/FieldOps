import { ViewStyle, TextStyle } from "react-native";


export const box: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  padding: 12,
  marginVertical: 6,

   
  borderRadius: 12,
  backgroundColor: "#F2F6FF",    
};


export const boxActive: ViewStyle = {
  borderColor: "#007AFF",       
  backgroundColor: "#D0E4FF",    
};

export const text: TextStyle = {
  fontSize: 16,
  color: "#1C1C1E",           
};

export const textActive: TextStyle = {
  fontSize: 16,
  fontWeight: "600",
  color: "#007AFF",               
};
