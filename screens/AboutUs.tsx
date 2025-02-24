import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const AboutUs = () => {
  const navigation = useNavigation();

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
        <Text style={styles.backText}>About Us</Text>
      </TouchableOpacity>
      {/* Title */}
      <Text style={styles.title}>BingeReel</Text>
      <Text style={styles.description}>
        BingeReel is a short-form movie streaming platform that enables users to
        watch, upload, and earn from engaging content.
      </Text>

      {/* Mission Statement */}
      <Text style={styles.subtitle}>Mission Statement</Text>
      <Text style={styles.description}>
        Bringing creative storytelling to the world, one short film at a time.
      </Text>

      {/* Contact Info */}
      <Text style={styles.subtitle}>Contact Info</Text>
      <Text style={styles.contactText}>Support email: Bingereel@gmail.com</Text>

      {/* Social Media Icons */}
      <View style={styles.socialIcons}>
        <Image
          source={require("../assets/images/Facebook.png")}
          style={styles.icon}
        />
        <Image
          source={require("../assets/images/Instagram.png")}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
    padding: 20,
    alignItems: "center",
  },
  backButton: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    backgroundColor: "none",
    paddingBottom: 20,
  },
  backText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 700,
  },
  balanceContainer: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#222",
    borderRadius: 10,
  },
  title: { color: "white", fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  subtitle: { color: "white", fontSize: 18, fontWeight: "bold", marginTop: 20 },
  description: {
    color: "#C0C0C0",
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 10,
    marginTop: 5,
  },
  contactText: { color: "white", fontSize: 14, marginTop: 10 },
  socialIcons: { flexDirection: "row", marginTop: 10 },
  icon: { width: 30, height: 30, marginHorizontal: 8 },
});

export default AboutUs;
