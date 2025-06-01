import { StyleSheet, Text, View, Image } from "react-native";
import { Match } from "../services/models/types";
import { getFormattedDateAndTime } from "../utils";
import LogoTeamWithName from "./logoTeam";
import { colors } from "../constants";

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
    <View>
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
