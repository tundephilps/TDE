import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import {
  FontAwesome,
  Feather,
  MaterialIcons,
  FontAwesome6,
} from "@expo/vector-icons";
import TransactionHistory from "@/components/Homepage/TransactionHistory";

const Homepage = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <FontAwesome6 name="user-circle" size={24} color="#20409a" />
          <Text style={styles.greeting}>Hello, Abiso</Text>
        </View>
        <TouchableOpacity>
          <Feather name="bell" size={24} color="#1d1b20" />
        </TouchableOpacity>
      </View>

      {/* Account Balance Card */}
      <View style={styles.balanceCard}>
        <View>
          <Text style={styles.balanceAmount}>
            {isBalanceVisible ? "₦10,000.00" : "*************"}
          </Text>
          <Text style={styles.balanceLabel}>Account Balance</Text>
        </View>
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={toggleBalanceVisibility}
        >
          <Feather
            name={isBalanceVisible ? "eye" : "eye-off"}
            size={20}
            color="#ffffff"
          />
        </TouchableOpacity>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={[styles.button, styles.walletButton]}>
          <MaterialIcons name="double-arrow" size={20} color="#20409A" />
          <Text style={styles.walletButtonText}>Wallet Transfer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.addButton]}>
          <Feather name="plus" size={20} color="#ffffff" />
          <Text style={styles.addButtonText}>Add Money</Text>
        </TouchableOpacity>
      </View>

      {/* Quick Acess */}
      <View style={styles.Accesscontainer}>
        <Text style={styles.Accesstitle}>Quick Access</Text>
        <View style={styles.quickAccessContainer}>
          {/* Buy Airtime */}
          <View>
            <TouchableOpacity style={styles.accessItem}>
              <FontAwesome name="signal" size={24} color="#20409A" />
            </TouchableOpacity>
            <Text style={styles.accessLabel}>Buy Airtime</Text>
          </View>

          {/* Buy Data */}
          <View>
            <TouchableOpacity style={styles.accessItem}>
              <Feather name="wifi" size={24} color="#20409A" />
            </TouchableOpacity>

            <Text style={styles.accessLabel}>Buy Data</Text>
          </View>

          {/* Pay Bills */}
          <View>
            <TouchableOpacity style={styles.accessItem}>
              <MaterialIcons name="bolt" size={24} color="#20409A" />
            </TouchableOpacity>

            <Text style={styles.accessLabel}>Pay Bills</Text>
          </View>

          {/* More */}
          <View>
            <TouchableOpacity style={styles.accessItem}>
              <MaterialIcons name="double-arrow" size={24} color="#20409A" />
            </TouchableOpacity>

            <Text style={styles.accessLabel}>More</Text>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TransactionHistory />
        <View>
          <Text style={{ paddingBottom: 6 }}>You Might Like</Text>
          <View
            style={{ borderWidth: 1, borderColor: "#20409a", borderRadius: 8 }}
          >
            <Image
              source={require("../assets/images/Ads.png")}
              style={{ width: "100%", paddingBottom: 12 }}
              resizeMode="contain"
            />
            <Text
              style={{
                padding: 6,
                color: "#20409a",
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              Stay Connected
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f2f5",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  greeting: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "600",
    color: "#333333",
  },
  balanceCard: {
    backgroundColor: "#20409A",
    borderRadius: 10,
    padding: 20,
    position: "relative",
    marginBottom: 20,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 5,
  },
  balanceLabel: {
    fontSize: 16,
    color: "#dcdcdc",
  },
  eyeIcon: {},
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    paddingVertical: 12,
    marginHorizontal: 5,
  },
  walletButton: {
    backgroundColor: "#d9e2f3",
    borderWidth: 1,
    borderColor: "#20409A",
  },
  walletButtonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#20409A",
  },
  addButton: {
    backgroundColor: "#20409A",
  },
  addButtonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },

  Accesscontainer: {
    marginTop: 20,
  },
  Accesstitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 10,
  },
  quickAccessContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  accessItem: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9e2f3",
    width: 75,
    height: 75,
    borderRadius: 40,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#20409A",
  },
  accessLabel: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "500",
    color: "#333333",
    textAlign: "center",
  },
});

export default Homepage;
