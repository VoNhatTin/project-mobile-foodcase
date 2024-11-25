import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  Dimensions,
  Modal,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Carousel from "../components/Carousel";

const foodData = [
  {
    id: "1",
    name: "Apple",
    image: require("../assets/img/apple.jpg"),
    category: "Vegetable",
    sold: 150,
    likes: 200,
    price: 1.5,
    quantity: 1,
  },
  {
    id: "2",
    name: "Pear",
    image: require("../assets/img/pear.jpg"),
    category: "Vegetable",
    sold: 150,
    likes: 200,
    price: 1.2,
    quantity: 1,
  },
  {
    id: "3",
    name: "Coconut",
    image: require("../assets/img/coconut.jpg"),
    category: "Vegetable",
    sold: 150,
    likes: 200,
    price: 1,
    quantity: 1,
  },
  {
    id: "4",
    name: "Orange",
    image: require("../assets/img/orange.jpg"),
    category: "Vegetable",
    sold: 150,
    likes: 200,
    price: 0.4,
    quantity: 1,
  },
  {
    id: "5",
    name: "Mango",
    image: require("../assets/img/mango.jpg"),
    category: "Vegetable",sold: 150,
    likes: 200,
    price: 1.5,
    quantity: 1,
  },
  {
    id: "6",
    name: "Grapes",
    image: require("../assets/img/grapes.jpg"),
    category: "Vegetable",
    sold: 150,
    likes: 200,
    price: 3,
    quantity: 1,
  },
  {
    id: "7",
    name: "Strawberry",
    image: require("../assets/img/strawberry.jpg"),
    category: "Vegetable",
    sold: 150,
    likes: 200,
    price: 0.5,
    quantity: 1,
  },
  {
    id: "8",
    name: "Kiwi",
    image: require("../assets/img/kiwi.jpg"),
    category: "Vegetable",sold: 150,
    likes: 200,
    price: 1.5,
    quantity: 1,
  },
  {
    id: "9",
    name: "Pizza",
    image: require("../assets/img/pizza.jpg"),
    category: "Fastfood",
    sold: 150,
    likes: 200,
    price: 8,
    quantity: 1,
  },
  {
    id: "10",
    name: "Double Hamburger",
    image: require("../assets/img/doubleBurger.jpg"),
    category: "Fastfood",
    sold: 150,
    likes: 200,
    price: 7,
    quantity: 1,
  },
  {
    id: "11",
    name: "Bacon Dogs",
    image: require("../assets/img/bacondogs.jpg"),
    category: "Fastfood",
    sold: 150,
    likes: 200,
    price: 3,
    quantity: 1,
  },
  {
    id: "12",
    name: "Sandwich",
    image: require("../assets/img/sandwich.jpg"),
    category: "Fastfood",
    sold: 150,
    likes: 200,
    price: 3.5,
    quantity: 1,
  },
  {
    id: "13",
    name: "Chicken Fries",
    image: require("../assets/img/chicken.jpg"),
    category: "Fastfood",
    sold: 150,
    likes: 200,
    price: 3,
    quantity: 1,
  },
  {
    id: "14",
    name: "Hamburger",
    image: require("../assets/img/hamburger.jpg"),
    category: "Fastfood",
    sold: 150,
    likes: 200,
    price: 3,
    quantity: 1,
  },
  {
    id: "15",
    name: "French Fries",
    image: require("../assets/img/fries.jpg"),
    category: "Fastfood",
    sold: 150,
    likes: 200,
    price: 2,
    quantity: 1,
  },
  {
    id: "16",
    name: "Spaghetti",
    image: require("../assets/img/spagetti.jpg"),
    category: "Fastfood",
    sold: 150,
    likes: 200,
    price: 6,
    quantity: 1,
  },
  {
    id: "17",
    name: "Coke",
    image: require("../assets/img/coke.jpg"),
    category: "Drinks",
    sold: 150,
    likes: 200,
    price: 8,
    quantity: 1,
  },
  {
    id: "18",
    name: "Pepsi",
    image: require("../assets/img/pepsi.jpg"),
    category: "Drinks",
    sold: 150,
    likes: 200,
    price: 2,
    quantity: 1,
  },
  {
    id: "19",
    name: "Orange Juice",
    image: require("../assets/img/orangejuice.jpg"),
    category: "Drinks",
    sold: 150,
    likes: 200,
    price: 3,
    quantity: 1,
  },
  {
    id: "20",
    name: "Lemonade",
    image: require("../assets/img/lemonade.jpg"),
    category: "Drinks",
    sold: 150,
    likes: 200,
    price: 2.5,
    quantity: 1,
  },
  {
    id: "21",
    name: "Water",
    image: require("../assets/img/water.jpg"),
    category: "Drinks",
    sold: 150,
    likes: 200,
    price: 1.5,
    quantity: 1,
  },
  {
    id: "22",
    name: "Cocktail",
    image: require("../assets/img/sake.jpg"),
    category: "Drinks",
    sold: 150,
    likes: 200,
    price: 10,
    quantity: 1,
  },
  {
    id: "23",
    name: "Soda",
    image: require("../assets/img/soda.jpg"),
    category: "Drinks",
    sold: 150,
    likes: 200,
    price: 3,
    quantity: 1,
  },
  {
    id: "24",
    name: "Beer",
    image: require("../assets/img/beer.jpg"),
    category: "Drinks",
    sold: 150,
    likes: 200,
    price: 3,
    quantity: 1,
  },
  {
    id: "25",
    name: "Combo 1",
    image: require("../assets/img/combo1.jpg"),
    category: "Combo",
    sold: 150,
    likes: 200,
    price: 10,
    quantity: 1,
  },
  {
    id: "26",
    name: "Combo 2",
    image: require("../assets/img/combo2.jpg"),
    category: "Combo",
    sold: 150,
    likes: 200,
    price: 10.5,
    quantity: 1,
  },
  {
    id: "27",
    name: "Combo 3",
    image: require("../assets/img/combo3.jpg"),
    category: "Combo",
    sold: 150,
    likes: 200,
    price: 12.5,
    quantity: 1,
  },
  {
    id: "28",
    name: "Combo 4",
    image: require("../assets/img/combo4.jpg"),
    category: "Combo",
    sold: 150,
    likes: 200,
    price: 14.5,
    quantity: 1,
  },
  {
    id: "29",
    name: "Combo 5",
    image: require("../assets/img/combo5.jpg"),
    category: "Combo",
    sold: 150,
    likes: 200,
    price: 19.5,
    quantity: 1,
  },
  {
    id: "30",
    name: "Combo 6",
    image: require("../assets/img/combo6.jpg"),
    category: "Combo",
    sold: 150,
    likes: 200,
    price: 22,
    quantity: 1,
  },
  {
    id: "31",
    name: "Combo 7",
    image: require("../assets/img/combo7.jpg"),
    category: "Combo",
    sold: 150,
    likes: 200,
    price: 18.5,
    quantity: 1,
  },
  {
    id: "32",
    name: "Combo 8",
    image: require("../assets/img/combo8.jpg"),
    category: "Combo",
    sold: 150,
    likes: 200,
    price: 25.5,
    quantity: 1,
  },
];
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Vegetable");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredData =
    selectedCategory === "All"
      ? foodData
      : foodData.filter((item) => item.category === selectedCategory);

  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  };
  const handleBasket = () => {
    navigation.navigate("Basket");
  };
  const goToNotifications = () => {
    navigation.navigate("Notification");
  };
  const handleMessage = () => {
    navigation.navigate("Message");
  };
  const addToBasket = () => {
    setBasket((prevBasket) => [...prevBasket, selectedItem]);
    setModalVisible(false);
    navigation.navigate("Basket", { basket: [...basket, selectedItem] });
  };
  const renderFoodItem = ({ item }) => (
    <TouchableOpacity
      style={styles.foodItem}
      onPress={() => {
        setSelectedItem(item);
        setModalVisible(true);
      }}
    >
      <Image source={item.image} style={styles.foodImage} />
      <Text style={styles.foodName}>{item.name}</Text>
    </TouchableOpacity>
  );
  const increaseQuantity = () => {
    setSelectedItem((prevItem) => ({
      ...prevItem,
      quantity: prevItem.quantity + 1,
    }));
  };

  const decreaseQuantity = () => {
    setSelectedItem((prevItem) => ({
      ...prevItem,
      quantity: prevItem.quantity > 1 ? prevItem.quantity - 1 : 1,
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.backIcon}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handleBasket} style={styles.cartIcon}>
          <AntDesign name="shoppingcart" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <Carousel />
      </View>
      <View style={styles.categoryContainer}>
        {["Vegetable", "Fastfood", "Drinks", "Combo"].map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategoryButton,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* ------------------------------------------------------------------------------------ */}
      <View style={styles.body}>
        <Text style={styles.titleText}>Order your favorite!</Text>
        <TouchableOpacity onPress={() => setSelectedCategory("All")}>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredData}
        renderItem={renderFoodItem}
        keyExtractor={(item) => item.id}
        numColumns={1}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, marginTop: 20 }}
      />

      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        transparent={true}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedItem && (
              <>
                <Image source={selectedItem.image} style={styles.modalImage} />
                <Text style={styles.modalName}>{selectedItem.name}</Text>
                <Text style={styles.modalCategory}>
                  Category: {selectedItem.category}
                </Text>
                <Text>Sold: {selectedItem.sold}</Text>
                <Text>Likes: {selectedItem.likes}</Text>
                <Text>Price: ${selectedItem.price}</Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    onPress={decreaseQuantity}
                    style={styles.quantityButton}
                  >
                    <AntDesign name="caretdown" size="20" color="black" />
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>
                    {selectedItem.quantity}
                  </Text>
                  <TouchableOpacity
                    onPress={increaseQuantity}
                    style={styles.quantityButton}
                  >
                    <AntDesign name="caretup" size="20" color="black" />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.addToBasketButton}
                  onPress={addToBasket}
                >
                  <Text style={styles.addToBasketButtonText}>
                    Add to Basket
                  </Text>
                </TouchableOpacity>
              </>
            )}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* ------------------------------------------------------------------------------------ */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleMessage} style={styles.footerItem}>
          <AntDesign name="message1" size={24} color="black" />
          <Text style={styles.footerText}>Tin nhắn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={goToNotifications}>
          <AntDesign name="bells" size={24} color="black" />
          <Text style={styles.footerText}>Thông báo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <AntDesign name="home" size={24} color="black" />
          <Text style={styles.footerText}>Trang chủ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate("Account")}>
          <AntDesign name="user" size={24} color="black" />
          <Text style={styles.footerText}>Tài khoản</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <AntDesign name="setting" size={24} color="black" />
          <Text style={styles.footerText}>Cài đặt</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  backIcon: {
    padding: 10,
  },
  cartIcon: {
    padding: 10,
  },
  header: {
    alignItems: "center",
    paddingVertical: 10,
  },
  searchBox: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 16,
    width: "90%",
    marginBottom: 10,
  },
  bannerContainer: {
    height: screenHeight * 0.35, // 35% chiều cao màn hình
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  categoryContainer: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "center",
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: "#008080",
    borderRadius: 15,
    height: 30,
    width: 90,
    backgroundColor: "#008080",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  categoryText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
  },
  selectedCategoryButton: {
    backgroundColor: "#9C9C9C",
  },
  body: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    marginBottom: 5,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAllText: {
    fontSize: 16,
    color: "grey",
  },
  flatListContent: {
    paddingHorizontal: 16,
  },
  foodItem: {
    flexDirection: "row",
    alignItems: "center",
    margin: 8,
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "#ccc",
  },
  foodImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  foodName: {
    fontSize: 14,
    fontWeight: "bold",
    flex: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    height: "60%",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    alignItems: "center",
  },
  modalImage: {
    width: "45%",
    height: 170,
    borderRadius: 8,
    marginBottom: 10,
  },
  modalName: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalCategory: {
    fontSize: 20,
    color: "grey",
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
    marginTop: 10,
  },
  quantityButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#009080",
    borderRadius: 20,
  },
  quantityButtonText: {
    fontSize: 24,
    color: "white",
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  addToBasketButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#009080",
    borderRadius: 8,
  },
  addToBasketButtonText: {
    color: "white",
    fontSize: 16,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#ccc",
    borderRadius: 8,
  },
  closeButtonText: {
    color: "black",
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    height: "10%",
    alignItems: "center",
  },
  footerItem: {
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    marginTop: 4,
  },
});
export default Home;
