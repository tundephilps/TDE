import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import { useNavigation } from "@react-navigation/native";

const InvitationCode = () => {
  const navigation = useNavigation();
  const inviteCode = "ABCD1234";

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(inviteCode);
    alert("Invitation code copied!");
  };

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
        <Text style={styles.backText}>Invitation Code</Text>
      </TouchableOpacity>

      {/* Illustration */}
      <Image
        source={require("../assets/images/invite.png")} // Replace with actual image path
        style={styles.image}
      />

      {/* Title */}
      <Text style={styles.title}>Invite & Earn</Text>
      <Text style={styles.subtitle}>
        Invite friends and earn bonus coins when they sign up and make a
        purchase.
      </Text>

      {/* Copy Code Button */}
      <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
        <Text style={styles.copyText}>Copy Link "{inviteCode}"</Text>
        <Ionicons name="copy-outline" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default InvitationCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b1b1b",

    alignItems: "center",
  },
  backButton: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    margin: 20,
    backgroundColor: "none",
  },
  backText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
  },
  image: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
    zIndex: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    color: "#ababab",
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 30,
    marginTop: 10,
  },
  copyButton: {
    flexDirection: "row",
    backgroundColor: "#46382F",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  copyText: {
    color: "#fff",
    fontSize: 14,
    marginRight: 10,
  },
});
