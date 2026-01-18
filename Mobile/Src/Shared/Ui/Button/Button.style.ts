import { ViewStyle, TextStyle } from "react-native";


export const btn: ViewStyle = {
  borderRadius: 20,                
  paddingVertical: 15,              
  paddingHorizontal: 20,
  backgroundColor: "#007AFF",      
  shadowColor: "#000",             
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 3,
  elevation: 2,      
 marginBottom:40   ,
          
};


export const btnText: TextStyle = {
  color: "#FFFFFF",                  
  fontSize: 16,                     
               
  textAlign: "center",
  fontFamily: "System",
};


export const btnOutline: ViewStyle = {

  borderRadius: 12,
  paddingVertical: 12,
  paddingHorizontal: 20,
  backgroundColor: "transparent",
  borderWidth: 1,
  borderColor: "#007AFF",         
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.05,
  shadowRadius: 2,
  elevation: 1,
   marginVertical:10   
};
