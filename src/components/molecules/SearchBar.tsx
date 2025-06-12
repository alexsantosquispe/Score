import { StyleSheet, TextInput, View } from "react-native";

import { colors } from "../../constants";
import { useState } from "react";

type SearchBarProps = {
  onChange: (text: string) => void;
};

export default function SearchBar({ onChange }: SearchBarProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search by position..."
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
