import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import Guidelines from "@/components/Upload/Guidelines";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import AddTags from "@/components/Upload/AddTags";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [videos, setVideos] = useState<any[]>([]);
  const [ageRestriction, setAgeRestriction] = useState("General");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });
    if (!result.canceled) {
      setCoverImage(result.assets[0].uri);
    }
  };

  const pickVideo = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "video/*",
      multiple: true,
    });
    if (result.type !== "cancel") {
      setVideos([...videos, result]);
    }
  };

  const handleSubmit = () => {
    console.log({ title, description, coverImage, videos, ageRestriction });
  };

  return (
    <ScrollView style={{ padding: 20, backgroundColor: "#0a0a0a" }}>
      <Text style={{ color: "white", fontSize: 24, fontWeight: "600" }}>
        Upload Your Video
      </Text>
      <Text style={{ color: "#878484", fontSize: 12, fontWeight: "600" }}>
        Ensure your movie follows the platform's guidelines before submitting.
      </Text>

      <Guidelines />
      <View style={{ paddingVertical: 18, gap: 4 }}>
        <Text style={{ color: "#ffffff" }}>Movie Title Input</Text>
        <TextInput
          placeholder="Enter a catchy title"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholderTextColor="#505050"
        />
      </View>

      <View style={{ paddingVertical: 0, gap: 4 }}>
        <Text style={{ color: "#ffffff" }}>Movie Description</Text>
        <TextInput
          placeholder="Describe your movie in a few words"
          value={description}
          onChangeText={setDescription}
          style={styles.input}
          placeholderTextColor="#505050"
          multiline
          numberOfLines={50}
        />
      </View>
      <AddTags />

      <View
        style={{
          backgroundColor: "#131313",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          paddingVertical: 5,
          borderRadius: 12,
        }}
      >
        <Text style={{ color: "white" }}>Age Restriction</Text>
        <Picker
          style={{
            backgroundColor: "#2C2C2C",
            width: 140,
            borderRadius: 8,
            color: "white",
          }}
          selectedValue={ageRestriction}
          onValueChange={setAgeRestriction}
        >
          <Picker.Item label="General" value="General" />
          <Picker.Item label="18+" value="18+" />
          <Picker.Item label="13+" value="13+" />
        </Picker>
      </View>
      <View style={{ paddingTop: 12 }}>
        <Text style={{ color: "#ffffff" }}>Upload cover image</Text>
      </View>
      {/* Upload Image Box */}
      <View style={styles.uploadcontainer}>
        <View style={styles.uploadBox}>
          <TouchableOpacity style={styles.dottedBox} onPress={pickImage}>
            <View style={styles.iconContainer}>
              <Ionicons name="cloud-upload-sharp" size={24} color="#FFD700" />
            </View>
            <Text style={styles.fromDeviceText}>From device</Text>
          </TouchableOpacity>

          <View style={styles.infoContainer}>
            <Ionicons
              name="information-circle-outline"
              size={18}
              color="#FF6A6A"
            />
            <Text style={styles.recommendedText}>
              Recommended size: 1280×720px, JPG/PNG
            </Text>
          </View>
        </View>
      </View>
      {coverImage && (
        <Image source={{ uri: coverImage }} style={styles.image} />
      )}

      {/* Upload Episodes Box */}
      <View>
        <Text style={{ color: "#ffffff", paddingTop: 18 }}>
          Upload Episodes
        </Text>
      </View>
      <View style={styles.uploadcontainer}>
        <View style={styles.uploadBox}>
          <TouchableOpacity style={styles.dottedBox} onPress={pickVideo}>
            <View style={styles.iconContainer}>
              <Ionicons name="cloud-upload-sharp" size={24} color="#FFD700" />
            </View>
            <Text style={styles.fromDeviceText}>From device</Text>
          </TouchableOpacity>

          <View style={styles.infoContainer}>
            <Ionicons
              name="information-circle-outline"
              size={18}
              color="#FF6A6A"
            />
            <Text style={styles.recommendedText}>
              Recommended size Limit: 500MB, 3gp/Mp4
            </Text>
          </View>
        </View>
      </View>

      {videos.map((video, index) => (
        <View
          key={index}
          style={{
            backgroundColor: "#282828",
            padding: 6,
            borderRadius: 6,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 3,
          }}
        >
          {/* <Text style={{ color: "white" }}>{video.name}</Text> */}

          <Text style={{ color: "white" }}>
            Flake of emotions Episode 01.Mp4
          </Text>
          <TouchableOpacity>
            <EvilIcons name="trash" size={18} color="white" />
          </TouchableOpacity>
        </View>
      ))}

      <TouchableOpacity
        style={{
          backgroundColor: "#FF6A00",
          padding: 16,
          borderRadius: 8,
          marginVertical: 20,
        }}
        onPress={handleSubmit}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Upload & Submit For Approval
        </Text>
      </TouchableOpacity>

      <View style={{ height: 70 }} />
    </ScrollView>
  );
};

const styles = {
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 16,
    backgroundColor: "#131313",
    color: "#ffffff",
    borderRadius: 8,
  },
  image: { width: "100%", height: 200, marginVertical: 10 },
  uploadcontainer: {
    width: "100%",
    backgroundColor: "#000B14",
    padding: 4,
    borderRadius: 4,
  },
  uploadBox: {
    borderRadius: 2,
    // padding: 12,
  },
  uploadText: {
    color: "#999",
    fontSize: 16,
    marginBottom: 15,
  },
  dottedBox: {
    borderWidth: 1,
    borderColor: "#444",
    borderStyle: "dashed",
    borderRadius: 8,
    paddingVertical: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(50, 50, 50, 0.2)",
    width: "100%",
    alignSelf: "center",
    marginVertical: 15,
  },
  iconContainer: {
    backgroundColor: "rgba(50, 50, 50, 0.7)",
    padding: 8,
    borderRadius: 20,
    marginBottom: 8,
  },
  fromDeviceText: {
    color: "#AAA",
    fontSize: 12,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  recommendedText: {
    color: "#AAA",
    fontSize: 13,
    marginLeft: 6,
  },
};

export default Upload;
