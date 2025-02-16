import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import { NavigationProp, useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  Login: undefined;
  Homepage: undefined;
  Signup: undefined;
  // Add other screens here as needed
};

type NavigationProps = NavigationProp<RootStackParamList>;

const SignupScreen2 = () => {
  const [selectedTab, setSelectedTab] = useState("SignUp");

  const navigation = useNavigation<NavigationProps>();

  const handleLogin = async () => {
    navigation.navigate("Login");
  };

  const handleSignup = async () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      {/* Tab Buttons */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "SignUp" && styles.activeTab,
          ]}
          onPress={() => setSelectedTab("SignUp")}
          onPressIn={handleSignup}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "SignUp" && styles.activeTabText,
            ]}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "Login" && styles.activeTab,
          ]}
          onPress={() => setSelectedTab("Login")}
          onPressIn={handleLogin}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "Login" && styles.activeTabText,
            ]}
          >
            Log In
          </Text>
        </TouchableOpacity>
      </View>

      {/* Profile Icon */}
      <View style={styles.iconContainer}>
        <Image
          source={require("../assets/images/Frame.png")} // Replace with the path to your logo
        />
      </View>

      {/* Form Inputs */}
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Feather name="lock" size={24} color="#20409a" />
          <TextInput style={styles.input} placeholder="Password" />
        </View>
        <View style={styles.inputContainer}>
          <Feather name="lock" size={24} color="#20409a" />
          <TextInput style={styles.input} placeholder="Retype Password" />
        </View>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="asterisk" size={24} color="#20409a" />
          <TextInput style={styles.input} placeholder="Transaction PIN" />
        </View>
        <View style={styles.inputContainer}>
          <AntDesign name="addusergroup" size={24} color="#20409a" />
          <TextInput style={styles.input} placeholder="Referral" />
        </View>
      </View>

      {/* Proceed Button */}
      <TouchableOpacity style={styles.button} onPressIn={handleLogin}>
        <AntDesign name="adduser" size={20} color="white" />
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f2f5",
    padding: 20,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    gap: 12,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "#b3bdda",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#20409a",
  },
  activeTab: {
    backgroundColor: "#20409a",
  },
  tabText: {
    color: "#20409a",
    fontSize: 16,
    fontWeight: "bold",
  },
  activeTabText: {
    color: "#fff",
  },
  iconContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  formContainer: {
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#20409a",
    paddingVertical: 15,
    borderRadius: 50,
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",

    alignItems: "center", // Align items to the center
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignupScreen2;
