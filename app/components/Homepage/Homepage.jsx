import { Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomePage() {
  const navigation = useNavigation(); // Get navigation object

  return (
    <View className="items-center justify-center flex-1 p-5 bg-blue-50">
      {/* Avatar Section */}
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/147/147144.png" }}
        className="w-24 h-24 mb-5 rounded-full"
      />
      {/* Login Button */}
      <TouchableOpacity 
        className="bg-[#58CC02] py-4 px-10 rounded-full shadow-md mb-4"
        onPress={() => navigation.navigate("Login")}
      >
        <Text className="text-white text-lg font-bold">Login</Text>
      </TouchableOpacity>

      {/* Sign Up Button */}
      <TouchableOpacity 
        className="bg-[#F4A900] py-4 px-10 rounded-full shadow-md"
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text className="text-white text-lg font-bold">Sign Up</Text>
      </TouchableOpacity>

      {/* Navigate to Profile Setup */}
      <TouchableOpacity className="bg-[#58CC02] py-4 px-8 rounded-full mb-4 shadow-md"
        onPress={() => navigation.navigate("ProfileSet")}>
        <Text className="text-white text-lg font-bold">Setup Profile</Text>
      </TouchableOpacity>

      {/* Navigate to Display Profile */}
      <TouchableOpacity className="bg-[#379237] py-4 px-8 rounded-full shadow-md"
        onPress={() => navigation.navigate("DisplayProfile")}>
        <Text className="text-white text-lg font-bold">View Profile</Text>
      </TouchableOpacity>
      
      {/* Title */}
      <Text className="mb-2 text-xl font-bold">Your Waste Management Quiz</Text>
      <Text className="mb-5 text-gray-500">3 lessons completed • Keep up the good work! 🌱</Text>

      {/* Button to Navigate to Chatbot */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Chatbot")} // Navigate to Chatbot screen
        className="px-6 py-3 bg-green-500 rounded-lg"
      >
        <Text className="text-lg font-bold text-white">Go to Chatbot</Text>
      </TouchableOpacity>
    </View>
  );
}
