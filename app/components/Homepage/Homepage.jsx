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
