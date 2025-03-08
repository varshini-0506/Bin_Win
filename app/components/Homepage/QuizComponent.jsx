import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, Image, Animated } from "react-native";
import axios from "axios";
import { Home, User, Trophy, Gamepad, ArrowLeft } from "lucide-react-native";

const GEMINI_API_KEY = "AIzaSyBIhcR9zftIUImxYcgVGx6ZJWLlZABnfF8"; // Replace with actual API key

export default function QuizComponent({ navigation }) {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const fadeAnim = useState(new Animated.Value(0))[0]; // Animation for questions

  useEffect(() => {
    fetchQuizQuestions();
  }, []);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [index]);

  const fetchQuizQuestions = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent",
        {
          contents: [{ parts: [{ text: "Generate 5 multiple-choice quiz questions on waste segregation and recycling in JSON format. Each question should have a 'question', 'options' (array), and 'answer' (string)." }] }],
        },
        { params: { key: GEMINI_API_KEY } }
      );

      console.log("Raw API Response:", JSON.stringify(response.data, null, 2));

      const aiResponse = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!aiResponse) throw new Error("No response from AI");

      try {
        const jsonString = aiResponse.replace("```json", "").replace("```", "").trim();
        const parsedQuestions = JSON.parse(jsonString);
        if (!Array.isArray(parsedQuestions)) throw new Error("Invalid question format");

        setQuestions(parsedQuestions);
        setIndex(0);
        setScore(0);
        setQuizCompleted(false);
      } catch (jsonError) {
        console.error("Error parsing JSON:", jsonError, "Raw Response:", aiResponse);
        throw new Error("Failed to parse AI response JSON");
      }
    } catch (error) {
      console.error("Error fetching quiz questions:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = (option) => {
    if (selected !== null) return;
    setSelected(option);

    if (option === questions[index].answer) {
      setScore((prevScore) => prevScore + 1);
    }

    setTimeout(() => {
      if (index + 1 < questions.length) {
        setIndex(index + 1);
        setSelected(null);
      } else {
        setQuizCompleted(true);
      }
    }, 1000);
  };

  return (
    <View className="flex-1 bg-[#DFFFD6] px-5">
      {/* 🟢 Top Navigation Bar */}
      <View className="flex-row items-center justify-between px-5 py-3">
        <TouchableOpacity onPress={() => navigation.navigate("Home")} className="p-2">
          <ArrowLeft size={28} color="#379237" />
        </TouchableOpacity>
        <View className="flex-row items-center space-x-2">
          <Text className="text-3xl font-extrabold font-mono text-[#379237]">BinWin</Text>
          <Image source={{ uri: "https://ik.imagekit.io/varsh0506/binwin_mascot-removebg-preview.png" }} className="w-10 h-10" />
        </View>
      </View>

      {/* 🟢 Quiz Content */}
      <View className="flex-1 justify-center items-center">
        {loading ? (
          <ActivityIndicator size="large" color="#379237" />
        ) : quizCompleted ? (
          <View className="items-center">
            <Text className="text-3xl font-extrabold text-green-700 font-mono">
              {score >= 4 ? "🎉 Congratulations! 🎉" : "Quiz Completed!"}
            </Text>
            <Text className="text-lg mt-2 font-mono">Your Score: {score} / {questions.length}</Text>
            <TouchableOpacity className="mt-6 py-3 px-6 bg-green-500 rounded-lg shadow-lg" onPress={fetchQuizQuestions}>
              <Text className="text-white text-lg font-mono">Retry</Text>
            </TouchableOpacity>
            <TouchableOpacity className="mt-3 py-3 px-6 bg-gray-400 rounded-lg shadow-lg" onPress={() => navigation.navigate("Home")}> 
              <Text className="text-white text-lg font-mono">Back to Home</Text>
            </TouchableOpacity>
          </View>
        ) : (
          questions.length > 0 && questions[index] ? (
            <Animated.View style={{ opacity: fadeAnim }} className="w-full p-5 bg-white rounded-xl shadow-lg">
              <Text className="text-xl font-extrabold text-[#379237] text-center font-mono">{questions[index].question}</Text>
              {questions[index].options.map((option, i) => (
                <TouchableOpacity
                  key={i}
                  className={`py-3 px-4 my-3 rounded-lg shadow-md text-center transition-all duration-500 ${
                    selected === option
                      ? option === questions[index].answer
                        ? "bg-green-500 scale-105"
                        : "bg-red-500 scale-95"
                      : "bg-gray-100"
                  }`}
                  onPress={() => handleAnswer(option)}
                >
                  <Text className={`text-lg font-mono font-semibold text-center ${
                    selected === option ? "text-white" : "text-gray-800"
                  }`}>
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </Animated.View>
          ) : (
            <Text className="text-lg text-red-500 font-mono">No questions available.</Text>
          )
        )}
      </View>

      {/* 🟢 Bottom Navigation Bar */}
      <View className="absolute bottom-0 left-0 right-0 bg-white py-4 shadow-lg flex-row justify-around">
        <TouchableOpacity className="items-center" onPress={() => navigation.navigate("DisplayProfile")}> 
          <User size={26} color="gray" />
          <Text className="text-gray-700 text-xs font-mono">Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center" onPress={() => navigation.navigate("Home")}> 
          <Home size={26} color="#58CC02" />
          <Text className="text-[#58CC02] text-xs font-mono">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center" onPress={() => navigation.navigate("Leaderboard")}> 
          <Trophy size={26} color="#F4A900" />
          <Text className="text-gray-700 text-xs font-mono">Leaderboard</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center" onPress={() => navigation.navigate("Gamified")}> 
          <Gamepad size={26} color="#379237" />
          <Text className="text-gray-700 text-xs font-mono">Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
