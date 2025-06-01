import { Image, StyleSheet, Text, View } from "react-native";

import LogoTeamWithName from "./LogoTeamWithName";
import { Match } from "../../services/models/types";
import { getFormattedDateAndTime } from "../../utils";

type MatchItemProps = Match;

export default function MatchItem({
  homeTeamName,
  awayTeamName,
  homeScore,
  awayScore,
  matchDate
}: MatchItemProps) {
  const { formattedDate, formattedTime } = getFormattedDateAndTime(matchDate);
  return (
    <View style={styles.container}>
      <LogoTeamWithName teamName={homeTeamName} />

      <View
        style={{
          alignItems: "center"
        }}
      >
        <Text style={{ fontWeight: 700 }}>{formattedTime}</Text>
        <Text style={{ color: "gray", fontSize: 13 }}>{formattedDate}</Text>

        <View style={{ alignItems: "center" }}>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>{homeScore}</Text>
            <Text style={styles.scoreText}>-</Text>
            <Text style={styles.scoreText}>{awayScore}</Text>
          </View>
          <View style={styles.statusMatch}>
            <Text style={styles.statusText}>Finalizado</Text>
          </View>
        </View>
      </View>

      <LogoTeamWithName teamName={awayTeamName} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 150,
    backgroundColor: "white",
    borderRadius: 18,
    padding: 12,
    marginBottom: 16
  },
  scoreContainer: {
    flexDirection: "row",
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  scoreText: {
    fontSize: 32,
    fontWeight: 500,
    marginHorizontal: 6
  },
  statusMatch: {
    marginTop: 4,
    paddingBlock: 6,
    paddingInline: 16,
    backgroundColor: "whitesmoke",
    borderRadius: 10
  },
  statusText: {
    fontSize: 14,
    fontWeight: 500,
    color: "gray"
  }
});
