import { FlatList } from "react-native";

import HeaderPage from "../../components/atoms/HeaderPage";
import Loading from "../../components/atoms/Loading";
import { Match } from "../../services/models/types";
import MatchItem from "../../components/molecules/MatchItem";
import SafeAreaWrapper from "../../components/atoms/SafeAreaWrapper";
import { fetchMatches } from "../../services/api";
import { globalStyles } from "../../styles";
import { useQuery } from "@tanstack/react-query";
import EmptyScreen from "../../components/atoms/EmptyScreen";

export default function MatchesScreen() {
  const { data, isLoading } = useQuery<Match[] | null>({
    queryKey: ["matches"],
    queryFn: fetchMatches
  });

  if (isLoading) return <Loading />;

  return (
    <SafeAreaWrapper>
      <FlatList
        style={
          (globalStyles.container,
          { paddingVertical: 0, paddingHorizontal: 16 })
        }
        data={data}
        keyExtractor={(item: Match) => item.id.toString()}
        renderItem={({ item }) => <MatchItem {...item} />}
        ListHeaderComponent={<HeaderPage title="Matches" />}
        ListEmptyComponent={() => <EmptyScreen />}
      />
    </SafeAreaWrapper>
  );
}
