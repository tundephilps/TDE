import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { NavigationProp, useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  Login: undefined;
  Homepage: undefined;
  Signup: undefined;
  // Add other screens here as needed
};

type NavigationProps = NavigationProp<RootStackParamList>;
const Binge = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleLogin = async () => {
    navigation.navigate("Login");
  };
  return <View>Binge</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    height: "100%",
    gap: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#004aad",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Binge;
