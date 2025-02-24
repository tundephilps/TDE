import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  VideoPlay: undefined;
};

type NavigationProps = NavigationProp<RootStackParamList>;

const videos = [
  {
    id: "1",
    title: "C**K",
    views: "432.5k Views",
    description: "A gripping tale of resilience and rebellion",
    image: require("../../assets/images/Film4.png"),
  },
  {
    id: "2",
    title: "Vacation of Horror",
    views: "432.5k Views",
    description: "A gripping tale of resilience and rebellion",
    image: require("../../assets/images/Film6.png"),
  },
  {
    id: "3",
    title: "Last Ball",
    views: "432.5k Views",
    description: "A gripping tale of resilience and rebellion",
    image: require("../../assets/images/Film6.png"),
  },
  {
    id: "4",
    title: "DUI",
    views: "4.5k Views",
    description: "A gripping tale of resilience and rebellion",
    image: require("../../assets/images/Film6.png"),
  },
];

const Animation = () => {
  const navigation = useNavigation<NavigationProps>();
  const handleVideoPlay = async () => {
    navigation.navigate("VideoPlay");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={handleVideoPlay}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.overlay}>
              <Ionicons name="eye" size={10} color="white" />
              <Text style={styles.views}>{item.views}</Text>
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
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

    backgroundColor: "#323232",
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#F51352",
    marginVertical: 2,
    width: 80,
  },
  views: { color: "white", fontSize: 10, marginLeft: 5 },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    marginLeft: 5,
  },
  description: { color: "#ABABAB", fontSize: 12, marginLeft: 5, marginTop: 3 },
});

export default Animation;
