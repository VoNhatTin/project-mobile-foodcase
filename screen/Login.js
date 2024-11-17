import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import * as Animatable from 'react-native-animatable';

const Login = () => {
  const account = [
    { username: "NhatTin", password: "123" },
    { username: "XuanKy", password: "123" },
  ];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [animation, setAnimation] = useState(null);

  const navigation = useNavigation();

  const handleLogin = () => {
    setAnimation('bounceOut');
    setTimeout(() => {
      console.log("Username:", username);
      console.log("Password:", password);
      const user = account.find(
        (e) => e.username === username && e.password === password
      );
      if (user) {
        navigation.navigate("Home");
      } else {
        alert("Tài khoản hoặc mật khẩu không chính xác");
        setAnimation(null);
      }
    }, 1000); // Thời gian hiệu ứng
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Reset animation state when screen is focused
      setAnimation(null);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Animatable.View animation="fadeIn" duration={1500} style={styles.container}>
      <Animatable.Image 
        animation="zoomIn" 
        duration={1500} 
        source={require('../assets/img/logo.jpg')} 
        style={styles.logo} 
      />
      <Animatable.Text animation="slideInDown" duration={1500} style={styles.title}>
        LOGIN
      </Animatable.Text>
      <Animatable.View animation="fadeInUp" duration={1500} style={styles.inputContainer}>
        <AntDesign name="user" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </Animatable.View>
      <Animatable.View animation="fadeInUp" duration={1500} style={styles.inputContainer}>
        <AntDesign name="lock" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <AntDesign name={showPassword ? "eye" : "eyeo"} size={24} color="black" />
        </TouchableOpacity>
      </Animatable.View>
      <Animatable.View animation={animation} duration={1000}>
        <TouchableOpacity style={styles.getStartedButton} onPress={handleLogin}>
          <Text style={styles.getStartedButtonText}>Get started</Text>
        </TouchableOpacity>
      </Animatable.View>
      <TouchableOpacity style={styles.forgotPassword}>
        <Text>Forgot your password?</Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F16100",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 500,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    height: "7%",
    width: "80%",
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  forgotPassword: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  getStartedButton: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 30,
    height: 60,
    width: "90%", // Điều chỉnh chiều rộng
    marginHorizontal: "5%", // Tạo khoảng cách đều hai bên
    backgroundColor: "#a09b98",
    alignItems: "center",
    justifyContent: "center",
  },
  getStartedButtonText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
});

export default Login;
