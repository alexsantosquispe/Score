import { Image, StyleSheet, Text, View } from "react-native";
import { LOGOS_MAP, colors } from "../../constants";

import LogoTeamWithName from "./LogoTeamWithName";
import { TeamWithManager } from "../../services/models/types";

export default function TeamItem({
  teamId,
  teamName,
  managerFirstName,
  managerLastName
}: TeamWithManager) {
  const logoSource =
    teamName && teamName in LOGOS_MAP
      ? LOGOS_MAP[teamName as keyof typeof LOGOS_MAP]
      : null;

  return (
    <View style={styles.container}>
      <LogoTeamWithName
        teamName={teamName}
        containerStyles={{
          flex: 1,
          flexGrow: 0,
          width: "40%",
          flexDirection: "row"
        }}
        logoWrapperStyles={{ backgroundColor: "white" }}
        isTitleHidden={true}
        logoSize={100}
      />

      <View style={styles.detailContainer}>
        <Text style={styles.teamName}>{teamName}</Text>
        <View style={styles.managerContainer}>
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
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 18,
    padding: 12,
    marginBottom: 16
  },
  detailContainer: {
    flex: 1,
    justifyContent: "space-between"
  },
  teamName: {
    flexWrap: "wrap",
    fontSize: 28,
    fontWeight: 600,
    marginBottom: 8
  },
  managerContainer: {
    flex: 1,
    flexGrow: 0,
    paddingInline: 12,
    paddingBlock: 8,
    borderRadius: 16,
    backgroundColor: "whitesmoke"
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
