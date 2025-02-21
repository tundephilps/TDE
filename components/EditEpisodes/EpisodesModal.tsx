import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";

const episodes = ["Trailer", ...Array.from({ length: 41 }, (_, i) => i)];

const EpisodesModal = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Header */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.title}>Episodes (completed)</Text>

          {/* Episodes Grid */}
          <ScrollView>
            <View style={styles.episodesGrid}>
              {episodes.map((episode, index) => {
                const isUnlocked = index === 0 || index <= 5; // Unlock trailer & first 5 episodes

                return (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.episodeButton,
                      isUnlocked ? styles.unlocked : styles.locked,
                    ]}
                    disabled={!isUnlocked}
                  >
                    <Text
                      style={[
                        styles.episodeText,
                        isUnlocked ? { color: "#fff" } : { color: "#666" },
                      ]}
                    >
                      {episode.toString().padStart(2, "0")}
                    </Text>
                    {!isUnlocked && (
                      <Ionicons name="lock-closed" size={14} color="#666" />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const EpisodeSelector = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View
          style={{
            backgroundColor: "#1e1e1e",
            padding: 6,
            flexDirection: "row",
            gap: 6,
            borderRadius: 6,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>Ep 00</Text>

          <Ionicons name="chevron-down" size={20} color="#fff" />
        </View>
      </TouchableOpacity>

      {/* Episodes Modal */}
      <EpisodesModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

export default EpisodeSelector;

const styles = StyleSheet.create({
  openButton: {
    backgroundColor: "#FF6A00",
    padding: 15,
    borderRadius: 6,
  },
  openButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 20,
  },
  closeButton: {
    alignSelf: "flex-end",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  episodesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  episodeButton: {
    width: 45,
    height: 45,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  unlocked: {
    backgroundColor: "#FF6A00",
  },
  locked: {
    backgroundColor: "#222",
  },
  episodeText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
