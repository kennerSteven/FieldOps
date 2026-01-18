import { TextInput, View } from "react-native";
import { input, inputText } from "./Input.style";

interface props {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  typeInput: "input" | "textarea";
}

export default function InputComponent({
  value,
  onChange,
  placeholder,
  typeInput,
}: props) {
  return (
    <View style={{ marginTop: 20 }}>
      <TextInput
        multiline={true}
        numberOfLines={5}
        placeholder={placeholder}
        placeholderTextColor={`#888`}
        style={typeInput === "input" ? [input, inputText] : [input]}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
}
