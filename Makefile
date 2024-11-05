.PHONY: build

build: node_modules
	./gradlew clean build
	rm -rf ./generated-clients/*
	node ./scripts/1.extract-generated-client.js
	npx prettier --write ./generated-clients/*

node_modules:
	npm install;