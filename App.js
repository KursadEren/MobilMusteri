import { View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/Screen/LoginScreen";
import HomeScreen from "./src/Screen/HomeScreen"
import AdminLoginScreen from "./src/Screen/AdminLoginScreen";
import { PaperProvider } from 'react-native-paper';
import  { MyContextProvider } from './src/Context/Context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconButton } from 'react-native-paper';
import Tasks from "./src/Screen/Tasks";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerTintColor:"#FFE6C7",
    headerStyle:{backgroundColor:"#454545",color:"#FFE6C7"}
  , headerShadowVisible: false,}}
    
    >
      <Stack.Screen 
       options={{ title: 'Login Screen' , }} // Sayfa başlığı
       name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="AdminLoginScreen" component={AdminLoginScreen} />
      
      <Stack.Screen name="MyTabs" component={MyTabs} />
     
    </Stack.Navigator>
    </NavigationContainer>
  );
}





function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { position: 'absolute' },
        tabBarActiveBackgroundColor:"#454545"
,        tabBarLabelStyle: {
          fontSize: 14, // Yazı boyutunu burada ayarlayın
        },
        headerShown:false,
        tabBarIcon: ({ color, size }) => {
          
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home'; // İkon adını değiştirin
          } else if (route.name === 'AdminLoginScreen') {
            iconName = 'account-circle'; // İkon adını değiştirin
          }
          else if (route.name==="Tasks")iconName = 'format-list-bulleted'

          // İkonları döndürün
          return <IconButton icon={iconName} iconColor={color}size={size} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#FFE6C7',
        inactiveTintColor: '#454545',
      }}
    >
      
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tasks" component={Tasks} />
      
    </Tab.Navigator>
  );
    }


export default function App() {
 
  
  return (
    <MyContextProvider >
       <PaperProvider>
          <MyStack/>
          </PaperProvider>
    </MyContextProvider>
    
  );
}