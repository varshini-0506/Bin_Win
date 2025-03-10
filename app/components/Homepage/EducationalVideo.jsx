import React, { useState } from "react";
import { View, TouchableOpacity, Text, Platform } from "react-native";
import { WebView } from "react-native-webview";
import { PlayCircle } from "lucide-react-native";
import { StyleSheet } from "react-native";

export default function EducationalVideo() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <View style={styles.container}>
      {!videoPlaying ? (
        <TouchableOpacity
          onPress={() => setVideoPlaying(true)}
          style={styles.playButton}
        >
          <PlayCircle size={50} color="#58CC02" />
          <Text style={styles.playText}>
            Play Video
          </Text>
        </TouchableOpacity>
      ) : Platform.OS === "web" ? (
        <View style={styles.videoContainerWeb}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/71DmyhloazQ?autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            style={{ borderRadius: 10 }}
          />
        </View>
      ) : (
        <WebView
          source={{
            uri: "https://www.youtube.com/embed/71DmyhloazQ?autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0",
          }}
          style={styles.videoContainerMobile}
          allowsFullscreenVideo
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  playButton: {
    width: "100%",
    aspectRatio: 16 / 9,
    backgroundColor: "#DFFFD6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  playText: {
    color: "#379237",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  videoContainerWeb: {
    width: "100%",
    aspectRatio: 16 / 9,
    overflow: "hidden",
  },
  videoContainerMobile: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});
