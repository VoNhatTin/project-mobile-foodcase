import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const Basket = () => {
  const navigation = useNavigation();

  const scr02 = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={scr02} style={styles.backButton}>
          <AntDesign name="arrowleft" size={40} color={"black"} />
        </TouchableOpacity>
        <Text style={styles.headerText}>My Baskettttt</Text>
      </View>
      <View style={styles.body}>
        {/* Đây là nơi bạn sẽ đặt FlatList */}
      </View>
      <View style={styles.footer}>
        {/* Đây là nơi bạn sẽ hiển thị tổng của FlatList */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row", // Sắp xếp các thành phần theo chiều ngang
    alignItems: "center", // Căn giữa theo chiều dọc
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 10,
  },
  backButton: {
    marginRight: 10, // Khoảng cách giữa mũi tên và "My Basket"
  },
  headerText: {
    fontSize: 30,
    color: "grey",
    fontWeight: "bold",
  },
  body: {
    flex: 8,
    // Bạn có thể thêm FlatList ở đây
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // Bạn có thể thêm thành phần để hiển thị tổng của FlatList ở đây
  },
});

export default Basket;
