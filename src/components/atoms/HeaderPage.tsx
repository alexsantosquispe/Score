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
    paddingTop: 12,
    paddingBottom: 16
  },
  title: {
    fontSize: 38,
    fontWeight: "500"
  }
});
