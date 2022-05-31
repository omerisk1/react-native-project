import { createStackNavigator } from "@react-navigation/stack";
import UserPage from "../pages/UserPage";
import UserDetail from "../pages/UserDetail";
import PostPage from "../pages/PostPage";
import PostDetail from "../pages/PostDetail";

const Stack = createStackNavigator();

const ScreenNavigatorPost = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Post List" component={PostPage}></Stack.Screen>
      <Stack.Screen name="Post Detail" component={PostDetail}></Stack.Screen>
    </Stack.Navigator>
  );
};

export { ScreenNavigatorPost };
