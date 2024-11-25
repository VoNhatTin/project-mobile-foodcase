import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const Account = () => {
  const [accountInfo, setAccountInfo] = useState({
    name: "Võ Nhật Tín",
    dateOfBirth: "17/05/2003",
    email: "0tinking0@gmail.com",
    phone: "0918451834",
    sex: "Nam",
    language: "Tiếng Việt",
    address: "B124 Bạch Đằng, phường 2, Quận Tân Bình, TP.Hồ Chí Minh",
  });
  const [isEditing, setIsEditing] = useState(false);
  const navigation = useNavigation();

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
    // Lưu thay đổi vào cơ sở dữ liệu hoặc state quản lý
  };

  const handleLogout = () => {
    // Xử lý đăng xuất
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={accountInfo.name}
            onChangeText={(text) =>
              setAccountInfo({ ...accountInfo, name: text })
            }
          />
        ) : (
          <Text style={styles.value}>{accountInfo.name}</Text>
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Date of birth:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={accountInfo.dateOfBirth}
            onChangeText={(text) =>
              setAccountInfo({ ...accountInfo, dateOfBirth: text })
            }
          />
        ) : (
          <Text style={styles.value}>{accountInfo.dateOfBirth}</Text>
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Sex:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={accountInfo.sex}
            onChangeText={(text) =>
              setAccountInfo({ ...accountInfo, sex: text })
            }
          />
        ) : (
          <Text style={styles.value}>{accountInfo.sex}</Text>
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={accountInfo.email}
            onChangeText={(text) =>
              setAccountInfo({ ...accountInfo, email: text })
            }
          />
        ) : (
          <Text style={styles.value}>{accountInfo.email}</Text>
        )}
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Phone:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={accountInfo.phone}
            onChangeText={(text) =>
              setAccountInfo({ ...accountInfo, phone: text })
            }
          />
        ) : (
          <Text style={styles.value}>{accountInfo.phone}</Text>
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Address:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={accountInfo.address}
            onChangeText={(text) =>
              setAccountInfo({ ...accountInfo, address: text })
            }
          />
        ) : (
          <Text style={styles.value}>{accountInfo.address}</Text>
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Language:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={accountInfo.language}
            onChangeText={(text) =>
              setAccountInfo({ ...accountInfo, language: text })
            }
          />
        ) : (
          <Text style={styles.value}>{accountInfo.language}</Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={isEditing ? handleSaveChanges : handleEditToggle}
      >
        <Text style={styles.buttonText}>
          {isEditing ? "Save Changes" : "Edit"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate("Message")}
        >
          <AntDesign name="message1" size={24} color="black" />
          <Text style={styles.footerText}>Tin nhắn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate("Notification")}
        >
          <AntDesign name="bells" size={24} color="black" />
          <Text style={styles.footerText}>Thông báo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate("Home")}
        >
          <AntDesign name="home" size={24} color="black" />
          <Text style={styles.footerText}>Trang chủ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <AntDesign name="setting" size={24} color="black" />
          <Text
            style={styles.footerText}
            onPress={() => navigation.navigate("Settings")}
          >
            Cài đặt
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  header: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  infoContainer: {
    flex: 1,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  value: {
    fontSize: 16,
    marginTop: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: "#008080",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: "#ff4d4d",
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    height: "10%",
    alignItems: "flex-end",
  },
  footerItem: {
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default Account;
