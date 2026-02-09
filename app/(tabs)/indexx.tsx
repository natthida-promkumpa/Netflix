import {View,Text,StyleSheet,ScrollView,Image,ImageBackground,TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

export default function TabsIndex() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      
      {/* Header */}
    <View style={styles.header}>
      <TouchableOpacity onPress={() => router.replace("/")}>
        
      </TouchableOpacity>
      <Text style={styles.logo}>NETFLIX</Text>
    </View>


      {/* Banner */}
      <ImageBackground
        source={{
          uri: "https://positioningmag.com/wp-content/uploads/2020/12/1-Money-Heist.jpg",
        }}
        style={styles.banner}
      >
        <View style={styles.bannerOverlay}>
          <Text style={styles.bannerTitle}>MONEYHEIST</Text>
          <Text style={styles.bannerDesc}>
            หนังแนะนำยอดนิยมประจำวันนี้
          </Text>
        </View>
      </ImageBackground>

      {/* Movie Row */}
      <View style={styles.row}>
        <Text style={styles.rowTitle}>Continue watching ดูต่อ</Text>

         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image
            source={{
              uri: "https://hdmthai.com/wp-content/uploads/elementor/thumbs/%E0%B8%98%E0%B8%B5%E0%B9%88%E0%B8%AB%E0%B8%A2%E0%B8%941-qenzd7z6lz64ox4vq7xggfgzo6bc0xc9s82lrphr48.jpeg",
            }}
            style={styles.poster}
          />
          <Image
            source={{
              uri: "https://img.online-station.net/image_content/2024/05/gal-167271-20240421012109-b3ae35e.jpeg",
            }}
            style={styles.poster}
          />
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQizglg_76oyz6X8skNriqk9fnJz2AYhoQakg&s",
            }}
            style={styles.poster}
          />
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkD0Yc8BOJm6MzhJDNJzlcWe1F7R_XPRqVvA&s",
            }}
            style={styles.poster}
          />
        </ScrollView>
      </View>

      <View style={styles.row}>
        <Text style={styles.rowTitle}>Drama  ดราม่า</Text>

         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image
            source={{
              uri: "https://image.condonewb.com/media/1664432707000_iLlMobilelLi_MV5BMTkwOTQ4OTg0OV5BMl5BanBnXkFtZTgwMzQyOTM0OTE%40._V1_FMjpg_UX1000_.webp",
            }}
            style={styles.poster}
          />
          <Image
            source={{
              uri: "https://img.salehere.co.th/p/1200x0/2024/06/12/kmfeue4k4hwl.jpg",
            }}
            style={styles.poster}
          />
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg_7onT_L-TXokFtxTLxFLRne2iVdSoyJWwg&s",
            }}
            style={styles.poster}
          />
          <Image
            source={{
              uri: "https://files.thaiware.site/movie/2025-09/images-336/250925120540k57.jpg",
            }}
            style={styles.poster}
          />
        </ScrollView>
      </View>

      <View style={styles.row}>
        <Text style={styles.rowTitle}>Crime อาชญากรรม</Text>

         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image
            source={{
              uri: "https://img.salehere.co.th/p/1200x0/2023/01/22/zxqsdcncmmfw.jpg",
            }}
            style={styles.poster}
          />
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiySFIv1uiHnyt8T_hxE5rwC944MxTrU78Rw&s",
            }}
            style={styles.poster}
          />
          <Image
            source={{
              uri: "https://cms.dmpcdn.com/ugcarticle/2025/07/02/bf80dc50-570d-11f0-848c-3ff791b6bf8c_webp_original.webp",
            }}
            style={styles.poster}
          />
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_bAH0z9BzjS2ePKclqKCEplHNsH_MJmXEfA&s",
            }}
            style={styles.poster}
          />
        </ScrollView>
      </View>

      <View style={styles.row}>
        <Text style={styles.rowTitle}>Anime อนิเมะ</Text>

         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxX5p_pnPfTR25_CXi5i4owJLxVeTvxxezzw&s",
            }}
            style={styles.poster}
          />
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvAb75wt6ewaUX_ctW5zHwraJ3FGJrlLr0OA&s",
            }}
            style={styles.poster}
          />
          <Image
            source={{
              uri: "https://image.condonewb.com/media/1663307859864_iLlMobilelLi_MV5BMmU0YzExYjctOGM0Yy00NzdkLTgxOGEtYjAwNzcxZGY4YTBiXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.webp",
            }}
            style={styles.poster}
          />
          <Image
            source={{
              uri: "https://www.womjapan.com/wp-content/uploads/2019/08/WEATHERING-WITH-YOU-1.jpg",
            }}
            style={styles.poster}
          />
        </ScrollView>
      </View>

      <View style={styles.row}>
        <Text style={styles.rowTitle}>Psychological Horror หลอนทางจิต</Text>

         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image
            source={{
              uri: "https://undubzapp.com/wp-content/uploads/2019/04/1-28.jpg",
            }}
            style={styles.poster}
          />
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmdwQFxGn7hFy942fyLVsbU9fHV3KpWB7UMQ&s",
            }}
            style={styles.poster}
          />
          <Image
            source={{
              uri: "https://files.thaiware.site/review/2020-07/images/1873-200729191008f6-93.jpg",
            }}
            style={styles.poster}
          />
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU6-FdV1rjI2YBbBAnzGDgDEJ0xiVGz05Z8Q&s",
            }}
            style={styles.poster}
          />
        </ScrollView>
      </View>
    </ScrollView>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
  header: {
    padding: 16,
  },
  backBtn: {
    color: "white",
    fontSize: 14,
    marginBottom: 6,
  },
  logo: {
    color: "#E50914",
    fontSize: 24,
    fontWeight: "900",
  },
  banner: {
    width: "100%",
    height: 220,
  },
  bannerOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  bannerTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  bannerDesc: {
    color: "#ccc",
    fontSize: 14,
    marginTop: 4,
  },
  row: {
    marginTop: 20,
  },
  rowTitle: {
    color: "white",
    fontSize: 18,
    marginLeft: 16,
    marginBottom: 10,
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 6,
    marginLeft: 16,
  },
});
