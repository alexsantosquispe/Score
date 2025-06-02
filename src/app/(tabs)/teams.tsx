import { FlatList, Text, View } from "react-native";

import EmptyScreen from "../../components/atoms/EmptyScreen";
import HeaderPage from "../../components/atoms/HeaderPage";
import Loading from "../../components/atoms/Loading";
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

  if (isLoading) return <Loading />;

  return (
    <SafeAreaWrapper>
      <FlatList
        style={globalStyles.container}
        data={data}
        keyExtractor={(item) => item.teamId.toString()}
        renderItem={({ item }) => <TeamItem {...item} />}
        ListHeaderComponent={<HeaderPage title="Equipos" />}
        ListEmptyComponent={() => <EmptyScreen />}
      />
    </SafeAreaWrapper>
  );
}
