import { createStackNavigator } from '@react-navigation/stack';
import UserPage from "./UserPage"
import UserDetail from "./UserDetail"

const Stack = createStackNavigator();

const ScreenNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="User List"
            component={UserPage}
            >
            </Stack.Screen>
            <Stack.Screen
            name="User Detail"
            component={UserDetail}
            >
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export {ScreenNavigator}