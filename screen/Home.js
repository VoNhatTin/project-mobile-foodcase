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
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const foodData = [
  {
    id: "1",
    name: "Apple",
    image: require("../assets/img/apple.jpg"),
    category: "Vegetable",
  },
  {
    id: "2",
    name: "Pear",
    image: require("../assets/img/pear.jpg"),
    category: "Vegetable",
  },
  {
    id: "3",
    name: "Coconut",
    image: require("../assets/img/coconut.jpg"),
    category: "Vegetable",
  },
  {
    id: "4",
    name: "Orange",
    image: require("../assets/img/orange.jpg"),
    category: "Vegetable",
  },
  {
    id: "5",
    name: "Mango",
    image: require("../assets/img/mango.jpg"),
    category: "Vegetable",
  },
  {
    id: "6",
    name: "Grapes",
    image: require("../assets/img/grapes.jpg"),
    category: "Vegetable",
  },
  {
    id: "7",
    name: "Strawberry",
    image: require("../assets/img/strawberry.jpg"),
    category: "Vegetable",
  },
  {
    id: "8",
    name: "Kiwi",
    image: require("../assets/img/kiwi.jpg"),
    category: "Vegetable",
  },
  {
    id: "9",
    name: "Salmon",
    image: require("../assets/img/salmon.jpg"),
    category: "Seafood",
  },
  {
    id: "10",
    name: "Shrimp",
    image: require("../assets/img/shrimp.jpg"),
    category: "Seafood",
  },
  {
    id: "11",
    name: "Crab",
    image: require("../assets/img/crab.jpg"),
    category: "Seafood",
  },
  {
    id: "12",
    name: "Lobster",
    image: require("../assets/img/lobster.jpg"),
    category: "Seafood",
  },
  {
    id: "13",
    name: "Oyster",
    image: require("../assets/img/oyster.jpg"),
    category: "Seafood",
  },
  {
    id: "14",
    name: "Clam",
    image: require("../assets/img/clam.jpg"),
    category: "Seafood",
  },
  {
    id: "15",
    name: "Squid",
    image: require("../assets/img/squid.jpg"),
    category: "Seafood",
  },
  {
    id: "16",
    name: "Scallop",
    image: require("../assets/img/scallop.jpg"),
    category: "Seafood",
  },
  {
    id: "17",
    name: "Coke",
    image: require("../assets/img/coke.jpg"),
    category: "Drinks",
  },
  {
    id: "18",
    name: "Pepsi",
    image: require("../assets/img/pepsi.jpg"),
    category: "Drinks",
  },
  {
    id: "19",
    name: "Orange Juice",
    image: require("../assets/img/orangejuice.jpg"),
    category: "Drinks",
  },
  {
    id: "20",
    name: "Lemonade",
    image: require("../assets/img/lemonade.jpg"),
    category: "Drinks",
  },
  {
    id: "21",
    name: "Water",
    image: require("../assets/img/water.jpg"),
    category: "Drinks",
  },
  {
    id: "22",
    name: "Cocktail",
    image: require("../assets/img/sake.jpg"),
    category: "Drinks",
  },
  {
    id: "23",
    name: "Soda",
    image: require("../assets/img/soda.jpg"),
    category: "Drinks",
  },
  {
    id: "24",
    name: "Beer",
    image: require("../assets/img/beer.jpg"),
    category: "Drinks",
  },
];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Vegetable");
  const filteredData =
    selectedCategory === "All"
      ? foodData
      : foodData.filter((item) => item.category === selectedCategory);

  const navigation = useNavigation();

  const Login = () => {
    navigation.navigate("Login");
  };
  const Basket = () => {
    navigation.navigate("Basket");
  };

  const renderFoodItem = ({ item }) => (
    <View style={styles.foodItem}>
      <Image source={item.image} style={styles.foodImage} />
      <Text style={styles.foodName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backIcon}>
          <AntDesign name="arrowleft" size={40} color="black" onPress={Login} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartIcon}>
          <AntDesign
            name="shoppingcart"
            size={40}
            color="black"
            onPress={Basket}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#888"
            fontSize={16}
          />
        </View>
        <View style={styles.categoryContainer}>
          {["Vegetable", "Seafood", "Drinks"].map((category) => (
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
      </View>
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
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, marginTop: 20 }}
      />
      <View style={styles.footer}>
  <TouchableOpacity style={styles.footerItem}>
    <AntDesign name="message1" size={35} />
    <Text style={styles.footerText}>Tin nhắn</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.footerItem}>
    <AntDesign name="bells" size={35} />
    <Text style={styles.footerText}>Thông báo</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.footerItem}>
    <AntDesign name="home" size={35} />
    <Text style={styles.footerText}>Trang chủ</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.footerItem}>
    <AntDesign name="user" size={35} />
    <Text style={styles.footerText}>Tài khoản</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.footerItem}>
    <AntDesign name="setting" size={35} />
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
  categoryContainer: {
    flexDirection: "row",
    marginTop: 30,
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
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    marginBottom: 10,
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
    flex: 1,
    alignItems: "center",
    margin: 8,
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "#ccc",
  },
  foodImage: {
    width: "100%",
    height: 170,
    borderRadius: 8,
    marginBottom: 5,
  },
  foodName: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    height: "10%",
    alignItems: "center", // Căn giữa theo chiều dọc
  },
  footerItem: {
    alignItems: "center", // Căn giữa theo chiều ngang
  },
  footerText: {
    fontSize: 12, // Kích thước chữ phù hợp với icon
    marginTop: 4, // Khoảng cách giữa icon và chữ
  }
  
});
export default Home;
