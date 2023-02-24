import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
//! NB to show the navigation bar of the phone itself (which otherwise is covered by our app)
import { StatusBar } from "expo-status-bar"; //! NB with this you can fine tune the status bar

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
    <>
      <StatusBar style="light" />
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    // backgroundColor: "#1e085a",
    //! NB this can be set also in app.json (line 9) in the expo configuration so that
    //! you have the same background on all of the pages of your app
  },
  goalsContainer: {
    flex: 5,
  },
});
