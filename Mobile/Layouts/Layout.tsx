import { ScrollView, View } from "react-native";
import Navbar from "./NavBar";
import Top from "./Top";
import React from "react";

interface props {
  topLabelicon: React.ReactNode;
  topLabel: string;
  children: React.ReactNode;
}

export default function Layout({ children, topLabelicon, topLabel }: props) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor:"#FFFF"
      }}
    >
      <Top icon={topLabelicon} labelTop={topLabel} />
      <View style={{ flex: 1 }}>
        <ScrollView>{children}</ScrollView>
      </View>
      <Navbar />
    </View>
  );
}
