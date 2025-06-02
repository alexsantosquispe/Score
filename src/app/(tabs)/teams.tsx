import { FlatList, View } from "react-native";

import CustomButton from "../../components/atoms/CustomButton";
import EmptyScreen from "../../components/atoms/EmptyScreen";
import HeaderPage from "../../components/atoms/HeaderPage";
import Loading from "../../components/atoms/Loading";
import SafeAreaWrapper from "../../components/atoms/SafeAreaWrapper";
import TeamItem from "../../components/molecules/TeamItem";
import { TeamWithManager } from "../../services/models/types";
import { fetchTeams } from "../../services/api";
import { globalStyles } from "../../styles";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "expo-router";

export default function TeamsScreen() {
  const { data, isLoading } = useQuery<TeamWithManager[] | null>({
    queryKey: ["teams"],
    queryFn: fetchTeams
  });

  if (isLoading) return <Loading />;

  const router = useRouter();

  const handleAddTeam = () => {
    router.push("(modals)/new-team");
  };

  return (
    <SafeAreaWrapper>
      <FlatList
        style={globalStyles.container}
        data={data}
        keyExtractor={(item) => item.teamId.toString()}
        renderItem={({ item }) => <TeamItem {...item} />}
        ListHeaderComponent={
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <HeaderPage title="Equipos" />
            <CustomButton label="Nuevo Equipo" onPress={handleAddTeam} />
          </View>
        }
        ListEmptyComponent={() => <EmptyScreen />}
      />
    </SafeAreaWrapper>
  );
}
