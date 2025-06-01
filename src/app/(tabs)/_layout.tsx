import { Slot, Tabs } from "expo-router";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { PlatformPressable } from "@react-navigation/elements";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0
        },
        tabBarButton: (props) => (
          <PlatformPressable
            {...props}
            android_ripple={{ color: "transparent" }} // Disables the ripple effect for Android
          />
        )
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Matches",
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
          title: "Teams",
          tabBarIcon: ({ color, size }) => (
            <Feather name="shield" color={color} size={28} />
          )
        }}
      />
      <Tabs.Screen
        name="players"
        options={{
          title: "Players",
          tabBarIcon: ({ color, size }) => (
            <Feather name="users" color={color} size={28} />
          )
        }}
      />
    </Tabs>
  );
}
