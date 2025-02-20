import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

const stories = [
  {
    id: "1",
    title: "Titanic Reverse",
    category: "Romantic",
    description:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque a elementum tempor egestas...",
    image: require("../../assets/images/Frame.png"), // Use local image
  },
  {
    id: "2",
    title: "The Billionaire Pretended to...",
    category: "Romantic Betrayal",
    description:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque a elementum tempor egestas...",
    image: require("../../assets/images/Frame.png"), // Use local image
  },
];

const StoryCard = ({ story }) => (
  <View style={styles.card}>
    <Image source={story.image} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{story.title}</Text>
      <View style={styles.tagContainer}>
        <Text style={styles.tag}>{story.category}</Text>
      </View>
      <Text style={styles.description}>{story.description}</Text>
    </View>
  </View>
);

const SearchCard = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={stories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <StoryCard story={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  card: {
    flexDirection: "row",
    borderRadius: 10,
    paddingVertical: 10,
  },
  image: { width: 100, height: 110, borderRadius: 10, marginRight: 10 },
  textContainer: { flex: 1 },
  title: { color: "white", fontSize: 16, fontWeight: "bold" },
  tagContainer: {
    marginVertical: 5,
    backgroundColor: "#492b16",
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 3,
    alignSelf: "flex-start",
  },
  tag: { color: "#FF6A00", fontSize: 12 },
  description: { color: "gray", fontSize: 14, flexShrink: 1 },
});

export default SearchCard;
