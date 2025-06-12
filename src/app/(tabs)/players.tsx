import { FlatList, View } from "react-native";
import { useMemo, useState } from "react";

import EmptyScreen from "../../components/atoms/EmptyScreen";
import HeaderPage from "../../components/atoms/HeaderPage";
import Loading from "../../components/atoms/Loading";
import { Player } from "../../services/models/types";
import PlayerItem from "../../components/molecules/PlayerItem";
import SafeAreaWrapper from "../../components/atoms/SafeAreaWrapper";
import SearchBar from "../../components/molecules/SearchBar";
import { fetchPlayers } from "../../services/api";
import { globalStyles } from "../../styles";
import { useQuery } from "@tanstack/react-query";

export default function PlayersScreen() {
  const [searchText, setSearchText] = useState("");
  const { data, isLoading } = useQuery<Player[] | null>({
    queryKey: ["players"],
    queryFn: fetchPlayers
  });

  const filteredPlayers = useMemo(() => {
    return !!searchText.trim()
      ? data?.filter((player) =>
          player.position.toLowerCase().includes(searchText.toLowerCase())
        )
      : data;
  }, [searchText, data]);

  if (isLoading) return <Loading />;

  return (
    <SafeAreaWrapper customStyles={{ backgroundColor: "white" }}>
      <View
        style={[
          globalStyles.container,
          { backgroundColor: "white", paddingVertical: 0 }
        ]}
      >
        <HeaderPage title="Players" />
        <SearchBar onChange={setSearchText} />
        <FlatList
          style={(globalStyles.container, { padding: 0 })}
          data={filteredPlayers}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <PlayerItem indexRow={index + 1} {...item} />
          )}
          ListEmptyComponent={() => <EmptyScreen />}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 1,
                width: "100%",
                backgroundColor: "whitesmoke"
              }}
            />
          )}
        />
      </View>
    </SafeAreaWrapper>
  );
}
