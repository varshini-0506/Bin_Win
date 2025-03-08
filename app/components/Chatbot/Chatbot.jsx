import React, { useState, useRef, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, KeyboardAvoidingView, Platform } from "react-native";
import { getGeminiResponse } from "./chat2"; // Import the function
import * as Speech from "expo-speech"; // Import Expo Speech for Text-to-Speech
import { Home, User, Trophy, Gamepad, Menu, LogOut } from "lucide-react-native";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const flatListRef = useRef();

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");

    try {
      const aiResponse = await getGeminiResponse(input); // Get response from Chat2.jsx
      setMessages([...newMessages, { role: "assistant", content: aiResponse }]);
      Speech.speak(aiResponse, { language: "en" }); // Speak the response
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 relative"
    >
      <View className="flex-1 p-4 bg-[#F9F9F9]">
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View className={`flex-row items-end my-2 ${item.role === "user" ? "self-end" : "self-start"}`}>
              {item.role === "assistant" && (
                <Image source={{ uri: "https://ik.imagekit.io/varsh0506/binwin_mascot-removebg-preview.png?updatedAt=1740992271926" }} className="mr-2 w-8 h-8 rounded-full" />
              )}
              <View className={`p-3 rounded-lg max-w-[80%] ${item.role === "user" ? "bg-[#58CC02]" : "bg-[#379237]"}`}>
                <Text className="flex-wrap text-white">{item.content}</Text>
              </View>
              {item.role === "user" && (
                <Image source={{ uri: "https://ik.imagekit.io/mino2112/green%20image.jpg?updatedAt=1741093414994" }} className="ml-2 w-8 h-8 rounded-full" />
              )}
            </View>
          )}
          contentContainerStyle={{ flexGrow: 1 }}
          onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
        />

        <View className="flex-row items-center p-2 border-t border-gray-300 bg-[#DFFFD6] rounded-lg mt-2 mb-14">
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Type a message..."
            className="flex-1 p-3 bg-white rounded-lg border border-gray-400"
            onSubmitEditing={sendMessage} // Send message when Enter key is pressed
            returnKeyType="send"
          />
          <TouchableOpacity onPress={sendMessage} className="p-3 ml-2 bg-[#F4A900] rounded-lg">
            <Text className="font-bold text-white">Send</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="absolute bottom-0 left-0 right-0 bg-[#F9F9F9] py-3 shadow-md flex-row justify-around">
        <TouchableOpacity className="items-center" onPress={() => navigation.navigate("Home")}>
          <User size={26} color="gray" />
          <Text className="text-gray-700 text-xs">Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center" onPress={() => navigation.navigate("Home")}>
          <Home size={26} color="#58CC02" />
          <Text className="text-gray-700 text-xs">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center" onPress={() => navigation.navigate("Home")}>
          <Trophy size={26} color="#F4A900" />
          <Text className="text-gray-700 text-xs">Leaderboard</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center" onPress={() => navigation.navigate("Gamified")}
        >
          <Gamepad size={26} color="#379237" />
          <Text className="text-gray-700 text-xs">Game</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}