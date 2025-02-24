import MyList from "@/components/Favorites/MyList";
import AfricanStories from "@/components/Homepage/AfricanStories";
import Animation from "@/components/Homepage/Animation";
import Horror from "@/components/Homepage/Horror";
import MostTrending from "@/components/Homepage/MostTrending";
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
import { NavigationProp, useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  Saerch: undefined;
};

type NavigationProps = NavigationProp<RootStackParamList>;

const { width, height } = Dimensions.get("window");

const categories = [
  "Most Trending",
  "Continue Watching",
  "Billionaire Hidden Identity",
  "Love & Romance",
  "Werewolf & Vampire",
  "African Stories",
  "Animation",
  "Documentary & Podcast",
  "You May Also Like",
];

const Home: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const handleSearch = async () => {
    navigation.navigate("Search");
  };

  const [activeTab, setActiveTab] = useState(categories[0]);

  // Function to render the appropriate component based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "Most Trending":
        return <AfricanStories />;
      case "Billionaire Hidden Identity":
        return <MostTrending />;
      case "Love & Romance":
        return <Animation />;
      case "Werewolf & Vampire":
        return <Horror />;

      case "African Stories":
        return <AfricanStories />;
      default:
        return <Animation />;
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
          onPress={handleSearch}
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
    // backgroundColor: "#F51352",
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
