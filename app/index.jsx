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
      <Text className="text-2xl font-bold text-green-500 bg-yellow-400">Edit app/index.tsx to edit this screen.</Text>
      <Text style={styles.div}>This is the sample text</Text>
      <button className="btn btn-primary">Click me</button>
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