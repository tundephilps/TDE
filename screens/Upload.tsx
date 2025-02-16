import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Upload = () => {
  return <View style={styles.container}>Upload</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#141414",
  },
  backButton: { padding: 10 },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 40,
  },
  searchIcon: { marginRight: 10 },
  input: { flex: 1, color: "white", fontSize: 14 },
});

export default Upload;
