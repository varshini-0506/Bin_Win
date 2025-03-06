/*import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BarChart } from "react-native-chart-kit";

const DisplayProfile = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { name, age, location, bio, image, usageData } = route.params || {};

  return (
    <View className="flex-1 bg-white p-6">
      {/* Profile Header }
      <View className="items-center mb-6">
        <Image
          source={{
            uri: image
              ? image
              : "https://www.w3schools.com/w3images/avatar2.png", // Default avatar
          }}
          className="w-32 h-32 rounded-full border-4 border-[#379237]"
        />
        <Text className="text-2xl font-bold text-[#379237] mt-4">{name || "Not Set"}</Text>
        <Text className="text-gray-500 text-md">@{name?.toLowerCase().replace(/\s+/g, '') || "username"}</Text>
      </View>

      {/* Profile Details }
      <View className="bg-[#f0fdf4] p-4 rounded-lg mb-4 shadow">
        <Text className="text-lg text-[#379237] mb-2">🎂 Age: {age || "Not Set"}</Text>
        <Text className="text-lg text-[#379237] mb-2">📍 Location: {location || "Not Set"}</Text>
        <Text className="text-lg text-[#379237] mb-2">📜 Bio: {bio || "Not Set"}</Text>
      </View>

      {/* Usage Statistics }
      <Text className="text-lg font-bold text-[#379237] mb-3">📊 App Usage (Past Week)</Text>
      <BarChart
        data={{
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [{ data: usageData || [1, 2, 1, 3, 4, 2, 5] }],
        }}
        width={Dimensions.get("window").width - 40}
        height={220}
        yAxisLabel=""
        chartConfig={{
          backgroundGradientFrom: "#f0fdf4",
          backgroundGradientTo: "#f0fdf4",
          color: (opacity = 1) => `rgba(55, 146, 55, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(55, 146, 55, ${opacity})`,
        }}
        style={{ borderRadius: 10 }}
      />

      {/* Go Home Button }
      <TouchableOpacity
        className="mt-6 py-3 px-8 bg-gradient-to-r from-[#58CC02] to-[#379237] rounded-lg shadow-lg"
        onPress={() => navigation.navigate("Home")}
      >
        <Text className="text-white text-lg font-bold text-center">🏠 Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DisplayProfile;*/

import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BarChart } from "react-native-chart-kit";

const getTreeImage = (visits) => {
  if (visits >= 20) {
    return " https://ik.imagekit.io/varsh0506/Bin%20Win/forest.png?updatedAt=1741154677318 "; // Fully grown tree 🌳
  } else if (visits >= 10) {
    return " https://ik.imagekit.io/varsh0506/Bin%20Win/plant-pot.png?updatedAt=1741154677173"; // Medium tree 🌲
  } else if (visits >= 5) {
    return " https://ik.imagekit.io/varsh0506/Bin%20Win/nature.png?updatedAt=1741154677719"; // Small tree 🌿
  } else {
    return "https://ik.imagekit.io/varsh0506/Bin%20Win/seed.png?updatedAt=1741154677717"; // Seedling 🌱
  }
};

const DisplayProfile = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { name, age, location, bio, image, usageData, recyclingVisits = 4 } = route.params || {};

  return (
    <View className="flex-1 bg-white p-6">
      {/* Profile Header */}
      <View className="items-center mb-6">
        <Image
          source={{ uri: image || "https://www.w3schools.com/w3images/avatar2.png" }}
          className="w-32 h-32 rounded-full border-4 border-[#379237]"
        />
        <Text className="text-2xl font-bold text-[#379237] mt-4">{name || "Not Set"}</Text>
        <Text className="text-gray-500 text-md">@{name?.toLowerCase().replace(/\s+/g, '') || "username"}</Text>
      </View>

      {/* Profile Details */}
      <View className="bg-[#f0fdf4] p-4 rounded-lg mb-4 shadow">
        <Text className="text-lg text-[#379237] mb-2">🎂 Age: {age || "Not Set"}</Text>
        <Text className="text-lg text-[#379237] mb-2">📍 Location: {location || "Not Set"}</Text>
        <Text className="text-lg text-[#379237] mb-2">📜 Bio: {bio || "Not Set"}</Text>
      </View>

      {/* Tree Growth Progress */}
      <Text className="text-lg font-bold text-[#379237] mb-3">🌱 Your Green Impact</Text>
      <View className="items-center mb-6">
        <Image source={{ uri: getTreeImage(recyclingVisits) }} className="w-40 h-40" />
        <Text className="text-md text-[#379237] mt-2"><b>Recycling Center Visits: {recyclingVisits}</b></Text>
      </View>

      {/* Usage Statistics */}
      <Text className="text-lg font-bold text-[#379237] mb-3">📊 App Usage (Past Week)</Text>
      <BarChart
        data={{
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [{ data: usageData || [1, 2, 7, 3, 4, 0, 5] }],
        }}
        width={Dimensions.get("window").width - 10}
        height={220}
        yAxisLabel=""
        chartConfig={{
          backgroundGradientFrom: "#f0fdf4",
          backgroundGradientTo: "#f0fdf4",
          color: (opacity = 1) => `rgba(55, 146, 55, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(55, 146, 55, ${opacity})`,
        }}
        style={{ borderRadius: 10 }}
      />

      {/* Go Home Button */}
      <TouchableOpacity
        className="mt-6 py-3 px-8 bg-gradient-to-r from-[#58CC02] to-[#379237] rounded-lg shadow-lg"
        onPress={() => navigation.navigate("Home")}
      >
        <Text className="text-white text-lg font-bold text-center">🏠 Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DisplayProfile;

