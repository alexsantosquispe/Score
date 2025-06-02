import { Platform, StyleSheet } from "react-native";

import { colors } from "./constants";

export const globalStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.background
  },
  container: {
    flex: 1,
    margin: 0,
    ...Platform.select({
      ios: {
        padding: 4,
        paddingLeft: 12,
        paddingRight: 12
      },
      android: {
        padding: 16
      }
    }),
    backgroundColor: colors.background
  },
  centeredContainer: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center"
  }
});
