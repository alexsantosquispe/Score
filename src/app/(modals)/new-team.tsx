import { Alert, Button, Text, TextInput, View } from "react-native";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import CustomButton from "../../components/atoms/CustomButton";
import HeaderPage from "../../components/atoms/HeaderPage";
import InputField from "../../components/atoms/InputField";
import SafeAreaWrapper from "../../components/atoms/SafeAreaWrapper";
import { addTeamWithManager } from "../../services/api";
import { globalStyles } from "../../styles";
import queryClient from "../../services/queryClient";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function NewTeamModal() {
  const router = useRouter();

  const [teamName, setTeamName] = useState("");
  const [managerFirstName, setManagerFirstName] = useState("");
  const [managerLastName, setManagerLastName] = useState("");
  const [managerAge, setManagerAge] = useState("");

  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      addTeamWithManager(
        teamName,
        managerFirstName,
        managerLastName,
        parseInt(managerAge)
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teams"] });
      Alert.alert("Éxito", "Equipo creado correctamente.");
      router.back();
    },
    onError: () => {
      Alert.alert("Error", "No se pudo crear el equipo.");
    }
  });

  const handleCreateTeam = () => {
    if (
      !teamName.trim() ||
      !managerFirstName.trim() ||
      !managerLastName.trim() ||
      !managerAge.trim()
    ) {
      Alert.alert("Error", "Todos los campos son obligatorios.");
      return;
    }
    if (isNaN(parseInt(managerAge))) {
      Alert.alert("Error", "La edad debe ser un número.");
      return;
    }
    mutate();
  };

  return (
    <SafeAreaWrapper customStyles={{ backgroundColor: "white" }}>
      <View style={[globalStyles.container, { backgroundColor: "white" }]}>
        <HeaderPage title="Nuevo Equipo" />
        <InputField
          placeholder="Nombre del equipo"
          value={teamName}
          onChange={setTeamName}
        />
        <InputField
          placeholder="Nombre del manager"
          value={managerFirstName}
          onChange={setManagerFirstName}
        />
        <InputField
          placeholder="Apellido del manager"
          value={managerLastName}
          onChange={setManagerLastName}
        />
        <InputField
          placeholder="Edad del manager"
          value={managerAge}
          onChange={setManagerAge}
          keyboardType="numeric"
        />

        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "space-between"
          }}
        >
          <CustomButton
            label="Cancelar"
            onPress={() => router.back()}
            customStylesButton={{
              width: "48%",
              backgroundColor: "whitesmoke"
            }}
            customStylesLabel={{ color: "black" }}
          />

          <CustomButton
            label={isPending ? "Creando..." : "Crear Equipo"}
            onPress={handleCreateTeam}
            customStylesButton={{
              width: "48%"
            }}
          />
        </View>
      </View>
    </SafeAreaWrapper>
  );
}

const styles = {
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 6,
    marginBottom: 15
  }
};
