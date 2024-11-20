import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const notificationData = [
  { id: "1", title: "New Order Update", message: "Your order is on the way!", time: "10 mins ago",icon: require("../assets/img/combo1.jpg") },
  { id: "2", title: "Special Offer", message: "Get 20% off on all pizzas!", time: "2 hours ago",icon: require("../assets/img/combo2.jpg")},
  { id: "3", title: "New Menu Item", message: "Check out our new vegetarian menu.", time: "5 hours ago",icon: require("../assets/img/combo3.jpg") },
  { id: "4", title: "Delivery Delay", message: "Your delivery will arrive 15 minutes late.", time: "1 day ago",icon: require("../assets/img/combo4.jpg")},
  { id: "5", title: "Order Confirmation", message: "Your order has been confirmed!", time: "3 days ago",icon: require("../assets/img/combo7.jpg") },
];

const Notification = () => {
  const navigation = useNavigation();

  const scr02 = () => {
    navigation.navigate("Home");
  };

  const renderItem = ({ item }) => (
    <View style={styles.notificationContainer}>
      <Image source={item.icon} style={styles.notificationIcon} />
      <View style={styles.notificationTextContainer}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
      <TouchableOpacity style={styles.deleteButton}>
        <AntDesign name="delete" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <FlatList
          data={notificationData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF6F61",
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
  body: {
    flex: 1,
    padding: 10,
  },
  notificationContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
    elevation: 3, // Tạo bóng đổ cho thông báo
  },
  notificationIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
    borderRadius: 20,
  },
  notificationTextContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  notificationMessage: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
  },
  notificationTime: {
    fontSize: 12,
    color: "#AAA",
    marginTop: 5,
  },
  deleteButton: {
    marginLeft: 10,
  },
});

export default Notification;
