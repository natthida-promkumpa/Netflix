import {View,Text,StyleSheet,TouchableOpacity,Image,
} from "react-native";
import { useRouter } from "expo-router";

export default function IndexScreen() {
  const router = useRouter();

  const profiles = [
    {
      id: 1,
      name: "natthida",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIt_Xqwu4SOvQw8LjxIsymFPb874qr_7WZ-w&s",
    },
    {
      id: 2,
      name: "มุมเด็ก",
      img: "https://images.ctfassets.net/4cd45et68cgf/6iXnjVYXdbXd8RTRZLVLmG/c5ba999638cd648e34b653a58f2fa74e/image1.jpg?w=2000",
    },
    {
      id: 3,
      name: "เพิ่ม",
      img: "https://img.icons8.com/sf-regular-filled/1200/plus-math.jpg",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.netflixText}>NETFLIX</Text>

      <View style={styles.profileRow}>
        {profiles.map((p) => (
          <TouchableOpacity
            key={p.id}
            style={styles.profileButton}
            activeOpacity={0.7}
            onPress={() => router.push("/(tabs)")}
          >
            <Image source={{ uri: p.img }} style={styles.avatar} />
            <Text style={styles.profileName}>{p.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
  netflixText: {
    color: "#E50914",
    fontSize: 42,
    fontWeight: "900",
    letterSpacing: 3,
    marginBottom: 280,
  },
  profileRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  profileButton: {
    alignItems: "center",
    marginHorizontal: 16,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 6,
    marginBottom: 8,
  },
  profileName: {
    color: "white",
    fontSize: 14,
  },
});
