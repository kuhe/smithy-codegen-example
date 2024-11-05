# Quickstart Gradle Template

Smithy [quickstart](https://smithy.io/2.0/quickstart.html) example built using gradle.

## Prerequisites

- `java --version` Java 17+ to run gradle
- `node -v` Node.js 18+ (may work with 16) and accompanying `npm -v`
- `make -v` GNU Make

## Building

A sample service model has been placed in `./models/weather.smithy`.

To build the model into a client, run:

```console
make
```

from the root of this repository.

To verify the client is runnable, run

```
make test
```
