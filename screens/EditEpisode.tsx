import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import EpisodeSelector from "@/components/EditEpisodes/EpisodesModal";

import { NavigationProp, useNavigation } from "@react-navigation/native";

type RootStackParamList = {};

type NavigationProps = NavigationProp<RootStackParamList>;

const EditEpisode = () => {
  const navigation = useNavigation<NavigationProps>();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoFile, setVideoFile] = useState(null);

  const pickVideo = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "video/*",
    });

    if (result.canceled === false) {
      setVideoFile(result.assets[0]);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <View style={styles.backIcon}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </View>
        <Text style={styles.backText}>Edit Episodes</Text>
      </TouchableOpacity>

      {/* Movie Title */}
      <Text style={styles.label}>Movie Title Input</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter episode title"
        placeholderTextColor="#999"
        value={title}
        onChangeText={setTitle}
      />

      {/* Movie Description */}
      <Text style={styles.label}>Movie Description</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Describe your episode briefly"
        placeholderTextColor="#999"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* Episode Selector */}

      <View style={styles.episodeSelector}>
        <Text style={styles.label}>Select episode to replace</Text>

        <EpisodeSelector />
      </View>

      {/* Video Upload */}
      <Text style={styles.label}>Upload new/replace video</Text>
      <TouchableOpacity style={styles.uploadBox} onPress={pickVideo}>
        {videoFile ? (
          <Text style={styles.uploadedText}>{videoFile.name}</Text>
        ) : (
          <>
            <Ionicons name="cloud-upload-outline" size={32} color="#FFA500" />
            <Text style={styles.uploadText}>Upload from device</Text>
          </>
        )}
      </TouchableOpacity>
      <Text style={styles.supportText}>⚠ Supports MP4, 1-minute max</Text>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditEpisode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b1b1b",
    padding: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backIcon: {
    backgroundColor: "#3f3e3e",
    borderRadius: 8,
    padding: 6,
  },
  backText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "700",
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "700",
  },
  label: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#2a2a2a",
    color: "#fff",
    padding: 12,
    borderRadius: 6,
    fontSize: 16,
    marginBottom: 15,
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  episodeSelector: {
    backgroundColor: "#2a2a2a",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderRadius: 6,
    marginBottom: 15,
  },
  episodeText: {
    color: "#fff",
    fontSize: 16,
  },
  uploadBox: {
    backgroundColor: "#2a2a2a",
    height: 100,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  uploadText: {
    color: "#FFA500",
    marginTop: 5,
  },
  uploadedText: {
    color: "#fff",
    fontSize: 16,
  },
  supportText: {
    color: "#aaa",
    fontSize: 12,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: "#FF6A00",
    padding: 15,
    borderRadius: 6,
    alignItems: "center",
  },
  saveText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
