import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const messagesData = [
  {
    id: "1",
    sender: "Alice",
    content: "Hello! How are you?",
    timestamp: "10:00 AM",
  },
  {
    id: "2",
    sender: "Bob",
    content: "I'm good, thanks! How about you?",
    timestamp: "10:05 AM",
  },
  // Các tin nhắn khác...
];

const Home = () => {
  const [messages, setMessages] = useState(messagesData);
  const [newMessage, setNewMessage] = useState("");
  const navigation = useNavigation();

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: (messages.length + 1).toString(),
        sender: "You",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  const renderMessageItem = ({ item }) => (
    <View style={styles.messageItem}>
      <Text style={styles.messageSender}>{item.sender}</Text>
      <Text style={styles.messageContent}>{item.content}</Text>
      <Text style={styles.messageTimestamp}>{item.timestamp}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Messages</Text>
      </View>

      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, marginTop: 20 }}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <AntDesign name="arrow-up" size="20" color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate("Notification")}>
          <AntDesign name="bells" size={24} color="black" />
          <Text style={styles.footerText} >Thông báo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate("Home")}>
          <AntDesign name="home" size={24} color="black" />
          <Text style={styles.footerText} >Trang chủ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate("Account")}>
          <AntDesign name="user" size={24} color="black" />
          <Text style={styles.footerText}>Tài khoản</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <AntDesign name="setting" size={24} color="black" />
          <Text style={styles.footerText} onPress={() => navigation.navigate("Settings")}>Cài đặt</Text>
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
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  flatListContent: {
    paddingHorizontal: 16,
  },
  messageItem: {
    padding: 10,
    backgroundColor: "#F16100",
    borderRadius: 8,
    marginVertical: 5,
  },
  messageSender: {
    fontWeight: "bold",
  },
  messageContent: {
    marginTop: 5,
  },
  messageTimestamp: {
    marginTop: 5,
    fontSize: 12,
    color: "white",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#008080",
    justifyContent: "center",
    alignItems: "center",
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