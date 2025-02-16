import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [incognitoEnabled, setIncognitoEnabled] = useState(true);

  return (
    <View>
      <Text style={styles.sectionTitle}>Settings</Text>

      <View style={styles.card}>
        <TouchableOpacity style={styles.row}>
          <MaterialCommunityIcons name="lamp" size={20} color="#20409a" />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Theme</Text>
            <Text style={styles.subtitle}>Light</Text>
          </View>
          <Feather name="chevron-right" size={20} color="#20409a" />
        </TouchableOpacity>

        <View style={styles.row}>
          <Feather name="bell" size={20} color="#20409a" />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Notifications</Text>
            <Text style={styles.subtitle}>Receive immediate E-mails</Text>
          </View>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
          />
        </View>

        <View style={styles.row}>
          <Feather name="eye" size={20} color="#20409a" />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Incognito mode</Text>
            <Text style={styles.subtitle}>Hide account balance</Text>
          </View>
          <Switch
            value={incognitoEnabled}
            onValueChange={setIncognitoEnabled}
          />
        </View>
      </View>
      <View style={{ height: 70 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F5F5F5" },
  sectionTitle: {
    fontSize: 16,
    color: "#666",
    marginVertical: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  textContainer: { flex: 1, marginLeft: 10 },
  title: { fontSize: 16, fontWeight: "bold" },
  subtitle: { fontSize: 12, color: "#666" },
});

export default SettingsScreen;
