import { Pressable, Text, View } from "react-native";
import { btn, btnOutline, btnText } from "./Button.style";
import { FontAwesome } from "@expo/vector-icons";

interface props {
  onPress: () => void;
  styleButton: "btn" | "btn-outline";
  labelButton: string;
}

export default function ButtonComponent({
  onPress,
  styleButton,
  labelButton,
}: props) {
  return (
    <Pressable
      style={
        styleButton === "btn"
          ? btn
          : styleButton === "btn-outline"
            ? btnOutline
            : null
      }
      onPress={onPress}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome name="floppy-o" size={28} color="#ffffff" />
        <Text
          style={
            styleButton === "btn-outline"
              ? [btnText, { color: "black" }]
              : styleButton === "btn"
                ? btnText
                : ""
          }
        >
          {labelButton}
        </Text>
      </View>
    </Pressable>
  );
}
