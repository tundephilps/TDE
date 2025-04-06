import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Animated,
  FlatList,
  Platform,
} from "react-native";
import { Video } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import EpisodeSelector from "@/components/Binge/EpisodesModal";
import { useNavigation } from "@react-navigation/native";
import {
  activateKeepAwake,
  deactivateKeepAwake,
  useKeepAwake,
} from "expo-keep-awake";

const { width, height } = Dimensions.get("window");

// Sample video data - replace with your actual video sources
const VIDEOS = [
  {
    id: "1",
    source: require("../assets/videos/Meh.mp4"),
    title: "The Wars of Freedom",
    description:
      "A gripping tale of resilience and rebellion, where oppressed souls rise against tyranny to forge a new future for all.",
    tags: ["Vampires & Werewolves", "32 Episodes"],
    likes: "34.5k",
    stars: "11.2k",
  },
  {
    id: "2",
    source: require("../assets/videos/TDE.mp4"), // Replace with your second video
    title: "Moonlight Shadows",
    description:
      "In the darkness, secrets emerge as the ancient conflict between two supernatural beings reaches its climax.",
    tags: ["Mystery", "28 Episodes"],
    likes: "29.1k",
    stars: "9.8k",
  },
  {
    id: "3",
    source: require("../assets/videos/Gist.mp4"), // Replace with your third video
    title: "Beyond the Horizon",
    description:
      "An epic adventure across uncharted lands where heroes discover their true destiny.",
    tags: ["Adventure", "18 Episodes"],
    likes: "42.3k",
    stars: "15.6k",
  },
];

const VideoItem = ({ item, index, visibleVideoIndex }) => {
  const navigation = useNavigation();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const isVisible = index === visibleVideoIndex;

  useKeepAwake();

  // Control video playback based on visibility
  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.playAsync();
        setIsPlaying(true);
      } else {
        videoRef.current.pauseAsync();
        setIsPlaying(false);
      }
    }
  }, [isVisible]);

  // Activate keep-awake when component mounts
  useEffect(() => {
    activateKeepAwake();
    return () => {
      deactivateKeepAwake();
    };
  }, []);

  // Handle controls fade effect
  useEffect(() => {
    if (showControls) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
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

  const handleScreenPress = () => {
    setShowControls(true);
  };

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

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.videoContainer}
        onPress={handleScreenPress}
      >
        <Video
          ref={videoRef}
          source={item.source}
          style={styles.video}
          resizeMode="cover"
          shouldPlay={isVisible}
          isLooping
        />

        <LinearGradient
          colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.5)", "rgba(0,0,0,0.9)"]}
          style={styles.gradient}
        />

        {/* UI Elements with Fade Effect */}
        {showControls && (
          <Animated.View style={[styles.overlay, { opacity: fadeAnim }]}>
            {/* Header */}
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backButton}
              >
                <Ionicons name="arrow-back" size={24} color="white" />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>{item.title}</Text>
              <TouchableOpacity>
                <Ionicons name="ellipsis-horizontal" size={24} color="white" />
              </TouchableOpacity>
            </View>

            {/* Right Side Icons */}
            <View style={styles.rightIcons}>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="heart" size={26} color="white" />
                <Text style={{ color: "white", fontSize: 10 }}>
                  {item.likes}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Fontisto name="share-a" size={24} color="white" />
                <Text style={{ color: "white", fontSize: 10 }}>Share</Text>
              </TouchableOpacity>
              <EpisodeSelector />
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="star" size={26} color="white" />
                <Text style={{ color: "white", fontSize: 10 }}>
                  {item.stars}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Bottom Content */}
            <View style={styles.bottomContent}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                  paddingBottom: 6,
                }}
              >
                {item.tags.map((tag, idx) => (
                  <View key={idx} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>

            {/* Overlay Controls */}
            <View style={styles.controls}>
              <TouchableOpacity
                onPress={() => videoRef.current?.setPositionAsync(0)}
              >
                <Ionicons name="play-back" size={40} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={togglePlayPause}>
                <Ionicons
                  name={isPlaying ? "pause" : "play"}
                  size={50}
                  color="white"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  videoRef.current?.getStatusAsync().then((status) => {
                    if (status.isLoaded) {
                      videoRef.current.setPositionAsync(
                        status.positionMillis + 10000
                      );
                    }
                  })
                }
              >
                <Ionicons name="play-forward" size={40} color="white" />
              </TouchableOpacity>
            </View>
          </Animated.View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const Binge = () => {
  const [visibleVideoIndex, setVisibleVideoIndex] = useState(0);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setVisibleVideoIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar translucent backgroundColor="transparent" />
      <FlatList
        data={VIDEOS}
        renderItem={({ item, index }) => (
          <VideoItem
            item={item}
            index={index}
            visibleVideoIndex={visibleVideoIndex}
          />
        )}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
        snapToAlignment="start"
        decelerationRate="fast"
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
    width,
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
    height,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    paddingBottom: "20%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    top: 0,
    paddingHorizontal: 16,
    paddingVertical: 12,
    zIndex: 10,
  },
  backButton: {
    padding: 8,
    backgroundColor: "#3f3e3e",
    borderRadius: 8,
  },
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
  bottomContent: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? 180 : 80,
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
    top: "45%",
  },
  tag: {
    borderWidth: 0.5,
    borderColor: "#F51352",
    borderRadius: 5,
    backgroundColor: "#2d2d2f",
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  tagText: {
    color: "white",
    fontSize: 10,
    textAlign: "center",
  },
});

export default Binge;
