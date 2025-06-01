import { FlatList, Text } from "react-native";

import HeaderPage from "../../components/atoms/HeaderPage";
import { Match } from "../../services/models/types";
import MatchItem from "../../components/molecules/MatchItem";
import SafeAreaWrapper from "../../components/atoms/SafeAreaWrapper";
import { fetchMatches } from "../../services/api";
import { globalStyles } from "../../styles";
import { useQuery } from "@tanstack/react-query";

export default function MatchesScreen() {
  const { data, isLoading } = useQuery<Match[] | null>({
    queryKey: ["matches"],
    queryFn: fetchMatches
  });

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <SafeAreaWrapper>
      <FlatList
        style={[globalStyles.container, { marginTop: 16 }]}
        data={data}
        ListHeaderComponent={<HeaderPage title="Partidos" />}
        keyExtractor={(item: Match) => item.id.toString()}
        renderItem={({ item }) => <MatchItem {...item} />}
      />
    </SafeAreaWrapper>
  );
}
