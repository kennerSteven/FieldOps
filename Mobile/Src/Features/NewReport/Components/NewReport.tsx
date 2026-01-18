import React from "react";
import { View, Text, ScrollView } from "react-native";
import ButtonComponent from "@/Src/Shared/Ui/Button/ButtonComponent";
import InputComponent from "@/Src/Shared/Ui/Input/InputComponent";
import PhotoPicker from "./Photo";
import SelectPriority from "./Priority";
import LocationPicker from "./Localitation";
import Top from "@/Layouts/Top";
import { titles, error } from "@/Styles/Titles.style";
import useNewReport from "../Hooks/useNewReport";
export default function NewReport() {
  const { setReport, errors, report, submitReport } = useNewReport();
  return (
    <ScrollView style={{ backgroundColor: "#ffffff" }}>
      <Top />
      <View style={{ marginHorizontal: 30 }}>
        <View style={{ marginTop: 20 }}>
          <Text style={[titles, { textAlign: "left", color: "#007AFF" }]}>
            Prioridad
          </Text>
          <SelectPriority
            selectedValue={report.Priority}
            setSelectedValue={(value) =>
              setReport((prev) => ({ ...prev, Priority: value }))
            }
          />
          <Text style={error}>{errors.Priority}</Text>
        </View>

        <Text style={[titles, { textAlign: "left", color: "#007AFF" }]}>
          Descripción
        </Text>
        <InputComponent
          value={report.Description}
          onChange={(value: any) =>
            setReport((prev) => ({ ...prev, Description: value }))
          }
          typeInput="textarea"
          placeholder="Escribe una descripción..."
        />
        <Text style={[error, { paddingTop: 4 }]}>{errors.Description}</Text>

        <View style={{ marginTop: 20 }}>
          <LocationPicker
            location={report.Localitation}
            setLocation={(value) =>
              setReport((prev) => ({
                ...prev,
                Localitation: {
                  latitude: value.latitude,
                  longitude: value.longitude,
                },
              }))
            }
          />
          <Text style={error}>{errors.Localitation}</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <PhotoPicker
            images={report.img}
            setImages={(newImages) => {
              setReport((prev) => ({
                ...prev,
                img:
                  typeof newImages === "function"
                    ? newImages(prev.img)
                    : newImages,
              }));
            }}
          />

          <Text style={[error, { paddingTop: 8, textAlign: "center" }]}>
            {errors.img}
          </Text>
        </View>

        <View style={{ marginTop: 30 }}>
          <ButtonComponent
            labelButton="Guardar"
            onPress={submitReport}
            styleButton="btn"
          />
        </View>
      </View>
    </ScrollView>
  );
}
