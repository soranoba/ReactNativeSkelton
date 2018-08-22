
.PHONY: test

init:
	npm install --no-save

open:
	open -a "Visual Studio Code" .

start:
	npm start

test:
	npm test

web:
	npm run web

build:
	npm run build

build_native:
	react-native bundle --entry-file src/index.native.js --platform ios --dev false --bundle-output build/main.ios.jsbundle --sourcemap-output build/main.ios.jsbundle.map
	react-native bundle --entry-file src/index.native.js --platform android --dev false --bundle-output build/main.android.jsbundle --sourcemap-output build/main.android.jsbundle.map

ci: init build test lint
	cd ios; $(MAKE) ci
	cd android; $(MAKE) ci

ci_web: init build test lint

ci_ios: init
	cd ios; $(MAKE) ci

ci_android: init
	cd android; $(MAKE) ci

lint:
	npm run-script lint

format:
	npm run-script format
