import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import CreateScreen from "./screens/CreateScreen";
import AboutScreen from "./screens/AboutScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  // const navigation = useNavigation();

  // const handleNavigateToSignIn = () => {
  //   navigation.replace("Login")
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Create"
          component={CreateScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignUp"
          component={SignUpScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="About"
          component={AboutScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8EE4FF",
    alignItems: "center",
    justifyContent: "center",
  },
  helpText: {
    paddingVertical: 20,
  },
  btn: {},
  inputContainer: {
    width: 200,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
  },
  heroText: {
    fontSize: 28,
    marginBottom: 50,
  },
});
