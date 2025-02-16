import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const transactions = [
  {
    id: "1",
    type: "Welcome bonus",
    date: "02 Feb 2025 - 08:23 AM",
    amount: "+₦500",
    balance: "Bal: ₦500",
    icon: require("../../assets/images/Medal.png"), // Replace with actual image path
    color: "#22C55E", // Green for credit
  },
  {
    id: "2",
    type: "Withdrawal",
    date: "05 Feb 2025 - 08:23 AM",
    amount: "-₦300",
    balance: "Bal: ₦200",
    icon: require("../../assets/images/Medal.png"), // Replace with actual image path
    color: "#E63946", // Red for debit
  },
];

const TransactionHistory = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Transaction history</Text>
        <TouchableOpacity>
          <Text style={styles.detailText}>Detail &gt;</Text>
        </TouchableOpacity>
      </View>

      {/* Transaction List */}
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Image source={item.icon} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.type}>{item.type}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <View style={styles.amountContainer}>
              <Text style={[styles.amount, { color: item.color }]}>
                {item.amount}
              </Text>
              <Text style={styles.balance}>{item.balance}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  headerText: { color: "white", fontSize: 16, fontWeight: "bold" },
  detailText: { color: "#A0A0A0", fontSize: 14 },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#222",
  },
  icon: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  textContainer: { flex: 1 },
  type: { color: "white", fontSize: 14 },
  date: { color: "#A0A0A0", fontSize: 12 },
  amountContainer: { alignItems: "flex-end" },
  amount: { fontSize: 14, fontWeight: "bold" },
  balance: { color: "#A0A0A0", fontSize: 12 },
});

export default TransactionHistory;
