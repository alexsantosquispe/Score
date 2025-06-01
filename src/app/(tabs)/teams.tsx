import { FlatList, Text, View } from "react-native";

import HeaderPage from "../../components/atoms/HeaderPage";
import SafeAreaWrapper from "../../components/atoms/SafeAreaWrapper";
import TeamItem from "../../components/molecules/TeamItem";
import { TeamWithManager } from "../../services/models/types";
import { fetchTeams } from "../../services/api";
import { globalStyles } from "../../styles";
import { useQuery } from "@tanstack/react-query";

export default function TeamsScreen() {
  const { data, isLoading } = useQuery<TeamWithManager[] | null>({
    queryKey: ["teams"],
    queryFn: fetchTeams
  });

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <SafeAreaWrapper>
      <View style={globalStyles.container}>
        <FlatList
          style={[globalStyles.container, { marginTop: 16 }]}
          data={data}
          ListHeaderComponent={<HeaderPage title="Equipos" />}
          renderItem={({ item }) => <TeamItem {...item} />}
          keyExtractor={(item) => item.teamId.toString()}
        />
      </View>
    </SafeAreaWrapper>
  );
}
