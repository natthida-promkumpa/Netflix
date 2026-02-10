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
  {
    id: 4,
    title: "Juvenile Justice.",
    image:
      "https://s359.kapook.com/pagebuilder/12e029b3-a929-41f0-8ea4-9c9a967b80c5.jpg",
  },
  {
    id: 5,
    title: "Fate: The Winx Saga",
    image:
      "https://static.trueplookpanya.com/tppy/member/m_545000_547500/545920/cms/images/Fate%20The%20Winx%20Saga.jpg",
  },
  {
    id: 6,
    title: "The School for Good and Evil",
    image:
      "https://images.lifestyleasia.com/wp-content/uploads/sites/8/2022/12/21194438/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87-Netflix-%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%94%E0%B8%B9_02-691x1024.jpg",
  },
  {
    id: 7,
    title: "The in Between",
    image:
      "https://images.lifestyleasia.com/wp-content/uploads/sites/8/2022/12/21194447/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87-Netflix-%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%94%E0%B8%B9_05-608x900.jpg",
  },
  {
    id: 8,
    title: "Lady Chatterley’s Lover",
    image:
      "https://images.lifestyleasia.com/wp-content/uploads/sites/8/2022/12/21194450/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87-Netflix-%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%94%E0%B8%B9_06-608x900.jpg",
  },
  {
    id: 9,
    title: "Guillermo del Toro’s Pinocchio",
    image:
      "https://images.lifestyleasia.com/wp-content/uploads/sites/8/2022/12/21194500/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87-Netflix-%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%94%E0%B8%B9_09-607x900.jpg",
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
