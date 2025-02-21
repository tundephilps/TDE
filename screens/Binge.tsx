import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Animated,
} from "react-native";
import { Video } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";
import { Fontisto, Ionicons, MaterialIcons } from "@expo/vector-icons";
import EpisodeSelector from "@/components/Binge/EpisodesModal";

const { width, height } = Dimensions.get("window");

const Binge = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (showControls) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(() => setShowControls(false));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showControls]);

  const togglePlayPause = async () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      await videoRef.current.pauseAsync();
    } else {
      await videoRef.current.playAsync();
    }
    setIsPlaying(!isPlaying);
    setShowControls(true);
  };

  const skipForward = async () => {
    if (videoRef.current) {
      const status = await videoRef.current.getStatusAsync();
      if (status.isLoaded) {
        await videoRef.current.setPositionAsync(status.positionMillis + 10000);
      }
    }
  };

  const skipBackward = async () => {
    if (videoRef.current) {
      const status = await videoRef.current.getStatusAsync();
      if (status.isLoaded) {
        await videoRef.current.setPositionAsync(status.positionMillis - 10000);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}

      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.header}>
        <TouchableOpacity
          // onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>The Wars of Freedom</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.videoContainer}
        onPress={togglePlayPause}
      >
        <Video
          ref={videoRef}
          source={require("../assets/videos/TDE.mp4")}
          style={styles.video}
          resizeMode="cover"
          shouldPlay
          isLooping
        />
        <LinearGradient
          colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.5)", "rgba(0,0,0,0.9)"]}
          style={styles.gradient}
        />

        {/* Right Side Icons */}
        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="heart" size={26} color="white" />
            <Text style={{ color: "white", fontSize: 10 }}>34.5k</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Fontisto name="share-a" size={24} color="white" />
            <Text style={{ color: "white", fontSize: 10 }}>Share</Text>
          </TouchableOpacity>
          <EpisodeSelector />
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="star" size={26} color="white" />

            <Text style={{ color: "white", fontSize: 10 }}>11.2k</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Content */}
        <View style={styles.bottomContent}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: "yellow",
                alignContent: "center",

                borderRadius: 5,
                backgroundColor: "#2d2d2f",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 10,
                  textAlign: "center",
                  padding: 6,
                }}
              >
                Vampires & Werewolves
              </Text>
            </View>

            <View
              style={{
                borderWidth: 0.5,
                borderColor: "yellow",
                alignContent: "center",

                borderRadius: 5,
                backgroundColor: "#2d2d2f",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 10,
                  textAlign: "center",
                  padding: 6,
                }}
              >
                32 Episodes
              </Text>
            </View>
          </View>
          <Text style={styles.title}>The Wars of Freedom</Text>
          <Text style={styles.description}>
            A gripping tale of resilience and rebellion, where oppressed souls
            rise against tyranny to forge a new future for all.
          </Text>
        </View>
        {/* Overlay Controls */}
        {showControls && (
          <Animated.View style={[styles.controls, { opacity: fadeAnim }]}>
            <TouchableOpacity onPress={skipBackward}>
              <Ionicons name="play-back" size={40} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePlayPause}>
              <Ionicons
                name={isPlaying ? "pause" : "play"}
                size={50}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={skipForward}>
              <Ionicons name="play-forward" size={40} color="white" />
            </TouchableOpacity>
          </Animated.View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  videoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: height,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    top: 12,
    padding: 16,

    zIndex: 10,
  },

  backButton: { padding: 8, backgroundColor: "#3f3e3e", borderRadius: 8 },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  rightIcons: {
    position: "absolute",
    right: 16,
    top: height / 1.9 - 100,
    alignItems: "center",
  },
  iconButton: {
    marginVertical: 16,
    alignItems: "center",
  },
  iconText: {
    color: "white",
    fontSize: 12,
    marginTop: 4,
  },
  bottomContent: {
    position: "absolute",
    bottom: 32,
    left: 16,
    right: 16,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    color: "white",
    fontSize: 14,
    opacity: 0.9,
    lineHeight: 20,
  },
  controls: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
});

export default Binge;
