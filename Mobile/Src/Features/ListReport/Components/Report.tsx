import React from "react";
import { Text, View, Image } from "react-native";

import {
  ContainerReport,
  InfoSection,
  TitleReport,
  ImageContainer,
  DescriptionWrapper,
  FooterRow,
  PriorityBadge,
  LocationText,
  BlueLabel,
} from "./ReportItem.styles";
import { NewReportType } from "../../NewReport/Types/Report.type";


export default function Report({
  Description,
  Priority,
  Localitation,
  img,
}: NewReportType) {
  const imageUri =
    img && img.length > 0 ? img[0].uri : "https://via.placeholder.com/150";

  return (

  <View style={ContainerReport}>
      <View style={InfoSection}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={DescriptionWrapper}>
            <Text style={TitleReport} numberOfLines={9} ellipsizeMode="tail">
              {Description}
            </Text>
          </View>
          <Image
            source={{ uri: imageUri }}
            style={ImageContainer}
            resizeMode="cover"
          />
        </View>
        <View>
          <View style={FooterRow}>
            <View style={PriorityBadge}>
              <Text
                style={{ color: "#ff4d4d", fontSize: 12, fontWeight: "bold" }}
              >
                Prioridad {Priority.toUpperCase()}
              </Text>
            </View>

            <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
              <Text style={LocationText}>
                <Text style={BlueLabel}>Lat: </Text>
                {Localitation?.latitude.toFixed(4)}
              </Text>
              <Text style={LocationText}>
                <Text style={BlueLabel}>Long: </Text>
                {Localitation?.longitude.toFixed(4)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>

   

  );
}
