import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

export default function GoalInput({ onAddGoal }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalTextHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  //! NB if we do not set the value prop on TextInput --> we have one way data binding
  //! NB if we set the value and we point to the enteredGoalText --> we have tweo way data binding!

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your Goal"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText} //!NB two way data binding with this
      />
      <Button title="Add Goal" onPress={addGoalTextHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
