import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const MyUploads = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#1b1b1b", padding: 20 }}>
      {/* Header */}
      <TouchableOpacity style={styles.backButton}>
        <View style={{ backgroundColor: "#5c5c59", padding: 2, opacity: 0.7 }}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </View>
        <Text style={styles.backText}>My Uploads</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 8,
        }}
      >
        {/* Thumbnail */}

        <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
          <Image
            source={require("../assets/images/Jack.png")}
            style={{ width: 90, height: 90, borderRadius: 10 }}
          />
          <View>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              The Forbidden Love
            </Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <Text style={{ color: "#FF6A00", fontSize: 10 }}>EP.53</Text>
              <Entypo name="flow-line" size={14} color="white" />
              <Text style={{ color: "white", fontSize: 10 }}>Status</Text>
              <View
                style={{
                  backgroundColor: "#2b3818",
                  padding: 8,
                  borderRadius: 8,
                }}
              >
                <Text style={{ color: "#0DCA14", fontSize: 10 }}>Approved</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <Ionicons name="eye" size={16} color="#aaa" />
              <Text style={{ color: "white", marginLeft: 5 }}>32.5k</Text>

              <FontAwesome6
                name="sack-dollar"
                size={16}
                color="#aaa"
                style={{ marginLeft: 10 }}
              />

              <Text style={{ color: "white", marginLeft: 5 }}>
                <Text style={{ color: "#FF6A00", fontSize: 16 }}>N</Text>
                3250
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 8,
        }}
      >
        {/* Thumbnail */}

        <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
          <Image
            source={require("../assets/images/Jack.png")}
            style={{ width: 90, height: 90, borderRadius: 10 }}
          />
          <View>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              The Forbidden Love
            </Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <Text style={{ color: "#FF6A00", fontSize: 10 }}>EP.53</Text>
              <Entypo name="flow-line" size={14} color="white" />
              <Text style={{ color: "white", fontSize: 10 }}>Status</Text>
              <View
                style={{
                  backgroundColor: "#2b3818",
                  padding: 8,
                  borderRadius: 8,
                }}
              >
                <Text style={{ color: "#0DCA14", fontSize: 10 }}>Pending</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <Ionicons name="eye" size={16} color="#aaa" />
              <Text style={{ color: "white", marginLeft: 5 }}>32.5k</Text>

              <FontAwesome6
                name="sack-dollar"
                size={16}
                color="#aaa"
                style={{ marginLeft: 10 }}
              />
              <Text style={{ color: "white", marginLeft: 5 }}>
                <Text style={{ color: "#FF6A00", fontSize: 16 }}>N</Text>
                3250
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 8,
        }}
      >
        {/* Thumbnail */}
        <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
          <Image
            source={require("../assets/images/Jack.png")}
            style={{ width: 90, height: 90, borderRadius: 10 }}
          />
          <View>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              The Forbidden Love
            </Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <Text style={{ color: "#FF6A00", fontSize: 10 }}>EP.53</Text>
              <Entypo name="flow-line" size={14} color="white" />
              <Text style={{ color: "white", fontSize: 10 }}>Status</Text>
              <View
                style={{
                  backgroundColor: "#381818",
                  padding: 8,
                  borderRadius: 8,
                }}
              >
                <Text style={{ color: "#CA0D0D", fontSize: 10 }}>Denied</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <Ionicons name="eye" size={16} color="#aaa" />
              <Text style={{ color: "white", marginLeft: 5 }}>32.5k</Text>

              <FontAwesome6
                name="sack-dollar"
                size={16}
                color="#aaa"
                style={{ marginLeft: 10 }}
              />

              <Text style={{ color: "white", marginLeft: 5 }}>N3250</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyUploads;

const styles = StyleSheet.create({
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
  },
});
