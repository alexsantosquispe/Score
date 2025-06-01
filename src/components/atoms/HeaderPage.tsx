import { StyleSheet, Text, View } from "react-native";

interface HeaderProps {
  title: string;
}

export default function HeaderPage({ title }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 4,
    paddingBottom: 8
  },
  title: {
    fontSize: 40,
    fontWeight: "500"
  }
});
