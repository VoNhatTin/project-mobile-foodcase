import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import Login from "./Login";
import Home from "./Home";
import Basket from "./Basket";
import Notification from './Notification';
import Message from "./Message";
import Account from "./Account";


const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Basket" component={Basket} options={{headerShown:false}}/>
        <Stack.Screen name="Message" component={Message} options={{headerShown:false}}/>
        <Stack.Screen name="Account" component={Account} options={{headerShown:false}}/>
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
