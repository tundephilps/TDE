import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import { useNavigation, NavigationProp } from "@react-navigation/native";

// Define the navigation parameter list
type RootStackParamList = {
  Profile: undefined;
  MyUpload: undefined;
  WithdrawCoins: undefined;
  InvitationCode: undefined;
  Feedback: undefined;
  Language: undefined;
  Settings: undefined;
  AboutUs: undefined;
  Login: undefined;
  Ads: undefined;
  Earnings: undefined;
  BuyCoins: undefined;
  WatchAds: undefined;
};

// Define the menu item interface
interface MenuItem {
  id: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  screen: keyof RootStackParamList;
}

// Define the navigation type
type ProfileScreenNavigationProp = NavigationProp<RootStackParamList>;

const menuItems: MenuItem[] = [
  {
    id: "1",
    title: "My uploads",
    icon: "cloud-upload-outline",
    screen: "MyUpload",
  },
  {
    id: "2",
    title: "Withdraw coins",
    icon: "wallet-outline",
    screen: "WithdrawCoins",
  },
  {
    id: "3",
    title: "Invitation Code",
    icon: "gift-outline",
    screen: "InvitationCode",
  },
  {
    id: "4",
    title: "Feedback",
    icon: "chatbubbles-outline",
    screen: "Feedback",
  },
  { id: "5", title: "Language", icon: "globe-outline", screen: "Language" },
  { id: "6", title: "Settings", icon: "settings-outline", screen: "Settings" },
  {
    id: "7",
    title: "About Us",
    icon: "information-circle-outline",
    screen: "AboutUs",
  },
  { id: "8", title: "Log out", icon: "log-out-outline", screen: "Login" },
];
const Profile: React.FC = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const handleMenuPress = (screen: keyof RootStackParamList): void => {
    if (screen === "Login") {
      // Handle logout logic here
      // For example: clear authentication state, tokens, etc.
      // Then navigate to Login screen
    }
    navigation.navigate(screen);
  };
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
          onPress={() => handleMenuPress("Login")}
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
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => handleMenuPress("Earnings")}
          >
            <Text style={{ paddingRight: 8, color: "#aaa" }}>
              View Earnings{" "}
            </Text>
            <Ionicons name="chevron-forward" size={12} color="white" />
          </TouchableOpacity>
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

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#F51352",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 5,
                marginLeft: 10,
              }}
              onPress={() => handleMenuPress("BuyCoins")}
            >
              <Text style={{ color: "white" }}>Refill</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFC79E",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 5,
                marginLeft: 10,
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
              }}
              onPress={() => handleMenuPress("Ads")}
            >
              <FontAwesome name="video-camera" size={14} color="black" />
              <Text style={{ color: "#000000" }}>Watch Ads</Text>
            </TouchableOpacity>
          </View>
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
            onPress={() => handleMenuPress(item.screen)}
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
