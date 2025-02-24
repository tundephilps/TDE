import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import { NavigationProp, useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  Homepage: undefined;
};

type NavigationProps = NavigationProp<RootStackParamList>;

const SignUpScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const handleLogin = async () => {
    navigation.navigate("Homepage");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Grid.png")} // Add Google icon in assets folder
        style={styles.Grid}
      />
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

          zIndex: 50,
        }}
      >
        <Text style={styles.title}>
          Welcome to <Text style={styles.bold}>TDE</Text>
        </Text>
        <Text style={styles.subtitle}>
          Sign up to unlock more features and earn from your content.
        </Text>
        <TouchableOpacity style={styles.googleButton}>
          <Image
            source={require("../assets/images/google.png")} // Add Google icon in assets folder
            style={styles.googleIcon}
          />
          <Text style={styles.googleText}>Sign up with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.notNow}>Not Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    position: "relative",
  },
  Grid: {
    height: "65%",
    width: "100%",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "300",
  },
  bold: {
    fontWeight: "bold",
  },
  subtitle: {
    color: "#9e9e9e",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 12,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222",
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 30,
    marginTop: 20,
    alignSelf: "center",
    alignContent: "center",
    display: "flex",
    textAlign: "center",
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleText: {
    color: "#fff",
    fontSize: 16,
  },
  notNow: {
    color: "#999",
    fontSize: 14,
    marginTop: 22,
  },
});
