import React, { useEffect } from "react";
import { View, Text, Alert, TouchableHighlight } from "react-native";
import * as Location from "expo-location";
import { localitation, textLocalitation } from "./Localitation.styles";
import { Entypo } from "@expo/vector-icons";

export interface paramsLocationType {
  latitude: number;
  longitude: number;
}

interface LocationPickerTypes {
  location: paramsLocationType | null; 
  setLocation: (value: paramsLocationType) => void;
}
export default function LocationPicker({
  location,
  setLocation,
}: LocationPickerTypes) {
  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permiso denegado",
        "Necesitamos tu ubicación para el reporte.",
      );
      return;
    }

    const loc = await Location.getCurrentPositionAsync();
    setLocation({
      latitude: loc.coords.latitude,
      longitude: loc.coords.longitude,
    });
  };

  useEffect(() => {
    getLocation();
  },[]);

  return (
    <View style={[localitation]}>
      {location ? (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text style={[textLocalitation, { color: "black", fontSize: 14 }]}>
            <Text style={[textLocalitation]}> Lat: </Text>
            {location.latitude.toFixed(5)}
          </Text>
          <Text style={[textLocalitation, { color: "black", fontSize: 14 }]}>
            <Text style={[textLocalitation]}>Long: </Text>{" "}
            {location.longitude.toFixed(5)}
          </Text>
          <TouchableHighlight underlayColor="transparent" onPress={getLocation}>
            <Entypo name="cycle" size={25} color="#007AFF" />
          </TouchableHighlight>
        </View>
      ) : (
        <Text>Obteniendo ubicación...</Text>
      )}
    </View>
  );
}
