import TransactionHistory from "@/components/Coins/Transactions";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

import { NavigationProp, useNavigation } from "@react-navigation/native";

const WithdrawCoins = () => {
  const navigation = useNavigation();

  const [selectedMethod, setSelectedMethod] = useState("Bank transfer");

  const paymentMethods = ["Bank transfer", "Flutter", "Paypal", "Stripe"];

  return (
    <View style={styles.container}>
      {/* Header */}
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
        <Text style={styles.backText}>Withdraw Coins</Text>
      </TouchableOpacity>

      <ScrollView>
        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceText}>Available Balance</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/images/Coin.png")}
              style={styles.coinIcon}
            />
            <Text style={styles.balanceAmount}>20</Text>
          </View>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Buy Coins Now</Text>
          </TouchableOpacity>
        </View>

        {/* Withdrawal Input */}
        <Text style={styles.label}>Enter withdrawal amount</Text>
        <View style={{ position: "relative" }}>
          <Text
            style={{
              position: "absolute",
              color: "#FF6A00",
              fontSize: 30,
              zIndex: 30,
              bottom: "30%",
              left: "5%",
            }}
          >
            ₦
          </Text>
          <TextInput style={styles.input} keyboardType="numeric" />
        </View>

        {/* Payment Methods */}
        <View style={styles.paymentMethods}>
          <Text style={styles.label}>Select payment method</Text>
          {paymentMethods.map((method, index) => (
            <TouchableOpacity
              key={index}
              style={styles.radioContainer}
              onPress={() => setSelectedMethod(method)}
            >
              <View
                style={[
                  styles.radioButton,
                  selectedMethod === method && styles.radioSelected,
                ]}
              />
              <Text style={styles.radioText}>{method}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Withdraw Button */}
        <TouchableOpacity style={styles.withdrawButton}>
          <Text style={styles.withdrawButtonText}>Withdraw</Text>
        </TouchableOpacity>

        <TransactionHistory />
      </ScrollView>
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
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  balanceCard: {
    backgroundColor: "#EFB582",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  coinIcon: { width: 50, height: 50 },
  balanceText: { color: "black", fontSize: 14 },
  balanceAmount: { color: "black", fontSize: 45, fontWeight: "bold" },
  buyButton: {
    backgroundColor: "#22C55E",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: "100%",
  },
  buyButtonText: { color: "white", fontWeight: "bold", textAlign: "center" },
  label: { color: "#ABABAB", fontSize: 14, marginVertical: 10 },
  input: {
    backgroundColor: "#222",
    color: "white",
    padding: 10,
    paddingHorizontal: 40,
    fontSize: 48,
    borderRadius: 5,
  },
  paymentMethods: {
    backgroundColor: "#222",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  radioButton: {
    width: 26,
    height: 26,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "white",
    marginRight: 10,
  },
  radioSelected: { backgroundColor: "white" },
  radioText: { color: "white", fontSize: 14 },
  withdrawButton: {
    backgroundColor: "#E63946",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  withdrawButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default WithdrawCoins;
