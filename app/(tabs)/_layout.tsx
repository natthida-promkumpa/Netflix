import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#111" },
        tabBarActiveTintColor: "#E50914",
      }}
    >
      <Tabs.Screen
        name="home"   // ✅ ต้องตรงกับ home.tsx เป๊ะ
        options={{ title: "home" }}
      />
    </Tabs>
  );
}

