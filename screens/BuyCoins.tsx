import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";

const coins = [
  { id: "1", amount: 100, price: "₦500", borderColor: "purple" },
  { id: "2", amount: 500, price: "₦3,500", borderColor: "green" },
  { id: "3", amount: 1000, price: "₦5,000", borderColor: "orange" },
];

const paymentMethods = [
  {
    id: "credit",
    label: "Credit card",
    logo: require("../assets/images/mastercard.png"),
  },
  {
    id: "paypal",
    label: "Pay pal",
    logo: require("../assets/images/Paypal.png"),
  },
  {
    id: "flutter",
    label: "Flutter",
    logo: require("../assets/images/Flutter.png"),
  },
  {
    id: "bank",
    label: "Bank transfer",
    logo: require("../assets/images/transfer.png"),
  },
];

const BuyCoins = () => {
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <View style={{ backgroundColor: "#5c5c59", padding: 2, opacity: 0.7 }}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </View>
        <Text style={styles.backText}>Feedback</Text>
      </TouchableOpacity>
      {/* Balance Section */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Balance</Text>
        <Text style={styles.balanceAmount}>🪙 20</Text>
      </View>

      {/* Coin Selection */}
      <FlatList
        data={coins}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.coinCard,
              { borderColor: item.borderColor },
              selectedCoin === item.id && styles.selectedCoin,
            ]}
            onPress={() => setSelectedCoin(item.id)}
          >
            <Text style={styles.coinAmount}>{item.amount}</Text>
            <Image
              source={require("../assets/images/Coin.png")}
              style={styles.coinIcon}
            />
            <Text style={styles.coinPrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Payment Selection */}
      <Text style={styles.paymentTitle}>Payment Selection</Text>
      {paymentMethods.map((method) => (
        <TouchableOpacity
          key={method.id}
          style={[
            styles.paymentOption,
            selectedPayment === method.id && styles.selectedPayment,
          ]}
          onPress={() => setSelectedPayment(method.id)}
        >
          <Text style={styles.paymentText}>{method.label}</Text>
          <Image source={method.logo} style={styles.paymentLogo} />
        </TouchableOpacity>
      ))}

      {/* Purchase Button */}
      <TouchableOpacity style={styles.purchaseButton}>
        <Text style={styles.purchaseText}>Purchase Coin</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#141414", padding: 20 },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
  },
  balanceContainer: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#222",
    borderRadius: 10,
  },
  balanceText: { color: "#A0A0A0", fontSize: 16 },
  balanceAmount: { color: "#FF6A00", fontSize: 24, fontWeight: "bold" },

  coinCard: {
    padding: 15,
    marginTop: 15,
    margin: 4,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "#222",
    alignItems: "center",
    width: 100,
    height: 120,
  },

  coinIcon: { width: 50, height: 50 },
  selectedCoin: { borderColor: "white", height: 130 },
  coinAmount: { color: "#FF6A00", fontSize: 18, fontWeight: "bold" },
  coinPrice: { color: "#A0A0A0", fontSize: 14 },

  paymentTitle: { color: "white", fontSize: 16, marginTop: 20 },
  paymentOption: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#222",
    marginTop: 10,
  },
  selectedPayment: { borderColor: "white", borderWidth: 2 },
  paymentText: { color: "white", fontSize: 16, flex: 1 },
  paymentLogo: { width: 30, height: 20 },

  purchaseButton: {
    backgroundColor: "#E63946",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  purchaseText: { color: "white", fontSize: 16, fontWeight: "bold" },
});

export default BuyCoins;
