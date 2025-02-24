import React, { useState } from "react";
import {
  Text,
  ScrollView,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchContainer from "@/components/Search/SearchContainer";
import SearchCard from "@/components/Search/SearchCard";
import { useNavigation } from "@react-navigation/native";

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

const Search = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(categories[0]);

  // Function to render the appropriate component based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "Most Trending":
        return <SearchCard />;
      case "Billionaire Hidden Identity":
        return <SearchCard />;
      case "Love & Romance":
        return <SearchCard />;
      case "Werewolf & Vampire":
        return <SearchCard />;
      case "African Stories":
        return <SearchCard />;
      case "Animation":
        return <SearchCard />;
      case "Documentary & Podcast":
        return <SearchCard />;
      default:
        return <SearchCard />;
    }
  };

  return (
    <View style={{ flex: 1, height: "100%", backgroundColor: "#1b1b1b" }}>
      <SearchContainer />
      <View style={styles.container}>
        <Text style={styles.heading}>More to explore</Text>

        {/* Scrollable Tabs */}
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
        <Text style={{ color: "#ABABAB" }}>People are searching</Text>
        {/* Display the selected category content */}
        {renderContent()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    color: "#ABABAB",
    fontSize: 16,
    marginBottom: 10,
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FF6A00",
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: "#FF6A00",
  },
  tabText: {
    color: "#FF6A00",
    fontSize: 9,
  },
  activeTabText: {
    color: "white",
  },
  contentContainer: {
    minHeight: 300,
    backgroundColor: "#222",
    padding: 15,
    borderRadius: 10,
  },
  contentText: {
    color: "white",
    fontSize: 18,
    marginBottom: 15,
  },
  storyGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
  },
  storyItem: {
    width: "47%",
  },
  storyImage: {
    height: 150,
    backgroundColor: "#333",
    borderRadius: 8,
    marginBottom: 8,
  },
  storyTitle: {
    color: "white",
    fontSize: 14,
  },
});

export default Search;
