import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const trendingMovies = [
  {
    id: 1,
    title: "Stranger Things",
    image:
      "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
  },
  {
    id: 2,
    title: "Wednesday",
    image:
      "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
  },
  {
    id: 3,
    title: "Money Heist",
    image:
      "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
  },
];

export default function TrendingScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🔥 มาแรงใน Netflix</Text>

      {trendingMovies.map((movie) => (
        <TouchableOpacity key={movie.id} style={styles.card}>
          <Image source={{ uri: movie.image }} style={styles.image} />

          {/* ชื่อหนังอยู่ด้านล่าง */}
          <Text style={styles.title} numberOfLines={2}>
            {movie.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    margin: 16,
  },
  card: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  image: {
    width: "100%",
    height: 420, // ปกใหญ่
    borderRadius: 12,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
});
