// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/auth/httpAuthSchemeProvider.js
import { getSmithyContext } from "@smithy/util-middleware";
var defaultWeatherHttpAuthSchemeParametersProvider = async (config, context, input) => {
  return {
    operation: getSmithyContext(context).operation,
  };
};
function createSmithyApiNoAuthHttpAuthOption(authParameters) {
  return {
    schemeId: "smithy.api#noAuth",
  };
}
var defaultWeatherHttpAuthSchemeProvider = (authParameters) => {
  const options = [];
  switch (authParameters.operation) {
    default: {
      options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
    }
  }
  return options;
};
var resolveHttpAuthSchemeConfig = (config) => {
  return {
    ...config,
  };
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/package.json
var package_default = {
  name: "@smithy/typescript-example-client",
  description: "@smithy/typescript-example-client client",
  version: "0.0.1",
  scripts: {
    build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
    "build:cjs": "tsc -p tsconfig.cjs.json",
    "build:es": "tsc -p tsconfig.es.json",
    "build:types": "tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "rimraf ./dist-* && rimraf *.tsbuildinfo || exit 0",
    prepack: "yarn run clean && yarn run build",
  },
  main: "./dist-cjs/index.js",
  types: "./dist-types/index.d.ts",
  module: "./dist-es/index.js",
  sideEffects: false,
  dependencies: {
    tslib: "^2.6.2",
    "@aws-crypto/sha256-browser": "5.2.0",
    "@aws-crypto/sha256-js": "5.2.0",
    "@aws-sdk/middleware-host-header": "3.654.0",
    "@aws-sdk/middleware-logger": "3.654.0",
    "@aws-sdk/middleware-recursion-detection": "3.654.0",
    "@aws-sdk/middleware-user-agent": "3.654.0",
    "@aws-sdk/types": "3.654.0",
    "@aws-sdk/util-user-agent-browser": "3.654.0",
    "@aws-sdk/util-user-agent-node": "3.654.0",
    "@smithy/config-resolver": "^3.0.10",
    "@smithy/core": "^2.5.1",
    "@smithy/fetch-http-handler": "^4.0.0",
    "@smithy/hash-node": "^3.0.8",
    "@smithy/invalid-dependency": "^3.0.8",
    "@smithy/middleware-content-length": "^3.0.10",
    "@smithy/middleware-retry": "^3.0.25",
    "@smithy/middleware-serde": "^3.0.8",
    "@smithy/middleware-stack": "^3.0.8",
    "@smithy/node-config-provider": "^3.1.9",
    "@smithy/node-http-handler": "^3.2.5",
    "@smithy/protocol-http": "^4.1.5",
    "@smithy/smithy-client": "^3.4.2",
    "@smithy/types": "^3.6.0",
    "@smithy/url-parser": "^3.0.8",
    "@smithy/util-base64": "^3.0.0",
    "@smithy/util-body-length-browser": "^3.0.0",
    "@smithy/util-body-length-node": "^3.0.0",
    "@smithy/util-defaults-mode-browser": "^3.0.25",
    "@smithy/util-defaults-mode-node": "^3.0.25",
    "@smithy/util-middleware": "^3.0.8",
    "@smithy/util-retry": "^3.0.8",
    "@smithy/util-utf8": "^3.0.0",
  },
  devDependencies: {
    "@tsconfig/node16": "16.1.3",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    rimraf: "^3.0.0",
    typescript: "~4.9.5",
    "@types/node": "^16.18.96",
  },
  engines: {
    node: ">=16.0.0",
  },
  typesVersions: {
    "<4.0": {
      "dist-types/*": ["dist-types/ts3.4/*"],
    },
  },
  files: ["dist-*/**"],
  browser: {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser",
  },
  "react-native": {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native",
  },
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/runtimeConfig.browser.js
import { Sha256 } from "@aws-crypto/sha256-browser";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-browser";
// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/runtimeConfig.shared.js
import { NoAuthSigner } from "@smithy/core";
import { FetchHttpHandler as RequestHandler, streamCollector } from "@smithy/fetch-http-handler";
import { NoOpLogger } from "@smithy/smithy-client";
import { parseUrl } from "@smithy/url-parser";
import { fromBase64, toBase64 } from "@smithy/util-base64";
import { calculateBodyLength } from "@smithy/util-body-length-browser";
import { DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE } from "@smithy/util-retry";
import { fromUtf8, toUtf8 } from "@smithy/util-utf8";
var getRuntimeConfig = (config) => {
  return {
    apiVersion: "2006-03-01",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    extensions: config?.extensions ?? [],
    httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultWeatherHttpAuthSchemeProvider,
    httpAuthSchemes: config?.httpAuthSchemes ?? [
      {
        schemeId: "smithy.api#noAuth",
        identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
        signer: new NoAuthSigner(),
      },
    ],
    logger: config?.logger ?? new NoOpLogger(),
    urlParser: config?.urlParser ?? parseUrl,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8,
  };
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/runtimeConfig.browser.js
import { loadConfigsForDefaultMode } from "@smithy/smithy-client";
import { resolveDefaultsModeConfig } from "@smithy/util-defaults-mode-browser";
var getRuntimeConfig2 = (config) => {
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
  const clientSharedValues = getRuntimeConfig(config);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "browser",
    defaultsMode,
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    defaultUserAgentProvider:
      config?.defaultUserAgentProvider ?? defaultUserAgent({ clientVersion: package_default.version }),
    maxAttempts: config?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
    requestHandler: RequestHandler.create(config?.requestHandler ?? defaultConfigProvider),
    retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE),
    sha256: config?.sha256 ?? Sha256,
    streamCollector: config?.streamCollector ?? streamCollector,
  };
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration = (runtimeConfig) => {
  let _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
  let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
  return {
    setHttpAuthScheme(httpAuthScheme) {
      const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
      if (index === -1) {
        _httpAuthSchemes.push(httpAuthScheme);
      } else {
        _httpAuthSchemes.splice(index, 1, httpAuthScheme);
      }
    },
    httpAuthSchemes() {
      return _httpAuthSchemes;
    },
    setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
      _httpAuthSchemeProvider = httpAuthSchemeProvider;
    },
    httpAuthSchemeProvider() {
      return _httpAuthSchemeProvider;
    },
  };
};
var resolveHttpAuthRuntimeConfig = (config) => {
  return {
    httpAuthSchemes: config.httpAuthSchemes(),
    httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
  };
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/runtimeExtensions.js
import { getHttpHandlerExtensionConfiguration, resolveHttpHandlerRuntimeConfig } from "@smithy/protocol-http";
import { getDefaultExtensionConfiguration, resolveDefaultRuntimeConfig } from "@smithy/smithy-client";
var asPartial = (t) => t;
var resolveRuntimeExtensions = (runtimeConfig, extensions) => {
  const extensionConfiguration = {
    ...asPartial(getDefaultExtensionConfiguration(runtimeConfig)),
    ...asPartial(getHttpHandlerExtensionConfiguration(runtimeConfig)),
    ...asPartial(getHttpAuthExtensionConfiguration(runtimeConfig)),
  };
  extensions.forEach((extension) => extension.configure(extensionConfiguration));
  return {
    ...runtimeConfig,
    ...resolveDefaultRuntimeConfig(extensionConfiguration),
    ...resolveHttpHandlerRuntimeConfig(extensionConfiguration),
    ...resolveHttpAuthRuntimeConfig(extensionConfiguration),
  };
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/WeatherClient.js
import { getHostHeaderPlugin, resolveHostHeaderConfig } from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getUserAgentPlugin, resolveUserAgentConfig } from "@aws-sdk/middleware-user-agent";
import { resolveCustomEndpointsConfig } from "@smithy/config-resolver";
import { DefaultIdentityProviderConfig, getHttpAuthSchemePlugin, getHttpSigningPlugin } from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { getRetryPlugin, resolveRetryConfig } from "@smithy/middleware-retry";
import { Client as __Client } from "@smithy/smithy-client";
var WeatherClient = class extends __Client {
  constructor(...[configuration]) {
    let _config_0 = getRuntimeConfig2(configuration || {});
    let _config_1 = resolveUserAgentConfig(_config_0);
    let _config_2 = resolveCustomEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveHttpAuthSchemeConfig(_config_4);
    let _config_6 = resolveRuntimeExtensions(_config_5, configuration?.extensions || []);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemePlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultWeatherHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config) => new DefaultIdentityProviderConfig({}),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/commands/GetCityCommand.js
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
var GetCityCommand = class extends $Command
  .classBuilder()
  .m(function (Command, cs, config, o) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("Weather", "GetCity", {})
  .n("WeatherClient", "GetCityCommand")
  .f(void 0, void 0)
  .ser(() => {
    throw new Error("No supported protocol was found");
  })
  .de(() => {
    throw new Error("No supported protocol was found");
  })
  .build() {};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/commands/GetCurrentTimeCommand.js
import { getSerdePlugin as getSerdePlugin2 } from "@smithy/middleware-serde";
import { Command as $Command2 } from "@smithy/smithy-client";
var GetCurrentTimeCommand = class extends $Command2
  .classBuilder()
  .m(function (Command, cs, config, o) {
    return [getSerdePlugin2(config, this.serialize, this.deserialize)];
  })
  .s("Weather", "GetCurrentTime", {})
  .n("WeatherClient", "GetCurrentTimeCommand")
  .f(void 0, void 0)
  .ser(() => {
    throw new Error("No supported protocol was found");
  })
  .de(() => {
    throw new Error("No supported protocol was found");
  })
  .build() {};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/commands/GetForecastCommand.js
import { getSerdePlugin as getSerdePlugin3 } from "@smithy/middleware-serde";
import { Command as $Command3 } from "@smithy/smithy-client";
var GetForecastCommand = class extends $Command3
  .classBuilder()
  .m(function (Command, cs, config, o) {
    return [getSerdePlugin3(config, this.serialize, this.deserialize)];
  })
  .s("Weather", "GetForecast", {})
  .n("WeatherClient", "GetForecastCommand")
  .f(void 0, void 0)
  .ser(() => {
    throw new Error("No supported protocol was found");
  })
  .de(() => {
    throw new Error("No supported protocol was found");
  })
  .build() {};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/commands/ListCitiesCommand.js
import { getSerdePlugin as getSerdePlugin4 } from "@smithy/middleware-serde";
import { Command as $Command4 } from "@smithy/smithy-client";
var ListCitiesCommand = class extends $Command4
  .classBuilder()
  .m(function (Command, cs, config, o) {
    return [getSerdePlugin4(config, this.serialize, this.deserialize)];
  })
  .s("Weather", "ListCities", {})
  .n("WeatherClient", "ListCitiesCommand")
  .f(void 0, void 0)
  .ser(() => {
    throw new Error("No supported protocol was found");
  })
  .de(() => {
    throw new Error("No supported protocol was found");
  })
  .build() {};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/Weather.js
import { createAggregatedClient } from "@smithy/smithy-client";
var commands = {
  GetCityCommand,
  GetCurrentTimeCommand,
  GetForecastCommand,
  ListCitiesCommand,
};
var Weather = class extends WeatherClient {};
createAggregatedClient(commands, Weather);

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/pagination/ListCitiesPaginator.js
import { createPaginator } from "@smithy/core";
var paginateListCities = createPaginator(WeatherClient, ListCitiesCommand, "nextToken", "nextToken", "pageSize");

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/models/WeatherServiceException.js
import { ServiceException as __ServiceException } from "@smithy/smithy-client";
var WeatherServiceException = class _WeatherServiceException extends __ServiceException {
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, _WeatherServiceException.prototype);
  }
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/models/models_0.js
var NoSuchResource = class _NoSuchResource extends WeatherServiceException {
  constructor(opts) {
    super({
      name: "NoSuchResource",
      $fault: "client",
      ...opts,
    });
    this.name = "NoSuchResource";
    this.$fault = "client";
    Object.setPrototypeOf(this, _NoSuchResource.prototype);
    this.resourceType = opts.resourceType;
  }
};
export {
  GetCityCommand,
  GetCurrentTimeCommand,
  GetForecastCommand,
  ListCitiesCommand,
  NoSuchResource,
  Weather,
  WeatherClient,
  WeatherServiceException,
  __Client,
  paginateListCities,
};
