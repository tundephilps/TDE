import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const languages = ["English", "Polish", "German", "Hindu"];

const Language = () => {
  const navigation = useNavigation();
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <View
          style={{
            backgroundColor: "#5c5c59",
            padding: 2,
            opacity: 0.7,
            borderRadius: 6,
          }}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </View>
        <Text style={styles.backText}>App Language</Text>
      </TouchableOpacity>

      {/* Language List */}
      {languages.map((lang, index) => (
        <TouchableOpacity
          key={index}
          style={styles.languageRow}
          onPress={() => setSelectedLanguage(lang)}
        >
          <Text style={styles.languageText}>{lang}</Text>
          <Text
            style={
              selectedLanguage === lang ? styles.selected : styles.unselected
            }
          >
            ⬤
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#141414", padding: 20 },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 700,
  },
  languageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  languageText: { color: "white", fontSize: 16 },
  selected: { color: "#ff7300", fontSize: 18 },
  unselected: { color: "#555", fontSize: 18 },
});

export default Language;
