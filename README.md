# CheeryTomato

A 'pomodoro' app, the name being a play on "cherry tomato," the translation from Italian of 'pomodorino,' what I always think of when I hear 'pomodoro' because it's the name of a favorite family restaurant from my childhood. Good luck!

Custom fonts React Native: create /assets/fonts/, write the rnpm bit in package.json, make sure the fonts are named their PostScript name, react-native link ./assets/fonts, then the font name is accessible to fontFamily:String

SVG transform in React Native: yarn add --dev react-native-svg-tranformer and yarn add or yarn add --dev react-native-svg, I did add --dev, edit metro.config.js (I don't know if that's correct, I think maybe,) and then use the imported component instead of Image source={{}}

Debugging: I don't even KNOW!! sudo npm i -g react-native-debugger-open and ran rndebugger-open and then tried it, and it ... didn't throw an error? I also yarn add --dev'd it and had seen a similar 'yay' message ... that's the thing with dev work sometimes, you just have to kinda be like, uhh, this is kinda like another fix I did once, let's try this ... and hope you don't destroy your entire machine somehow.

Oh, man, missed some in between here. Just wanted to record this helpful answer from `flutter` on StackOverflow regarding the `Running multiple emulators with the same AVD is an experimental feature.` bug, deleting hardware-qemu.ini.lock and multiinstance.lock did the trick.
