import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function SplashScreen({ navigation }) {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Home");
    }, 5000);

    // Loading animation effect (adds dots ...)
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      {/* App Logo & Name (Centered) */}
      <Image
        source={{ uri: "https://ik.imagekit.io/varsh0506/binwin_mascot-removebg-preview.png?updatedAt=1740992271926" }}
        style={styles.image}
      />
      <Text style={styles.text}>BinWin</Text>

      {/* Cute Loading Box Positioned Lower */}
      <View style={styles.loadingContainer}>
        <View style={styles.loadingBox}>
          <Text style={styles.loadingText}>Loading{dots}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DFFFD6", // Soft Pastel Green
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  text: {
    marginTop: 10,
    fontSize: 42,
    fontWeight: "bold",
    fontFamily: "monospace",
    color: "#58CC02", // Bright Green
  },
  loadingContainer: {
    position: "absolute",
    bottom: 50, // Pushes it towards the bottom
    alignItems: "center",
    width: "100%",
  },
  loadingBox: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: "#F9F9F9", // White box
    borderRadius: 20, // Cute rounded edges
    borderWidth: 2,
    borderColor: "#379237", // Deep Eco Green border
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5, // Slight elevation for depth effect
  },
  loadingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F4A900", // Warm Yellow
  },
});
