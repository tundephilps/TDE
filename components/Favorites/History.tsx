import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const favorites = [
  {
    id: "1",
    title: "The Forbidden Love",
    episodes: "EP. 32 / EP. 65",
    image: require("../../assets/images/Empress.png"),
  },
  {
    id: "2",
    title: "Her Sister’s Pain",
    episodes: "EP. 10 / EP. 85",
    image: require("../../assets/images/Empress.png"),
  },
  {
    id: "3",
    title: "New Difference",
    episodes: "EP. 32 / EP. 65",
    image: require("../../assets/images/Empress.png"),
  },
  {
    id: "4",
    title: "The Black Empress",
    episodes: "EP. 32 / EP. 65",
    image: require("../../assets/images/Empress.png"),
  },
];

const History = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.episodes}>{item.episodes}</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="star-outline" size={20} color="#ABABAB" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  card: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  image: { width: 90, height: 90, borderRadius: 5 },
  details: { flex: 1, marginLeft: 15 },
  title: { color: "white", fontSize: 16, fontWeight: "bold" },
  episodes: { color: "#FF6A00", fontSize: 14, marginTop: 5 },
});

export default History;
