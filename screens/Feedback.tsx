import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Feedback = () => {
  const navigation = useNavigation();

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0); // New state for star rating

  const tags = [
    "Overall performance",
    "Speed and efficiency",
    "Movie quality",
    "Transparency",
    "Customer support",
  ];

  const toggleTag = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  // New function to handle star rating
  const handleRating = (selectedRating: number) => {
    setRating(selectedRating);
  };

  return (
    <View style={styles.container}>
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
        <Text style={styles.backText}>Feedback</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Rate your experience</Text>
      <Text style={styles.subtext}>Are you satisfied with the service?</Text>

      {/* Updated Star Rating */}
      <View style={styles.stars}>
        {[...Array(5)].map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleRating(index + 1)}
            activeOpacity={0.7}
          >
            <Ionicons
              name={index < rating ? "star" : "star-outline"}
              size={28}
              color={index < rating ? "#FFD700" : "#ababab"}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Improvement Tags */}
      <Text style={styles.subheading}>Tell us what can be improved?</Text>
      <View style={styles.tagContainer}>
        {tags.map((tag) => (
          <TouchableOpacity
            key={tag}
            style={[
              styles.tag,
              selectedTags.includes(tag) && styles.selectedTag,
            ]}
            onPress={() => toggleTag(tag)}
          >
            <Text
              style={[
                styles.tagText,
                selectedTags.includes(tag) && styles.selectedTagText,
              ]}
            >
              {tag}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Feedback Input */}
      <TextInput
        style={styles.input}
        placeholder="Tell us more..."
        placeholderTextColor="#666"
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />

      {/* Save Button */}
      <View style={{ height: 80 }} />
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveText}>Submit Review</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Feedback;

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
  backText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 700,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  subtext: {
    color: "#ababab",
    fontSize: 14,
    marginBottom: 10,
  },
  stars: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-between",
    color: "#ababab",
  },
  subheading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 10,
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  tag: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: "#222",
  },
  tagText: {
    color: "#fff",
    fontSize: 14,
  },
  selectedTag: {
    backgroundColor: "#FFD700",
  },
  selectedTagText: {
    color: "#000",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#131313",
    color: "#fff",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    height: 200,
    textAlignVertical: "top",
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
