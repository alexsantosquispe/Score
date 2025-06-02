import { Image, StyleSheet, Text, View } from "react-native";
import { LOGOS_MAP, colors } from "../../constants";

import LogoTeamWithName from "./LogoTeamWithName";
import { TeamWithManager } from "../../services/models/types";

export default function TeamItem({
  teamName,
  managerFirstName,
  managerLastName
}: TeamWithManager) {
  return (
    <View style={styles.container}>
      <LogoTeamWithName
        teamName={teamName}
        containerStyles={{
          width: "40%",
          alignItems: "flex-start"
        }}
        logoWrapperStyles={{ backgroundColor: "white" }}
        isTitleHidden={true}
        logoSize={90}
      />

      <View style={styles.detailContainer}>
        <Text style={styles.teamName}>{teamName}</Text>
        <View>
          <Text style={styles.mangerText}>Director Técnico</Text>
          <Text
            style={styles.mangerName}
          >{`${managerFirstName} ${managerLastName}`}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 18,
    padding: 12,
    marginBottom: 16
  },
  detailContainer: {
    width: "55%",
    justifyContent: "space-between"
  },
  teamName: {
    flexWrap: "wrap",
    fontSize: 24,
    fontWeight: 500,
    marginBottom: 8
  },
  mangerText: {
    fontWeight: 600,
    fontSize: 13,
    marginBottom: 4,
    color: "gray"
  },
  mangerName: {
    fontWeight: 600,
    fontSize: 16
  }
});
