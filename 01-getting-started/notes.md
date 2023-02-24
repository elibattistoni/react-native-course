# Create a new expo app

NB Read the 00-Fundamental-Ubuntu-Expo-Setup/IMPORTANT-README.md for setting up your PC, installing Expo and having the correct Node version for Expo.

There are 2 ways in which you can initialize a React Native project with Expo:
1. NB switch to Node 16 ALWAYS! `$ nvm use 16`
2. with the Expo CLI --> `$ expo init react-native-app`
3. with `$ npx create-expo-app react-native-app` (or if you want to start from a template: `$ npx create-expo-app --template`) --> https://docs.expo.dev/get-started/create-a-new-app/ --> with this it might ask you ton install "create-expo-app" package (in my case, create-expo-app@1.3.2)

Regardless of the method used (2. or 3.), then run:
`$ npm start`
click "w" to open a browser tab, so that you can see the console.log()
--> in this case it might prompt you to install the following packages: 
`$ npx expo install react-native-web@~0.18.9 react-dom@18.1.0 @expo/webpack-config@^0.17.2`
--> install them and then run again `$ npm start`
--> on the phone (after downloading the "Expo Go" app from the Google Play Store) --> open the Expo Go app, and scan the QR code


# Use an emulator
Download the emulator here https://developer.android.com/studio in order to be able to run emulators on your local device.

On the Welcome screen, when you open Android studio, you should see a More button,  and there you will find a **Virtual Device Manager** --> you can use this manager to build virtual devices, i.e. to build emulators. --> click on it, then you can build your own device
--> click on "Create new device" --> and IMPORTANT pick the preset that has an icon in the "Play Store" column
--> leave the defaults --> then click on the PLAY button to launch this emulator --> this is a dummy phone, but a real phone when it comes to testing android apps

# Styling React Native Apps
In React Native there is no CSS! because it is not a browser, therefore the CSS language does not exist here.

NB you do not have an extra styling language --> it is all JS, but the React Native team gives you a lot of JS properties which you can set and pass to those core elements (which are similar to the CSS properties)

You can apply styles in 2 ways:
1. **inline styles** --> by using props in the core components that are provided
2. **StyleSheet Objects** --> with the help of these objects


# the App component
NB the App component is the root component that is rendered in your app --> Expo will automatically take the App component defined in the App.js file and render it as the root component --> therefore any other user interface elements and components must go into this app component or into children or descendants of this app component

//! NB Text and View are two of the most IMPORTANT built-in components that react native exposes to us
//! here https://reactnative.dev/docs/components-and-apis is a list of all the components available in react native