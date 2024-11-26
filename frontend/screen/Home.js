import React, { useState, useEffect } from "react";
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
  Button,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import axios from "axios";
import Carousel from "../components/Carousel";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const Home = () => {
  const [foodData, setFoodData] = useState([]); // Dữ liệu món ăn
  const [selectedCategory, setSelectedCategory] = useState("Vegetable");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await axios.get("http://192.168.2.166:5000/api/foods");
        console.log("Dữ liệu fetch thành công:", response.data);
        setFoodData(response.data); // Cập nhật dữ liệu món ăn
        setLoading(false); // Đặt loading thành false khi dữ liệu đã tải xong
      } catch (error) {
        if (error.response) {
          console.error("Error Response:", error.response.status, error.response.data);
        } else if (error.request) {
          console.error("Error Request:", error.request);
        } else {
          console.error("Error Message:", error.message);
        }
        setLoading(false); // Đặt loading thành false ngay cả khi lỗi
      }
    };

    fetchFoodData();
  }, []);

  const filteredData =
  selectedCategory === "All"
    ? foodData
    : foodData.filter((item) => item.categoryId.name === selectedCategory);

  const renderFoodItem = ({ item }) => (
    <TouchableOpacity
      style={styles.foodItem}
      onPress={() => {
        setSelectedItem(item);
        setModalVisible(true);
      }}
    >
      <Image source={{ uri: item.image }} style={styles.foodImage} />
      <Text style={styles.foodName}>{item.name}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backIcon}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartIcon}>
          <AntDesign name="shoppingcart" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Carousel />
      <View style={styles.categoryContainer}>
        {["Vegetable", "Fast Food", "Drinks", "Combo", "All"].map((category) => (
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
      <FlatList
        data={filteredData}
        renderItem={renderFoodItem}
        keyExtractor={(item) => item._id}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
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
                <Image
                  source={{ uri: selectedItem.image }}
                  style={styles.modalImage}
                />
                <Text style={styles.modalName}>{selectedItem.name}</Text>
                <Text style={styles.modalCategory}>
                  Category: {selectedItem.category}
                </Text>
                <Text>Price: ${selectedItem.price}</Text>
                <Button title="Add to Basket" onPress={() => {}} />
              </>
            )}
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Các styles như trước
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
      flexWrap: "wrap",  // Thêm flexWrap để đảm bảo các nút không bị tràn ra ngoài
    },
    categoryButton: {
      borderWidth: 1,
      borderColor: "#008080",
      borderRadius: 15,
      height: 30,
      width: 80,
      backgroundColor: "#008080",
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 5,
      marginVertical: 5, // Thêm margin để các nút không bị sát nhau
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
