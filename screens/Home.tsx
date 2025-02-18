import MyList from "@/components/Favorites/MyList";
import SwiperScreen from "@/components/Homepage/SwiperScreen";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet,
} from "react-native";
import Swiper from "react-native-swiper";

const { width, height } = Dimensions.get("window");

const categories = [
  "Most Trending",
  "African Stories",
  "Animation",
  "Documentary",
  "Horror",
];

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);

  // Function to render the appropriate component based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "African Stories":
        return <MyList />;
      case "Romance":
        return <MyList />;
      case "CEO Romance":
        return <MyList />;
      case "Horror":
        return <MyList />;
      default:
        return <MyList />;
    }
  };
  return (
    <ScrollView
      style={{ flex: 1, position: "relative", backgroundColor: "#1b1b1b" }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          position: "absolute",
          top: 0,
          zIndex: 50,
          padding: 20,
        }}
      >
        <Text style={{ color: "white", fontSize: 26, fontWeight: "800" }}>
          TDE
        </Text>
        <TouchableOpacity
          style={{ backgroundColor: "#3c3d37", padding: 6, borderRadius: 5 }}
        >
          <Feather name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <SwiperScreen />

      {/* Scrollable Tabs */}
      <View style={{ paddingVertical: 8 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tabContainer}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[styles.tab, activeTab === category && styles.activeTab]}
              onPress={() => setActiveTab(category)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === category && styles.activeTabText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {renderContent()}
    </ScrollView>
  );
};

export default Home;
const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    // marginBottom: 10,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 10,
  },
  activeTab: {
    // backgroundColor: "#FF6A00",
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  tabText: {
    color: "#5B5656",
    fontSize: 12,
  },
  activeTabText: {
    color: "white",
  },
});
