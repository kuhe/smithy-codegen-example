.PHONY: build

build: node_modules
	./gradlew clean build
	rm -rf ./generated-clients/*
	node ./scripts/1.extract-generated-client.js
	npx prettier --write ./generated-clients/*

test:
	node ./scripts/2.test-generated-client.js

node_modules:
	npm install;