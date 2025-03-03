import { Text, View, Image, TouchableOpacity } from "react-native";

export default function HomePage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F0F8FF",
        padding: 20,
      }}
    >
      {/* Avatar Section */}
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/147/147144.png" }}
        style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 20 }}
      />

      {/* Quiz Progress */}
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Your Waste Management Quiz
      </Text>
      <Text style={{ fontSize: 16, color: "gray", marginBottom: 20 }}>
        3 lessons completed • Keep up the good work! 🌱
      </Text>

      {/* Start Quiz Button */}
      <TouchableOpacity
        style={{
          backgroundColor: "#4CAF50",
          padding: 15,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          Start Quiz
        </Text>
      </TouchableOpacity>
    </View>
  );
}
