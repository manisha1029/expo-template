import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUpScreen from "../screens/auth/SignUpScreen";
import HomeScreen from "../screens/main/HomeScreen";

// Create the Stack
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Sign Up"
        screenOptions={{
          headerShown: false,
          // contentStyle: { backgroundColor: '#F5F5F5' }
         }}
      >
        {/* Screens go here */}
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;