# ReactNativeSkelton
[![Build Status](https://app.bitrise.io/app/0e02772d9cedf334/status.svg?token=ZtpKDsXah_XE80i-4MKIVw&branch=master)](https://app.bitrise.io/app/0e02772d9cedf334)

A skelton project of [ReactNative](https://facebook.github.io/react-native/) based [CreateReactNativeApp](https://github.com/react-community/create-react-native-app).
It support iOS, Android and Web without Expo.

## Description

### Dependencies

- [react-router](https://github.com/ReactTraining/react-router)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [native-base](https://github.com/GeekyAnts/NativeBase)

## Usage

```bash
git clone https://github.com/soranoba/ReactNativeSkelton ${YOUR_PROJECT_NAME}
cd ${YOUR_PROJECT_NAME}
rm -rf .git
sh scripts/renameProject.sh ${YOUR_PROJECT_NAME}
```

## CI

```bash
make ci
```

## Crash Report

```bash
## (1) Install a sourcemap tool

$ npm i -g sourcemap-lookup

## (2) Create bundle and sourcemap for release build corresponding to current revision

## for web
$ make build
## for native
$ make build_native

## (3) Display the source code from the lineNumber and columnNumber of the stack

## for web
$ sourcemap-lookup public/assets/bundle.js:1:10101
## for native
$ sourcemap-lookup build/main.ios.jsbundle:867:1279 -s /

Original Position:
         /ReactNativeSkelton/src/example/ExceptionCaptureScreen.js, Line 27:58

Code Section:
22 | export default class ExceptionCaptureScreen extends React.Component {
23 |     render() {
24 |         return (
25 |             <ExceptionCapture component={ExceptionDisplaySccreen}>
26 |             <View>
27>|                 <Button title="crash" onPress={() => this.undefined()} />
                                                               ^
28 |             </View>
29 |         </ExceptionCapture>
30 |         );
31 |     }
32 | }
```
