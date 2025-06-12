import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle
} from "react-native";

import { Octicons } from "@expo/vector-icons";
import { SvgUri } from "react-native-svg";

interface LogoTeam {
  teamName: string;
  uri: string;
  containerStyles?: StyleProp<ViewStyle>;
  logoWrapperStyles?: StyleProp<ViewStyle>;
  logoSize?: number;
  wrapperPadding?: number;
  isTitleHidden?: boolean;
}

export default function LogoTeamWithName({
  teamName,
  uri,
  containerStyles = {},
  logoWrapperStyles = {},
  logoSize = 60,
  wrapperPadding = 20,
  isTitleHidden = false
}: LogoTeam) {
  const wrapperSize = logoSize + wrapperPadding;

  return (
    <View style={[styles.teamWrapper, containerStyles]}>
      <View
        style={[
          styles.logoWrapper,
          { width: wrapperSize, height: wrapperSize },
          logoWrapperStyles
        ]}
      >
        {uri ? (
          <SvgUri width={logoSize} height={logoSize} uri={uri} />
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
    alignItems: "center"
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
