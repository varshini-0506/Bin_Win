import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Animated, ScrollView } from "react-native";
import { Home, User, Trophy, Gamepad, Menu, LogOut, PlayCircle, UserPlus } from "lucide-react-native";
import EducationalVideo from "./EducationalVideo"; // Fix the video loading issue

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
      {/* Top Section: Sidebar Menu & Title */}
      <View className="flex-row items-center justify-between px-5 py-3">
        <TouchableOpacity
          onPress={() => setSidebarOpen(!sidebarOpen)}
          className="bg-[#F9F9F9] p-3 rounded-lg shadow"
        >
          <Menu size={28} color="#379237" />
        </TouchableOpacity>

        <Text className="text-4xl font-bold text-[#379237] tracking-wide font-[monospace]">
          BinWin
        </Text>
      </View>

      {/* Welcome Section */}
      <View className="px-5 mt-4">
        <Text className="text-3xl font-extrabold text-[#379237] font-[monospace]">
          Welcome to BinWin!
        </Text>
        <Text className="text-gray-700 text-md leading-relaxed font-medium font-[monospace]">
          BinWin is your interactive learning hub for <Text className="font-bold">smart recycling</Text>! 
          Watch educational videos, test your knowledge with quizzes, and climb the leaderboard 
          to become a <Text className="font-bold">waste warrior</Text>. 🌱♻️
        </Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Educational Video Card */}
        <View className="bg-white mx-5 mt-6 p-4 rounded-2xl shadow-lg">
          <Text className="text-lg font-semibold text-gray-800 mb-2 font-[Fredoka]">
            Educational Video
          </Text>
          <View className="rounded-xl overflow-hidden shadow-md bg-gray-200">
            <EducationalVideo />
          </View>
        </View>

        {/* Start Quiz Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("QuizComponent")}
          className="mt-6 mx-5 bg-green-500 p-4 rounded-full shadow-lg flex-row items-center justify-center"
        >
          <PlayCircle size={26} color="white" className="mr-2" />
          <Text className="text-center text-white text-lg font-semibold font-[Fredoka]">
            Start Quiz
          </Text>
        </TouchableOpacity>
      </ScrollView>

{/* Sidebar with Overlay */}
{sidebarOpen && (
  <View className="absolute left-0 top-0 w-56 h-full bg-[#DFFFD6] shadow-lg p-5 rounded-r-2xl border-r-4 border-[#379237]">
    <TouchableOpacity onPress={() => setSidebarOpen(false)} className="mb-5 flex-row items-center">
      <Text className="text-lg font-bold text-[#379237] font-[monospace]">✖ Close</Text>
    </TouchableOpacity>

    <TouchableOpacity className="flex-row items-center space-x-3 mb-6 p-3" onPress={() => navigation.navigate("Home")}>
      <Home size={26} color="#379237" />
      <Text className="text-lg text-[#379237] font-semibold font-[monospace]">Home</Text>
    </TouchableOpacity>

    <TouchableOpacity className="flex-row items-center space-x-3 p-3 mt-4" onPress={() => navigation.navigate("Leaderboard")}>
      <Trophy size={26} color="#379237" />
      <Text className="text-lg text-[#379237] font-semibold font-[monospace]">Leaderboard</Text>
    </TouchableOpacity>

    <TouchableOpacity className="flex-row items-center space-x-3 p-3 mt-4" onPress={() => navigation.navigate("Gamified")}>
      <Gamepad size={26} color="#379237" />
      <Text className="text-lg text-[#379237] font-semibold font-[monospace]">Game</Text>
    </TouchableOpacity>

    <TouchableOpacity className="flex-row items-center space-x-3 p-3 mt-4" onPress={() => navigation.navigate("CreateProfile")}>
      <UserPlus size={26} color="#379237" />
      <Text className="text-lg text-[#379237] font-semibold font-[monospace]">Create Profile</Text>
    </TouchableOpacity>

    <TouchableOpacity className="flex-row items-center space-x-3 p-3 mt-4" onPress={() => console.log("Logging out")}>
      <LogOut size={26} color="red" />
      <Text className="text-lg text-red-600 font-semibold font-[monospace]">Logout</Text>
    </TouchableOpacity>
  </View>
)}
      {/* Chatbot Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Chatbot")}
        className="absolute bottom-20 right-4 flex-row items-center"
      >
        {/* Speech Bubble */}
        <View className="bg-white px-4 py-2 rounded-full shadow-md mr-2 border border-gray-300 relative">
          <Animated.Text
            style={{ opacity: textAnimation }}
            className="text-sm text-gray-700 font-semibold font-[Fredoka]"
          >
            Talk with Binnie
          </Animated.Text>
          {/* Arrow */}
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
        <TouchableOpacity className="items-center" onPress={() => navigation.navigate("DisplayProfile")}>
          <User size={26} color="gray" />
          <Text className="text-gray-700 text-xs font-[Fredoka]">Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center" onPress={() => navigation.navigate("Home")}>
          <Home size={26} color="#58CC02" />
          <Text className="text-[#58CC02] text-xs font-[Fredoka]">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center" onPress={() => navigation.navigate("Leaderboard")}>
          <Trophy size={26} color="#F4A900" />
          <Text className="text-gray-700 text-xs font-[Fredoka]">Leaderboard</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center" onPress={() => navigation.navigate("Gamified")}>
          <Gamepad size={26} color="#379237" />
          <Text className="text-gray-700 text-xs font-[Fredoka]">Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
