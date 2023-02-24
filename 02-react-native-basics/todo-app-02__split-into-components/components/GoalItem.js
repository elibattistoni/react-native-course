import { View, Text, StyleSheet, Pressable } from "react-native";

//===================================================
//_ REMOVE GOALS functionality (delete on press)
//===================================================
//_ if you want to make an item pressable, you have to let React Native know by
//_ wrapping the item that should be pressable into a specific component provided by React Native: the Pressable component
//_ Touchable components will be deprecated and replaced with Pressable
//_ add the styling with android_ripple for Android

//! IMPORTANT with ' Pressable ' you can create your own Button component!
//! The built-in React Native Button component just uses the Pressable component underneath (or the old Touchable components)
//! NB the react native Button component comes already pre-styled (this is why it does not have a style prop)
//! therefore if you want to really have a customizabel button, then you should use the Pressable component and some Text and View inside of it

export default function GoalItem({ text, onDeleteItem, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onDeleteItem.bind(this, id)}
        //_ ripple effect for Android:
        android_ripple={{ color: "#210644" }}
        //_ ripple effect for iOS:
        style={(pressData) => {
          pressData.pressed && styles.pressedItem;
        }}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 8,
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
