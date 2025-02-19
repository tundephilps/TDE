import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const videos = [
  {
    id: "1",
    title: "C**K",
    views: "432.5k Views",
    description: "A gripping tale of resilience and rebellion",
    image: require("../../assets/images/Film8.png"),
  },
  {
    id: "2",
    title: "Vacation of Horror",
    views: "432.5k Views",
    description: "A gripping tale of resilience and rebellion",
    image: require("../../assets/images/Film8.png"),
  },
  {
    id: "3",
    title: "Last Ball",
    views: "432.5k Views",
    description: "A gripping tale of resilience and rebellion",
    image: require("../../assets/images/Film8.png"),
  },
  {
    id: "4",
    title: "DUI",
    views: "4.5k Views",
    description: "A gripping tale of resilience and rebellion",
    image: require("../../assets/images/Film8.png"),
  },
];

const AfricanStories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.overlay}>
              <Ionicons name="play" size={14} color="white" />
              <Text style={styles.views}>{item.views}</Text>
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  card: {
    flex: 1,
    borderRadius: 15,
    paddingBottom: 10,
    gap: 1,
    marginHorizontal: 4,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  overlay: {
    flexDirection: "row",
    alignItems: "center",
    // position: "absolute",
    // top: 10,
    // left: 10,

    backgroundColor: "#323232",
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#FFD700",
    marginVertical: 2,
    width: 100,
  },
  views: { color: "white", fontSize: 12, marginLeft: 5 },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    marginLeft: 5,
  },
  description: { color: "#ABABAB", fontSize: 12, marginLeft: 5, marginTop: 3 },
});

export default AfricanStories;
