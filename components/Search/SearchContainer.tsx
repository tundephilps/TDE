import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SearchContainer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#888"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Vampire Romance Stories..."
          placeholderTextColor="#aaa"
          style={styles.input}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#323232",
    gap: 12,
  },
  backButton: { padding: 8, backgroundColor: "#3f3e3e", borderRadius: 8 },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#424242",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,

    borderWidth: 1,
    borderColor: "#ababab",
  },
  searchIcon: { marginRight: 10 },
  input: {
    flex: 1,
    color: "white",
    fontSize: 14,
  },
});

export default SearchContainer;
