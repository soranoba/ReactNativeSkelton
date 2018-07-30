# ReactNativeSkelton
[![Build Status](https://app.bitrise.io/app/0e02772d9cedf334/status.svg?token=ZtpKDsXah_XE80i-4MKIVw&branch=master)](https://app.bitrise.io/app/0e02772d9cedf334)

A skelton project of [ReactNative](https://facebook.github.io/react-native/) based [CreateReactNativeApp](https://github.com/react-community/create-react-native-app).
It support iOS, Android and Web without Expo.

## Why does this repository exist?

Because CreateReactNativeApp is not maintained.

## Requirements

## Usage

for OSX

```bash
git clone https://github.com/soranoba/ReactNativeSkelton #{YOUR_PROJECT_NAME}
cd #{YOUR_PROJECT_NAME}
rm -rf .git
sh scripts/renameProject.sh #{YOUR_PROJECT_NAME}
```

If you want to run on Linux, `sed` may not work properly.

## CI

```bash
make ci
```
