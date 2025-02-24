import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Settings = () => {
  const navigation = useNavigation();
  const [isNotificationsEnabled, setNotificationsEnabled] = useState(true);
  const [isDarkModeEnabled, setDarkModeEnabled] = useState(true);

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
        <Text style={styles.backText}>App settings</Text>
      </TouchableOpacity>

      {/* Settings Options */}
      <View style={styles.settingRow}>
        <Image
          source={require("../assets/images/Bell.png")}
          style={styles.icon}
        />
        <Text style={styles.settingText}>Enable notifications</Text>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={() => setNotificationsEnabled(!isNotificationsEnabled)}
          trackColor={{ false: "#767577", true: "#ff7300" }}
          thumbColor={isNotificationsEnabled ? "#fff" : "#f4f3f4"}
        />
      </View>

      {/* <View style={styles.settingRow}>
        <Image
          source={require("../assets/images/Moon.png")}
          style={styles.icon}
        />
        <Text style={styles.settingText}>Dark mode</Text>
        <Switch
          value={isDarkModeEnabled}
          onValueChange={() => setDarkModeEnabled(!isDarkModeEnabled)}
          trackColor={{ false: "#767577", true: "#ff7300" }}
          thumbColor={isDarkModeEnabled ? "#fff" : "#f4f3f4"}
        />
      </View> */}

      <TouchableOpacity
        style={styles.settingRow2}
        // onPress={() => navigation.navigate("PrivacyPolicy")}
      >
        <Image
          source={require("../assets/images/Privacy.png")}
          style={{ height: 20, marginRight: 20 }}
        />
        <Text style={styles.settingText}>Privacy policy</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.settingRow2}
        // onPress={() => navigation.navigate("TermsAndConditions")}
      >
        <Image
          source={require("../assets/images/Terms.png")}
          style={styles.icon}
        />
        <Text style={styles.settingText}>Terms & Conditions</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1b1b1b", padding: 20 },
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
    fontWeight: "700",
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    // borderBottomWidth: 0.5,
    // borderBottomColor: "#333",
  },
  settingRow2: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  icon: { width: 18, height: 18, marginRight: 15 },
  settingText: { flex: 1, color: "white", fontSize: 16 },
  arrow: { color: "white", fontSize: 18 },
});

export default Settings;
