import Login from "@/screens/Login";
import { Platform, Text, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from "@/screens/SplashScreen";
import Homepage from "@/screens/Homepage";
import Favorite from "@/screens/Favorite";
import Profile from "@/screens/Profile";
import SignupScreen2 from "@/screens/SignUp2";

// Importing icons
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import Feedback from "@/screens/Feedback";
import InvitationCode from "@/screens/InvitationCode";
import MyUploads from "@/screens/MyUploads";
import Upload from "@/screens/Upload";
import Search from "@/screens/Search";
import WithdrawCoins from "@/screens/WithdrawCoins";
import Binge from "@/screens/Binge";
import BuyCoins from "@/screens/BuyCoins";

type RootStackParamList = {
  Login: undefined;
  Feedback: undefined;
  InvitationCode: undefined;
  MyUploads: undefined;
  Search: undefined;
  WithdrawCoins: undefined;
  Binge: undefined;
  Profile: undefined;
  Favorite: undefined;
  Homepage: undefined;
  BuyCoins: undefined;
  ConfirmPassword: undefined;
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
        if (route.name === "Homepage") {
          IconComponent = FontAwesome;
          iconName = "home";
        } else if (route.name === "Binge") {
          IconComponent = Ionicons;
          iconName = "layers";
        } else if (route.name === "Upload") {
          IconComponent = MaterialCommunityIcons;
          iconName = "headset";
        } else if (route.name === "Favorite") {
          IconComponent = MaterialIcons;
          iconName = "insert-chart";
        } else if (route.name === "Profile") {
          IconComponent = FontAwesome5;
          iconName = "user-alt";
        }

        // Render the icon component
        return (
          <IconComponent
            name={iconName}
            size={24}
            color={focused ? "#20409a" : "gray"}
          />
        );
      },
      tabBarLabelStyle: {
        fontSize: 14,
        fontWeight: "700",
      },
      tabBarStyle: {
        height: Platform.OS === "ios" ? 89 : 55,
      },
      tabBarActiveTintColor: "#20409a",
      tabBarInactiveTintColor: "gray",
    })}
  >
    <Tab.Screen name="Homepage" component={Homepage} />
    <Tab.Screen name="Binge" component={Binge} />
    <Tab.Screen name="Upload" component={Upload} />
    <Tab.Screen name="Favorite" component={Favorite} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default function Index() {
  return (
    <Stack.Navigator
      initialRouteName="BuyCoins"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="InvitationCode" component={InvitationCode} />

      <Tab.Screen name="MyUpload" component={MyUploads} />

      <Tab.Screen name="Search" component={Search} />

      <Tab.Screen name="WithdrawCoins" component={WithdrawCoins} />
      <Stack.Screen name="BuyCoins" component={BuyCoins} />
      <Stack.Screen name="Homepage" component={TabNavigator} />
    </Stack.Navigator>
  );
}
