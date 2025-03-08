import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./Homepage/SplashScreen";
import HomeScreen from "./Homepage/Homepage";
import DisplayProfile from "./Profile/DisplayProfile";
import Chatbot from "./Chatbot/Chatbot";
import Gamified from "./Gamified/Gamified";
import QuizComponent from "./Homepage/QuizComponent";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DisplayProfile" component={DisplayProfile} />
        <Stack.Screen name="Chatbot" component={Chatbot} />
        <Stack.Screen name="Gamified" component={Gamified} />
        <Stack.Screen name="QuizComponent" component={QuizComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
