import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
import { useState } from "react";

//! NB let's outsource th einput part into a modal!

export default function GoalInput({ onAddGoal, modalIsVisible, onCloseGoal }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalTextHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          {/* //! wrap each button into a View in order to style them */}
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalTextHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCloseGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    width: "100%",
    padding: 8,
    borderColor: "#cccccc",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
