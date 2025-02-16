import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import History from "@/components/Favorites/History";
import MyList from "@/components/Favorites/MyList";

const Favorite = () => {
  const [activeTab, setActiveTab] = useState("My List");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Favorites</Text>
        <TouchableOpacity>
          <Ionicons name="trash-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "My List" && styles.activeTab]}
          onPress={() => setActiveTab("My List")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "My List" && styles.activeTabText,
            ]}
          >
            My List
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === "History" && styles.activeTab]}
          onPress={() => setActiveTab("History")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "History" && styles.activeTabText,
            ]}
          >
            History
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {activeTab === "My List" ? <MyList /> : <History />}
      </View>
    </View>
  );
};

// My List Component
// const MyList = () => (
//   <View>
//     <Text style={styles.contentText}>
//       📌 Your saved items will appear here.
//     </Text>
//   </View>
// );

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1b1b1b", padding: 20 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { color: "white", fontSize: 28, fontWeight: "bold" },
  tabContainer: {
    flexDirection: "row",
    marginTop: 20,
    // borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingHorizontal: 60,
  },
  tab: { flex: 1, alignItems: "center", paddingVertical: 10 },
  tabText: { color: "#888", fontSize: 16 },
  activeTab: { borderBottomWidth: 1, borderBottomColor: "white" },
  activeTabText: { color: "white", fontWeight: "bold" },
  content: { marginTop: 20 },
  contentText: { color: "#aaa", fontSize: 16, textAlign: "center" },
});

export default Favorite;
