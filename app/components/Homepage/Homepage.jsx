import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Animated } from "react-native";
import { Home, User, Trophy, Gamepad, Menu, LogOut } from "lucide-react-native";

export default function HomePage({ navigation }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const textAnimation = new Animated.Value(0);
  const bounceAnimation = new Animated.Value(0);

  // Animate chatbot text inside a speech bubble
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(textAnimation, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(textAnimation, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  // Bouncing animation for the chatbot avatar
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnimation, {
          toValue: -10,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnimation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View className="flex-1 bg-[#DFFFD6] relative">
      {/* App Title */}
      <View className="absolute top-4 left-1/2 -translate-x-1/2">
        <Text className="text-3xl font-bold text-[#379237]">BinWin</Text>
      </View>

      {/* Sidebar with Overlay */}
      <TouchableOpacity onPress={() => setSidebarOpen(!sidebarOpen)} className="absolute top-4 left-4 bg-[#F9F9F9] p-3 rounded-lg shadow">
        <Menu size={28} color="#379237" />
      </TouchableOpacity>
      
      {sidebarOpen && (
        <View className="absolute left-0 top-0 w-52 h-full bg-[#F9F9F9] shadow-md p-4 rounded-r-2xl">
          <TouchableOpacity onPress={() => setSidebarOpen(false)} className="mb-4">
            <Text className="text-lg font-bold text-[#379237]">✖ Close</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row items-center space-x-3 mb-6"
            onPress={() => navigation.navigate("Home")}
          >
            <Home size={26} color="#58CC02" />
            <Text className="text-xl text-[#379237] font-semibold">Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row items-center space-x-3"
            onPress={() => console.log("Logging out")}
          >
            <LogOut size={26} color="red" />
            <Text className="text-xl text-red-600 font-semibold">Logout</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Center Content */}
      <View className="flex-1 items-center justify-center px-6">
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
          }}
          className="w-24 h-24 rounded-full mb-4 border-4 border-[#58CC02]"
        />
        <Text className="text-2xl font-bold text-[#58CC02]">Your Waste Management Quiz</Text>
        <Text className="text-lg text-gray-600 mb-6">
          3 lessons completed • Keep up the good work! 🌱
        </Text>
        <TouchableOpacity className="bg-[#58CC02] px-6 py-3 rounded-lg shadow">
          <Text className="text-white text-lg font-bold">Start Quiz</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
  onPress={() => navigation.navigate("Chatbot")}
  className="absolute bottom-20 right-4 flex-row items-center"
>
  {/* Speech Bubble - Positioned to the Left */}
  <View className="bg-white px-4 py-2 rounded-full shadow-md mr-2 border border-gray-300 relative">
    <Animated.Text
      style={{ opacity: textAnimation }}
      className="text-sm text-gray-700 font-semibold"
    >
      Talk with Binnie
    </Animated.Text>
    {/* Arrow pointing to the right */}
    <View className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 w-6 h-6 bg-white rotate-45 border-t border-r border-gray-300"></View>
  </View>

  {/* Mascot Image */}
  <Animated.View style={{ transform: [{ translateY: bounceAnimation }] }}>
    <Image
      source={{
        uri: "https://ik.imagekit.io/varsh0506/binwin_mascot-removebg-preview.png",
      }}
      className="w-14 h-14 rounded-full border-2 border-[#58CC02]"
    />
  </Animated.View>
</TouchableOpacity>

      {/* Bottom Navigation Bar */}
      <View className="absolute bottom-0 left-0 right-0 bg-[#F9F9F9] py-3 shadow-md flex-row justify-around">
        <TouchableOpacity className="items-center">
          <User size={26} color="gray" />
          <Text className="text-gray-700 text-xs">Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Home size={26} color="#58CC02" />
          <Text className="text-[#58CC02] text-xs">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Trophy size={26} color="#F4A900" />
          <Text className="text-gray-700 text-xs">Leaderboard</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Gamepad size={26} color="#379237" />
          <Text className="text-gray-700 text-xs">Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}