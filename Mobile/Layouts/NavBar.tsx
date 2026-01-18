import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  NavbarStyle,
  NavButton,
  NavText,
  IconContainer,
} from "./NavBar.styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import { router } from "expo-router";
export default function Navbar() {
  return (
    <View style={NavbarStyle}>
      <TouchableOpacity style={NavButton}>
        <View style={IconContainer}>
          <Ionicons name="home-outline" size={24} color="#9e9e9e" />
        </View>
        <Text style={NavText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={NavButton} onPress={()=> router.push("/NewReport")}>
        <View style={IconContainer}>
          <FontAwesome name="plus-square-o" size={30} color="#2b5ae1" />
        </View>
        <Text style={[NavText, { color: "#2b5ae1" }]}>Nuevo reporte</Text>
      </TouchableOpacity>

      <TouchableOpacity style={NavButton} onPress={()=> router.push("/AllReports")}>
        <View style={IconContainer}>
          <Entypo name="bar-graph" size={24} color="#9e9e9e" />
        </View>
        <Text style={NavText}>Reports</Text>
      </TouchableOpacity>
    </View>
  );
}
