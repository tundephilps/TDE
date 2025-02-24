import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const Guidelines: React.FC = () => {
  return (
    <LinearGradient
      colors={["#111111", "#000000", "#994000", "#4B3322"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.headerContainer}>
        <Ionicons
          name="bulb-outline"
          size={20}
          color="white"
          style={styles.icon}
        />
        <Text style={styles.headerText}>Guidelines</Text>
      </View>

      <View style={styles.listContainer}>
        <View style={styles.bulletItem}>
          <View style={styles.bullet} />
          <Text style={styles.bulletText}>Vertical Movies Only</Text>
        </View>

        <View style={styles.bulletItem}>
          <View style={styles.bullet} />
          <Text style={styles.bulletText}>
            Each Episode must be between 1 to 3 minutes in duration
          </Text>
        </View>

        <View style={styles.bulletItem}>
          <View style={styles.bullet} />
          <Text style={styles.bulletText}>Total of 40 to 120 Episodes</Text>
        </View>

        <View style={styles.bulletItem}>
          <View style={styles.bullet} />
          <Text style={styles.bulletText}>No Copyright Content</Text>
        </View>

        <View style={styles.bulletItem}>
          <View style={styles.bullet} />
          <Text style={styles.bulletText}>
            Ensure high video quality (720p minimum)
          </Text>
        </View>
        <View style={styles.bulletItem}>
          <View style={styles.bullet} />
          <Text style={styles.bulletText}>Movies should have subtitles</Text>
        </View>
        <View style={styles.bulletItem}>
          <View style={styles.bullet} />
          <Text style={styles.bulletText}>
            Content should comply with platform rules
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 8,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  icon: {
    marginRight: 8,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  listContainer: {
    paddingLeft: 5,
  },
  bulletItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  bullet: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "white",
    marginRight: 10,
  },
  bulletText: {
    color: "white",
    fontSize: 14,
    lineHeight: 20,
  },
});

export default Guidelines;
