
.PHONY: test

init:
	npm install

start:
	npm start

test:
	npm test

web:
	npm run web

build:
	npm run build

ci: init build test
	cd ios; $(MAKE) ci
	cd android; $(MAKE) ci
