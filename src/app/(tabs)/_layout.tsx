import { Tabs } from "expo-router";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          elevation: 0
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Partidos",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="soccer-field"
              color={color}
              size={28}
            />
          )
        }}
      />
      <Tabs.Screen
        name="teams"
        options={{
          title: "Equipos",
          tabBarIcon: ({ color }) => (
            <Feather name="shield" color={color} size={28} />
          )
        }}
      />
      <Tabs.Screen
        name="players"
        options={{
          title: "Jugadores",
          tabBarIcon: ({ color }) => (
            <Feather name="users" color={color} size={28} />
          )
        }}
      />
    </Tabs>
  );
}
