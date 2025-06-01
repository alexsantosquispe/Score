import { View, Image, StyleSheet, Text } from "react-native";

const LOGOS_MAP = {
  "Real Madrid": require("../../assets/logos/real-madrid.png"),
  "Barcelona F.C.": require("../../assets/logos/barcelona.png"),
  "Manchester City": require("../../assets/logos/manchester-city.png"),
  "Manchester United": require("../../assets/logos/manchester-united.png")
};

interface LogoTeam {
  teamName: string;
}

export default function LogoTeamWithName({ teamName }: LogoTeam) {
  const logoSource =
    teamName && teamName in LOGOS_MAP
      ? LOGOS_MAP[teamName as keyof typeof LOGOS_MAP]
      : null;

  return (
    <View style={styles.teamWrapper}>
      <View style={styles.logoWrapper}>
        {logoSource && <Image source={logoSource} style={styles.logoSize} />}
      </View>
      <Text style={styles.teamName}>{teamName}</Text>
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
    width: 80,
    height: 80,
    borderRadius: 16,
    backgroundColor: "whitesmoke"
  },
  logoSize: { width: 60, height: 60 },
  teamName: {
    paddingTop: 10,
    textAlign: "center",
    fontSize: 13,
    fontWeight: 600
  }
});
