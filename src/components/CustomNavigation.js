import { createStackNavigator } from "@react-navigation/stack";
import UserPage from "../pages/UserPage";
import UserDetail from "../pages/UserDetail";
import PostPage from "../pages/PostPage";
import PostDetail from "../pages/PostDetail";

const Stack = createStackNavigator();

const ScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="User List" component={UserPage}></Stack.Screen>
      <Stack.Screen name="User Detail" component={UserDetail}></Stack.Screen>
      <Stack.Screen name="Post List" component={PostPage}></Stack.Screen>
      <Stack.Screen name="Post Detail" component={PostDetail}></Stack.Screen>
    </Stack.Navigator>
  );
};

export { ScreenNavigator };
