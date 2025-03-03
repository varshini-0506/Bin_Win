import { Text, View } from "react-native";
import { StyleSheet } from 'react-native';
import "../global.css"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-green-500 bg-yellow-400 font-bold text-2xl">Edit app/index.tsx to edit this screen.</Text>
      <Text style={styles.div}>This is the sample text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  div: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
    color:"red"
  },
});