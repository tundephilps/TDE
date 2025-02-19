import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const menuItems = [
  { id: "1", title: "My uploads", icon: "cloud-upload-outline" },
  { id: "2", title: "Withdraw coins", icon: "wallet-outline" },
  { id: "3", title: "Invitation Code", icon: "gift-outline" },
  { id: "4", title: "Feedback", icon: "chatbubbles-outline" },
  { id: "5", title: "Language", icon: "globe-outline" },
  { id: "6", title: "Settings", icon: "settings-outline" },
  { id: "7", title: "About Us", icon: "information-circle-outline" },
  { id: "8", title: "Log out", icon: "log-out-outline" },
];

const Profile = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#0a0a0a", padding: 20 }}>
      {/* Profile Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 20,
          borderRadius: 10,
        }}
      >
        <Image
          source={require("../assets/images/profile.png")} // Replace with your local profile image
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
        <View style={{ marginLeft: 10, flex: 1 }}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Clotilda Daniels
          </Text>
          <Text style={{ color: "white", fontSize: 12 }}>🏆 10 Uploads</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#1e1e1e",
            paddingHorizontal: 15,
            paddingVertical: 12,
            borderRadius: 8,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "gray",
          }}
        >
          {/* <Ionicons name="logo-google" size={16} color="white" /> */}
          <Image
            source={require("../assets/images/google.png")} // Replace with your local profile image
            style={{ width: 16, height: 16, borderRadius: 25 }}
          />
          <Text style={{ color: "white", marginLeft: 5 }}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Wallet Section */}
      <View
        style={{
          backgroundColor: "#201b18",
          padding: 15,
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderColor: "gray",
            paddingBottom: 8,
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>My Wallet</Text>
          <Text
            style={{
              color: "#aaa",
              fontSize: 14,
            }}
          >
            <Text style={{ paddingRight: 8 }}> Detail{"  "}</Text>
            <Ionicons name="chevron-forward" size={12} color="white" />
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/images/dollar.png")} // Replace with your local profile image
              style={{ width: 28, height: 28, borderRadius: 25 }}
            />
            <Text style={{ color: "white", fontSize: 28, marginLeft: 5 }}>
              20
            </Text>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "#ff8c00",
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 5,
              marginLeft: 10,
            }}
          >
            <Text style={{ color: "white" }}>Refill</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Menu Items */}
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 15,
              // borderBottomWidth: 1,
              // borderBottomColor: "#222",
            }}
          >
            <Ionicons name={item.icon} size={20} color="white" />
            <Text style={{ color: "white", fontSize: 16, marginLeft: 15 }}>
              {item.title}
            </Text>
            <Ionicons
              name="chevron-forward"
              size={18}
              color="white"
              style={{ marginLeft: "auto" }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Profile;
