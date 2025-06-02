import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import React from "react";
import { globalStyles } from "../../styles";

export default function Loading() {
  return (
    <View style={globalStyles.centeredContainer}>
      <ActivityIndicator size="small" color="black" />
    </View>
  );
}
