import { View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/Screen/LoginScreen";
import AdminLoginScreen from "./src/Screen/AdminLoginScreen";
const Stack = createNativeStackNavigator();


function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
    headerStyle:{backgroundColor:"white"}
  , headerShadowVisible: false,}}
    >
      <Stack.Screen 
       options={{ title: 'Login Screen' , }} // Sayfa başlığı
       name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="AdminLoginScreen" component={AdminLoginScreen} />
     
    </Stack.Navigator>
    </NavigationContainer>
  );
}


export default function App() {
  return (
    <MyStack/>
  );
}

