
.PHONY: test

init:
	npm install --no-save

start:
	npm start

test:
	npm test

web:
	npm run web

build:
	npm run build

ci: init build test lint
	cd ios; $(MAKE) ci
	cd android; $(MAKE) ci

lint:
	npm run-script lint

format:
	npm run-script format
