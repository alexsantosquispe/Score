import { StyleSheet, TextInput, View } from "react-native";

import { colors } from "../../constants";

type InputFieldProps = {
  value: string;
  placeholder?: string;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
  onChange: (text: string) => void;
};

export default function InputField({
  value,
  placeholder,
  onChange,
  keyboardType = "default"
}: InputFieldProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChange}
        autoCapitalize="none"
        clearButtonMode="while-editing"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 12
  },
  input: {
    backgroundColor: "whitesmoke",
    borderColor: colors.background,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 17
  }
});
