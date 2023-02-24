import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

//========================
//# 01 - INTRO: styling
//========================
function App01Basics() {
  return (
    <View style={styles01.container}>
      <Text style={styles01.dummyText}>View</Text>
      <Text
        style={{ margin: 16, borderWidth: 2, borderColor: "red", padding: 16 }}
      >
        HELLO WORLD
      </Text>
      <Button title="My button" />
    </View>
  );
}

//! NB you cannot put text into a view without the Text tag
//! NB View is only able to hold and lay out other components
//! the idea behind the View component is that you typically have multiple child components in there

//# styling
//! the style props is supported only on some elements: View, Text
//! NB React Native decides what properties are supported for the styling
//! e.g. margin --> it wants a number and this number will then be autonatically translated to pixels, which are automatically adjusted to the device pixel density
//! IMPORTANT prefer StyleSheet objects rather than inline styles! why? because this allows us to separate our JSX code from the styling code + makes the styles reusable
//! NB style reference --> https://reactnative.dev/docs/style
//! NB color reference --> https://reactnative.dev/docs/colors

const styles01 = StyleSheet.create({
  //! NB if you use StyleSheet you will get a lot of autocompletion! + validation (if you use an invalid style property or value, it would give you a warning/error)
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: "red",
  },
});

//========================
//# 02 -- LAYOUTS
//========================
function App02Layout() {
  return (
    <View style={styles02.appContainer}>
      <View style={styles02.inputContainer}>
        <TextInput placeholder="Your Goal" style={styles02.textInput} />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals</Text>
      </View>
    </View>
  );
}

//! flexbox in react native is very similar to flexbox in css
const styles02 = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    // ! in react native the default is column
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
});

//===========================
//##### FLEXBOX #############
//===========================
//! flexbox deep dive https://reactnative.dev/docs/flexbox
//! NB every View in react-native, even if you assign no special styles, uses Flexbox AND IT CANNOT BE TURNED OFF (this is different from the web! a div does not use flexbox by default)
//! NB in react native flexbox the default is direction column (in normal css the default direction is row)

