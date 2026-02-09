import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function MyNetflixScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Profile */}
      <View style={styles.profile}>
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/9e/59/55/9e5955f6b8a6d5b56d91c3a4e5e6f5f3.jpg",
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Natthida</Text>
      </View>

      {/* Menu */}
      <TouchableOpacity style={styles.menu}>
        <Ionicons name="heart-outline" size={22} color="#fff" />
        <Text style={styles.menuText}>รายการของฉัน</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menu}>
        <Ionicons name="download-outline" size={22} color="#fff" />
        <Text style={styles.menuText}>ดาวน์โหลด</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menu}>
        <Ionicons name="settings-outline" size={22} color="#fff" />
        <Text style={styles.menuText}>การตั้งค่า</Text>
      </TouchableOpacity>

      {/* Logout */}
          <TouchableOpacity
  style={styles.menu}
  onPress={() => router.replace("/")}
>
  <Ionicons name="log-out-outline" size={22} color="#ff4444" />
  <Text style={[styles.menuText, { color: "#ff4444" }]}>
    ออกจากระบบ
  </Text>
</TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  profile: {
    alignItems: "center",
    marginVertical: 32,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 10,
  },
  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 12,
  },
  menu: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
  },
  menuText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 16,
  },
});
