import {useContext}  from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserPage from "./src/pages/UserPage"
import PostPage from "./src/pages/PostPage"
import { CartProvider,cartContext } from "./src/context/Context"



const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Users') {
                iconName = focused
                  ? 'people-circle-outline'
                  : 'people-circle';
              } else if (route.name === 'Post') {
                iconName = focused ? 'ios-list' : 'ios-list';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Users" component={UserPage} />
          <Tab.Screen name="Post" component={PostPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}