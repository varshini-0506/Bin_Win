import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import axios from "react-native-axios";

const OPENAI_API_KEY = "your-api-key-here"; // 🔴 Replace with your actual API key

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! Ask me anything about waste management. 🌱", sender: "bot" },
  ]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to handle sending messages
  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = { id: messages.length + 1, text: inputText, sender: "user" };
    setMessages([...messages, userMessage]);
    setInputText(""); // Clear input field
    setLoading(true);

    try {
      // Call OpenAI API
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: inputText }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
        }
      );

      // Extract AI response
      const botResponse = response.data.choices[0].message.content;

      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1, text: botResponse, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1, text: "Sorry, something went wrong. 😞", sender: "bot" },
      ]);
    }

    setLoading(false);
  };

  return (
    <View className="flex-1 p-4 bg-gray-100">
      {/* Chat Messages */}
      <ScrollView className="flex-1 mb-4">
        {messages.map((msg) => (
          <View
            key={msg.id}
            className={`p-3 my-1 max-w-[80%] rounded-lg ${
              msg.sender === "user" ? "bg-blue-500 self-end" : "bg-gray-300 self-start"
            }`}
          >
            <Text className={`${msg.sender === "user" ? "text-white" : "text-black"} text-lg`}>
              {msg.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Input Field */}
      <View className="flex-row items-center p-2 bg-white rounded-lg shadow-md">
        <TextInput
          value={inputText}
          onChangeText={setInputText}
          placeholder="Ask me a question..."
          className="flex-1 p-2 text-lg border-b border-gray-300"
        />
        <TouchableOpacity onPress={sendMessage} className="p-3 ml-2 bg-green-500 rounded-lg">
          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <Text className="font-bold text-white">Send</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
