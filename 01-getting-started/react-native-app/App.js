import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World! 💕</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Miao</Text>
      <StatusBar style="auto" />
    </View>
  );
}

//! NB Text and View are two of the most IMPORTANT built-in components that react native exposes to us
//! here https://reactnative.dev/docs/components-and-apis is a list of all the components available in react native

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
