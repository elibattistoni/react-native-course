# Create a new expo app
NB the method I used is a different method compared to the one in the lectures! Max did `expo init react-native-app`.

--> https://docs.expo.dev/get-started/create-a-new-app/

```
$ nvm use 16

$ npx create-expo-app react-native-app

```

----------------------------------------------------------

it then asks to install:
  create-expo-app@1.3.2
Ok to proceed? (y) y

...

✅ Your project is ready!

To run your project, navigate to the directory and run one of the following npm commands.

- cd react-native-app
- npm run android
- npm run ios # you need to use macOS to build the iOS project - use the Expo app if you need to do iOS development without a Mac
- npm run web

-----------------------------------------

if you run `npm start` it will start and if you click w it will open a browser tab --> but it will make you install the following packages
npx expo install react-native-web@~0.18.9 react-dom@18.1.0 @expo/webpack-config@^0.17.2

then run again `npm start`, click w when prompted and it will open a browser tab
on the phone, open the expo go app, and scan the QR code



# if you want to start from a template:

elisa@elisa-TUXEDO-Aura-15-Gen2:~/elisa/github-courses/react-native-course/01-getting-started$ npx create-expo-app --template
✔ Choose a template: › Blank
✔ What is your app named? … my-app
✔ Downloaded and extracted project files.
> npm install
npm WARN deprecated @npmcli/move-file@1.1.2: This functionality has been moved to @npmcli/fs
npm WARN deprecated source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated uglify-es@3.3.9: support for ECMAScript is superseded by `uglify-js` as of v3.13.0

added 1148 packages, and audited 1149 packages in 13s

59 packages are looking for funding
  run `npm fund` for details

5 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.


✅ Your project is ready!

To run your project, navigate to the directory and run one of the following npm commands.

- cd my-app
- npm run android
- npm run ios # you need to use macOS to build the iOS project - use the Expo app if you need to do iOS development without a Mac
- npm run web
elisa@elisa-TUXEDO-Aura-15-Gen2:~/elisa/github-courses/react-native-course/01-getting-started$ 


------------------------------------------------------------------------------


LECTURE 8 at 2:36