import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle
} from "react-native";

import React from "react";

interface CustomButtonProps {
  label: string;
  onPress: () => void;
  customStylesButton?: StyleProp<ViewStyle>;
  customStylesLabel?: StyleProp<TextStyle>;
}

export default function CustomButton({
  label,
  onPress,
  customStylesButton = {},
  customStylesLabel = {}
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, customStylesButton]}
      onPress={onPress}
    >
      <Text style={[styles.labelButton, customStylesLabel]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "black",
    borderRadius: 12
  },
  labelButton: {
    color: "white",
    fontSize: 16,
    fontWeight: 600
  }
});
