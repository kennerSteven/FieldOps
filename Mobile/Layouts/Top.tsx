import React from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";

import { HeaderContainer, TitleText, IconWrapper } from "./Top.styles";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function Top({
  labelTop,
  icon,
}: {
  labelTop: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <View style={HeaderContainer}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="return-up-back" size={34} color="#007AFF" />
        </TouchableOpacity>

        <Text style={TitleText}>{labelTop}</Text>
      </View>
      <View style={IconWrapper}>{icon}</View>
    </View>
  );
}
