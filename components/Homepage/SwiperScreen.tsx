import { Entypo } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: 1,

    genre: "War",
    episodes: "15",
    title: "The Wars of Freedom",
    description:
      "A gripping tale of resilience and rebellion, where oppressed souls rise...",

    image: require("../../assets/images/War.jpg"), // Load from local assets folder
  },
  {
    id: 2,

    genre: "Horror",

    episodes: "63",
    title: "A kiss in the Rain",
    description:
      "A gripping tale of resilience and rebellion, where oppressed souls rise...",

    image: require("../../assets/images/Swiper1.jpg"), // Load from local assets folder
  },
  {
    id: 3,

    genre: "Horror",

    episodes: "63",
    title: "The Sudden Quake",
    description:
      "A gripping tale of resilience and rebellion, where oppressed souls rise...",

    image: require("../../assets/images/Swiper2.jpg"), // Load from local assets folder
  },
  {
    id: 4,

    genre: "Horror",

    episodes: "63",
    title: "Lost Princess",
    description:
      "A gripping tale of resilience and rebellion, where oppressed souls rise...",

    image: require("../../assets/images/Swiper3.jpg"), // Load from local assets folder
  },
  {
    id: 5,

    genre: "Horror",

    episodes: "63",
    title: "An Artist's Madness",
    description:
      "A gripping tale of resilience and rebellion, where oppressed souls rise...",

    image: require("../../assets/images/Swiper4.jpg"), // Load from local assets folder
  },

  // Add more slides if needed
];

const SwiperScreen: React.FC = () => {
  return (
    <View style={{ height: 500 }}>
      <Swiper
        autoplay
        loop
        showsPagination={true}
        dotStyle={{
          backgroundColor: "rgba(255, 255, 255, 0.4)", // Light white for inactive dots
          width: 15, // Increased width
          height: 5, // Keeping height equal to width for circular dots
          borderRadius: 5,
          marginLeft: 4,
          marginRight: 4,
        }}
        activeDotStyle={{
          backgroundColor: "white", // Pure white for active dot
          width: 15, // Increased width
          height: 5, // Keeping height equal to width for circular dots
          borderRadius: 5,
          marginLeft: 4,
          marginRight: 4,
        }}
        paginationStyle={{
          top: undefined, // This moves the dots to the top - adjust this value as needed
          bottom: 63, // This removes the default bottom positioning
        }}
      >
        {slides.map((slide) => (
          <ImageBackground
            key={slide.id}
            source={slide.image}
            style={{ width, height: 500 }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                padding: 20,
                alignItems: "center",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
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
                    {slide.genre}
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
                    {slide.episodes} Episodes
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                }}
              >
                {slide.title}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "white",
                  marginVertical: 10,
                  textAlign: "center",

                  marginBottom: 25,
                }}
              >
                {slide.description}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#FF6A00",
                  paddingVertical: 5,

                  paddingHorizontal: 30,
                  borderRadius: 30,
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Entypo name="controller-play" size={24} color="white" />
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Binge
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ))}
      </Swiper>
    </View>
  );
};

export default SwiperScreen;
