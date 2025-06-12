import { Feather, Ionicons } from "@expo/vector-icons"; // Import icons if needed
import { POSITION, Player } from "../../services/models/types";
import { StyleSheet, Text, View } from "react-native";

import { colors } from "../../constants";

type PlayerItemProps = Player & {
  indexRow: number;
};

const POSITIONS_COLORS = {
  [POSITION.GOALKEEPER]: "dimgray",
  [POSITION.DEFENDER]: "lightseagreen",
  [POSITION.MIDFIELDER]: "royalblue",
  [POSITION.FORWARD]: "orangered"
};

export default function PlayerItem({
  indexRow,
  firstName,
  lastName,
  position,
  squadNumber,
  teams
}: PlayerItemProps) {
  const positionColor = POSITIONS_COLORS[position] || "gray";

  return (
    <View style={styles.container}>
      <Text
        style={{ fontSize: 10, fontWeight: 700, color: "dimgray" }}
      >{`#${indexRow}`}</Text>

      <View style={styles.infoWrapper}>
        <View style={styles.playerContainer}>
          <View style={styles.avatar}>
            <Feather name="user" size={30} color="gray" />
          </View>

          <View style={styles.nameWrapper}>
            <Text style={styles.nameText}>{`${[firstName, lastName]
              .join(" ")
              .trim()}`}</Text>
            <View style={styles.badgesSection}>
              <View style={styles.squadWrapper}>
                <Ionicons name="shirt" size={18} color="gray" />
                <Text style={styles.squadNumberText}>{squadNumber}</Text>
              </View>

              <Text
                style={[
                  styles.positionBadge,
                  { backgroundColor: positionColor }
                ]}
              >
                {position}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={{ fontWeight: 600, color: "dimgray", fontSize: 12 }}>
        {teams?.name || "--"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 0,
    flexDirection: "row",
    paddingVertical: 12
  },
  avatar: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.background
  },
  infoWrapper: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 8
  },
  playerContainer: {
    flex: 1,
    flexDirection: "row"
  },
  nameWrapper: { flex: 1, paddingHorizontal: 8 },
  nameText: { fontSize: 15, fontWeight: 400, marginBottom: 6 },
  badgesSection: {
    flexDirection: "row",
    alignItems: "center"
  },
  squadWrapper: { flexDirection: "row", alignItems: "center", width: 60 },
  squadNumberText: {
    fontWeight: 700,
    fontSize: 15,
    paddingLeft: 4
  },
  positionBadge: {
    color: "white",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    fontWeight: 700,
    fontSize: 12
  }
});