function AppFlexBox() {
  return (
    <View
      style={{
        padding: 50,
        flexDirection: "row",
        width: "80%",
        height: 300,
        //! NB use justifyContent to organize the child elements along the main axis (in our case, row)
        //! NB use alignItems to organize the child elements along the cross axis (i.e. the opposite of the main axies, in our case, column)
        justifyContent: "space-around",
        alignItems: "stretch",
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          //! NB if you do not give the flex children a width and a height, every child box will be as wide and as tall as it requires to be (i.e. it adapts by default to the content)
          // width: 100,
          // height: 100,
          //! NB use the flex property to tell this child element "how much space it should take of the space it can get along the main axis"
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          // width: 100,
          // height: 100,
          flex: 2, //! take twice as much space of the elemtn with flex: 1 --> i.e. the space is divided into 2 + 1 and the space that they get is proportional to this (like with grid)
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          // width: 100,
          // height: 100,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}

//============================================================
// ###### IMPROVE GOAL APP LAYOUT
//============================================================

function GoalAppLayout() {
  return (
    <View style={styles03.appContainer}>
      <View style={styles03.inputContainer}>
        <TextInput placeholder="Your Goal" style={styles03.textInput} />
        <Button title="Add Goal" />
      </View>
      <View style={styles03.goalsContainer}>
        <Text>List of goals</Text>
      </View>
    </View>
  );
}

//! NB Button is a react native component that does not hav a style property!

const styles03 = StyleSheet.create({
  appContainer: {
    //! NB by default, the View element will take just as much space as it needs (i.e. the space that the content in the container takes up)
    //! IMPORTANT to do this, set flex: 1 --> to force the appContainer to take all the available height
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderWidth: 2,
    borderColor: "red",
  },
  inputContainer: {
    //! we want the text input area to take up 1/4 of the overall available area: set flex: 1
    //! NB REMEMBER that all the flex values are added together as long as the containers to which they are added are siblings to each other and are part of the same surrounding parent element
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0,0,255,0.3)",
    marginBottom: 24,
    borderBottomWidth: 3,
    borderBottomColor: "green",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "rgba(255,0,255,1)",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
    backgroundColor: "rgba(125,5,125,0.3)",
  },
});

//================================================================
//### HANDLING EVENTS + making content scrollable with ScrollView
//================================================================

//! when it comes to React's core features like handling events or managing state,
//! it all works in exactly the same way of normal React for the web

function GoalAppEvents() {
  const [goalText, setGoalText] = useState("");
  const [goalsList, setGoalsList] = useState([]);

  function goalInputHandler(enteredText) {
    setGoalText(enteredText);
  }
  function addGoalHandler() {
    setGoalsList((currList) => [...currList, goalText]);
  }

  return (
    <View style={styles03.appContainer}>
      <View style={styles03.inputContainer}>
        <TextInput
          placeholder="Your Goal"
          style={styles03.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      {/*
      //!!  now with ScrollView the space is different than it wass before! --> we have way more space for the input and way less space for the list
      //! the reason is that ScrollView has the job of making something scrollable, but NB the area that is scrollable in the end is determined by the container that holds the ScrollView
      //! to solve this problem, add another normal view that restricts the available height, to which you then add the apporpriate style
      //! So the outer view, controls how much space this area of the screen should take up,
      //! and the inner ScrollView then makes sure that this space, and the items in that space, to be precise, will be scrollable inside that overall space.
      */}
      <View style={styles03.goalsContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {/* alwaysBounceVertical is for iOS for removing the vertical bouncing when there are just a few elements and there is no need for scrolling -- iOS specific property!!! */}
          {goalsList.map((goal, i) => (
            <View key={i} style={styles04.goalItem}>
              <Text style={styles04.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

//! the property borderRadius in iOS does not work on Text element, therefore wrap the Text element with a View element on which you can add this style
//! IMPORTANT unlike css for the web, ' STYLES DO NOT CASCADE NOR INHERITANCE '
const styles04 = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    borderWidth: 2,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});

//================================================================
//### optimizing lists with FlatList (lecture 26)
//================================================================
//! ScrollView is great, if you want to add scrolling around some content.
//! e.g., if you had an article,
//! which would be too long to fit on a screen
//! or you simply don't know which device sizes your users will be using
//! and you wanna make sure that an article for example,
//! is scrollable. In such situations, ScrollView is perfect.
//! For lists as we have it here, it's not perfect though.
//! why? because they could be very long (you could have hundreds or thousands of items)
//! NB ScrollView renders all the items that are inside of it whenever the overall UI is rendered
//! i.e. even if an item is not currently on the screen (e.g. like the last list item),
//! this item is still rendered behind the scenes even though it is not visible yet
//! IMPORTANT so ScrollView renders all its child items, no matter if we are talking about 10, 20 or 10 thousand items
//! therefore, for very long lists, this can become a performance issue (this will slow down the app, and you do not want this)
//! therefore ScrollView is great for limited amounts of content, e.g. an article which has a fixed end at some point
//! but for dynamic lists, it is BEST PRACTICE to use ' FlatList '
//! FlatList is specifically built for scrollable lists, and internally it will render only the items that are actually visible
//! and all the items that are off the screen, will be loaded and rendered lazily as they are needed because the user is scrolling
//! (internally they have a threshold to make sure it starts loading and rendering items before are visible)
//! IMPORTANT remove map when using FlatList (no longer map our data manually) instead pass some important props to FlatList (see below)
//! data prop
//! renderItem prop --> this takes in a function as a value, and this function will tell FlatList how to render the individual data items
//! the "itemData" object that this function gets as input automatically, is actually an object generated by FlatList internally
//! NB this itemData also contains some metadata
//! with itemData.item you get access to the actual item value; with itemData.index you get access to its index value

//! IMPORTANT FlatList works better if you have an Array of objects, instead of an array of strings
//! because FlatList will automatically look for the key property in each of these objects to render the FlatList

export default function GoalAppFlatList() {
  const [goalText, setGoalText] = useState("");
  const [goalsList, setGoalsList] = useState([]);

  function goalInputHandler(enteredText) {
    setGoalText(enteredText);
  }
  function addGoalHandler() {
    setGoalsList((currList) => [
      ...currList,
      { text: goalText, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles03.appContainer}>
      <View style={styles03.inputContainer}>
        <TextInput
          placeholder="Your Goal"
          style={styles03.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles03.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => {
            //! NB if itemData has a key prop, i.e. our item object has a key prop (see how you update the state goalsList in addGoalHandler)
            //! NB FlatList will automatically look for such key property
            return (
              <View style={styles04.goalItem}>
                <Text style={styles04.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

/*
! if you don't have a property named key
! because e,g, you are getting data from an API
! and you can't influence its shape,
! and you don't want to transform it
! just because flat list needs that key property,
! You also have an alternative
! to setting up such a key property in the input data.
! IMPORTANT you can add the keyExtractor prop, which wants a function as a value, and it automatically receives in input 2 values: (item, index)
! NB FlatList will call this function for you for every list item that is rendered
<FlatList data={goalsList} keyExtractor={(item, index) => {
  return item.id //NB return the key here
}}/>
*/
