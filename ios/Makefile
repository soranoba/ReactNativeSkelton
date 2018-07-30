NAME := ReactNativeSkelton

all: init synx test

ci: init test

init:
	bundle install --path vendor/bundle
	bundle exec pod install

open:
	open ${NAME}.xcworkspace

test:
	bundle exec fastlane tests

synx:
	bundle exec synx ${NAME}.xcodeproj
