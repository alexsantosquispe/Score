import { FlatList, Text, View } from "react-native";
import { globalStyles } from "../../styles";

import { fetchMatches } from "../../services/api";
import { useQuery } from "@tanstack/react-query";
import Header from "../../components/header";
import MatchItem from "../../components/matchItem";
import { Match } from "../../services/models/types";
import SafeAreaWrapper from "../../components/safeAreaWrapper";

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
        ListHeaderComponent={<Header title="Partidos" />}
        keyExtractor={(item: Match) => item.id.toString()}
        renderItem={({ item }) => <MatchItem {...item} />}
      />
    </SafeAreaWrapper>
  );
}
