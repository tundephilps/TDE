import Login from "@/screens/Login";
import { Platform, Text, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@/screens/Home";
import Favorite from "@/screens/Favorite";
import Profile from "@/screens/Profile";

// Importing icons
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  Fontisto,
  Feather,
} from "@expo/vector-icons";
import Feedback from "@/screens/Feedback";
import InvitationCode from "@/screens/InvitationCode";
import MyUploads from "@/screens/MyUploads";
import Upload from "@/screens/Upload";
import Search from "@/screens/Search";
import WithdrawCoins from "@/screens/WithdrawCoins";
import Binge from "@/screens/Binge";
import BuyCoins from "@/screens/BuyCoins";
import AboutUs from "@/screens/AboutUs";
import Settings from "@/screens/Settings";
import Language from "@/screens/Language";
import EditEpisode from "@/screens/EditEpisode";
import EpisodeSelector from "@/components/EditEpisodes/EpisodesModal";
import Ads from "@/screens/Ads";
import Earnings from "@/screens/Earnings";
import VideoPlay from "@/screens/VideoPlay";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Feedback: undefined;
  InvitationCode: undefined;
  MyUpload: undefined;
  Search: undefined;
  EditEpisode: undefined;
  WithdrawCoins: undefined;
  Binge: undefined;
  VideoPlay: undefined;
  Profile: undefined;
  Favorite: undefined;
  BuyCoins: undefined;
  Ads: undefined;
  Earnings: undefined;
  AboutUs: undefined;
  Settings: undefined;
  Language: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let IconComponent;
        let iconName;

        // Assign icons based on the route name
        if (route.name === "Home") {
          IconComponent = FontAwesome;
          iconName = "home";
        } else if (route.name === "Binge") {
          IconComponent = Fontisto;
          iconName = "film";
        } else if (route.name === "Upload") {
          IconComponent = Feather;
          iconName = "upload";
        } else if (route.name === "Favorite") {
          IconComponent = Feather;
          iconName = "star";
        } else if (route.name === "Profile") {
          IconComponent = FontAwesome5;
          iconName = "user";
        }

        // Render the icon component
        return (
          <IconComponent
            name={iconName}
            size={24}
            color={focused ? "#ffffff" : "gray"}
          />
        );
      },
      tabBarLabelStyle: {
        fontSize: 14,
        fontWeight: "700",
      },
      tabBarStyle: {
        height: Platform.OS === "ios" ? 65 : 55,
        backgroundColor: "#0A0A0A",
      },
      tabBarActiveTintColor: "#ffffff",
      tabBarInactiveTintColor: "gray",
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Binge" component={Binge} />
    <Tab.Screen name="Upload" component={Upload} />
    <Tab.Screen name="Favorite" component={Favorite} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default function Index() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={TabNavigator} />

      <Tab.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="InvitationCode" component={InvitationCode} />
      <Tab.Screen name="MyUpload" component={MyUploads} />
      <Tab.Screen name="WithdrawCoins" component={WithdrawCoins} />

      <Tab.Screen name="Search" component={Search} />

      <Tab.Screen name="EditEpisode" component={EditEpisode} />

      <Tab.Screen name="EpisodeModal" component={EpisodeSelector} />
      <Stack.Screen name="BuyCoins" component={BuyCoins} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="Settings" component={Settings} />

      <Stack.Screen name="Ads" component={Ads} />

      <Stack.Screen name="Earnings" component={Earnings} />

      <Stack.Screen name="VideoPlay" component={VideoPlay} />
      <Stack.Screen name="Language" component={Language} />
    </Stack.Navigator>
  );
}
