import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import Modal from "react-native-modal";

const genres = [
  "Most Trending",
  "Billionaire Hidden Identity",
  "Love & Romance",
  "Werewolf & Vampires",
  "African Stories",
  "Animation",
  "Documentary & Podcast",
];

const AddTags: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([
    "Animation",
    "Love & Romane",
    "African Stories",
  ]);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => setModalVisible(!isModalVisible);

  const addTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tags</Text>
      <View style={styles.tagContainer}>
        {selectedTags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
        <TouchableOpacity onPress={toggleModal} style={styles.addButton}>
          <Text style={styles.addText}>+ Add more</Text>
        </TouchableOpacity>
      </View>

      {/* Modal for selecting genres */}
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContent}>
          <FlatList
            data={genres}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => addTag(item)}
                style={styles.modalItem}
              >
                <Text style={styles.modalText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: 16 },
  label: { color: "#ffffff", fontSize: 16, marginBottom: 12 },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "space-between",
  },
  tag: {
    backgroundColor: "#222",
    padding: 8,
    borderRadius: 8,
    borderColor: "#FF6A00",
    borderWidth: 1,
  },
  tagText: { color: "#fff" },
  addButton: { backgroundColor: "#333", padding: 8, borderRadius: 8 },
  addText: { color: "#888" },
  modalContent: { backgroundColor: "#222", padding: 16, borderRadius: 10 },
  modalItem: { padding: 12, borderBottomColor: "#444", borderBottomWidth: 1 },
  modalText: { color: "#fff", fontSize: 16 },
});

export default AddTags;
