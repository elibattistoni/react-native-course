import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { endAsyncEvent } from "react-native/Libraries/Performance/Systrace";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function showAddGoalModalHandler() {
    setModalIsVisible(true);
  }

  function closeAddGoalModalHandler() {
    setModalIsVisible(false);
  }

  function addGoalItemHandler(goalText) {
    setCourseGoals((currList) => {
      const updatedList = [
        ...currList,
        { text: goalText, id: Math.random().toString() },
      ];
      return updatedList;
    });
    closeAddGoalModalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currList) => {
      const remainingList = currList.filter((goal) => goal.id !== id);
      return remainingList;
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={showAddGoalModalHandler}
      />
      <GoalInput
        onAddGoal={addGoalItemHandler}
        modalIsVisible={modalIsVisible}
        onCloseGoal={closeAddGoalModalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
