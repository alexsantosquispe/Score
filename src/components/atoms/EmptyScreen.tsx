import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { globalStyles } from "../../styles";

export default function EmptyScreen({
  message = "No data to display"
}: {
  message?: string;
}) {
  return (
    <View style={globalStyles.centeredContainer}>
      <Text style={{ fontWeight: 500, color: "gray" }}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
