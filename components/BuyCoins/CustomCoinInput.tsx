import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Image } from "react-native";

const CustomCoinInput = () => {
  const [coins, setCoins] = useState("");
  const dollarValue = coins ? parseInt(coins) * 0.01 : 0; // Convert coins to dollars

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter custom amount</Text>
      <View style={styles.inputContainer}>
        <Image
          source={require("../../assets/images/Coin.png")}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={coins}
          onChangeText={setCoins}
          placeholder="0"
          placeholderTextColor="#999"
        />
      </View>
      <Text style={styles.valueLabel}>${dollarValue} USD</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  label: {
    color: "white",
    marginBottom: 5,
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2C2C2C",
    padding: 12,
    borderRadius: 8,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: "white",
    fontSize: 18,
  },
  valueLabel: {
    color: "white",
    marginTop: 5,
    fontSize: 16,
  },
});

export default CustomCoinInput;
