import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

interface Transaction {
  id: string;
  title: string;
  subtitle: string;
  amount: string;
  status: "Successful" | "Failed";
  icon: any; // Image source
}

const transactions: Transaction[] = [
  {
    id: "1",
    title: "MTN 5GB - SME",
    subtitle: "08065565655",
    amount: "₦1,150",
    status: "Successful",
    icon: require("../../assets/images/Network1.png"), // Replace with actual image path
  },
  {
    id: "2",
    title: "KEDCO - BILL",
    subtitle: "22335455668",
    amount: "₦10,000",
    status: "Failed",
    icon: require("../../assets/images/Network2.png"), // Replace with actual image path
  },
];

const TransactionHistory = () => {
  const renderTransaction = ({ item }: { item: Transaction }) => (
    <View style={styles.transactionItem}>
      {/* Icon */}
      <Image source={item.icon} style={styles.transactionIcon} />
      {/* Transaction Details */}
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionTitle}>{item.title}</Text>
        <Text style={styles.transactionSubtitle}>{item.subtitle}</Text>
      </View>
      {/* Amount and Status */}
      <View style={styles.transactionInfo}>
        <Text style={styles.transactionAmount}>{item.amount}</Text>
        <Text
          style={[
            styles.transactionStatus,
            item.status === "Successful" ? styles.success : styles.failed,
          ]}
        >
          {item.status}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={{ paddingTop: 20 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Transaction History</Text>
        <TouchableOpacity>
          <Text style={styles.seeMore}>See More</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {/* Header */}

        {/* Transaction List */}
        <Text style={styles.latestText}>Latest Transactions</Text>
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={renderTransaction}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    marginVertical: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  seeMore: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "600",
  },
  latestText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  transactionSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  transactionInfo: {
    alignItems: "flex-end",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  transactionStatus: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: "500",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    overflow: "hidden",
    textAlign: "center",
  },
  success: {
    color: "#fff",
    backgroundColor: "#28a745",
  },
  failed: {
    color: "#fff",
    backgroundColor: "#dc3545",
  },
});

export default TransactionHistory;
