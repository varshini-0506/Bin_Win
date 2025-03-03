import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Home");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://ik.imagekit.io/varsh0506/binwin_mascot-removebg-preview.png?updatedAt=1740992271926" }} // Replace with your ImageKit URL
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F8FF",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});
