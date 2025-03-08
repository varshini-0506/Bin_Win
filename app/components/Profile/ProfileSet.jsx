import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

const ProfileSet = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState(null);

  const navigation = useNavigation();

  // Function to pick an image
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSaveProfile = () => {
    console.log("Profile Saved:", { name, age, location, bio, image });
    navigation.navigate("DisplayProfile", { name, age, location, bio, image });
  };

  return (
    <View className="flex-1 justify-center items-center bg-[#F9F9F9] p-5">
      <Text className="text-2xl font-bold text-[#379237] mb-5">Set Up Your Profile</Text>

      {/* Profile Picture Upload */}
      <TouchableOpacity onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} className="w-24 h-24 rounded-full mb-4" />
        ) : (
          <View className="w-24 h-24 bg-[#DFFFD6] rounded-full mb-4 justify-center items-center border-2 border-[#379237]">
            <Text className="text-[#379237] text-sm">Tap to Upload</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Name Input */}
      <TextInput
        className="w-full h-12 bg-[#DFFFD6] rounded-lg px-4 mb-4 text-[#379237]"
        placeholder="Full Name"
        placeholderTextColor="#379237"
        value={name}
        onChangeText={setName}
      />

      {/* Age Input */}
      <TextInput
        className="w-full h-12 bg-[#DFFFD6] rounded-lg px-4 mb-4 text-[#379237]"
        placeholder="Age"
        placeholderTextColor="#379237"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      {/* Location Input */}
      <TextInput
        className="w-full h-12 bg-[#DFFFD6] rounded-lg px-4 mb-4 text-[#379237]"
        placeholder="Location"
        placeholderTextColor="#379237"
        value={location}
        onChangeText={setLocation}
      />

      {/* Bio Input */}
      <TextInput
        className="w-full h-24 bg-[#DFFFD6] rounded-lg px-4 py-2 mb-4 text-[#379237]"
        placeholder="Short Bio"
        placeholderTextColor="#379237"
        value={bio}
        onChangeText={setBio}
        multiline
      />

      {/* Save Profile Button */}
      <TouchableOpacity className="bg-[#58CC02] py-3 px-10 rounded-lg" onPress={handleSaveProfile}>
        <Text className="text-white text-lg font-bold">Save Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileSet;
