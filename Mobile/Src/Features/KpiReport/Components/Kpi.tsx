import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./Kpi.styles";

type Priority = "high" | "medium" | "low" | "primary";

interface KpiProps {
  title: string;

  value: string | number;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  priority: Priority;
}

const iconColors = {
  high: "#FF3B30",
  medium: "#FF9500",
  low: "#34C759",
  primary:"#007AFF"
};

export default function Kpi({ title, value, iconName, priority }: KpiProps) {
  return (
    <View style={[styles.card,]}>
      <View style={styles.footer}>
        <View style={[styles.iconWrapper, styles[priority]]}>
          <MaterialCommunityIcons
            name={iconName}
            size={30}
            color={iconColors[priority]}
          />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}
