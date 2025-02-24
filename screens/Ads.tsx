import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Ads = () => {
  const navigation = useNavigation();
  const dailyRewards = [
    { day: "Today", coins: "+20" },
    { day: "Day 02", coins: "+20" },
    { day: "Day 03", coins: "+25" },
    { day: "Day 04", coins: "+25" },
    { day: "Day 05", coins: "+30" },
  ];

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
        <Text style={styles.backText}>Ads Hub</Text>
      </TouchableOpacity>

      {/* Daily Rewards */}
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.dailyRewards}
        >
          {dailyRewards.map((item, index) => (
            <View key={index} style={styles.rewardCard}>
              <Text style={styles.rewardDay}>{item.day}</Text>
              <Image
                source={require("../assets/images/Coin.png")} // Replace with your local profile image
                style={{ width: 38, height: 38, borderRadius: 25 }}
              />
              <Text style={styles.coinText}>{item.coins}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      {/* Earn Extra Section */}
      <View style={styles.earnExtraHeader}>
        <Text style={styles.sectionTitle}>Earn Extra</Text>
        <Text style={styles.resetText}>Reset 0:00</Text>
      </View>

      {/* Extra Tasks */}
      <View style={styles.extraContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "auto",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={styles.taskText}>Sign Up</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../assets/images/Coin.png")} // Replace with your local profile image
                style={{ width: 28, height: 28, borderRadius: 25 }}
              />
              <Text
                style={{ fontSize: 16, color: "white", marginHorizontal: 8 }}
              >
                +200
              </Text>
            </View>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Go</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "auto",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={styles.taskText}>Watch ads</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../assets/images/Coin.png")} // Replace with your local profile image
                style={{ width: 28, height: 28, borderRadius: 25 }}
              />
              <Text
                style={{ fontSize: 16, color: "white", marginHorizontal: 8 }}
              >
                Get 100 Extra Coins
              </Text>
            </View>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Watch Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Ads;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    padding: 20,
  },
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
  },
  dailyRewards: {
    flexDirection: "row",
    height: 150,
  },
  rewardCard: {
    backgroundColor: "#0A0A0A",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
    width: 80,
    height: 120,
    borderWidth: 1,
    borderColor: "#FF6A00",
  },
  rewardDay: {
    color: "#FF6A00",
    fontSize: 14,
    fontWeight: "bold",
  },
  coinText: {
    color: "white",
    fontSize: 26,
    marginTop: 5,
  },
  earnExtraHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sectionTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  resetText: {
    color: "gray",
    fontSize: 14,
  },
  extraContainer: {
    backgroundColor: "#0A0A0A",
    padding: 15,
    borderRadius: 10,
    gap: 28,
  },
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  taskText: {
    color: "white",
    fontSize: 12,
    paddingBottom: 6,
  },
  button: {
    backgroundColor: "#FF6A00",
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 5,
    height: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});
