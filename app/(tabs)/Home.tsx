import { View, Text, StyleSheet } from "react-native";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Netflix</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 22,
  },
});
