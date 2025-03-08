import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker"; // ✅ Import Dropdown Picker

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("null"); 
  const [open, setOpen] = useState(false); // Dropdown open state
  const [items, setItems] = useState([
    { label: "Public", value: "Public" },
    { label: "Recycling Center", value: "Recycling Center" },
  ]);

  const navigation = useNavigation();

  const handleLogin = () => {
    console.log("Login pressed with:", email, password, role);
  };

  return (
    <View className="flex-1 justify-center items-center bg-[#F9F9F9] p-6">
      {/* Duolingo-style Logo */}
      <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/6/63/Duolingo_logo.png" }} 
        className="w-20 h-20 mb-4"
      />

      <Text className="text-3xl font-bold text-[#58CC02] mb-6">Welcome Back!</Text>

      {/* Email Input */}
      <TextInput
        className="w-full h-14 bg-[#DFFFD6] rounded-2xl px-5 mb-4 border-2 border-[#58CC02] text-[#379237] shadow-sm"
        placeholder="Email"
        placeholderTextColor="#379237"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      {/* Password Input */}
      <TextInput
        className="w-full h-14 bg-[#DFFFD6] rounded-2xl px-5 mb-4 border-2 border-[#58CC02] text-[#379237] shadow-sm"
        placeholder="Password"
        placeholderTextColor="#379237"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Role Selection Dropdown */}
      <DropDownPicker
        open={open}
        value={role}
        items={items}
        setOpen={setOpen}
        setValue={setRole}
        setItems={setItems}
        placeholder="Select Role"
        containerStyle={{ width: "100%" }}
        style={{ backgroundColor: "#DFFFD6", borderWidth: 0 }}
        textStyle={{ color: "#379237" }}
      />

      {/* Login Button */}
      <TouchableOpacity className="bg-[#58CC02] py-4 px-10 rounded-full shadow-md mt-4" onPress={handleLogin}>
        <Text className="text-white text-lg font-bold">Login</Text>
      </TouchableOpacity>

      <Text className="mt-6 text-[#58CC02] text-lg font-semibold">Forgot Password?</Text>

      {/* Navigate to SignUp on click */}
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text className="mt-4 text-[#379237] text-lg">
          Don't have an account? <Text className="font-bold underline">Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
