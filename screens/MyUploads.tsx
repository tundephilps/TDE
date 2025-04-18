import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import {
  Ionicons,
  Entypo,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  EditEpisode: undefined;
};

type NavigationProps = NavigationProp<RootStackParamList>;

const MyUploads = () => {
  const navigation = useNavigation<NavigationProps>();
  const handleEdit = async () => {
    navigation.navigate("EditEpisode");
  };

  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!isMenuVisible);
  const toggleDeleteModal = () => {
    setMenuVisible(false);
    setDeleteModalVisible(!isDeleteModalVisible);
  };

  const confirmDelete = () => {
    setDeleteModalVisible(false);
    setTimeout(() => {
      setSuccessModalVisible(true);
    }, 300);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#1b1b1b", padding: 20 }}>
      {/* Header */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <View style={styles.backIcon}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </View>
        <Text style={styles.backText}>My Uploads</Text>
      </TouchableOpacity>

      {/* Content */}
      <View style={styles.itemContainer}>
        <View style={styles.itemDetails}>
          <Image
            source={require("../assets/images/Jack.png")}
            style={styles.thumbnail}
          />
          <View>
            <Text style={styles.title}>The Forbidden Love</Text>
            <View style={styles.statusRow}>
              <Text style={styles.episodeText}>EP.53</Text>
              <Entypo name="flow-line" size={14} color="white" />
              <Text style={styles.statusText}>Status</Text>
              <View style={styles.statusBadge}>
                <Text style={styles.statusBadgeText}>Approved</Text>
              </View>
            </View>
            <View style={styles.statsRow}>
              <Ionicons name="eye" size={16} color="#aaa" />
              <Text style={styles.statsText}>32.5k</Text>
              <FontAwesome5
                name="money-bill-wave"
                size={16}
                color="#aaa"
                style={{ marginLeft: 10 }}
              />
              <Text style={styles.statsText}>N3250</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={toggleMenu}>
          <Entypo name="dots-three-vertical" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Menu Modal */}
      <Modal visible={isMenuVisible} transparent animationType="fade">
        <TouchableOpacity style={styles.overlay} onPress={toggleMenu}>
          <View style={styles.popup}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={toggleDeleteModal}
            >
              <MaterialIcons name="delete" size={20} color="white" />
              <Text style={styles.menuText}>Delete</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={handleEdit}>
              <MaterialIcons name="edit" size={20} color="white" />
              <Text style={styles.menuText}>Edit episodes</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal visible={isDeleteModalVisible} transparent animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.deletePopup}>
            <Text style={styles.confirmText}>
              Are you sure you want to delete this episode?
            </Text>
            <Text style={styles.warningText}>
              This action cannot be undone.
            </Text>
            <Image
              source={require("../assets/images/Jack.png")}
              style={styles.deleteImage}
            />
            <Text style={styles.title}>The Forbidden Love</Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={toggleDeleteModal}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={confirmDelete}
              >
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Success Modal */}
      <Modal visible={isSuccessModalVisible} transparent animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.successPopup}>
            <Text style={styles.successText}>Movie Successfully deleted.</Text>
            <Image
              source={require("../assets/images/success.png")}
              style={styles.successImage}
            />
            <TouchableOpacity
              style={styles.bingeButton}
              onPress={() => setSuccessModalVisible(false)}
            >
              <Text style={styles.bingeText}>Binge watch</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 8,
  },
  itemDetails: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  thumbnail: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  episodeText: {
    color: "#F51352",
    fontSize: 10,
  },
  statusText: {
    color: "white",
    fontSize: 10,
  },
  statusBadge: {
    backgroundColor: "#2b3818",
    padding: 8,
    borderRadius: 8,
  },
  statusBadgeText: {
    color: "#0DCA14",
    fontSize: 10,
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  statsText: {
    color: "white",
    marginLeft: 5,
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    backgroundColor: "#222",
    padding: 12,
    borderRadius: 10,
    width: 200,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  menuText: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
  },
  deletePopup: {
    backgroundColor: "#1b1b1b",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    width: 300,
  },
  confirmText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  warningText: {
    color: "#aaa",
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
  deleteImage: {
    width: 120,
    height: 80,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#555",
    padding: 12,
    borderRadius: 8,
    marginRight: 10,
    alignItems: "center",
  },
  deleteButton: {
    flex: 1,
    backgroundColor: "#F51352",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  cancelText: {
    color: "white",
    fontSize: 16,
  },
  deleteText: {
    color: "white",
    fontSize: 16,
  },
  successPopup: {
    backgroundColor: "#1b1b1b",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    width: 300,
  },
  successText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  successImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  bingeButton: {
    backgroundColor: "#F51352",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  bingeText: {
    color: "white",
    fontSize: 16,
  },
});
