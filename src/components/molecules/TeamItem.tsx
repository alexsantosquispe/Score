import { StyleSheet, Text, View } from "react-native";

import LogoTeamWithName from "./LogoTeamWithName";
import { TeamWithManager } from "../../services/models/types";

export default function TeamItem({
  teamName,
  teamLogo,
  managerFirstName,
  managerLastName
}: TeamWithManager) {
  return (
    <View style={styles.container}>
      <LogoTeamWithName
        teamName={teamName}
        uri={teamLogo}
        containerStyles={{ alignItems: "flex-start" }}
        logoWrapperStyles={{ backgroundColor: "white" }}
        isTitleHidden={true}
        logoSize={60}
      />

      <View style={styles.detailContainer}>
        <Text style={styles.teamName}>{teamName}</Text>
        <View>
          <Text style={styles.mangerText}>Manager</Text>
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
    borderRadius: 12,
    marginBottom: 8
  },
  detailContainer: {
    width: "55%",
    justifyContent: "center"
  },
  teamName: {
    flexWrap: "wrap",
    fontSize: 15,
    fontWeight: 500,
    marginBottom: 8
  },
  mangerText: {
    fontWeight: 600,
    fontSize: 10,
    color: "gray"
  },
  mangerName: {
    fontWeight: 600,
    fontSize: 12
  }
});
