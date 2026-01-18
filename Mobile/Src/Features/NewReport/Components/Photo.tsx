import React from "react";
import { View, Image, Alert, TouchableHighlight, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";

import { camera, textCamera, cameraIcon, containerImg } from "./Photo.style";

interface ImageItem {
  uri: string;
}

interface ImageItemType {
  images: ImageItem[];
  setImages: React.Dispatch<React.SetStateAction<ImageItem[]>>;
}

export default function PhotoPicker({ images, setImages }: ImageItemType) {
  const pickImage = async () => {

    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permiso denegado", "Necesitamos acceso a la cámara.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImages((prev) => [...prev, { uri }]);
    }
  };

  const pickFromGallery = async () => {
    if (images.length === 3) {
      return Alert.alert("Atención", "Solo puedes subir un máximo de 3 fotos.");
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImages((prev) => [...prev, { uri }]);
    }
  };

  const limitImages = images.length === 3;

  return (
    <View>
      <View style={[containerImg, { flexDirection: "row", height: 180 }]}>
        {images.length === 0 && (
          <View style={{ margin: "auto", alignItems: "center" }}>
            <Entypo name="image" size={60} color="#94949463" />
            <Text style={{ color: "#00000062" }}>
              Solo puedes agregar un máximo de 3 fotos
            </Text>
          </View>
        )}

        {images.map((img, index) => (
          <Image
            key={index}
            source={{ uri: img.uri }}
            style={{ width: 90, height: 100, margin: 5, borderRadius: 10 }}
          />
        ))}
      </View>

      <View style={{ flexDirection: "row", margin: "auto" }}>
        <View style={[camera, limitImages && { opacity: 0.4 }]}>
          <TouchableHighlight
            onPress={pickImage}
            underlayColor="transparent"
            disabled={limitImages}
          >
            <Ionicons
              name="camera-outline"
              size={32}
              style={[cameraIcon, textCamera]}
            />
          </TouchableHighlight>
          <Text style={textCamera}>Agregar foto</Text>
        </View>

        <View style={[camera, limitImages && { opacity: 0.4 }]}>
          <TouchableHighlight
            onPress={pickFromGallery}
            underlayColor="transparent"
            disabled={limitImages}
          >
            <MaterialIcons
              name="photo-library"
              size={32}
              style={[cameraIcon, textCamera, { color: "#007AFF" }]}
            />
          </TouchableHighlight>
          <Text style={textCamera}>Galería</Text>
        </View>
      </View>
    </View>
  );
}
