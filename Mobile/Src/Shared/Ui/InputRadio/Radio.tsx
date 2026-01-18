import * as React from "react";
import { Text, Pressable } from "react-native";
import { RadioOptionsType } from "../../../../data/OptionsRadio";
import { RadioButton } from "react-native-paper";
import { box, boxActive, text, textActive } from "./Radio.style";

interface RadioProps {
  radioItems: RadioOptionsType[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}

export default function Radio({
  radioItems,
  selectedValue,
  setSelectedValue,
}: RadioProps) {


  
  const handlePress = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <RadioButton.Group onValueChange={handlePress}   value={selectedValue}>
      {radioItems.map((item, key) => (
        <Pressable
          key={key}
          onPress={() => handlePress(item.value)}
          style={[box, selectedValue === item.value && boxActive]}
        >
          <RadioButton value={item.value} color="#007AFF" />
          <Text style={selectedValue === item.value ? textActive : text}>
            {item.label}
          </Text>
        </Pressable>
      ))}
    </RadioButton.Group>
  );
}
