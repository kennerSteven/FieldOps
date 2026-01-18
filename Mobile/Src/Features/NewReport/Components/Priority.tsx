import React from "react";
import { View } from "react-native";
import Radio from "@/Src/Shared/Ui/InputRadio/Radio";
import { RadioOptions } from "@/data/OptionsRadio";

interface SelectPriorityProps {
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}

export default function SelectPriority({
  selectedValue,
  setSelectedValue,
}: SelectPriorityProps) {
  return (
    <View>
      <Radio
        radioItems={RadioOptions}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
    </View>
  );
}
