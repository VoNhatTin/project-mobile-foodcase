import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const foodData = [
  { id: "1", name: "Apple", image: require("../assets/img/apple.jpg"), category: "Vegetable", price: 1.5 },
  { id: "2", name: "Pear", image: require("../assets/img/pear.jpg"), category: "Vegetable", price: 1.2 },
  { id: "3", name: "Coconut", image: require("../assets/img/coconut.jpg"), category: "Vegetable", price: 2.0 },
  { id: "9", name: "Pizza", image: require("../assets/img/pizza.jpg"), category: "Fastfood", price: 5.0 },
  { id: "17", name: "Coke", image: require("../assets/img/coke.jpg"), category: "Drinks", price: 1.0 },
 
];

const Basket = () => {
  const navigation = useNavigation();

  const scr02 = () => {
    navigation.navigate("Home");
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <TouchableOpacity style={styles.deleteButton}>
        <AntDesign name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  // Tính tổng giá trị giỏ hàng
  const totalAmount = foodData.reduce((total, item) => total + item.price, 0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={scr02} style={styles.backButton}>
          <AntDesign name="arrowleft" size={40} color={"#fff"} />
        </TouchableOpacity>
        <Text style={styles.headerText}>My Basket</Text>
      </View>
      <View style={styles.body}>
        <FlatList
          data={foodData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.totalText}>Total: ${totalAmount.toFixed(2)}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
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
    flex: 8,
    padding: 10,
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
    elevation: 3, 
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 15,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  category: {
    fontSize: 14,
    color: "#777",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF6F61",
  },
  deleteButton: {
    marginLeft: 15,
  },
  footer: {
    padding: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    elevation: 3,
  },
  totalText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  checkoutButton: {
    backgroundColor: "#FF6F61",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  checkoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Basket;
