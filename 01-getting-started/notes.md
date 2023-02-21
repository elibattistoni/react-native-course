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


LECTURE 8 at 2:36