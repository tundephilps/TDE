import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";

const Earnings = () => {
  const navigation = useNavigation();
  const [selectedMovie, setSelectedMovie] = useState("");

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
        <Text style={styles.backText}>Earnings & Viewers</Text>
      </TouchableOpacity>

      {/* Movie Picker */}
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setSelectedMovie(value)}
          items={[
            {
              label: "The fall of Valhalla...",
              value: "The fall of Valhalla...",
            },
            { label: "Another Movie", value: "Another Movie" },
          ]}
          value={selectedMovie}
          placeholder={{ label: "Select a Movie/Series", value: null }}
          style={{
            inputIOS: {
              color: "white",
              backgroundColor: "#2C2C2C",
              //   padding: 12,
              borderRadius: 8,
            },
            inputAndroid: {
              color: "white",
              backgroundColor: "#2C2C2C",
              //   padding: 12,
              borderRadius: 8,
            },
          }}
        />
      </View>

      {/* Earnings Overview */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Earnings Overview</Text>
        <View style={styles.earningsRow}>
          <View style={styles.earningsBox}>
            <Text style={styles.subText}>Total earnings</Text>
            <Text style={styles.earningsText}>
              <Image
                source={require("../assets/images/Coin.png")} // Replace with your local profile image
                style={{ width: 38, height: 38, borderRadius: 25 }}
              />{" "}
              3,250
            </Text>
          </View>
          <View style={styles.earningsBox}>
            <Text style={styles.subText}>Pending payout</Text>
            <Text style={styles.earningsText}>₦ 500</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Withdraw Earnings</Text>
        </TouchableOpacity>
      </View>

      {/* Viewers Overview */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Viewers Overview</Text>
        <View style={styles.earningsRow}>
          <View style={styles.earningsBox}>
            <Text style={styles.subText}>Total views</Text>
            <Text style={styles.earningsText}>
              <Ionicons name="people-outline" size={18} color="gold" /> 32,550
            </Text>
          </View>
          <View style={styles.earningsBox}>
            <Text style={styles.subText}>Most watched episode</Text>
            <Text style={styles.episodeText}>The Disastrous Students</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Earnings;

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
  pickerContainer: {
    backgroundColor: "#2C2C2C",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#0A0A0A",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  sectionTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  earningsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  earningsBox: {
    width: "48%",
  },
  subText: {
    color: "gray",
    fontSize: 14,
  },
  earningsText: {
    color: "white",
    fontSize: 38,
    fontWeight: "bold",
    marginTop: 5,
  },
  episodeText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#FF6A00",
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

// const pickerSelectStyles = {
//   inputIOS: {
//     color: "white",
//     fontSize: 16,
//     padding: 10,
//   },
//   inputAndroid: {
//     color: "white",
//     fontSize: 16,
//     padding: 10,
//   },
// };
