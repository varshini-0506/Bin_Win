import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./Homepage/SplshScreen";
import HomeScreen from "./Homepage/Homepage";
import Chatbot from "./Chatbot/Chatbot";
import Login from "../Login";
import SignUp from "../SignUp";
import Profileset from "./Profile/ProfileSet";
import DisplayProfile from "./Profile/DisplayProfile";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chatbot" component={Chatbot} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ProfileSet" component={Profileset} />
        <Stack.Screen name="DisplayProfile" component={DisplayProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
