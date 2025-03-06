import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Animated,
  Easing,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { Home, User, Trophy, Gamepad, Menu, LogOut } from "lucide-react-native";

const levels = [
  { level: 1, status: "yes" },
  { level: 2, status: "yes" },
  { level: 3, status: "yes" },
  { level: 4, status: "yes" },
  { level: 5, status: "no" },
  { level: 6, status: "no" },
  { level: 7, status: "no" },
  { level: 8, status: "no" },
  { level: 9, status: "no" },
  { level: 10, status: "no" },
];

// const images = [
//   { level: 2, uri: "https://ik.imagekit.io/varsh0506/Bin%20Win/recycle.png?updatedAt=1741099743688" },
//   { level: 5, uri: "https://ik.imagekit.io/varsh0506/Bin%20Win/ecology.png?updatedAt=1741099744300" },
//   { level: 8, uri: "https://ik.imagekit.io/varsh0506/Bin%20Win/earth.png?updatedAt=1741099745000" }
// ];

export default function Gamified() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [scaleValue] = useState(new Animated.Value(1));
  const [screenHeight, setScreenHeight] = useState(0);
  const [completedModalVisible, setCompletedModalVisible] = useState(false);

  const openCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access camera is required!");
      return;
    }
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log("Captured Image:", result.assets[0].uri);
      console.log("Image url:", result.assets[0].uri);
    }
  };

  const handleLevelPress = (level) => {
    setSelectedLevel(level);

    if (level.status === "yes") {
      setCompletedModalVisible(true);
    } else {
      setModalVisible(true);
    }
    Animated.timing(scaleValue, {
      toValue: 0.9,
      duration: 100,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    });
  };

  const { height } = Dimensions.get("window");

  const onContentSizeChange = (contentWidth, contentHeight) => {
    setScreenHeight(contentHeight);
  };

  const scrollEnabled = screenHeight > height;
  return (
    <View className="flex-1">
      <View className="flex-1 bg-[#DFFFD6]">
        <ScrollView
          className="px-5 pt-5"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <View className="w-full items-center">
            <View className="flex justify-between items-center flex-row p-2 w-[100%]">
              <View className="flex-row items-center gap-0">
                <Image
                  source={{
                    uri: "https://ik.imagekit.io/varsh0506/Bin%20Win/level-up.png?updatedAt=1741099801763",
                  }}
                  className="w-12 h-12"
                />
                <Text className="text-white font-semibold bg-black/50 px-5 py-1 shadow-md rounded-lg">
                  10
                </Text>
              </View>
              <View className="flex-row items-center gap-1">
                <Image
                  source={{
                    uri: "https://ik.imagekit.io/varsh0506/Bin%20Win/coin.png?updatedAt=1741099743197",
                  }}
                  className="w-8 h-8"
                />
                <Text className="text-white font-semibold bg-black/50 bg-opacity-90 px-5 py-1 shadow-md rounded-lg">
                  50
                </Text>
              </View>
            </View>
            <View className="w-full items-center pb-10">
              {levels.map((level, index) => {
                return (
                  <View
                    key={level}
                    className="flex flex-row justify-center items-center w-[100%] mb-6"
                  >
                    {index == 2 && (
                      <Image
                        source={{
                          uri: "https://ik.imagekit.io/varsh0506/Bin%20Win/recycle.png?updatedAt=1741099743688",
                        }}
                        className="absolute w-32 h-32 left-1 -mt-4"
                      />
                    )}
                    {index == 8 && (
                      <Image
                        source={{
                          uri: "https://ik.imagekit.io/varsh0506/Bin%20Win/recycle%20(1).png?updatedAt=1741099743246",
                        }}
                        className="absolute w-40 h-40 left-1 -mt-4"
                      />
                    )}
                    <TouchableOpacity
                      className="relative w-16 h-16 rounded-full bg-[#58CC02] flex items-center justify-center shadow-lg shadow-[#58CC02] border-4 border-white"
                      style={{ marginLeft: 150 * Math.sin(index) }}
                      onPress={() => handleLevelPress(level)}
                    >
                      {level.status == "yes" ? (
                        <Image
                          source={{
                            uri: "https://ik.imagekit.io/varsh0506/Bin%20Win/favorite.png?updatedAt=1741165687306",
                          }}
                          className="w-10 h-10"
                        />
                      ) : (
                        <Text className="text-white font-extrabold text-3xl drop-shadow-lg">
                          {level.level}
                        </Text>
                      )}
                    </TouchableOpacity>
                    {index == 5 && (
                      <Image
                        source={{
                          uri: "https://ik.imagekit.io/varsh0506/Bin%20Win/ecology.png?updatedAt=1741099744300",
                        }}
                        className="absolute w-32 h-32 right-1 -mt-4"
                      />
                    )}
                  </View>
                );
              })}
            </View>

            <Modal
              transparent={true}
              visible={modalVisible}
              animationType="fade"
            >
              <View className="flex-1 bg-black bg-opacity-50 justify-center items-center px-4">
                <View className="bg-white w-[85%] p-6 rounded-xl shadow-xl items-center">
                  <Text className="text-xl font-bold text-center text-green-800 mb-2">
                    Capture Sorted Bins!
                  </Text>
                  <Text className="text-center text-gray-600 mb-5">
                    Take a photo of your sorted bins to analyze and earn points.
                  </Text>

                  <TouchableOpacity
                    className="w-16 h-16 rounded-full bg-green-200 flex items-center justify-center shadow-md active:bg-green-300"
                    onPress={() => {
                      setModalVisible(false);
                      openCamera();
                    }}
                  >
                    <Image
                      source={{
                        uri: "https://ik.imagekit.io/mino2112/photo.png?updatedAt=1741163526004",
                      }}
                      className="h-14 w-14"
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    className="mt-5 px-6 py-2 bg-red-400 rounded-lg"
                    onPress={() => setModalVisible(false)}
                  >
                    <Text className="text-center text-white font-semibold">
                      Close
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <Modal
              transparent={true}
              visible={completedModalVisible}
              animationType="fade"
            >
              <View className="flex-1 bg-black bg-opacity-50 justify-center items-center px-4">
                <View className="bg-white w-[85%] p-6 rounded-xl shadow-xl items-center">
                  <Text className="text-xl font-bold text-center text-green-800 mb-2">
                    Level Completed!
                  </Text>
                  <Text className="text-center text-gray-600 mb-5">
                    This level is completed, go to the next.
                  </Text>

                  <TouchableOpacity
                    className="mt-5 px-6 py-2 bg-green-500 rounded-lg"
                    onPress={() => setCompletedModalVisible(false)}
                  >
                    <Text className="text-center text-white font-semibold">
                      Close
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </View>
      <View className="absolute bottom-0 left-0 right-0 bg-[#F9F9F9] py-3 shadow-md flex-row justify-around">
        <TouchableOpacity
          className="items-center"
          onPress={() => navigation.navigate("Home")}
        >
          <User size={26} color="gray" />
          <Text className="text-gray-700 text-xs">Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="items-center"
          onPress={() => navigation.navigate("Home")}
        >
          <Home size={26} color="#58CC02" />
          <Text className="text-gray-700 text-xs">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="items-center"
          onPress={() => navigation.navigate("Home")}
        >
          <Trophy size={26} color="#F4A900" />
          <Text className="text-gray-700 text-xs">Leaderboard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="items-center"
          onPress={() => navigation.navigate("Gamified")}
        >
          <Gamepad size={26} color="#379237" />
          <Text className="text-[#58CC02] text-xs">Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
