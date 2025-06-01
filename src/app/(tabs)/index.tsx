import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { globalStyles } from "../../styles";
import { useEffect } from "react";
import { apiClient } from "../../services/apiClient";

export default function MatchesScreen() {
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await apiClient.from("matches").select();
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text>Matches</Text>
      <StatusBar style="auto" />
    </View>
  );
}
