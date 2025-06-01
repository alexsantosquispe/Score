import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle
} from "react-native";

import { LOGOS_MAP } from "../../constants";
import { Octicons } from "@expo/vector-icons";

interface LogoTeam {
  teamName: string;
  containerStyles?: StyleProp<ViewStyle>;
  logoWrapperStyles?: StyleProp<ViewStyle>;
  logoSize?: number;
  wrapperPadding?: number;
  isTitleHidden?: boolean;
}

export default function LogoTeamWithName({
  teamName,
  containerStyles = {},
  logoWrapperStyles = {},
  logoSize = 60,
  wrapperPadding = 20,
  isTitleHidden = false
}: LogoTeam) {
  const wrapperSize = logoSize + wrapperPadding;
  const logoSource =
    teamName && teamName in LOGOS_MAP
      ? LOGOS_MAP[teamName as keyof typeof LOGOS_MAP]
      : null;

  return (
    <View style={[styles.teamWrapper, containerStyles]}>
      <View
        style={[
          styles.logoWrapper,
          { width: wrapperSize, height: wrapperSize },
          logoWrapperStyles
        ]}
      >
        {logoSource ? (
          <Image
            source={logoSource}
            style={{ width: logoSize, height: logoSize }}
          />
        ) : (
          <View>
            <Octicons name="shield" size={logoSize} color="gray" />
          </View>
        )}
      </View>
      {!isTitleHidden && <Text style={styles.teamName}>{teamName}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  teamWrapper: {
    alignContent: "space-between",
    alignItems: "center",
    width: "33%"
  },
  logoWrapper: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: "whitesmoke"
  },
  teamName: {
    paddingTop: 10,
    textAlign: "center",
    fontSize: 13,
    fontWeight: 600
  }
});
