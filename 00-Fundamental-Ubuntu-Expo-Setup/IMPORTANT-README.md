# Node, nvm, Expo and React Native

The Expo CLI and features run with Node < 17. Since I have a higher Node version and I do not want to downgrade it, you can do the following to switch between Node versions and use the Node < 17 for your Expo projects and the most recent Node version for the other projects.

On the main Terminal window:
1. Install nvm (see https://github.com/nvm-sh/nvm)
2. `$ nvm current` (this command shows the current node version that you are using, which should be the same if you type `$ node --version`)
3. `$ nvm ls` (to see the list of node/nvm versions that you can install; NB the one marked with default will be the one that you automatically use)
4. `$ nvm install 16` (if 16 is a version that you can install, see the list)
5. `$ nvm use 16` to switch to the version 16 of nvm and Node (which you should always do before starting React Native projects done with Expo)
6. Install expo --> `$ npx expo -h` this will prompt you to install expo (in my case expo@47.0.13) and the expo cli `npm install -g expo-cli`

In VS Code now you can create an Expo app with (NB you should always be with Node version 16):
1. `$ expo init my-expo-app` or
2. `$ npx create-expo-app my-expo-app`

NB the expo cli (the one that you invoke by running e.g. `$ expo --version`) will be available only if you are using Node 16!! see screenshot in folder.


# Expo terminal info

```
  Usage
    $ npx expo <command>

  Commands
    start, export, export:web
    run:ios, run:android, prebuild
    install, customize, config
    login, logout, whoami, register

  Options
    --version, -v   Version number
    --help, -h      Usage info

  For more info run a command with the --help flag
    $ npx expo start --help

```

elisa@elisa-TUXEDO-Aura-15-Gen2:~$ npx expo --version
0.4.11


# Remove / uninstall Expo completely

On the main Terminal window
1. choose the node version with which you had installed expo
2. `$ npm -g uninstall expo-cli`
3. `$ rm -rf .expo`



# Wehn starting a new VS Code terminal, and you need to have Node < 17 for Expo:

elisa@elisa-TUXEDO-Aura-15-Gen2:~$ node --version
v19.4.0
elisa@elisa-TUXEDO-Aura-15-Gen2:~$ nvm current
v19.4.0

this is the default node version!!

elisa@elisa-TUXEDO-Aura-15-Gen2:~$ nvm use 16
Now using node v16.19.1 (npm v8.19.3)
elisa@elisa-TUXEDO-Aura-15-Gen2:~$ node --version
v16.19.1
