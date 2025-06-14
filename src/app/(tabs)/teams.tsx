import { FlatList, Text, View } from "react-native";

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
    <SafeAreaWrapper customStyles={{ paddingBottom: 0 }}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16
        }}
      >
        <HeaderPage title="Teams" />
        <CustomButton label="New Team" onPress={handleAddTeam} />
      </View>
      <FlatList
        style={[globalStyles.container, { paddingVertical: 0 }]}
        data={data}
        keyExtractor={(item) => item.teamId}
        renderItem={({ item }) => <TeamItem {...item} />}
        ListEmptyComponent={() => <EmptyScreen />}
      />
    </SafeAreaWrapper>
  );
}
