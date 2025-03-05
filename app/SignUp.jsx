import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker"; // ✅ Import Dropdown Picker
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("null"); 
  const [open, setOpen] = useState(false); // Dropdown open state
  const [items, setItems] = useState([
    { label: "Public", value: "Public" },
    { label: "Recycling Center", value: "Recycling Center" },
  ]);

  const navigation = useNavigation();

  const handleSignUp = () => {
    console.log("Sign Up pressed with:", name, email, password, role);
  };

  return (
    <View className="flex-1 justify-center items-center bg-[#F9F9F9] p-5">
      <Text className="text-2xl font-bold text-[#379237] mb-5">Create an Account</Text>

      <TextInput className="w-full h-12 bg-[#DFFFD6] rounded-lg px-4 mb-4 text-[#379237]"
        placeholder="Full Name"
        placeholderTextColor="#379237"
        value={name}
        onChangeText={setName}
      />
      <TextInput className="w-full h-12 bg-[#DFFFD6] rounded-lg px-4 mb-4 text-[#379237]"
        placeholder="Email"
        placeholderTextColor="#379237"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput className="w-full h-12 bg-[#DFFFD6] rounded-lg px-4 mb-4 text-[#379237]"
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

      <TouchableOpacity className="bg-[#58CC02] py-4 px-10 rounded-full shadow-md mt-4" onPress={handleSignUp}>
        <Text className="text-white text-lg font-bold">Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text className="mt-4 text-[#379237] text-lg">
          Already have an account? <Text className="font-bold underline">Log in</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
