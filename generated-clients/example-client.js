"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) =>
  key in obj
    ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value })
    : (obj[key] = value);
var __esm = (fn, res) =>
  function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])((fn = 0))), res;
  };
var __commonJS = (cb, mod) =>
  function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === "object") || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod,
  )
);
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/types/dist-cjs/index.js
var require_dist_cjs = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/types/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      AlgorithmId: () => AlgorithmId,
      EndpointURLScheme: () => EndpointURLScheme,
      FieldPosition: () => FieldPosition,
      HttpApiKeyAuthLocation: () => HttpApiKeyAuthLocation2,
      HttpAuthLocation: () => HttpAuthLocation,
      IniSectionType: () => IniSectionType,
      RequestHandlerProtocol: () => RequestHandlerProtocol,
      SMITHY_CONTEXT_KEY: () => SMITHY_CONTEXT_KEY4,
      getDefaultClientConfiguration: () => getDefaultClientConfiguration,
      resolveDefaultRuntimeConfig: () => resolveDefaultRuntimeConfig2,
    });
    module2.exports = __toCommonJS2(src_exports);
    var HttpAuthLocation = /* @__PURE__ */ ((HttpAuthLocation2) => {
      HttpAuthLocation2["HEADER"] = "header";
      HttpAuthLocation2["QUERY"] = "query";
      return HttpAuthLocation2;
    })(HttpAuthLocation || {});
    var HttpApiKeyAuthLocation2 = /* @__PURE__ */ ((HttpApiKeyAuthLocation22) => {
      HttpApiKeyAuthLocation22["HEADER"] = "header";
      HttpApiKeyAuthLocation22["QUERY"] = "query";
      return HttpApiKeyAuthLocation22;
    })(HttpApiKeyAuthLocation2 || {});
    var EndpointURLScheme = /* @__PURE__ */ ((EndpointURLScheme2) => {
      EndpointURLScheme2["HTTP"] = "http";
      EndpointURLScheme2["HTTPS"] = "https";
      return EndpointURLScheme2;
    })(EndpointURLScheme || {});
    var AlgorithmId = /* @__PURE__ */ ((AlgorithmId2) => {
      AlgorithmId2["MD5"] = "md5";
      AlgorithmId2["CRC32"] = "crc32";
      AlgorithmId2["CRC32C"] = "crc32c";
      AlgorithmId2["SHA1"] = "sha1";
      AlgorithmId2["SHA256"] = "sha256";
      return AlgorithmId2;
    })(AlgorithmId || {});
    var getChecksumConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      const checksumAlgorithms = [];
      if (runtimeConfig.sha256 !== void 0) {
        checksumAlgorithms.push({
          algorithmId: () => "sha256",
          checksumConstructor: () => runtimeConfig.sha256,
        });
      }
      if (runtimeConfig.md5 != void 0) {
        checksumAlgorithms.push({
          algorithmId: () => "md5",
          checksumConstructor: () => runtimeConfig.md5,
        });
      }
      return {
        addChecksumAlgorithm(algo) {
          checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
          return checksumAlgorithms;
        },
      };
    }, "getChecksumConfiguration");
    var resolveChecksumRuntimeConfig = /* @__PURE__ */ __name((clientConfig) => {
      const runtimeConfig = {};
      clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
      });
      return runtimeConfig;
    }, "resolveChecksumRuntimeConfig");
    var getDefaultClientConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      return getChecksumConfiguration(runtimeConfig);
    }, "getDefaultClientConfiguration");
    var resolveDefaultRuntimeConfig2 = /* @__PURE__ */ __name((config) => {
      return resolveChecksumRuntimeConfig(config);
    }, "resolveDefaultRuntimeConfig");
    var FieldPosition = /* @__PURE__ */ ((FieldPosition2) => {
      FieldPosition2[(FieldPosition2["HEADER"] = 0)] = "HEADER";
      FieldPosition2[(FieldPosition2["TRAILER"] = 1)] = "TRAILER";
      return FieldPosition2;
    })(FieldPosition || {});
    var SMITHY_CONTEXT_KEY4 = "__smithy_context";
    var IniSectionType = /* @__PURE__ */ ((IniSectionType2) => {
      IniSectionType2["PROFILE"] = "profile";
      IniSectionType2["SSO_SESSION"] = "sso-session";
      IniSectionType2["SERVICES"] = "services";
      return IniSectionType2;
    })(IniSectionType || {});
    var RequestHandlerProtocol = /* @__PURE__ */ ((RequestHandlerProtocol2) => {
      RequestHandlerProtocol2["HTTP_0_9"] = "http/0.9";
      RequestHandlerProtocol2["HTTP_1_0"] = "http/1.0";
      RequestHandlerProtocol2["TDS_8_0"] = "tds/8.0";
      return RequestHandlerProtocol2;
    })(RequestHandlerProtocol || {});
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-middleware/dist-cjs/index.js
var require_dist_cjs2 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-middleware/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      getSmithyContext: () => getSmithyContext7,
      normalizeProvider: () => normalizeProvider3,
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_types5 = require_dist_cjs();
    var getSmithyContext7 = /* @__PURE__ */ __name(
      (context) => context[import_types5.SMITHY_CONTEXT_KEY] || (context[import_types5.SMITHY_CONTEXT_KEY] = {}),
      "getSmithyContext",
    );
    var normalizeProvider3 = /* @__PURE__ */ __name((input) => {
      if (typeof input === "function") return input;
      const promisified = Promise.resolve(input);
      return () => promisified;
    }, "normalizeProvider");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/getSmithyContext.js
var import_types, getSmithyContext2;
var init_getSmithyContext = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/getSmithyContext.js"() {
    import_types = __toESM(require_dist_cjs());
    getSmithyContext2 = (context) =>
      context[import_types.SMITHY_CONTEXT_KEY] || (context[import_types.SMITHY_CONTEXT_KEY] = {});
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/resolveAuthOptions.js
var resolveAuthOptions;
var init_resolveAuthOptions = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/resolveAuthOptions.js"() {
    resolveAuthOptions = (candidateAuthOptions, authSchemePreference) => {
      if (!authSchemePreference || authSchemePreference.length === 0) {
        return candidateAuthOptions;
      }
      const preferredAuthOptions = [];
      for (const preferredSchemeName of authSchemePreference) {
        for (const candidateAuthOption of candidateAuthOptions) {
          const candidateAuthSchemeName = candidateAuthOption.schemeId.split("#")[1];
          if (candidateAuthSchemeName === preferredSchemeName) {
            preferredAuthOptions.push(candidateAuthOption);
          }
        }
      }
      for (const candidateAuthOption of candidateAuthOptions) {
        if (!preferredAuthOptions.find(({ schemeId }) => schemeId === candidateAuthOption.schemeId)) {
          preferredAuthOptions.push(candidateAuthOption);
        }
      }
      return preferredAuthOptions;
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
function convertHttpAuthSchemesToMap(httpAuthSchemes) {
  const map = /* @__PURE__ */ new Map();
  for (const scheme of httpAuthSchemes) {
    map.set(scheme.schemeId, scheme);
  }
  return map;
}
var import_types2, import_util_middleware2, httpAuthSchemeMiddleware;
var init_httpAuthSchemeMiddleware = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js"() {
    import_types2 = __toESM(require_dist_cjs());
    import_util_middleware2 = __toESM(require_dist_cjs2());
    init_resolveAuthOptions();
    httpAuthSchemeMiddleware = (config, mwOptions) => (next, context) => async (args) => {
      const options = config.httpAuthSchemeProvider(
        await mwOptions.httpAuthSchemeParametersProvider(config, context, args.input),
      );
      const authSchemePreference = config.authSchemePreference ? await config.authSchemePreference() : [];
      const resolvedOptions = resolveAuthOptions(options, authSchemePreference);
      const authSchemes = convertHttpAuthSchemesToMap(config.httpAuthSchemes);
      const smithyContext = (0, import_util_middleware2.getSmithyContext)(context);
      const failureReasons = [];
      for (const option of resolvedOptions) {
        const scheme = authSchemes.get(option.schemeId);
        if (!scheme) {
          failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
          continue;
        }
        const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config));
        if (!identityProvider) {
          failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
          continue;
        }
        const { identityProperties = {}, signingProperties = {} } = option.propertiesExtractor?.(config, context) || {};
        option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
        option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
        smithyContext.selectedHttpAuthScheme = {
          httpAuthOption: option,
          identity: await identityProvider(option.identityProperties),
          signer: scheme.signer,
        };
        break;
      }
      if (!smithyContext.selectedHttpAuthScheme) {
        throw new Error(failureReasons.join("\n"));
      }
      return next(args);
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js
var httpAuthSchemeEndpointRuleSetMiddlewareOptions, getHttpAuthSchemeEndpointRuleSetPlugin;
var init_getHttpAuthSchemeEndpointRuleSetPlugin = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js"() {
    init_httpAuthSchemeMiddleware();
    httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
      step: "serialize",
      tags: ["HTTP_AUTH_SCHEME"],
      name: "httpAuthSchemeMiddleware",
      override: true,
      relation: "before",
      toMiddleware: "endpointV2Middleware",
    };
    getHttpAuthSchemeEndpointRuleSetPlugin = (
      config,
      { httpAuthSchemeParametersProvider, identityProviderConfigProvider },
    ) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(
          httpAuthSchemeMiddleware(config, {
            httpAuthSchemeParametersProvider,
            identityProviderConfigProvider,
          }),
          httpAuthSchemeEndpointRuleSetMiddlewareOptions,
        );
      },
    });
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/protocol-http/dist-cjs/index.js
var require_dist_cjs3 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/protocol-http/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      Field: () => Field,
      Fields: () => Fields,
      HttpRequest: () => HttpRequest10,
      HttpResponse: () => HttpResponse4,
      IHttpRequest: () => import_types5.HttpRequest,
      getHttpHandlerExtensionConfiguration: () => getHttpHandlerExtensionConfiguration2,
      isValidHostname: () => isValidHostname,
      resolveHttpHandlerRuntimeConfig: () => resolveHttpHandlerRuntimeConfig2,
    });
    module2.exports = __toCommonJS2(src_exports);
    var getHttpHandlerExtensionConfiguration2 = /* @__PURE__ */ __name((runtimeConfig) => {
      return {
        setHttpHandler(handler) {
          runtimeConfig.httpHandler = handler;
        },
        httpHandler() {
          return runtimeConfig.httpHandler;
        },
        updateHttpClientConfig(key, value) {
          runtimeConfig.httpHandler?.updateHttpClientConfig(key, value);
        },
        httpHandlerConfigs() {
          return runtimeConfig.httpHandler.httpHandlerConfigs();
        },
      };
    }, "getHttpHandlerExtensionConfiguration");
    var resolveHttpHandlerRuntimeConfig2 = /* @__PURE__ */ __name((httpHandlerExtensionConfiguration) => {
      return {
        httpHandler: httpHandlerExtensionConfiguration.httpHandler(),
      };
    }, "resolveHttpHandlerRuntimeConfig");
    var import_types5 = require_dist_cjs();
    var _a;
    var Field =
      ((_a = class {
        constructor({ name, kind = import_types5.FieldPosition.HEADER, values = [] }) {
          this.name = name;
          this.kind = kind;
          this.values = values;
        }
        /**
         * Appends a value to the field.
         *
         * @param value The value to append.
         */
        add(value) {
          this.values.push(value);
        }
        /**
         * Overwrite existing field values.
         *
         * @param values The new field values.
         */
        set(values) {
          this.values = values;
        }
        /**
         * Remove all matching entries from list.
         *
         * @param value Value to remove.
         */
        remove(value) {
          this.values = this.values.filter((v) => v !== value);
        }
        /**
         * Get comma-delimited string.
         *
         * @returns String representation of {@link Field}.
         */
        toString() {
          return this.values.map((v) => (v.includes(",") || v.includes(" ") ? `"${v}"` : v)).join(", ");
        }
        /**
         * Get string values as a list
         *
         * @returns Values in {@link Field} as a list.
         */
        get() {
          return this.values;
        }
      }),
      __name(_a, "Field"),
      _a);
    var _a2;
    var Fields =
      ((_a2 = class {
        constructor({ fields = [], encoding = "utf-8" }) {
          this.entries = {};
          fields.forEach(this.setField.bind(this));
          this.encoding = encoding;
        }
        /**
         * Set entry for a {@link Field} name. The `name`
         * attribute will be used to key the collection.
         *
         * @param field The {@link Field} to set.
         */
        setField(field) {
          this.entries[field.name.toLowerCase()] = field;
        }
        /**
         *  Retrieve {@link Field} entry by name.
         *
         * @param name The name of the {@link Field} entry
         *  to retrieve
         * @returns The {@link Field} if it exists.
         */
        getField(name) {
          return this.entries[name.toLowerCase()];
        }
        /**
         * Delete entry from collection.
         *
         * @param name Name of the entry to delete.
         */
        removeField(name) {
          delete this.entries[name.toLowerCase()];
        }
        /**
         * Helper function for retrieving specific types of fields.
         * Used to grab all headers or all trailers.
         *
         * @param kind {@link FieldPosition} of entries to retrieve.
         * @returns The {@link Field} entries with the specified
         *  {@link FieldPosition}.
         */
        getByType(kind) {
          return Object.values(this.entries).filter((field) => field.kind === kind);
        }
      }),
      __name(_a2, "Fields"),
      _a2);
    var _a3;
    var HttpRequest10 =
      ((_a3 = class {
        constructor(options) {
          this.method = options.method || "GET";
          this.hostname = options.hostname || "localhost";
          this.port = options.port;
          this.query = options.query || {};
          this.headers = options.headers || {};
          this.body = options.body;
          this.protocol = options.protocol
            ? options.protocol.slice(-1) !== ":"
              ? `${options.protocol}:`
              : options.protocol
            : "https:";
          this.path = options.path ? (options.path.charAt(0) !== "/" ? `/${options.path}` : options.path) : "/";
          this.username = options.username;
          this.password = options.password;
          this.fragment = options.fragment;
        }
        /**
         * Note: this does not deep-clone the body.
         */
        static clone(request) {
          const cloned = new _a3({
            ...request,
            headers: { ...request.headers },
          });
          if (cloned.query) {
            cloned.query = cloneQuery(cloned.query);
          }
          return cloned;
        }
        /**
         * This method only actually asserts that request is the interface {@link IHttpRequest},
         * and not necessarily this concrete class. Left in place for API stability.
         *
         * Do not call instance methods on the input of this function, and
         * do not assume it has the HttpRequest prototype.
         */
        static isInstance(request) {
          if (!request) {
            return false;
          }
          const req = request;
          return (
            "method" in req &&
            "protocol" in req &&
            "hostname" in req &&
            "path" in req &&
            typeof req["query"] === "object" &&
            typeof req["headers"] === "object"
          );
        }
        /**
         * @deprecated use static HttpRequest.clone(request) instead. It's not safe to call
         * this method because {@link HttpRequest.isInstance} incorrectly
         * asserts that IHttpRequest (interface) objects are of type HttpRequest (class).
         */
        clone() {
          return _a3.clone(this);
        }
      }),
      __name(_a3, "HttpRequest"),
      _a3);
    function cloneQuery(query) {
      return Object.keys(query).reduce((carry, paramName) => {
        const param = query[paramName];
        return {
          ...carry,
          [paramName]: Array.isArray(param) ? [...param] : param,
        };
      }, {});
    }
    __name(cloneQuery, "cloneQuery");
    var _a4;
    var HttpResponse4 =
      ((_a4 = class {
        constructor(options) {
          this.statusCode = options.statusCode;
          this.reason = options.reason;
          this.headers = options.headers || {};
          this.body = options.body;
        }
        static isInstance(response) {
          if (!response) return false;
          const resp = response;
          return typeof resp.statusCode === "number" && typeof resp.headers === "object";
        }
      }),
      __name(_a4, "HttpResponse"),
      _a4);
    function isValidHostname(hostname) {
      const hostPattern = /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/;
      return hostPattern.test(hostname);
    }
    __name(isValidHostname, "isValidHostname");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-serde/dist-cjs/index.js
var require_dist_cjs4 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-serde/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      deserializerMiddleware: () => deserializerMiddleware,
      deserializerMiddlewareOption: () => deserializerMiddlewareOption,
      getSerdePlugin: () => getSerdePlugin5,
      serializerMiddleware: () => serializerMiddleware,
      serializerMiddlewareOption: () => serializerMiddlewareOption2,
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_protocol_http13 = require_dist_cjs3();
    var deserializerMiddleware = /* @__PURE__ */ __name(
      (options, deserializer) => (next, context) => async (args) => {
        const { response } = await next(args);
        try {
          const parsed = await deserializer(response, options);
          return {
            response,
            output: parsed,
          };
        } catch (error) {
          Object.defineProperty(error, "$response", {
            value: response,
          });
          if (!("$metadata" in error)) {
            const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
            try {
              error.message += "\n  " + hint;
            } catch (e) {
              if (!context.logger || context.logger?.constructor?.name === "NoOpLogger") {
                console.warn(hint);
              } else {
                context.logger?.warn?.(hint);
              }
            }
            if (typeof error.$responseBodyText !== "undefined") {
              if (error.$response) {
                error.$response.body = error.$responseBodyText;
              }
            }
            try {
              if (import_protocol_http13.HttpResponse.isInstance(response)) {
                const { headers = {} } = response;
                const headerEntries = Object.entries(headers);
                error.$metadata = {
                  httpStatusCode: response.statusCode,
                  requestId: findHeader(/^x-[\w-]+-request-?id$/, headerEntries),
                  extendedRequestId: findHeader(/^x-[\w-]+-id-2$/, headerEntries),
                  cfId: findHeader(/^x-[\w-]+-cf-id$/, headerEntries),
                };
              }
            } catch (e) {}
          }
          throw error;
        }
      },
      "deserializerMiddleware",
    );
    var findHeader = /* @__PURE__ */ __name((pattern, headers) => {
      return (headers.find(([k]) => {
        return k.match(pattern);
      }) || [void 0, void 0])[1];
    }, "findHeader");
    var serializerMiddleware = /* @__PURE__ */ __name(
      (options, serializer) => (next, context) => async (args) => {
        const endpointConfig = options;
        const endpoint =
          context.endpointV2?.url && endpointConfig.urlParser
            ? async () => endpointConfig.urlParser(context.endpointV2.url)
            : endpointConfig.endpoint;
        if (!endpoint) {
          throw new Error("No valid endpoint provider available.");
        }
        const request = await serializer(args.input, { ...options, endpoint });
        return next({
          ...args,
          request,
        });
      },
      "serializerMiddleware",
    );
    var deserializerMiddlewareOption = {
      name: "deserializerMiddleware",
      step: "deserialize",
      tags: ["DESERIALIZER"],
      override: true,
    };
    var serializerMiddlewareOption2 = {
      name: "serializerMiddleware",
      step: "serialize",
      tags: ["SERIALIZER"],
      override: true,
    };
    function getSerdePlugin5(config, serializer, deserializer) {
      return {
        applyToStack: (commandStack) => {
          commandStack.add(deserializerMiddleware(config, deserializer), deserializerMiddlewareOption);
          commandStack.add(serializerMiddleware(config, serializer), serializerMiddlewareOption2);
        },
      };
    }
    __name(getSerdePlugin5, "getSerdePlugin");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js
var import_middleware_serde, httpAuthSchemeMiddlewareOptions, getHttpAuthSchemePlugin;
var init_getHttpAuthSchemePlugin = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js"() {
    import_middleware_serde = __toESM(require_dist_cjs4());
    init_httpAuthSchemeMiddleware();
    httpAuthSchemeMiddlewareOptions = {
      step: "serialize",
      tags: ["HTTP_AUTH_SCHEME"],
      name: "httpAuthSchemeMiddleware",
      override: true,
      relation: "before",
      toMiddleware: import_middleware_serde.serializerMiddlewareOption.name,
    };
    getHttpAuthSchemePlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(
          httpAuthSchemeMiddleware(config, {
            httpAuthSchemeParametersProvider,
            identityProviderConfigProvider,
          }),
          httpAuthSchemeMiddlewareOptions,
        );
      },
    });
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js
var init_middleware_http_auth_scheme = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js"() {
    init_httpAuthSchemeMiddleware();
    init_getHttpAuthSchemeEndpointRuleSetPlugin();
    init_getHttpAuthSchemePlugin();
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js
var import_protocol_http,
  import_types3,
  import_util_middleware3,
  defaultErrorHandler,
  defaultSuccessHandler,
  httpSigningMiddleware;
var init_httpSigningMiddleware = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js"() {
    import_protocol_http = __toESM(require_dist_cjs3());
    import_types3 = __toESM(require_dist_cjs());
    import_util_middleware3 = __toESM(require_dist_cjs2());
    defaultErrorHandler = (signingProperties) => (error) => {
      throw error;
    };
    defaultSuccessHandler = (httpResponse, signingProperties) => {};
    httpSigningMiddleware = (config) => (next, context) => async (args) => {
      if (!import_protocol_http.HttpRequest.isInstance(args.request)) {
        return next(args);
      }
      const smithyContext = (0, import_util_middleware3.getSmithyContext)(context);
      const scheme = smithyContext.selectedHttpAuthScheme;
      if (!scheme) {
        throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
      }
      const {
        httpAuthOption: { signingProperties = {} },
        identity,
        signer,
      } = scheme;
      const output = await next({
        ...args,
        request: await signer.sign(args.request, identity, signingProperties),
      }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
      (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
      return output;
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js
var httpSigningMiddlewareOptions, getHttpSigningPlugin;
var init_getHttpSigningMiddleware = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js"() {
    init_httpSigningMiddleware();
    httpSigningMiddlewareOptions = {
      step: "finalizeRequest",
      tags: ["HTTP_SIGNING"],
      name: "httpSigningMiddleware",
      aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
      override: true,
      relation: "after",
      toMiddleware: "retryMiddleware",
    };
    getHttpSigningPlugin = (config) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(httpSigningMiddleware(config), httpSigningMiddlewareOptions);
      },
    });
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/middleware-http-signing/index.js
var init_middleware_http_signing = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/middleware-http-signing/index.js"() {
    init_httpSigningMiddleware();
    init_getHttpSigningMiddleware();
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/normalizeProvider.js
var normalizeProvider2;
var init_normalizeProvider = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/normalizeProvider.js"() {
    normalizeProvider2 = (input) => {
      if (typeof input === "function") return input;
      const promisified = Promise.resolve(input);
      return () => promisified;
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/pagination/createPaginator.js
function createPaginator(ClientCtor, CommandCtor, inputTokenName, outputTokenName, pageSizeTokenName) {
  return async function* paginateOperation(config, input, ...additionalArguments) {
    const _input = input;
    let token = config.startingToken ?? _input[inputTokenName];
    let hasNext = true;
    let page;
    while (hasNext) {
      _input[inputTokenName] = token;
      if (pageSizeTokenName) {
        _input[pageSizeTokenName] = _input[pageSizeTokenName] ?? config.pageSize;
      }
      if (config.client instanceof ClientCtor) {
        page = await makePagedClientRequest(
          CommandCtor,
          config.client,
          input,
          config.withCommand,
          ...additionalArguments,
        );
      } else {
        throw new Error(`Invalid client, expected instance of ${ClientCtor.name}`);
      }
      yield page;
      const prevToken = token;
      token = get(page, outputTokenName);
      hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return void 0;
  };
}
var makePagedClientRequest, get;
var init_createPaginator = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/pagination/createPaginator.js"() {
    makePagedClientRequest = async (CommandCtor, client, input, withCommand = (_) => _, ...args) => {
      let command = new CommandCtor(input);
      command = withCommand(command) ?? command;
      return await client.send(command, ...args);
    };
    get = (fromObject, path) => {
      let cursor = fromObject;
      const pathComponents = path.split(".");
      for (const step of pathComponents) {
        if (!cursor || typeof cursor !== "object") {
          return void 0;
        }
        cursor = cursor[step];
      }
      return cursor;
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/is-array-buffer/dist-cjs/index.js
var require_dist_cjs5 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/is-array-buffer/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      isArrayBuffer: () => isArrayBuffer,
    });
    module2.exports = __toCommonJS2(src_exports);
    var isArrayBuffer = /* @__PURE__ */ __name(
      (arg) =>
        (typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer) ||
        Object.prototype.toString.call(arg) === "[object ArrayBuffer]",
      "isArrayBuffer",
    );
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-buffer-from/dist-cjs/index.js
var require_dist_cjs6 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-buffer-from/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      fromArrayBuffer: () => fromArrayBuffer,
      fromString: () => fromString,
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_is_array_buffer = require_dist_cjs5();
    var import_buffer = require("buffer");
    var fromArrayBuffer = /* @__PURE__ */ __name((input, offset = 0, length = input.byteLength - offset) => {
      if (!(0, import_is_array_buffer.isArrayBuffer)(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
      }
      return import_buffer.Buffer.from(input, offset, length);
    }, "fromArrayBuffer");
    var fromString = /* @__PURE__ */ __name((input, encoding) => {
      if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
      }
      return encoding ? import_buffer.Buffer.from(input, encoding) : import_buffer.Buffer.from(input);
    }, "fromString");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-base64/dist-cjs/fromBase64.js
var require_fromBase64 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-base64/dist-cjs/fromBase64.js"(
    exports2,
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fromBase64 = void 0;
    var util_buffer_from_1 = require_dist_cjs6();
    var BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;
    var fromBase646 = (input) => {
      if ((input.length * 3) % 4 !== 0) {
        throw new TypeError(`Incorrect padding on base64 string.`);
      }
      if (!BASE64_REGEX.exec(input)) {
        throw new TypeError(`Invalid base64 string.`);
      }
      const buffer = (0, util_buffer_from_1.fromString)(input, "base64");
      return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    };
    exports2.fromBase64 = fromBase646;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-utf8/dist-cjs/index.js
var require_dist_cjs7 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-utf8/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      fromUtf8: () => fromUtf83,
      toUint8Array: () => toUint8Array,
      toUtf8: () => toUtf85,
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_util_buffer_from = require_dist_cjs6();
    var fromUtf83 = /* @__PURE__ */ __name((input) => {
      const buf = (0, import_util_buffer_from.fromString)(input, "utf8");
      return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }, "fromUtf8");
    var toUint8Array = /* @__PURE__ */ __name((data) => {
      if (typeof data === "string") {
        return fromUtf83(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    }, "toUint8Array");
    var toUtf85 = /* @__PURE__ */ __name((input) => {
      if (typeof input === "string") {
        return input;
      }
      if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
      }
      return (0, import_util_buffer_from.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString(
        "utf8",
      );
    }, "toUtf8");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-base64/dist-cjs/toBase64.js
var require_toBase64 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-base64/dist-cjs/toBase64.js"(
    exports2,
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.toBase64 = void 0;
    var util_buffer_from_1 = require_dist_cjs6();
    var util_utf8_1 = require_dist_cjs7();
    var toBase646 = (_input) => {
      let input;
      if (typeof _input === "string") {
        input = (0, util_utf8_1.fromUtf8)(_input);
      } else {
        input = _input;
      }
      if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
      }
      return (0, util_buffer_from_1.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString(
        "base64",
      );
    };
    exports2.toBase64 = toBase646;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-base64/dist-cjs/index.js
var require_dist_cjs8 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-base64/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __reExport = (target, mod, secondTarget) => (
      __copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")
    );
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport(src_exports, require_fromBase64(), module2.exports);
    __reExport(src_exports, require_toBase64(), module2.exports);
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/checksum/ChecksumStream.js
var require_ChecksumStream = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/checksum/ChecksumStream.js"(
    exports2,
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ChecksumStream = void 0;
    var util_base64_1 = require_dist_cjs8();
    var stream_1 = require("stream");
    var ChecksumStream2 = class extends stream_1.Duplex {
      constructor({ expectedChecksum, checksum, source, checksumSourceLocation, base64Encoder }) {
        var _a, _b;
        super();
        if (typeof source.pipe === "function") {
          this.source = source;
        } else {
          throw new Error(
            `@smithy/util-stream: unsupported source type ${(_b = (_a = source === null || source === void 0 ? void 0 : source.constructor) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : source} in ChecksumStream.`,
          );
        }
        this.base64Encoder =
          base64Encoder !== null && base64Encoder !== void 0 ? base64Encoder : util_base64_1.toBase64;
        this.expectedChecksum = expectedChecksum;
        this.checksum = checksum;
        this.checksumSourceLocation = checksumSourceLocation;
        this.source.pipe(this);
      }
      _read(size) {}
      _write(chunk, encoding, callback) {
        try {
          this.checksum.update(chunk);
          this.push(chunk);
        } catch (e) {
          return callback(e);
        }
        return callback();
      }
      async _final(callback) {
        try {
          const digest = await this.checksum.digest();
          const received = this.base64Encoder(digest);
          if (this.expectedChecksum !== received) {
            return callback(
              new Error(
                `Checksum mismatch: expected "${this.expectedChecksum}" but received "${received}" in response header "${this.checksumSourceLocation}".`,
              ),
            );
          }
        } catch (e) {
          return callback(e);
        }
        this.push(null);
        return callback();
      }
    };
    exports2.ChecksumStream = ChecksumStream2;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/stream-type-check.js
var require_stream_type_check = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/stream-type-check.js"(
    exports2,
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isBlob = exports2.isReadableStream = void 0;
    var isReadableStream2 = (stream) => {
      var _a;
      return (
        typeof ReadableStream === "function" &&
        (((_a = stream === null || stream === void 0 ? void 0 : stream.constructor) === null || _a === void 0
          ? void 0
          : _a.name) === ReadableStream.name ||
          stream instanceof ReadableStream)
      );
    };
    exports2.isReadableStream = isReadableStream2;
    var isBlob2 = (blob) => {
      var _a;
      return (
        typeof Blob === "function" &&
        (((_a = blob === null || blob === void 0 ? void 0 : blob.constructor) === null || _a === void 0
          ? void 0
          : _a.name) === Blob.name ||
          blob instanceof Blob)
      );
    };
    exports2.isBlob = isBlob2;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/checksum/ChecksumStream.browser.js
var require_ChecksumStream_browser = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/checksum/ChecksumStream.browser.js"(
    exports2,
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ChecksumStream = void 0;
    var ReadableStreamRef = typeof ReadableStream === "function" ? ReadableStream : function () {};
    var ChecksumStream2 = class extends ReadableStreamRef {};
    exports2.ChecksumStream = ChecksumStream2;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/checksum/createChecksumStream.browser.js
var require_createChecksumStream_browser = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/checksum/createChecksumStream.browser.js"(
    exports2,
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createChecksumStream = void 0;
    var util_base64_1 = require_dist_cjs8();
    var stream_type_check_1 = require_stream_type_check();
    var ChecksumStream_browser_1 = require_ChecksumStream_browser();
    var createChecksumStream2 = ({ expectedChecksum, checksum, source, checksumSourceLocation, base64Encoder }) => {
      var _a, _b;
      if (!(0, stream_type_check_1.isReadableStream)(source)) {
        throw new Error(
          `@smithy/util-stream: unsupported source type ${(_b = (_a = source === null || source === void 0 ? void 0 : source.constructor) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : source} in ChecksumStream.`,
        );
      }
      const encoder = base64Encoder !== null && base64Encoder !== void 0 ? base64Encoder : util_base64_1.toBase64;
      if (typeof TransformStream !== "function") {
        throw new Error(
          "@smithy/util-stream: unable to instantiate ChecksumStream because API unavailable: ReadableStream/TransformStream.",
        );
      }
      const transform = new TransformStream({
        start() {},
        async transform(chunk, controller) {
          checksum.update(chunk);
          controller.enqueue(chunk);
        },
        async flush(controller) {
          const digest = await checksum.digest();
          const received = encoder(digest);
          if (expectedChecksum !== received) {
            const error = new Error(
              `Checksum mismatch: expected "${expectedChecksum}" but received "${received}" in response header "${checksumSourceLocation}".`,
            );
            controller.error(error);
          } else {
            controller.terminate();
          }
        },
      });
      source.pipeThrough(transform);
      const readable = transform.readable;
      Object.setPrototypeOf(readable, ChecksumStream_browser_1.ChecksumStream.prototype);
      return readable;
    };
    exports2.createChecksumStream = createChecksumStream2;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/checksum/createChecksumStream.js
var require_createChecksumStream = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/checksum/createChecksumStream.js"(
    exports2,
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createChecksumStream = createChecksumStream2;
    var stream_type_check_1 = require_stream_type_check();
    var ChecksumStream_1 = require_ChecksumStream();
    var createChecksumStream_browser_1 = require_createChecksumStream_browser();
    function createChecksumStream2(init) {
      if (typeof ReadableStream === "function" && (0, stream_type_check_1.isReadableStream)(init.source)) {
        return (0, createChecksumStream_browser_1.createChecksumStream)(init);
      }
      return new ChecksumStream_1.ChecksumStream(init);
    }
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/ByteArrayCollector.js
var require_ByteArrayCollector = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/ByteArrayCollector.js"(
    exports2,
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ByteArrayCollector = void 0;
    var ByteArrayCollector = class {
      constructor(allocByteArray) {
        this.allocByteArray = allocByteArray;
        this.byteLength = 0;
        this.byteArrays = [];
      }
      push(byteArray) {
        this.byteArrays.push(byteArray);
        this.byteLength += byteArray.byteLength;
      }
      flush() {
        if (this.byteArrays.length === 1) {
          const bytes = this.byteArrays[0];
          this.reset();
          return bytes;
        }
        const aggregation = this.allocByteArray(this.byteLength);
        let cursor = 0;
        for (let i = 0; i < this.byteArrays.length; ++i) {
          const bytes = this.byteArrays[i];
          aggregation.set(bytes, cursor);
          cursor += bytes.byteLength;
        }
        this.reset();
        return aggregation;
      }
      reset() {
        this.byteArrays = [];
        this.byteLength = 0;
      }
    };
    exports2.ByteArrayCollector = ByteArrayCollector;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/createBufferedReadableStream.js
var require_createBufferedReadableStream = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/createBufferedReadableStream.js"(
    exports2,
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createBufferedReadable = void 0;
    exports2.createBufferedReadableStream = createBufferedReadableStream;
    exports2.merge = merge;
    exports2.flush = flush;
    exports2.sizeOf = sizeOf;
    exports2.modeOf = modeOf;
    var ByteArrayCollector_1 = require_ByteArrayCollector();
    function createBufferedReadableStream(upstream, size, logger3) {
      const reader = upstream.getReader();
      let streamBufferingLoggedWarning = false;
      let bytesSeen = 0;
      const buffers = ["", new ByteArrayCollector_1.ByteArrayCollector((size2) => new Uint8Array(size2))];
      let mode = -1;
      const pull = async (controller) => {
        const { value, done } = await reader.read();
        const chunk = value;
        if (done) {
          if (mode !== -1) {
            const remainder = flush(buffers, mode);
            if (sizeOf(remainder) > 0) {
              controller.enqueue(remainder);
            }
          }
          controller.close();
        } else {
          const chunkMode = modeOf(chunk, false);
          if (mode !== chunkMode) {
            if (mode >= 0) {
              controller.enqueue(flush(buffers, mode));
            }
            mode = chunkMode;
          }
          if (mode === -1) {
            controller.enqueue(chunk);
            return;
          }
          const chunkSize = sizeOf(chunk);
          bytesSeen += chunkSize;
          const bufferSize = sizeOf(buffers[mode]);
          if (chunkSize >= size && bufferSize === 0) {
            controller.enqueue(chunk);
          } else {
            const newSize = merge(buffers, mode, chunk);
            if (!streamBufferingLoggedWarning && bytesSeen > size * 2) {
              streamBufferingLoggedWarning = true;
              logger3 === null || logger3 === void 0
                ? void 0
                : logger3.warn(
                    `@smithy/util-stream - stream chunk size ${chunkSize} is below threshold of ${size}, automatically buffering.`,
                  );
            }
            if (newSize >= size) {
              controller.enqueue(flush(buffers, mode));
            } else {
              await pull(controller);
            }
          }
        }
      };
      return new ReadableStream({
        pull,
      });
    }
    exports2.createBufferedReadable = createBufferedReadableStream;
    function merge(buffers, mode, chunk) {
      switch (mode) {
        case 0:
          buffers[0] += chunk;
          return sizeOf(buffers[0]);
        case 1:
        case 2:
          buffers[mode].push(chunk);
          return sizeOf(buffers[mode]);
      }
    }
    function flush(buffers, mode) {
      switch (mode) {
        case 0:
          const s = buffers[0];
          buffers[0] = "";
          return s;
        case 1:
        case 2:
          return buffers[mode].flush();
      }
      throw new Error(`@smithy/util-stream - invalid index ${mode} given to flush()`);
    }
    function sizeOf(chunk) {
      var _a, _b;
      return (_b =
        (_a = chunk === null || chunk === void 0 ? void 0 : chunk.byteLength) !== null && _a !== void 0
          ? _a
          : chunk === null || chunk === void 0
            ? void 0
            : chunk.length) !== null && _b !== void 0
        ? _b
        : 0;
    }
    function modeOf(chunk, allowBuffer = true) {
      if (allowBuffer && typeof Buffer !== "undefined" && chunk instanceof Buffer) {
        return 2;
      }
      if (chunk instanceof Uint8Array) {
        return 1;
      }
      if (typeof chunk === "string") {
        return 0;
      }
      return -1;
    }
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/createBufferedReadable.js
var require_createBufferedReadable = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/createBufferedReadable.js"(
    exports2,
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createBufferedReadable = createBufferedReadable2;
    var node_stream_1 = require("node:stream");
    var ByteArrayCollector_1 = require_ByteArrayCollector();
    var createBufferedReadableStream_1 = require_createBufferedReadableStream();
    var stream_type_check_1 = require_stream_type_check();
    function createBufferedReadable2(upstream, size, logger3) {
      if ((0, stream_type_check_1.isReadableStream)(upstream)) {
        return (0, createBufferedReadableStream_1.createBufferedReadableStream)(upstream, size, logger3);
      }
      const downstream = new node_stream_1.Readable({ read() {} });
      let streamBufferingLoggedWarning = false;
      let bytesSeen = 0;
      const buffers = [
        "",
        new ByteArrayCollector_1.ByteArrayCollector((size2) => new Uint8Array(size2)),
        new ByteArrayCollector_1.ByteArrayCollector((size2) => Buffer.from(new Uint8Array(size2))),
      ];
      let mode = -1;
      upstream.on("data", (chunk) => {
        const chunkMode = (0, createBufferedReadableStream_1.modeOf)(chunk, true);
        if (mode !== chunkMode) {
          if (mode >= 0) {
            downstream.push((0, createBufferedReadableStream_1.flush)(buffers, mode));
          }
          mode = chunkMode;
        }
        if (mode === -1) {
          downstream.push(chunk);
          return;
        }
        const chunkSize = (0, createBufferedReadableStream_1.sizeOf)(chunk);
        bytesSeen += chunkSize;
        const bufferSize = (0, createBufferedReadableStream_1.sizeOf)(buffers[mode]);
        if (chunkSize >= size && bufferSize === 0) {
          downstream.push(chunk);
        } else {
          const newSize = (0, createBufferedReadableStream_1.merge)(buffers, mode, chunk);
          if (!streamBufferingLoggedWarning && bytesSeen > size * 2) {
            streamBufferingLoggedWarning = true;
            logger3 === null || logger3 === void 0
              ? void 0
              : logger3.warn(
                  `@smithy/util-stream - stream chunk size ${chunkSize} is below threshold of ${size}, automatically buffering.`,
                );
          }
          if (newSize >= size) {
            downstream.push((0, createBufferedReadableStream_1.flush)(buffers, mode));
          }
        }
      });
      upstream.on("end", () => {
        if (mode !== -1) {
          const remainder = (0, createBufferedReadableStream_1.flush)(buffers, mode);
          if ((0, createBufferedReadableStream_1.sizeOf)(remainder) > 0) {
            downstream.push(remainder);
          }
        }
        downstream.push(null);
      });
      return downstream;
    }
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/getAwsChunkedEncodingStream.js
var require_getAwsChunkedEncodingStream = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/getAwsChunkedEncodingStream.js"(
    exports2,
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getAwsChunkedEncodingStream = void 0;
    var stream_1 = require("stream");
    var getAwsChunkedEncodingStream2 = (readableStream, options) => {
      const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;
      const checksumRequired =
        base64Encoder !== void 0 &&
        checksumAlgorithmFn !== void 0 &&
        checksumLocationName !== void 0 &&
        streamHasher !== void 0;
      const digest = checksumRequired ? streamHasher(checksumAlgorithmFn, readableStream) : void 0;
      const awsChunkedEncodingStream = new stream_1.Readable({ read: () => {} });
      readableStream.on("data", (data) => {
        const length = bodyLengthChecker(data) || 0;
        awsChunkedEncodingStream.push(`${length.toString(16)}\r
`);
        awsChunkedEncodingStream.push(data);
        awsChunkedEncodingStream.push("\r\n");
      });
      readableStream.on("end", async () => {
        awsChunkedEncodingStream.push(`0\r
`);
        if (checksumRequired) {
          const checksum = base64Encoder(await digest);
          awsChunkedEncodingStream.push(`${checksumLocationName}:${checksum}\r
`);
          awsChunkedEncodingStream.push(`\r
`);
        }
        awsChunkedEncodingStream.push(null);
      });
      return awsChunkedEncodingStream;
    };
    exports2.getAwsChunkedEncodingStream = getAwsChunkedEncodingStream2;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/headStream.browser.js
var require_headStream_browser = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/headStream.browser.js"(
    exports2,
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.headStream = headStream2;
    async function headStream2(stream, bytes) {
      var _a;
      let byteLengthCounter = 0;
      const chunks = [];
      const reader = stream.getReader();
      let isDone = false;
      while (!isDone) {
        const { done, value } = await reader.read();
        if (value) {
          chunks.push(value);
          byteLengthCounter +=
            (_a = value === null || value === void 0 ? void 0 : value.byteLength) !== null && _a !== void 0 ? _a : 0;
        }
        if (byteLengthCounter >= bytes) {
          break;
        }
        isDone = done;
      }
      reader.releaseLock();
      const collected = new Uint8Array(Math.min(bytes, byteLengthCounter));
      let offset = 0;
      for (const chunk of chunks) {
        if (chunk.byteLength > collected.byteLength - offset) {
          collected.set(chunk.subarray(0, collected.byteLength - offset), offset);
          break;
        } else {
          collected.set(chunk, offset);
        }
        offset += chunk.length;
      }
      return collected;
    }
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/headStream.js
var require_headStream = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/headStream.js"(
    exports2,
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.headStream = void 0;
    var stream_1 = require("stream");
    var headStream_browser_1 = require_headStream_browser();
    var stream_type_check_1 = require_stream_type_check();
    var headStream2 = (stream, bytes) => {
      if ((0, stream_type_check_1.isReadableStream)(stream)) {
        return (0, headStream_browser_1.headStream)(stream, bytes);
      }
      return new Promise((resolve, reject) => {
        const collector = new Collector();
        collector.limit = bytes;
        stream.pipe(collector);
        stream.on("error", (err) => {
          collector.end();
          reject(err);
        });
        collector.on("error", reject);
        collector.on("finish", function () {
          const bytes2 = new Uint8Array(Buffer.concat(this.buffers));
          resolve(bytes2);
        });
      });
    };
    exports2.headStream = headStream2;
    var Collector = class extends stream_1.Writable {
      constructor() {
        super(...arguments);
        this.buffers = [];
        this.limit = Infinity;
        this.bytesBuffered = 0;
      }
      _write(chunk, encoding, callback) {
        var _a;
        this.buffers.push(chunk);
        this.bytesBuffered += (_a = chunk.byteLength) !== null && _a !== void 0 ? _a : 0;
        if (this.bytesBuffered >= this.limit) {
          const excess = this.bytesBuffered - this.limit;
          const tailBuffer = this.buffers[this.buffers.length - 1];
          this.buffers[this.buffers.length - 1] = tailBuffer.subarray(0, tailBuffer.byteLength - excess);
          this.emit("finish");
        }
        callback();
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-uri-escape/dist-cjs/index.js
var require_dist_cjs9 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-uri-escape/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      escapeUri: () => escapeUri,
      escapeUriPath: () => escapeUriPath,
    });
    module2.exports = __toCommonJS2(src_exports);
    var escapeUri = /* @__PURE__ */ __name(
      (uri) =>
        // AWS percent-encodes some extra non-standard characters in a URI
        encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode),
      "escapeUri",
    );
    var hexEncode = /* @__PURE__ */ __name((c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode");
    var escapeUriPath = /* @__PURE__ */ __name((uri) => uri.split("/").map(escapeUri).join("/"), "escapeUriPath");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/querystring-builder/dist-cjs/index.js
var require_dist_cjs10 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/querystring-builder/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      buildQueryString: () => buildQueryString,
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_util_uri_escape = require_dist_cjs9();
    function buildQueryString(query) {
      const parts = [];
      for (let key of Object.keys(query).sort()) {
        const value = query[key];
        key = (0, import_util_uri_escape.escapeUri)(key);
        if (Array.isArray(value)) {
          for (let i = 0, iLen = value.length; i < iLen; i++) {
            parts.push(`${key}=${(0, import_util_uri_escape.escapeUri)(value[i])}`);
          }
        } else {
          let qsEntry = key;
          if (value || typeof value === "string") {
            qsEntry += `=${(0, import_util_uri_escape.escapeUri)(value)}`;
          }
          parts.push(qsEntry);
        }
      }
      return parts.join("&");
    }
    __name(buildQueryString, "buildQueryString");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/node-http-handler/dist-cjs/index.js
var require_dist_cjs11 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/node-http-handler/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (
      (target = mod != null ? __create2(__getProtoOf2(mod)) : {}),
      __copyProps2(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule
          ? __defProp2(target, "default", { value: mod, enumerable: true })
          : target,
        mod,
      )
    );
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      DEFAULT_REQUEST_TIMEOUT: () => DEFAULT_REQUEST_TIMEOUT,
      NodeHttp2Handler: () => NodeHttp2Handler,
      NodeHttpHandler: () => NodeHttpHandler,
      streamCollector: () => streamCollector2,
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_protocol_http13 = require_dist_cjs3();
    var import_querystring_builder = require_dist_cjs10();
    var import_http = require("http");
    var import_https = require("https");
    var NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];
    var getTransformedHeaders = /* @__PURE__ */ __name((headers) => {
      const transformedHeaders = {};
      for (const name of Object.keys(headers)) {
        const headerValues = headers[name];
        transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
      }
      return transformedHeaders;
    }, "getTransformedHeaders");
    var timing = {
      setTimeout: (cb, ms) => setTimeout(cb, ms),
      clearTimeout: (timeoutId) => clearTimeout(timeoutId),
    };
    var DEFER_EVENT_LISTENER_TIME = 1e3;
    var setConnectionTimeout = /* @__PURE__ */ __name((request, reject, timeoutInMs = 0) => {
      if (!timeoutInMs) {
        return -1;
      }
      const registerTimeout = /* @__PURE__ */ __name((offset) => {
        const timeoutId = timing.setTimeout(() => {
          request.destroy();
          reject(
            Object.assign(new Error(`Socket timed out without establishing a connection within ${timeoutInMs} ms`), {
              name: "TimeoutError",
            }),
          );
        }, timeoutInMs - offset);
        const doWithSocket = /* @__PURE__ */ __name((socket) => {
          if (socket?.connecting) {
            socket.on("connect", () => {
              timing.clearTimeout(timeoutId);
            });
          } else {
            timing.clearTimeout(timeoutId);
          }
        }, "doWithSocket");
        if (request.socket) {
          doWithSocket(request.socket);
        } else {
          request.on("socket", doWithSocket);
        }
      }, "registerTimeout");
      if (timeoutInMs < 2e3) {
        registerTimeout(0);
        return 0;
      }
      return timing.setTimeout(registerTimeout.bind(null, DEFER_EVENT_LISTENER_TIME), DEFER_EVENT_LISTENER_TIME);
    }, "setConnectionTimeout");
    var DEFER_EVENT_LISTENER_TIME2 = 3e3;
    var setSocketKeepAlive = /* @__PURE__ */ __name(
      (request, { keepAlive, keepAliveMsecs }, deferTimeMs = DEFER_EVENT_LISTENER_TIME2) => {
        if (keepAlive !== true) {
          return -1;
        }
        const registerListener = /* @__PURE__ */ __name(() => {
          if (request.socket) {
            request.socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
          } else {
            request.on("socket", (socket) => {
              socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
            });
          }
        }, "registerListener");
        if (deferTimeMs === 0) {
          registerListener();
          return 0;
        }
        return timing.setTimeout(registerListener, deferTimeMs);
      },
      "setSocketKeepAlive",
    );
    var DEFER_EVENT_LISTENER_TIME3 = 3e3;
    var setSocketTimeout = /* @__PURE__ */ __name((request, reject, timeoutInMs = DEFAULT_REQUEST_TIMEOUT) => {
      const registerTimeout = /* @__PURE__ */ __name((offset) => {
        const timeout = timeoutInMs - offset;
        const onTimeout = /* @__PURE__ */ __name(() => {
          request.destroy();
          reject(Object.assign(new Error(`Connection timed out after ${timeoutInMs} ms`), { name: "TimeoutError" }));
        }, "onTimeout");
        if (request.socket) {
          request.socket.setTimeout(timeout, onTimeout);
          request.on("close", () => request.socket?.removeListener("timeout", onTimeout));
        } else {
          request.setTimeout(timeout, onTimeout);
        }
      }, "registerTimeout");
      if (0 < timeoutInMs && timeoutInMs < 6e3) {
        registerTimeout(0);
        return 0;
      }
      return timing.setTimeout(
        registerTimeout.bind(null, timeoutInMs === 0 ? 0 : DEFER_EVENT_LISTENER_TIME3),
        DEFER_EVENT_LISTENER_TIME3,
      );
    }, "setSocketTimeout");
    var import_stream = require("stream");
    var MIN_WAIT_TIME = 6e3;
    async function writeRequestBody(httpRequest, request, maxContinueTimeoutMs = MIN_WAIT_TIME) {
      const headers = request.headers ?? {};
      const expect = headers["Expect"] || headers["expect"];
      let timeoutId = -1;
      let sendBody = true;
      if (expect === "100-continue") {
        sendBody = await Promise.race([
          new Promise((resolve) => {
            timeoutId = Number(timing.setTimeout(() => resolve(true), Math.max(MIN_WAIT_TIME, maxContinueTimeoutMs)));
          }),
          new Promise((resolve) => {
            httpRequest.on("continue", () => {
              timing.clearTimeout(timeoutId);
              resolve(true);
            });
            httpRequest.on("response", () => {
              timing.clearTimeout(timeoutId);
              resolve(false);
            });
            httpRequest.on("error", () => {
              timing.clearTimeout(timeoutId);
              resolve(false);
            });
          }),
        ]);
      }
      if (sendBody) {
        writeBody(httpRequest, request.body);
      }
    }
    __name(writeRequestBody, "writeRequestBody");
    function writeBody(httpRequest, body) {
      if (body instanceof import_stream.Readable) {
        body.pipe(httpRequest);
        return;
      }
      if (body) {
        if (Buffer.isBuffer(body) || typeof body === "string") {
          httpRequest.end(body);
          return;
        }
        const uint8 = body;
        if (
          typeof uint8 === "object" &&
          uint8.buffer &&
          typeof uint8.byteOffset === "number" &&
          typeof uint8.byteLength === "number"
        ) {
          httpRequest.end(Buffer.from(uint8.buffer, uint8.byteOffset, uint8.byteLength));
          return;
        }
        httpRequest.end(Buffer.from(body));
        return;
      }
      httpRequest.end();
    }
    __name(writeBody, "writeBody");
    var DEFAULT_REQUEST_TIMEOUT = 0;
    var _a;
    var NodeHttpHandler =
      ((_a = class {
        constructor(options) {
          this.socketWarningTimestamp = 0;
          this.metadata = { handlerProtocol: "http/1.1" };
          this.configProvider = new Promise((resolve, reject) => {
            if (typeof options === "function") {
              options()
                .then((_options) => {
                  resolve(this.resolveDefaultConfig(_options));
                })
                .catch(reject);
            } else {
              resolve(this.resolveDefaultConfig(options));
            }
          });
        }
        /**
         * @returns the input if it is an HttpHandler of any class,
         * or instantiates a new instance of this handler.
         */
        static create(instanceOrOptions) {
          if (typeof instanceOrOptions?.handle === "function") {
            return instanceOrOptions;
          }
          return new _a(instanceOrOptions);
        }
        /**
         * @internal
         *
         * @param agent - http(s) agent in use by the NodeHttpHandler instance.
         * @param socketWarningTimestamp - last socket usage check timestamp.
         * @param logger - channel for the warning.
         * @returns timestamp of last emitted warning.
         */
        static checkSocketUsage(agent, socketWarningTimestamp, logger3 = console) {
          const { sockets, requests, maxSockets } = agent;
          if (typeof maxSockets !== "number" || maxSockets === Infinity) {
            return socketWarningTimestamp;
          }
          const interval = 15e3;
          if (Date.now() - interval < socketWarningTimestamp) {
            return socketWarningTimestamp;
          }
          if (sockets && requests) {
            for (const origin in sockets) {
              const socketsInUse = sockets[origin]?.length ?? 0;
              const requestsEnqueued = requests[origin]?.length ?? 0;
              if (socketsInUse >= maxSockets && requestsEnqueued >= 2 * maxSockets) {
                logger3?.warn?.(
                  `@smithy/node-http-handler:WARN - socket usage at capacity=${socketsInUse} and ${requestsEnqueued} additional requests are enqueued.
See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html
or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`,
                );
                return Date.now();
              }
            }
          }
          return socketWarningTimestamp;
        }
        resolveDefaultConfig(options) {
          const {
            requestTimeout,
            connectionTimeout,
            socketTimeout,
            socketAcquisitionWarningTimeout,
            httpAgent,
            httpsAgent,
          } = options || {};
          const keepAlive = true;
          const maxSockets = 50;
          return {
            connectionTimeout,
            requestTimeout: requestTimeout ?? socketTimeout,
            socketAcquisitionWarningTimeout,
            httpAgent: (() => {
              if (httpAgent instanceof import_http.Agent || typeof httpAgent?.destroy === "function") {
                return httpAgent;
              }
              return new import_http.Agent({ keepAlive, maxSockets, ...httpAgent });
            })(),
            httpsAgent: (() => {
              if (httpsAgent instanceof import_https.Agent || typeof httpsAgent?.destroy === "function") {
                return httpsAgent;
              }
              return new import_https.Agent({ keepAlive, maxSockets, ...httpsAgent });
            })(),
            logger: console,
          };
        }
        destroy() {
          this.config?.httpAgent?.destroy();
          this.config?.httpsAgent?.destroy();
        }
        async handle(request, { abortSignal, requestTimeout } = {}) {
          if (!this.config) {
            this.config = await this.configProvider;
          }
          return new Promise((_resolve, _reject) => {
            let writeRequestBodyPromise = void 0;
            const timeouts = [];
            const resolve = /* @__PURE__ */ __name(async (arg) => {
              await writeRequestBodyPromise;
              timeouts.forEach(timing.clearTimeout);
              _resolve(arg);
            }, "resolve");
            const reject = /* @__PURE__ */ __name(async (arg) => {
              await writeRequestBodyPromise;
              timeouts.forEach(timing.clearTimeout);
              _reject(arg);
            }, "reject");
            if (!this.config) {
              throw new Error("Node HTTP request handler config is not resolved");
            }
            if (abortSignal?.aborted) {
              const abortError = new Error("Request aborted");
              abortError.name = "AbortError";
              reject(abortError);
              return;
            }
            const isSSL = request.protocol === "https:";
            const agent = isSSL ? this.config.httpsAgent : this.config.httpAgent;
            timeouts.push(
              timing.setTimeout(
                () => {
                  this.socketWarningTimestamp = _a.checkSocketUsage(
                    agent,
                    this.socketWarningTimestamp,
                    this.config.logger,
                  );
                },
                this.config.socketAcquisitionWarningTimeout ??
                  (this.config.requestTimeout ?? 2e3) + (this.config.connectionTimeout ?? 1e3),
              ),
            );
            const queryString = (0, import_querystring_builder.buildQueryString)(request.query || {});
            let auth = void 0;
            if (request.username != null || request.password != null) {
              const username = request.username ?? "";
              const password = request.password ?? "";
              auth = `${username}:${password}`;
            }
            let path = request.path;
            if (queryString) {
              path += `?${queryString}`;
            }
            if (request.fragment) {
              path += `#${request.fragment}`;
            }
            let hostname = request.hostname ?? "";
            if (hostname[0] === "[" && hostname.endsWith("]")) {
              hostname = request.hostname.slice(1, -1);
            } else {
              hostname = request.hostname;
            }
            const nodeHttpsOptions = {
              headers: request.headers,
              host: hostname,
              method: request.method,
              path,
              port: request.port,
              agent,
              auth,
            };
            const requestFunc = isSSL ? import_https.request : import_http.request;
            const req = requestFunc(nodeHttpsOptions, (res) => {
              const httpResponse = new import_protocol_http13.HttpResponse({
                statusCode: res.statusCode || -1,
                reason: res.statusMessage,
                headers: getTransformedHeaders(res.headers),
                body: res,
              });
              resolve({ response: httpResponse });
            });
            req.on("error", (err) => {
              if (NODEJS_TIMEOUT_ERROR_CODES.includes(err.code)) {
                reject(Object.assign(err, { name: "TimeoutError" }));
              } else {
                reject(err);
              }
            });
            if (abortSignal) {
              const onAbort = /* @__PURE__ */ __name(() => {
                req.destroy();
                const abortError = new Error("Request aborted");
                abortError.name = "AbortError";
                reject(abortError);
              }, "onAbort");
              if (typeof abortSignal.addEventListener === "function") {
                const signal = abortSignal;
                signal.addEventListener("abort", onAbort, { once: true });
                req.once("close", () => signal.removeEventListener("abort", onAbort));
              } else {
                abortSignal.onabort = onAbort;
              }
            }
            const effectiveRequestTimeout = requestTimeout ?? this.config.requestTimeout;
            timeouts.push(setConnectionTimeout(req, reject, this.config.connectionTimeout));
            timeouts.push(setSocketTimeout(req, reject, effectiveRequestTimeout));
            const httpAgent = nodeHttpsOptions.agent;
            if (typeof httpAgent === "object" && "keepAlive" in httpAgent) {
              timeouts.push(
                setSocketKeepAlive(req, {
                  // @ts-expect-error keepAlive is not public on httpAgent.
                  keepAlive: httpAgent.keepAlive,
                  // @ts-expect-error keepAliveMsecs is not public on httpAgent.
                  keepAliveMsecs: httpAgent.keepAliveMsecs,
                }),
              );
            }
            writeRequestBodyPromise = writeRequestBody(req, request, effectiveRequestTimeout).catch((e) => {
              timeouts.forEach(timing.clearTimeout);
              return _reject(e);
            });
          });
        }
        updateHttpClientConfig(key, value) {
          this.config = void 0;
          this.configProvider = this.configProvider.then((config) => {
            return {
              ...config,
              [key]: value,
            };
          });
        }
        httpHandlerConfigs() {
          return this.config ?? {};
        }
      }),
      __name(_a, "NodeHttpHandler"),
      _a);
    var import_http22 = require("http2");
    var import_http2 = __toESM2(require("http2"));
    var _a2;
    var NodeHttp2ConnectionPool =
      ((_a2 = class {
        constructor(sessions) {
          this.sessions = [];
          this.sessions = sessions ?? [];
        }
        poll() {
          if (this.sessions.length > 0) {
            return this.sessions.shift();
          }
        }
        offerLast(session) {
          this.sessions.push(session);
        }
        contains(session) {
          return this.sessions.includes(session);
        }
        remove(session) {
          this.sessions = this.sessions.filter((s) => s !== session);
        }
        [Symbol.iterator]() {
          return this.sessions[Symbol.iterator]();
        }
        destroy(connection) {
          for (const session of this.sessions) {
            if (session === connection) {
              if (!session.destroyed) {
                session.destroy();
              }
            }
          }
        }
      }),
      __name(_a2, "NodeHttp2ConnectionPool"),
      _a2);
    var _a3;
    var NodeHttp2ConnectionManager =
      ((_a3 = class {
        constructor(config) {
          this.sessionCache = /* @__PURE__ */ new Map();
          this.config = config;
          if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) {
            throw new RangeError("maxConcurrency must be greater than zero.");
          }
        }
        lease(requestContext, connectionConfiguration) {
          const url = this.getUrlString(requestContext);
          const existingPool = this.sessionCache.get(url);
          if (existingPool) {
            const existingSession = existingPool.poll();
            if (existingSession && !this.config.disableConcurrency) {
              return existingSession;
            }
          }
          const session = import_http2.default.connect(url);
          if (this.config.maxConcurrency) {
            session.settings({ maxConcurrentStreams: this.config.maxConcurrency }, (err) => {
              if (err) {
                throw new Error(
                  "Fail to set maxConcurrentStreams to " +
                    this.config.maxConcurrency +
                    "when creating new session for " +
                    requestContext.destination.toString(),
                );
              }
            });
          }
          session.unref();
          const destroySessionCb = /* @__PURE__ */ __name(() => {
            session.destroy();
            this.deleteSession(url, session);
          }, "destroySessionCb");
          session.on("goaway", destroySessionCb);
          session.on("error", destroySessionCb);
          session.on("frameError", destroySessionCb);
          session.on("close", () => this.deleteSession(url, session));
          if (connectionConfiguration.requestTimeout) {
            session.setTimeout(connectionConfiguration.requestTimeout, destroySessionCb);
          }
          const connectionPool = this.sessionCache.get(url) || new NodeHttp2ConnectionPool();
          connectionPool.offerLast(session);
          this.sessionCache.set(url, connectionPool);
          return session;
        }
        /**
         * Delete a session from the connection pool.
         * @param authority The authority of the session to delete.
         * @param session The session to delete.
         */
        deleteSession(authority, session) {
          const existingConnectionPool = this.sessionCache.get(authority);
          if (!existingConnectionPool) {
            return;
          }
          if (!existingConnectionPool.contains(session)) {
            return;
          }
          existingConnectionPool.remove(session);
          this.sessionCache.set(authority, existingConnectionPool);
        }
        release(requestContext, session) {
          const cacheKey = this.getUrlString(requestContext);
          this.sessionCache.get(cacheKey)?.offerLast(session);
        }
        destroy() {
          for (const [key, connectionPool] of this.sessionCache) {
            for (const session of connectionPool) {
              if (!session.destroyed) {
                session.destroy();
              }
              connectionPool.remove(session);
            }
            this.sessionCache.delete(key);
          }
        }
        setMaxConcurrentStreams(maxConcurrentStreams) {
          if (maxConcurrentStreams && maxConcurrentStreams <= 0) {
            throw new RangeError("maxConcurrentStreams must be greater than zero.");
          }
          this.config.maxConcurrency = maxConcurrentStreams;
        }
        setDisableConcurrentStreams(disableConcurrentStreams) {
          this.config.disableConcurrency = disableConcurrentStreams;
        }
        getUrlString(request) {
          return request.destination.toString();
        }
      }),
      __name(_a3, "NodeHttp2ConnectionManager"),
      _a3);
    var _a4;
    var NodeHttp2Handler =
      ((_a4 = class {
        constructor(options) {
          this.metadata = { handlerProtocol: "h2" };
          this.connectionManager = new NodeHttp2ConnectionManager({});
          this.configProvider = new Promise((resolve, reject) => {
            if (typeof options === "function") {
              options()
                .then((opts) => {
                  resolve(opts || {});
                })
                .catch(reject);
            } else {
              resolve(options || {});
            }
          });
        }
        /**
         * @returns the input if it is an HttpHandler of any class,
         * or instantiates a new instance of this handler.
         */
        static create(instanceOrOptions) {
          if (typeof instanceOrOptions?.handle === "function") {
            return instanceOrOptions;
          }
          return new _a4(instanceOrOptions);
        }
        destroy() {
          this.connectionManager.destroy();
        }
        async handle(request, { abortSignal, requestTimeout } = {}) {
          if (!this.config) {
            this.config = await this.configProvider;
            this.connectionManager.setDisableConcurrentStreams(this.config.disableConcurrentStreams || false);
            if (this.config.maxConcurrentStreams) {
              this.connectionManager.setMaxConcurrentStreams(this.config.maxConcurrentStreams);
            }
          }
          const { requestTimeout: configRequestTimeout, disableConcurrentStreams } = this.config;
          const effectiveRequestTimeout = requestTimeout ?? configRequestTimeout;
          return new Promise((_resolve, _reject) => {
            let fulfilled = false;
            let writeRequestBodyPromise = void 0;
            const resolve = /* @__PURE__ */ __name(async (arg) => {
              await writeRequestBodyPromise;
              _resolve(arg);
            }, "resolve");
            const reject = /* @__PURE__ */ __name(async (arg) => {
              await writeRequestBodyPromise;
              _reject(arg);
            }, "reject");
            if (abortSignal?.aborted) {
              fulfilled = true;
              const abortError = new Error("Request aborted");
              abortError.name = "AbortError";
              reject(abortError);
              return;
            }
            const { hostname, method, port, protocol, query } = request;
            let auth = "";
            if (request.username != null || request.password != null) {
              const username = request.username ?? "";
              const password = request.password ?? "";
              auth = `${username}:${password}@`;
            }
            const authority = `${protocol}//${auth}${hostname}${port ? `:${port}` : ""}`;
            const requestContext = { destination: new URL(authority) };
            const session = this.connectionManager.lease(requestContext, {
              requestTimeout: this.config?.sessionTimeout,
              disableConcurrentStreams: disableConcurrentStreams || false,
            });
            const rejectWithDestroy = /* @__PURE__ */ __name((err) => {
              if (disableConcurrentStreams) {
                this.destroySession(session);
              }
              fulfilled = true;
              reject(err);
            }, "rejectWithDestroy");
            const queryString = (0, import_querystring_builder.buildQueryString)(query || {});
            let path = request.path;
            if (queryString) {
              path += `?${queryString}`;
            }
            if (request.fragment) {
              path += `#${request.fragment}`;
            }
            const req = session.request({
              ...request.headers,
              [import_http22.constants.HTTP2_HEADER_PATH]: path,
              [import_http22.constants.HTTP2_HEADER_METHOD]: method,
            });
            session.ref();
            req.on("response", (headers) => {
              const httpResponse = new import_protocol_http13.HttpResponse({
                statusCode: headers[":status"] || -1,
                headers: getTransformedHeaders(headers),
                body: req,
              });
              fulfilled = true;
              resolve({ response: httpResponse });
              if (disableConcurrentStreams) {
                session.close();
                this.connectionManager.deleteSession(authority, session);
              }
            });
            if (effectiveRequestTimeout) {
              req.setTimeout(effectiveRequestTimeout, () => {
                req.close();
                const timeoutError = new Error(
                  `Stream timed out because of no activity for ${effectiveRequestTimeout} ms`,
                );
                timeoutError.name = "TimeoutError";
                rejectWithDestroy(timeoutError);
              });
            }
            if (abortSignal) {
              const onAbort = /* @__PURE__ */ __name(() => {
                req.close();
                const abortError = new Error("Request aborted");
                abortError.name = "AbortError";
                rejectWithDestroy(abortError);
              }, "onAbort");
              if (typeof abortSignal.addEventListener === "function") {
                const signal = abortSignal;
                signal.addEventListener("abort", onAbort, { once: true });
                req.once("close", () => signal.removeEventListener("abort", onAbort));
              } else {
                abortSignal.onabort = onAbort;
              }
            }
            req.on("frameError", (type, code, id) => {
              rejectWithDestroy(new Error(`Frame type id ${type} in stream id ${id} has failed with code ${code}.`));
            });
            req.on("error", rejectWithDestroy);
            req.on("aborted", () => {
              rejectWithDestroy(
                new Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${req.rstCode}.`),
              );
            });
            req.on("close", () => {
              session.unref();
              if (disableConcurrentStreams) {
                session.destroy();
              }
              if (!fulfilled) {
                rejectWithDestroy(new Error("Unexpected error: http2 request did not get a response"));
              }
            });
            writeRequestBodyPromise = writeRequestBody(req, request, effectiveRequestTimeout);
          });
        }
        updateHttpClientConfig(key, value) {
          this.config = void 0;
          this.configProvider = this.configProvider.then((config) => {
            return {
              ...config,
              [key]: value,
            };
          });
        }
        httpHandlerConfigs() {
          return this.config ?? {};
        }
        /**
         * Destroys a session.
         * @param session - the session to destroy.
         */
        destroySession(session) {
          if (!session.destroyed) {
            session.destroy();
          }
        }
      }),
      __name(_a4, "NodeHttp2Handler"),
      _a4);
    var _a5;
    var Collector =
      ((_a5 = class extends import_stream.Writable {
        constructor() {
          super(...arguments);
          this.bufferedBytes = [];
        }
        _write(chunk, encoding, callback) {
          this.bufferedBytes.push(chunk);
          callback();
        }
      }),
      __name(_a5, "Collector"),
      _a5);
    var streamCollector2 = /* @__PURE__ */ __name((stream) => {
      if (isReadableStreamInstance(stream)) {
        return collectReadableStream(stream);
      }
      return new Promise((resolve, reject) => {
        const collector = new Collector();
        stream.pipe(collector);
        stream.on("error", (err) => {
          collector.end();
          reject(err);
        });
        collector.on("error", reject);
        collector.on("finish", function () {
          const bytes = new Uint8Array(Buffer.concat(this.bufferedBytes));
          resolve(bytes);
        });
      });
    }, "streamCollector");
    var isReadableStreamInstance = /* @__PURE__ */ __name(
      (stream) => typeof ReadableStream === "function" && stream instanceof ReadableStream,
      "isReadableStreamInstance",
    );
    async function collectReadableStream(stream) {
      const chunks = [];
      const reader = stream.getReader();
      let isDone = false;
      let length = 0;
      while (!isDone) {
        const { done, value } = await reader.read();
        if (value) {
          chunks.push(value);
          length += value.length;
        }
        isDone = done;
      }
      const collected = new Uint8Array(length);
      let offset = 0;
      for (const chunk of chunks) {
        collected.set(chunk, offset);
        offset += chunk.length;
      }
      return collected;
    }
    __name(collectReadableStream, "collectReadableStream");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/fetch-http-handler/dist-cjs/index.js
var require_dist_cjs12 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/fetch-http-handler/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      FetchHttpHandler: () => FetchHttpHandler,
      keepAliveSupport: () => keepAliveSupport,
      streamCollector: () => streamCollector2,
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_protocol_http13 = require_dist_cjs3();
    var import_querystring_builder = require_dist_cjs10();
    function createRequest(url, requestOptions) {
      return new Request(url, requestOptions);
    }
    __name(createRequest, "createRequest");
    function requestTimeout(timeoutInMs = 0) {
      return new Promise((resolve, reject) => {
        if (timeoutInMs) {
          setTimeout(() => {
            const timeoutError = new Error(`Request did not complete within ${timeoutInMs} ms`);
            timeoutError.name = "TimeoutError";
            reject(timeoutError);
          }, timeoutInMs);
        }
      });
    }
    __name(requestTimeout, "requestTimeout");
    var keepAliveSupport = {
      supported: void 0,
    };
    var _a;
    var FetchHttpHandler =
      ((_a = class {
        /**
         * @returns the input if it is an HttpHandler of any class,
         * or instantiates a new instance of this handler.
         */
        static create(instanceOrOptions) {
          if (typeof instanceOrOptions?.handle === "function") {
            return instanceOrOptions;
          }
          return new _a(instanceOrOptions);
        }
        constructor(options) {
          if (typeof options === "function") {
            this.configProvider = options().then((opts) => opts || {});
          } else {
            this.config = options ?? {};
            this.configProvider = Promise.resolve(this.config);
          }
          if (keepAliveSupport.supported === void 0) {
            keepAliveSupport.supported = Boolean(
              typeof Request !== "undefined" && "keepalive" in createRequest("https://[::1]"),
            );
          }
        }
        destroy() {}
        async handle(request, { abortSignal, requestTimeout: requestTimeout2 } = {}) {
          if (!this.config) {
            this.config = await this.configProvider;
          }
          const requestTimeoutInMs = requestTimeout2 ?? this.config.requestTimeout;
          const keepAlive = this.config.keepAlive === true;
          const credentials = this.config.credentials;
          if (abortSignal?.aborted) {
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            return Promise.reject(abortError);
          }
          let path = request.path;
          const queryString = (0, import_querystring_builder.buildQueryString)(request.query || {});
          if (queryString) {
            path += `?${queryString}`;
          }
          if (request.fragment) {
            path += `#${request.fragment}`;
          }
          let auth = "";
          if (request.username != null || request.password != null) {
            const username = request.username ?? "";
            const password = request.password ?? "";
            auth = `${username}:${password}@`;
          }
          const { port, method } = request;
          const url = `${request.protocol}//${auth}${request.hostname}${port ? `:${port}` : ""}${path}`;
          const body = method === "GET" || method === "HEAD" ? void 0 : request.body;
          const requestOptions = {
            body,
            headers: new Headers(request.headers),
            method,
            credentials,
          };
          if (this.config?.cache) {
            requestOptions.cache = this.config.cache;
          }
          if (body) {
            requestOptions.duplex = "half";
          }
          if (typeof AbortController !== "undefined") {
            requestOptions.signal = abortSignal;
          }
          if (keepAliveSupport.supported) {
            requestOptions.keepalive = keepAlive;
          }
          if (typeof this.config.requestInit === "function") {
            Object.assign(requestOptions, this.config.requestInit(request));
          }
          let removeSignalEventListener = /* @__PURE__ */ __name(() => {}, "removeSignalEventListener");
          const fetchRequest = createRequest(url, requestOptions);
          const raceOfPromises = [
            fetch(fetchRequest).then((response) => {
              const fetchHeaders = response.headers;
              const transformedHeaders = {};
              for (const pair of fetchHeaders.entries()) {
                transformedHeaders[pair[0]] = pair[1];
              }
              const hasReadableStream = response.body != void 0;
              if (!hasReadableStream) {
                return response.blob().then((body2) => ({
                  response: new import_protocol_http13.HttpResponse({
                    headers: transformedHeaders,
                    reason: response.statusText,
                    statusCode: response.status,
                    body: body2,
                  }),
                }));
              }
              return {
                response: new import_protocol_http13.HttpResponse({
                  headers: transformedHeaders,
                  reason: response.statusText,
                  statusCode: response.status,
                  body: response.body,
                }),
              };
            }),
            requestTimeout(requestTimeoutInMs),
          ];
          if (abortSignal) {
            raceOfPromises.push(
              new Promise((resolve, reject) => {
                const onAbort = /* @__PURE__ */ __name(() => {
                  const abortError = new Error("Request aborted");
                  abortError.name = "AbortError";
                  reject(abortError);
                }, "onAbort");
                if (typeof abortSignal.addEventListener === "function") {
                  const signal = abortSignal;
                  signal.addEventListener("abort", onAbort, { once: true });
                  removeSignalEventListener = /* @__PURE__ */ __name(
                    () => signal.removeEventListener("abort", onAbort),
                    "removeSignalEventListener",
                  );
                } else {
                  abortSignal.onabort = onAbort;
                }
              }),
            );
          }
          return Promise.race(raceOfPromises).finally(removeSignalEventListener);
        }
        updateHttpClientConfig(key, value) {
          this.config = void 0;
          this.configProvider = this.configProvider.then((config) => {
            config[key] = value;
            return config;
          });
        }
        httpHandlerConfigs() {
          return this.config ?? {};
        }
      }),
      __name(_a, "FetchHttpHandler"),
      _a);
    var import_util_base647 = require_dist_cjs8();
    var streamCollector2 = /* @__PURE__ */ __name(async (stream) => {
      if ((typeof Blob === "function" && stream instanceof Blob) || stream.constructor?.name === "Blob") {
        if (Blob.prototype.arrayBuffer !== void 0) {
          return new Uint8Array(await stream.arrayBuffer());
        }
        return collectBlob(stream);
      }
      return collectStream(stream);
    }, "streamCollector");
    async function collectBlob(blob) {
      const base64 = await readToBase64(blob);
      const arrayBuffer = (0, import_util_base647.fromBase64)(base64);
      return new Uint8Array(arrayBuffer);
    }
    __name(collectBlob, "collectBlob");
    async function collectStream(stream) {
      const chunks = [];
      const reader = stream.getReader();
      let isDone = false;
      let length = 0;
      while (!isDone) {
        const { done, value } = await reader.read();
        if (value) {
          chunks.push(value);
          length += value.length;
        }
        isDone = done;
      }
      const collected = new Uint8Array(length);
      let offset = 0;
      for (const chunk of chunks) {
        collected.set(chunk, offset);
        offset += chunk.length;
      }
      return collected;
    }
    __name(collectStream, "collectStream");
    function readToBase64(blob) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (reader.readyState !== 2) {
            return reject(new Error("Reader aborted too early"));
          }
          const result = reader.result ?? "";
          const commaIndex = result.indexOf(",");
          const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
          resolve(result.substring(dataOffset));
        };
        reader.onabort = () => reject(new Error("Read aborted"));
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(blob);
      });
    }
    __name(readToBase64, "readToBase64");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-hex-encoding/dist-cjs/index.js
var require_dist_cjs13 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-hex-encoding/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      fromHex: () => fromHex,
      toHex: () => toHex,
    });
    module2.exports = __toCommonJS2(src_exports);
    var SHORT_TO_HEX = {};
    var HEX_TO_SHORT = {};
    for (let i = 0; i < 256; i++) {
      let encodedByte = i.toString(16).toLowerCase();
      if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
      }
      SHORT_TO_HEX[i] = encodedByte;
      HEX_TO_SHORT[encodedByte] = i;
    }
    function fromHex(encoded) {
      if (encoded.length % 2 !== 0) {
        throw new Error("Hex encoded strings must have an even number length");
      }
      const out = new Uint8Array(encoded.length / 2);
      for (let i = 0; i < encoded.length; i += 2) {
        const encodedByte = encoded.slice(i, i + 2).toLowerCase();
        if (encodedByte in HEX_TO_SHORT) {
          out[i / 2] = HEX_TO_SHORT[encodedByte];
        } else {
          throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
        }
      }
      return out;
    }
    __name(fromHex, "fromHex");
    function toHex(bytes) {
      let out = "";
      for (let i = 0; i < bytes.byteLength; i++) {
        out += SHORT_TO_HEX[bytes[i]];
      }
      return out;
    }
    __name(toHex, "toHex");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/sdk-stream-mixin.browser.js
var require_sdk_stream_mixin_browser = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/sdk-stream-mixin.browser.js"(
    exports2,
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.sdkStreamMixin = void 0;
    var fetch_http_handler_1 = require_dist_cjs12();
    var util_base64_1 = require_dist_cjs8();
    var util_hex_encoding_1 = require_dist_cjs13();
    var util_utf8_1 = require_dist_cjs7();
    var stream_type_check_1 = require_stream_type_check();
    var ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
    var sdkStreamMixin3 = (stream) => {
      var _a, _b;
      if (!isBlobInstance(stream) && !(0, stream_type_check_1.isReadableStream)(stream)) {
        const name =
          ((_b =
            (_a = stream === null || stream === void 0 ? void 0 : stream.__proto__) === null || _a === void 0
              ? void 0
              : _a.constructor) === null || _b === void 0
            ? void 0
            : _b.name) || stream;
        throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${name}`);
      }
      let transformed = false;
      const transformToByteArray = async () => {
        if (transformed) {
          throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        transformed = true;
        return await (0, fetch_http_handler_1.streamCollector)(stream);
      };
      const blobToWebStream = (blob) => {
        if (typeof blob.stream !== "function") {
          throw new Error(
            "Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\nIf you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body",
          );
        }
        return blob.stream();
      };
      return Object.assign(stream, {
        transformToByteArray,
        transformToString: async (encoding) => {
          const buf = await transformToByteArray();
          if (encoding === "base64") {
            return (0, util_base64_1.toBase64)(buf);
          } else if (encoding === "hex") {
            return (0, util_hex_encoding_1.toHex)(buf);
          } else if (encoding === void 0 || encoding === "utf8" || encoding === "utf-8") {
            return (0, util_utf8_1.toUtf8)(buf);
          } else if (typeof TextDecoder === "function") {
            return new TextDecoder(encoding).decode(buf);
          } else {
            throw new Error("TextDecoder is not available, please make sure polyfill is provided.");
          }
        },
        transformToWebStream: () => {
          if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
          }
          transformed = true;
          if (isBlobInstance(stream)) {
            return blobToWebStream(stream);
          } else if ((0, stream_type_check_1.isReadableStream)(stream)) {
            return stream;
          } else {
            throw new Error(`Cannot transform payload to web stream, got ${stream}`);
          }
        },
      });
    };
    exports2.sdkStreamMixin = sdkStreamMixin3;
    var isBlobInstance = (stream) => typeof Blob === "function" && stream instanceof Blob;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/sdk-stream-mixin.js
var require_sdk_stream_mixin = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/sdk-stream-mixin.js"(
    exports2,
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.sdkStreamMixin = void 0;
    var node_http_handler_1 = require_dist_cjs11();
    var util_buffer_from_1 = require_dist_cjs6();
    var stream_1 = require("stream");
    var sdk_stream_mixin_browser_1 = require_sdk_stream_mixin_browser();
    var ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
    var sdkStreamMixin3 = (stream) => {
      var _a, _b;
      if (!(stream instanceof stream_1.Readable)) {
        try {
          return (0, sdk_stream_mixin_browser_1.sdkStreamMixin)(stream);
        } catch (e) {
          const name =
            ((_b =
              (_a = stream === null || stream === void 0 ? void 0 : stream.__proto__) === null || _a === void 0
                ? void 0
                : _a.constructor) === null || _b === void 0
              ? void 0
              : _b.name) || stream;
          throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${name}`);
        }
      }
      let transformed = false;
      const transformToByteArray = async () => {
        if (transformed) {
          throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        transformed = true;
        return await (0, node_http_handler_1.streamCollector)(stream);
      };
      return Object.assign(stream, {
        transformToByteArray,
        transformToString: async (encoding) => {
          const buf = await transformToByteArray();
          if (encoding === void 0 || Buffer.isEncoding(encoding)) {
            return (0, util_buffer_from_1.fromArrayBuffer)(buf.buffer, buf.byteOffset, buf.byteLength).toString(
              encoding,
            );
          } else {
            const decoder = new TextDecoder(encoding);
            return decoder.decode(buf);
          }
        },
        transformToWebStream: () => {
          if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
          }
          if (stream.readableFlowing !== null) {
            throw new Error("The stream has been consumed by other callbacks.");
          }
          if (typeof stream_1.Readable.toWeb !== "function") {
            throw new Error("Readable.toWeb() is not supported. Please ensure a polyfill is available.");
          }
          transformed = true;
          return stream_1.Readable.toWeb(stream);
        },
      });
    };
    exports2.sdkStreamMixin = sdkStreamMixin3;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/splitStream.browser.js
var require_splitStream_browser = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/splitStream.browser.js"(
    exports2,
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.splitStream = splitStream2;
    async function splitStream2(stream) {
      if (typeof stream.stream === "function") {
        stream = stream.stream();
      }
      const readableStream = stream;
      return readableStream.tee();
    }
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/splitStream.js
var require_splitStream = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/splitStream.js"(
    exports2,
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.splitStream = splitStream2;
    var stream_1 = require("stream");
    var splitStream_browser_1 = require_splitStream_browser();
    var stream_type_check_1 = require_stream_type_check();
    async function splitStream2(stream) {
      if ((0, stream_type_check_1.isReadableStream)(stream) || (0, stream_type_check_1.isBlob)(stream)) {
        return (0, splitStream_browser_1.splitStream)(stream);
      }
      const stream1 = new stream_1.PassThrough();
      const stream2 = new stream_1.PassThrough();
      stream.pipe(stream1);
      stream.pipe(stream2);
      return [stream1, stream2];
    }
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/index.js
var require_dist_cjs14 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-stream/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __reExport = (target, mod, secondTarget) => (
      __copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")
    );
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      Uint8ArrayBlobAdapter: () => Uint8ArrayBlobAdapter2,
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_util_base647 = require_dist_cjs8();
    var import_util_utf85 = require_dist_cjs7();
    function transformToString(payload, encoding = "utf-8") {
      if (encoding === "base64") {
        return (0, import_util_base647.toBase64)(payload);
      }
      return (0, import_util_utf85.toUtf8)(payload);
    }
    __name(transformToString, "transformToString");
    function transformFromString(str, encoding) {
      if (encoding === "base64") {
        return Uint8ArrayBlobAdapter2.mutate((0, import_util_base647.fromBase64)(str));
      }
      return Uint8ArrayBlobAdapter2.mutate((0, import_util_utf85.fromUtf8)(str));
    }
    __name(transformFromString, "transformFromString");
    var _a;
    var Uint8ArrayBlobAdapter2 =
      ((_a = class extends Uint8Array {
        /**
         * @param source - such as a string or Stream.
         * @returns a new Uint8ArrayBlobAdapter extending Uint8Array.
         */
        static fromString(source, encoding = "utf-8") {
          switch (typeof source) {
            case "string":
              return transformFromString(source, encoding);
            default:
              throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
          }
        }
        /**
         * @param source - Uint8Array to be mutated.
         * @returns the same Uint8Array but with prototype switched to Uint8ArrayBlobAdapter.
         */
        static mutate(source) {
          Object.setPrototypeOf(source, _a.prototype);
          return source;
        }
        /**
         * @param encoding - default 'utf-8'.
         * @returns the blob as string.
         */
        transformToString(encoding = "utf-8") {
          return transformToString(this, encoding);
        }
      }),
      __name(_a, "Uint8ArrayBlobAdapter"),
      _a);
    __reExport(src_exports, require_ChecksumStream(), module2.exports);
    __reExport(src_exports, require_createChecksumStream(), module2.exports);
    __reExport(src_exports, require_createBufferedReadable(), module2.exports);
    __reExport(src_exports, require_getAwsChunkedEncodingStream(), module2.exports);
    __reExport(src_exports, require_headStream(), module2.exports);
    __reExport(src_exports, require_sdk_stream_mixin(), module2.exports);
    __reExport(src_exports, require_splitStream(), module2.exports);
    __reExport(src_exports, require_stream_type_check(), module2.exports);
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js
var import_util_stream, collectBody2;
var init_collect_stream_body = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js"() {
    import_util_stream = __toESM(require_dist_cjs14());
    collectBody2 = async (streamBody = new Uint8Array(), context) => {
      if (streamBody instanceof Uint8Array) {
        return import_util_stream.Uint8ArrayBlobAdapter.mutate(streamBody);
      }
      if (!streamBody) {
        return import_util_stream.Uint8ArrayBlobAdapter.mutate(new Uint8Array());
      }
      const fromContext = context.streamCollector(streamBody);
      return import_util_stream.Uint8ArrayBlobAdapter.mutate(await fromContext);
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js
function extendedEncodeURIComponent2(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
var init_extended_encode_uri_component = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js"() {},
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/deref.js
var deref;
var init_deref = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/deref.js"() {
    deref = (schemaRef) => {
      if (typeof schemaRef === "function") {
        return schemaRef();
      }
      return schemaRef;
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaDeserializationMiddleware.js
var import_protocol_http2, import_util_middleware4;
var init_schemaDeserializationMiddleware = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaDeserializationMiddleware.js"() {
    import_protocol_http2 = __toESM(require_dist_cjs3());
    import_util_middleware4 = __toESM(require_dist_cjs2());
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaSerializationMiddleware.js
var import_util_middleware5;
var init_schemaSerializationMiddleware = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaSerializationMiddleware.js"() {
    import_util_middleware5 = __toESM(require_dist_cjs2());
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/middleware/getSchemaSerdePlugin.js
var init_getSchemaSerdePlugin = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/middleware/getSchemaSerdePlugin.js"() {
    init_schemaDeserializationMiddleware();
    init_schemaSerializationMiddleware();
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/TypeRegistry.js
var TypeRegistry;
var init_TypeRegistry = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/TypeRegistry.js"() {
    TypeRegistry = class _TypeRegistry {
      constructor(namespace, schemas = /* @__PURE__ */ new Map()) {
        this.namespace = namespace;
        this.schemas = schemas;
      }
      static for(namespace) {
        if (!_TypeRegistry.registries.has(namespace)) {
          _TypeRegistry.registries.set(namespace, new _TypeRegistry(namespace));
        }
        return _TypeRegistry.registries.get(namespace);
      }
      register(shapeId, schema) {
        const qualifiedName = this.normalizeShapeId(shapeId);
        const registry = _TypeRegistry.for(this.getNamespace(shapeId));
        registry.schemas.set(qualifiedName, schema);
      }
      getSchema(shapeId) {
        const id = this.normalizeShapeId(shapeId);
        if (!this.schemas.has(id)) {
          throw new Error(`@smithy/core/schema - schema not found for ${id}`);
        }
        return this.schemas.get(id);
      }
      getBaseException() {
        for (const [id, schema] of this.schemas.entries()) {
          if (id.startsWith("smithy.ts.sdk.synthetic.") && id.endsWith("ServiceException")) {
            return schema;
          }
        }
        return void 0;
      }
      find(predicate) {
        return [...this.schemas.values()].find(predicate);
      }
      destroy() {
        _TypeRegistry.registries.delete(this.namespace);
        this.schemas.clear();
      }
      normalizeShapeId(shapeId) {
        if (shapeId.includes("#")) {
          return shapeId;
        }
        return this.namespace + "#" + shapeId;
      }
      getNamespace(shapeId) {
        return this.normalizeShapeId(shapeId).split("#")[0];
      }
    };
    TypeRegistry.registries = /* @__PURE__ */ new Map();
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/schemas/Schema.js
var Schema;
var init_Schema = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/schemas/Schema.js"() {
    Schema = class {
      constructor(name, traits) {
        this.name = name;
        this.traits = traits;
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/schemas/ListSchema.js
var ListSchema;
var init_ListSchema = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/schemas/ListSchema.js"() {
    init_TypeRegistry();
    init_Schema();
    ListSchema = class _ListSchema extends Schema {
      constructor(name, traits, valueSchema) {
        super(name, traits);
        this.name = name;
        this.traits = traits;
        this.valueSchema = valueSchema;
        this.symbol = _ListSchema.symbol;
      }
      static [Symbol.hasInstance](lhs) {
        const isPrototype = _ListSchema.prototype.isPrototypeOf(lhs);
        if (!isPrototype && typeof lhs === "object" && lhs !== null) {
          const list = lhs;
          return list.symbol === _ListSchema.symbol;
        }
        return isPrototype;
      }
    };
    ListSchema.symbol = Symbol.for("@smithy/core/schema::ListSchema");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/schemas/MapSchema.js
var MapSchema;
var init_MapSchema = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/schemas/MapSchema.js"() {
    init_TypeRegistry();
    init_Schema();
    MapSchema = class _MapSchema extends Schema {
      constructor(name, traits, keySchema, valueSchema) {
        super(name, traits);
        this.name = name;
        this.traits = traits;
        this.keySchema = keySchema;
        this.valueSchema = valueSchema;
        this.symbol = _MapSchema.symbol;
      }
      static [Symbol.hasInstance](lhs) {
        const isPrototype = _MapSchema.prototype.isPrototypeOf(lhs);
        if (!isPrototype && typeof lhs === "object" && lhs !== null) {
          const map = lhs;
          return map.symbol === _MapSchema.symbol;
        }
        return isPrototype;
      }
    };
    MapSchema.symbol = Symbol.for("@smithy/core/schema::MapSchema");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/schemas/OperationSchema.js
var init_OperationSchema = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/schemas/OperationSchema.js"() {
    init_TypeRegistry();
    init_Schema();
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/schemas/StructureSchema.js
var StructureSchema;
var init_StructureSchema = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/schemas/StructureSchema.js"() {
    init_TypeRegistry();
    init_Schema();
    StructureSchema = class _StructureSchema extends Schema {
      constructor(name, traits, memberNames, memberList) {
        super(name, traits);
        this.name = name;
        this.traits = traits;
        this.memberNames = memberNames;
        this.memberList = memberList;
        this.symbol = _StructureSchema.symbol;
        this.members = {};
        for (let i = 0; i < memberNames.length; ++i) {
          this.members[memberNames[i]] = Array.isArray(memberList[i]) ? memberList[i] : [memberList[i], 0];
        }
      }
      static [Symbol.hasInstance](lhs) {
        const isPrototype = _StructureSchema.prototype.isPrototypeOf(lhs);
        if (!isPrototype && typeof lhs === "object" && lhs !== null) {
          const struct = lhs;
          return struct.symbol === _StructureSchema.symbol;
        }
        return isPrototype;
      }
    };
    StructureSchema.symbol = Symbol.for("@smithy/core/schema::StructureSchema");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/schemas/ErrorSchema.js
var ErrorSchema;
var init_ErrorSchema = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/schemas/ErrorSchema.js"() {
    init_TypeRegistry();
    init_StructureSchema();
    ErrorSchema = class _ErrorSchema extends StructureSchema {
      constructor(name, traits, memberNames, memberList, ctor) {
        super(name, traits, memberNames, memberList);
        this.name = name;
        this.traits = traits;
        this.memberNames = memberNames;
        this.memberList = memberList;
        this.ctor = ctor;
        this.symbol = _ErrorSchema.symbol;
      }
      static [Symbol.hasInstance](lhs) {
        const isPrototype = _ErrorSchema.prototype.isPrototypeOf(lhs);
        if (!isPrototype && typeof lhs === "object" && lhs !== null) {
          const err = lhs;
          return err.symbol === _ErrorSchema.symbol;
        }
        return isPrototype;
      }
    };
    ErrorSchema.symbol = Symbol.for("@smithy/core/schema::ErrorSchema");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/schemas/sentinels.js
var SCHEMA;
var init_sentinels = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/schemas/sentinels.js"() {
    SCHEMA = {
      BLOB: 21,
      STREAMING_BLOB: 42,
      BOOLEAN: 2,
      STRING: 0,
      NUMERIC: 1,
      BIG_INTEGER: 17,
      BIG_DECIMAL: 19,
      DOCUMENT: 15,
      TIMESTAMP_DEFAULT: 4,
      TIMESTAMP_DATE_TIME: 5,
      TIMESTAMP_HTTP_DATE: 6,
      TIMESTAMP_EPOCH_SECONDS: 7,
      LIST_MODIFIER: 64,
      MAP_MODIFIER: 128,
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/schemas/SimpleSchema.js
var SimpleSchema;
var init_SimpleSchema = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/schemas/SimpleSchema.js"() {
    init_TypeRegistry();
    init_Schema();
    SimpleSchema = class _SimpleSchema extends Schema {
      constructor(name, schemaRef, traits) {
        super(name, traits);
        this.name = name;
        this.schemaRef = schemaRef;
        this.traits = traits;
        this.symbol = _SimpleSchema.symbol;
      }
      static [Symbol.hasInstance](lhs) {
        const isPrototype = _SimpleSchema.prototype.isPrototypeOf(lhs);
        if (!isPrototype && typeof lhs === "object" && lhs !== null) {
          const sim = lhs;
          return sim.symbol === _SimpleSchema.symbol;
        }
        return isPrototype;
      }
    };
    SimpleSchema.symbol = Symbol.for("@smithy/core/schema::SimpleSchema");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js
var NormalizedSchema;
var init_NormalizedSchema = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js"() {
    init_deref();
    init_ListSchema();
    init_MapSchema();
    init_sentinels();
    init_SimpleSchema();
    init_StructureSchema();
    NormalizedSchema = class _NormalizedSchema {
      constructor(ref, memberName) {
        this.ref = ref;
        this.memberName = memberName;
        this.symbol = _NormalizedSchema.symbol;
        const traitStack = [];
        let _ref = ref;
        let schema = ref;
        this._isMemberSchema = false;
        while (Array.isArray(_ref)) {
          traitStack.push(_ref[1]);
          _ref = _ref[0];
          schema = deref(_ref);
          this._isMemberSchema = true;
        }
        if (traitStack.length > 0) {
          this.memberTraits = {};
          for (let i = traitStack.length - 1; i >= 0; --i) {
            const traitSet = traitStack[i];
            Object.assign(this.memberTraits, _NormalizedSchema.translateTraits(traitSet));
          }
        } else {
          this.memberTraits = 0;
        }
        if (schema instanceof _NormalizedSchema) {
          this.name = schema.name;
          this.traits = schema.traits;
          this._isMemberSchema = schema._isMemberSchema;
          this.schema = schema.schema;
          this.memberTraits = Object.assign({}, schema.getMemberTraits(), this.getMemberTraits());
          this.normalizedTraits = void 0;
          this.ref = schema.ref;
          this.memberName = memberName ?? schema.memberName;
          return;
        }
        this.schema = deref(schema);
        if (this.schema && typeof this.schema === "object") {
          this.traits = this.schema?.traits ?? {};
        } else {
          this.traits = 0;
        }
        this.name =
          (typeof this.schema === "object" ? this.schema?.name : void 0) ?? this.memberName ?? this.getSchemaName();
        if (this._isMemberSchema && !memberName) {
          throw new Error(
            `@smithy/core/schema - NormalizedSchema member schema ${this.getName(true)} must initialize with memberName argument.`,
          );
        }
      }
      static [Symbol.hasInstance](lhs) {
        const isPrototype = _NormalizedSchema.prototype.isPrototypeOf(lhs);
        if (!isPrototype && typeof lhs === "object" && lhs !== null) {
          const ns = lhs;
          return ns.symbol === _NormalizedSchema.symbol;
        }
        return isPrototype;
      }
      static of(ref, memberName) {
        if (ref instanceof _NormalizedSchema) {
          return ref;
        }
        return new _NormalizedSchema(ref, memberName);
      }
      static translateTraits(indicator) {
        if (typeof indicator === "object") {
          return indicator;
        }
        indicator = indicator | 0;
        const traits = {};
        if ((indicator & 1) === 1) {
          traits.httpLabel = 1;
        }
        if (((indicator >> 1) & 1) === 1) {
          traits.idempotent = 1;
        }
        if (((indicator >> 2) & 1) === 1) {
          traits.idempotencyToken = 1;
        }
        if (((indicator >> 3) & 1) === 1) {
          traits.sensitive = 1;
        }
        if (((indicator >> 4) & 1) === 1) {
          traits.httpPayload = 1;
        }
        if (((indicator >> 5) & 1) === 1) {
          traits.httpResponseCode = 1;
        }
        if (((indicator >> 6) & 1) === 1) {
          traits.httpQueryParams = 1;
        }
        return traits;
      }
      static memberFrom(memberSchema, memberName) {
        if (memberSchema instanceof _NormalizedSchema) {
          memberSchema.memberName = memberName;
          memberSchema._isMemberSchema = true;
          return memberSchema;
        }
        return new _NormalizedSchema(memberSchema, memberName);
      }
      getSchema() {
        if (this.schema instanceof _NormalizedSchema) {
          return (this.schema = this.schema.getSchema());
        }
        if (this.schema instanceof SimpleSchema) {
          return deref(this.schema.schemaRef);
        }
        return deref(this.schema);
      }
      getName(withNamespace = false) {
        if (!withNamespace) {
          if (this.name && this.name.includes("#")) {
            return this.name.split("#")[1];
          }
        }
        return this.name || void 0;
      }
      getMemberName() {
        if (!this.isMemberSchema()) {
          throw new Error(`@smithy/core/schema - cannot get member name on non-member schema: ${this.getName(true)}`);
        }
        return this.memberName;
      }
      isMemberSchema() {
        return this._isMemberSchema;
      }
      isUnitSchema() {
        return this.getSchema() === "unit";
      }
      isListSchema() {
        const inner = this.getSchema();
        if (typeof inner === "number") {
          return inner >= SCHEMA.LIST_MODIFIER && inner < SCHEMA.MAP_MODIFIER;
        }
        return inner instanceof ListSchema;
      }
      isMapSchema() {
        const inner = this.getSchema();
        if (typeof inner === "number") {
          return inner >= SCHEMA.MAP_MODIFIER && inner <= 255;
        }
        return inner instanceof MapSchema;
      }
      isDocumentSchema() {
        return this.getSchema() === SCHEMA.DOCUMENT;
      }
      isStructSchema() {
        const inner = this.getSchema();
        return (inner !== null && typeof inner === "object" && "members" in inner) || inner instanceof StructureSchema;
      }
      isBlobSchema() {
        return this.getSchema() === SCHEMA.BLOB || this.getSchema() === SCHEMA.STREAMING_BLOB;
      }
      isTimestampSchema() {
        const schema = this.getSchema();
        return (
          typeof schema === "number" && schema >= SCHEMA.TIMESTAMP_DEFAULT && schema <= SCHEMA.TIMESTAMP_EPOCH_SECONDS
        );
      }
      isStringSchema() {
        return this.getSchema() === SCHEMA.STRING;
      }
      isBooleanSchema() {
        return this.getSchema() === SCHEMA.BOOLEAN;
      }
      isNumericSchema() {
        return this.getSchema() === SCHEMA.NUMERIC;
      }
      isBigIntegerSchema() {
        return this.getSchema() === SCHEMA.BIG_INTEGER;
      }
      isBigDecimalSchema() {
        return this.getSchema() === SCHEMA.BIG_DECIMAL;
      }
      isStreaming() {
        const streaming = !!this.getMergedTraits().streaming;
        if (streaming) {
          return true;
        }
        return this.getSchema() === SCHEMA.STREAMING_BLOB;
      }
      getMergedTraits() {
        if (this.normalizedTraits) {
          return this.normalizedTraits;
        }
        this.normalizedTraits = {
          ...this.getOwnTraits(),
          ...this.getMemberTraits(),
        };
        return this.normalizedTraits;
      }
      getMemberTraits() {
        return _NormalizedSchema.translateTraits(this.memberTraits);
      }
      getOwnTraits() {
        return _NormalizedSchema.translateTraits(this.traits);
      }
      getKeySchema() {
        if (this.isDocumentSchema()) {
          return _NormalizedSchema.memberFrom([SCHEMA.DOCUMENT, 0], "key");
        }
        if (!this.isMapSchema()) {
          throw new Error(`@smithy/core/schema - cannot get key schema for non-map schema: ${this.getName(true)}`);
        }
        const schema = this.getSchema();
        if (typeof schema === "number") {
          return _NormalizedSchema.memberFrom([63 & schema, 0], "key");
        }
        return _NormalizedSchema.memberFrom([schema.keySchema, 0], "key");
      }
      getValueSchema() {
        const schema = this.getSchema();
        if (typeof schema === "number") {
          if (this.isMapSchema()) {
            return _NormalizedSchema.memberFrom([63 & schema, 0], "value");
          } else if (this.isListSchema()) {
            return _NormalizedSchema.memberFrom([63 & schema, 0], "member");
          }
        }
        if (schema && typeof schema === "object") {
          if (this.isStructSchema()) {
            throw new Error(`cannot call getValueSchema() with StructureSchema ${this.getName(true)}`);
          }
          const collection = schema;
          if ("valueSchema" in collection) {
            if (this.isMapSchema()) {
              return _NormalizedSchema.memberFrom([collection.valueSchema, 0], "value");
            } else if (this.isListSchema()) {
              return _NormalizedSchema.memberFrom([collection.valueSchema, 0], "member");
            }
          }
        }
        if (this.isDocumentSchema()) {
          return _NormalizedSchema.memberFrom([SCHEMA.DOCUMENT, 0], "value");
        }
        throw new Error(`@smithy/core/schema - the schema ${this.getName(true)} does not have a value member.`);
      }
      getMemberSchema(member) {
        if (this.isStructSchema()) {
          const struct = this.getSchema();
          if (!(member in struct.members)) {
            throw new Error(
              `@smithy/core/schema - the schema ${this.getName(true)} does not have a member with name=${member}.`,
            );
          }
          return _NormalizedSchema.memberFrom(struct.members[member], member);
        }
        if (this.isDocumentSchema()) {
          return _NormalizedSchema.memberFrom([SCHEMA.DOCUMENT, 0], member);
        }
        throw new Error(`@smithy/core/schema - the schema ${this.getName(true)} does not have members.`);
      }
      getMemberSchemas() {
        const { schema } = this;
        const struct = schema;
        if (!struct || typeof struct !== "object") {
          return {};
        }
        if ("members" in struct) {
          const buffer = {};
          for (const member of struct.memberNames) {
            buffer[member] = this.getMemberSchema(member);
          }
          return buffer;
        }
        return {};
      }
      *structIterator() {
        if (this.isUnitSchema()) {
          return;
        }
        if (!this.isStructSchema()) {
          throw new Error("@smithy/core/schema - cannot acquire structIterator on non-struct schema.");
        }
        const struct = this.getSchema();
        for (let i = 0; i < struct.memberNames.length; ++i) {
          yield [struct.memberNames[i], _NormalizedSchema.memberFrom([struct.memberList[i], 0], struct.memberNames[i])];
        }
      }
      getSchemaName() {
        const schema = this.getSchema();
        if (typeof schema === "number") {
          const _schema = 63 & schema;
          const container = 192 & schema;
          const type =
            Object.entries(SCHEMA).find(([, value]) => {
              return value === _schema;
            })?.[0] ?? "Unknown";
          switch (container) {
            case SCHEMA.MAP_MODIFIER:
              return `${type}Map`;
            case SCHEMA.LIST_MODIFIER:
              return `${type}List`;
            case 0:
              return type;
          }
        }
        return "Unknown";
      }
    };
    NormalizedSchema.symbol = Symbol.for("@smithy/core/schema::NormalizedSchema");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/index.js
var init_schema = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/index.js"() {
    init_deref();
    init_getSchemaSerdePlugin();
    init_ListSchema();
    init_MapSchema();
    init_OperationSchema();
    init_ErrorSchema();
    init_NormalizedSchema();
    init_Schema();
    init_SimpleSchema();
    init_StructureSchema();
    init_sentinels();
    init_TypeRegistry();
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/serde/copyDocumentWithTransform.js
var copyDocumentWithTransform2;
var init_copyDocumentWithTransform = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/serde/copyDocumentWithTransform.js"() {
    init_schema();
    copyDocumentWithTransform2 = (source, schemaRef, transform = (_) => _) => {
      const ns = NormalizedSchema.of(schemaRef);
      switch (typeof source) {
        case "undefined":
        case "boolean":
        case "number":
        case "string":
        case "bigint":
        case "symbol":
          return transform(source, ns);
        case "function":
        case "object":
          if (source === null) {
            return transform(null, ns);
          }
          if (Array.isArray(source)) {
            const newArray = new Array(source.length);
            let i = 0;
            for (const item of source) {
              newArray[i++] = copyDocumentWithTransform2(item, ns.getValueSchema(), transform);
            }
            return transform(newArray, ns);
          }
          if ("byteLength" in source) {
            const newBytes = new Uint8Array(source.byteLength);
            newBytes.set(source, 0);
            return transform(newBytes, ns);
          }
          if (source instanceof Date) {
            return transform(source, ns);
          }
          const newObject = {};
          if (ns.isMapSchema()) {
            for (const key of Object.keys(source)) {
              newObject[key] = copyDocumentWithTransform2(source[key], ns.getValueSchema(), transform);
            }
          } else if (ns.isStructSchema()) {
            for (const [key, memberSchema] of ns.structIterator()) {
              newObject[key] = copyDocumentWithTransform2(source[key], memberSchema, transform);
            }
          } else if (ns.isDocumentSchema()) {
            for (const key of Object.keys(source)) {
              newObject[key] = copyDocumentWithTransform2(source[key], ns.getValueSchema(), transform);
            }
          }
          return transform(newObject, ns);
        default:
          return transform(source, ns);
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/serde/parse-utils.js
var parseBoolean2,
  expectBoolean2,
  expectNumber2,
  MAX_FLOAT,
  expectFloat322,
  expectLong2,
  expectInt2,
  expectInt322,
  expectShort2,
  expectByte2,
  expectSizedInt,
  castInt,
  expectNonNull2,
  expectObject2,
  expectString2,
  expectUnion2,
  strictParseDouble2,
  strictParseFloat2,
  strictParseFloat322,
  NUMBER_REGEX,
  parseNumber,
  limitedParseDouble2,
  handleFloat2,
  limitedParseFloat2,
  limitedParseFloat322,
  parseFloatString,
  strictParseLong2,
  strictParseInt2,
  strictParseInt322,
  strictParseShort2,
  strictParseByte2,
  stackTraceWarning,
  logger2;
var init_parse_utils = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/serde/parse-utils.js"() {
    parseBoolean2 = (value) => {
      switch (value) {
        case "true":
          return true;
        case "false":
          return false;
        default:
          throw new Error(`Unable to parse boolean value "${value}"`);
      }
    };
    expectBoolean2 = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "number") {
        if (value === 0 || value === 1) {
          logger2.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (value === 0) {
          return false;
        }
        if (value === 1) {
          return true;
        }
      }
      if (typeof value === "string") {
        const lower = value.toLowerCase();
        if (lower === "false" || lower === "true") {
          logger2.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (lower === "false") {
          return false;
        }
        if (lower === "true") {
          return true;
        }
      }
      if (typeof value === "boolean") {
        return value;
      }
      throw new TypeError(`Expected boolean, got ${typeof value}: ${value}`);
    };
    expectNumber2 = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "string") {
        const parsed = parseFloat(value);
        if (!Number.isNaN(parsed)) {
          if (String(parsed) !== String(value)) {
            logger2.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
          }
          return parsed;
        }
      }
      if (typeof value === "number") {
        return value;
      }
      throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
    };
    MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
    expectFloat322 = (value) => {
      const expected = expectNumber2(value);
      if (expected !== void 0 && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
        if (Math.abs(expected) > MAX_FLOAT) {
          throw new TypeError(`Expected 32-bit float, got ${value}`);
        }
      }
      return expected;
    };
    expectLong2 = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (Number.isInteger(value) && !Number.isNaN(value)) {
        return value;
      }
      throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
    };
    expectInt2 = expectLong2;
    expectInt322 = (value) => expectSizedInt(value, 32);
    expectShort2 = (value) => expectSizedInt(value, 16);
    expectByte2 = (value) => expectSizedInt(value, 8);
    expectSizedInt = (value, size) => {
      const expected = expectLong2(value);
      if (expected !== void 0 && castInt(expected, size) !== expected) {
        throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
      }
      return expected;
    };
    castInt = (value, size) => {
      switch (size) {
        case 32:
          return Int32Array.of(value)[0];
        case 16:
          return Int16Array.of(value)[0];
        case 8:
          return Int8Array.of(value)[0];
      }
    };
    expectNonNull2 = (value, location) => {
      if (value === null || value === void 0) {
        if (location) {
          throw new TypeError(`Expected a non-null value for ${location}`);
        }
        throw new TypeError("Expected a non-null value");
      }
      return value;
    };
    expectObject2 = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "object" && !Array.isArray(value)) {
        return value;
      }
      const receivedType = Array.isArray(value) ? "array" : typeof value;
      throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
    };
    expectString2 = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "string") {
        return value;
      }
      if (["boolean", "number", "bigint"].includes(typeof value)) {
        logger2.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
        return String(value);
      }
      throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
    };
    expectUnion2 = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      const asObject = expectObject2(value);
      const setKeys = Object.entries(asObject)
        .filter(([, v]) => v != null)
        .map(([k]) => k);
      if (setKeys.length === 0) {
        throw new TypeError(`Unions must have exactly one non-null member. None were found.`);
      }
      if (setKeys.length > 1) {
        throw new TypeError(`Unions must have exactly one non-null member. Keys ${setKeys} were not null.`);
      }
      return asObject;
    };
    strictParseDouble2 = (value) => {
      if (typeof value == "string") {
        return expectNumber2(parseNumber(value));
      }
      return expectNumber2(value);
    };
    strictParseFloat2 = strictParseDouble2;
    strictParseFloat322 = (value) => {
      if (typeof value == "string") {
        return expectFloat322(parseNumber(value));
      }
      return expectFloat322(value);
    };
    NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
    parseNumber = (value) => {
      const matches = value.match(NUMBER_REGEX);
      if (matches === null || matches[0].length !== value.length) {
        throw new TypeError(`Expected real number, got implicit NaN`);
      }
      return parseFloat(value);
    };
    limitedParseDouble2 = (value) => {
      if (typeof value == "string") {
        return parseFloatString(value);
      }
      return expectNumber2(value);
    };
    handleFloat2 = limitedParseDouble2;
    limitedParseFloat2 = limitedParseDouble2;
    limitedParseFloat322 = (value) => {
      if (typeof value == "string") {
        return parseFloatString(value);
      }
      return expectFloat322(value);
    };
    parseFloatString = (value) => {
      switch (value) {
        case "NaN":
          return NaN;
        case "Infinity":
          return Infinity;
        case "-Infinity":
          return -Infinity;
        default:
          throw new Error(`Unable to parse float value: ${value}`);
      }
    };
    strictParseLong2 = (value) => {
      if (typeof value === "string") {
        return expectLong2(parseNumber(value));
      }
      return expectLong2(value);
    };
    strictParseInt2 = strictParseLong2;
    strictParseInt322 = (value) => {
      if (typeof value === "string") {
        return expectInt322(parseNumber(value));
      }
      return expectInt322(value);
    };
    strictParseShort2 = (value) => {
      if (typeof value === "string") {
        return expectShort2(parseNumber(value));
      }
      return expectShort2(value);
    };
    strictParseByte2 = (value) => {
      if (typeof value === "string") {
        return expectByte2(parseNumber(value));
      }
      return expectByte2(value);
    };
    stackTraceWarning = (message) => {
      return String(new TypeError(message).stack || message)
        .split("\n")
        .slice(0, 5)
        .filter((s) => !s.includes("stackTraceWarning"))
        .join("\n");
    };
    logger2 = {
      warn: console.warn,
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/serde/date-utils.js
function dateToUtcString2(date) {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const dayOfWeek = date.getUTCDay();
  const dayOfMonthInt = date.getUTCDate();
  const hoursInt = date.getUTCHours();
  const minutesInt = date.getUTCMinutes();
  const secondsInt = date.getUTCSeconds();
  const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
  const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
  const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
  const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
  return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year} ${hoursString}:${minutesString}:${secondsString} GMT`;
}
var DAYS,
  MONTHS,
  RFC3339,
  parseRfc3339DateTime2,
  RFC3339_WITH_OFFSET,
  parseRfc3339DateTimeWithOffset2,
  IMF_FIXDATE,
  RFC_850_DATE,
  ASC_TIME,
  parseRfc7231DateTime2,
  parseEpochTimestamp2,
  buildDate,
  parseTwoDigitYear,
  FIFTY_YEARS_IN_MILLIS,
  adjustRfc850Year,
  parseMonthByShortName,
  DAYS_IN_MONTH,
  validateDayOfMonth,
  isLeapYear,
  parseDateValue,
  parseMilliseconds,
  parseOffsetToMilliseconds,
  stripLeadingZeroes;
var init_date_utils = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/serde/date-utils.js"() {
    init_parse_utils();
    DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
    parseRfc3339DateTime2 = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
      }
      const match = RFC3339.exec(value);
      if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
      }
      const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds] = match;
      const year = strictParseShort2(stripLeadingZeroes(yearStr));
      const month = parseDateValue(monthStr, "month", 1, 12);
      const day = parseDateValue(dayStr, "day", 1, 31);
      return buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
    };
    RFC3339_WITH_OFFSET = new RegExp(
      /^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/,
    );
    parseRfc3339DateTimeWithOffset2 = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
      }
      const match = RFC3339_WITH_OFFSET.exec(value);
      if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
      }
      const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
      const year = strictParseShort2(stripLeadingZeroes(yearStr));
      const month = parseDateValue(monthStr, "month", 1, 12);
      const day = parseDateValue(dayStr, "day", 1, 31);
      const date = buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
      if (offsetStr.toUpperCase() != "Z") {
        date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));
      }
      return date;
    };
    IMF_FIXDATE = new RegExp(
      /^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/,
    );
    RFC_850_DATE = new RegExp(
      /^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/,
    );
    ASC_TIME = new RegExp(
      /^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/,
    );
    parseRfc7231DateTime2 = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-7231 date-times must be expressed as strings");
      }
      let match = IMF_FIXDATE.exec(value);
      if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return buildDate(
          strictParseShort2(stripLeadingZeroes(yearStr)),
          parseMonthByShortName(monthStr),
          parseDateValue(dayStr, "day", 1, 31),
          { hours, minutes, seconds, fractionalMilliseconds },
        );
      }
      match = RFC_850_DATE.exec(value);
      if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return adjustRfc850Year(
          buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
            hours,
            minutes,
            seconds,
            fractionalMilliseconds,
          }),
        );
      }
      match = ASC_TIME.exec(value);
      if (match) {
        const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
        return buildDate(
          strictParseShort2(stripLeadingZeroes(yearStr)),
          parseMonthByShortName(monthStr),
          parseDateValue(dayStr.trimLeft(), "day", 1, 31),
          { hours, minutes, seconds, fractionalMilliseconds },
        );
      }
      throw new TypeError("Invalid RFC-7231 date-time value");
    };
    parseEpochTimestamp2 = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      let valueAsDouble;
      if (typeof value === "number") {
        valueAsDouble = value;
      } else if (typeof value === "string") {
        valueAsDouble = strictParseDouble2(value);
      } else if (typeof value === "object" && value.tag === 1) {
        valueAsDouble = value.value;
      } else {
        throw new TypeError(
          "Epoch timestamps must be expressed as floating point numbers or their string representation",
        );
      }
      if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {
        throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
      }
      return new Date(Math.round(valueAsDouble * 1e3));
    };
    buildDate = (year, month, day, time) => {
      const adjustedMonth = month - 1;
      validateDayOfMonth(year, adjustedMonth, day);
      return new Date(
        Date.UTC(
          year,
          adjustedMonth,
          day,
          parseDateValue(time.hours, "hour", 0, 23),
          parseDateValue(time.minutes, "minute", 0, 59),
          parseDateValue(time.seconds, "seconds", 0, 60),
          parseMilliseconds(time.fractionalMilliseconds),
        ),
      );
    };
    parseTwoDigitYear = (value) => {
      const thisYear = /* @__PURE__ */ new Date().getUTCFullYear();
      const valueInThisCentury = Math.floor(thisYear / 100) * 100 + strictParseShort2(stripLeadingZeroes(value));
      if (valueInThisCentury < thisYear) {
        return valueInThisCentury + 100;
      }
      return valueInThisCentury;
    };
    FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1e3;
    adjustRfc850Year = (input) => {
      if (input.getTime() - /* @__PURE__ */ new Date().getTime() > FIFTY_YEARS_IN_MILLIS) {
        return new Date(
          Date.UTC(
            input.getUTCFullYear() - 100,
            input.getUTCMonth(),
            input.getUTCDate(),
            input.getUTCHours(),
            input.getUTCMinutes(),
            input.getUTCSeconds(),
            input.getUTCMilliseconds(),
          ),
        );
      }
      return input;
    };
    parseMonthByShortName = (value) => {
      const monthIdx = MONTHS.indexOf(value);
      if (monthIdx < 0) {
        throw new TypeError(`Invalid month: ${value}`);
      }
      return monthIdx + 1;
    };
    DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    validateDayOfMonth = (year, month, day) => {
      let maxDays = DAYS_IN_MONTH[month];
      if (month === 1 && isLeapYear(year)) {
        maxDays = 29;
      }
      if (day > maxDays) {
        throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
      }
    };
    isLeapYear = (year) => {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    };
    parseDateValue = (value, type, lower, upper) => {
      const dateVal = strictParseByte2(stripLeadingZeroes(value));
      if (dateVal < lower || dateVal > upper) {
        throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
      }
      return dateVal;
    };
    parseMilliseconds = (value) => {
      if (value === null || value === void 0) {
        return 0;
      }
      return strictParseFloat322("0." + value) * 1e3;
    };
    parseOffsetToMilliseconds = (value) => {
      const directionStr = value[0];
      let direction = 1;
      if (directionStr == "+") {
        direction = 1;
      } else if (directionStr == "-") {
        direction = -1;
      } else {
        throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
      }
      const hour = Number(value.substring(1, 3));
      const minute = Number(value.substring(4, 6));
      return direction * (hour * 60 + minute) * 60 * 1e3;
    };
    stripLeadingZeroes = (value) => {
      let idx = 0;
      while (idx < value.length - 1 && value.charAt(idx) === "0") {
        idx++;
      }
      if (idx === 0) {
        return value;
      }
      return value.slice(idx);
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/serde/lazy-json.js
var LazyJsonString2;
var init_lazy_json = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/serde/lazy-json.js"() {
    LazyJsonString2 = function LazyJsonString3(val) {
      const str = Object.assign(new String(val), {
        deserializeJSON() {
          return JSON.parse(String(val));
        },
        toString() {
          return String(val);
        },
        toJSON() {
          return String(val);
        },
      });
      return str;
    };
    LazyJsonString2.from = (object) => {
      if (object && typeof object === "object" && (object instanceof LazyJsonString2 || "deserializeJSON" in object)) {
        return object;
      } else if (typeof object === "string" || Object.getPrototypeOf(object) === String.prototype) {
        return LazyJsonString2(String(object));
      }
      return LazyJsonString2(JSON.stringify(object));
    };
    LazyJsonString2.fromObject = LazyJsonString2.from;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/serde/quote-header.js
function quoteHeader2(part) {
  if (part.includes(",") || part.includes('"')) {
    part = `"${part.replace(/"/g, '\\"')}"`;
  }
  return part;
}
var init_quote_header = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/serde/quote-header.js"() {},
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/serde/split-every.js
function splitEvery2(value, delimiter, numDelimiters) {
  if (numDelimiters <= 0 || !Number.isInteger(numDelimiters)) {
    throw new Error("Invalid number of delimiters (" + numDelimiters + ") for splitEvery.");
  }
  const segments = value.split(delimiter);
  if (numDelimiters === 1) {
    return segments;
  }
  const compoundSegments = [];
  let currentSegment = "";
  for (let i = 0; i < segments.length; i++) {
    if (currentSegment === "") {
      currentSegment = segments[i];
    } else {
      currentSegment += delimiter + segments[i];
    }
    if ((i + 1) % numDelimiters === 0) {
      compoundSegments.push(currentSegment);
      currentSegment = "";
    }
  }
  if (currentSegment !== "") {
    compoundSegments.push(currentSegment);
  }
  return compoundSegments;
}
var init_split_every = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/serde/split-every.js"() {},
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/serde/split-header.js
var splitHeader2;
var init_split_header = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/serde/split-header.js"() {
    splitHeader2 = (value) => {
      const z = value.length;
      const values = [];
      let withinQuotes = false;
      let prevChar = void 0;
      let anchor = 0;
      for (let i = 0; i < z; ++i) {
        const char = value[i];
        switch (char) {
          case `"`:
            if (prevChar !== "\\") {
              withinQuotes = !withinQuotes;
            }
            break;
          case ",":
            if (!withinQuotes) {
              values.push(value.slice(anchor, i));
              anchor = i + 1;
            }
            break;
          default:
        }
        prevChar = char;
      }
      values.push(value.slice(anchor));
      return values.map((v) => {
        v = v.trim();
        const z2 = v.length;
        if (z2 < 2) {
          return v;
        }
        if (v[0] === `"` && v[z2 - 1] === `"`) {
          v = v.slice(1, z2 - 1);
        }
        return v.replace(/\\"/g, '"');
      });
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/serde/value/NumericValue.js
function nv2(input) {
  return new NumericValue2(String(input), "bigDecimal");
}
var NumericValue2;
var init_NumericValue = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/serde/value/NumericValue.js"() {
    NumericValue2 = class {
      constructor(string, type) {
        this.string = string;
        this.type = type;
        let dot = 0;
        for (let i = 0; i < string.length; ++i) {
          const char = string.charCodeAt(i);
          if (i === 0 && char === 45) {
            continue;
          }
          if (char === 46) {
            if (dot) {
              throw new Error("@smithy/core/serde - NumericValue must contain at most one decimal point.");
            }
            dot = 1;
            continue;
          }
          if (char < 48 || char > 57) {
            throw new Error(
              `@smithy/core/serde - NumericValue must only contain [0-9], at most one decimal point ".", and an optional negation prefix "-".`,
            );
          }
        }
      }
      toString() {
        return this.string;
      }
      [Symbol.hasInstance](object) {
        if (!object || typeof object !== "object") {
          return false;
        }
        const _nv = object;
        if (
          typeof _nv.string === "string" &&
          typeof _nv.type === "string" &&
          _nv.constructor?.name === "NumericValue"
        ) {
          return true;
        }
        return false;
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/serde/index.js
var serde_exports = {};
__export(serde_exports, {
  LazyJsonString: () => LazyJsonString2,
  NumericValue: () => NumericValue2,
  copyDocumentWithTransform: () => copyDocumentWithTransform2,
  dateToUtcString: () => dateToUtcString2,
  expectBoolean: () => expectBoolean2,
  expectByte: () => expectByte2,
  expectFloat32: () => expectFloat322,
  expectInt: () => expectInt2,
  expectInt32: () => expectInt322,
  expectLong: () => expectLong2,
  expectNonNull: () => expectNonNull2,
  expectNumber: () => expectNumber2,
  expectObject: () => expectObject2,
  expectShort: () => expectShort2,
  expectString: () => expectString2,
  expectUnion: () => expectUnion2,
  handleFloat: () => handleFloat2,
  limitedParseDouble: () => limitedParseDouble2,
  limitedParseFloat: () => limitedParseFloat2,
  limitedParseFloat32: () => limitedParseFloat322,
  logger: () => logger2,
  nv: () => nv2,
  parseBoolean: () => parseBoolean2,
  parseEpochTimestamp: () => parseEpochTimestamp2,
  parseRfc3339DateTime: () => parseRfc3339DateTime2,
  parseRfc3339DateTimeWithOffset: () => parseRfc3339DateTimeWithOffset2,
  parseRfc7231DateTime: () => parseRfc7231DateTime2,
  quoteHeader: () => quoteHeader2,
  splitEvery: () => splitEvery2,
  splitHeader: () => splitHeader2,
  strictParseByte: () => strictParseByte2,
  strictParseDouble: () => strictParseDouble2,
  strictParseFloat: () => strictParseFloat2,
  strictParseFloat32: () => strictParseFloat322,
  strictParseInt: () => strictParseInt2,
  strictParseInt32: () => strictParseInt322,
  strictParseLong: () => strictParseLong2,
  strictParseShort: () => strictParseShort2,
});
var init_serde = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/serde/index.js"() {
    init_copyDocumentWithTransform();
    init_date_utils();
    init_lazy_json();
    init_parse_utils();
    init_quote_header();
    init_split_every();
    init_split_header();
    init_NumericValue();
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/protocols/HttpProtocol.js
var import_protocol_http3, import_util_stream2, HttpProtocol;
var init_HttpProtocol = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/protocols/HttpProtocol.js"() {
    init_schema();
    init_serde();
    import_protocol_http3 = __toESM(require_dist_cjs3());
    import_util_stream2 = __toESM(require_dist_cjs14());
    init_collect_stream_body();
    HttpProtocol = class {
      constructor(options) {
        this.options = options;
      }
      getRequestType() {
        return import_protocol_http3.HttpRequest;
      }
      getResponseType() {
        return import_protocol_http3.HttpResponse;
      }
      setSerdeContext(serdeContext) {
        this.serdeContext = serdeContext;
        this.serializer.setSerdeContext(serdeContext);
        this.deserializer.setSerdeContext(serdeContext);
        if (this.getPayloadCodec()) {
          this.getPayloadCodec().setSerdeContext(serdeContext);
        }
      }
      updateServiceEndpoint(request, endpoint) {
        if ("url" in endpoint) {
          request.protocol = endpoint.url.protocol;
          request.hostname = endpoint.url.hostname;
          request.port = endpoint.url.port ? Number(endpoint.url.port) : void 0;
          request.path = endpoint.url.pathname;
          request.fragment = endpoint.url.hash || void 0;
          request.username = endpoint.url.username || void 0;
          request.password = endpoint.url.password || void 0;
          for (const [k, v] of endpoint.url.searchParams.entries()) {
            if (!request.query) {
              request.query = {};
            }
            request.query[k] = v;
          }
          return request;
        } else {
          request.protocol = endpoint.protocol;
          request.hostname = endpoint.hostname;
          request.port = endpoint.port ? Number(endpoint.port) : void 0;
          request.path = endpoint.path;
          request.query = {
            ...endpoint.query,
          };
          return request;
        }
      }
      setHostPrefix(request, operationSchema, input) {
        const operationNs = NormalizedSchema.of(operationSchema);
        const inputNs = NormalizedSchema.of(operationSchema.input);
        if (operationNs.getMergedTraits().endpoint) {
          let hostPrefix = operationNs.getMergedTraits().endpoint?.[0];
          if (typeof hostPrefix === "string") {
            const hostLabelInputs = [...inputNs.structIterator()].filter(
              ([, member]) => member.getMergedTraits().hostLabel,
            );
            for (const [name] of hostLabelInputs) {
              const replacement = input[name];
              if (typeof replacement !== "string") {
                throw new Error(`@smithy/core/schema - ${name} in input must be a string as hostLabel.`);
              }
              hostPrefix = hostPrefix.replace(`{${name}}`, replacement);
            }
            request.hostname = hostPrefix + request.hostname;
          }
        }
      }
      deserializeMetadata(output) {
        return {
          httpStatusCode: output.statusCode,
          requestId:
            output.headers["x-amzn-requestid"] ??
            output.headers["x-amzn-request-id"] ??
            output.headers["x-amz-request-id"],
          extendedRequestId: output.headers["x-amz-id-2"],
          cfId: output.headers["x-amz-cf-id"],
        };
      }
      async deserializeHttpMessage(schema, context, response, arg4, arg5) {
        let dataObject;
        if (arg4 instanceof Set) {
          dataObject = arg5;
        } else {
          dataObject = arg4;
        }
        const deserializer = this.deserializer;
        const ns = NormalizedSchema.of(schema);
        const nonHttpBindingMembers = [];
        for (const [memberName, memberSchema] of ns.structIterator()) {
          const memberTraits = memberSchema.getMemberTraits();
          if (memberTraits.httpPayload) {
            const isStreaming = memberSchema.isStreaming();
            if (isStreaming) {
              const isEventStream = memberSchema.isStructSchema();
              if (isEventStream) {
                const context2 = this.serdeContext;
                if (!context2.eventStreamMarshaller) {
                  throw new Error("@smithy/core - HttpProtocol: eventStreamMarshaller missing in serdeContext.");
                }
                const memberSchemas = memberSchema.getMemberSchemas();
                dataObject[memberName] = context2.eventStreamMarshaller.deserialize(response.body, async (event) => {
                  const unionMember =
                    Object.keys(event).find((key) => {
                      return key !== "__type";
                    }) ?? "";
                  if (unionMember in memberSchemas) {
                    const eventStreamSchema = memberSchemas[unionMember];
                    return {
                      [unionMember]: await deserializer.read(eventStreamSchema, event[unionMember].body),
                    };
                  } else {
                    return {
                      $unknown: event,
                    };
                  }
                });
              } else {
                dataObject[memberName] = (0, import_util_stream2.sdkStreamMixin)(response.body);
              }
            } else if (response.body) {
              const bytes = await collectBody2(response.body, context);
              if (bytes.byteLength > 0) {
                dataObject[memberName] = await deserializer.read(memberSchema, bytes);
              }
            }
          } else if (memberTraits.httpHeader) {
            const key = String(memberTraits.httpHeader).toLowerCase();
            const value = response.headers[key];
            if (null != value) {
              if (memberSchema.isListSchema()) {
                const headerListValueSchema = memberSchema.getValueSchema();
                let sections;
                if (
                  headerListValueSchema.isTimestampSchema() &&
                  headerListValueSchema.getSchema() === SCHEMA.TIMESTAMP_DEFAULT
                ) {
                  sections = splitEvery2(value, ",", 2);
                } else {
                  sections = splitHeader2(value);
                }
                const list = [];
                for (const section of sections) {
                  list.push(await deserializer.read([headerListValueSchema, { httpHeader: key }], section.trim()));
                }
                dataObject[memberName] = list;
              } else {
                dataObject[memberName] = await deserializer.read(memberSchema, value);
              }
            }
          } else if (memberTraits.httpPrefixHeaders !== void 0) {
            dataObject[memberName] = {};
            for (const [header, value] of Object.entries(response.headers)) {
              if (header.startsWith(memberTraits.httpPrefixHeaders)) {
                dataObject[memberName][header.slice(memberTraits.httpPrefixHeaders.length)] = await deserializer.read(
                  [memberSchema.getValueSchema(), { httpHeader: header }],
                  value,
                );
              }
            }
          } else if (memberTraits.httpResponseCode) {
            dataObject[memberName] = response.statusCode;
          } else {
            nonHttpBindingMembers.push(memberName);
          }
        }
        return nonHttpBindingMembers;
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/protocols/HttpBindingProtocol.js
var import_protocol_http4, HttpBindingProtocol;
var init_HttpBindingProtocol = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/protocols/HttpBindingProtocol.js"() {
    init_schema();
    import_protocol_http4 = __toESM(require_dist_cjs3());
    init_collect_stream_body();
    init_extended_encode_uri_component();
    init_HttpProtocol();
    HttpBindingProtocol = class extends HttpProtocol {
      async serializeRequest(operationSchema, _input, context) {
        const input = {
          ...(_input ?? {}),
        };
        const serializer = this.serializer;
        const query = {};
        const headers = {};
        const endpoint = await context.endpoint();
        const ns = NormalizedSchema.of(operationSchema?.input);
        const schema = ns.getSchema();
        let hasNonHttpBindingMember = false;
        let payload;
        const request = new import_protocol_http4.HttpRequest({
          protocol: "",
          hostname: "",
          port: void 0,
          path: "",
          fragment: void 0,
          query,
          headers,
          body: void 0,
        });
        if (endpoint) {
          this.updateServiceEndpoint(request, endpoint);
          this.setHostPrefix(request, operationSchema, input);
          const opTraits = NormalizedSchema.translateTraits(operationSchema.traits);
          if (opTraits.http) {
            request.method = opTraits.http[0];
            const [path, search] = opTraits.http[1].split("?");
            if (request.path == "/") {
              request.path = path;
            } else {
              request.path += path;
            }
            const traitSearchParams = new URLSearchParams(search ?? "");
            Object.assign(query, Object.fromEntries(traitSearchParams));
          }
        }
        for (const [memberName, memberNs] of ns.structIterator()) {
          const memberTraits = memberNs.getMergedTraits() ?? {};
          const inputMemberValue = input[memberName];
          if (inputMemberValue == null) {
            continue;
          }
          if (memberTraits.httpPayload) {
            const isStreaming = memberNs.isStreaming();
            if (isStreaming) {
              const isEventStream = memberNs.isStructSchema();
              if (isEventStream) {
                throw new Error("serialization of event streams is not yet implemented");
              } else {
                payload = inputMemberValue;
              }
            } else {
              serializer.write(memberNs, inputMemberValue);
              payload = serializer.flush();
            }
            delete input[memberName];
          } else if (memberTraits.httpLabel) {
            serializer.write(memberNs, inputMemberValue);
            const replacement = serializer.flush();
            if (request.path.includes(`{${memberName}+}`)) {
              request.path = request.path.replace(
                `{${memberName}+}`,
                replacement.split("/").map(extendedEncodeURIComponent2).join("/"),
              );
            } else if (request.path.includes(`{${memberName}}`)) {
              request.path = request.path.replace(`{${memberName}}`, extendedEncodeURIComponent2(replacement));
            }
            delete input[memberName];
          } else if (memberTraits.httpHeader) {
            serializer.write(memberNs, inputMemberValue);
            headers[memberTraits.httpHeader.toLowerCase()] = String(serializer.flush());
            delete input[memberName];
          } else if (typeof memberTraits.httpPrefixHeaders === "string") {
            for (const [key, val] of Object.entries(inputMemberValue)) {
              const amalgam = memberTraits.httpPrefixHeaders + key;
              serializer.write([memberNs.getValueSchema(), { httpHeader: amalgam }], val);
              headers[amalgam.toLowerCase()] = serializer.flush();
            }
            delete input[memberName];
          } else if (memberTraits.httpQuery || memberTraits.httpQueryParams) {
            this.serializeQuery(memberNs, inputMemberValue, query);
            delete input[memberName];
          } else {
            hasNonHttpBindingMember = true;
          }
        }
        if (hasNonHttpBindingMember && input) {
          serializer.write(schema, input);
          payload = serializer.flush();
        }
        request.headers = headers;
        request.query = query;
        request.body = payload;
        return request;
      }
      serializeQuery(ns, data, query) {
        const serializer = this.serializer;
        const traits = ns.getMergedTraits();
        if (traits.httpQueryParams) {
          for (const [key, val] of Object.entries(data)) {
            if (!(key in query)) {
              this.serializeQuery(
                NormalizedSchema.of([
                  ns.getValueSchema(),
                  {
                    ...traits,
                    httpQuery: key,
                    httpQueryParams: void 0,
                  },
                ]),
                val,
                query,
              );
            }
          }
          return;
        }
        if (ns.isListSchema()) {
          const sparse = !!ns.getMergedTraits().sparse;
          const buffer = [];
          for (const item of data) {
            serializer.write([ns.getValueSchema(), traits], item);
            const serializable = serializer.flush();
            if (sparse || serializable !== void 0) {
              buffer.push(serializable);
            }
          }
          query[traits.httpQuery] = buffer;
        } else {
          serializer.write([ns, traits], data);
          query[traits.httpQuery] = serializer.flush();
        }
      }
      async deserializeResponse(operationSchema, context, response) {
        const deserializer = this.deserializer;
        const ns = NormalizedSchema.of(operationSchema.output);
        const dataObject = {};
        if (response.statusCode >= 300) {
          const bytes = await collectBody2(response.body, context);
          if (bytes.byteLength > 0) {
            Object.assign(dataObject, await deserializer.read(SCHEMA.DOCUMENT, bytes));
          }
          await this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
          throw new Error("@smithy/core/protocols - HTTP Protocol error handler failed to throw.");
        }
        for (const header in response.headers) {
          const value = response.headers[header];
          delete response.headers[header];
          response.headers[header.toLowerCase()] = value;
        }
        const nonHttpBindingMembers = await this.deserializeHttpMessage(ns, context, response, dataObject);
        if (nonHttpBindingMembers.length) {
          const bytes = await collectBody2(response.body, context);
          if (bytes.byteLength > 0) {
            const dataFromBody = await deserializer.read(ns, bytes);
            for (const member of nonHttpBindingMembers) {
              dataObject[member] = dataFromBody[member];
            }
          }
        }
        const output = {
          $metadata: this.deserializeMetadata(response),
          ...dataObject,
        };
        return output;
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/protocols/RpcProtocol.js
var import_protocol_http5, RpcProtocol;
var init_RpcProtocol = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/protocols/RpcProtocol.js"() {
    init_schema();
    import_protocol_http5 = __toESM(require_dist_cjs3());
    init_collect_stream_body();
    init_HttpProtocol();
    RpcProtocol = class extends HttpProtocol {
      async serializeRequest(operationSchema, input, context) {
        const serializer = this.serializer;
        const query = {};
        const headers = {};
        const endpoint = await context.endpoint();
        const ns = NormalizedSchema.of(operationSchema?.input);
        const schema = ns.getSchema();
        let payload;
        const request = new import_protocol_http5.HttpRequest({
          protocol: "",
          hostname: "",
          port: void 0,
          path: "/",
          fragment: void 0,
          query,
          headers,
          body: void 0,
        });
        if (endpoint) {
          this.updateServiceEndpoint(request, endpoint);
          this.setHostPrefix(request, operationSchema, input);
        }
        const _input = {
          ...input,
        };
        if (input) {
          serializer.write(schema, _input);
          payload = serializer.flush();
        }
        request.headers = headers;
        request.query = query;
        request.body = payload;
        request.method = "POST";
        return request;
      }
      async deserializeResponse(operationSchema, context, response) {
        const deserializer = this.deserializer;
        const ns = NormalizedSchema.of(operationSchema.output);
        const dataObject = {};
        if (response.statusCode >= 300) {
          const bytes2 = await collectBody2(response.body, context);
          if (bytes2.byteLength > 0) {
            Object.assign(dataObject, await deserializer.read(SCHEMA.DOCUMENT, bytes2));
          }
          await this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
          throw new Error("@smithy/core/protocols - RPC Protocol error handler failed to throw.");
        }
        for (const header in response.headers) {
          const value = response.headers[header];
          delete response.headers[header];
          response.headers[header.toLowerCase()] = value;
        }
        const bytes = await collectBody2(response.body, context);
        if (bytes.byteLength > 0) {
          Object.assign(dataObject, await deserializer.read(ns, bytes));
        }
        const output = {
          $metadata: this.deserializeMetadata(response),
          ...dataObject,
        };
        return output;
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/protocols/resolve-path.js
var resolvedPath2;
var init_resolve_path = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/protocols/resolve-path.js"() {
    init_extended_encode_uri_component();
    resolvedPath2 = (resolvedPath3, input, memberName, labelValueProvider, uriLabel, isGreedyLabel) => {
      if (input != null && input[memberName] !== void 0) {
        const labelValue = labelValueProvider();
        if (labelValue.length <= 0) {
          throw new Error("Empty value provided for input HTTP label: " + memberName + ".");
        }
        resolvedPath3 = resolvedPath3.replace(
          uriLabel,
          isGreedyLabel
            ? labelValue
                .split("/")
                .map((segment) => extendedEncodeURIComponent2(segment))
                .join("/")
            : extendedEncodeURIComponent2(labelValue),
        );
      } else {
        throw new Error("No value provided for input HTTP label: " + memberName + ".");
      }
      return resolvedPath3;
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/protocols/requestBuilder.js
function requestBuilder(input, context) {
  return new RequestBuilder(input, context);
}
var import_protocol_http6, RequestBuilder;
var init_requestBuilder = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/protocols/requestBuilder.js"() {
    import_protocol_http6 = __toESM(require_dist_cjs3());
    init_resolve_path();
    RequestBuilder = class {
      constructor(input, context) {
        this.input = input;
        this.context = context;
        this.query = {};
        this.method = "";
        this.headers = {};
        this.path = "";
        this.body = null;
        this.hostname = "";
        this.resolvePathStack = [];
      }
      async build() {
        const { hostname, protocol = "https", port, path: basePath } = await this.context.endpoint();
        this.path = basePath;
        for (const resolvePath of this.resolvePathStack) {
          resolvePath(this.path);
        }
        return new import_protocol_http6.HttpRequest({
          protocol,
          hostname: this.hostname || hostname,
          port,
          method: this.method,
          path: this.path,
          query: this.query,
          body: this.body,
          headers: this.headers,
        });
      }
      hn(hostname) {
        this.hostname = hostname;
        return this;
      }
      bp(uriLabel) {
        this.resolvePathStack.push((basePath) => {
          this.path = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + uriLabel;
        });
        return this;
      }
      p(memberName, labelValueProvider, uriLabel, isGreedyLabel) {
        this.resolvePathStack.push((path) => {
          this.path = resolvedPath2(path, this.input, memberName, labelValueProvider, uriLabel, isGreedyLabel);
        });
        return this;
      }
      h(headers) {
        this.headers = headers;
        return this;
      }
      q(query) {
        this.query = query;
        return this;
      }
      b(body) {
        this.body = body;
        return this;
      }
      m(method) {
        this.method = method;
        return this;
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/protocols/serde/determineTimestampFormat.js
function determineTimestampFormat(ns, settings) {
  if (settings.timestampFormat.useTrait) {
    if (
      ns.isTimestampSchema() &&
      (ns.getSchema() === SCHEMA.TIMESTAMP_DATE_TIME ||
        ns.getSchema() === SCHEMA.TIMESTAMP_HTTP_DATE ||
        ns.getSchema() === SCHEMA.TIMESTAMP_EPOCH_SECONDS)
    ) {
      return ns.getSchema();
    }
  }
  const { httpLabel, httpPrefixHeaders, httpHeader, httpQuery } = ns.getMergedTraits();
  const bindingFormat = settings.httpBindings
    ? typeof httpPrefixHeaders === "string" || Boolean(httpHeader)
      ? SCHEMA.TIMESTAMP_HTTP_DATE
      : Boolean(httpQuery) || Boolean(httpLabel)
        ? SCHEMA.TIMESTAMP_DATE_TIME
        : void 0
    : void 0;
  return bindingFormat ?? settings.timestampFormat.default;
}
var init_determineTimestampFormat = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/protocols/serde/determineTimestampFormat.js"() {
    init_schema();
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/protocols/serde/FromStringShapeDeserializer.js
var import_util_base64, import_util_utf8, FromStringShapeDeserializer;
var init_FromStringShapeDeserializer = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/protocols/serde/FromStringShapeDeserializer.js"() {
    init_schema();
    init_serde();
    import_util_base64 = __toESM(require_dist_cjs8());
    import_util_utf8 = __toESM(require_dist_cjs7());
    init_determineTimestampFormat();
    FromStringShapeDeserializer = class {
      constructor(settings) {
        this.settings = settings;
      }
      setSerdeContext(serdeContext) {
        this.serdeContext = serdeContext;
      }
      read(_schema, data) {
        const ns = NormalizedSchema.of(_schema);
        if (ns.isListSchema()) {
          return splitHeader2(data).map((item) => this.read(ns.getValueSchema(), item));
        }
        if (ns.isBlobSchema()) {
          return (this.serdeContext?.base64Decoder ?? import_util_base64.fromBase64)(data);
        }
        if (ns.isTimestampSchema()) {
          const format = determineTimestampFormat(ns, this.settings);
          switch (format) {
            case SCHEMA.TIMESTAMP_DATE_TIME:
              return parseRfc3339DateTimeWithOffset2(data);
            case SCHEMA.TIMESTAMP_HTTP_DATE:
              return parseRfc7231DateTime2(data);
            case SCHEMA.TIMESTAMP_EPOCH_SECONDS:
              return parseEpochTimestamp2(data);
            default:
              console.warn("Missing timestamp format, parsing value with Date constructor:", data);
              return new Date(data);
          }
        }
        if (ns.isStringSchema()) {
          const mediaType = ns.getMergedTraits().mediaType;
          let intermediateValue = data;
          if (mediaType) {
            if (ns.getMergedTraits().httpHeader) {
              intermediateValue = this.base64ToUtf8(intermediateValue);
            }
            const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
            if (isJson) {
              intermediateValue = LazyJsonString2.from(intermediateValue);
            }
            return intermediateValue;
          }
        }
        switch (true) {
          case ns.isNumericSchema():
            return Number(data);
          case ns.isBigIntegerSchema():
            return BigInt(data);
          case ns.isBigDecimalSchema():
            return new NumericValue2(data, "bigDecimal");
          case ns.isBooleanSchema():
            return String(data).toLowerCase() === "true";
        }
        return data;
      }
      base64ToUtf8(base64String) {
        return (this.serdeContext?.utf8Encoder ?? import_util_utf8.toUtf8)(
          (this.serdeContext?.base64Decoder ?? import_util_base64.fromBase64)(base64String),
        );
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeDeserializer.js
var import_util_utf82, HttpInterceptingShapeDeserializer;
var init_HttpInterceptingShapeDeserializer = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeDeserializer.js"() {
    init_schema();
    import_util_utf82 = __toESM(require_dist_cjs7());
    init_FromStringShapeDeserializer();
    HttpInterceptingShapeDeserializer = class {
      constructor(codecDeserializer, codecSettings) {
        this.codecDeserializer = codecDeserializer;
        this.stringDeserializer = new FromStringShapeDeserializer(codecSettings);
      }
      setSerdeContext(serdeContext) {
        this.stringDeserializer.setSerdeContext(serdeContext);
        this.codecDeserializer.setSerdeContext(serdeContext);
        this.serdeContext = serdeContext;
      }
      read(schema, data) {
        const ns = NormalizedSchema.of(schema);
        const traits = ns.getMergedTraits();
        const toString = this.serdeContext?.utf8Encoder ?? import_util_utf82.toUtf8;
        if (traits.httpHeader || traits.httpResponseCode) {
          return this.stringDeserializer.read(ns, toString(data));
        }
        if (traits.httpPayload) {
          if (ns.isBlobSchema()) {
            const toBytes = this.serdeContext?.utf8Decoder ?? import_util_utf82.fromUtf8;
            if (typeof data === "string") {
              return toBytes(data);
            }
            return data;
          } else if (ns.isStringSchema()) {
            if ("byteLength" in data) {
              return toString(data);
            }
            return data;
          }
        }
        return this.codecDeserializer.read(ns, data);
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/protocols/serde/ToStringShapeSerializer.js
var import_util_base642, ToStringShapeSerializer;
var init_ToStringShapeSerializer = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/protocols/serde/ToStringShapeSerializer.js"() {
    init_schema();
    init_serde();
    import_util_base642 = __toESM(require_dist_cjs8());
    init_determineTimestampFormat();
    ToStringShapeSerializer = class {
      constructor(settings) {
        this.settings = settings;
        this.stringBuffer = "";
        this.serdeContext = void 0;
      }
      setSerdeContext(serdeContext) {
        this.serdeContext = serdeContext;
      }
      write(schema, value) {
        const ns = NormalizedSchema.of(schema);
        switch (typeof value) {
          case "object":
            if (value === null) {
              this.stringBuffer = "null";
              return;
            }
            if (ns.isTimestampSchema()) {
              if (!(value instanceof Date)) {
                throw new Error(
                  `@smithy/core/protocols - received non-Date value ${value} when schema expected Date in ${ns.getName(true)}`,
                );
              }
              const format = determineTimestampFormat(ns, this.settings);
              switch (format) {
                case SCHEMA.TIMESTAMP_DATE_TIME:
                  this.stringBuffer = value.toISOString().replace(".000Z", "Z");
                  break;
                case SCHEMA.TIMESTAMP_HTTP_DATE:
                  this.stringBuffer = dateToUtcString2(value);
                  break;
                case SCHEMA.TIMESTAMP_EPOCH_SECONDS:
                  this.stringBuffer = String(value.getTime() / 1e3);
                  break;
                default:
                  console.warn("Missing timestamp format, using epoch seconds", value);
                  this.stringBuffer = String(value.getTime() / 1e3);
              }
              return;
            }
            if (ns.isBlobSchema() && "byteLength" in value) {
              this.stringBuffer = (this.serdeContext?.base64Encoder ?? import_util_base642.toBase64)(value);
              return;
            }
            if (ns.isListSchema() && Array.isArray(value)) {
              let buffer = "";
              for (const item of value) {
                this.write([ns.getValueSchema(), ns.getMergedTraits()], item);
                const headerItem = this.flush();
                const serialized = ns.getValueSchema().isTimestampSchema() ? headerItem : quoteHeader2(headerItem);
                if (buffer !== "") {
                  buffer += ", ";
                }
                buffer += serialized;
              }
              this.stringBuffer = buffer;
              return;
            }
            this.stringBuffer = JSON.stringify(value, null, 2);
            break;
          case "string":
            const mediaType = ns.getMergedTraits().mediaType;
            let intermediateValue = value;
            if (mediaType) {
              const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
              if (isJson) {
                intermediateValue = LazyJsonString2.from(intermediateValue);
              }
              if (ns.getMergedTraits().httpHeader) {
                this.stringBuffer = (this.serdeContext?.base64Encoder ?? import_util_base642.toBase64)(
                  intermediateValue.toString(),
                );
                return;
              }
            }
            this.stringBuffer = value;
            break;
          default:
            this.stringBuffer = String(value);
        }
      }
      flush() {
        const buffer = this.stringBuffer;
        this.stringBuffer = "";
        return buffer;
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeSerializer.js
var HttpInterceptingShapeSerializer;
var init_HttpInterceptingShapeSerializer = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeSerializer.js"() {
    init_schema();
    init_ToStringShapeSerializer();
    HttpInterceptingShapeSerializer = class {
      constructor(codecSerializer, codecSettings, stringSerializer = new ToStringShapeSerializer(codecSettings)) {
        this.codecSerializer = codecSerializer;
        this.stringSerializer = stringSerializer;
      }
      setSerdeContext(serdeContext) {
        this.codecSerializer.setSerdeContext(serdeContext);
        this.stringSerializer.setSerdeContext(serdeContext);
      }
      write(schema, value) {
        const ns = NormalizedSchema.of(schema);
        const traits = ns.getMergedTraits();
        if (traits.httpHeader || traits.httpLabel || traits.httpQuery) {
          this.stringSerializer.write(ns, value);
          this.buffer = this.stringSerializer.flush();
          return;
        }
        return this.codecSerializer.write(ns, value);
      }
      flush() {
        if (this.buffer !== void 0) {
          const buffer = this.buffer;
          this.buffer = void 0;
          return buffer;
        }
        return this.codecSerializer.flush();
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/protocols/index.js
var protocols_exports = {};
__export(protocols_exports, {
  FromStringShapeDeserializer: () => FromStringShapeDeserializer,
  HttpBindingProtocol: () => HttpBindingProtocol,
  HttpInterceptingShapeDeserializer: () => HttpInterceptingShapeDeserializer,
  HttpInterceptingShapeSerializer: () => HttpInterceptingShapeSerializer,
  RequestBuilder: () => RequestBuilder,
  RpcProtocol: () => RpcProtocol,
  ToStringShapeSerializer: () => ToStringShapeSerializer,
  collectBody: () => collectBody2,
  determineTimestampFormat: () => determineTimestampFormat,
  extendedEncodeURIComponent: () => extendedEncodeURIComponent2,
  requestBuilder: () => requestBuilder,
  resolvedPath: () => resolvedPath2,
});
var init_protocols = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/protocols/index.js"() {
    init_collect_stream_body();
    init_extended_encode_uri_component();
    init_HttpBindingProtocol();
    init_RpcProtocol();
    init_requestBuilder();
    init_resolve_path();
    init_FromStringShapeDeserializer();
    init_HttpInterceptingShapeDeserializer();
    init_HttpInterceptingShapeSerializer();
    init_ToStringShapeSerializer();
    init_determineTimestampFormat();
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/protocols/requestBuilder.js
var init_requestBuilder2 = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/protocols/requestBuilder.js"() {
    init_protocols();
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/setFeature.js
function setFeature(context, feature, value) {
  if (!context.__smithy_context) {
    context.__smithy_context = {
      features: {},
    };
  } else if (!context.__smithy_context.features) {
    context.__smithy_context.features = {};
  }
  context.__smithy_context.features[feature] = value;
}
var init_setFeature = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/setFeature.js"() {},
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js
var DefaultIdentityProviderConfig;
var init_DefaultIdentityProviderConfig = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js"() {
    DefaultIdentityProviderConfig = class {
      constructor(config) {
        this.authSchemes = /* @__PURE__ */ new Map();
        for (const [key, value] of Object.entries(config)) {
          if (value !== void 0) {
            this.authSchemes.set(key, value);
          }
        }
      }
      getIdentityProvider(schemeId) {
        return this.authSchemes.get(schemeId);
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js
var import_protocol_http7, import_types4, HttpApiKeyAuthSigner;
var init_httpApiKeyAuth = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js"() {
    import_protocol_http7 = __toESM(require_dist_cjs3());
    import_types4 = __toESM(require_dist_cjs());
    HttpApiKeyAuthSigner = class {
      async sign(httpRequest, identity, signingProperties) {
        if (!signingProperties) {
          throw new Error(
            "request could not be signed with `apiKey` since the `name` and `in` signer properties are missing",
          );
        }
        if (!signingProperties.name) {
          throw new Error("request could not be signed with `apiKey` since the `name` signer property is missing");
        }
        if (!signingProperties.in) {
          throw new Error("request could not be signed with `apiKey` since the `in` signer property is missing");
        }
        if (!identity.apiKey) {
          throw new Error("request could not be signed with `apiKey` since the `apiKey` is not defined");
        }
        const clonedRequest = import_protocol_http7.HttpRequest.clone(httpRequest);
        if (signingProperties.in === import_types4.HttpApiKeyAuthLocation.QUERY) {
          clonedRequest.query[signingProperties.name] = identity.apiKey;
        } else if (signingProperties.in === import_types4.HttpApiKeyAuthLocation.HEADER) {
          clonedRequest.headers[signingProperties.name] = signingProperties.scheme
            ? `${signingProperties.scheme} ${identity.apiKey}`
            : identity.apiKey;
        } else {
          throw new Error(
            "request can only be signed with `apiKey` locations `query` or `header`, but found: `" +
              signingProperties.in +
              "`",
          );
        }
        return clonedRequest;
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js
var import_protocol_http8, HttpBearerAuthSigner;
var init_httpBearerAuth = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js"() {
    import_protocol_http8 = __toESM(require_dist_cjs3());
    HttpBearerAuthSigner = class {
      async sign(httpRequest, identity, signingProperties) {
        const clonedRequest = import_protocol_http8.HttpRequest.clone(httpRequest);
        if (!identity.token) {
          throw new Error("request could not be signed with `token` since the `token` is not defined");
        }
        clonedRequest.headers["Authorization"] = `Bearer ${identity.token}`;
        return clonedRequest;
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js
var NoAuthSigner;
var init_noAuth = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js"() {
    NoAuthSigner = class {
      async sign(httpRequest, identity, signingProperties) {
        return httpRequest;
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js
var init_httpAuthSchemes = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js"() {
    init_httpApiKeyAuth();
    init_httpBearerAuth();
    init_noAuth();
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js
var createIsIdentityExpiredFunction,
  EXPIRATION_MS,
  isIdentityExpired,
  doesIdentityRequireRefresh,
  memoizeIdentityProvider;
var init_memoizeIdentityProvider = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js"() {
    createIsIdentityExpiredFunction = (expirationMs) => (identity) =>
      doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
    EXPIRATION_MS = 3e5;
    isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
    doesIdentityRequireRefresh = (identity) => identity.expiration !== void 0;
    memoizeIdentityProvider = (provider, isExpired, requiresRefresh) => {
      if (provider === void 0) {
        return void 0;
      }
      const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
      let resolved;
      let pending;
      let hasResult;
      let isConstant = false;
      const coalesceProvider = async (options) => {
        if (!pending) {
          pending = normalizedProvider(options);
        }
        try {
          resolved = await pending;
          hasResult = true;
          isConstant = false;
        } finally {
          pending = void 0;
        }
        return resolved;
      };
      if (isExpired === void 0) {
        return async (options) => {
          if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider(options);
          }
          return resolved;
        };
      }
      return async (options) => {
        if (!hasResult || options?.forceRefresh) {
          resolved = await coalesceProvider(options);
        }
        if (isConstant) {
          return resolved;
        }
        if (!requiresRefresh(resolved)) {
          isConstant = true;
          return resolved;
        }
        if (isExpired(resolved)) {
          await coalesceProvider(options);
          return resolved;
        }
        return resolved;
      };
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js
var init_util_identity_and_auth = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js"() {
    init_DefaultIdentityProviderConfig();
    init_httpAuthSchemes();
    init_memoizeIdentityProvider();
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/index.js
var dist_es_exports = {};
__export(dist_es_exports, {
  DefaultIdentityProviderConfig: () => DefaultIdentityProviderConfig,
  EXPIRATION_MS: () => EXPIRATION_MS,
  HttpApiKeyAuthSigner: () => HttpApiKeyAuthSigner,
  HttpBearerAuthSigner: () => HttpBearerAuthSigner,
  NoAuthSigner: () => NoAuthSigner,
  createIsIdentityExpiredFunction: () => createIsIdentityExpiredFunction,
  createPaginator: () => createPaginator,
  doesIdentityRequireRefresh: () => doesIdentityRequireRefresh,
  getHttpAuthSchemeEndpointRuleSetPlugin: () => getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpAuthSchemePlugin: () => getHttpAuthSchemePlugin,
  getHttpSigningPlugin: () => getHttpSigningPlugin,
  getSmithyContext: () => getSmithyContext2,
  httpAuthSchemeEndpointRuleSetMiddlewareOptions: () => httpAuthSchemeEndpointRuleSetMiddlewareOptions,
  httpAuthSchemeMiddleware: () => httpAuthSchemeMiddleware,
  httpAuthSchemeMiddlewareOptions: () => httpAuthSchemeMiddlewareOptions,
  httpSigningMiddleware: () => httpSigningMiddleware,
  httpSigningMiddlewareOptions: () => httpSigningMiddlewareOptions,
  isIdentityExpired: () => isIdentityExpired,
  memoizeIdentityProvider: () => memoizeIdentityProvider,
  normalizeProvider: () => normalizeProvider2,
  requestBuilder: () => requestBuilder,
  setFeature: () => setFeature,
});
var init_dist_es = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/index.js"() {
    init_getSmithyContext();
    init_middleware_http_auth_scheme();
    init_middleware_http_signing();
    init_normalizeProvider();
    init_createPaginator();
    init_requestBuilder2();
    init_setFeature();
    init_util_identity_and_auth();
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-cjs/index.js
var require_dist_cjs15 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      EndpointCache: () => EndpointCache2,
      EndpointError: () => EndpointError2,
      customEndpointFunctions: () => customEndpointFunctions,
      isIpAddress: () => isIpAddress2,
      isValidHostLabel: () => isValidHostLabel,
      resolveEndpoint: () => resolveEndpoint3,
    });
    module2.exports = __toCommonJS2(src_exports);
    var _a;
    var EndpointCache2 =
      ((_a = class {
        /**
         * @param [size] - desired average maximum capacity. A buffer of 10 additional keys will be allowed
         *                 before keys are dropped.
         * @param [params] - list of params to consider as part of the cache key.
         *
         * If the params list is not populated, no caching will happen.
         * This may be out of order depending on how the object is created and arrives to this class.
         */
        constructor({ size, params }) {
          this.data = /* @__PURE__ */ new Map();
          this.parameters = [];
          this.capacity = size ?? 50;
          if (params) {
            this.parameters = params;
          }
        }
        /**
         * @param endpointParams - query for endpoint.
         * @param resolver - provider of the value if not present.
         * @returns endpoint corresponding to the query.
         */
        get(endpointParams, resolver) {
          const key = this.hash(endpointParams);
          if (key === false) {
            return resolver();
          }
          if (!this.data.has(key)) {
            if (this.data.size > this.capacity + 10) {
              const keys = this.data.keys();
              let i = 0;
              while (true) {
                const { value, done } = keys.next();
                this.data.delete(value);
                if (done || ++i > 10) {
                  break;
                }
              }
            }
            this.data.set(key, resolver());
          }
          return this.data.get(key);
        }
        size() {
          return this.data.size;
        }
        /**
         * @returns cache key or false if not cachable.
         */
        hash(endpointParams) {
          let buffer = "";
          const { parameters } = this;
          if (parameters.length === 0) {
            return false;
          }
          for (const param of parameters) {
            const val = String(endpointParams[param] ?? "");
            if (val.includes("|;")) {
              return false;
            }
            buffer += val + "|;";
          }
          return buffer;
        }
      }),
      __name(_a, "EndpointCache"),
      _a);
    var IP_V4_REGEX = new RegExp(
      `^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`,
    );
    var isIpAddress2 = /* @__PURE__ */ __name(
      (value) => IP_V4_REGEX.test(value) || (value.startsWith("[") && value.endsWith("]")),
      "isIpAddress",
    );
    var VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
    var isValidHostLabel = /* @__PURE__ */ __name((value, allowSubDomains = false) => {
      if (!allowSubDomains) {
        return VALID_HOST_LABEL_REGEX.test(value);
      }
      const labels = value.split(".");
      for (const label of labels) {
        if (!isValidHostLabel(label)) {
          return false;
        }
      }
      return true;
    }, "isValidHostLabel");
    var customEndpointFunctions = {};
    var debugId = "endpoints";
    function toDebugString(input) {
      if (typeof input !== "object" || input == null) {
        return input;
      }
      if ("ref" in input) {
        return `$${toDebugString(input.ref)}`;
      }
      if ("fn" in input) {
        return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
      }
      return JSON.stringify(input, null, 2);
    }
    __name(toDebugString, "toDebugString");
    var _a2;
    var EndpointError2 =
      ((_a2 = class extends Error {
        constructor(message) {
          super(message);
          this.name = "EndpointError";
        }
      }),
      __name(_a2, "EndpointError"),
      _a2);
    var booleanEquals = /* @__PURE__ */ __name((value1, value2) => value1 === value2, "booleanEquals");
    var getAttrPathList = /* @__PURE__ */ __name((path) => {
      const parts = path.split(".");
      const pathList = [];
      for (const part of parts) {
        const squareBracketIndex = part.indexOf("[");
        if (squareBracketIndex !== -1) {
          if (part.indexOf("]") !== part.length - 1) {
            throw new EndpointError2(`Path: '${path}' does not end with ']'`);
          }
          const arrayIndex = part.slice(squareBracketIndex + 1, -1);
          if (Number.isNaN(parseInt(arrayIndex))) {
            throw new EndpointError2(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
          }
          if (squareBracketIndex !== 0) {
            pathList.push(part.slice(0, squareBracketIndex));
          }
          pathList.push(arrayIndex);
        } else {
          pathList.push(part);
        }
      }
      return pathList;
    }, "getAttrPathList");
    var getAttr = /* @__PURE__ */ __name(
      (value, path) =>
        getAttrPathList(path).reduce((acc, index) => {
          if (typeof acc !== "object") {
            throw new EndpointError2(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
          } else if (Array.isArray(acc)) {
            return acc[parseInt(index)];
          }
          return acc[index];
        }, value),
      "getAttr",
    );
    var isSet = /* @__PURE__ */ __name((value) => value != null, "isSet");
    var not = /* @__PURE__ */ __name((value) => !value, "not");
    var import_types32 = require_dist_cjs();
    var DEFAULT_PORTS = {
      [import_types32.EndpointURLScheme.HTTP]: 80,
      [import_types32.EndpointURLScheme.HTTPS]: 443,
    };
    var parseURL = /* @__PURE__ */ __name((value) => {
      const whatwgURL = (() => {
        try {
          if (value instanceof URL) {
            return value;
          }
          if (typeof value === "object" && "hostname" in value) {
            const { hostname: hostname2, port, protocol: protocol2 = "", path = "", query = {} } = value;
            const url = new URL(`${protocol2}//${hostname2}${port ? `:${port}` : ""}${path}`);
            url.search = Object.entries(query)
              .map(([k, v]) => `${k}=${v}`)
              .join("&");
            return url;
          }
          return new URL(value);
        } catch (error) {
          return null;
        }
      })();
      if (!whatwgURL) {
        console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
        return null;
      }
      const urlString = whatwgURL.href;
      const { host, hostname, pathname, protocol, search } = whatwgURL;
      if (search) {
        return null;
      }
      const scheme = protocol.slice(0, -1);
      if (!Object.values(import_types32.EndpointURLScheme).includes(scheme)) {
        return null;
      }
      const isIp = isIpAddress2(hostname);
      const inputContainsDefaultPort =
        urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) ||
        (typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`));
      const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
      return {
        scheme,
        authority,
        path: pathname,
        normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
        isIp,
      };
    }, "parseURL");
    var stringEquals = /* @__PURE__ */ __name((value1, value2) => value1 === value2, "stringEquals");
    var substring = /* @__PURE__ */ __name((input, start, stop, reverse) => {
      if (start >= stop || input.length < stop) {
        return null;
      }
      if (!reverse) {
        return input.substring(start, stop);
      }
      return input.substring(input.length - stop, input.length - start);
    }, "substring");
    var uriEncode = /* @__PURE__ */ __name(
      (value) => encodeURIComponent(value).replace(/[!*'()]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`),
      "uriEncode",
    );
    var endpointFunctions = {
      booleanEquals,
      getAttr,
      isSet,
      isValidHostLabel,
      not,
      parseURL,
      stringEquals,
      substring,
      uriEncode,
    };
    var evaluateTemplate = /* @__PURE__ */ __name((template, options) => {
      const evaluatedTemplateArr = [];
      const templateContext = {
        ...options.endpointParams,
        ...options.referenceRecord,
      };
      let currentIndex = 0;
      while (currentIndex < template.length) {
        const openingBraceIndex = template.indexOf("{", currentIndex);
        if (openingBraceIndex === -1) {
          evaluatedTemplateArr.push(template.slice(currentIndex));
          break;
        }
        evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
        const closingBraceIndex = template.indexOf("}", openingBraceIndex);
        if (closingBraceIndex === -1) {
          evaluatedTemplateArr.push(template.slice(openingBraceIndex));
          break;
        }
        if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
          evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
          currentIndex = closingBraceIndex + 2;
        }
        const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
        if (parameterName.includes("#")) {
          const [refName, attrName] = parameterName.split("#");
          evaluatedTemplateArr.push(getAttr(templateContext[refName], attrName));
        } else {
          evaluatedTemplateArr.push(templateContext[parameterName]);
        }
        currentIndex = closingBraceIndex + 1;
      }
      return evaluatedTemplateArr.join("");
    }, "evaluateTemplate");
    var getReferenceValue = /* @__PURE__ */ __name(({ ref }, options) => {
      const referenceRecord = {
        ...options.endpointParams,
        ...options.referenceRecord,
      };
      return referenceRecord[ref];
    }, "getReferenceValue");
    var evaluateExpression = /* @__PURE__ */ __name((obj, keyName, options) => {
      if (typeof obj === "string") {
        return evaluateTemplate(obj, options);
      } else if (obj["fn"]) {
        return callFunction(obj, options);
      } else if (obj["ref"]) {
        return getReferenceValue(obj, options);
      }
      throw new EndpointError2(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
    }, "evaluateExpression");
    var callFunction = /* @__PURE__ */ __name(({ fn, argv }, options) => {
      const evaluatedArgs = argv.map((arg) =>
        ["boolean", "number"].includes(typeof arg) ? arg : evaluateExpression(arg, "arg", options),
      );
      const fnSegments = fn.split(".");
      if (fnSegments[0] in customEndpointFunctions && fnSegments[1] != null) {
        return customEndpointFunctions[fnSegments[0]][fnSegments[1]](...evaluatedArgs);
      }
      return endpointFunctions[fn](...evaluatedArgs);
    }, "callFunction");
    var evaluateCondition = /* @__PURE__ */ __name(({ assign, ...fnArgs }, options) => {
      if (assign && assign in options.referenceRecord) {
        throw new EndpointError2(`'${assign}' is already defined in Reference Record.`);
      }
      const value = callFunction(fnArgs, options);
      options.logger?.debug?.(`${debugId} evaluateCondition: ${toDebugString(fnArgs)} = ${toDebugString(value)}`);
      return {
        result: value === "" ? true : !!value,
        ...(assign != null && { toAssign: { name: assign, value } }),
      };
    }, "evaluateCondition");
    var evaluateConditions = /* @__PURE__ */ __name((conditions = [], options) => {
      const conditionsReferenceRecord = {};
      for (const condition of conditions) {
        const { result, toAssign } = evaluateCondition(condition, {
          ...options,
          referenceRecord: {
            ...options.referenceRecord,
            ...conditionsReferenceRecord,
          },
        });
        if (!result) {
          return { result };
        }
        if (toAssign) {
          conditionsReferenceRecord[toAssign.name] = toAssign.value;
          options.logger?.debug?.(`${debugId} assign: ${toAssign.name} := ${toDebugString(toAssign.value)}`);
        }
      }
      return { result: true, referenceRecord: conditionsReferenceRecord };
    }, "evaluateConditions");
    var getEndpointHeaders = /* @__PURE__ */ __name(
      (headers, options) =>
        Object.entries(headers).reduce(
          (acc, [headerKey, headerVal]) => ({
            ...acc,
            [headerKey]: headerVal.map((headerValEntry) => {
              const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
              if (typeof processedExpr !== "string") {
                throw new EndpointError2(`Header '${headerKey}' value '${processedExpr}' is not a string`);
              }
              return processedExpr;
            }),
          }),
          {},
        ),
      "getEndpointHeaders",
    );
    var getEndpointProperty = /* @__PURE__ */ __name((property, options) => {
      if (Array.isArray(property)) {
        return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
      }
      switch (typeof property) {
        case "string":
          return evaluateTemplate(property, options);
        case "object":
          if (property === null) {
            throw new EndpointError2(`Unexpected endpoint property: ${property}`);
          }
          return getEndpointProperties(property, options);
        case "boolean":
          return property;
        default:
          throw new EndpointError2(`Unexpected endpoint property type: ${typeof property}`);
      }
    }, "getEndpointProperty");
    var getEndpointProperties = /* @__PURE__ */ __name(
      (properties, options) =>
        Object.entries(properties).reduce(
          (acc, [propertyKey, propertyVal]) => ({
            ...acc,
            [propertyKey]: getEndpointProperty(propertyVal, options),
          }),
          {},
        ),
      "getEndpointProperties",
    );
    var getEndpointUrl = /* @__PURE__ */ __name((endpointUrl, options) => {
      const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
      if (typeof expression === "string") {
        try {
          return new URL(expression);
        } catch (error) {
          console.error(`Failed to construct URL with ${expression}`, error);
          throw error;
        }
      }
      throw new EndpointError2(`Endpoint URL must be a string, got ${typeof expression}`);
    }, "getEndpointUrl");
    var evaluateEndpointRule = /* @__PURE__ */ __name((endpointRule, options) => {
      const { conditions, endpoint } = endpointRule;
      const { result, referenceRecord } = evaluateConditions(conditions, options);
      if (!result) {
        return;
      }
      const endpointRuleOptions = {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
      };
      const { url, properties, headers } = endpoint;
      options.logger?.debug?.(`${debugId} Resolving endpoint from template: ${toDebugString(endpoint)}`);
      return {
        ...(headers != void 0 && {
          headers: getEndpointHeaders(headers, endpointRuleOptions),
        }),
        ...(properties != void 0 && {
          properties: getEndpointProperties(properties, endpointRuleOptions),
        }),
        url: getEndpointUrl(url, endpointRuleOptions),
      };
    }, "evaluateEndpointRule");
    var evaluateErrorRule = /* @__PURE__ */ __name((errorRule, options) => {
      const { conditions, error } = errorRule;
      const { result, referenceRecord } = evaluateConditions(conditions, options);
      if (!result) {
        return;
      }
      throw new EndpointError2(
        evaluateExpression(error, "Error", {
          ...options,
          referenceRecord: { ...options.referenceRecord, ...referenceRecord },
        }),
      );
    }, "evaluateErrorRule");
    var evaluateTreeRule = /* @__PURE__ */ __name((treeRule, options) => {
      const { conditions, rules } = treeRule;
      const { result, referenceRecord } = evaluateConditions(conditions, options);
      if (!result) {
        return;
      }
      return evaluateRules(rules, {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
      });
    }, "evaluateTreeRule");
    var evaluateRules = /* @__PURE__ */ __name((rules, options) => {
      for (const rule of rules) {
        if (rule.type === "endpoint") {
          const endpointOrUndefined = evaluateEndpointRule(rule, options);
          if (endpointOrUndefined) {
            return endpointOrUndefined;
          }
        } else if (rule.type === "error") {
          evaluateErrorRule(rule, options);
        } else if (rule.type === "tree") {
          const endpointOrUndefined = evaluateTreeRule(rule, options);
          if (endpointOrUndefined) {
            return endpointOrUndefined;
          }
        } else {
          throw new EndpointError2(`Unknown endpoint rule: ${rule}`);
        }
      }
      throw new EndpointError2(`Rules evaluation failed`);
    }, "evaluateRules");
    var resolveEndpoint3 = /* @__PURE__ */ __name((ruleSetObject, options) => {
      const { endpointParams, logger: logger3 } = options;
      const { parameters, rules } = ruleSetObject;
      options.logger?.debug?.(`${debugId} Initial EndpointParams: ${toDebugString(endpointParams)}`);
      const paramsWithDefault = Object.entries(parameters)
        .filter(([, v]) => v.default != null)
        .map(([k, v]) => [k, v.default]);
      if (paramsWithDefault.length > 0) {
        for (const [paramKey, paramDefaultValue] of paramsWithDefault) {
          endpointParams[paramKey] = endpointParams[paramKey] ?? paramDefaultValue;
        }
      }
      const requiredParams = Object.entries(parameters)
        .filter(([, v]) => v.required)
        .map(([k]) => k);
      for (const requiredParam of requiredParams) {
        if (endpointParams[requiredParam] == null) {
          throw new EndpointError2(`Missing required parameter: '${requiredParam}'`);
        }
      }
      const endpoint = evaluateRules(rules, { endpointParams, logger: logger3, referenceRecord: {} });
      options.logger?.debug?.(`${debugId} Resolved endpoint: ${toDebugString(endpoint)}`);
      return endpoint;
    }, "resolveEndpoint");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/querystring-parser/dist-cjs/index.js
var require_dist_cjs16 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/querystring-parser/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      parseQueryString: () => parseQueryString,
    });
    module2.exports = __toCommonJS2(src_exports);
    function parseQueryString(querystring) {
      const query = {};
      querystring = querystring.replace(/^\?/, "");
      if (querystring) {
        for (const pair of querystring.split("&")) {
          let [key, value = null] = pair.split("=");
          key = decodeURIComponent(key);
          if (value) {
            value = decodeURIComponent(value);
          }
          if (!(key in query)) {
            query[key] = value;
          } else if (Array.isArray(query[key])) {
            query[key].push(value);
          } else {
            query[key] = [query[key], value];
          }
        }
      }
      return query;
    }
    __name(parseQueryString, "parseQueryString");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/url-parser/dist-cjs/index.js
var require_dist_cjs17 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/url-parser/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      parseUrl: () => parseUrl2,
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_querystring_parser = require_dist_cjs16();
    var parseUrl2 = /* @__PURE__ */ __name((url) => {
      if (typeof url === "string") {
        return parseUrl2(new URL(url));
      }
      const { hostname, pathname, port, protocol, search } = url;
      let query;
      if (search) {
        query = (0, import_querystring_parser.parseQueryString)(search);
      }
      return {
        hostname,
        port: port ? parseInt(port) : void 0,
        protocol,
        path: pathname,
        query,
      };
    }, "parseUrl");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/util-endpoints/dist-cjs/index.js
var require_dist_cjs18 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/util-endpoints/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var index_exports = {};
    __export2(index_exports, {
      ConditionObject: () => import_util_endpoints2.ConditionObject,
      DeprecatedObject: () => import_util_endpoints2.DeprecatedObject,
      EndpointError: () => import_util_endpoints2.EndpointError,
      EndpointObject: () => import_util_endpoints2.EndpointObject,
      EndpointObjectHeaders: () => import_util_endpoints2.EndpointObjectHeaders,
      EndpointObjectProperties: () => import_util_endpoints2.EndpointObjectProperties,
      EndpointParams: () => import_util_endpoints2.EndpointParams,
      EndpointResolverOptions: () => import_util_endpoints2.EndpointResolverOptions,
      EndpointRuleObject: () => import_util_endpoints2.EndpointRuleObject,
      ErrorRuleObject: () => import_util_endpoints2.ErrorRuleObject,
      EvaluateOptions: () => import_util_endpoints2.EvaluateOptions,
      Expression: () => import_util_endpoints2.Expression,
      FunctionArgv: () => import_util_endpoints2.FunctionArgv,
      FunctionObject: () => import_util_endpoints2.FunctionObject,
      FunctionReturn: () => import_util_endpoints2.FunctionReturn,
      ParameterObject: () => import_util_endpoints2.ParameterObject,
      ReferenceObject: () => import_util_endpoints2.ReferenceObject,
      ReferenceRecord: () => import_util_endpoints2.ReferenceRecord,
      RuleSetObject: () => import_util_endpoints2.RuleSetObject,
      RuleSetRules: () => import_util_endpoints2.RuleSetRules,
      TreeRuleObject: () => import_util_endpoints2.TreeRuleObject,
      awsEndpointFunctions: () => awsEndpointFunctions,
      getUserAgentPrefix: () => getUserAgentPrefix,
      isIpAddress: () => import_util_endpoints2.isIpAddress,
      partition: () => partition,
      resolveDefaultAwsRegionalEndpointsConfig: () => resolveDefaultAwsRegionalEndpointsConfig,
      resolveEndpoint: () => import_util_endpoints2.resolveEndpoint,
      setPartitionInfo: () => setPartitionInfo,
      toEndpointV1: () => toEndpointV1,
      useDefaultPartitionInfo: () => useDefaultPartitionInfo,
    });
    module2.exports = __toCommonJS2(index_exports);
    var import_util_endpoints2 = require_dist_cjs15();
    var isVirtualHostableS3Bucket = /* @__PURE__ */ __name((value, allowSubDomains = false) => {
      if (allowSubDomains) {
        for (const label of value.split(".")) {
          if (!isVirtualHostableS3Bucket(label)) {
            return false;
          }
        }
        return true;
      }
      if (!(0, import_util_endpoints2.isValidHostLabel)(value)) {
        return false;
      }
      if (value.length < 3 || value.length > 63) {
        return false;
      }
      if (value !== value.toLowerCase()) {
        return false;
      }
      if ((0, import_util_endpoints2.isIpAddress)(value)) {
        return false;
      }
      return true;
    }, "isVirtualHostableS3Bucket");
    var ARN_DELIMITER = ":";
    var RESOURCE_DELIMITER = "/";
    var parseArn = /* @__PURE__ */ __name((value) => {
      const segments = value.split(ARN_DELIMITER);
      if (segments.length < 6) return null;
      const [arn, partition2, service, region, accountId, ...resourcePath] = segments;
      if (arn !== "arn" || partition2 === "" || service === "" || resourcePath.join(ARN_DELIMITER) === "") return null;
      const resourceId = resourcePath.map((resource) => resource.split(RESOURCE_DELIMITER)).flat();
      return {
        partition: partition2,
        service,
        region,
        accountId,
        resourceId,
      };
    }, "parseArn");
    var partitions_default = {
      partitions: [
        {
          id: "aws",
          outputs: {
            dnsSuffix: "amazonaws.com",
            dualStackDnsSuffix: "api.aws",
            implicitGlobalRegion: "us-east-1",
            name: "aws",
            supportsDualStack: true,
            supportsFIPS: true,
          },
          regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$",
          regions: {
            "af-south-1": {
              description: "Africa (Cape Town)",
            },
            "ap-east-1": {
              description: "Asia Pacific (Hong Kong)",
            },
            "ap-east-2": {
              description: "Asia Pacific (Taipei)",
            },
            "ap-northeast-1": {
              description: "Asia Pacific (Tokyo)",
            },
            "ap-northeast-2": {
              description: "Asia Pacific (Seoul)",
            },
            "ap-northeast-3": {
              description: "Asia Pacific (Osaka)",
            },
            "ap-south-1": {
              description: "Asia Pacific (Mumbai)",
            },
            "ap-south-2": {
              description: "Asia Pacific (Hyderabad)",
            },
            "ap-southeast-1": {
              description: "Asia Pacific (Singapore)",
            },
            "ap-southeast-2": {
              description: "Asia Pacific (Sydney)",
            },
            "ap-southeast-3": {
              description: "Asia Pacific (Jakarta)",
            },
            "ap-southeast-4": {
              description: "Asia Pacific (Melbourne)",
            },
            "ap-southeast-5": {
              description: "Asia Pacific (Malaysia)",
            },
            "ap-southeast-7": {
              description: "Asia Pacific (Thailand)",
            },
            "aws-global": {
              description: "AWS Standard global region",
            },
            "ca-central-1": {
              description: "Canada (Central)",
            },
            "ca-west-1": {
              description: "Canada West (Calgary)",
            },
            "eu-central-1": {
              description: "Europe (Frankfurt)",
            },
            "eu-central-2": {
              description: "Europe (Zurich)",
            },
            "eu-north-1": {
              description: "Europe (Stockholm)",
            },
            "eu-south-1": {
              description: "Europe (Milan)",
            },
            "eu-south-2": {
              description: "Europe (Spain)",
            },
            "eu-west-1": {
              description: "Europe (Ireland)",
            },
            "eu-west-2": {
              description: "Europe (London)",
            },
            "eu-west-3": {
              description: "Europe (Paris)",
            },
            "il-central-1": {
              description: "Israel (Tel Aviv)",
            },
            "me-central-1": {
              description: "Middle East (UAE)",
            },
            "me-south-1": {
              description: "Middle East (Bahrain)",
            },
            "mx-central-1": {
              description: "Mexico (Central)",
            },
            "sa-east-1": {
              description: "South America (Sao Paulo)",
            },
            "us-east-1": {
              description: "US East (N. Virginia)",
            },
            "us-east-2": {
              description: "US East (Ohio)",
            },
            "us-west-1": {
              description: "US West (N. California)",
            },
            "us-west-2": {
              description: "US West (Oregon)",
            },
          },
        },
        {
          id: "aws-cn",
          outputs: {
            dnsSuffix: "amazonaws.com.cn",
            dualStackDnsSuffix: "api.amazonwebservices.com.cn",
            implicitGlobalRegion: "cn-northwest-1",
            name: "aws-cn",
            supportsDualStack: true,
            supportsFIPS: true,
          },
          regionRegex: "^cn\\-\\w+\\-\\d+$",
          regions: {
            "aws-cn-global": {
              description: "AWS China global region",
            },
            "cn-north-1": {
              description: "China (Beijing)",
            },
            "cn-northwest-1": {
              description: "China (Ningxia)",
            },
          },
        },
        {
          id: "aws-us-gov",
          outputs: {
            dnsSuffix: "amazonaws.com",
            dualStackDnsSuffix: "api.aws",
            implicitGlobalRegion: "us-gov-west-1",
            name: "aws-us-gov",
            supportsDualStack: true,
            supportsFIPS: true,
          },
          regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
          regions: {
            "aws-us-gov-global": {
              description: "AWS GovCloud (US) global region",
            },
            "us-gov-east-1": {
              description: "AWS GovCloud (US-East)",
            },
            "us-gov-west-1": {
              description: "AWS GovCloud (US-West)",
            },
          },
        },
        {
          id: "aws-iso",
          outputs: {
            dnsSuffix: "c2s.ic.gov",
            dualStackDnsSuffix: "c2s.ic.gov",
            implicitGlobalRegion: "us-iso-east-1",
            name: "aws-iso",
            supportsDualStack: false,
            supportsFIPS: true,
          },
          regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
          regions: {
            "aws-iso-global": {
              description: "AWS ISO (US) global region",
            },
            "us-iso-east-1": {
              description: "US ISO East",
            },
            "us-iso-west-1": {
              description: "US ISO WEST",
            },
          },
        },
        {
          id: "aws-iso-b",
          outputs: {
            dnsSuffix: "sc2s.sgov.gov",
            dualStackDnsSuffix: "sc2s.sgov.gov",
            implicitGlobalRegion: "us-isob-east-1",
            name: "aws-iso-b",
            supportsDualStack: false,
            supportsFIPS: true,
          },
          regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
          regions: {
            "aws-iso-b-global": {
              description: "AWS ISOB (US) global region",
            },
            "us-isob-east-1": {
              description: "US ISOB East (Ohio)",
            },
          },
        },
        {
          id: "aws-iso-e",
          outputs: {
            dnsSuffix: "cloud.adc-e.uk",
            dualStackDnsSuffix: "cloud.adc-e.uk",
            implicitGlobalRegion: "eu-isoe-west-1",
            name: "aws-iso-e",
            supportsDualStack: false,
            supportsFIPS: true,
          },
          regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
          regions: {
            "aws-iso-e-global": {
              description: "AWS ISOE (Europe) global region",
            },
            "eu-isoe-west-1": {
              description: "EU ISOE West",
            },
          },
        },
        {
          id: "aws-iso-f",
          outputs: {
            dnsSuffix: "csp.hci.ic.gov",
            dualStackDnsSuffix: "csp.hci.ic.gov",
            implicitGlobalRegion: "us-isof-south-1",
            name: "aws-iso-f",
            supportsDualStack: false,
            supportsFIPS: true,
          },
          regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
          regions: {
            "aws-iso-f-global": {
              description: "AWS ISOF global region",
            },
            "us-isof-east-1": {
              description: "US ISOF EAST",
            },
            "us-isof-south-1": {
              description: "US ISOF SOUTH",
            },
          },
        },
        {
          id: "aws-eusc",
          outputs: {
            dnsSuffix: "amazonaws.eu",
            dualStackDnsSuffix: "amazonaws.eu",
            implicitGlobalRegion: "eusc-de-east-1",
            name: "aws-eusc",
            supportsDualStack: false,
            supportsFIPS: true,
          },
          regionRegex: "^eusc\\-(de)\\-\\w+\\-\\d+$",
          regions: {
            "eusc-de-east-1": {
              description: "EU (Germany)",
            },
          },
        },
      ],
      version: "1.1",
    };
    var selectedPartitionsInfo = partitions_default;
    var selectedUserAgentPrefix = "";
    var partition = /* @__PURE__ */ __name((value) => {
      const { partitions } = selectedPartitionsInfo;
      for (const partition2 of partitions) {
        const { regions, outputs } = partition2;
        for (const [region, regionData] of Object.entries(regions)) {
          if (region === value) {
            return {
              ...outputs,
              ...regionData,
            };
          }
        }
      }
      for (const partition2 of partitions) {
        const { regionRegex, outputs } = partition2;
        if (new RegExp(regionRegex).test(value)) {
          return {
            ...outputs,
          };
        }
      }
      const DEFAULT_PARTITION = partitions.find((partition2) => partition2.id === "aws");
      if (!DEFAULT_PARTITION) {
        throw new Error(
          "Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.",
        );
      }
      return {
        ...DEFAULT_PARTITION.outputs,
      };
    }, "partition");
    var setPartitionInfo = /* @__PURE__ */ __name((partitionsInfo, userAgentPrefix = "") => {
      selectedPartitionsInfo = partitionsInfo;
      selectedUserAgentPrefix = userAgentPrefix;
    }, "setPartitionInfo");
    var useDefaultPartitionInfo = /* @__PURE__ */ __name(() => {
      setPartitionInfo(partitions_default, "");
    }, "useDefaultPartitionInfo");
    var getUserAgentPrefix = /* @__PURE__ */ __name(() => selectedUserAgentPrefix, "getUserAgentPrefix");
    var awsEndpointFunctions = {
      isVirtualHostableS3Bucket,
      parseArn,
      partition,
    };
    import_util_endpoints2.customEndpointFunctions.aws = awsEndpointFunctions;
    var import_url_parser2 = require_dist_cjs17();
    var resolveDefaultAwsRegionalEndpointsConfig = /* @__PURE__ */ __name((input) => {
      if (typeof input.endpointProvider !== "function") {
        throw new Error("@aws-sdk/util-endpoint - endpointProvider and endpoint missing in config for this client.");
      }
      const { endpoint } = input;
      if (endpoint === void 0) {
        input.endpoint = async () => {
          return toEndpointV1(
            input.endpointProvider(
              {
                Region: typeof input.region === "function" ? await input.region() : input.region,
                UseDualStack:
                  typeof input.useDualstackEndpoint === "function"
                    ? await input.useDualstackEndpoint()
                    : input.useDualstackEndpoint,
                UseFIPS:
                  typeof input.useFipsEndpoint === "function" ? await input.useFipsEndpoint() : input.useFipsEndpoint,
                Endpoint: void 0,
              },
              { logger: input.logger },
            ),
          );
        };
      }
      return input;
    }, "resolveDefaultAwsRegionalEndpointsConfig");
    var toEndpointV1 = /* @__PURE__ */ __name(
      (endpoint) => (0, import_url_parser2.parseUrl)(endpoint.url),
      "toEndpointV1",
    );
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/client/emitWarningIfUnsupportedVersion.js
var state, emitWarningIfUnsupportedVersion;
var init_emitWarningIfUnsupportedVersion = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/client/emitWarningIfUnsupportedVersion.js"() {
    state = {
      warningEmitted: false,
    };
    emitWarningIfUnsupportedVersion = (version2) => {
      if (version2 && !state.warningEmitted && parseInt(version2.substring(1, version2.indexOf("."))) < 18) {
        state.warningEmitted = true;
        process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 16.x on January 6, 2025.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/74kJMmI`);
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js
function setCredentialFeature(credentials, feature, value) {
  if (!credentials.$source) {
    credentials.$source = {};
  }
  credentials.$source[feature] = value;
  return credentials;
}
var init_setCredentialFeature = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js"() {},
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js
function setFeature2(context, feature, value) {
  if (!context.__aws_sdk_context) {
    context.__aws_sdk_context = {
      features: {},
    };
  } else if (!context.__aws_sdk_context.features) {
    context.__aws_sdk_context.features = {};
  }
  context.__aws_sdk_context.features[feature] = value;
}
var init_setFeature2 = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js"() {},
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/client/setTokenFeature.js
function setTokenFeature(token, feature, value) {
  if (!token.$source) {
    token.$source = {};
  }
  token.$source[feature] = value;
  return token;
}
var init_setTokenFeature = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/client/setTokenFeature.js"() {},
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/client/index.js
var init_client = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/client/index.js"() {
    init_emitWarningIfUnsupportedVersion();
    init_setCredentialFeature();
    init_setFeature2();
    init_setTokenFeature();
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js
var import_protocol_http9, getDateHeader;
var init_getDateHeader = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js"() {
    import_protocol_http9 = __toESM(require_dist_cjs3());
    getDateHeader = (response) =>
      import_protocol_http9.HttpResponse.isInstance(response)
        ? (response.headers?.date ?? response.headers?.Date)
        : void 0;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js
var getSkewCorrectedDate;
var init_getSkewCorrectedDate = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js"() {
    getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js
var isClockSkewed;
var init_isClockSkewed = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js"() {
    init_getSkewCorrectedDate();
    isClockSkewed = (clockTime, systemClockOffset) =>
      Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 3e5;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js
var getUpdatedSystemClockOffset;
var init_getUpdatedSystemClockOffset = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js"() {
    init_isClockSkewed();
    getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {
      const clockTimeInMs = Date.parse(clockTime);
      if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
        return clockTimeInMs - Date.now();
      }
      return currentSystemClockOffset;
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/index.js
var init_utils = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/index.js"() {
    init_getDateHeader();
    init_getSkewCorrectedDate();
    init_getUpdatedSystemClockOffset();
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js
var import_protocol_http10, throwSigningPropertyError, validateSigningProperties, AwsSdkSigV4Signer, AWSSDKSigV4Signer;
var init_AwsSdkSigV4Signer = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js"() {
    import_protocol_http10 = __toESM(require_dist_cjs3());
    init_utils();
    throwSigningPropertyError = (name, property) => {
      if (!property) {
        throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
      }
      return property;
    };
    validateSigningProperties = async (signingProperties) => {
      const context = throwSigningPropertyError("context", signingProperties.context);
      const config = throwSigningPropertyError("config", signingProperties.config);
      const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
      const signerFunction = throwSigningPropertyError("signer", config.signer);
      const signer = await signerFunction(authScheme);
      const signingRegion = signingProperties?.signingRegion;
      const signingRegionSet = signingProperties?.signingRegionSet;
      const signingName = signingProperties?.signingName;
      return {
        config,
        signer,
        signingRegion,
        signingRegionSet,
        signingName,
      };
    };
    AwsSdkSigV4Signer = class {
      async sign(httpRequest, identity, signingProperties) {
        if (!import_protocol_http10.HttpRequest.isInstance(httpRequest)) {
          throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
        }
        const validatedProps = await validateSigningProperties(signingProperties);
        const { config, signer } = validatedProps;
        let { signingRegion, signingName } = validatedProps;
        const handlerExecutionContext = signingProperties.context;
        if (handlerExecutionContext?.authSchemes?.length ?? 0 > 1) {
          const [first, second] = handlerExecutionContext.authSchemes;
          if (first?.name === "sigv4a" && second?.name === "sigv4") {
            signingRegion = second?.signingRegion ?? signingRegion;
            signingName = second?.signingName ?? signingName;
          }
        }
        const signedRequest = await signer.sign(httpRequest, {
          signingDate: getSkewCorrectedDate(config.systemClockOffset),
          signingRegion,
          signingService: signingName,
        });
        return signedRequest;
      }
      errorHandler(signingProperties) {
        return (error) => {
          const serverTime = error.ServerTime ?? getDateHeader(error.$response);
          if (serverTime) {
            const config = throwSigningPropertyError("config", signingProperties.config);
            const initialSystemClockOffset = config.systemClockOffset;
            config.systemClockOffset = getUpdatedSystemClockOffset(serverTime, config.systemClockOffset);
            const clockSkewCorrected = config.systemClockOffset !== initialSystemClockOffset;
            if (clockSkewCorrected && error.$metadata) {
              error.$metadata.clockSkewCorrected = true;
            }
          }
          throw error;
        };
      }
      successHandler(httpResponse, signingProperties) {
        const dateHeader = getDateHeader(httpResponse);
        if (dateHeader) {
          const config = throwSigningPropertyError("config", signingProperties.config);
          config.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, config.systemClockOffset);
        }
      }
    };
    AWSSDKSigV4Signer = AwsSdkSigV4Signer;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4ASigner.js
var import_protocol_http11, AwsSdkSigV4ASigner;
var init_AwsSdkSigV4ASigner = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4ASigner.js"() {
    import_protocol_http11 = __toESM(require_dist_cjs3());
    init_utils();
    init_AwsSdkSigV4Signer();
    AwsSdkSigV4ASigner = class extends AwsSdkSigV4Signer {
      async sign(httpRequest, identity, signingProperties) {
        if (!import_protocol_http11.HttpRequest.isInstance(httpRequest)) {
          throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
        }
        const { config, signer, signingRegion, signingRegionSet, signingName } =
          await validateSigningProperties(signingProperties);
        const configResolvedSigningRegionSet = await config.sigv4aSigningRegionSet?.();
        const multiRegionOverride = (configResolvedSigningRegionSet ?? signingRegionSet ?? [signingRegion]).join(",");
        const signedRequest = await signer.sign(httpRequest, {
          signingDate: getSkewCorrectedDate(config.systemClockOffset),
          signingRegion: multiRegionOverride,
          signingService: signingName,
        });
        return signedRequest;
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getArrayForCommaSeparatedString.js
var getArrayForCommaSeparatedString;
var init_getArrayForCommaSeparatedString = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getArrayForCommaSeparatedString.js"() {
    getArrayForCommaSeparatedString = (str) =>
      typeof str === "string" && str.length > 0 ? str.split(",").map((item) => item.trim()) : [];
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getBearerTokenEnvKey.js
var getBearerTokenEnvKey;
var init_getBearerTokenEnvKey = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getBearerTokenEnvKey.js"() {
    getBearerTokenEnvKey = (signingName) => `AWS_BEARER_TOKEN_${signingName.replace(/[\s-]/g, "_").toUpperCase()}`;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/NODE_AUTH_SCHEME_PREFERENCE_OPTIONS.js
var NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY, NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY, NODE_AUTH_SCHEME_PREFERENCE_OPTIONS;
var init_NODE_AUTH_SCHEME_PREFERENCE_OPTIONS = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/NODE_AUTH_SCHEME_PREFERENCE_OPTIONS.js"() {
    init_getArrayForCommaSeparatedString();
    init_getBearerTokenEnvKey();
    NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY = "AWS_AUTH_SCHEME_PREFERENCE";
    NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY = "auth_scheme_preference";
    NODE_AUTH_SCHEME_PREFERENCE_OPTIONS = {
      environmentVariableSelector: (env, options) => {
        if (options?.signingName) {
          const bearerTokenKey = getBearerTokenEnvKey(options.signingName);
          if (bearerTokenKey in env) return ["httpBearerAuth"];
        }
        if (!(NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY in env)) return void 0;
        return getArrayForCommaSeparatedString(env[NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY]);
      },
      configFileSelector: (profile) => {
        if (!(NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY in profile)) return void 0;
        return getArrayForCommaSeparatedString(profile[NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY]);
      },
      default: [],
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/property-provider/dist-cjs/index.js
var require_dist_cjs19 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/property-provider/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      CredentialsProviderError: () => CredentialsProviderError,
      ProviderError: () => ProviderError2,
      TokenProviderError: () => TokenProviderError,
      chain: () => chain,
      fromStatic: () => fromStatic,
      memoize: () => memoize,
    });
    module2.exports = __toCommonJS2(src_exports);
    var _a;
    var ProviderError2 =
      ((_a = class extends Error {
        constructor(message, options = true) {
          let logger3;
          let tryNextLink = true;
          if (typeof options === "boolean") {
            logger3 = void 0;
            tryNextLink = options;
          } else if (options != null && typeof options === "object") {
            logger3 = options.logger;
            tryNextLink = options.tryNextLink ?? true;
          }
          super(message);
          this.name = "ProviderError";
          this.tryNextLink = tryNextLink;
          Object.setPrototypeOf(this, _a.prototype);
          logger3?.debug?.(`@smithy/property-provider ${tryNextLink ? "->" : "(!)"} ${message}`);
        }
        /**
         * @deprecated use new operator.
         */
        static from(error, options = true) {
          return Object.assign(new this(error.message, options), error);
        }
      }),
      __name(_a, "ProviderError"),
      _a);
    var _a2;
    var CredentialsProviderError =
      ((_a2 = class extends ProviderError2 {
        /**
         * @override
         */
        constructor(message, options = true) {
          super(message, options);
          this.name = "CredentialsProviderError";
          Object.setPrototypeOf(this, _a2.prototype);
        }
      }),
      __name(_a2, "CredentialsProviderError"),
      _a2);
    var _a3;
    var TokenProviderError =
      ((_a3 = class extends ProviderError2 {
        /**
         * @override
         */
        constructor(message, options = true) {
          super(message, options);
          this.name = "TokenProviderError";
          Object.setPrototypeOf(this, _a3.prototype);
        }
      }),
      __name(_a3, "TokenProviderError"),
      _a3);
    var chain = /* @__PURE__ */ __name(
      (...providers) =>
        async () => {
          if (providers.length === 0) {
            throw new ProviderError2("No providers in chain");
          }
          let lastProviderError;
          for (const provider of providers) {
            try {
              const credentials = await provider();
              return credentials;
            } catch (err) {
              lastProviderError = err;
              if (err?.tryNextLink) {
                continue;
              }
              throw err;
            }
          }
          throw lastProviderError;
        },
      "chain",
    );
    var fromStatic = /* @__PURE__ */ __name((staticValue) => () => Promise.resolve(staticValue), "fromStatic");
    var memoize = /* @__PURE__ */ __name((provider, isExpired, requiresRefresh) => {
      let resolved;
      let pending;
      let hasResult;
      let isConstant = false;
      const coalesceProvider = /* @__PURE__ */ __name(async () => {
        if (!pending) {
          pending = provider();
        }
        try {
          resolved = await pending;
          hasResult = true;
          isConstant = false;
        } finally {
          pending = void 0;
        }
        return resolved;
      }, "coalesceProvider");
      if (isExpired === void 0) {
        return async (options) => {
          if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider();
          }
          return resolved;
        };
      }
      return async (options) => {
        if (!hasResult || options?.forceRefresh) {
          resolved = await coalesceProvider();
        }
        if (isConstant) {
          return resolved;
        }
        if (requiresRefresh && !requiresRefresh(resolved)) {
          isConstant = true;
          return resolved;
        }
        if (isExpired(resolved)) {
          await coalesceProvider();
          return resolved;
        }
        return resolved;
      };
    }, "memoize");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4AConfig.js
var import_property_provider, resolveAwsSdkSigV4AConfig, NODE_SIGV4A_CONFIG_OPTIONS;
var init_resolveAwsSdkSigV4AConfig = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4AConfig.js"() {
    init_dist_es();
    import_property_provider = __toESM(require_dist_cjs19());
    resolveAwsSdkSigV4AConfig = (config) => {
      config.sigv4aSigningRegionSet = normalizeProvider2(config.sigv4aSigningRegionSet);
      return config;
    };
    NODE_SIGV4A_CONFIG_OPTIONS = {
      environmentVariableSelector(env) {
        if (env.AWS_SIGV4A_SIGNING_REGION_SET) {
          return env.AWS_SIGV4A_SIGNING_REGION_SET.split(",").map((_) => _.trim());
        }
        throw new import_property_provider.ProviderError("AWS_SIGV4A_SIGNING_REGION_SET not set in env.", {
          tryNextLink: true,
        });
      },
      configFileSelector(profile) {
        if (profile.sigv4a_signing_region_set) {
          return (profile.sigv4a_signing_region_set ?? "").split(",").map((_) => _.trim());
        }
        throw new import_property_provider.ProviderError("sigv4a_signing_region_set not set in profile.", {
          tryNextLink: true,
        });
      },
      default: void 0,
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/signature-v4/dist-cjs/index.js
var require_dist_cjs20 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/signature-v4/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      ALGORITHM_IDENTIFIER: () => ALGORITHM_IDENTIFIER,
      ALGORITHM_IDENTIFIER_V4A: () => ALGORITHM_IDENTIFIER_V4A,
      ALGORITHM_QUERY_PARAM: () => ALGORITHM_QUERY_PARAM,
      ALWAYS_UNSIGNABLE_HEADERS: () => ALWAYS_UNSIGNABLE_HEADERS,
      AMZ_DATE_HEADER: () => AMZ_DATE_HEADER,
      AMZ_DATE_QUERY_PARAM: () => AMZ_DATE_QUERY_PARAM,
      AUTH_HEADER: () => AUTH_HEADER,
      CREDENTIAL_QUERY_PARAM: () => CREDENTIAL_QUERY_PARAM,
      DATE_HEADER: () => DATE_HEADER,
      EVENT_ALGORITHM_IDENTIFIER: () => EVENT_ALGORITHM_IDENTIFIER,
      EXPIRES_QUERY_PARAM: () => EXPIRES_QUERY_PARAM,
      GENERATED_HEADERS: () => GENERATED_HEADERS,
      HOST_HEADER: () => HOST_HEADER,
      KEY_TYPE_IDENTIFIER: () => KEY_TYPE_IDENTIFIER,
      MAX_CACHE_SIZE: () => MAX_CACHE_SIZE,
      MAX_PRESIGNED_TTL: () => MAX_PRESIGNED_TTL,
      PROXY_HEADER_PATTERN: () => PROXY_HEADER_PATTERN,
      REGION_SET_PARAM: () => REGION_SET_PARAM,
      SEC_HEADER_PATTERN: () => SEC_HEADER_PATTERN,
      SHA256_HEADER: () => SHA256_HEADER,
      SIGNATURE_HEADER: () => SIGNATURE_HEADER,
      SIGNATURE_QUERY_PARAM: () => SIGNATURE_QUERY_PARAM,
      SIGNED_HEADERS_QUERY_PARAM: () => SIGNED_HEADERS_QUERY_PARAM,
      SignatureV4: () => SignatureV42,
      SignatureV4Base: () => SignatureV4Base,
      TOKEN_HEADER: () => TOKEN_HEADER,
      TOKEN_QUERY_PARAM: () => TOKEN_QUERY_PARAM,
      UNSIGNABLE_PATTERNS: () => UNSIGNABLE_PATTERNS,
      UNSIGNED_PAYLOAD: () => UNSIGNED_PAYLOAD,
      clearCredentialCache: () => clearCredentialCache,
      createScope: () => createScope,
      getCanonicalHeaders: () => getCanonicalHeaders,
      getCanonicalQuery: () => getCanonicalQuery,
      getPayloadHash: () => getPayloadHash,
      getSigningKey: () => getSigningKey,
      hasHeader: () => hasHeader,
      moveHeadersToQuery: () => moveHeadersToQuery,
      prepareRequest: () => prepareRequest,
      signatureV4aContainer: () => signatureV4aContainer,
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_util_utf85 = require_dist_cjs7();
    var ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
    var CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
    var AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
    var SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
    var EXPIRES_QUERY_PARAM = "X-Amz-Expires";
    var SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
    var TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
    var REGION_SET_PARAM = "X-Amz-Region-Set";
    var AUTH_HEADER = "authorization";
    var AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
    var DATE_HEADER = "date";
    var GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
    var SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
    var SHA256_HEADER = "x-amz-content-sha256";
    var TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
    var HOST_HEADER = "host";
    var ALWAYS_UNSIGNABLE_HEADERS = {
      authorization: true,
      "cache-control": true,
      connection: true,
      expect: true,
      from: true,
      "keep-alive": true,
      "max-forwards": true,
      pragma: true,
      referer: true,
      te: true,
      trailer: true,
      "transfer-encoding": true,
      upgrade: true,
      "user-agent": true,
      "x-amzn-trace-id": true,
    };
    var PROXY_HEADER_PATTERN = /^proxy-/;
    var SEC_HEADER_PATTERN = /^sec-/;
    var UNSIGNABLE_PATTERNS = [/^proxy-/i, /^sec-/i];
    var ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
    var ALGORITHM_IDENTIFIER_V4A = "AWS4-ECDSA-P256-SHA256";
    var EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
    var UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
    var MAX_CACHE_SIZE = 50;
    var KEY_TYPE_IDENTIFIER = "aws4_request";
    var MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;
    var import_util_hex_encoding = require_dist_cjs13();
    var import_util_utf86 = require_dist_cjs7();
    var signingKeyCache = {};
    var cacheQueue = [];
    var createScope = /* @__PURE__ */ __name(
      (shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`,
      "createScope",
    );
    var getSigningKey = /* @__PURE__ */ __name(async (sha256Constructor, credentials, shortDate, region, service) => {
      const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
      const cacheKey = `${shortDate}:${region}:${service}:${(0, import_util_hex_encoding.toHex)(credsHash)}:${credentials.sessionToken}`;
      if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
      }
      cacheQueue.push(cacheKey);
      while (cacheQueue.length > MAX_CACHE_SIZE) {
        delete signingKeyCache[cacheQueue.shift()];
      }
      let key = `AWS4${credentials.secretAccessKey}`;
      for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
        key = await hmac(sha256Constructor, key, signable);
      }
      return (signingKeyCache[cacheKey] = key);
    }, "getSigningKey");
    var clearCredentialCache = /* @__PURE__ */ __name(() => {
      cacheQueue.length = 0;
      Object.keys(signingKeyCache).forEach((cacheKey) => {
        delete signingKeyCache[cacheKey];
      });
    }, "clearCredentialCache");
    var hmac = /* @__PURE__ */ __name((ctor, secret, data) => {
      const hash = new ctor(secret);
      hash.update((0, import_util_utf86.toUint8Array)(data));
      return hash.digest();
    }, "hmac");
    var getCanonicalHeaders = /* @__PURE__ */ __name(({ headers }, unsignableHeaders, signableHeaders) => {
      const canonical = {};
      for (const headerName of Object.keys(headers).sort()) {
        if (headers[headerName] == void 0) {
          continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (
          canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS ||
          unsignableHeaders?.has(canonicalHeaderName) ||
          PROXY_HEADER_PATTERN.test(canonicalHeaderName) ||
          SEC_HEADER_PATTERN.test(canonicalHeaderName)
        ) {
          if (!signableHeaders || (signableHeaders && !signableHeaders.has(canonicalHeaderName))) {
            continue;
          }
        }
        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
      }
      return canonical;
    }, "getCanonicalHeaders");
    var import_is_array_buffer = require_dist_cjs5();
    var import_util_utf822 = require_dist_cjs7();
    var getPayloadHash = /* @__PURE__ */ __name(async ({ headers, body }, hashConstructor) => {
      for (const headerName of Object.keys(headers)) {
        if (headerName.toLowerCase() === SHA256_HEADER) {
          return headers[headerName];
        }
      }
      if (body == void 0) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
      } else if (
        typeof body === "string" ||
        ArrayBuffer.isView(body) ||
        (0, import_is_array_buffer.isArrayBuffer)(body)
      ) {
        const hashCtor = new hashConstructor();
        hashCtor.update((0, import_util_utf822.toUint8Array)(body));
        return (0, import_util_hex_encoding.toHex)(await hashCtor.digest());
      }
      return UNSIGNED_PAYLOAD;
    }, "getPayloadHash");
    var import_util_utf832 = require_dist_cjs7();
    var _a;
    var HeaderFormatter =
      ((_a = class {
        format(headers) {
          const chunks = [];
          for (const headerName of Object.keys(headers)) {
            const bytes = (0, import_util_utf832.fromUtf8)(headerName);
            chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
          }
          const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
          let position = 0;
          for (const chunk of chunks) {
            out.set(chunk, position);
            position += chunk.byteLength;
          }
          return out;
        }
        formatHeaderValue(header) {
          switch (header.type) {
            case "boolean":
              return Uint8Array.from([
                header.value ? 0 : 1,
                /* boolFalse */
              ]);
            case "byte":
              return Uint8Array.from([2, header.value]);
            case "short":
              const shortView = new DataView(new ArrayBuffer(3));
              shortView.setUint8(
                0,
                3,
                /* short */
              );
              shortView.setInt16(1, header.value, false);
              return new Uint8Array(shortView.buffer);
            case "integer":
              const intView = new DataView(new ArrayBuffer(5));
              intView.setUint8(
                0,
                4,
                /* integer */
              );
              intView.setInt32(1, header.value, false);
              return new Uint8Array(intView.buffer);
            case "long":
              const longBytes = new Uint8Array(9);
              longBytes[0] = 5;
              longBytes.set(header.value.bytes, 1);
              return longBytes;
            case "binary":
              const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
              binView.setUint8(
                0,
                6,
                /* byteArray */
              );
              binView.setUint16(1, header.value.byteLength, false);
              const binBytes = new Uint8Array(binView.buffer);
              binBytes.set(header.value, 3);
              return binBytes;
            case "string":
              const utf8Bytes = (0, import_util_utf832.fromUtf8)(header.value);
              const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
              strView.setUint8(
                0,
                7,
                /* string */
              );
              strView.setUint16(1, utf8Bytes.byteLength, false);
              const strBytes = new Uint8Array(strView.buffer);
              strBytes.set(utf8Bytes, 3);
              return strBytes;
            case "timestamp":
              const tsBytes = new Uint8Array(9);
              tsBytes[0] = 8;
              tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
              return tsBytes;
            case "uuid":
              if (!UUID_PATTERN.test(header.value)) {
                throw new Error(`Invalid UUID received: ${header.value}`);
              }
              const uuidBytes = new Uint8Array(17);
              uuidBytes[0] = 9;
              uuidBytes.set((0, import_util_hex_encoding.fromHex)(header.value.replace(/\-/g, "")), 1);
              return uuidBytes;
          }
        }
      }),
      __name(_a, "HeaderFormatter"),
      _a);
    var UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
    var _a2;
    var Int64 =
      ((_a2 = class {
        constructor(bytes) {
          this.bytes = bytes;
          if (bytes.byteLength !== 8) {
            throw new Error("Int64 buffers must be exactly 8 bytes");
          }
        }
        static fromNumber(number) {
          if (number > 9223372036854776e3 || number < -9223372036854776e3) {
            throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
          }
          const bytes = new Uint8Array(8);
          for (let i = 7, remaining = Math.abs(Math.round(number)); i > -1 && remaining > 0; i--, remaining /= 256) {
            bytes[i] = remaining;
          }
          if (number < 0) {
            negate(bytes);
          }
          return new _a2(bytes);
        }
        /**
         * Called implicitly by infix arithmetic operators.
         */
        valueOf() {
          const bytes = this.bytes.slice(0);
          const negative = bytes[0] & 128;
          if (negative) {
            negate(bytes);
          }
          return parseInt((0, import_util_hex_encoding.toHex)(bytes), 16) * (negative ? -1 : 1);
        }
        toString() {
          return String(this.valueOf());
        }
      }),
      __name(_a2, "Int64"),
      _a2);
    function negate(bytes) {
      for (let i = 0; i < 8; i++) {
        bytes[i] ^= 255;
      }
      for (let i = 7; i > -1; i--) {
        bytes[i]++;
        if (bytes[i] !== 0) break;
      }
    }
    __name(negate, "negate");
    var hasHeader = /* @__PURE__ */ __name((soughtHeader, headers) => {
      soughtHeader = soughtHeader.toLowerCase();
      for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
          return true;
        }
      }
      return false;
    }, "hasHeader");
    var import_protocol_http13 = require_dist_cjs3();
    var moveHeadersToQuery = /* @__PURE__ */ __name((request, options = {}) => {
      const { headers, query = {} } = import_protocol_http13.HttpRequest.clone(request);
      for (const name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if (
          (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname)) ||
          options.hoistableHeaders?.has(lname)
        ) {
          query[name] = headers[name];
          delete headers[name];
        }
      }
      return {
        ...request,
        headers,
        query,
      };
    }, "moveHeadersToQuery");
    var prepareRequest = /* @__PURE__ */ __name((request) => {
      request = import_protocol_http13.HttpRequest.clone(request);
      for (const headerName of Object.keys(request.headers)) {
        if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
          delete request.headers[headerName];
        }
      }
      return request;
    }, "prepareRequest");
    var import_util_middleware6 = require_dist_cjs2();
    var import_util_utf842 = require_dist_cjs7();
    var import_util_uri_escape = require_dist_cjs9();
    var getCanonicalQuery = /* @__PURE__ */ __name(({ query = {} }) => {
      const keys = [];
      const serialized = {};
      for (const key of Object.keys(query)) {
        if (key.toLowerCase() === SIGNATURE_HEADER) {
          continue;
        }
        const encodedKey = (0, import_util_uri_escape.escapeUri)(key);
        keys.push(encodedKey);
        const value = query[key];
        if (typeof value === "string") {
          serialized[encodedKey] = `${encodedKey}=${(0, import_util_uri_escape.escapeUri)(value)}`;
        } else if (Array.isArray(value)) {
          serialized[encodedKey] = value
            .slice(0)
            .reduce(
              (encoded, value2) => encoded.concat([`${encodedKey}=${(0, import_util_uri_escape.escapeUri)(value2)}`]),
              [],
            )
            .sort()
            .join("&");
        }
      }
      return keys
        .sort()
        .map((key) => serialized[key])
        .filter((serialized2) => serialized2)
        .join("&");
    }, "getCanonicalQuery");
    var iso8601 = /* @__PURE__ */ __name(
      (time) =>
        toDate(time)
          .toISOString()
          .replace(/\.\d{3}Z$/, "Z"),
      "iso8601",
    );
    var toDate = /* @__PURE__ */ __name((time) => {
      if (typeof time === "number") {
        return new Date(time * 1e3);
      }
      if (typeof time === "string") {
        if (Number(time)) {
          return new Date(Number(time) * 1e3);
        }
        return new Date(time);
      }
      return time;
    }, "toDate");
    var _a3;
    var SignatureV4Base =
      ((_a3 = class {
        constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
          this.service = service;
          this.sha256 = sha256;
          this.uriEscapePath = uriEscapePath;
          this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
          this.regionProvider = (0, import_util_middleware6.normalizeProvider)(region);
          this.credentialProvider = (0, import_util_middleware6.normalizeProvider)(credentials);
        }
        createCanonicalRequest(request, canonicalHeaders, payloadHash) {
          const sortedHeaders = Object.keys(canonicalHeaders).sort();
          return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
        }
        async createStringToSign(longDate, credentialScope, canonicalRequest, algorithmIdentifier) {
          const hash = new this.sha256();
          hash.update((0, import_util_utf842.toUint8Array)(canonicalRequest));
          const hashedRequest = await hash.digest();
          return `${algorithmIdentifier}
${longDate}
${credentialScope}
${(0, import_util_hex_encoding.toHex)(hashedRequest)}`;
        }
        getCanonicalPath({ path }) {
          if (this.uriEscapePath) {
            const normalizedPathSegments = [];
            for (const pathSegment of path.split("/")) {
              if (pathSegment?.length === 0) continue;
              if (pathSegment === ".") continue;
              if (pathSegment === "..") {
                normalizedPathSegments.pop();
              } else {
                normalizedPathSegments.push(pathSegment);
              }
            }
            const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
            const doubleEncoded = (0, import_util_uri_escape.escapeUri)(normalizedPath);
            return doubleEncoded.replace(/%2F/g, "/");
          }
          return path;
        }
        validateResolvedCredentials(credentials) {
          if (
            typeof credentials !== "object" || // @ts-expect-error: Property 'accessKeyId' does not exist on type 'object'.ts(2339)
            typeof credentials.accessKeyId !== "string" || // @ts-expect-error: Property 'secretAccessKey' does not exist on type 'object'.ts(2339)
            typeof credentials.secretAccessKey !== "string"
          ) {
            throw new Error("Resolved credential object is not valid");
          }
        }
        formatDate(now) {
          const longDate = iso8601(now).replace(/[\-:]/g, "");
          return {
            longDate,
            shortDate: longDate.slice(0, 8),
          };
        }
        getCanonicalHeaderList(headers) {
          return Object.keys(headers).sort().join(";");
        }
      }),
      __name(_a3, "SignatureV4Base"),
      _a3);
    var _a4;
    var SignatureV42 =
      ((_a4 = class extends SignatureV4Base {
        constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
          super({
            applyChecksum,
            credentials,
            region,
            service,
            sha256,
            uriEscapePath,
          });
          this.headerFormatter = new HeaderFormatter();
        }
        async presign(originalRequest, options = {}) {
          const {
            signingDate = /* @__PURE__ */ new Date(),
            expiresIn = 3600,
            unsignableHeaders,
            unhoistableHeaders,
            signableHeaders,
            hoistableHeaders,
            signingRegion,
            signingService,
          } = options;
          const credentials = await this.credentialProvider();
          this.validateResolvedCredentials(credentials);
          const region = signingRegion ?? (await this.regionProvider());
          const { longDate, shortDate } = this.formatDate(signingDate);
          if (expiresIn > MAX_PRESIGNED_TTL) {
            return Promise.reject(
              "Signature version 4 presigned URLs must have an expiration date less than one week in the future",
            );
          }
          const scope = createScope(shortDate, region, signingService ?? this.service);
          const request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders, hoistableHeaders });
          if (credentials.sessionToken) {
            request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
          }
          request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
          request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
          request.query[AMZ_DATE_QUERY_PARAM] = longDate;
          request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
          const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
          request.query[SIGNED_HEADERS_QUERY_PARAM] = this.getCanonicalHeaderList(canonicalHeaders);
          request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(
            longDate,
            scope,
            this.getSigningKey(credentials, region, shortDate, signingService),
            this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)),
          );
          return request;
        }
        async sign(toSign, options) {
          if (typeof toSign === "string") {
            return this.signString(toSign, options);
          } else if (toSign.headers && toSign.payload) {
            return this.signEvent(toSign, options);
          } else if (toSign.message) {
            return this.signMessage(toSign, options);
          } else {
            return this.signRequest(toSign, options);
          }
        }
        async signEvent(
          { headers, payload },
          { signingDate = /* @__PURE__ */ new Date(), priorSignature, signingRegion, signingService },
        ) {
          const region = signingRegion ?? (await this.regionProvider());
          const { shortDate, longDate } = this.formatDate(signingDate);
          const scope = createScope(shortDate, region, signingService ?? this.service);
          const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
          const hash = new this.sha256();
          hash.update(headers);
          const hashedHeaders = (0, import_util_hex_encoding.toHex)(await hash.digest());
          const stringToSign = [
            EVENT_ALGORITHM_IDENTIFIER,
            longDate,
            scope,
            priorSignature,
            hashedHeaders,
            hashedPayload,
          ].join("\n");
          return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
        }
        async signMessage(
          signableMessage,
          { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService },
        ) {
          const promise = this.signEvent(
            {
              headers: this.headerFormatter.format(signableMessage.message.headers),
              payload: signableMessage.message.body,
            },
            {
              signingDate,
              signingRegion,
              signingService,
              priorSignature: signableMessage.priorSignature,
            },
          );
          return promise.then((signature) => {
            return { message: signableMessage.message, signature };
          });
        }
        async signString(
          stringToSign,
          { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService } = {},
        ) {
          const credentials = await this.credentialProvider();
          this.validateResolvedCredentials(credentials);
          const region = signingRegion ?? (await this.regionProvider());
          const { shortDate } = this.formatDate(signingDate);
          const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
          hash.update((0, import_util_utf85.toUint8Array)(stringToSign));
          return (0, import_util_hex_encoding.toHex)(await hash.digest());
        }
        async signRequest(
          requestToSign,
          {
            signingDate = /* @__PURE__ */ new Date(),
            signableHeaders,
            unsignableHeaders,
            signingRegion,
            signingService,
          } = {},
        ) {
          const credentials = await this.credentialProvider();
          this.validateResolvedCredentials(credentials);
          const region = signingRegion ?? (await this.regionProvider());
          const request = prepareRequest(requestToSign);
          const { longDate, shortDate } = this.formatDate(signingDate);
          const scope = createScope(shortDate, region, signingService ?? this.service);
          request.headers[AMZ_DATE_HEADER] = longDate;
          if (credentials.sessionToken) {
            request.headers[TOKEN_HEADER] = credentials.sessionToken;
          }
          const payloadHash = await getPayloadHash(request, this.sha256);
          if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
            request.headers[SHA256_HEADER] = payloadHash;
          }
          const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
          const signature = await this.getSignature(
            longDate,
            scope,
            this.getSigningKey(credentials, region, shortDate, signingService),
            this.createCanonicalRequest(request, canonicalHeaders, payloadHash),
          );
          request.headers[AUTH_HEADER] =
            `${ALGORITHM_IDENTIFIER} Credential=${credentials.accessKeyId}/${scope}, SignedHeaders=${this.getCanonicalHeaderList(canonicalHeaders)}, Signature=${signature}`;
          return request;
        }
        async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
          const stringToSign = await this.createStringToSign(
            longDate,
            credentialScope,
            canonicalRequest,
            ALGORITHM_IDENTIFIER,
          );
          const hash = new this.sha256(await keyPromise);
          hash.update((0, import_util_utf85.toUint8Array)(stringToSign));
          return (0, import_util_hex_encoding.toHex)(await hash.digest());
        }
        getSigningKey(credentials, region, shortDate, service) {
          return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
        }
      }),
      __name(_a4, "SignatureV4"),
      _a4);
    var signatureV4aContainer = {
      SignatureV4a: null,
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
function normalizeCredentialProvider(config, { credentials, credentialDefaultProvider }) {
  let credentialsProvider;
  if (credentials) {
    if (!credentials?.memoized) {
      credentialsProvider = memoizeIdentityProvider(credentials, isIdentityExpired, doesIdentityRequireRefresh);
    } else {
      credentialsProvider = credentials;
    }
  } else {
    if (credentialDefaultProvider) {
      credentialsProvider = normalizeProvider2(
        credentialDefaultProvider(
          Object.assign({}, config, {
            parentClientConfig: config,
          }),
        ),
      );
    } else {
      credentialsProvider = async () => {
        throw new Error(
          "@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.",
        );
      };
    }
  }
  credentialsProvider.memoized = true;
  return credentialsProvider;
}
function bindCallerConfig(config, credentialsProvider) {
  if (credentialsProvider.configBound) {
    return credentialsProvider;
  }
  const fn = async (options) => credentialsProvider({ ...options, callerClientConfig: config });
  fn.memoized = credentialsProvider.memoized;
  fn.configBound = true;
  return fn;
}
var import_signature_v4, resolveAwsSdkSigV4Config, resolveAWSSDKSigV4Config;
var init_resolveAwsSdkSigV4Config = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js"() {
    init_client();
    init_dist_es();
    import_signature_v4 = __toESM(require_dist_cjs20());
    resolveAwsSdkSigV4Config = (config) => {
      let inputCredentials = config.credentials;
      let isUserSupplied = !!config.credentials;
      let resolvedCredentials = void 0;
      Object.defineProperty(config, "credentials", {
        set(credentials) {
          if (credentials && credentials !== inputCredentials && credentials !== resolvedCredentials) {
            isUserSupplied = true;
          }
          inputCredentials = credentials;
          const memoizedProvider = normalizeCredentialProvider(config, {
            credentials: inputCredentials,
            credentialDefaultProvider: config.credentialDefaultProvider,
          });
          const boundProvider = bindCallerConfig(config, memoizedProvider);
          if (isUserSupplied && !boundProvider.attributed) {
            resolvedCredentials = async (options) =>
              boundProvider(options).then((creds) => setCredentialFeature(creds, "CREDENTIALS_CODE", "e"));
            resolvedCredentials.memoized = boundProvider.memoized;
            resolvedCredentials.configBound = boundProvider.configBound;
            resolvedCredentials.attributed = true;
          } else {
            resolvedCredentials = boundProvider;
          }
        },
        get() {
          return resolvedCredentials;
        },
        enumerable: true,
        configurable: true,
      });
      config.credentials = inputCredentials;
      const { signingEscapePath = true, systemClockOffset = config.systemClockOffset || 0, sha256 } = config;
      let signer;
      if (config.signer) {
        signer = normalizeProvider2(config.signer);
      } else if (config.regionInfoProvider) {
        signer = () =>
          normalizeProvider2(config.region)()
            .then(async (region) => [
              (await config.regionInfoProvider(region, {
                useFipsEndpoint: await config.useFipsEndpoint(),
                useDualstackEndpoint: await config.useDualstackEndpoint(),
              })) || {},
              region,
            ])
            .then(([regionInfo, region]) => {
              const { signingRegion, signingService } = regionInfo;
              config.signingRegion = config.signingRegion || signingRegion || region;
              config.signingName = config.signingName || signingService || config.serviceId;
              const params = {
                ...config,
                credentials: config.credentials,
                region: config.signingRegion,
                service: config.signingName,
                sha256,
                uriEscapePath: signingEscapePath,
              };
              const SignerCtor = config.signerConstructor || import_signature_v4.SignatureV4;
              return new SignerCtor(params);
            });
      } else {
        signer = async (authScheme) => {
          authScheme = Object.assign(
            {},
            {
              name: "sigv4",
              signingName: config.signingName || config.defaultSigningName,
              signingRegion: await normalizeProvider2(config.region)(),
              properties: {},
            },
            authScheme,
          );
          const signingRegion = authScheme.signingRegion;
          const signingService = authScheme.signingName;
          config.signingRegion = config.signingRegion || signingRegion;
          config.signingName = config.signingName || signingService || config.serviceId;
          const params = {
            ...config,
            credentials: config.credentials,
            region: config.signingRegion,
            service: config.signingName,
            sha256,
            uriEscapePath: signingEscapePath,
          };
          const SignerCtor = config.signerConstructor || import_signature_v4.SignatureV4;
          return new SignerCtor(params);
        };
      }
      const resolvedConfig = Object.assign(config, {
        systemClockOffset,
        signingEscapePath,
        signer,
      });
      return resolvedConfig;
    };
    resolveAWSSDKSigV4Config = resolveAwsSdkSigV4Config;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/index.js
var init_aws_sdk = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/index.js"() {
    init_AwsSdkSigV4Signer();
    init_AwsSdkSigV4ASigner();
    init_NODE_AUTH_SCHEME_PREFERENCE_OPTIONS();
    init_resolveAwsSdkSigV4AConfig();
    init_resolveAwsSdkSigV4Config();
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/index.js
var init_httpAuthSchemes2 = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/index.js"() {
    init_aws_sdk();
    init_getBearerTokenEnvKey();
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/coercing-serializers.js
var _toStr, _toBool, _toNum;
var init_coercing_serializers = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/coercing-serializers.js"() {
    _toStr = (val) => {
      if (val == null) {
        return val;
      }
      if (typeof val === "number" || typeof val === "bigint") {
        const warning = new Error(`Received number ${val} where a string was expected.`);
        warning.name = "Warning";
        console.warn(warning);
        return String(val);
      }
      if (typeof val === "boolean") {
        const warning = new Error(`Received boolean ${val} where a string was expected.`);
        warning.name = "Warning";
        console.warn(warning);
        return String(val);
      }
      return val;
    };
    _toBool = (val) => {
      if (val == null) {
        return val;
      }
      if (typeof val === "number") {
      }
      if (typeof val === "string") {
        const lowercase = val.toLowerCase();
        if (val !== "" && lowercase !== "false" && lowercase !== "true") {
          const warning = new Error(`Received string "${val}" where a boolean was expected.`);
          warning.name = "Warning";
          console.warn(warning);
        }
        return val !== "" && lowercase !== "false";
      }
      return val;
    };
    _toNum = (val) => {
      if (val == null) {
        return val;
      }
      if (typeof val === "boolean") {
      }
      if (typeof val === "string") {
        const num = Number(val);
        if (num.toString() !== val) {
          const warning = new Error(`Received string "${val}" where a number was expected.`);
          warning.name = "Warning";
          console.warn(warning);
          return val;
        }
        return num;
      }
      return val;
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-body-length-browser/dist-cjs/index.js
var require_dist_cjs21 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-body-length-browser/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      calculateBodyLength: () => calculateBodyLength6,
    });
    module2.exports = __toCommonJS2(src_exports);
    var TEXT_ENCODER = typeof TextEncoder == "function" ? new TextEncoder() : null;
    var calculateBodyLength6 = /* @__PURE__ */ __name((body) => {
      if (typeof body === "string") {
        if (TEXT_ENCODER) {
          return TEXT_ENCODER.encode(body).byteLength;
        }
        let len = body.length;
        for (let i = len - 1; i >= 0; i--) {
          const code = body.charCodeAt(i);
          if (code > 127 && code <= 2047) len++;
          else if (code > 2047 && code <= 65535) len += 2;
          if (code >= 56320 && code <= 57343) i--;
        }
        return len;
      } else if (typeof body.byteLength === "number") {
        return body.byteLength;
      } else if (typeof body.size === "number") {
        return body.size;
      }
      throw new Error(`Body Length computation failed for ${body}`);
    }, "calculateBodyLength");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/ConfigurableSerdeContext.js
var SerdeContextConfig;
var init_ConfigurableSerdeContext = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/ConfigurableSerdeContext.js"() {
    SerdeContextConfig = class {
      constructor() {
        __publicField(this, "serdeContext");
      }
      setSerdeContext(serdeContext) {
        this.serdeContext = serdeContext;
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/jsonReviver.js
function jsonReviver(key, value, context) {
  if (context?.source) {
    const numericString = context.source;
    if (typeof value === "number") {
      if (value > Number.MAX_SAFE_INTEGER || value < Number.MIN_SAFE_INTEGER || numericString !== String(value)) {
        const isFractional = numericString.includes(".");
        if (isFractional) {
          return new NumericValue2(numericString, "bigDecimal");
        } else {
          return BigInt(numericString);
        }
      }
    }
  }
  return value;
}
var init_jsonReviver = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/jsonReviver.js"() {
    init_serde();
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-stack/dist-cjs/index.js
var require_dist_cjs22 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-stack/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      constructStack: () => constructStack,
    });
    module2.exports = __toCommonJS2(src_exports);
    var getAllAliases = /* @__PURE__ */ __name((name, aliases) => {
      const _aliases = [];
      if (name) {
        _aliases.push(name);
      }
      if (aliases) {
        for (const alias of aliases) {
          _aliases.push(alias);
        }
      }
      return _aliases;
    }, "getAllAliases");
    var getMiddlewareNameWithAliases = /* @__PURE__ */ __name((name, aliases) => {
      return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
    }, "getMiddlewareNameWithAliases");
    var constructStack = /* @__PURE__ */ __name(() => {
      let absoluteEntries = [];
      let relativeEntries = [];
      let identifyOnResolve = false;
      const entriesNameSet = /* @__PURE__ */ new Set();
      const sort = /* @__PURE__ */ __name(
        (entries) =>
          entries.sort(
            (a, b) =>
              stepWeights[b.step] - stepWeights[a.step] ||
              priorityWeights[b.priority || "normal"] - priorityWeights[a.priority || "normal"],
          ),
        "sort",
      );
      const removeByName = /* @__PURE__ */ __name((toRemove) => {
        let isRemoved = false;
        const filterCb = /* @__PURE__ */ __name((entry) => {
          const aliases = getAllAliases(entry.name, entry.aliases);
          if (aliases.includes(toRemove)) {
            isRemoved = true;
            for (const alias of aliases) {
              entriesNameSet.delete(alias);
            }
            return false;
          }
          return true;
        }, "filterCb");
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      }, "removeByName");
      const removeByReference = /* @__PURE__ */ __name((toRemove) => {
        let isRemoved = false;
        const filterCb = /* @__PURE__ */ __name((entry) => {
          if (entry.middleware === toRemove) {
            isRemoved = true;
            for (const alias of getAllAliases(entry.name, entry.aliases)) {
              entriesNameSet.delete(alias);
            }
            return false;
          }
          return true;
        }, "filterCb");
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      }, "removeByReference");
      const cloneTo = /* @__PURE__ */ __name((toStack) => {
        absoluteEntries.forEach((entry) => {
          toStack.add(entry.middleware, { ...entry });
        });
        relativeEntries.forEach((entry) => {
          toStack.addRelativeTo(entry.middleware, { ...entry });
        });
        toStack.identifyOnResolve?.(stack.identifyOnResolve());
        return toStack;
      }, "cloneTo");
      const expandRelativeMiddlewareList = /* @__PURE__ */ __name((from) => {
        const expandedMiddlewareList = [];
        from.before.forEach((entry) => {
          if (entry.before.length === 0 && entry.after.length === 0) {
            expandedMiddlewareList.push(entry);
          } else {
            expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
          }
        });
        expandedMiddlewareList.push(from);
        from.after.reverse().forEach((entry) => {
          if (entry.before.length === 0 && entry.after.length === 0) {
            expandedMiddlewareList.push(entry);
          } else {
            expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
          }
        });
        return expandedMiddlewareList;
      }, "expandRelativeMiddlewareList");
      const getMiddlewareList = /* @__PURE__ */ __name((debug = false) => {
        const normalizedAbsoluteEntries = [];
        const normalizedRelativeEntries = [];
        const normalizedEntriesNameMap = {};
        absoluteEntries.forEach((entry) => {
          const normalizedEntry = {
            ...entry,
            before: [],
            after: [],
          };
          for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
            normalizedEntriesNameMap[alias] = normalizedEntry;
          }
          normalizedAbsoluteEntries.push(normalizedEntry);
        });
        relativeEntries.forEach((entry) => {
          const normalizedEntry = {
            ...entry,
            before: [],
            after: [],
          };
          for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
            normalizedEntriesNameMap[alias] = normalizedEntry;
          }
          normalizedRelativeEntries.push(normalizedEntry);
        });
        normalizedRelativeEntries.forEach((entry) => {
          if (entry.toMiddleware) {
            const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
            if (toMiddleware === void 0) {
              if (debug) {
                return;
              }
              throw new Error(
                `${entry.toMiddleware} is not found when adding ${getMiddlewareNameWithAliases(entry.name, entry.aliases)} middleware ${entry.relation} ${entry.toMiddleware}`,
              );
            }
            if (entry.relation === "after") {
              toMiddleware.after.push(entry);
            }
            if (entry.relation === "before") {
              toMiddleware.before.push(entry);
            }
          }
        });
        const mainChain = sort(normalizedAbsoluteEntries)
          .map(expandRelativeMiddlewareList)
          .reduce((wholeList, expandedMiddlewareList) => {
            wholeList.push(...expandedMiddlewareList);
            return wholeList;
          }, []);
        return mainChain;
      }, "getMiddlewareList");
      const stack = {
        add: (middleware, options = {}) => {
          const { name, override, aliases: _aliases } = options;
          const entry = {
            step: "initialize",
            priority: "normal",
            middleware,
            ...options,
          };
          const aliases = getAllAliases(name, _aliases);
          if (aliases.length > 0) {
            if (aliases.some((alias) => entriesNameSet.has(alias))) {
              if (!override)
                throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
              for (const alias of aliases) {
                const toOverrideIndex = absoluteEntries.findIndex(
                  (entry2) => entry2.name === alias || entry2.aliases?.some((a) => a === alias),
                );
                if (toOverrideIndex === -1) {
                  continue;
                }
                const toOverride = absoluteEntries[toOverrideIndex];
                if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
                  throw new Error(
                    `"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ${entry.priority} priority in ${entry.step} step.`,
                  );
                }
                absoluteEntries.splice(toOverrideIndex, 1);
              }
            }
            for (const alias of aliases) {
              entriesNameSet.add(alias);
            }
          }
          absoluteEntries.push(entry);
        },
        addRelativeTo: (middleware, options) => {
          const { name, override, aliases: _aliases } = options;
          const entry = {
            middleware,
            ...options,
          };
          const aliases = getAllAliases(name, _aliases);
          if (aliases.length > 0) {
            if (aliases.some((alias) => entriesNameSet.has(alias))) {
              if (!override)
                throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
              for (const alias of aliases) {
                const toOverrideIndex = relativeEntries.findIndex(
                  (entry2) => entry2.name === alias || entry2.aliases?.some((a) => a === alias),
                );
                if (toOverrideIndex === -1) {
                  continue;
                }
                const toOverride = relativeEntries[toOverrideIndex];
                if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                  throw new Error(
                    `"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} "${entry.toMiddleware}" middleware.`,
                  );
                }
                relativeEntries.splice(toOverrideIndex, 1);
              }
            }
            for (const alias of aliases) {
              entriesNameSet.add(alias);
            }
          }
          relativeEntries.push(entry);
        },
        clone: () => cloneTo(constructStack()),
        use: (plugin) => {
          plugin.applyToStack(stack);
        },
        remove: (toRemove) => {
          if (typeof toRemove === "string") return removeByName(toRemove);
          else return removeByReference(toRemove);
        },
        removeByTag: (toRemove) => {
          let isRemoved = false;
          const filterCb = /* @__PURE__ */ __name((entry) => {
            const { tags, name, aliases: _aliases } = entry;
            if (tags && tags.includes(toRemove)) {
              const aliases = getAllAliases(name, _aliases);
              for (const alias of aliases) {
                entriesNameSet.delete(alias);
              }
              isRemoved = true;
              return false;
            }
            return true;
          }, "filterCb");
          absoluteEntries = absoluteEntries.filter(filterCb);
          relativeEntries = relativeEntries.filter(filterCb);
          return isRemoved;
        },
        concat: (from) => {
          const cloned = cloneTo(constructStack());
          cloned.use(from);
          cloned.identifyOnResolve(
            identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false),
          );
          return cloned;
        },
        applyToStack: cloneTo,
        identify: () => {
          return getMiddlewareList(true).map((mw) => {
            const step = mw.step ?? mw.relation + " " + mw.toMiddleware;
            return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
          });
        },
        identifyOnResolve(toggle) {
          if (typeof toggle === "boolean") identifyOnResolve = toggle;
          return identifyOnResolve;
        },
        resolve: (handler, context) => {
          for (const middleware of getMiddlewareList()
            .map((entry) => entry.middleware)
            .reverse()) {
            handler = middleware(handler, context);
          }
          if (identifyOnResolve) {
            console.log(stack.identify());
          }
          return handler;
        },
      };
      return stack;
    }, "constructStack");
    var stepWeights = {
      initialize: 5,
      serialize: 4,
      build: 3,
      finalizeRequest: 2,
      deserialize: 1,
    };
    var priorityWeights = {
      high: 3,
      normal: 2,
      low: 1,
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/smithy-client/dist-cjs/index.js
var require_dist_cjs23 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/smithy-client/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __reExport = (target, mod, secondTarget) => (
      __copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")
    );
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      Client: () => Client,
      Command: () => Command,
      NoOpLogger: () => NoOpLogger2,
      SENSITIVE_STRING: () => SENSITIVE_STRING,
      ServiceException: () => ServiceException,
      _json: () => _json,
      collectBody: () => import_protocols8.collectBody,
      convertMap: () => convertMap,
      createAggregatedClient: () => createAggregatedClient2,
      decorateServiceException: () => decorateServiceException,
      emitWarningIfUnsupportedVersion: () => emitWarningIfUnsupportedVersion3,
      extendedEncodeURIComponent: () => import_protocols8.extendedEncodeURIComponent,
      getArrayIfSingleItem: () => getArrayIfSingleItem,
      getDefaultClientConfiguration: () => getDefaultClientConfiguration,
      getDefaultExtensionConfiguration: () => getDefaultExtensionConfiguration2,
      getValueFromTextNode: () => getValueFromTextNode3,
      isSerializableHeaderValue: () => isSerializableHeaderValue,
      loadConfigsForDefaultMode: () => loadConfigsForDefaultMode2,
      map: () => map,
      resolveDefaultRuntimeConfig: () => resolveDefaultRuntimeConfig2,
      resolvedPath: () => import_protocols8.resolvedPath,
      serializeDateTime: () => serializeDateTime,
      serializeFloat: () => serializeFloat,
      take: () => take,
      throwDefaultError: () => throwDefaultError,
      withBaseException: () => withBaseException,
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_middleware_stack = require_dist_cjs22();
    var _a;
    var Client =
      ((_a = class {
        constructor(config) {
          this.config = config;
          this.middlewareStack = (0, import_middleware_stack.constructStack)();
        }
        send(command, optionsOrCb, cb) {
          const options = typeof optionsOrCb !== "function" ? optionsOrCb : void 0;
          const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
          const useHandlerCache = options === void 0 && this.config.cacheMiddleware === true;
          let handler;
          if (useHandlerCache) {
            if (!this.handlers) {
              this.handlers = /* @__PURE__ */ new WeakMap();
            }
            const handlers = this.handlers;
            if (handlers.has(command.constructor)) {
              handler = handlers.get(command.constructor);
            } else {
              handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
              handlers.set(command.constructor, handler);
            }
          } else {
            delete this.handlers;
            handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
          }
          if (callback) {
            handler(command)
              .then(
                (result) => callback(null, result.output),
                (err) => callback(err),
              )
              .catch(
                // prevent any errors thrown in the callback from triggering an
                // unhandled promise rejection
                () => {},
              );
          } else {
            return handler(command).then((result) => result.output);
          }
        }
        destroy() {
          this.config?.requestHandler?.destroy?.();
          delete this.handlers;
        }
      }),
      __name(_a, "Client"),
      _a);
    var import_protocols8 = (init_protocols(), __toCommonJS(protocols_exports));
    var import_types5 = require_dist_cjs();
    var _a2;
    var Command =
      ((_a2 = class {
        constructor() {
          this.middlewareStack = (0, import_middleware_stack.constructStack)();
        }
        /**
         * Factory for Command ClassBuilder.
         * @internal
         */
        static classBuilder() {
          return new ClassBuilder();
        }
        /**
         * @internal
         */
        resolveMiddlewareWithContext(
          clientStack,
          configuration,
          options,
          {
            middlewareFn,
            clientName,
            commandName,
            inputFilterSensitiveLog,
            outputFilterSensitiveLog,
            smithyContext,
            additionalContext,
            CommandCtor,
          },
        ) {
          for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
            this.middlewareStack.use(mw);
          }
          const stack = clientStack.concat(this.middlewareStack);
          const { logger: logger3 } = configuration;
          const handlerExecutionContext = {
            logger: logger3,
            clientName,
            commandName,
            inputFilterSensitiveLog,
            outputFilterSensitiveLog,
            [import_types5.SMITHY_CONTEXT_KEY]: {
              commandInstance: this,
              ...smithyContext,
            },
            ...additionalContext,
          };
          const { requestHandler } = configuration;
          return stack.resolve(
            (request) => requestHandler.handle(request.request, options || {}),
            handlerExecutionContext,
          );
        }
      }),
      __name(_a2, "Command"),
      _a2);
    var _a3;
    var ClassBuilder =
      ((_a3 = class {
        constructor() {
          this._init = () => {};
          this._ep = {};
          this._middlewareFn = () => [];
          this._commandName = "";
          this._clientName = "";
          this._additionalContext = {};
          this._smithyContext = {};
          this._inputFilterSensitiveLog = (_) => _;
          this._outputFilterSensitiveLog = (_) => _;
          this._serializer = null;
          this._deserializer = null;
        }
        /**
         * Optional init callback.
         */
        init(cb) {
          this._init = cb;
        }
        /**
         * Set the endpoint parameter instructions.
         */
        ep(endpointParameterInstructions) {
          this._ep = endpointParameterInstructions;
          return this;
        }
        /**
         * Add any number of middleware.
         */
        m(middlewareSupplier) {
          this._middlewareFn = middlewareSupplier;
          return this;
        }
        /**
         * Set the initial handler execution context Smithy field.
         */
        s(service, operation, smithyContext = {}) {
          this._smithyContext = {
            service,
            operation,
            ...smithyContext,
          };
          return this;
        }
        /**
         * Set the initial handler execution context.
         */
        c(additionalContext = {}) {
          this._additionalContext = additionalContext;
          return this;
        }
        /**
         * Set constant string identifiers for the operation.
         */
        n(clientName, commandName) {
          this._clientName = clientName;
          this._commandName = commandName;
          return this;
        }
        /**
         * Set the input and output sensistive log filters.
         */
        f(inputFilter = (_) => _, outputFilter = (_) => _) {
          this._inputFilterSensitiveLog = inputFilter;
          this._outputFilterSensitiveLog = outputFilter;
          return this;
        }
        /**
         * Sets the serializer.
         */
        ser(serializer) {
          this._serializer = serializer;
          return this;
        }
        /**
         * Sets the deserializer.
         */
        de(deserializer) {
          this._deserializer = deserializer;
          return this;
        }
        /**
         * Sets input/output schema for the operation.
         */
        sc(operation) {
          this._operationSchema = operation;
          this._smithyContext.operationSchema = operation;
          return this;
        }
        /**
         * @returns a Command class with the classBuilder properties.
         */
        build() {
          var _a6;
          const closure = this;
          let CommandRef;
          return (CommandRef =
            ((_a6 = class extends Command {
              /**
               * @public
               */
              constructor(...[input]) {
                super();
                this.serialize = closure._serializer;
                this.deserialize = closure._deserializer;
                this.input = input ?? {};
                closure._init(this);
                this.schema = closure._operationSchema;
              }
              /**
               * @public
               */
              static getEndpointParameterInstructions() {
                return closure._ep;
              }
              /**
               * @internal
               */
              resolveMiddleware(stack, configuration, options) {
                return this.resolveMiddlewareWithContext(stack, configuration, options, {
                  CommandCtor: CommandRef,
                  middlewareFn: closure._middlewareFn,
                  clientName: closure._clientName,
                  commandName: closure._commandName,
                  inputFilterSensitiveLog: closure._inputFilterSensitiveLog,
                  outputFilterSensitiveLog: closure._outputFilterSensitiveLog,
                  smithyContext: closure._smithyContext,
                  additionalContext: closure._additionalContext,
                });
              }
            }),
            __name(_a6, "CommandRef"),
            _a6));
        }
      }),
      __name(_a3, "ClassBuilder"),
      _a3);
    var SENSITIVE_STRING = "***SensitiveInformation***";
    var createAggregatedClient2 = /* @__PURE__ */ __name((commands2, Client2) => {
      for (const command of Object.keys(commands2)) {
        const CommandCtor = commands2[command];
        const methodImpl = /* @__PURE__ */ __name(async function (args, optionsOrCb, cb) {
          const command2 = new CommandCtor(args);
          if (typeof optionsOrCb === "function") {
            this.send(command2, optionsOrCb);
          } else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object") throw new Error(`Expected http options but got ${typeof optionsOrCb}`);
            this.send(command2, optionsOrCb || {}, cb);
          } else {
            return this.send(command2, optionsOrCb);
          }
        }, "methodImpl");
        const methodName = (command[0].toLowerCase() + command.slice(1)).replace(/Command$/, "");
        Client2.prototype[methodName] = methodImpl;
      }
    }, "createAggregatedClient");
    var _a4;
    var ServiceException =
      ((_a4 = class extends Error {
        constructor(options) {
          super(options.message);
          Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype);
          this.name = options.name;
          this.$fault = options.$fault;
          this.$metadata = options.$metadata;
        }
        /**
         * Checks if a value is an instance of ServiceException (duck typed)
         */
        static isInstance(value) {
          if (!value) return false;
          const candidate = value;
          return (
            _a4.prototype.isPrototypeOf(candidate) ||
            (Boolean(candidate.$fault) &&
              Boolean(candidate.$metadata) &&
              (candidate.$fault === "client" || candidate.$fault === "server"))
          );
        }
        /**
         * Custom instanceof check to support the operator for ServiceException base class
         */
        static [Symbol.hasInstance](instance) {
          if (!instance) return false;
          const candidate = instance;
          if (this === _a4) {
            return _a4.isInstance(instance);
          }
          if (_a4.isInstance(instance)) {
            if (candidate.name && this.name) {
              return this.prototype.isPrototypeOf(instance) || candidate.name === this.name;
            }
            return this.prototype.isPrototypeOf(instance);
          }
          return false;
        }
      }),
      __name(_a4, "ServiceException"),
      _a4);
    var decorateServiceException = /* @__PURE__ */ __name((exception, additions = {}) => {
      Object.entries(additions)
        .filter(([, v]) => v !== void 0)
        .forEach(([k, v]) => {
          if (exception[k] == void 0 || exception[k] === "") {
            exception[k] = v;
          }
        });
      const message = exception.message || exception.Message || "UnknownError";
      exception.message = message;
      delete exception.Message;
      return exception;
    }, "decorateServiceException");
    var throwDefaultError = /* @__PURE__ */ __name(({ output, parsedBody, exceptionCtor, errorCode }) => {
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : void 0;
      const response = new exceptionCtor({
        name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
        $fault: "client",
        $metadata,
      });
      throw decorateServiceException(response, parsedBody);
    }, "throwDefaultError");
    var withBaseException = /* @__PURE__ */ __name((ExceptionCtor) => {
      return ({ output, parsedBody, errorCode }) => {
        throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
      };
    }, "withBaseException");
    var deserializeMetadata = /* @__PURE__ */ __name(
      (output) => ({
        httpStatusCode: output.statusCode,
        requestId:
          output.headers["x-amzn-requestid"] ??
          output.headers["x-amzn-request-id"] ??
          output.headers["x-amz-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
      }),
      "deserializeMetadata",
    );
    var loadConfigsForDefaultMode2 = /* @__PURE__ */ __name((mode) => {
      switch (mode) {
        case "standard":
          return {
            retryMode: "standard",
            connectionTimeout: 3100,
          };
        case "in-region":
          return {
            retryMode: "standard",
            connectionTimeout: 1100,
          };
        case "cross-region":
          return {
            retryMode: "standard",
            connectionTimeout: 3100,
          };
        case "mobile":
          return {
            retryMode: "standard",
            connectionTimeout: 3e4,
          };
        default:
          return {};
      }
    }, "loadConfigsForDefaultMode");
    var warningEmitted = false;
    var emitWarningIfUnsupportedVersion3 = /* @__PURE__ */ __name((version2) => {
      if (version2 && !warningEmitted && parseInt(version2.substring(1, version2.indexOf("."))) < 16) {
        warningEmitted = true;
      }
    }, "emitWarningIfUnsupportedVersion");
    var getChecksumConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      const checksumAlgorithms = [];
      for (const id in import_types5.AlgorithmId) {
        const algorithmId = import_types5.AlgorithmId[id];
        if (runtimeConfig[algorithmId] === void 0) {
          continue;
        }
        checksumAlgorithms.push({
          algorithmId: () => algorithmId,
          checksumConstructor: () => runtimeConfig[algorithmId],
        });
      }
      return {
        addChecksumAlgorithm(algo) {
          checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
          return checksumAlgorithms;
        },
      };
    }, "getChecksumConfiguration");
    var resolveChecksumRuntimeConfig = /* @__PURE__ */ __name((clientConfig) => {
      const runtimeConfig = {};
      clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
      });
      return runtimeConfig;
    }, "resolveChecksumRuntimeConfig");
    var getRetryConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      return {
        setRetryStrategy(retryStrategy) {
          runtimeConfig.retryStrategy = retryStrategy;
        },
        retryStrategy() {
          return runtimeConfig.retryStrategy;
        },
      };
    }, "getRetryConfiguration");
    var resolveRetryRuntimeConfig = /* @__PURE__ */ __name((retryStrategyConfiguration) => {
      const runtimeConfig = {};
      runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
      return runtimeConfig;
    }, "resolveRetryRuntimeConfig");
    var getDefaultExtensionConfiguration2 = /* @__PURE__ */ __name((runtimeConfig) => {
      return Object.assign(getChecksumConfiguration(runtimeConfig), getRetryConfiguration(runtimeConfig));
    }, "getDefaultExtensionConfiguration");
    var getDefaultClientConfiguration = getDefaultExtensionConfiguration2;
    var resolveDefaultRuntimeConfig2 = /* @__PURE__ */ __name((config) => {
      return Object.assign(resolveChecksumRuntimeConfig(config), resolveRetryRuntimeConfig(config));
    }, "resolveDefaultRuntimeConfig");
    var getArrayIfSingleItem = /* @__PURE__ */ __name(
      (mayBeArray) => (Array.isArray(mayBeArray) ? mayBeArray : [mayBeArray]),
      "getArrayIfSingleItem",
    );
    var getValueFromTextNode3 = /* @__PURE__ */ __name((obj) => {
      const textNodeName = "#text";
      for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== void 0) {
          obj[key] = obj[key][textNodeName];
        } else if (typeof obj[key] === "object" && obj[key] !== null) {
          obj[key] = getValueFromTextNode3(obj[key]);
        }
      }
      return obj;
    }, "getValueFromTextNode");
    var isSerializableHeaderValue = /* @__PURE__ */ __name((value) => {
      return value != null;
    }, "isSerializableHeaderValue");
    var _a5;
    var NoOpLogger2 =
      ((_a5 = class {
        trace() {}
        debug() {}
        info() {}
        warn() {}
        error() {}
      }),
      __name(_a5, "NoOpLogger"),
      _a5);
    function map(arg0, arg1, arg2) {
      let target;
      let filter;
      let instructions;
      if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
        target = {};
        instructions = arg0;
      } else {
        target = arg0;
        if (typeof arg1 === "function") {
          filter = arg1;
          instructions = arg2;
          return mapWithFilter(target, filter, instructions);
        } else {
          instructions = arg1;
        }
      }
      for (const key of Object.keys(instructions)) {
        if (!Array.isArray(instructions[key])) {
          target[key] = instructions[key];
          continue;
        }
        applyInstruction(target, null, instructions, key);
      }
      return target;
    }
    __name(map, "map");
    var convertMap = /* @__PURE__ */ __name((target) => {
      const output = {};
      for (const [k, v] of Object.entries(target || {})) {
        output[k] = [, v];
      }
      return output;
    }, "convertMap");
    var take = /* @__PURE__ */ __name((source, instructions) => {
      const out = {};
      for (const key in instructions) {
        applyInstruction(out, source, instructions, key);
      }
      return out;
    }, "take");
    var mapWithFilter = /* @__PURE__ */ __name((target, filter, instructions) => {
      return map(
        target,
        Object.entries(instructions).reduce((_instructions, [key, value]) => {
          if (Array.isArray(value)) {
            _instructions[key] = value;
          } else {
            if (typeof value === "function") {
              _instructions[key] = [filter, value()];
            } else {
              _instructions[key] = [filter, value];
            }
          }
          return _instructions;
        }, {}),
      );
    }, "mapWithFilter");
    var applyInstruction = /* @__PURE__ */ __name((target, source, instructions, targetKey) => {
      if (source !== null) {
        let instruction = instructions[targetKey];
        if (typeof instruction === "function") {
          instruction = [, instruction];
        }
        const [filter2 = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
        if (
          (typeof filter2 === "function" && filter2(source[sourceKey])) ||
          (typeof filter2 !== "function" && !!filter2)
        ) {
          target[targetKey] = valueFn(source[sourceKey]);
        }
        return;
      }
      let [filter, value] = instructions[targetKey];
      if (typeof value === "function") {
        let _value;
        const defaultFilterPassed = filter === void 0 && (_value = value()) != null;
        const customFilterPassed =
          (typeof filter === "function" && !!filter(void 0)) || (typeof filter !== "function" && !!filter);
        if (defaultFilterPassed) {
          target[targetKey] = _value;
        } else if (customFilterPassed) {
          target[targetKey] = value();
        }
      } else {
        const defaultFilterPassed = filter === void 0 && value != null;
        const customFilterPassed =
          (typeof filter === "function" && !!filter(value)) || (typeof filter !== "function" && !!filter);
        if (defaultFilterPassed || customFilterPassed) {
          target[targetKey] = value;
        }
      }
    }, "applyInstruction");
    var nonNullish = /* @__PURE__ */ __name((_) => _ != null, "nonNullish");
    var pass = /* @__PURE__ */ __name((_) => _, "pass");
    var serializeFloat = /* @__PURE__ */ __name((value) => {
      if (value !== value) {
        return "NaN";
      }
      switch (value) {
        case Infinity:
          return "Infinity";
        case -Infinity:
          return "-Infinity";
        default:
          return value;
      }
    }, "serializeFloat");
    var serializeDateTime = /* @__PURE__ */ __name(
      (date) => date.toISOString().replace(".000Z", "Z"),
      "serializeDateTime",
    );
    var _json = /* @__PURE__ */ __name((obj) => {
      if (obj == null) {
        return {};
      }
      if (Array.isArray(obj)) {
        return obj.filter((_) => _ != null).map(_json);
      }
      if (typeof obj === "object") {
        const target = {};
        for (const key of Object.keys(obj)) {
          if (obj[key] == null) {
            continue;
          }
          target[key] = _json(obj[key]);
        }
        return target;
      }
      return obj;
    }, "_json");
    __reExport(src_exports, (init_serde(), __toCommonJS(serde_exports)), module2.exports);
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js
var import_smithy_client, collectBodyString;
var init_common = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js"() {
    import_smithy_client = __toESM(require_dist_cjs23());
    collectBodyString = (streamBody, context) =>
      (0, import_smithy_client.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body));
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js
var parseJsonBody, parseJsonErrorBody, loadRestJsonErrorCode;
var init_parseJsonBody = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js"() {
    init_common();
    parseJsonBody = (streamBody, context) =>
      collectBodyString(streamBody, context).then((encoded) => {
        if (encoded.length) {
          try {
            return JSON.parse(encoded);
          } catch (e) {
            if (e?.name === "SyntaxError") {
              Object.defineProperty(e, "$responseBodyText", {
                value: encoded,
              });
            }
            throw e;
          }
        }
        return {};
      });
    parseJsonErrorBody = async (errorBody, context) => {
      const value = await parseJsonBody(errorBody, context);
      value.message = value.message ?? value.Message;
      return value;
    };
    loadRestJsonErrorCode = (output, data) => {
      const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
      const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
          cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
          cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
          cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
          cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
      };
      const headerKey = findKey(output.headers, "x-amzn-errortype");
      if (headerKey !== void 0) {
        return sanitizeErrorCode(output.headers[headerKey]);
      }
      if (data && typeof data === "object") {
        const codeKey = findKey(data, "code");
        if (codeKey && data[codeKey] !== void 0) {
          return sanitizeErrorCode(data[codeKey]);
        }
        if (data["__type"] !== void 0) {
          return sanitizeErrorCode(data["__type"]);
        }
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonShapeDeserializer.js
var import_util_base643, JsonShapeDeserializer;
var init_JsonShapeDeserializer = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonShapeDeserializer.js"() {
    init_schema();
    init_serde();
    import_util_base643 = __toESM(require_dist_cjs8());
    init_ConfigurableSerdeContext();
    init_jsonReviver();
    init_parseJsonBody();
    JsonShapeDeserializer = class extends SerdeContextConfig {
      constructor(settings) {
        super();
        __publicField(this, "settings");
        this.settings = settings;
      }
      async read(schema, data) {
        return this._read(
          schema,
          typeof data === "string" ? JSON.parse(data, jsonReviver) : await parseJsonBody(data, this.serdeContext),
        );
      }
      readObject(schema, data) {
        return this._read(schema, data);
      }
      _read(schema, value) {
        const isObject = value !== null && typeof value === "object";
        const ns = NormalizedSchema.of(schema);
        if (ns.isListSchema() && Array.isArray(value)) {
          const listMember = ns.getValueSchema();
          const out = [];
          const sparse = !!ns.getMergedTraits().sparse;
          for (const item of value) {
            if (sparse || item != null) {
              out.push(this._read(listMember, item));
            }
          }
          return out;
        } else if (ns.isMapSchema() && isObject) {
          const mapMember = ns.getValueSchema();
          const out = {};
          const sparse = !!ns.getMergedTraits().sparse;
          for (const [_k, _v] of Object.entries(value)) {
            if (sparse || _v != null) {
              out[_k] = this._read(mapMember, _v);
            }
          }
          return out;
        } else if (ns.isStructSchema() && isObject) {
          const out = {};
          for (const [memberName, memberSchema] of ns.structIterator()) {
            const fromKey = this.settings.jsonName
              ? (memberSchema.getMergedTraits().jsonName ?? memberName)
              : memberName;
            const deserializedValue = this._read(memberSchema, value[fromKey]);
            if (deserializedValue != null) {
              out[memberName] = deserializedValue;
            }
          }
          return out;
        }
        if (ns.isBlobSchema() && typeof value === "string") {
          return (0, import_util_base643.fromBase64)(value);
        }
        const mediaType = ns.getMergedTraits().mediaType;
        if (ns.isStringSchema() && typeof value === "string" && mediaType) {
          const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
          if (isJson) {
            return LazyJsonString2.from(value);
          }
        }
        if (ns.isTimestampSchema()) {
          const options = this.settings.timestampFormat;
          const format = options.useTrait
            ? ns.getSchema() === SCHEMA.TIMESTAMP_DEFAULT
              ? options.default
              : (ns.getSchema() ?? options.default)
            : options.default;
          switch (format) {
            case SCHEMA.TIMESTAMP_DATE_TIME:
              return parseRfc3339DateTimeWithOffset2(value);
            case SCHEMA.TIMESTAMP_HTTP_DATE:
              return parseRfc7231DateTime2(value);
            case SCHEMA.TIMESTAMP_EPOCH_SECONDS:
              return parseEpochTimestamp2(value);
            default:
              console.warn("Missing timestamp format, parsing value with Date constructor:", value);
              return new Date(value);
          }
        }
        if (ns.isBigIntegerSchema() && (typeof value === "number" || typeof value === "string")) {
          return BigInt(value);
        }
        if (ns.isBigDecimalSchema() && value != void 0) {
          if (value instanceof NumericValue2) {
            return value;
          }
          return new NumericValue2(String(value), "bigDecimal");
        }
        if (ns.isNumericSchema() && typeof value === "string") {
          switch (value) {
            case "Infinity":
              return Infinity;
            case "-Infinity":
              return -Infinity;
            case "NaN":
              return NaN;
          }
        }
        return value;
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/jsonReplacer.js
var NUMERIC_CONTROL_CHAR, JsonReplacer;
var init_jsonReplacer = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/jsonReplacer.js"() {
    init_serde();
    NUMERIC_CONTROL_CHAR = String.fromCharCode(925);
    JsonReplacer = class {
      constructor() {
        __publicField(this, "values", /* @__PURE__ */ new Map());
        __publicField(this, "counter", 0);
        __publicField(this, "stage", 0);
      }
      createReplacer() {
        if (this.stage === 1) {
          throw new Error("@aws-sdk/core/protocols - JsonReplacer already created.");
        }
        if (this.stage === 2) {
          throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
        }
        this.stage = 1;
        return (key, value) => {
          if (value instanceof NumericValue2) {
            const v = `${NUMERIC_CONTROL_CHAR + +"nv" + this.counter++}_` + value.string;
            this.values.set(`"${v}"`, value.string);
            return v;
          }
          if (typeof value === "bigint") {
            const s = value.toString();
            const v = `${NUMERIC_CONTROL_CHAR + "b" + this.counter++}_` + s;
            this.values.set(`"${v}"`, s);
            return v;
          }
          return value;
        };
      }
      replaceInJson(json) {
        if (this.stage === 0) {
          throw new Error("@aws-sdk/core/protocols - JsonReplacer not created yet.");
        }
        if (this.stage === 2) {
          throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
        }
        this.stage = 2;
        if (this.counter === 0) {
          return json;
        }
        for (const [key, value] of this.values) {
          json = json.replace(key, value);
        }
        return json;
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonShapeSerializer.js
var JsonShapeSerializer;
var init_JsonShapeSerializer = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonShapeSerializer.js"() {
    init_schema();
    init_serde();
    init_serde();
    init_ConfigurableSerdeContext();
    init_jsonReplacer();
    JsonShapeSerializer = class extends SerdeContextConfig {
      constructor(settings) {
        super();
        __publicField(this, "settings");
        __publicField(this, "buffer");
        __publicField(this, "rootSchema");
        this.settings = settings;
      }
      write(schema, value) {
        this.rootSchema = NormalizedSchema.of(schema);
        this.buffer = this._write(this.rootSchema, value);
      }
      flush() {
        if (this.rootSchema?.isStructSchema() || this.rootSchema?.isDocumentSchema()) {
          const replacer = new JsonReplacer();
          return replacer.replaceInJson(JSON.stringify(this.buffer, replacer.createReplacer(), 0));
        }
        return this.buffer;
      }
      _write(schema, value, container) {
        const isObject = value !== null && typeof value === "object";
        const ns = NormalizedSchema.of(schema);
        if (ns.isListSchema() && Array.isArray(value)) {
          const listMember = ns.getValueSchema();
          const out = [];
          const sparse = !!ns.getMergedTraits().sparse;
          for (const item of value) {
            if (sparse || item != null) {
              out.push(this._write(listMember, item));
            }
          }
          return out;
        } else if (ns.isMapSchema() && isObject) {
          const mapMember = ns.getValueSchema();
          const out = {};
          const sparse = !!ns.getMergedTraits().sparse;
          for (const [_k, _v] of Object.entries(value)) {
            if (sparse || _v != null) {
              out[_k] = this._write(mapMember, _v);
            }
          }
          return out;
        } else if (ns.isStructSchema() && isObject) {
          const out = {};
          for (const [memberName, memberSchema] of ns.structIterator()) {
            const targetKey = this.settings.jsonName
              ? (memberSchema.getMergedTraits().jsonName ?? memberName)
              : memberName;
            const serializableValue = this._write(memberSchema, value[memberName], ns);
            if (serializableValue !== void 0) {
              out[targetKey] = serializableValue;
            }
          }
          return out;
        }
        if (value === null && container?.isStructSchema()) {
          return void 0;
        }
        if (ns.isBlobSchema() && (value instanceof Uint8Array || typeof value === "string")) {
          if (ns === this.rootSchema) {
            return value;
          }
          if (!this.serdeContext?.base64Encoder) {
            throw new Error("Missing base64Encoder in serdeContext");
          }
          return this.serdeContext?.base64Encoder(value);
        }
        if (ns.isTimestampSchema() && value instanceof Date) {
          const options = this.settings.timestampFormat;
          const format = options.useTrait
            ? ns.getSchema() === SCHEMA.TIMESTAMP_DEFAULT
              ? options.default
              : (ns.getSchema() ?? options.default)
            : options.default;
          switch (format) {
            case SCHEMA.TIMESTAMP_DATE_TIME:
              return value.toISOString().replace(".000Z", "Z");
            case SCHEMA.TIMESTAMP_HTTP_DATE:
              return dateToUtcString2(value);
            case SCHEMA.TIMESTAMP_EPOCH_SECONDS:
              return value.getTime() / 1e3;
            default:
              console.warn("Missing timestamp format, using epoch seconds", value);
              return value.getTime() / 1e3;
          }
        }
        if (ns.isNumericSchema() && typeof value === "number") {
          if (Math.abs(value) === Infinity || isNaN(value)) {
            return String(value);
          }
        }
        const mediaType = ns.getMergedTraits().mediaType;
        if (ns.isStringSchema() && typeof value === "string" && mediaType) {
          const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
          if (isJson) {
            return LazyJsonString2.from(value);
          }
        }
        return value;
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonCodec.js
var JsonCodec;
var init_JsonCodec = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonCodec.js"() {
    init_ConfigurableSerdeContext();
    init_JsonShapeDeserializer();
    init_JsonShapeSerializer();
    JsonCodec = class extends SerdeContextConfig {
      constructor(settings) {
        super();
        __publicField(this, "settings");
        this.settings = settings;
      }
      createSerializer() {
        const serializer = new JsonShapeSerializer(this.settings);
        serializer.setSerdeContext(this.serdeContext);
        return serializer;
      }
      createDeserializer() {
        const deserializer = new JsonShapeDeserializer(this.settings);
        deserializer.setSerdeContext(this.serdeContext);
        return deserializer;
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJsonRpcProtocol.js
var import_util_body_length_browser, AwsJsonRpcProtocol;
var init_AwsJsonRpcProtocol = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJsonRpcProtocol.js"() {
    init_protocols();
    init_schema();
    import_util_body_length_browser = __toESM(require_dist_cjs21());
    init_JsonCodec();
    init_parseJsonBody();
    AwsJsonRpcProtocol = class extends RpcProtocol {
      constructor({ defaultNamespace }) {
        super({
          defaultNamespace,
        });
        __publicField(this, "serializer");
        __publicField(this, "deserializer");
        __publicField(this, "codec");
        this.codec = new JsonCodec({
          timestampFormat: {
            useTrait: true,
            default: SCHEMA.TIMESTAMP_EPOCH_SECONDS,
          },
          jsonName: false,
        });
        this.serializer = this.codec.createSerializer();
        this.deserializer = this.codec.createDeserializer();
      }
      async serializeRequest(operationSchema, input, context) {
        const request = await super.serializeRequest(operationSchema, input, context);
        if (!request.path.endsWith("/")) {
          request.path += "/";
        }
        Object.assign(request.headers, {
          "content-type": `application/x-amz-json-${this.getJsonRpcVersion()}`,
          "x-amz-target":
            (this.getJsonRpcVersion() === "1.0" ? `JsonRpc10.` : `JsonProtocol.`) +
            NormalizedSchema.of(operationSchema).getName(),
        });
        if (deref(operationSchema.input) === "unit" || !request.body) {
          request.body = "{}";
        }
        try {
          request.headers["content-length"] = String(
            (0, import_util_body_length_browser.calculateBodyLength)(request.body),
          );
        } catch (e) {}
        return request;
      }
      getPayloadCodec() {
        return this.codec;
      }
      async handleError(operationSchema, context, response, dataObject, metadata) {
        const errorIdentifier = loadRestJsonErrorCode(response, dataObject) ?? "Unknown";
        let namespace = this.options.defaultNamespace;
        let errorName = errorIdentifier;
        if (errorIdentifier.includes("#")) {
          [namespace, errorName] = errorIdentifier.split("#");
        }
        const registry = TypeRegistry.for(namespace);
        let errorSchema;
        try {
          errorSchema = registry.getSchema(errorIdentifier);
        } catch (e) {
          const baseExceptionSchema = TypeRegistry.for("smithy.ts.sdk.synthetic." + namespace).getBaseException();
          if (baseExceptionSchema) {
            const ErrorCtor = baseExceptionSchema.ctor;
            throw Object.assign(new ErrorCtor(errorName), dataObject);
          }
          throw new Error(errorName);
        }
        const ns = NormalizedSchema.of(errorSchema);
        const message = dataObject.message ?? dataObject.Message ?? "Unknown";
        const exception = new errorSchema.ctor(message);
        await this.deserializeHttpMessage(errorSchema, context, response, dataObject);
        const output = {};
        for (const [name, member] of ns.structIterator()) {
          const target = member.getMergedTraits().jsonName ?? name;
          output[name] = this.codec.createDeserializer().readObject(member, dataObject[target]);
        }
        Object.assign(exception, {
          $metadata: metadata,
          $response: response,
          $fault: ns.getMergedTraits().error,
          message,
          ...output,
        });
        throw exception;
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJson1_0Protocol.js
var AwsJson1_0Protocol;
var init_AwsJson1_0Protocol = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJson1_0Protocol.js"() {
    init_AwsJsonRpcProtocol();
    AwsJson1_0Protocol = class extends AwsJsonRpcProtocol {
      constructor({ defaultNamespace }) {
        super({
          defaultNamespace,
        });
      }
      getShapeId() {
        return "aws.protocols#awsJson1_0";
      }
      getJsonRpcVersion() {
        return "1.0";
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJson1_1Protocol.js
var AwsJson1_1Protocol;
var init_AwsJson1_1Protocol = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJson1_1Protocol.js"() {
    init_AwsJsonRpcProtocol();
    AwsJson1_1Protocol = class extends AwsJsonRpcProtocol {
      constructor({ defaultNamespace }) {
        super({
          defaultNamespace,
        });
      }
      getShapeId() {
        return "aws.protocols#awsJson1_1";
      }
      getJsonRpcVersion() {
        return "1.1";
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsRestJsonProtocol.js
var import_util_body_length_browser2, AwsRestJsonProtocol;
var init_AwsRestJsonProtocol = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsRestJsonProtocol.js"() {
    init_protocols();
    init_schema();
    import_util_body_length_browser2 = __toESM(require_dist_cjs21());
    init_JsonCodec();
    init_parseJsonBody();
    AwsRestJsonProtocol = class extends HttpBindingProtocol {
      constructor({ defaultNamespace }) {
        super({
          defaultNamespace,
        });
        __publicField(this, "serializer");
        __publicField(this, "deserializer");
        __publicField(this, "codec");
        const settings = {
          timestampFormat: {
            useTrait: true,
            default: SCHEMA.TIMESTAMP_EPOCH_SECONDS,
          },
          httpBindings: true,
          jsonName: true,
        };
        this.codec = new JsonCodec(settings);
        this.serializer = new HttpInterceptingShapeSerializer(this.codec.createSerializer(), settings);
        this.deserializer = new HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), settings);
      }
      getShapeId() {
        return "aws.protocols#restJson1";
      }
      getPayloadCodec() {
        return this.codec;
      }
      setSerdeContext(serdeContext) {
        this.codec.setSerdeContext(serdeContext);
        super.setSerdeContext(serdeContext);
      }
      async serializeRequest(operationSchema, input, context) {
        const request = await super.serializeRequest(operationSchema, input, context);
        const inputSchema = NormalizedSchema.of(operationSchema.input);
        const members = inputSchema.getMemberSchemas();
        if (!request.headers["content-type"]) {
          const httpPayloadMember = Object.values(members).find((m) => {
            return !!m.getMergedTraits().httpPayload;
          });
          if (httpPayloadMember) {
            const mediaType = httpPayloadMember.getMergedTraits().mediaType;
            if (mediaType) {
              request.headers["content-type"] = mediaType;
            } else if (httpPayloadMember.isStringSchema()) {
              request.headers["content-type"] = "text/plain";
            } else if (httpPayloadMember.isBlobSchema()) {
              request.headers["content-type"] = "application/octet-stream";
            } else {
              request.headers["content-type"] = "application/json";
            }
          } else if (!inputSchema.isUnitSchema()) {
            const hasBody = Object.values(members).find((m) => {
              const { httpQuery, httpQueryParams, httpHeader, httpLabel, httpPrefixHeaders } = m.getMergedTraits();
              return !httpQuery && !httpQueryParams && !httpHeader && !httpLabel && httpPrefixHeaders === void 0;
            });
            if (hasBody) {
              request.headers["content-type"] = "application/json";
            }
          }
        }
        if (request.headers["content-type"] && !request.body) {
          request.body = "{}";
        }
        if (request.body) {
          try {
            request.headers["content-length"] = String(
              (0, import_util_body_length_browser2.calculateBodyLength)(request.body),
            );
          } catch (e) {}
        }
        return request;
      }
      async handleError(operationSchema, context, response, dataObject, metadata) {
        const errorIdentifier = loadRestJsonErrorCode(response, dataObject) ?? "Unknown";
        let namespace = this.options.defaultNamespace;
        let errorName = errorIdentifier;
        if (errorIdentifier.includes("#")) {
          [namespace, errorName] = errorIdentifier.split("#");
        }
        const registry = TypeRegistry.for(namespace);
        let errorSchema;
        try {
          errorSchema = registry.getSchema(errorIdentifier);
        } catch (e) {
          const baseExceptionSchema = TypeRegistry.for("smithy.ts.sdk.synthetic." + namespace).getBaseException();
          if (baseExceptionSchema) {
            const ErrorCtor = baseExceptionSchema.ctor;
            throw Object.assign(new ErrorCtor(errorName), dataObject);
          }
          throw new Error(errorName);
        }
        const ns = NormalizedSchema.of(errorSchema);
        const message = dataObject.message ?? dataObject.Message ?? "Unknown";
        const exception = new errorSchema.ctor(message);
        await this.deserializeHttpMessage(errorSchema, context, response, dataObject);
        const output = {};
        for (const [name, member] of ns.structIterator()) {
          const target = member.getMergedTraits().jsonName ?? name;
          output[name] = this.codec.createDeserializer().readObject(member, dataObject[target]);
        }
        Object.assign(exception, {
          $metadata: metadata,
          $response: response,
          $fault: ns.getMergedTraits().error,
          message,
          ...output,
        });
        throw exception;
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/awsExpectUnion.js
var import_smithy_client2, awsExpectUnion;
var init_awsExpectUnion = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/awsExpectUnion.js"() {
    import_smithy_client2 = __toESM(require_dist_cjs23());
    awsExpectUnion = (value) => {
      if (value == null) {
        return void 0;
      }
      if (typeof value === "object" && "__type" in value) {
        delete value.__type;
      }
      return (0, import_smithy_client2.expectUnion)(value);
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/fast-xml-parser/src/util.js
function getAllMatches(string, regex) {
  const matches = [];
  let match = regex.exec(string);
  while (match) {
    const allmatches = [];
    allmatches.startIndex = regex.lastIndex - match[0].length;
    const len = match.length;
    for (let index = 0; index < len; index++) {
      allmatches.push(match[index]);
    }
    matches.push(allmatches);
    match = regex.exec(string);
  }
  return matches;
}
function isExist(v) {
  return typeof v !== "undefined";
}
var nameStartChar, nameChar, nameRegexp, regexName, isName;
var init_util = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/fast-xml-parser/src/util.js"() {
    "use strict";
    nameStartChar =
      ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
    nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
    nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
    regexName = new RegExp("^" + nameRegexp + "$");
    isName = function (string) {
      const match = regexName.exec(string);
      return !(match === null || typeof match === "undefined");
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/fast-xml-parser/src/validator.js
function validate(xmlData, options) {
  options = Object.assign({}, defaultOptions, options);
  const tags = [];
  let tagFound = false;
  let reachedRoot = false;
  if (xmlData[0] === "\uFEFF") {
    xmlData = xmlData.substr(1);
  }
  for (let i = 0; i < xmlData.length; i++) {
    if (xmlData[i] === "<" && xmlData[i + 1] === "?") {
      i += 2;
      i = readPI(xmlData, i);
      if (i.err) return i;
    } else if (xmlData[i] === "<") {
      let tagStartPos = i;
      i++;
      if (xmlData[i] === "!") {
        i = readCommentAndCDATA(xmlData, i);
        continue;
      } else {
        let closingTag = false;
        if (xmlData[i] === "/") {
          closingTag = true;
          i++;
        }
        let tagName = "";
        for (
          ;
          i < xmlData.length &&
          xmlData[i] !== ">" &&
          xmlData[i] !== " " &&
          xmlData[i] !== "	" &&
          xmlData[i] !== "\n" &&
          xmlData[i] !== "\r";
          i++
        ) {
          tagName += xmlData[i];
        }
        tagName = tagName.trim();
        if (tagName[tagName.length - 1] === "/") {
          tagName = tagName.substring(0, tagName.length - 1);
          i--;
        }
        if (!validateTagName(tagName)) {
          let msg;
          if (tagName.trim().length === 0) {
            msg = "Invalid space after '<'.";
          } else {
            msg = "Tag '" + tagName + "' is an invalid name.";
          }
          return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i));
        }
        const result = readAttributeStr(xmlData, i);
        if (result === false) {
          return getErrorObject(
            "InvalidAttr",
            "Attributes for '" + tagName + "' have open quote.",
            getLineNumberForPosition(xmlData, i),
          );
        }
        let attrStr = result.value;
        i = result.index;
        if (attrStr[attrStr.length - 1] === "/") {
          const attrStrStart = i - attrStr.length;
          attrStr = attrStr.substring(0, attrStr.length - 1);
          const isValid = validateAttributeString(attrStr, options);
          if (isValid === true) {
            tagFound = true;
          } else {
            return getErrorObject(
              isValid.err.code,
              isValid.err.msg,
              getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line),
            );
          }
        } else if (closingTag) {
          if (!result.tagClosed) {
            return getErrorObject(
              "InvalidTag",
              "Closing tag '" + tagName + "' doesn't have proper closing.",
              getLineNumberForPosition(xmlData, i),
            );
          } else if (attrStr.trim().length > 0) {
            return getErrorObject(
              "InvalidTag",
              "Closing tag '" + tagName + "' can't have attributes or invalid starting.",
              getLineNumberForPosition(xmlData, tagStartPos),
            );
          } else if (tags.length === 0) {
            return getErrorObject(
              "InvalidTag",
              "Closing tag '" + tagName + "' has not been opened.",
              getLineNumberForPosition(xmlData, tagStartPos),
            );
          } else {
            const otg = tags.pop();
            if (tagName !== otg.tagName) {
              let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
              return getErrorObject(
                "InvalidTag",
                "Expected closing tag '" +
                  otg.tagName +
                  "' (opened in line " +
                  openPos.line +
                  ", col " +
                  openPos.col +
                  ") instead of closing tag '" +
                  tagName +
                  "'.",
                getLineNumberForPosition(xmlData, tagStartPos),
              );
            }
            if (tags.length == 0) {
              reachedRoot = true;
            }
          }
        } else {
          const isValid = validateAttributeString(attrStr, options);
          if (isValid !== true) {
            return getErrorObject(
              isValid.err.code,
              isValid.err.msg,
              getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line),
            );
          }
          if (reachedRoot === true) {
            return getErrorObject(
              "InvalidXml",
              "Multiple possible root nodes found.",
              getLineNumberForPosition(xmlData, i),
            );
          } else if (options.unpairedTags.indexOf(tagName) !== -1) {
          } else {
            tags.push({ tagName, tagStartPos });
          }
          tagFound = true;
        }
        for (i++; i < xmlData.length; i++) {
          if (xmlData[i] === "<") {
            if (xmlData[i + 1] === "!") {
              i++;
              i = readCommentAndCDATA(xmlData, i);
              continue;
            } else if (xmlData[i + 1] === "?") {
              i = readPI(xmlData, ++i);
              if (i.err) return i;
            } else {
              break;
            }
          } else if (xmlData[i] === "&") {
            const afterAmp = validateAmpersand(xmlData, i);
            if (afterAmp == -1)
              return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
            i = afterAmp;
          } else {
            if (reachedRoot === true && !isWhiteSpace(xmlData[i])) {
              return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i));
            }
          }
        }
        if (xmlData[i] === "<") {
          i--;
        }
      }
    } else {
      if (isWhiteSpace(xmlData[i])) {
        continue;
      }
      return getErrorObject(
        "InvalidChar",
        "char '" + xmlData[i] + "' is not expected.",
        getLineNumberForPosition(xmlData, i),
      );
    }
  }
  if (!tagFound) {
    return getErrorObject("InvalidXml", "Start tag expected.", 1);
  } else if (tags.length == 1) {
    return getErrorObject(
      "InvalidTag",
      "Unclosed tag '" + tags[0].tagName + "'.",
      getLineNumberForPosition(xmlData, tags[0].tagStartPos),
    );
  } else if (tags.length > 0) {
    return getErrorObject(
      "InvalidXml",
      "Invalid '" +
        JSON.stringify(
          tags.map((t) => t.tagName),
          null,
          4,
        ).replace(/\r?\n/g, "") +
        "' found.",
      { line: 1, col: 1 },
    );
  }
  return true;
}
function isWhiteSpace(char) {
  return char === " " || char === "	" || char === "\n" || char === "\r";
}
function readPI(xmlData, i) {
  const start = i;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] == "?" || xmlData[i] == " ") {
      const tagname = xmlData.substr(start, i - start);
      if (i > 5 && tagname === "xml") {
        return getErrorObject(
          "InvalidXml",
          "XML declaration allowed only at the start of the document.",
          getLineNumberForPosition(xmlData, i),
        );
      } else if (xmlData[i] == "?" && xmlData[i + 1] == ">") {
        i++;
        break;
      } else {
        continue;
      }
    }
  }
  return i;
}
function readCommentAndCDATA(xmlData, i) {
  if (xmlData.length > i + 5 && xmlData[i + 1] === "-" && xmlData[i + 2] === "-") {
    for (i += 3; i < xmlData.length; i++) {
      if (xmlData[i] === "-" && xmlData[i + 1] === "-" && xmlData[i + 2] === ">") {
        i += 2;
        break;
      }
    }
  } else if (
    xmlData.length > i + 8 &&
    xmlData[i + 1] === "D" &&
    xmlData[i + 2] === "O" &&
    xmlData[i + 3] === "C" &&
    xmlData[i + 4] === "T" &&
    xmlData[i + 5] === "Y" &&
    xmlData[i + 6] === "P" &&
    xmlData[i + 7] === "E"
  ) {
    let angleBracketsCount = 1;
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === "<") {
        angleBracketsCount++;
      } else if (xmlData[i] === ">") {
        angleBracketsCount--;
        if (angleBracketsCount === 0) {
          break;
        }
      }
    }
  } else if (
    xmlData.length > i + 9 &&
    xmlData[i + 1] === "[" &&
    xmlData[i + 2] === "C" &&
    xmlData[i + 3] === "D" &&
    xmlData[i + 4] === "A" &&
    xmlData[i + 5] === "T" &&
    xmlData[i + 6] === "A" &&
    xmlData[i + 7] === "["
  ) {
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === "]" && xmlData[i + 1] === "]" && xmlData[i + 2] === ">") {
        i += 2;
        break;
      }
    }
  }
  return i;
}
function readAttributeStr(xmlData, i) {
  let attrStr = "";
  let startChar = "";
  let tagClosed = false;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
      if (startChar === "") {
        startChar = xmlData[i];
      } else if (startChar !== xmlData[i]) {
      } else {
        startChar = "";
      }
    } else if (xmlData[i] === ">") {
      if (startChar === "") {
        tagClosed = true;
        break;
      }
    }
    attrStr += xmlData[i];
  }
  if (startChar !== "") {
    return false;
  }
  return {
    value: attrStr,
    index: i,
    tagClosed,
  };
}
function validateAttributeString(attrStr, options) {
  const matches = getAllMatches(attrStr, validAttrStrRegxp);
  const attrNames = {};
  for (let i = 0; i < matches.length; i++) {
    if (matches[i][1].length === 0) {
      return getErrorObject(
        "InvalidAttr",
        "Attribute '" + matches[i][2] + "' has no space in starting.",
        getPositionFromMatch(matches[i]),
      );
    } else if (matches[i][3] !== void 0 && matches[i][4] === void 0) {
      return getErrorObject(
        "InvalidAttr",
        "Attribute '" + matches[i][2] + "' is without value.",
        getPositionFromMatch(matches[i]),
      );
    } else if (matches[i][3] === void 0 && !options.allowBooleanAttributes) {
      return getErrorObject(
        "InvalidAttr",
        "boolean attribute '" + matches[i][2] + "' is not allowed.",
        getPositionFromMatch(matches[i]),
      );
    }
    const attrName = matches[i][2];
    if (!validateAttrName(attrName)) {
      return getErrorObject(
        "InvalidAttr",
        "Attribute '" + attrName + "' is an invalid name.",
        getPositionFromMatch(matches[i]),
      );
    }
    if (!attrNames.hasOwnProperty(attrName)) {
      attrNames[attrName] = 1;
    } else {
      return getErrorObject(
        "InvalidAttr",
        "Attribute '" + attrName + "' is repeated.",
        getPositionFromMatch(matches[i]),
      );
    }
  }
  return true;
}
function validateNumberAmpersand(xmlData, i) {
  let re = /\d/;
  if (xmlData[i] === "x") {
    i++;
    re = /[\da-fA-F]/;
  }
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === ";") return i;
    if (!xmlData[i].match(re)) break;
  }
  return -1;
}
function validateAmpersand(xmlData, i) {
  i++;
  if (xmlData[i] === ";") return -1;
  if (xmlData[i] === "#") {
    i++;
    return validateNumberAmpersand(xmlData, i);
  }
  let count = 0;
  for (; i < xmlData.length; i++, count++) {
    if (xmlData[i].match(/\w/) && count < 20) continue;
    if (xmlData[i] === ";") break;
    return -1;
  }
  return i;
}
function getErrorObject(code, message, lineNumber) {
  return {
    err: {
      code,
      msg: message,
      line: lineNumber.line || lineNumber,
      col: lineNumber.col,
    },
  };
}
function validateAttrName(attrName) {
  return isName(attrName);
}
function validateTagName(tagname) {
  return isName(tagname);
}
function getLineNumberForPosition(xmlData, index) {
  const lines = xmlData.substring(0, index).split(/\r?\n/);
  return {
    line: lines.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: lines[lines.length - 1].length + 1,
  };
}
function getPositionFromMatch(match) {
  return match.startIndex + match[1].length;
}
var defaultOptions, doubleQuote, singleQuote, validAttrStrRegxp;
var init_validator = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/fast-xml-parser/src/validator.js"() {
    "use strict";
    init_util();
    defaultOptions = {
      allowBooleanAttributes: false,
      //A tag can have attributes without any value
      unpairedTags: [],
    };
    doubleQuote = '"';
    singleQuote = "'";
    validAttrStrRegxp = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js
var defaultOptions2, buildOptions;
var init_OptionsBuilder = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js"() {
    defaultOptions2 = {
      preserveOrder: false,
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      removeNSPrefix: false,
      // remove NS from tag name or attribute name if true
      allowBooleanAttributes: false,
      //a tag can have attributes without any value
      //ignoreRootElement : false,
      parseTagValue: true,
      parseAttributeValue: false,
      trimValues: true,
      //Trim string values of tag and attributes
      cdataPropName: false,
      numberParseOptions: {
        hex: true,
        leadingZeros: true,
        eNotation: true,
      },
      tagValueProcessor: function (tagName, val) {
        return val;
      },
      attributeValueProcessor: function (attrName, val) {
        return val;
      },
      stopNodes: [],
      //nested tags will not be parsed even for errors
      alwaysCreateTextNode: false,
      isArray: () => false,
      commentPropName: false,
      unpairedTags: [],
      processEntities: true,
      htmlEntities: false,
      ignoreDeclaration: false,
      ignorePiTags: false,
      transformTagName: false,
      transformAttributeName: false,
      updateTag: function (tagName, jPath, attrs) {
        return tagName;
      },
      // skipEmptyListItem: false
      captureMetaData: false,
    };
    buildOptions = function (options) {
      return Object.assign({}, defaultOptions2, options);
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/fast-xml-parser/src/xmlparser/xmlNode.js
var METADATA_SYMBOL, XmlNode;
var init_xmlNode = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/fast-xml-parser/src/xmlparser/xmlNode.js"() {
    "use strict";
    if (typeof Symbol !== "function") {
      METADATA_SYMBOL = "@@xmlMetadata";
    } else {
      METADATA_SYMBOL = Symbol("XML Node Metadata");
    }
    XmlNode = class {
      constructor(tagname) {
        this.tagname = tagname;
        this.child = [];
        this[":@"] = {};
      }
      add(key, val) {
        if (key === "__proto__") key = "#__proto__";
        this.child.push({ [key]: val });
      }
      addChild(node, startIndex) {
        if (node.tagname === "__proto__") node.tagname = "#__proto__";
        if (node[":@"] && Object.keys(node[":@"]).length > 0) {
          this.child.push({ [node.tagname]: node.child, [":@"]: node[":@"] });
        } else {
          this.child.push({ [node.tagname]: node.child });
        }
        if (startIndex !== void 0) {
          this.child[this.child.length - 1][METADATA_SYMBOL] = { startIndex };
        }
      }
      /** symbol used for metadata */
      static getMetaDataSymbol() {
        return METADATA_SYMBOL;
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js
function readDocType(xmlData, i) {
  const entities = {};
  if (
    xmlData[i + 3] === "O" &&
    xmlData[i + 4] === "C" &&
    xmlData[i + 5] === "T" &&
    xmlData[i + 6] === "Y" &&
    xmlData[i + 7] === "P" &&
    xmlData[i + 8] === "E"
  ) {
    i = i + 9;
    let angleBracketsCount = 1;
    let hasBody = false,
      comment = false;
    let exp = "";
    for (; i < xmlData.length; i++) {
      if (xmlData[i] === "<" && !comment) {
        if (hasBody && hasSeq(xmlData, "!ENTITY", i)) {
          i += 7;
          let entityName, val;
          [entityName, val, i] = readEntityExp(xmlData, i + 1);
          if (val.indexOf("&") === -1)
            entities[entityName] = {
              regx: RegExp(`&${entityName};`, "g"),
              val,
            };
        } else if (hasBody && hasSeq(xmlData, "!ELEMENT", i)) {
          i += 8;
          const { index } = readElementExp(xmlData, i + 1);
          i = index;
        } else if (hasBody && hasSeq(xmlData, "!ATTLIST", i)) {
          i += 8;
        } else if (hasBody && hasSeq(xmlData, "!NOTATION", i)) {
          i += 9;
          const { index } = readNotationExp(xmlData, i + 1);
          i = index;
        } else if (hasSeq(xmlData, "!--", i)) comment = true;
        else throw new Error(`Invalid DOCTYPE`);
        angleBracketsCount++;
        exp = "";
      } else if (xmlData[i] === ">") {
        if (comment) {
          if (xmlData[i - 1] === "-" && xmlData[i - 2] === "-") {
            comment = false;
            angleBracketsCount--;
          }
        } else {
          angleBracketsCount--;
        }
        if (angleBracketsCount === 0) {
          break;
        }
      } else if (xmlData[i] === "[") {
        hasBody = true;
      } else {
        exp += xmlData[i];
      }
    }
    if (angleBracketsCount !== 0) {
      throw new Error(`Unclosed DOCTYPE`);
    }
  } else {
    throw new Error(`Invalid Tag instead of DOCTYPE`);
  }
  return { entities, i };
}
function readEntityExp(xmlData, i) {
  i = skipWhitespace(xmlData, i);
  let entityName = "";
  while (i < xmlData.length && !/\s/.test(xmlData[i]) && xmlData[i] !== '"' && xmlData[i] !== "'") {
    entityName += xmlData[i];
    i++;
  }
  validateEntityName(entityName);
  i = skipWhitespace(xmlData, i);
  if (xmlData.substring(i, i + 6).toUpperCase() === "SYSTEM") {
    throw new Error("External entities are not supported");
  } else if (xmlData[i] === "%") {
    throw new Error("Parameter entities are not supported");
  }
  let entityValue = "";
  [i, entityValue] = readIdentifierVal(xmlData, i, "entity");
  i--;
  return [entityName, entityValue, i];
}
function readNotationExp(xmlData, i) {
  i = skipWhitespace(xmlData, i);
  let notationName = "";
  while (i < xmlData.length && !/\s/.test(xmlData[i])) {
    notationName += xmlData[i];
    i++;
  }
  validateEntityName(notationName);
  i = skipWhitespace(xmlData, i);
  const identifierType = xmlData.substring(i, i + 6).toUpperCase();
  if (identifierType !== "SYSTEM" && identifierType !== "PUBLIC") {
    throw new Error(`Expected SYSTEM or PUBLIC, found "${identifierType}"`);
  }
  i += identifierType.length;
  i = skipWhitespace(xmlData, i);
  let publicIdentifier = null;
  let systemIdentifier = null;
  if (identifierType === "PUBLIC") {
    [i, publicIdentifier] = readIdentifierVal(xmlData, i, "publicIdentifier");
    i = skipWhitespace(xmlData, i);
    if (xmlData[i] === '"' || xmlData[i] === "'") {
      [i, systemIdentifier] = readIdentifierVal(xmlData, i, "systemIdentifier");
    }
  } else if (identifierType === "SYSTEM") {
    [i, systemIdentifier] = readIdentifierVal(xmlData, i, "systemIdentifier");
    if (!systemIdentifier) {
      throw new Error("Missing mandatory system identifier for SYSTEM notation");
    }
  }
  return { notationName, publicIdentifier, systemIdentifier, index: --i };
}
function readIdentifierVal(xmlData, i, type) {
  let identifierVal = "";
  const startChar = xmlData[i];
  if (startChar !== '"' && startChar !== "'") {
    throw new Error(`Expected quoted string, found "${startChar}"`);
  }
  i++;
  while (i < xmlData.length && xmlData[i] !== startChar) {
    identifierVal += xmlData[i];
    i++;
  }
  if (xmlData[i] !== startChar) {
    throw new Error(`Unterminated ${type} value`);
  }
  i++;
  return [i, identifierVal];
}
function readElementExp(xmlData, i) {
  i = skipWhitespace(xmlData, i);
  let elementName = "";
  while (i < xmlData.length && !/\s/.test(xmlData[i])) {
    elementName += xmlData[i];
    i++;
  }
  if (!validateEntityName(elementName)) {
    throw new Error(`Invalid element name: "${elementName}"`);
  }
  i = skipWhitespace(xmlData, i);
  let contentModel = "";
  if (xmlData[i] === "E" && hasSeq(xmlData, "MPTY", i)) i += 4;
  else if (xmlData[i] === "A" && hasSeq(xmlData, "NY", i)) i += 2;
  else if (xmlData[i] === "(") {
    i++;
    while (i < xmlData.length && xmlData[i] !== ")") {
      contentModel += xmlData[i];
      i++;
    }
    if (xmlData[i] !== ")") {
      throw new Error("Unterminated content model");
    }
  } else {
    throw new Error(`Invalid Element Expression, found "${xmlData[i]}"`);
  }
  return {
    elementName,
    contentModel: contentModel.trim(),
    index: i,
  };
}
function hasSeq(data, seq, i) {
  for (let j = 0; j < seq.length; j++) {
    if (seq[j] !== data[i + j + 1]) return false;
  }
  return true;
}
function validateEntityName(name) {
  if (isName(name)) return name;
  else throw new Error(`Invalid entity name ${name}`);
}
var skipWhitespace;
var init_DocTypeReader = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js"() {
    init_util();
    skipWhitespace = (data, index) => {
      while (index < data.length && /\s/.test(data[index])) {
        index++;
      }
      return index;
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/strnum/strnum.js
function toNumber(str, options = {}) {
  options = Object.assign({}, consider, options);
  if (!str || typeof str !== "string") return str;
  let trimmedStr = str.trim();
  if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr)) return str;
  else if (str === "0") return 0;
  else if (options.hex && hexRegex.test(trimmedStr)) {
    return parse_int(trimmedStr, 16);
  } else if (trimmedStr.search(/.+[eE].+/) !== -1) {
    return resolveEnotation(str, trimmedStr, options);
  } else {
    const match = numRegex.exec(trimmedStr);
    if (match) {
      const sign = match[1] || "";
      const leadingZeros = match[2];
      let numTrimmedByZeros = trimZeros(match[3]);
      const decimalAdjacentToLeadingZeros = sign
        ? // 0., -00., 000.
          str[leadingZeros.length + 1] === "."
        : str[leadingZeros.length] === ".";
      if (
        !options.leadingZeros &&
        (leadingZeros.length > 1 || (leadingZeros.length === 1 && !decimalAdjacentToLeadingZeros))
      ) {
        return str;
      } else {
        const num = Number(trimmedStr);
        const parsedStr = String(num);
        if (num === 0) return num;
        if (parsedStr.search(/[eE]/) !== -1) {
          if (options.eNotation) return num;
          else return str;
        } else if (trimmedStr.indexOf(".") !== -1) {
          if (parsedStr === "0") return num;
          else if (parsedStr === numTrimmedByZeros) return num;
          else if (parsedStr === `${sign}${numTrimmedByZeros}`) return num;
          else return str;
        }
        let n = leadingZeros ? numTrimmedByZeros : trimmedStr;
        if (leadingZeros) {
          return n === parsedStr || sign + n === parsedStr ? num : str;
        } else {
          return n === parsedStr || n === sign + parsedStr ? num : str;
        }
      }
    } else {
      return str;
    }
  }
}
function resolveEnotation(str, trimmedStr, options) {
  if (!options.eNotation) return str;
  const notation = trimmedStr.match(eNotationRegx);
  if (notation) {
    let sign = notation[1] || "";
    const eChar = notation[3].indexOf("e") === -1 ? "E" : "e";
    const leadingZeros = notation[2];
    const eAdjacentToLeadingZeros = sign
      ? // 0E.
        str[leadingZeros.length + 1] === eChar
      : str[leadingZeros.length] === eChar;
    if (leadingZeros.length > 1 && eAdjacentToLeadingZeros) return str;
    else if (leadingZeros.length === 1 && (notation[3].startsWith(`.${eChar}`) || notation[3][0] === eChar)) {
      return Number(trimmedStr);
    } else if (options.leadingZeros && !eAdjacentToLeadingZeros) {
      trimmedStr = (notation[1] || "") + notation[3];
      return Number(trimmedStr);
    } else return str;
  } else {
    return str;
  }
}
function trimZeros(numStr) {
  if (numStr && numStr.indexOf(".") !== -1) {
    numStr = numStr.replace(/0+$/, "");
    if (numStr === ".") numStr = "0";
    else if (numStr[0] === ".") numStr = "0" + numStr;
    else if (numStr[numStr.length - 1] === ".") numStr = numStr.substring(0, numStr.length - 1);
    return numStr;
  }
  return numStr;
}
function parse_int(numStr, base) {
  if (parseInt) return parseInt(numStr, base);
  else if (Number.parseInt) return Number.parseInt(numStr, base);
  else if (window && window.parseInt) return window.parseInt(numStr, base);
  else throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
var hexRegex, numRegex, consider, eNotationRegx;
var init_strnum = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/strnum/strnum.js"() {
    hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
    numRegex = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/;
    consider = {
      hex: true,
      // oct: false,
      leadingZeros: true,
      decimalPoint: ".",
      eNotation: true,
      //skipLike: /regex/
    };
    eNotationRegx = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/fast-xml-parser/src/ignoreAttributes.js
function getIgnoreAttributesFn(ignoreAttributes) {
  if (typeof ignoreAttributes === "function") {
    return ignoreAttributes;
  }
  if (Array.isArray(ignoreAttributes)) {
    return (attrName) => {
      for (const pattern of ignoreAttributes) {
        if (typeof pattern === "string" && attrName === pattern) {
          return true;
        }
        if (pattern instanceof RegExp && pattern.test(attrName)) {
          return true;
        }
      }
    };
  }
  return () => false;
}
var init_ignoreAttributes = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/fast-xml-parser/src/ignoreAttributes.js"() {},
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js
function addExternalEntities(externalEntities) {
  const entKeys = Object.keys(externalEntities);
  for (let i = 0; i < entKeys.length; i++) {
    const ent = entKeys[i];
    this.lastEntities[ent] = {
      regex: new RegExp("&" + ent + ";", "g"),
      val: externalEntities[ent],
    };
  }
}
function parseTextData(val, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
  if (val !== void 0) {
    if (this.options.trimValues && !dontTrim) {
      val = val.trim();
    }
    if (val.length > 0) {
      if (!escapeEntities) val = this.replaceEntitiesValue(val);
      const newval = this.options.tagValueProcessor(tagName, val, jPath, hasAttributes, isLeafNode);
      if (newval === null || newval === void 0) {
        return val;
      } else if (typeof newval !== typeof val || newval !== val) {
        return newval;
      } else if (this.options.trimValues) {
        return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
      } else {
        const trimmedVal = val.trim();
        if (trimmedVal === val) {
          return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
        } else {
          return val;
        }
      }
    }
  }
}
function resolveNameSpace(tagname) {
  if (this.options.removeNSPrefix) {
    const tags = tagname.split(":");
    const prefix = tagname.charAt(0) === "/" ? "/" : "";
    if (tags[0] === "xmlns") {
      return "";
    }
    if (tags.length === 2) {
      tagname = prefix + tags[1];
    }
  }
  return tagname;
}
function buildAttributesMap(attrStr, jPath, tagName) {
  if (this.options.ignoreAttributes !== true && typeof attrStr === "string") {
    const matches = getAllMatches(attrStr, attrsRegx);
    const len = matches.length;
    const attrs = {};
    for (let i = 0; i < len; i++) {
      const attrName = this.resolveNameSpace(matches[i][1]);
      if (this.ignoreAttributesFn(attrName, jPath)) {
        continue;
      }
      let oldVal = matches[i][4];
      let aName = this.options.attributeNamePrefix + attrName;
      if (attrName.length) {
        if (this.options.transformAttributeName) {
          aName = this.options.transformAttributeName(aName);
        }
        if (aName === "__proto__") aName = "#__proto__";
        if (oldVal !== void 0) {
          if (this.options.trimValues) {
            oldVal = oldVal.trim();
          }
          oldVal = this.replaceEntitiesValue(oldVal);
          const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
          if (newVal === null || newVal === void 0) {
            attrs[aName] = oldVal;
          } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
            attrs[aName] = newVal;
          } else {
            attrs[aName] = parseValue(oldVal, this.options.parseAttributeValue, this.options.numberParseOptions);
          }
        } else if (this.options.allowBooleanAttributes) {
          attrs[aName] = true;
        }
      }
    }
    if (!Object.keys(attrs).length) {
      return;
    }
    if (this.options.attributesGroupName) {
      const attrCollection = {};
      attrCollection[this.options.attributesGroupName] = attrs;
      return attrCollection;
    }
    return attrs;
  }
}
function addChild(currentNode, childNode, jPath, startIndex) {
  if (!this.options.captureMetaData) startIndex = void 0;
  const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
  if (result === false) {
  } else if (typeof result === "string") {
    childNode.tagname = result;
    currentNode.addChild(childNode, startIndex);
  } else {
    currentNode.addChild(childNode, startIndex);
  }
}
function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
  if (textData) {
    if (isLeafNode === void 0) isLeafNode = currentNode.child.length === 0;
    textData = this.parseTextData(
      textData,
      currentNode.tagname,
      jPath,
      false,
      currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false,
      isLeafNode,
    );
    if (textData !== void 0 && textData !== "") currentNode.add(this.options.textNodeName, textData);
    textData = "";
  }
  return textData;
}
function isItStopNode(stopNodes, jPath, currentTagName) {
  const allNodesExp = "*." + currentTagName;
  for (const stopNodePath in stopNodes) {
    const stopNodeExp = stopNodes[stopNodePath];
    if (allNodesExp === stopNodeExp || jPath === stopNodeExp) return true;
  }
  return false;
}
function tagExpWithClosingIndex(xmlData, i, closingChar = ">") {
  let attrBoundary;
  let tagExp = "";
  for (let index = i; index < xmlData.length; index++) {
    let ch = xmlData[index];
    if (attrBoundary) {
      if (ch === attrBoundary) attrBoundary = "";
    } else if (ch === '"' || ch === "'") {
      attrBoundary = ch;
    } else if (ch === closingChar[0]) {
      if (closingChar[1]) {
        if (xmlData[index + 1] === closingChar[1]) {
          return {
            data: tagExp,
            index,
          };
        }
      } else {
        return {
          data: tagExp,
          index,
        };
      }
    } else if (ch === "	") {
      ch = " ";
    }
    tagExp += ch;
  }
}
function findClosingIndex(xmlData, str, i, errMsg) {
  const closingIndex = xmlData.indexOf(str, i);
  if (closingIndex === -1) {
    throw new Error(errMsg);
  } else {
    return closingIndex + str.length - 1;
  }
}
function readTagExp(xmlData, i, removeNSPrefix, closingChar = ">") {
  const result = tagExpWithClosingIndex(xmlData, i + 1, closingChar);
  if (!result) return;
  let tagExp = result.data;
  const closeIndex = result.index;
  const separatorIndex = tagExp.search(/\s/);
  let tagName = tagExp;
  let attrExpPresent = true;
  if (separatorIndex !== -1) {
    tagName = tagExp.substring(0, separatorIndex);
    tagExp = tagExp.substring(separatorIndex + 1).trimStart();
  }
  const rawTagName = tagName;
  if (removeNSPrefix) {
    const colonIndex = tagName.indexOf(":");
    if (colonIndex !== -1) {
      tagName = tagName.substr(colonIndex + 1);
      attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
    }
  }
  return {
    tagName,
    tagExp,
    closeIndex,
    attrExpPresent,
    rawTagName,
  };
}
function readStopNodeData(xmlData, tagName, i) {
  const startIndex = i;
  let openTagCount = 1;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === "<") {
      if (xmlData[i + 1] === "/") {
        const closeIndex = findClosingIndex(xmlData, ">", i, `${tagName} is not closed`);
        let closeTagName = xmlData.substring(i + 2, closeIndex).trim();
        if (closeTagName === tagName) {
          openTagCount--;
          if (openTagCount === 0) {
            return {
              tagContent: xmlData.substring(startIndex, i),
              i: closeIndex,
            };
          }
        }
        i = closeIndex;
      } else if (xmlData[i + 1] === "?") {
        const closeIndex = findClosingIndex(xmlData, "?>", i + 1, "StopNode is not closed.");
        i = closeIndex;
      } else if (xmlData.substr(i + 1, 3) === "!--") {
        const closeIndex = findClosingIndex(xmlData, "-->", i + 3, "StopNode is not closed.");
        i = closeIndex;
      } else if (xmlData.substr(i + 1, 2) === "![") {
        const closeIndex = findClosingIndex(xmlData, "]]>", i, "StopNode is not closed.") - 2;
        i = closeIndex;
      } else {
        const tagData = readTagExp(xmlData, i, ">");
        if (tagData) {
          const openTagName = tagData && tagData.tagName;
          if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
            openTagCount++;
          }
          i = tagData.closeIndex;
        }
      }
    }
  }
}
function parseValue(val, shouldParse, options) {
  if (shouldParse && typeof val === "string") {
    const newval = val.trim();
    if (newval === "true") return true;
    else if (newval === "false") return false;
    else return toNumber(val, options);
  } else {
    if (isExist(val)) {
      return val;
    } else {
      return "";
    }
  }
}
var OrderedObjParser, attrsRegx, parseXml, replaceEntitiesValue;
var init_OrderedObjParser = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js"() {
    "use strict";
    init_util();
    init_xmlNode();
    init_DocTypeReader();
    init_strnum();
    init_ignoreAttributes();
    OrderedObjParser = class {
      constructor(options) {
        this.options = options;
        this.currentNode = null;
        this.tagsNodeStack = [];
        this.docTypeEntities = {};
        this.lastEntities = {
          apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
          gt: { regex: /&(gt|#62|#x3E);/g, val: ">" },
          lt: { regex: /&(lt|#60|#x3C);/g, val: "<" },
          quot: { regex: /&(quot|#34|#x22);/g, val: '"' },
        };
        this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" };
        this.htmlEntities = {
          space: { regex: /&(nbsp|#160);/g, val: " " },
          // "lt" : { regex: /&(lt|#60);/g, val: "<" },
          // "gt" : { regex: /&(gt|#62);/g, val: ">" },
          // "amp" : { regex: /&(amp|#38);/g, val: "&" },
          // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
          // "apos" : { regex: /&(apos|#39);/g, val: "'" },
          cent: { regex: /&(cent|#162);/g, val: "\xA2" },
          pound: { regex: /&(pound|#163);/g, val: "\xA3" },
          yen: { regex: /&(yen|#165);/g, val: "\xA5" },
          euro: { regex: /&(euro|#8364);/g, val: "\u20AC" },
          copyright: { regex: /&(copy|#169);/g, val: "\xA9" },
          reg: { regex: /&(reg|#174);/g, val: "\xAE" },
          inr: { regex: /&(inr|#8377);/g, val: "\u20B9" },
          num_dec: { regex: /&#([0-9]{1,7});/g, val: (_, str) => String.fromCodePoint(Number.parseInt(str, 10)) },
          num_hex: {
            regex: /&#x([0-9a-fA-F]{1,6});/g,
            val: (_, str) => String.fromCodePoint(Number.parseInt(str, 16)),
          },
        };
        this.addExternalEntities = addExternalEntities;
        this.parseXml = parseXml;
        this.parseTextData = parseTextData;
        this.resolveNameSpace = resolveNameSpace;
        this.buildAttributesMap = buildAttributesMap;
        this.isItStopNode = isItStopNode;
        this.replaceEntitiesValue = replaceEntitiesValue;
        this.readStopNodeData = readStopNodeData;
        this.saveTextToParentTag = saveTextToParentTag;
        this.addChild = addChild;
        this.ignoreAttributesFn = getIgnoreAttributesFn(this.options.ignoreAttributes);
      }
    };
    attrsRegx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
    parseXml = function (xmlData) {
      xmlData = xmlData.replace(/\r\n?/g, "\n");
      const xmlObj = new XmlNode("!xml");
      let currentNode = xmlObj;
      let textData = "";
      let jPath = "";
      for (let i = 0; i < xmlData.length; i++) {
        const ch = xmlData[i];
        if (ch === "<") {
          if (xmlData[i + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
            let tagName = xmlData.substring(i + 2, closeIndex).trim();
            if (this.options.removeNSPrefix) {
              const colonIndex = tagName.indexOf(":");
              if (colonIndex !== -1) {
                tagName = tagName.substr(colonIndex + 1);
              }
            }
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode) {
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
            }
            const lastTagName = jPath.substring(jPath.lastIndexOf(".") + 1);
            if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) {
              throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
            }
            let propIndex = 0;
            if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
              propIndex = jPath.lastIndexOf(".", jPath.lastIndexOf(".") - 1);
              this.tagsNodeStack.pop();
            } else {
              propIndex = jPath.lastIndexOf(".");
            }
            jPath = jPath.substring(0, propIndex);
            currentNode = this.tagsNodeStack.pop();
            textData = "";
            i = closeIndex;
          } else if (xmlData[i + 1] === "?") {
            let tagData = readTagExp(xmlData, i, false, "?>");
            if (!tagData) throw new Error("Pi Tag is not closed.");
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            if ((this.options.ignoreDeclaration && tagData.tagName === "?xml") || this.options.ignorePiTags) {
            } else {
              const childNode = new XmlNode(tagData.tagName);
              childNode.add(this.options.textNodeName, "");
              if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
              }
              this.addChild(currentNode, childNode, jPath, i);
            }
            i = tagData.closeIndex + 1;
          } else if (xmlData.substr(i + 1, 3) === "!--") {
            const endIndex = findClosingIndex(xmlData, "-->", i + 4, "Comment is not closed.");
            if (this.options.commentPropName) {
              const comment = xmlData.substring(i + 4, endIndex - 2);
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
              currentNode.add(this.options.commentPropName, [{ [this.options.textNodeName]: comment }]);
            }
            i = endIndex;
          } else if (xmlData.substr(i + 1, 2) === "!D") {
            const result = readDocType(xmlData, i);
            this.docTypeEntities = result.entities;
            i = result.i;
          } else if (xmlData.substr(i + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
            const tagExp = xmlData.substring(i + 9, closeIndex);
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            let val = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true, true);
            if (val == void 0) val = "";
            if (this.options.cdataPropName) {
              currentNode.add(this.options.cdataPropName, [{ [this.options.textNodeName]: tagExp }]);
            } else {
              currentNode.add(this.options.textNodeName, val);
            }
            i = closeIndex + 2;
          } else {
            let result = readTagExp(xmlData, i, this.options.removeNSPrefix);
            let tagName = result.tagName;
            const rawTagName = result.rawTagName;
            let tagExp = result.tagExp;
            let attrExpPresent = result.attrExpPresent;
            let closeIndex = result.closeIndex;
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode && textData) {
              if (currentNode.tagname !== "!xml") {
                textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
              }
            }
            const lastTag = currentNode;
            if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
              currentNode = this.tagsNodeStack.pop();
              jPath = jPath.substring(0, jPath.lastIndexOf("."));
            }
            if (tagName !== xmlObj.tagname) {
              jPath += jPath ? "." + tagName : tagName;
            }
            const startIndex = i;
            if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) {
              let tagContent = "";
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                if (tagName[tagName.length - 1] === "/") {
                  tagName = tagName.substr(0, tagName.length - 1);
                  jPath = jPath.substr(0, jPath.length - 1);
                  tagExp = tagName;
                } else {
                  tagExp = tagExp.substr(0, tagExp.length - 1);
                }
                i = result.closeIndex;
              } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
                i = result.closeIndex;
              } else {
                const result2 = this.readStopNodeData(xmlData, rawTagName, closeIndex + 1);
                if (!result2) throw new Error(`Unexpected end of ${rawTagName}`);
                i = result2.i;
                tagContent = result2.tagContent;
              }
              const childNode = new XmlNode(tagName);
              if (tagName !== tagExp && attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
              }
              if (tagContent) {
                tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
              }
              jPath = jPath.substr(0, jPath.lastIndexOf("."));
              childNode.add(this.options.textNodeName, tagContent);
              this.addChild(currentNode, childNode, jPath, startIndex);
            } else {
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                if (tagName[tagName.length - 1] === "/") {
                  tagName = tagName.substr(0, tagName.length - 1);
                  jPath = jPath.substr(0, jPath.length - 1);
                  tagExp = tagName;
                } else {
                  tagExp = tagExp.substr(0, tagExp.length - 1);
                }
                if (this.options.transformTagName) {
                  tagName = this.options.transformTagName(tagName);
                }
                const childNode = new XmlNode(tagName);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath, startIndex);
                jPath = jPath.substr(0, jPath.lastIndexOf("."));
              } else {
                const childNode = new XmlNode(tagName);
                this.tagsNodeStack.push(currentNode);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath, startIndex);
                currentNode = childNode;
              }
              textData = "";
              i = closeIndex;
            }
          }
        } else {
          textData += xmlData[i];
        }
      }
      return xmlObj.child;
    };
    replaceEntitiesValue = function (val) {
      if (this.options.processEntities) {
        for (let entityName in this.docTypeEntities) {
          const entity = this.docTypeEntities[entityName];
          val = val.replace(entity.regx, entity.val);
        }
        for (let entityName in this.lastEntities) {
          const entity = this.lastEntities[entityName];
          val = val.replace(entity.regex, entity.val);
        }
        if (this.options.htmlEntities) {
          for (let entityName in this.htmlEntities) {
            const entity = this.htmlEntities[entityName];
            val = val.replace(entity.regex, entity.val);
          }
        }
        val = val.replace(this.ampEntity.regex, this.ampEntity.val);
      }
      return val;
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/fast-xml-parser/src/xmlparser/node2json.js
function prettify(node, options) {
  return compress(node, options);
}
function compress(arr, options, jPath) {
  let text;
  const compressedObj = {};
  for (let i = 0; i < arr.length; i++) {
    const tagObj = arr[i];
    const property = propName(tagObj);
    let newJpath = "";
    if (jPath === void 0) newJpath = property;
    else newJpath = jPath + "." + property;
    if (property === options.textNodeName) {
      if (text === void 0) text = tagObj[property];
      else text += "" + tagObj[property];
    } else if (property === void 0) {
      continue;
    } else if (tagObj[property]) {
      let val = compress(tagObj[property], options, newJpath);
      const isLeaf = isLeafTag(val, options);
      if (tagObj[METADATA_SYMBOL2] !== void 0) {
        val[METADATA_SYMBOL2] = tagObj[METADATA_SYMBOL2];
      }
      if (tagObj[":@"]) {
        assignAttributes(val, tagObj[":@"], newJpath, options);
      } else if (
        Object.keys(val).length === 1 &&
        val[options.textNodeName] !== void 0 &&
        !options.alwaysCreateTextNode
      ) {
        val = val[options.textNodeName];
      } else if (Object.keys(val).length === 0) {
        if (options.alwaysCreateTextNode) val[options.textNodeName] = "";
        else val = "";
      }
      if (compressedObj[property] !== void 0 && compressedObj.hasOwnProperty(property)) {
        if (!Array.isArray(compressedObj[property])) {
          compressedObj[property] = [compressedObj[property]];
        }
        compressedObj[property].push(val);
      } else {
        if (options.isArray(property, newJpath, isLeaf)) {
          compressedObj[property] = [val];
        } else {
          compressedObj[property] = val;
        }
      }
    }
  }
  if (typeof text === "string") {
    if (text.length > 0) compressedObj[options.textNodeName] = text;
  } else if (text !== void 0) compressedObj[options.textNodeName] = text;
  return compressedObj;
}
function propName(obj) {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key !== ":@") return key;
  }
}
function assignAttributes(obj, attrMap, jpath, options) {
  if (attrMap) {
    const keys = Object.keys(attrMap);
    const len = keys.length;
    for (let i = 0; i < len; i++) {
      const atrrName = keys[i];
      if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
        obj[atrrName] = [attrMap[atrrName]];
      } else {
        obj[atrrName] = attrMap[atrrName];
      }
    }
  }
}
function isLeafTag(obj, options) {
  const { textNodeName } = options;
  const propCount = Object.keys(obj).length;
  if (propCount === 0) {
    return true;
  }
  if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
    return true;
  }
  return false;
}
var METADATA_SYMBOL2;
var init_node2json = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/fast-xml-parser/src/xmlparser/node2json.js"() {
    "use strict";
    init_xmlNode();
    METADATA_SYMBOL2 = XmlNode.getMetaDataSymbol();
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/fast-xml-parser/src/xmlparser/XMLParser.js
var XMLParser;
var init_XMLParser = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/fast-xml-parser/src/xmlparser/XMLParser.js"() {
    init_OptionsBuilder();
    init_OrderedObjParser();
    init_node2json();
    init_validator();
    init_xmlNode();
    XMLParser = class {
      constructor(options) {
        this.externalEntities = {};
        this.options = buildOptions(options);
      }
      /**
       * Parse XML dats to JS object
       * @param {string|Buffer} xmlData
       * @param {boolean|Object} validationOption
       */
      parse(xmlData, validationOption) {
        if (typeof xmlData === "string") {
        } else if (xmlData.toString) {
          xmlData = xmlData.toString();
        } else {
          throw new Error("XML data is accepted in String or Bytes[] form.");
        }
        if (validationOption) {
          if (validationOption === true) validationOption = {};
          const result = validate(xmlData, validationOption);
          if (result !== true) {
            throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
          }
        }
        const orderedObjParser = new OrderedObjParser(this.options);
        orderedObjParser.addExternalEntities(this.externalEntities);
        const orderedResult = orderedObjParser.parseXml(xmlData);
        if (this.options.preserveOrder || orderedResult === void 0) return orderedResult;
        else return prettify(orderedResult, this.options);
      }
      /**
       * Add Entity which is not by default supported by this library
       * @param {string} key
       * @param {string} value
       */
      addEntity(key, value) {
        if (value.indexOf("&") !== -1) {
          throw new Error("Entity value can't have '&'");
        } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
          throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
        } else if (value === "&") {
          throw new Error("An entity with value '&' is not permitted");
        } else {
          this.externalEntities[key] = value;
        }
      }
      /**
       * Returns a Symbol that can be used to access the metadata
       * property on a node.
       *
       * If Symbol is not available in the environment, an ordinary property is used
       * and the name of the property is here returned.
       *
       * The XMLMetaData property is only present when `captureMetaData`
       * is true in the options.
       */
      static getMetaDataSymbol() {
        return XmlNode.getMetaDataSymbol();
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/fast-xml-parser/src/fxp.js
var init_fxp = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/fast-xml-parser/src/fxp.js"() {
    "use strict";
    init_XMLParser();
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlShapeDeserializer.js
var import_smithy_client3, import_util_utf83, XmlShapeDeserializer;
var init_XmlShapeDeserializer = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlShapeDeserializer.js"() {
    init_protocols();
    init_schema();
    import_smithy_client3 = __toESM(require_dist_cjs23());
    import_util_utf83 = __toESM(require_dist_cjs7());
    init_fxp();
    init_ConfigurableSerdeContext();
    XmlShapeDeserializer = class extends SerdeContextConfig {
      constructor(settings) {
        super();
        __publicField(this, "settings");
        __publicField(this, "stringDeserializer");
        this.settings = settings;
        this.stringDeserializer = new FromStringShapeDeserializer(settings);
      }
      setSerdeContext(serdeContext) {
        this.serdeContext = serdeContext;
        this.stringDeserializer.setSerdeContext(serdeContext);
      }
      read(schema, bytes, key) {
        const ns = NormalizedSchema.of(schema);
        const memberSchemas = ns.getMemberSchemas();
        const isEventPayload =
          ns.isStructSchema() &&
          ns.isMemberSchema() &&
          !!Object.values(memberSchemas).find((memberNs) => {
            return !!memberNs.getMemberTraits().eventPayload;
          });
        if (isEventPayload) {
          const output = {};
          const memberName = Object.keys(memberSchemas)[0];
          const eventMemberSchema = memberSchemas[memberName];
          if (eventMemberSchema.isBlobSchema()) {
            output[memberName] = bytes;
          } else {
            output[memberName] = this.read(memberSchemas[memberName], bytes);
          }
          return output;
        }
        const xmlString = (this.serdeContext?.utf8Encoder ?? import_util_utf83.toUtf8)(bytes);
        const parsedObject = this.parseXml(xmlString);
        return this.readSchema(schema, key ? parsedObject[key] : parsedObject);
      }
      readSchema(_schema, value) {
        const ns = NormalizedSchema.of(_schema);
        const traits = ns.getMergedTraits();
        const schema = ns.getSchema();
        if (ns.isListSchema() && !Array.isArray(value)) {
          return this.readSchema(schema, [value]);
        }
        if (value == null) {
          return value;
        }
        if (typeof value === "object") {
          const sparse = !!traits.sparse;
          const flat = !!traits.xmlFlattened;
          if (ns.isListSchema()) {
            const listValue = ns.getValueSchema();
            const buffer2 = [];
            const sourceKey = listValue.getMergedTraits().xmlName ?? "member";
            const source = flat ? value : (value[0] ?? value)[sourceKey];
            const sourceArray = Array.isArray(source) ? source : [source];
            for (const v of sourceArray) {
              if (v != null || sparse) {
                buffer2.push(this.readSchema(listValue, v));
              }
            }
            return buffer2;
          }
          const buffer = {};
          if (ns.isMapSchema()) {
            const keyNs = ns.getKeySchema();
            const memberNs = ns.getValueSchema();
            let entries;
            if (flat) {
              entries = Array.isArray(value) ? value : [value];
            } else {
              entries = Array.isArray(value.entry) ? value.entry : [value.entry];
            }
            const keyProperty = keyNs.getMergedTraits().xmlName ?? "key";
            const valueProperty = memberNs.getMergedTraits().xmlName ?? "value";
            for (const entry of entries) {
              const key = entry[keyProperty];
              const value2 = entry[valueProperty];
              if (value2 != null || sparse) {
                buffer[key] = this.readSchema(memberNs, value2);
              }
            }
            return buffer;
          }
          if (ns.isStructSchema()) {
            for (const [memberName, memberSchema] of ns.structIterator()) {
              const memberTraits = memberSchema.getMergedTraits();
              const xmlObjectKey = !memberTraits.httpPayload
                ? (memberSchema.getMemberTraits().xmlName ?? memberName)
                : (memberTraits.xmlName ?? memberSchema.getName());
              if (value[xmlObjectKey] != null) {
                buffer[memberName] = this.readSchema(memberSchema, value[xmlObjectKey]);
              }
            }
            return buffer;
          }
          if (ns.isDocumentSchema()) {
            return value;
          }
          throw new Error(`@aws-sdk/core/protocols - xml deserializer unhandled schema type for ${ns.getName(true)}`);
        } else {
          if (ns.isListSchema()) {
            return [];
          } else if (ns.isMapSchema() || ns.isStructSchema()) {
            return {};
          }
          return this.stringDeserializer.read(ns, value);
        }
      }
      parseXml(xml) {
        if (xml.length) {
          const parser = new XMLParser({
            attributeNamePrefix: "",
            htmlEntities: true,
            ignoreAttributes: false,
            ignoreDeclaration: true,
            parseTagValue: false,
            trimValues: false,
            tagValueProcessor: (_, val) => (val.trim() === "" && val.includes("\n") ? "" : void 0),
          });
          parser.addEntity("#xD", "\r");
          parser.addEntity("#10", "\n");
          let parsedObj;
          try {
            parsedObj = parser.parse(xml, true);
          } catch (e) {
            if (e && typeof e === "object") {
              Object.defineProperty(e, "$responseBodyText", {
                value: xml,
              });
            }
            throw e;
          }
          const textNodeName = "#text";
          const key = Object.keys(parsedObj)[0];
          const parsedObjToReturn = parsedObj[key];
          if (parsedObjToReturn[textNodeName]) {
            parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
            delete parsedObjToReturn[textNodeName];
          }
          return (0, import_smithy_client3.getValueFromTextNode)(parsedObjToReturn);
        }
        return {};
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/QueryShapeSerializer.js
var import_smithy_client4, import_util_base644, QueryShapeSerializer;
var init_QueryShapeSerializer = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/QueryShapeSerializer.js"() {
    init_protocols();
    init_schema();
    init_serde();
    import_smithy_client4 = __toESM(require_dist_cjs23());
    import_util_base644 = __toESM(require_dist_cjs8());
    init_ConfigurableSerdeContext();
    QueryShapeSerializer = class extends SerdeContextConfig {
      constructor(settings) {
        super();
        __publicField(this, "settings");
        __publicField(this, "buffer");
        this.settings = settings;
      }
      write(schema, value, prefix = "") {
        if (this.buffer === void 0) {
          this.buffer = "";
        }
        const ns = NormalizedSchema.of(schema);
        if (prefix && !prefix.endsWith(".")) {
          prefix += ".";
        }
        if (ns.isBlobSchema()) {
          if (typeof value === "string" || value instanceof Uint8Array) {
            this.writeKey(prefix);
            this.writeValue((this.serdeContext?.base64Encoder ?? import_util_base644.toBase64)(value));
          }
        } else if (ns.isBooleanSchema() || ns.isNumericSchema() || ns.isStringSchema()) {
          if (value != null) {
            this.writeKey(prefix);
            this.writeValue(String(value));
          }
        } else if (ns.isBigIntegerSchema()) {
          if (value != null) {
            this.writeKey(prefix);
            this.writeValue(String(value));
          }
        } else if (ns.isBigDecimalSchema()) {
          if (value != null) {
            this.writeKey(prefix);
            this.writeValue(value instanceof NumericValue2 ? value.string : String(value));
          }
        } else if (ns.isTimestampSchema()) {
          if (value instanceof Date) {
            this.writeKey(prefix);
            const format = determineTimestampFormat(ns, this.settings);
            switch (format) {
              case SCHEMA.TIMESTAMP_DATE_TIME:
                this.writeValue(value.toISOString().replace(".000Z", "Z"));
                break;
              case SCHEMA.TIMESTAMP_HTTP_DATE:
                this.writeValue((0, import_smithy_client4.dateToUtcString)(value));
                break;
              case SCHEMA.TIMESTAMP_EPOCH_SECONDS:
                this.writeValue(String(value.getTime() / 1e3));
                break;
            }
          }
        } else if (ns.isDocumentSchema()) {
          throw new Error(`@aws-sdk/core/protocols - QuerySerializer unsupported document type ${ns.getName(true)}`);
        } else if (ns.isListSchema()) {
          if (Array.isArray(value)) {
            if (value.length === 0) {
              if (this.settings.serializeEmptyLists) {
                this.writeKey(prefix);
                this.writeValue("");
              }
            } else {
              const member = ns.getValueSchema();
              const flat = this.settings.flattenLists || ns.getMergedTraits().xmlFlattened;
              let i = 1;
              for (const item of value) {
                if (item == null) {
                  continue;
                }
                const suffix = this.getKey("member", member.getMergedTraits().xmlName);
                const key = flat ? `${prefix}${i}` : `${prefix}${suffix}.${i}`;
                this.write(member, item, key);
                ++i;
              }
            }
          }
        } else if (ns.isMapSchema()) {
          if (value && typeof value === "object") {
            const keySchema = ns.getKeySchema();
            const memberSchema = ns.getValueSchema();
            const flat = ns.getMergedTraits().xmlFlattened;
            let i = 1;
            for (const [k, v] of Object.entries(value)) {
              if (v == null) {
                continue;
              }
              const keySuffix = this.getKey("key", keySchema.getMergedTraits().xmlName);
              const key = flat ? `${prefix}${i}.${keySuffix}` : `${prefix}entry.${i}.${keySuffix}`;
              const valueSuffix = this.getKey("value", memberSchema.getMergedTraits().xmlName);
              const valueKey = flat ? `${prefix}${i}.${valueSuffix}` : `${prefix}entry.${i}.${valueSuffix}`;
              this.write(keySchema, k, key);
              this.write(memberSchema, v, valueKey);
              ++i;
            }
          }
        } else if (ns.isStructSchema()) {
          if (value && typeof value === "object") {
            for (const [memberName, member] of ns.structIterator()) {
              if (value[memberName] == null) {
                continue;
              }
              const suffix = this.getKey(memberName, member.getMergedTraits().xmlName);
              const key = `${prefix}${suffix}`;
              this.write(member, value[memberName], key);
            }
          }
        } else if (ns.isUnitSchema()) {
        } else {
          throw new Error(`@aws-sdk/core/protocols - QuerySerializer unrecognized schema type ${ns.getName(true)}`);
        }
      }
      flush() {
        if (this.buffer === void 0) {
          throw new Error("@aws-sdk/core/protocols - QuerySerializer cannot flush with nothing written to buffer.");
        }
        const str = this.buffer;
        delete this.buffer;
        return str;
      }
      getKey(memberName, xmlName) {
        const key = xmlName ?? memberName;
        if (this.settings.capitalizeKeys) {
          return key[0].toUpperCase() + key.slice(1);
        }
        return key;
      }
      writeKey(key) {
        if (key.endsWith(".")) {
          key = key.slice(0, key.length - 1);
        }
        this.buffer += `&${extendedEncodeURIComponent2(key)}=`;
      }
      writeValue(value) {
        this.buffer += extendedEncodeURIComponent2(value);
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/AwsQueryProtocol.js
var import_util_body_length_browser3, AwsQueryProtocol;
var init_AwsQueryProtocol = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/AwsQueryProtocol.js"() {
    init_protocols();
    init_schema();
    import_util_body_length_browser3 = __toESM(require_dist_cjs21());
    init_XmlShapeDeserializer();
    init_QueryShapeSerializer();
    AwsQueryProtocol = class extends RpcProtocol {
      constructor(options) {
        super({
          defaultNamespace: options.defaultNamespace,
        });
        __publicField(this, "options");
        __publicField(this, "serializer");
        __publicField(this, "deserializer");
        this.options = options;
        const settings = {
          timestampFormat: {
            useTrait: true,
            default: SCHEMA.TIMESTAMP_DATE_TIME,
          },
          httpBindings: false,
          xmlNamespace: options.xmlNamespace,
          serviceNamespace: options.defaultNamespace,
          serializeEmptyLists: true,
        };
        this.serializer = new QueryShapeSerializer(settings);
        this.deserializer = new XmlShapeDeserializer(settings);
      }
      getShapeId() {
        return "aws.protocols#awsQuery";
      }
      setSerdeContext(serdeContext) {
        this.serializer.setSerdeContext(serdeContext);
        this.deserializer.setSerdeContext(serdeContext);
      }
      getPayloadCodec() {
        throw new Error("AWSQuery protocol has no payload codec.");
      }
      async serializeRequest(operationSchema, input, context) {
        const request = await super.serializeRequest(operationSchema, input, context);
        if (!request.path.endsWith("/")) {
          request.path += "/";
        }
        Object.assign(request.headers, {
          "content-type": `application/x-www-form-urlencoded`,
        });
        if (deref(operationSchema.input) === "unit" || !request.body) {
          request.body = "";
        }
        request.body = `Action=${operationSchema.name.split("#")[1]}&Version=${this.options.version}` + request.body;
        if (request.body.endsWith("&")) {
          request.body = request.body.slice(-1);
        }
        try {
          request.headers["content-length"] = String(
            (0, import_util_body_length_browser3.calculateBodyLength)(request.body),
          );
        } catch (e) {}
        return request;
      }
      async deserializeResponse(operationSchema, context, response) {
        const deserializer = this.deserializer;
        const ns = NormalizedSchema.of(operationSchema.output);
        const dataObject = {};
        if (response.statusCode >= 300) {
          const bytes2 = await collectBody2(response.body, context);
          if (bytes2.byteLength > 0) {
            Object.assign(dataObject, await deserializer.read(SCHEMA.DOCUMENT, bytes2));
          }
          await this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
        }
        for (const header in response.headers) {
          const value = response.headers[header];
          delete response.headers[header];
          response.headers[header.toLowerCase()] = value;
        }
        const awsQueryResultKey =
          ns.isStructSchema() && this.useNestedResult() ? operationSchema.name.split("#")[1] + "Result" : void 0;
        const bytes = await collectBody2(response.body, context);
        if (bytes.byteLength > 0) {
          Object.assign(dataObject, await deserializer.read(ns, bytes, awsQueryResultKey));
        }
        const output = {
          $metadata: this.deserializeMetadata(response),
          ...dataObject,
        };
        return output;
      }
      useNestedResult() {
        return true;
      }
      async handleError(operationSchema, context, response, dataObject, metadata) {
        const errorIdentifier = this.loadQueryErrorCode(response, dataObject) ?? "Unknown";
        let namespace = this.options.defaultNamespace;
        let errorName = errorIdentifier;
        if (errorIdentifier.includes("#")) {
          [namespace, errorName] = errorIdentifier.split("#");
        }
        const errorDataSource = this.loadQueryError(dataObject);
        const registry = TypeRegistry.for(namespace);
        let errorSchema;
        try {
          errorSchema = registry.find(
            (schema) => NormalizedSchema.of(schema).getMergedTraits().awsQueryError?.[0] === errorName,
          );
          if (!errorSchema) {
            errorSchema = registry.getSchema(errorIdentifier);
          }
        } catch (e) {
          const baseExceptionSchema = TypeRegistry.for("smithy.ts.sdk.synthetic." + namespace).getBaseException();
          if (baseExceptionSchema) {
            const ErrorCtor = baseExceptionSchema.ctor;
            throw Object.assign(new ErrorCtor(errorName), errorDataSource);
          }
          throw new Error(errorName);
        }
        const ns = NormalizedSchema.of(errorSchema);
        const message = this.loadQueryErrorMessage(dataObject);
        const exception = new errorSchema.ctor(message);
        const output = {};
        for (const [name, member] of ns.structIterator()) {
          const target = member.getMergedTraits().xmlName ?? name;
          const value = errorDataSource[target] ?? dataObject[target];
          output[name] = this.deserializer.readSchema(member, value);
        }
        Object.assign(exception, {
          $metadata: metadata,
          $response: response,
          $fault: ns.getMergedTraits().error,
          message,
          ...output,
        });
        throw exception;
      }
      loadQueryErrorCode(output, data) {
        const code = (data.Errors?.[0]?.Error ?? data.Errors?.Error ?? data.Error)?.Code;
        if (code !== void 0) {
          return code;
        }
        if (output.statusCode == 404) {
          return "NotFound";
        }
      }
      loadQueryError(data) {
        return data.Errors?.[0]?.Error ?? data.Errors?.Error ?? data.Error;
      }
      loadQueryErrorMessage(data) {
        const errorData = this.loadQueryError(data);
        return errorData?.message ?? errorData?.Message ?? data.message ?? data.Message ?? "Unknown";
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/AwsEc2QueryProtocol.js
var AwsEc2QueryProtocol;
var init_AwsEc2QueryProtocol = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/AwsEc2QueryProtocol.js"() {
    init_AwsQueryProtocol();
    AwsEc2QueryProtocol = class extends AwsQueryProtocol {
      constructor(options) {
        super(options);
        __publicField(this, "options");
        this.options = options;
        const ec2Settings = {
          capitalizeKeys: true,
          flattenLists: true,
          serializeEmptyLists: false,
        };
        Object.assign(this.serializer.settings, ec2Settings);
      }
      useNestedResult() {
        return false;
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/parseXmlBody.js
var import_smithy_client5, parseXmlBody, parseXmlErrorBody, loadRestXmlErrorCode;
var init_parseXmlBody = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/parseXmlBody.js"() {
    import_smithy_client5 = __toESM(require_dist_cjs23());
    init_fxp();
    init_common();
    parseXmlBody = (streamBody, context) =>
      collectBodyString(streamBody, context).then((encoded) => {
        if (encoded.length) {
          const parser = new XMLParser({
            attributeNamePrefix: "",
            htmlEntities: true,
            ignoreAttributes: false,
            ignoreDeclaration: true,
            parseTagValue: false,
            trimValues: false,
            tagValueProcessor: (_, val) => (val.trim() === "" && val.includes("\n") ? "" : void 0),
          });
          parser.addEntity("#xD", "\r");
          parser.addEntity("#10", "\n");
          let parsedObj;
          try {
            parsedObj = parser.parse(encoded, true);
          } catch (e) {
            if (e && typeof e === "object") {
              Object.defineProperty(e, "$responseBodyText", {
                value: encoded,
              });
            }
            throw e;
          }
          const textNodeName = "#text";
          const key = Object.keys(parsedObj)[0];
          const parsedObjToReturn = parsedObj[key];
          if (parsedObjToReturn[textNodeName]) {
            parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
            delete parsedObjToReturn[textNodeName];
          }
          return (0, import_smithy_client5.getValueFromTextNode)(parsedObjToReturn);
        }
        return {};
      });
    parseXmlErrorBody = async (errorBody, context) => {
      const value = await parseXmlBody(errorBody, context);
      if (value.Error) {
        value.Error.message = value.Error.message ?? value.Error.Message;
      }
      return value;
    };
    loadRestXmlErrorCode = (output, data) => {
      if (data?.Error?.Code !== void 0) {
        return data.Error.Code;
      }
      if (data?.Code !== void 0) {
        return data.Code;
      }
      if (output.statusCode == 404) {
        return "NotFound";
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/xml-builder/dist-cjs/index.js
var require_dist_cjs24 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/xml-builder/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var index_exports = {};
    __export2(index_exports, {
      XmlNode: () => XmlNode3,
      XmlText: () => XmlText2,
    });
    module2.exports = __toCommonJS2(index_exports);
    function escapeAttribute(value) {
      return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    __name(escapeAttribute, "escapeAttribute");
    function escapeElement(value) {
      return value
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\r/g, "&#x0D;")
        .replace(/\n/g, "&#x0A;")
        .replace(/\u0085/g, "&#x85;")
        .replace(/\u2028/, "&#x2028;");
    }
    __name(escapeElement, "escapeElement");
    var _a;
    var XmlText2 =
      ((_a = class {
        constructor(value) {
          this.value = value;
        }
        toString() {
          return escapeElement("" + this.value);
        }
      }),
      __name(_a, "XmlText"),
      _a);
    var _a2;
    var XmlNode3 =
      ((_a2 = class {
        constructor(name, children = []) {
          __publicField(this, "attributes", {});
          this.name = name;
          this.children = children;
        }
        static of(name, childText, withName) {
          const node = new _a2(name);
          if (childText !== void 0) {
            node.addChildNode(new XmlText2(childText));
          }
          if (withName !== void 0) {
            node.withName(withName);
          }
          return node;
        }
        withName(name) {
          this.name = name;
          return this;
        }
        addAttribute(name, value) {
          this.attributes[name] = value;
          return this;
        }
        addChildNode(child) {
          this.children.push(child);
          return this;
        }
        removeAttribute(name) {
          delete this.attributes[name];
          return this;
        }
        /**
         * @internal
         * Alias of {@link XmlNode#withName(string)} for codegen brevity.
         */
        n(name) {
          this.name = name;
          return this;
        }
        /**
         * @internal
         * Alias of {@link XmlNode#addChildNode(string)} for codegen brevity.
         */
        c(child) {
          this.children.push(child);
          return this;
        }
        /**
         * @internal
         * Checked version of {@link XmlNode#addAttribute(string)} for codegen brevity.
         */
        a(name, value) {
          if (value != null) {
            this.attributes[name] = value;
          }
          return this;
        }
        /**
         * Create a child node.
         * Used in serialization of string fields.
         * @internal
         */
        cc(input, field, withName = field) {
          if (input[field] != null) {
            const node = _a2.of(field, input[field]).withName(withName);
            this.c(node);
          }
        }
        /**
         * Creates list child nodes.
         * @internal
         */
        l(input, listName, memberName, valueProvider) {
          if (input[listName] != null) {
            const nodes = valueProvider();
            nodes.map((node) => {
              node.withName(memberName);
              this.c(node);
            });
          }
        }
        /**
         * Creates list child nodes with container.
         * @internal
         */
        lc(input, listName, memberName, valueProvider) {
          if (input[listName] != null) {
            const nodes = valueProvider();
            const containerNode = new _a2(memberName);
            nodes.map((node) => {
              containerNode.c(node);
            });
            this.c(containerNode);
          }
        }
        toString() {
          const hasChildren = Boolean(this.children.length);
          let xmlText = `<${this.name}`;
          const attributes = this.attributes;
          for (const attributeName of Object.keys(attributes)) {
            const attribute = attributes[attributeName];
            if (attribute != null) {
              xmlText += ` ${attributeName}="${escapeAttribute("" + attribute)}"`;
            }
          }
          return (xmlText += !hasChildren
            ? "/>"
            : `>${this.children.map((c) => c.toString()).join("")}</${this.name}>`);
        }
      }),
      __name(_a2, "XmlNode"),
      _a2);
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlShapeSerializer.js
var import_xml_builder, import_smithy_client6, import_util_base645, XmlShapeSerializer;
var init_XmlShapeSerializer = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlShapeSerializer.js"() {
    import_xml_builder = __toESM(require_dist_cjs24());
    init_schema();
    init_serde();
    import_smithy_client6 = __toESM(require_dist_cjs23());
    import_util_base645 = __toESM(require_dist_cjs8());
    init_ConfigurableSerdeContext();
    XmlShapeSerializer = class extends SerdeContextConfig {
      constructor(settings) {
        super();
        __publicField(this, "settings");
        __publicField(this, "stringBuffer");
        __publicField(this, "byteBuffer");
        __publicField(this, "buffer");
        this.settings = settings;
      }
      write(schema, value) {
        const ns = NormalizedSchema.of(schema);
        if (ns.isStringSchema() && typeof value === "string") {
          this.stringBuffer = value;
        } else if (ns.isBlobSchema()) {
          this.byteBuffer =
            "byteLength" in value ? value : (this.serdeContext?.base64Decoder ?? import_util_base645.fromBase64)(value);
        } else {
          this.buffer = this.writeStruct(ns, value, void 0);
          const traits = ns.getMergedTraits();
          if (traits.httpPayload && !traits.xmlName) {
            this.buffer.withName(ns.getName());
          }
        }
      }
      flush() {
        if (this.byteBuffer !== void 0) {
          const bytes = this.byteBuffer;
          delete this.byteBuffer;
          return bytes;
        }
        if (this.stringBuffer !== void 0) {
          const str = this.stringBuffer;
          delete this.stringBuffer;
          return str;
        }
        const buffer = this.buffer;
        if (this.settings.xmlNamespace) {
          if (!buffer?.attributes?.["xmlns"]) {
            buffer.addAttribute("xmlns", this.settings.xmlNamespace);
          }
        }
        delete this.buffer;
        return buffer.toString();
      }
      writeStruct(ns, value, parentXmlns) {
        const traits = ns.getMergedTraits();
        const name =
          ns.isMemberSchema() && !traits.httpPayload
            ? (ns.getMemberTraits().xmlName ?? ns.getMemberName())
            : (traits.xmlName ?? ns.getName());
        if (!name || !ns.isStructSchema()) {
          throw new Error(
            `@aws-sdk/core/protocols - xml serializer, cannot write struct with empty name or non-struct, schema=${ns.getName(true)}.`,
          );
        }
        const structXmlNode = import_xml_builder.XmlNode.of(name);
        const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(ns, parentXmlns);
        if (xmlns) {
          structXmlNode.addAttribute(xmlnsAttr, xmlns);
        }
        for (const [memberName, memberSchema] of ns.structIterator()) {
          const val = value[memberName];
          if (val != null) {
            if (memberSchema.getMergedTraits().xmlAttribute) {
              structXmlNode.addAttribute(
                memberSchema.getMergedTraits().xmlName ?? memberName,
                this.writeSimple(memberSchema, val),
              );
              continue;
            }
            if (memberSchema.isListSchema()) {
              this.writeList(memberSchema, val, structXmlNode, xmlns);
            } else if (memberSchema.isMapSchema()) {
              this.writeMap(memberSchema, val, structXmlNode, xmlns);
            } else if (memberSchema.isStructSchema()) {
              structXmlNode.addChildNode(this.writeStruct(memberSchema, val, xmlns));
            } else {
              const memberNode = import_xml_builder.XmlNode.of(
                memberSchema.getMergedTraits().xmlName ?? memberSchema.getMemberName(),
              );
              this.writeSimpleInto(memberSchema, val, memberNode, xmlns);
              structXmlNode.addChildNode(memberNode);
            }
          }
        }
        return structXmlNode;
      }
      writeList(listMember, array, container, parentXmlns) {
        if (!listMember.isMemberSchema()) {
          throw new Error(
            `@aws-sdk/core/protocols - xml serializer, cannot write non-member list: ${listMember.getName(true)}`,
          );
        }
        const listTraits = listMember.getMergedTraits();
        const listValueSchema = listMember.getValueSchema();
        const listValueTraits = listValueSchema.getMergedTraits();
        const sparse = !!listValueTraits.sparse;
        const flat = !!listTraits.xmlFlattened;
        const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(listMember, parentXmlns);
        const writeItem = (container2, value) => {
          if (listValueSchema.isListSchema()) {
            this.writeList(listValueSchema, Array.isArray(value) ? value : [value], container2, xmlns);
          } else if (listValueSchema.isMapSchema()) {
            this.writeMap(listValueSchema, value, container2, xmlns);
          } else if (listValueSchema.isStructSchema()) {
            const struct = this.writeStruct(listValueSchema, value, xmlns);
            container2.addChildNode(
              struct.withName(
                flat ? (listTraits.xmlName ?? listMember.getMemberName()) : (listValueTraits.xmlName ?? "member"),
              ),
            );
          } else {
            const listItemNode = import_xml_builder.XmlNode.of(
              flat ? (listTraits.xmlName ?? listMember.getMemberName()) : (listValueTraits.xmlName ?? "member"),
            );
            this.writeSimpleInto(listValueSchema, value, listItemNode, xmlns);
            container2.addChildNode(listItemNode);
          }
        };
        if (flat) {
          for (const value of array) {
            if (sparse || value != null) {
              writeItem(container, value);
            }
          }
        } else {
          const listNode = import_xml_builder.XmlNode.of(listTraits.xmlName ?? listMember.getMemberName());
          if (xmlns) {
            listNode.addAttribute(xmlnsAttr, xmlns);
          }
          for (const value of array) {
            if (sparse || value != null) {
              writeItem(listNode, value);
            }
          }
          container.addChildNode(listNode);
        }
      }
      writeMap(mapMember, map, container, parentXmlns, containerIsMap = false) {
        if (!mapMember.isMemberSchema()) {
          throw new Error(
            `@aws-sdk/core/protocols - xml serializer, cannot write non-member map: ${mapMember.getName(true)}`,
          );
        }
        const mapTraits = mapMember.getMergedTraits();
        const mapKeySchema = mapMember.getKeySchema();
        const mapKeyTraits = mapKeySchema.getMergedTraits();
        const keyTag = mapKeyTraits.xmlName ?? "key";
        const mapValueSchema = mapMember.getValueSchema();
        const mapValueTraits = mapValueSchema.getMergedTraits();
        const valueTag = mapValueTraits.xmlName ?? "value";
        const sparse = !!mapValueTraits.sparse;
        const flat = !!mapTraits.xmlFlattened;
        const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(mapMember, parentXmlns);
        const addKeyValue = (entry, key, val) => {
          const keyNode = import_xml_builder.XmlNode.of(keyTag, key);
          const [keyXmlnsAttr, keyXmlns] = this.getXmlnsAttribute(mapKeySchema, xmlns);
          if (keyXmlns) {
            keyNode.addAttribute(keyXmlnsAttr, keyXmlns);
          }
          entry.addChildNode(keyNode);
          let valueNode = import_xml_builder.XmlNode.of(valueTag);
          if (mapValueSchema.isListSchema()) {
            this.writeList(mapValueSchema, val, valueNode, xmlns);
          } else if (mapValueSchema.isMapSchema()) {
            this.writeMap(mapValueSchema, val, valueNode, xmlns, true);
          } else if (mapValueSchema.isStructSchema()) {
            valueNode = this.writeStruct(mapValueSchema, val, xmlns);
          } else {
            this.writeSimpleInto(mapValueSchema, val, valueNode, xmlns);
          }
          entry.addChildNode(valueNode);
        };
        if (flat) {
          for (const [key, val] of Object.entries(map)) {
            if (sparse || val != null) {
              const entry = import_xml_builder.XmlNode.of(mapTraits.xmlName ?? mapMember.getMemberName());
              addKeyValue(entry, key, val);
              container.addChildNode(entry);
            }
          }
        } else {
          let mapNode;
          if (!containerIsMap) {
            mapNode = import_xml_builder.XmlNode.of(mapTraits.xmlName ?? mapMember.getMemberName());
            if (xmlns) {
              mapNode.addAttribute(xmlnsAttr, xmlns);
            }
            container.addChildNode(mapNode);
          }
          for (const [key, val] of Object.entries(map)) {
            if (sparse || val != null) {
              const entry = import_xml_builder.XmlNode.of("entry");
              addKeyValue(entry, key, val);
              (containerIsMap ? container : mapNode).addChildNode(entry);
            }
          }
        }
      }
      writeSimple(_schema, value) {
        if (null === value) {
          throw new Error("@aws-sdk/core/protocols - (XML serializer) cannot write null value.");
        }
        const ns = NormalizedSchema.of(_schema);
        let nodeContents = null;
        if (value && typeof value === "object") {
          if (ns.isBlobSchema()) {
            nodeContents = (this.serdeContext?.base64Encoder ?? import_util_base645.toBase64)(value);
          } else if (ns.isTimestampSchema() && value instanceof Date) {
            const options = this.settings.timestampFormat;
            const format = options.useTrait
              ? ns.getSchema() === SCHEMA.TIMESTAMP_DEFAULT
                ? options.default
                : (ns.getSchema() ?? options.default)
              : options.default;
            switch (format) {
              case SCHEMA.TIMESTAMP_DATE_TIME:
                nodeContents = value.toISOString().replace(".000Z", "Z");
                break;
              case SCHEMA.TIMESTAMP_HTTP_DATE:
                nodeContents = (0, import_smithy_client6.dateToUtcString)(value);
                break;
              case SCHEMA.TIMESTAMP_EPOCH_SECONDS:
                nodeContents = String(value.getTime() / 1e3);
                break;
              default:
                console.warn("Missing timestamp format, using http date", value);
                nodeContents = (0, import_smithy_client6.dateToUtcString)(value);
                break;
            }
          } else if (ns.isBigDecimalSchema() && value) {
            if (value instanceof NumericValue2) {
              return value.string;
            }
            return String(value);
          } else if (ns.isMapSchema() || ns.isListSchema()) {
            throw new Error(
              "@aws-sdk/core/protocols - xml serializer, cannot call _write() on List/Map schema, call writeList or writeMap() instead.",
            );
          } else {
            throw new Error(
              `@aws-sdk/core/protocols - xml serializer, unhandled schema type for object value and schema: ${ns.getName(true)}`,
            );
          }
        }
        if (
          ns.isStringSchema() ||
          ns.isBooleanSchema() ||
          ns.isNumericSchema() ||
          ns.isBigIntegerSchema() ||
          ns.isBigDecimalSchema()
        ) {
          nodeContents = String(value);
        }
        if (nodeContents === null) {
          throw new Error(`Unhandled schema-value pair ${ns.getName(true)}=${value}`);
        }
        return nodeContents;
      }
      writeSimpleInto(_schema, value, into, parentXmlns) {
        const nodeContents = this.writeSimple(_schema, value);
        const ns = NormalizedSchema.of(_schema);
        const content = new import_xml_builder.XmlText(nodeContents);
        const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(ns, parentXmlns);
        if (xmlns) {
          into.addAttribute(xmlnsAttr, xmlns);
        }
        into.addChildNode(content);
      }
      getXmlnsAttribute(ns, parentXmlns) {
        const traits = ns.getMergedTraits();
        const [prefix, xmlns] = traits.xmlNamespace ?? [];
        if (xmlns && xmlns !== parentXmlns) {
          return [prefix ? `xmlns:${prefix}` : "xmlns", xmlns];
        }
        return [void 0, void 0];
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlCodec.js
var XmlCodec;
var init_XmlCodec = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlCodec.js"() {
    init_ConfigurableSerdeContext();
    init_XmlShapeDeserializer();
    init_XmlShapeSerializer();
    XmlCodec = class extends SerdeContextConfig {
      constructor(settings) {
        super();
        __publicField(this, "settings");
        this.settings = settings;
      }
      createSerializer() {
        const serializer = new XmlShapeSerializer(this.settings);
        serializer.setSerdeContext(this.serdeContext);
        return serializer;
      }
      createDeserializer() {
        const deserializer = new XmlShapeDeserializer(this.settings);
        deserializer.setSerdeContext(this.serdeContext);
        return deserializer;
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/AwsRestXmlProtocol.js
var import_util_body_length_browser4, AwsRestXmlProtocol;
var init_AwsRestXmlProtocol = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/AwsRestXmlProtocol.js"() {
    init_protocols();
    init_schema();
    import_util_body_length_browser4 = __toESM(require_dist_cjs21());
    init_parseXmlBody();
    init_XmlCodec();
    AwsRestXmlProtocol = class extends HttpBindingProtocol {
      constructor(options) {
        super(options);
        __publicField(this, "codec");
        __publicField(this, "serializer");
        __publicField(this, "deserializer");
        const settings = {
          timestampFormat: {
            useTrait: true,
            default: SCHEMA.TIMESTAMP_DATE_TIME,
          },
          httpBindings: true,
          xmlNamespace: options.xmlNamespace,
          serviceNamespace: options.defaultNamespace,
        };
        this.codec = new XmlCodec(settings);
        this.serializer = new HttpInterceptingShapeSerializer(this.codec.createSerializer(), settings);
        this.deserializer = new HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), settings);
      }
      getPayloadCodec() {
        return this.codec;
      }
      getShapeId() {
        return "aws.protocols#restXml";
      }
      async serializeRequest(operationSchema, input, context) {
        const request = await super.serializeRequest(operationSchema, input, context);
        const ns = NormalizedSchema.of(operationSchema.input);
        const members = ns.getMemberSchemas();
        request.path =
          String(request.path)
            .split("/")
            .filter((segment) => {
              return segment !== "{Bucket}";
            })
            .join("/") || "/";
        if (!request.headers["content-type"]) {
          const httpPayloadMember = Object.values(members).find((m) => {
            return !!m.getMergedTraits().httpPayload;
          });
          if (httpPayloadMember) {
            const mediaType = httpPayloadMember.getMergedTraits().mediaType;
            if (mediaType) {
              request.headers["content-type"] = mediaType;
            } else if (httpPayloadMember.isStringSchema()) {
              request.headers["content-type"] = "text/plain";
            } else if (httpPayloadMember.isBlobSchema()) {
              request.headers["content-type"] = "application/octet-stream";
            } else {
              request.headers["content-type"] = "application/xml";
            }
          } else if (!ns.isUnitSchema()) {
            const hasBody = Object.values(members).find((m) => {
              const { httpQuery, httpQueryParams, httpHeader, httpLabel, httpPrefixHeaders } = m.getMergedTraits();
              return !httpQuery && !httpQueryParams && !httpHeader && !httpLabel && httpPrefixHeaders === void 0;
            });
            if (hasBody) {
              request.headers["content-type"] = "application/xml";
            }
          }
        }
        if (request.headers["content-type"] === "application/xml") {
          if (typeof request.body === "string") {
            request.body = '<?xml version="1.0" encoding="UTF-8"?>' + request.body;
          }
        }
        if (request.body) {
          try {
            request.headers["content-length"] = String(
              (0, import_util_body_length_browser4.calculateBodyLength)(request.body),
            );
          } catch (e) {}
        }
        return request;
      }
      async deserializeResponse(operationSchema, context, response) {
        return super.deserializeResponse(operationSchema, context, response);
      }
      async handleError(operationSchema, context, response, dataObject, metadata) {
        const errorIdentifier = loadRestXmlErrorCode(response, dataObject) ?? "Unknown";
        let namespace = this.options.defaultNamespace;
        let errorName = errorIdentifier;
        if (errorIdentifier.includes("#")) {
          [namespace, errorName] = errorIdentifier.split("#");
        }
        const registry = TypeRegistry.for(namespace);
        let errorSchema;
        try {
          errorSchema = registry.getSchema(errorIdentifier);
        } catch (e) {
          const baseExceptionSchema = TypeRegistry.for("smithy.ts.sdk.synthetic." + namespace).getBaseException();
          if (baseExceptionSchema) {
            const ErrorCtor = baseExceptionSchema.ctor;
            throw Object.assign(new ErrorCtor(errorName), dataObject);
          }
          throw new Error(errorName);
        }
        const ns = NormalizedSchema.of(errorSchema);
        const message =
          dataObject.Error?.message ??
          dataObject.Error?.Message ??
          dataObject.message ??
          dataObject.Message ??
          "Unknown";
        const exception = new errorSchema.ctor(message);
        await this.deserializeHttpMessage(errorSchema, context, response, dataObject);
        const output = {};
        for (const [name, member] of ns.structIterator()) {
          const target = member.getMergedTraits().xmlName ?? name;
          const value = dataObject.Error?.[target] ?? dataObject[target];
          output[name] = this.codec.createDeserializer().readSchema(member, value);
        }
        Object.assign(exception, {
          $metadata: metadata,
          $response: response,
          $fault: ns.getMergedTraits().error,
          message,
          ...output,
        });
        throw exception;
      }
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/index.js
var init_protocols2 = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/submodules/protocols/index.js"() {
    init_coercing_serializers();
    init_AwsJson1_0Protocol();
    init_AwsJson1_1Protocol();
    init_AwsJsonRpcProtocol();
    init_AwsRestJsonProtocol();
    init_JsonCodec();
    init_JsonShapeDeserializer();
    init_JsonShapeSerializer();
    init_awsExpectUnion();
    init_parseJsonBody();
    init_AwsEc2QueryProtocol();
    init_AwsQueryProtocol();
    init_AwsRestXmlProtocol();
    init_XmlCodec();
    init_XmlShapeDeserializer();
    init_XmlShapeSerializer();
    init_parseXmlBody();
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/index.js
var dist_es_exports2 = {};
__export(dist_es_exports2, {
  AWSSDKSigV4Signer: () => AWSSDKSigV4Signer,
  AwsEc2QueryProtocol: () => AwsEc2QueryProtocol,
  AwsJson1_0Protocol: () => AwsJson1_0Protocol,
  AwsJson1_1Protocol: () => AwsJson1_1Protocol,
  AwsJsonRpcProtocol: () => AwsJsonRpcProtocol,
  AwsQueryProtocol: () => AwsQueryProtocol,
  AwsRestJsonProtocol: () => AwsRestJsonProtocol,
  AwsRestXmlProtocol: () => AwsRestXmlProtocol,
  AwsSdkSigV4ASigner: () => AwsSdkSigV4ASigner,
  AwsSdkSigV4Signer: () => AwsSdkSigV4Signer,
  JsonCodec: () => JsonCodec,
  JsonShapeDeserializer: () => JsonShapeDeserializer,
  JsonShapeSerializer: () => JsonShapeSerializer,
  NODE_AUTH_SCHEME_PREFERENCE_OPTIONS: () => NODE_AUTH_SCHEME_PREFERENCE_OPTIONS,
  NODE_SIGV4A_CONFIG_OPTIONS: () => NODE_SIGV4A_CONFIG_OPTIONS,
  XmlCodec: () => XmlCodec,
  XmlShapeDeserializer: () => XmlShapeDeserializer,
  XmlShapeSerializer: () => XmlShapeSerializer,
  _toBool: () => _toBool,
  _toNum: () => _toNum,
  _toStr: () => _toStr,
  awsExpectUnion: () => awsExpectUnion,
  emitWarningIfUnsupportedVersion: () => emitWarningIfUnsupportedVersion,
  getBearerTokenEnvKey: () => getBearerTokenEnvKey,
  loadRestJsonErrorCode: () => loadRestJsonErrorCode,
  loadRestXmlErrorCode: () => loadRestXmlErrorCode,
  parseJsonBody: () => parseJsonBody,
  parseJsonErrorBody: () => parseJsonErrorBody,
  parseXmlBody: () => parseXmlBody,
  parseXmlErrorBody: () => parseXmlErrorBody,
  resolveAWSSDKSigV4Config: () => resolveAWSSDKSigV4Config,
  resolveAwsSdkSigV4AConfig: () => resolveAwsSdkSigV4AConfig,
  resolveAwsSdkSigV4Config: () => resolveAwsSdkSigV4Config,
  setCredentialFeature: () => setCredentialFeature,
  setFeature: () => setFeature2,
  setTokenFeature: () => setTokenFeature,
  state: () => state,
  validateSigningProperties: () => validateSigningProperties,
});
var init_dist_es2 = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/core/dist-es/index.js"() {
    init_client();
    init_httpAuthSchemes2();
    init_protocols2();
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/middleware-user-agent/dist-cjs/index.js
var require_dist_cjs25 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/middleware-user-agent/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var index_exports = {};
    __export2(index_exports, {
      DEFAULT_UA_APP_ID: () => DEFAULT_UA_APP_ID,
      getUserAgentMiddlewareOptions: () => getUserAgentMiddlewareOptions,
      getUserAgentPlugin: () => getUserAgentPlugin2,
      resolveUserAgentConfig: () => resolveUserAgentConfig2,
      userAgentMiddleware: () => userAgentMiddleware,
    });
    module2.exports = __toCommonJS2(index_exports);
    var import_core6 = (init_dist_es(), __toCommonJS(dist_es_exports));
    var DEFAULT_UA_APP_ID = void 0;
    function isValidUserAgentAppId(appId) {
      if (appId === void 0) {
        return true;
      }
      return typeof appId === "string" && appId.length <= 50;
    }
    __name(isValidUserAgentAppId, "isValidUserAgentAppId");
    function resolveUserAgentConfig2(input) {
      const normalizedAppIdProvider = (0, import_core6.normalizeProvider)(input.userAgentAppId ?? DEFAULT_UA_APP_ID);
      const { customUserAgent } = input;
      return Object.assign(input, {
        customUserAgent: typeof customUserAgent === "string" ? [[customUserAgent]] : customUserAgent,
        userAgentAppId: /* @__PURE__ */ __name(async () => {
          const appId = await normalizedAppIdProvider();
          if (!isValidUserAgentAppId(appId)) {
            const logger3 = input.logger?.constructor?.name === "NoOpLogger" || !input.logger ? console : input.logger;
            if (typeof appId !== "string") {
              logger3?.warn("userAgentAppId must be a string or undefined.");
            } else if (appId.length > 50) {
              logger3?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
            }
          }
          return appId;
        }, "userAgentAppId"),
      });
    }
    __name(resolveUserAgentConfig2, "resolveUserAgentConfig");
    var import_util_endpoints2 = require_dist_cjs18();
    var import_protocol_http13 = require_dist_cjs3();
    var import_core22 = (init_dist_es2(), __toCommonJS(dist_es_exports2));
    var ACCOUNT_ID_ENDPOINT_REGEX = /\d{12}\.ddb/;
    async function checkFeatures(context, config, args) {
      const request = args.request;
      if (request?.headers?.["smithy-protocol"] === "rpc-v2-cbor") {
        (0, import_core22.setFeature)(context, "PROTOCOL_RPC_V2_CBOR", "M");
      }
      if (typeof config.retryStrategy === "function") {
        const retryStrategy = await config.retryStrategy();
        if (typeof retryStrategy.acquireInitialRetryToken === "function") {
          if (retryStrategy.constructor?.name?.includes("Adaptive")) {
            (0, import_core22.setFeature)(context, "RETRY_MODE_ADAPTIVE", "F");
          } else {
            (0, import_core22.setFeature)(context, "RETRY_MODE_STANDARD", "E");
          }
        } else {
          (0, import_core22.setFeature)(context, "RETRY_MODE_LEGACY", "D");
        }
      }
      if (typeof config.accountIdEndpointMode === "function") {
        const endpointV2 = context.endpointV2;
        if (String(endpointV2?.url?.hostname).match(ACCOUNT_ID_ENDPOINT_REGEX)) {
          (0, import_core22.setFeature)(context, "ACCOUNT_ID_ENDPOINT", "O");
        }
        switch (await config.accountIdEndpointMode?.()) {
          case "disabled":
            (0, import_core22.setFeature)(context, "ACCOUNT_ID_MODE_DISABLED", "Q");
            break;
          case "preferred":
            (0, import_core22.setFeature)(context, "ACCOUNT_ID_MODE_PREFERRED", "P");
            break;
          case "required":
            (0, import_core22.setFeature)(context, "ACCOUNT_ID_MODE_REQUIRED", "R");
            break;
        }
      }
      const identity = context.__smithy_context?.selectedHttpAuthScheme?.identity;
      if (identity?.$source) {
        const credentials = identity;
        if (credentials.accountId) {
          (0, import_core22.setFeature)(context, "RESOLVED_ACCOUNT_ID", "T");
        }
        for (const [key, value] of Object.entries(credentials.$source ?? {})) {
          (0, import_core22.setFeature)(context, key, value);
        }
      }
    }
    __name(checkFeatures, "checkFeatures");
    var USER_AGENT = "user-agent";
    var X_AMZ_USER_AGENT = "x-amz-user-agent";
    var SPACE = " ";
    var UA_NAME_SEPARATOR = "/";
    var UA_NAME_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
    var UA_VALUE_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
    var UA_ESCAPE_CHAR = "-";
    var BYTE_LIMIT = 1024;
    function encodeFeatures(features) {
      let buffer = "";
      for (const key in features) {
        const val = features[key];
        if (buffer.length + val.length + 1 <= BYTE_LIMIT) {
          if (buffer.length) {
            buffer += "," + val;
          } else {
            buffer += val;
          }
          continue;
        }
        break;
      }
      return buffer;
    }
    __name(encodeFeatures, "encodeFeatures");
    var userAgentMiddleware = /* @__PURE__ */ __name(
      (options) => (next, context) => async (args) => {
        const { request } = args;
        if (!import_protocol_http13.HttpRequest.isInstance(request)) {
          return next(args);
        }
        const { headers } = request;
        const userAgent = context?.userAgent?.map(escapeUserAgent) || [];
        const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
        await checkFeatures(context, options, args);
        const awsContext = context;
        defaultUserAgent.push(
          `m/${encodeFeatures(
            Object.assign({}, context.__smithy_context?.features, awsContext.__aws_sdk_context?.features),
          )}`,
        );
        const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
        const appId = await options.userAgentAppId();
        if (appId) {
          defaultUserAgent.push(escapeUserAgent([`app/${appId}`]));
        }
        const prefix = (0, import_util_endpoints2.getUserAgentPrefix)();
        const sdkUserAgentValue = (prefix ? [prefix] : [])
          .concat([...defaultUserAgent, ...userAgent, ...customUserAgent])
          .join(SPACE);
        const normalUAValue = [
          ...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")),
          ...customUserAgent,
        ].join(SPACE);
        if (options.runtime !== "browser") {
          if (normalUAValue) {
            headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT]
              ? `${headers[USER_AGENT]} ${normalUAValue}`
              : normalUAValue;
          }
          headers[USER_AGENT] = sdkUserAgentValue;
        } else {
          headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
        }
        return next({
          ...args,
          request,
        });
      },
      "userAgentMiddleware",
    );
    var escapeUserAgent = /* @__PURE__ */ __name((userAgentPair) => {
      const name = userAgentPair[0]
        .split(UA_NAME_SEPARATOR)
        .map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR))
        .join(UA_NAME_SEPARATOR);
      const version2 = userAgentPair[1]?.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
      const prefixSeparatorIndex = name.indexOf(UA_NAME_SEPARATOR);
      const prefix = name.substring(0, prefixSeparatorIndex);
      let uaName = name.substring(prefixSeparatorIndex + 1);
      if (prefix === "api") {
        uaName = uaName.toLowerCase();
      }
      return [prefix, uaName, version2]
        .filter((item) => item && item.length > 0)
        .reduce((acc, item, index) => {
          switch (index) {
            case 0:
              return item;
            case 1:
              return `${acc}/${item}`;
            default:
              return `${acc}#${item}`;
          }
        }, "");
    }, "escapeUserAgent");
    var getUserAgentMiddlewareOptions = {
      name: "getUserAgentMiddleware",
      step: "build",
      priority: "low",
      tags: ["SET_USER_AGENT", "USER_AGENT"],
      override: true,
    };
    var getUserAgentPlugin2 = /* @__PURE__ */ __name(
      (config) => ({
        applyToStack: /* @__PURE__ */ __name((clientStack) => {
          clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
        }, "applyToStack"),
      }),
      "getUserAgentPlugin",
    );
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/util-user-agent-node/dist-cjs/index.js
var require_dist_cjs26 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/util-user-agent-node/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var index_exports = {};
    __export2(index_exports, {
      NODE_APP_ID_CONFIG_OPTIONS: () => NODE_APP_ID_CONFIG_OPTIONS2,
      UA_APP_ID_ENV_NAME: () => UA_APP_ID_ENV_NAME,
      UA_APP_ID_INI_NAME: () => UA_APP_ID_INI_NAME,
      createDefaultUserAgentProvider: () => createDefaultUserAgentProvider2,
      crtAvailability: () => crtAvailability,
      defaultUserAgent: () => defaultUserAgent,
    });
    module2.exports = __toCommonJS2(index_exports);
    var import_os = require("os");
    var import_process = require("process");
    var crtAvailability = {
      isCrtAvailable: false,
    };
    var isCrtAvailable = /* @__PURE__ */ __name(() => {
      if (crtAvailability.isCrtAvailable) {
        return ["md/crt-avail"];
      }
      return null;
    }, "isCrtAvailable");
    var createDefaultUserAgentProvider2 = /* @__PURE__ */ __name(({ serviceId, clientVersion }) => {
      return async (config) => {
        const sections = [
          // sdk-metadata
          ["aws-sdk-js", clientVersion],
          // ua-metadata
          ["ua", "2.1"],
          // os-metadata
          [`os/${(0, import_os.platform)()}`, (0, import_os.release)()],
          // language-metadata
          // ECMAScript edition doesn't matter in JS, so no version needed.
          ["lang/js"],
          ["md/nodejs", `${import_process.versions.node}`],
        ];
        const crtAvailable = isCrtAvailable();
        if (crtAvailable) {
          sections.push(crtAvailable);
        }
        if (serviceId) {
          sections.push([`api/${serviceId}`, clientVersion]);
        }
        if (import_process.env.AWS_EXECUTION_ENV) {
          sections.push([`exec-env/${import_process.env.AWS_EXECUTION_ENV}`]);
        }
        const appId = await config?.userAgentAppId?.();
        const resolvedUserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
        return resolvedUserAgent;
      };
    }, "createDefaultUserAgentProvider");
    var defaultUserAgent = createDefaultUserAgentProvider2;
    var import_middleware_user_agent2 = require_dist_cjs25();
    var UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
    var UA_APP_ID_INI_NAME = "sdk_ua_app_id";
    var UA_APP_ID_INI_NAME_DEPRECATED = "sdk-ua-app-id";
    var NODE_APP_ID_CONFIG_OPTIONS2 = {
      environmentVariableSelector: /* @__PURE__ */ __name(
        (env2) => env2[UA_APP_ID_ENV_NAME],
        "environmentVariableSelector",
      ),
      configFileSelector: /* @__PURE__ */ __name(
        (profile) => profile[UA_APP_ID_INI_NAME] ?? profile[UA_APP_ID_INI_NAME_DEPRECATED],
        "configFileSelector",
      ),
      default: import_middleware_user_agent2.DEFAULT_UA_APP_ID,
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/hash-node/dist-cjs/index.js
var require_dist_cjs27 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/hash-node/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      Hash: () => Hash2,
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_util_buffer_from = require_dist_cjs6();
    var import_util_utf85 = require_dist_cjs7();
    var import_buffer = require("buffer");
    var import_crypto5 = require("crypto");
    var _a;
    var Hash2 =
      ((_a = class {
        constructor(algorithmIdentifier, secret) {
          this.algorithmIdentifier = algorithmIdentifier;
          this.secret = secret;
          this.reset();
        }
        update(toHash, encoding) {
          this.hash.update((0, import_util_utf85.toUint8Array)(castSourceData(toHash, encoding)));
        }
        digest() {
          return Promise.resolve(this.hash.digest());
        }
        reset() {
          this.hash = this.secret
            ? (0, import_crypto5.createHmac)(this.algorithmIdentifier, castSourceData(this.secret))
            : (0, import_crypto5.createHash)(this.algorithmIdentifier);
        }
      }),
      __name(_a, "Hash"),
      _a);
    function castSourceData(toCast, encoding) {
      if (import_buffer.Buffer.isBuffer(toCast)) {
        return toCast;
      }
      if (typeof toCast === "string") {
        return (0, import_util_buffer_from.fromString)(toCast, encoding);
      }
      if (ArrayBuffer.isView(toCast)) {
        return (0, import_util_buffer_from.fromArrayBuffer)(toCast.buffer, toCast.byteOffset, toCast.byteLength);
      }
      return (0, import_util_buffer_from.fromArrayBuffer)(toCast);
    }
    __name(castSourceData, "castSourceData");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/rng.js
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    import_crypto.default.randomFillSync(rnds8Pool);
    poolPtr = 0;
  }
  return rnds8Pool.slice(poolPtr, (poolPtr += 16));
}
var import_crypto, rnds8Pool, poolPtr;
var init_rng = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/rng.js"() {
    import_crypto = __toESM(require("crypto"));
    rnds8Pool = new Uint8Array(256);
    poolPtr = rnds8Pool.length;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/regex.js
var regex_default;
var init_regex = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/regex.js"() {
    regex_default =
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/validate.js
function validate2(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default;
var init_validate = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/validate.js"() {
    init_regex();
    validate_default = validate2;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/stringify.js
function unsafeStringify(arr, offset = 0) {
  return (
    byteToHex[arr[offset + 0]] +
    byteToHex[arr[offset + 1]] +
    byteToHex[arr[offset + 2]] +
    byteToHex[arr[offset + 3]] +
    "-" +
    byteToHex[arr[offset + 4]] +
    byteToHex[arr[offset + 5]] +
    "-" +
    byteToHex[arr[offset + 6]] +
    byteToHex[arr[offset + 7]] +
    "-" +
    byteToHex[arr[offset + 8]] +
    byteToHex[arr[offset + 9]] +
    "-" +
    byteToHex[arr[offset + 10]] +
    byteToHex[arr[offset + 11]] +
    byteToHex[arr[offset + 12]] +
    byteToHex[arr[offset + 13]] +
    byteToHex[arr[offset + 14]] +
    byteToHex[arr[offset + 15]]
  );
}
function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset);
  if (!validate_default(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
var byteToHex, stringify_default;
var init_stringify = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/stringify.js"() {
    init_validate();
    byteToHex = [];
    for (let i = 0; i < 256; ++i) {
      byteToHex.push((i + 256).toString(16).slice(1));
    }
    stringify_default = stringify;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/v1.js
function v1(options, buf, offset) {
  let i = (buf && offset) || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || rng)();
    if (node == null) {
      node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }
    if (clockseq == null) {
      clockseq = _clockseq = ((seedBytes[6] << 8) | seedBytes[7]) & 16383;
    }
  }
  let msecs = options.msecs !== void 0 ? options.msecs : Date.now();
  let nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
  if (dt < 0 && options.clockseq === void 0) {
    clockseq = (clockseq + 1) & 16383;
  }
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
    nsecs = 0;
  }
  if (nsecs >= 1e4) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }
  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;
  msecs += 122192928e5;
  const tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
  b[i++] = (tl >>> 24) & 255;
  b[i++] = (tl >>> 16) & 255;
  b[i++] = (tl >>> 8) & 255;
  b[i++] = tl & 255;
  const tmh = ((msecs / 4294967296) * 1e4) & 268435455;
  b[i++] = (tmh >>> 8) & 255;
  b[i++] = tmh & 255;
  b[i++] = ((tmh >>> 24) & 15) | 16;
  b[i++] = (tmh >>> 16) & 255;
  b[i++] = (clockseq >>> 8) | 128;
  b[i++] = clockseq & 255;
  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }
  return buf || unsafeStringify(b);
}
var _nodeId, _clockseq, _lastMSecs, _lastNSecs, v1_default;
var init_v1 = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/v1.js"() {
    init_rng();
    init_stringify();
    _lastMSecs = 0;
    _lastNSecs = 0;
    v1_default = v1;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/parse.js
function parse(uuid) {
  if (!validate_default(uuid)) {
    throw TypeError("Invalid UUID");
  }
  let v;
  const arr = new Uint8Array(16);
  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = (v >>> 16) & 255;
  arr[2] = (v >>> 8) & 255;
  arr[3] = v & 255;
  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 255;
  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 255;
  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 255;
  arr[10] = ((v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776) & 255;
  arr[11] = (v / 4294967296) & 255;
  arr[12] = (v >>> 24) & 255;
  arr[13] = (v >>> 16) & 255;
  arr[14] = (v >>> 8) & 255;
  arr[15] = v & 255;
  return arr;
}
var parse_default;
var init_parse = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/parse.js"() {
    init_validate();
    parse_default = parse;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/v35.js
function stringToBytes(str) {
  str = unescape(encodeURIComponent(str));
  const bytes = [];
  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }
  return bytes;
}
function v35(name, version2, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;
    if (typeof value === "string") {
      value = stringToBytes(value);
    }
    if (typeof namespace === "string") {
      namespace = parse_default(namespace);
    }
    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    }
    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = (bytes[6] & 15) | version2;
    bytes[8] = (bytes[8] & 63) | 128;
    if (buf) {
      offset = offset || 0;
      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }
      return buf;
    }
    return unsafeStringify(bytes);
  }
  try {
    generateUUID.name = name;
  } catch (err) {}
  generateUUID.DNS = DNS;
  generateUUID.URL = URL2;
  return generateUUID;
}
var DNS, URL2;
var init_v35 = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/v35.js"() {
    init_stringify();
    init_parse();
    DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    URL2 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/md5.js
function md5(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === "string") {
    bytes = Buffer.from(bytes, "utf8");
  }
  return import_crypto2.default.createHash("md5").update(bytes).digest();
}
var import_crypto2, md5_default;
var init_md5 = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/md5.js"() {
    import_crypto2 = __toESM(require("crypto"));
    md5_default = md5;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/v3.js
var v3, v3_default;
var init_v3 = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/v3.js"() {
    init_v35();
    init_md5();
    v3 = v35("v3", 48, md5_default);
    v3_default = v3;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/native.js
var import_crypto3, native_default;
var init_native = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/native.js"() {
    import_crypto3 = __toESM(require("crypto"));
    native_default = {
      randomUUID: import_crypto3.default.randomUUID,
    };
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/v4.js
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = (rnds[6] & 15) | 64;
  rnds[8] = (rnds[8] & 63) | 128;
  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
var v4_default;
var init_v4 = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/v4.js"() {
    init_native();
    init_rng();
    init_stringify();
    v4_default = v4;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/sha1.js
function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === "string") {
    bytes = Buffer.from(bytes, "utf8");
  }
  return import_crypto4.default.createHash("sha1").update(bytes).digest();
}
var import_crypto4, sha1_default;
var init_sha1 = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/sha1.js"() {
    import_crypto4 = __toESM(require("crypto"));
    sha1_default = sha1;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/v5.js
var v5, v5_default;
var init_v5 = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/v5.js"() {
    init_v35();
    init_sha1();
    v5 = v35("v5", 80, sha1_default);
    v5_default = v5;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/nil.js
var nil_default;
var init_nil = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/nil.js"() {
    nil_default = "00000000-0000-0000-0000-000000000000";
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/version.js
function version(uuid) {
  if (!validate_default(uuid)) {
    throw TypeError("Invalid UUID");
  }
  return parseInt(uuid.slice(14, 15), 16);
}
var version_default;
var init_version = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/version.js"() {
    init_validate();
    version_default = version;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/index.js
var esm_node_exports = {};
__export(esm_node_exports, {
  NIL: () => nil_default,
  parse: () => parse_default,
  stringify: () => stringify_default,
  v1: () => v1_default,
  v3: () => v3_default,
  v4: () => v4_default,
  v5: () => v5_default,
  validate: () => validate_default,
  version: () => version_default,
});
var init_esm_node = __esm({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-node/index.js"() {
    init_v1();
    init_v3();
    init_v4();
    init_v5();
    init_nil();
    init_version();
    init_validate();
    init_stringify();
    init_parse();
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/service-error-classification/dist-cjs/index.js
var require_dist_cjs28 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/service-error-classification/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      isBrowserNetworkError: () => isBrowserNetworkError,
      isClockSkewCorrectedError: () => isClockSkewCorrectedError,
      isClockSkewError: () => isClockSkewError,
      isRetryableByTrait: () => isRetryableByTrait,
      isServerError: () => isServerError,
      isThrottlingError: () => isThrottlingError,
      isTransientError: () => isTransientError,
    });
    module2.exports = __toCommonJS2(src_exports);
    var CLOCK_SKEW_ERROR_CODES = [
      "AuthFailure",
      "InvalidSignatureException",
      "RequestExpired",
      "RequestInTheFuture",
      "RequestTimeTooSkewed",
      "SignatureDoesNotMatch",
    ];
    var THROTTLING_ERROR_CODES = [
      "BandwidthLimitExceeded",
      "EC2ThrottledException",
      "LimitExceededException",
      "PriorRequestNotComplete",
      "ProvisionedThroughputExceededException",
      "RequestLimitExceeded",
      "RequestThrottled",
      "RequestThrottledException",
      "SlowDown",
      "ThrottledException",
      "Throttling",
      "ThrottlingException",
      "TooManyRequestsException",
      "TransactionInProgressException",
      // DynamoDB
    ];
    var TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
    var TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
    var NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];
    var NODEJS_NETWORK_ERROR_CODES = ["EHOSTUNREACH", "ENETUNREACH", "ENOTFOUND"];
    var isRetryableByTrait = /* @__PURE__ */ __name((error) => error.$retryable !== void 0, "isRetryableByTrait");
    var isClockSkewError = /* @__PURE__ */ __name(
      (error) => CLOCK_SKEW_ERROR_CODES.includes(error.name),
      "isClockSkewError",
    );
    var isClockSkewCorrectedError = /* @__PURE__ */ __name(
      (error) => error.$metadata?.clockSkewCorrected,
      "isClockSkewCorrectedError",
    );
    var isBrowserNetworkError = /* @__PURE__ */ __name((error) => {
      const errorMessages = /* @__PURE__ */ new Set([
        "Failed to fetch",
        // Chrome
        "NetworkError when attempting to fetch resource",
        // Firefox
        "The Internet connection appears to be offline",
        // Safari 16
        "Load failed",
        // Safari 17+
        "Network request failed",
        // `cross-fetch`
      ]);
      const isValid = error && error instanceof TypeError;
      if (!isValid) {
        return false;
      }
      return errorMessages.has(error.message);
    }, "isBrowserNetworkError");
    var isThrottlingError = /* @__PURE__ */ __name(
      (error) =>
        error.$metadata?.httpStatusCode === 429 ||
        THROTTLING_ERROR_CODES.includes(error.name) ||
        error.$retryable?.throttling == true,
      "isThrottlingError",
    );
    var isTransientError = /* @__PURE__ */ __name(
      (error, depth = 0) =>
        isClockSkewCorrectedError(error) ||
        TRANSIENT_ERROR_CODES.includes(error.name) ||
        NODEJS_TIMEOUT_ERROR_CODES.includes(error?.code || "") ||
        NODEJS_NETWORK_ERROR_CODES.includes(error?.code || "") ||
        TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0) ||
        isBrowserNetworkError(error) ||
        (error.cause !== void 0 && depth <= 10 && isTransientError(error.cause, depth + 1)),
      "isTransientError",
    );
    var isServerError = /* @__PURE__ */ __name((error) => {
      if (error.$metadata?.httpStatusCode !== void 0) {
        const statusCode = error.$metadata.httpStatusCode;
        if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
          return true;
        }
        return false;
      }
      return false;
    }, "isServerError");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-retry/dist-cjs/index.js
var require_dist_cjs29 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-retry/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      AdaptiveRetryStrategy: () => AdaptiveRetryStrategy,
      ConfiguredRetryStrategy: () => ConfiguredRetryStrategy,
      DEFAULT_MAX_ATTEMPTS: () => DEFAULT_MAX_ATTEMPTS,
      DEFAULT_RETRY_DELAY_BASE: () => DEFAULT_RETRY_DELAY_BASE,
      DEFAULT_RETRY_MODE: () => DEFAULT_RETRY_MODE2,
      DefaultRateLimiter: () => DefaultRateLimiter,
      INITIAL_RETRY_TOKENS: () => INITIAL_RETRY_TOKENS,
      INVOCATION_ID_HEADER: () => INVOCATION_ID_HEADER,
      MAXIMUM_RETRY_DELAY: () => MAXIMUM_RETRY_DELAY,
      NO_RETRY_INCREMENT: () => NO_RETRY_INCREMENT,
      REQUEST_HEADER: () => REQUEST_HEADER,
      RETRY_COST: () => RETRY_COST,
      RETRY_MODES: () => RETRY_MODES,
      StandardRetryStrategy: () => StandardRetryStrategy,
      THROTTLING_RETRY_DELAY_BASE: () => THROTTLING_RETRY_DELAY_BASE,
      TIMEOUT_RETRY_COST: () => TIMEOUT_RETRY_COST,
    });
    module2.exports = __toCommonJS2(src_exports);
    var RETRY_MODES = /* @__PURE__ */ ((RETRY_MODES2) => {
      RETRY_MODES2["STANDARD"] = "standard";
      RETRY_MODES2["ADAPTIVE"] = "adaptive";
      return RETRY_MODES2;
    })(RETRY_MODES || {});
    var DEFAULT_MAX_ATTEMPTS = 3;
    var DEFAULT_RETRY_MODE2 = "standard";
    var import_service_error_classification = require_dist_cjs28();
    var _a;
    var DefaultRateLimiter =
      ((_a = class {
        constructor(options) {
          this.currentCapacity = 0;
          this.enabled = false;
          this.lastMaxRate = 0;
          this.measuredTxRate = 0;
          this.requestCount = 0;
          this.lastTimestamp = 0;
          this.timeWindow = 0;
          this.beta = options?.beta ?? 0.7;
          this.minCapacity = options?.minCapacity ?? 1;
          this.minFillRate = options?.minFillRate ?? 0.5;
          this.scaleConstant = options?.scaleConstant ?? 0.4;
          this.smooth = options?.smooth ?? 0.8;
          const currentTimeInSeconds = this.getCurrentTimeInSeconds();
          this.lastThrottleTime = currentTimeInSeconds;
          this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
          this.fillRate = this.minFillRate;
          this.maxCapacity = this.minCapacity;
        }
        getCurrentTimeInSeconds() {
          return Date.now() / 1e3;
        }
        async getSendToken() {
          return this.acquireTokenBucket(1);
        }
        async acquireTokenBucket(amount) {
          if (!this.enabled) {
            return;
          }
          this.refillTokenBucket();
          if (amount > this.currentCapacity) {
            const delay = ((amount - this.currentCapacity) / this.fillRate) * 1e3;
            await new Promise((resolve) => _a.setTimeoutFn(resolve, delay));
          }
          this.currentCapacity = this.currentCapacity - amount;
        }
        refillTokenBucket() {
          const timestamp = this.getCurrentTimeInSeconds();
          if (!this.lastTimestamp) {
            this.lastTimestamp = timestamp;
            return;
          }
          const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
          this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
          this.lastTimestamp = timestamp;
        }
        updateClientSendingRate(response) {
          let calculatedRate;
          this.updateMeasuredRate();
          if ((0, import_service_error_classification.isThrottlingError)(response)) {
            const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
            this.lastMaxRate = rateToUse;
            this.calculateTimeWindow();
            this.lastThrottleTime = this.getCurrentTimeInSeconds();
            calculatedRate = this.cubicThrottle(rateToUse);
            this.enableTokenBucket();
          } else {
            this.calculateTimeWindow();
            calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
          }
          const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
          this.updateTokenBucketRate(newRate);
        }
        calculateTimeWindow() {
          this.timeWindow = this.getPrecise(Math.pow((this.lastMaxRate * (1 - this.beta)) / this.scaleConstant, 1 / 3));
        }
        cubicThrottle(rateToUse) {
          return this.getPrecise(rateToUse * this.beta);
        }
        cubicSuccess(timestamp) {
          return this.getPrecise(
            this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate,
          );
        }
        enableTokenBucket() {
          this.enabled = true;
        }
        updateTokenBucketRate(newRate) {
          this.refillTokenBucket();
          this.fillRate = Math.max(newRate, this.minFillRate);
          this.maxCapacity = Math.max(newRate, this.minCapacity);
          this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
        }
        updateMeasuredRate() {
          const t = this.getCurrentTimeInSeconds();
          const timeBucket = Math.floor(t * 2) / 2;
          this.requestCount++;
          if (timeBucket > this.lastTxRateBucket) {
            const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
            this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
            this.requestCount = 0;
            this.lastTxRateBucket = timeBucket;
          }
        }
        getPrecise(num) {
          return parseFloat(num.toFixed(8));
        }
      }),
      __name(_a, "DefaultRateLimiter"),
      (_a.setTimeoutFn = setTimeout),
      _a);
    var DEFAULT_RETRY_DELAY_BASE = 100;
    var MAXIMUM_RETRY_DELAY = 20 * 1e3;
    var THROTTLING_RETRY_DELAY_BASE = 500;
    var INITIAL_RETRY_TOKENS = 500;
    var RETRY_COST = 5;
    var TIMEOUT_RETRY_COST = 10;
    var NO_RETRY_INCREMENT = 1;
    var INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
    var REQUEST_HEADER = "amz-sdk-request";
    var getDefaultRetryBackoffStrategy = /* @__PURE__ */ __name(() => {
      let delayBase = DEFAULT_RETRY_DELAY_BASE;
      const computeNextBackoffDelay = /* @__PURE__ */ __name((attempts) => {
        return Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
      }, "computeNextBackoffDelay");
      const setDelayBase = /* @__PURE__ */ __name((delay) => {
        delayBase = delay;
      }, "setDelayBase");
      return {
        computeNextBackoffDelay,
        setDelayBase,
      };
    }, "getDefaultRetryBackoffStrategy");
    var createDefaultRetryToken = /* @__PURE__ */ __name(({ retryDelay, retryCount, retryCost }) => {
      const getRetryCount = /* @__PURE__ */ __name(() => retryCount, "getRetryCount");
      const getRetryDelay = /* @__PURE__ */ __name(() => Math.min(MAXIMUM_RETRY_DELAY, retryDelay), "getRetryDelay");
      const getRetryCost = /* @__PURE__ */ __name(() => retryCost, "getRetryCost");
      return {
        getRetryCount,
        getRetryDelay,
        getRetryCost,
      };
    }, "createDefaultRetryToken");
    var _a2;
    var StandardRetryStrategy =
      ((_a2 = class {
        constructor(maxAttempts) {
          this.maxAttempts = maxAttempts;
          this.mode = "standard";
          this.capacity = INITIAL_RETRY_TOKENS;
          this.retryBackoffStrategy = getDefaultRetryBackoffStrategy();
          this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async acquireInitialRetryToken(retryTokenScope) {
          return createDefaultRetryToken({
            retryDelay: DEFAULT_RETRY_DELAY_BASE,
            retryCount: 0,
          });
        }
        async refreshRetryTokenForRetry(token, errorInfo) {
          const maxAttempts = await this.getMaxAttempts();
          if (this.shouldRetry(token, errorInfo, maxAttempts)) {
            const errorType = errorInfo.errorType;
            this.retryBackoffStrategy.setDelayBase(
              errorType === "THROTTLING" ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE,
            );
            const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
            const retryDelay = errorInfo.retryAfterHint
              ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType)
              : delayFromErrorType;
            const capacityCost = this.getCapacityCost(errorType);
            this.capacity -= capacityCost;
            return createDefaultRetryToken({
              retryDelay,
              retryCount: token.getRetryCount() + 1,
              retryCost: capacityCost,
            });
          }
          throw new Error("No retry token available");
        }
        recordSuccess(token) {
          this.capacity = Math.max(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
        }
        /**
         * @returns the current available retry capacity.
         *
         * This number decreases when retries are executed and refills when requests or retries succeed.
         */
        getCapacity() {
          return this.capacity;
        }
        async getMaxAttempts() {
          try {
            return await this.maxAttemptsProvider();
          } catch (error) {
            console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
            return DEFAULT_MAX_ATTEMPTS;
          }
        }
        shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
          const attempts = tokenToRenew.getRetryCount() + 1;
          return (
            attempts < maxAttempts &&
            this.capacity >= this.getCapacityCost(errorInfo.errorType) &&
            this.isRetryableError(errorInfo.errorType)
          );
        }
        getCapacityCost(errorType) {
          return errorType === "TRANSIENT" ? TIMEOUT_RETRY_COST : RETRY_COST;
        }
        isRetryableError(errorType) {
          return errorType === "THROTTLING" || errorType === "TRANSIENT";
        }
      }),
      __name(_a2, "StandardRetryStrategy"),
      _a2);
    var _a3;
    var AdaptiveRetryStrategy =
      ((_a3 = class {
        constructor(maxAttemptsProvider, options) {
          this.maxAttemptsProvider = maxAttemptsProvider;
          this.mode = "adaptive";
          const { rateLimiter } = options ?? {};
          this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
          this.standardRetryStrategy = new StandardRetryStrategy(maxAttemptsProvider);
        }
        async acquireInitialRetryToken(retryTokenScope) {
          await this.rateLimiter.getSendToken();
          return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
        }
        async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
          this.rateLimiter.updateClientSendingRate(errorInfo);
          return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
        }
        recordSuccess(token) {
          this.rateLimiter.updateClientSendingRate({});
          this.standardRetryStrategy.recordSuccess(token);
        }
      }),
      __name(_a3, "AdaptiveRetryStrategy"),
      _a3);
    var _a4;
    var ConfiguredRetryStrategy =
      ((_a4 = class extends StandardRetryStrategy {
        /**
         * @param maxAttempts - the maximum number of retry attempts allowed.
         *                      e.g., if set to 3, then 4 total requests are possible.
         * @param computeNextBackoffDelay - a millisecond delay for each retry or a function that takes the retry attempt
         *                                  and returns the delay.
         *
         * @example exponential backoff.
         * ```js
         * new Client({
         *   retryStrategy: new ConfiguredRetryStrategy(3, (attempt) => attempt ** 2)
         * });
         * ```
         * @example constant delay.
         * ```js
         * new Client({
         *   retryStrategy: new ConfiguredRetryStrategy(3, 2000)
         * });
         * ```
         */
        constructor(maxAttempts, computeNextBackoffDelay = DEFAULT_RETRY_DELAY_BASE) {
          super(typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts);
          if (typeof computeNextBackoffDelay === "number") {
            this.computeNextBackoffDelay = () => computeNextBackoffDelay;
          } else {
            this.computeNextBackoffDelay = computeNextBackoffDelay;
          }
        }
        async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
          const token = await super.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
          token.getRetryDelay = () => this.computeNextBackoffDelay(token.getRetryCount());
          return token;
        }
      }),
      __name(_a4, "ConfiguredRetryStrategy"),
      _a4);
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-retry/dist-cjs/isStreamingPayload/isStreamingPayload.js
var require_isStreamingPayload = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-retry/dist-cjs/isStreamingPayload/isStreamingPayload.js"(
    exports2,
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isStreamingPayload = void 0;
    var stream_1 = require("stream");
    var isStreamingPayload = (request) =>
      (request === null || request === void 0 ? void 0 : request.body) instanceof stream_1.Readable ||
      (typeof ReadableStream !== "undefined" &&
        (request === null || request === void 0 ? void 0 : request.body) instanceof ReadableStream);
    exports2.isStreamingPayload = isStreamingPayload;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-retry/dist-cjs/index.js
var require_dist_cjs30 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-retry/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      AdaptiveRetryStrategy: () => AdaptiveRetryStrategy,
      CONFIG_MAX_ATTEMPTS: () => CONFIG_MAX_ATTEMPTS,
      CONFIG_RETRY_MODE: () => CONFIG_RETRY_MODE,
      ENV_MAX_ATTEMPTS: () => ENV_MAX_ATTEMPTS,
      ENV_RETRY_MODE: () => ENV_RETRY_MODE,
      NODE_MAX_ATTEMPT_CONFIG_OPTIONS: () => NODE_MAX_ATTEMPT_CONFIG_OPTIONS2,
      NODE_RETRY_MODE_CONFIG_OPTIONS: () => NODE_RETRY_MODE_CONFIG_OPTIONS2,
      StandardRetryStrategy: () => StandardRetryStrategy,
      defaultDelayDecider: () => defaultDelayDecider,
      defaultRetryDecider: () => defaultRetryDecider,
      getOmitRetryHeadersPlugin: () => getOmitRetryHeadersPlugin,
      getRetryAfterHint: () => getRetryAfterHint,
      getRetryPlugin: () => getRetryPlugin2,
      omitRetryHeadersMiddleware: () => omitRetryHeadersMiddleware,
      omitRetryHeadersMiddlewareOptions: () => omitRetryHeadersMiddlewareOptions,
      resolveRetryConfig: () => resolveRetryConfig2,
      retryMiddleware: () => retryMiddleware,
      retryMiddlewareOptions: () => retryMiddlewareOptions,
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_protocol_http13 = require_dist_cjs3();
    var import_uuid = (init_esm_node(), __toCommonJS(esm_node_exports));
    var import_util_retry2 = require_dist_cjs29();
    var getDefaultRetryQuota = /* @__PURE__ */ __name((initialRetryTokens, options) => {
      const MAX_CAPACITY = initialRetryTokens;
      const noRetryIncrement = options?.noRetryIncrement ?? import_util_retry2.NO_RETRY_INCREMENT;
      const retryCost = options?.retryCost ?? import_util_retry2.RETRY_COST;
      const timeoutRetryCost = options?.timeoutRetryCost ?? import_util_retry2.TIMEOUT_RETRY_COST;
      let availableCapacity = initialRetryTokens;
      const getCapacityAmount = /* @__PURE__ */ __name(
        (error) => (error.name === "TimeoutError" ? timeoutRetryCost : retryCost),
        "getCapacityAmount",
      );
      const hasRetryTokens = /* @__PURE__ */ __name(
        (error) => getCapacityAmount(error) <= availableCapacity,
        "hasRetryTokens",
      );
      const retrieveRetryTokens = /* @__PURE__ */ __name((error) => {
        if (!hasRetryTokens(error)) {
          throw new Error("No retry token available");
        }
        const capacityAmount = getCapacityAmount(error);
        availableCapacity -= capacityAmount;
        return capacityAmount;
      }, "retrieveRetryTokens");
      const releaseRetryTokens = /* @__PURE__ */ __name((capacityReleaseAmount) => {
        availableCapacity += capacityReleaseAmount ?? noRetryIncrement;
        availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);
      }, "releaseRetryTokens");
      return Object.freeze({
        hasRetryTokens,
        retrieveRetryTokens,
        releaseRetryTokens,
      });
    }, "getDefaultRetryQuota");
    var defaultDelayDecider = /* @__PURE__ */ __name(
      (delayBase, attempts) =>
        Math.floor(Math.min(import_util_retry2.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase)),
      "defaultDelayDecider",
    );
    var import_service_error_classification = require_dist_cjs28();
    var defaultRetryDecider = /* @__PURE__ */ __name((error) => {
      if (!error) {
        return false;
      }
      return (
        (0, import_service_error_classification.isRetryableByTrait)(error) ||
        (0, import_service_error_classification.isClockSkewError)(error) ||
        (0, import_service_error_classification.isThrottlingError)(error) ||
        (0, import_service_error_classification.isTransientError)(error)
      );
    }, "defaultRetryDecider");
    var asSdkError = /* @__PURE__ */ __name((error) => {
      if (error instanceof Error) return error;
      if (error instanceof Object) return Object.assign(new Error(), error);
      if (typeof error === "string") return new Error(error);
      return new Error(`AWS SDK error wrapper for ${error}`);
    }, "asSdkError");
    var _a;
    var StandardRetryStrategy =
      ((_a = class {
        constructor(maxAttemptsProvider, options) {
          this.maxAttemptsProvider = maxAttemptsProvider;
          this.mode = import_util_retry2.RETRY_MODES.STANDARD;
          this.retryDecider = options?.retryDecider ?? defaultRetryDecider;
          this.delayDecider = options?.delayDecider ?? defaultDelayDecider;
          this.retryQuota = options?.retryQuota ?? getDefaultRetryQuota(import_util_retry2.INITIAL_RETRY_TOKENS);
        }
        shouldRetry(error, attempts, maxAttempts) {
          return attempts < maxAttempts && this.retryDecider(error) && this.retryQuota.hasRetryTokens(error);
        }
        async getMaxAttempts() {
          let maxAttempts;
          try {
            maxAttempts = await this.maxAttemptsProvider();
          } catch (error) {
            maxAttempts = import_util_retry2.DEFAULT_MAX_ATTEMPTS;
          }
          return maxAttempts;
        }
        async retry(next, args, options) {
          let retryTokenAmount;
          let attempts = 0;
          let totalDelay = 0;
          const maxAttempts = await this.getMaxAttempts();
          const { request } = args;
          if (import_protocol_http13.HttpRequest.isInstance(request)) {
            request.headers[import_util_retry2.INVOCATION_ID_HEADER] = (0, import_uuid.v4)();
          }
          while (true) {
            try {
              if (import_protocol_http13.HttpRequest.isInstance(request)) {
                request.headers[import_util_retry2.REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
              }
              if (options?.beforeRequest) {
                await options.beforeRequest();
              }
              const { response, output } = await next(args);
              if (options?.afterRequest) {
                options.afterRequest(response);
              }
              this.retryQuota.releaseRetryTokens(retryTokenAmount);
              output.$metadata.attempts = attempts + 1;
              output.$metadata.totalRetryDelay = totalDelay;
              return { response, output };
            } catch (e) {
              const err = asSdkError(e);
              attempts++;
              if (this.shouldRetry(err, attempts, maxAttempts)) {
                retryTokenAmount = this.retryQuota.retrieveRetryTokens(err);
                const delayFromDecider = this.delayDecider(
                  (0, import_service_error_classification.isThrottlingError)(err)
                    ? import_util_retry2.THROTTLING_RETRY_DELAY_BASE
                    : import_util_retry2.DEFAULT_RETRY_DELAY_BASE,
                  attempts,
                );
                const delayFromResponse = getDelayFromRetryAfterHeader(err.$response);
                const delay = Math.max(delayFromResponse || 0, delayFromDecider);
                totalDelay += delay;
                await new Promise((resolve) => setTimeout(resolve, delay));
                continue;
              }
              if (!err.$metadata) {
                err.$metadata = {};
              }
              err.$metadata.attempts = attempts;
              err.$metadata.totalRetryDelay = totalDelay;
              throw err;
            }
          }
        }
      }),
      __name(_a, "StandardRetryStrategy"),
      _a);
    var getDelayFromRetryAfterHeader = /* @__PURE__ */ __name((response) => {
      if (!import_protocol_http13.HttpResponse.isInstance(response)) return;
      const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
      if (!retryAfterHeaderName) return;
      const retryAfter = response.headers[retryAfterHeaderName];
      const retryAfterSeconds = Number(retryAfter);
      if (!Number.isNaN(retryAfterSeconds)) return retryAfterSeconds * 1e3;
      const retryAfterDate = new Date(retryAfter);
      return retryAfterDate.getTime() - Date.now();
    }, "getDelayFromRetryAfterHeader");
    var _a2;
    var AdaptiveRetryStrategy =
      ((_a2 = class extends StandardRetryStrategy {
        constructor(maxAttemptsProvider, options) {
          const { rateLimiter, ...superOptions } = options ?? {};
          super(maxAttemptsProvider, superOptions);
          this.rateLimiter = rateLimiter ?? new import_util_retry2.DefaultRateLimiter();
          this.mode = import_util_retry2.RETRY_MODES.ADAPTIVE;
        }
        async retry(next, args) {
          return super.retry(next, args, {
            beforeRequest: async () => {
              return this.rateLimiter.getSendToken();
            },
            afterRequest: (response) => {
              this.rateLimiter.updateClientSendingRate(response);
            },
          });
        }
      }),
      __name(_a2, "AdaptiveRetryStrategy"),
      _a2);
    var import_util_middleware6 = require_dist_cjs2();
    var ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
    var CONFIG_MAX_ATTEMPTS = "max_attempts";
    var NODE_MAX_ATTEMPT_CONFIG_OPTIONS2 = {
      environmentVariableSelector: (env) => {
        const value = env[ENV_MAX_ATTEMPTS];
        if (!value) return void 0;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
          throw new Error(`Environment variable ${ENV_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
      },
      configFileSelector: (profile) => {
        const value = profile[CONFIG_MAX_ATTEMPTS];
        if (!value) return void 0;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
          throw new Error(`Shared config file entry ${CONFIG_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
      },
      default: import_util_retry2.DEFAULT_MAX_ATTEMPTS,
    };
    var resolveRetryConfig2 = /* @__PURE__ */ __name((input) => {
      const { retryStrategy, retryMode: _retryMode, maxAttempts: _maxAttempts } = input;
      const maxAttempts = (0, import_util_middleware6.normalizeProvider)(
        _maxAttempts ?? import_util_retry2.DEFAULT_MAX_ATTEMPTS,
      );
      return Object.assign(input, {
        maxAttempts,
        retryStrategy: async () => {
          if (retryStrategy) {
            return retryStrategy;
          }
          const retryMode = await (0, import_util_middleware6.normalizeProvider)(_retryMode)();
          if (retryMode === import_util_retry2.RETRY_MODES.ADAPTIVE) {
            return new import_util_retry2.AdaptiveRetryStrategy(maxAttempts);
          }
          return new import_util_retry2.StandardRetryStrategy(maxAttempts);
        },
      });
    }, "resolveRetryConfig");
    var ENV_RETRY_MODE = "AWS_RETRY_MODE";
    var CONFIG_RETRY_MODE = "retry_mode";
    var NODE_RETRY_MODE_CONFIG_OPTIONS2 = {
      environmentVariableSelector: (env) => env[ENV_RETRY_MODE],
      configFileSelector: (profile) => profile[CONFIG_RETRY_MODE],
      default: import_util_retry2.DEFAULT_RETRY_MODE,
    };
    var omitRetryHeadersMiddleware = /* @__PURE__ */ __name(
      () => (next) => async (args) => {
        const { request } = args;
        if (import_protocol_http13.HttpRequest.isInstance(request)) {
          delete request.headers[import_util_retry2.INVOCATION_ID_HEADER];
          delete request.headers[import_util_retry2.REQUEST_HEADER];
        }
        return next(args);
      },
      "omitRetryHeadersMiddleware",
    );
    var omitRetryHeadersMiddlewareOptions = {
      name: "omitRetryHeadersMiddleware",
      tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"],
      relation: "before",
      toMiddleware: "awsAuthMiddleware",
      override: true,
    };
    var getOmitRetryHeadersPlugin = /* @__PURE__ */ __name(
      (options) => ({
        applyToStack: (clientStack) => {
          clientStack.addRelativeTo(omitRetryHeadersMiddleware(), omitRetryHeadersMiddlewareOptions);
        },
      }),
      "getOmitRetryHeadersPlugin",
    );
    var import_smithy_client18 = require_dist_cjs23();
    var import_isStreamingPayload = require_isStreamingPayload();
    var retryMiddleware = /* @__PURE__ */ __name(
      (options) => (next, context) => async (args) => {
        let retryStrategy = await options.retryStrategy();
        const maxAttempts = await options.maxAttempts();
        if (isRetryStrategyV2(retryStrategy)) {
          retryStrategy = retryStrategy;
          let retryToken = await retryStrategy.acquireInitialRetryToken(context["partition_id"]);
          let lastError = new Error();
          let attempts = 0;
          let totalRetryDelay = 0;
          const { request } = args;
          const isRequest = import_protocol_http13.HttpRequest.isInstance(request);
          if (isRequest) {
            request.headers[import_util_retry2.INVOCATION_ID_HEADER] = (0, import_uuid.v4)();
          }
          while (true) {
            try {
              if (isRequest) {
                request.headers[import_util_retry2.REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
              }
              const { response, output } = await next(args);
              retryStrategy.recordSuccess(retryToken);
              output.$metadata.attempts = attempts + 1;
              output.$metadata.totalRetryDelay = totalRetryDelay;
              return { response, output };
            } catch (e) {
              const retryErrorInfo = getRetryErrorInfo(e);
              lastError = asSdkError(e);
              if (isRequest && (0, import_isStreamingPayload.isStreamingPayload)(request)) {
                (context.logger instanceof import_smithy_client18.NoOpLogger ? console : context.logger)?.warn(
                  "An error was encountered in a non-retryable streaming request.",
                );
                throw lastError;
              }
              try {
                retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
              } catch (refreshError) {
                if (!lastError.$metadata) {
                  lastError.$metadata = {};
                }
                lastError.$metadata.attempts = attempts + 1;
                lastError.$metadata.totalRetryDelay = totalRetryDelay;
                throw lastError;
              }
              attempts = retryToken.getRetryCount();
              const delay = retryToken.getRetryDelay();
              totalRetryDelay += delay;
              await new Promise((resolve) => setTimeout(resolve, delay));
            }
          }
        } else {
          retryStrategy = retryStrategy;
          if (retryStrategy?.mode)
            context.userAgent = [...(context.userAgent || []), ["cfg/retry-mode", retryStrategy.mode]];
          return retryStrategy.retry(next, args);
        }
      },
      "retryMiddleware",
    );
    var isRetryStrategyV2 = /* @__PURE__ */ __name(
      (retryStrategy) =>
        typeof retryStrategy.acquireInitialRetryToken !== "undefined" &&
        typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" &&
        typeof retryStrategy.recordSuccess !== "undefined",
      "isRetryStrategyV2",
    );
    var getRetryErrorInfo = /* @__PURE__ */ __name((error) => {
      const errorInfo = {
        error,
        errorType: getRetryErrorType(error),
      };
      const retryAfterHint = getRetryAfterHint(error.$response);
      if (retryAfterHint) {
        errorInfo.retryAfterHint = retryAfterHint;
      }
      return errorInfo;
    }, "getRetryErrorInfo");
    var getRetryErrorType = /* @__PURE__ */ __name((error) => {
      if ((0, import_service_error_classification.isThrottlingError)(error)) return "THROTTLING";
      if ((0, import_service_error_classification.isTransientError)(error)) return "TRANSIENT";
      if ((0, import_service_error_classification.isServerError)(error)) return "SERVER_ERROR";
      return "CLIENT_ERROR";
    }, "getRetryErrorType");
    var retryMiddlewareOptions = {
      name: "retryMiddleware",
      tags: ["RETRY"],
      step: "finalizeRequest",
      priority: "high",
      override: true,
    };
    var getRetryPlugin2 = /* @__PURE__ */ __name(
      (options) => ({
        applyToStack: (clientStack) => {
          clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
        },
      }),
      "getRetryPlugin",
    );
    var getRetryAfterHint = /* @__PURE__ */ __name((response) => {
      if (!import_protocol_http13.HttpResponse.isInstance(response)) return;
      const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
      if (!retryAfterHeaderName) return;
      const retryAfter = response.headers[retryAfterHeaderName];
      const retryAfterSeconds = Number(retryAfter);
      if (!Number.isNaN(retryAfterSeconds)) return new Date(retryAfterSeconds * 1e3);
      const retryAfterDate = new Date(retryAfter);
      return retryAfterDate;
    }, "getRetryAfterHint");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/shared-ini-file-loader/dist-cjs/getHomeDir.js
var require_getHomeDir = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/shared-ini-file-loader/dist-cjs/getHomeDir.js"(
    exports2,
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getHomeDir = void 0;
    var os_1 = require("os");
    var path_1 = require("path");
    var homeDirCache = {};
    var getHomeDirCacheKey = () => {
      if (process && process.geteuid) {
        return `${process.geteuid()}`;
      }
      return "DEFAULT";
    };
    var getHomeDir2 = () => {
      const { HOME, USERPROFILE, HOMEPATH, HOMEDRIVE = `C:${path_1.sep}` } = process.env;
      if (HOME) return HOME;
      if (USERPROFILE) return USERPROFILE;
      if (HOMEPATH) return `${HOMEDRIVE}${HOMEPATH}`;
      const homeDirCacheKey = getHomeDirCacheKey();
      if (!homeDirCache[homeDirCacheKey]) homeDirCache[homeDirCacheKey] = (0, os_1.homedir)();
      return homeDirCache[homeDirCacheKey];
    };
    exports2.getHomeDir = getHomeDir2;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFilepath.js
var require_getSSOTokenFilepath = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFilepath.js"(
    exports2,
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getSSOTokenFilepath = void 0;
    var crypto_1 = require("crypto");
    var path_1 = require("path");
    var getHomeDir_1 = require_getHomeDir();
    var getSSOTokenFilepath2 = (id) => {
      const hasher = (0, crypto_1.createHash)("sha1");
      const cacheName = hasher.update(id).digest("hex");
      return (0, path_1.join)((0, getHomeDir_1.getHomeDir)(), ".aws", "sso", "cache", `${cacheName}.json`);
    };
    exports2.getSSOTokenFilepath = getSSOTokenFilepath2;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFromFile.js
var require_getSSOTokenFromFile = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFromFile.js"(
    exports2,
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getSSOTokenFromFile = void 0;
    var fs_1 = require("fs");
    var getSSOTokenFilepath_1 = require_getSSOTokenFilepath();
    var { readFile } = fs_1.promises;
    var getSSOTokenFromFile2 = async (id) => {
      const ssoTokenFilepath = (0, getSSOTokenFilepath_1.getSSOTokenFilepath)(id);
      const ssoTokenText = await readFile(ssoTokenFilepath, "utf8");
      return JSON.parse(ssoTokenText);
    };
    exports2.getSSOTokenFromFile = getSSOTokenFromFile2;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/shared-ini-file-loader/dist-cjs/slurpFile.js
var require_slurpFile = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/shared-ini-file-loader/dist-cjs/slurpFile.js"(
    exports2,
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.slurpFile = void 0;
    var fs_1 = require("fs");
    var { readFile } = fs_1.promises;
    var filePromisesHash = {};
    var slurpFile = (path, options) => {
      if (!filePromisesHash[path] || (options === null || options === void 0 ? void 0 : options.ignoreCache)) {
        filePromisesHash[path] = readFile(path, "utf8");
      }
      return filePromisesHash[path];
    };
    exports2.slurpFile = slurpFile;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/shared-ini-file-loader/dist-cjs/index.js
var require_dist_cjs31 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/shared-ini-file-loader/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __reExport = (target, mod, secondTarget) => (
      __copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")
    );
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      CONFIG_PREFIX_SEPARATOR: () => CONFIG_PREFIX_SEPARATOR,
      DEFAULT_PROFILE: () => DEFAULT_PROFILE,
      ENV_PROFILE: () => ENV_PROFILE,
      getProfileName: () => getProfileName,
      loadSharedConfigFiles: () => loadSharedConfigFiles,
      loadSsoSessionData: () => loadSsoSessionData,
      parseKnownFiles: () => parseKnownFiles,
    });
    module2.exports = __toCommonJS2(src_exports);
    __reExport(src_exports, require_getHomeDir(), module2.exports);
    var ENV_PROFILE = "AWS_PROFILE";
    var DEFAULT_PROFILE = "default";
    var getProfileName = /* @__PURE__ */ __name(
      (init) => init.profile || process.env[ENV_PROFILE] || DEFAULT_PROFILE,
      "getProfileName",
    );
    __reExport(src_exports, require_getSSOTokenFilepath(), module2.exports);
    __reExport(src_exports, require_getSSOTokenFromFile(), module2.exports);
    var import_types5 = require_dist_cjs();
    var getConfigData = /* @__PURE__ */ __name(
      (data) =>
        Object.entries(data)
          .filter(([key]) => {
            const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
            if (indexOfSeparator === -1) {
              return false;
            }
            return Object.values(import_types5.IniSectionType).includes(key.substring(0, indexOfSeparator));
          })
          .reduce(
            (acc, [key, value]) => {
              const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
              const updatedKey =
                key.substring(0, indexOfSeparator) === import_types5.IniSectionType.PROFILE
                  ? key.substring(indexOfSeparator + 1)
                  : key;
              acc[updatedKey] = value;
              return acc;
            },
            {
              // Populate default profile, if present.
              ...(data.default && { default: data.default }),
            },
          ),
      "getConfigData",
    );
    var import_path = require("path");
    var import_getHomeDir = require_getHomeDir();
    var ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
    var getConfigFilepath = /* @__PURE__ */ __name(
      () =>
        process.env[ENV_CONFIG_PATH] || (0, import_path.join)((0, import_getHomeDir.getHomeDir)(), ".aws", "config"),
      "getConfigFilepath",
    );
    var import_getHomeDir2 = require_getHomeDir();
    var ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
    var getCredentialsFilepath = /* @__PURE__ */ __name(
      () =>
        process.env[ENV_CREDENTIALS_PATH] ||
        (0, import_path.join)((0, import_getHomeDir2.getHomeDir)(), ".aws", "credentials"),
      "getCredentialsFilepath",
    );
    var import_getHomeDir3 = require_getHomeDir();
    var prefixKeyRegex = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/;
    var profileNameBlockList = ["__proto__", "profile __proto__"];
    var parseIni = /* @__PURE__ */ __name((iniData) => {
      const map = {};
      let currentSection;
      let currentSubSection;
      for (const iniLine of iniData.split(/\r?\n/)) {
        const trimmedLine = iniLine.split(/(^|\s)[;#]/)[0].trim();
        const isSection = trimmedLine[0] === "[" && trimmedLine[trimmedLine.length - 1] === "]";
        if (isSection) {
          currentSection = void 0;
          currentSubSection = void 0;
          const sectionName = trimmedLine.substring(1, trimmedLine.length - 1);
          const matches = prefixKeyRegex.exec(sectionName);
          if (matches) {
            const [, prefix, , name] = matches;
            if (Object.values(import_types5.IniSectionType).includes(prefix)) {
              currentSection = [prefix, name].join(CONFIG_PREFIX_SEPARATOR);
            }
          } else {
            currentSection = sectionName;
          }
          if (profileNameBlockList.includes(sectionName)) {
            throw new Error(`Found invalid profile name "${sectionName}"`);
          }
        } else if (currentSection) {
          const indexOfEqualsSign = trimmedLine.indexOf("=");
          if (![0, -1].includes(indexOfEqualsSign)) {
            const [name, value] = [
              trimmedLine.substring(0, indexOfEqualsSign).trim(),
              trimmedLine.substring(indexOfEqualsSign + 1).trim(),
            ];
            if (value === "") {
              currentSubSection = name;
            } else {
              if (currentSubSection && iniLine.trimStart() === iniLine) {
                currentSubSection = void 0;
              }
              map[currentSection] = map[currentSection] || {};
              const key = currentSubSection ? [currentSubSection, name].join(CONFIG_PREFIX_SEPARATOR) : name;
              map[currentSection][key] = value;
            }
          }
        }
      }
      return map;
    }, "parseIni");
    var import_slurpFile = require_slurpFile();
    var swallowError = /* @__PURE__ */ __name(() => ({}), "swallowError");
    var CONFIG_PREFIX_SEPARATOR = ".";
    var loadSharedConfigFiles = /* @__PURE__ */ __name(async (init = {}) => {
      const { filepath = getCredentialsFilepath(), configFilepath = getConfigFilepath() } = init;
      const homeDir = (0, import_getHomeDir3.getHomeDir)();
      const relativeHomeDirPrefix = "~/";
      let resolvedFilepath = filepath;
      if (filepath.startsWith(relativeHomeDirPrefix)) {
        resolvedFilepath = (0, import_path.join)(homeDir, filepath.slice(2));
      }
      let resolvedConfigFilepath = configFilepath;
      if (configFilepath.startsWith(relativeHomeDirPrefix)) {
        resolvedConfigFilepath = (0, import_path.join)(homeDir, configFilepath.slice(2));
      }
      const parsedFiles = await Promise.all([
        (0, import_slurpFile.slurpFile)(resolvedConfigFilepath, {
          ignoreCache: init.ignoreCache,
        })
          .then(parseIni)
          .then(getConfigData)
          .catch(swallowError),
        (0, import_slurpFile.slurpFile)(resolvedFilepath, {
          ignoreCache: init.ignoreCache,
        })
          .then(parseIni)
          .catch(swallowError),
      ]);
      return {
        configFile: parsedFiles[0],
        credentialsFile: parsedFiles[1],
      };
    }, "loadSharedConfigFiles");
    var getSsoSessionData = /* @__PURE__ */ __name(
      (data) =>
        Object.entries(data)
          .filter(([key]) => key.startsWith(import_types5.IniSectionType.SSO_SESSION + CONFIG_PREFIX_SEPARATOR))
          .reduce(
            (acc, [key, value]) => ({ ...acc, [key.substring(key.indexOf(CONFIG_PREFIX_SEPARATOR) + 1)]: value }),
            {},
          ),
      "getSsoSessionData",
    );
    var import_slurpFile2 = require_slurpFile();
    var swallowError2 = /* @__PURE__ */ __name(() => ({}), "swallowError");
    var loadSsoSessionData = /* @__PURE__ */ __name(
      async (init = {}) =>
        (0, import_slurpFile2.slurpFile)(init.configFilepath ?? getConfigFilepath())
          .then(parseIni)
          .then(getSsoSessionData)
          .catch(swallowError2),
      "loadSsoSessionData",
    );
    var mergeConfigFiles = /* @__PURE__ */ __name((...files) => {
      const merged = {};
      for (const file of files) {
        for (const [key, values] of Object.entries(file)) {
          if (merged[key] !== void 0) {
            Object.assign(merged[key], values);
          } else {
            merged[key] = values;
          }
        }
      }
      return merged;
    }, "mergeConfigFiles");
    var parseKnownFiles = /* @__PURE__ */ __name(async (init) => {
      const parsedFiles = await loadSharedConfigFiles(init);
      return mergeConfigFiles(parsedFiles.configFile, parsedFiles.credentialsFile);
    }, "parseKnownFiles");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/node-config-provider/dist-cjs/index.js
var require_dist_cjs32 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/node-config-provider/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      loadConfig: () => loadConfig,
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_property_provider2 = require_dist_cjs19();
    function getSelectorName(functionString) {
      try {
        const constants = new Set(Array.from(functionString.match(/([A-Z_]){3,}/g) ?? []));
        constants.delete("CONFIG");
        constants.delete("CONFIG_PREFIX_SEPARATOR");
        constants.delete("ENV");
        return [...constants].join(", ");
      } catch (e) {
        return functionString;
      }
    }
    __name(getSelectorName, "getSelectorName");
    var fromEnv = /* @__PURE__ */ __name(
      (envVarSelector, options) => async () => {
        try {
          const config = envVarSelector(process.env, options);
          if (config === void 0) {
            throw new Error();
          }
          return config;
        } catch (e) {
          throw new import_property_provider2.CredentialsProviderError(
            e.message || `Not found in ENV: ${getSelectorName(envVarSelector.toString())}`,
            { logger: options?.logger },
          );
        }
      },
      "fromEnv",
    );
    var import_shared_ini_file_loader = require_dist_cjs31();
    var fromSharedConfigFiles = /* @__PURE__ */ __name(
      (configSelector, { preferredFile = "config", ...init } = {}) =>
        async () => {
          const profile = (0, import_shared_ini_file_loader.getProfileName)(init);
          const { configFile, credentialsFile } = await (0, import_shared_ini_file_loader.loadSharedConfigFiles)(init);
          const profileFromCredentials = credentialsFile[profile] || {};
          const profileFromConfig = configFile[profile] || {};
          const mergedProfile =
            preferredFile === "config"
              ? { ...profileFromCredentials, ...profileFromConfig }
              : { ...profileFromConfig, ...profileFromCredentials };
          try {
            const cfgFile = preferredFile === "config" ? configFile : credentialsFile;
            const configValue = configSelector(mergedProfile, cfgFile);
            if (configValue === void 0) {
              throw new Error();
            }
            return configValue;
          } catch (e) {
            throw new import_property_provider2.CredentialsProviderError(
              e.message ||
                `Not found in config files w/ profile [${profile}]: ${getSelectorName(configSelector.toString())}`,
              { logger: init.logger },
            );
          }
        },
      "fromSharedConfigFiles",
    );
    var isFunction = /* @__PURE__ */ __name((func) => typeof func === "function", "isFunction");
    var fromStatic = /* @__PURE__ */ __name(
      (defaultValue) =>
        isFunction(defaultValue)
          ? async () => await defaultValue()
          : (0, import_property_provider2.fromStatic)(defaultValue),
      "fromStatic",
    );
    var loadConfig = /* @__PURE__ */ __name(
      ({ environmentVariableSelector, configFileSelector, default: defaultValue }, configuration = {}) => {
        const { signingName, logger: logger3 } = configuration;
        const envOptions = { signingName, logger: logger3 };
        return (0, import_property_provider2.memoize)(
          (0, import_property_provider2.chain)(
            fromEnv(environmentVariableSelector, envOptions),
            fromSharedConfigFiles(configFileSelector, configuration),
            fromStatic(defaultValue),
          ),
        );
      },
      "loadConfig",
    );
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-body-length-node/dist-cjs/index.js
var require_dist_cjs33 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-body-length-node/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      calculateBodyLength: () => calculateBodyLength6,
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_fs = require("fs");
    var calculateBodyLength6 = /* @__PURE__ */ __name((body) => {
      if (!body) {
        return 0;
      }
      if (typeof body === "string") {
        return Buffer.byteLength(body);
      } else if (typeof body.byteLength === "number") {
        return body.byteLength;
      } else if (typeof body.size === "number") {
        return body.size;
      } else if (typeof body.start === "number" && typeof body.end === "number") {
        return body.end + 1 - body.start;
      } else if (typeof body.path === "string" || Buffer.isBuffer(body.path)) {
        return (0, import_fs.lstatSync)(body.path).size;
      } else if (typeof body.fd === "number") {
        return (0, import_fs.fstatSync)(body.fd).size;
      }
      throw new Error(`Body Length computation failed for ${body}`);
    }, "calculateBodyLength");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-config-provider/dist-cjs/index.js
var require_dist_cjs34 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-config-provider/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      SelectorType: () => SelectorType,
      booleanSelector: () => booleanSelector,
      numberSelector: () => numberSelector,
    });
    module2.exports = __toCommonJS2(src_exports);
    var booleanSelector = /* @__PURE__ */ __name((obj, key, type) => {
      if (!(key in obj)) return void 0;
      if (obj[key] === "true") return true;
      if (obj[key] === "false") return false;
      throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
    }, "booleanSelector");
    var numberSelector = /* @__PURE__ */ __name((obj, key, type) => {
      if (!(key in obj)) return void 0;
      const numberValue = parseInt(obj[key], 10);
      if (Number.isNaN(numberValue)) {
        throw new TypeError(`Cannot load ${type} '${key}'. Expected number, got '${obj[key]}'.`);
      }
      return numberValue;
    }, "numberSelector");
    var SelectorType = /* @__PURE__ */ ((SelectorType2) => {
      SelectorType2["ENV"] = "env";
      SelectorType2["CONFIG"] = "shared config entry";
      return SelectorType2;
    })(SelectorType || {});
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/config-resolver/dist-cjs/index.js
var require_dist_cjs35 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/config-resolver/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      CONFIG_USE_DUALSTACK_ENDPOINT: () => CONFIG_USE_DUALSTACK_ENDPOINT,
      CONFIG_USE_FIPS_ENDPOINT: () => CONFIG_USE_FIPS_ENDPOINT,
      DEFAULT_USE_DUALSTACK_ENDPOINT: () => DEFAULT_USE_DUALSTACK_ENDPOINT,
      DEFAULT_USE_FIPS_ENDPOINT: () => DEFAULT_USE_FIPS_ENDPOINT,
      ENV_USE_DUALSTACK_ENDPOINT: () => ENV_USE_DUALSTACK_ENDPOINT,
      ENV_USE_FIPS_ENDPOINT: () => ENV_USE_FIPS_ENDPOINT,
      NODE_REGION_CONFIG_FILE_OPTIONS: () => NODE_REGION_CONFIG_FILE_OPTIONS,
      NODE_REGION_CONFIG_OPTIONS: () => NODE_REGION_CONFIG_OPTIONS,
      NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS: () => NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS,
      NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS: () => NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS,
      REGION_ENV_NAME: () => REGION_ENV_NAME,
      REGION_INI_NAME: () => REGION_INI_NAME,
      getRegionInfo: () => getRegionInfo,
      resolveCustomEndpointsConfig: () => resolveCustomEndpointsConfig,
      resolveEndpointsConfig: () => resolveEndpointsConfig,
      resolveRegionConfig: () => resolveRegionConfig,
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_util_config_provider = require_dist_cjs34();
    var ENV_USE_DUALSTACK_ENDPOINT = "AWS_USE_DUALSTACK_ENDPOINT";
    var CONFIG_USE_DUALSTACK_ENDPOINT = "use_dualstack_endpoint";
    var DEFAULT_USE_DUALSTACK_ENDPOINT = false;
    var NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) =>
        (0, import_util_config_provider.booleanSelector)(
          env,
          ENV_USE_DUALSTACK_ENDPOINT,
          import_util_config_provider.SelectorType.ENV,
        ),
      configFileSelector: (profile) =>
        (0, import_util_config_provider.booleanSelector)(
          profile,
          CONFIG_USE_DUALSTACK_ENDPOINT,
          import_util_config_provider.SelectorType.CONFIG,
        ),
      default: false,
    };
    var ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
    var CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
    var DEFAULT_USE_FIPS_ENDPOINT = false;
    var NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) =>
        (0, import_util_config_provider.booleanSelector)(
          env,
          ENV_USE_FIPS_ENDPOINT,
          import_util_config_provider.SelectorType.ENV,
        ),
      configFileSelector: (profile) =>
        (0, import_util_config_provider.booleanSelector)(
          profile,
          CONFIG_USE_FIPS_ENDPOINT,
          import_util_config_provider.SelectorType.CONFIG,
        ),
      default: false,
    };
    var import_util_middleware6 = require_dist_cjs2();
    var resolveCustomEndpointsConfig = /* @__PURE__ */ __name((input) => {
      const { tls, endpoint, urlParser, useDualstackEndpoint } = input;
      return Object.assign(input, {
        tls: tls ?? true,
        endpoint: (0, import_util_middleware6.normalizeProvider)(
          typeof endpoint === "string" ? urlParser(endpoint) : endpoint,
        ),
        isCustomEndpoint: true,
        useDualstackEndpoint: (0, import_util_middleware6.normalizeProvider)(useDualstackEndpoint ?? false),
      });
    }, "resolveCustomEndpointsConfig");
    var getEndpointFromRegion = /* @__PURE__ */ __name(async (input) => {
      const { tls = true } = input;
      const region = await input.region();
      const dnsHostRegex = new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/);
      if (!dnsHostRegex.test(region)) {
        throw new Error("Invalid region in client config");
      }
      const useDualstackEndpoint = await input.useDualstackEndpoint();
      const useFipsEndpoint = await input.useFipsEndpoint();
      const { hostname } = (await input.regionInfoProvider(region, { useDualstackEndpoint, useFipsEndpoint })) ?? {};
      if (!hostname) {
        throw new Error("Cannot resolve hostname from client config");
      }
      return input.urlParser(`${tls ? "https:" : "http:"}//${hostname}`);
    }, "getEndpointFromRegion");
    var resolveEndpointsConfig = /* @__PURE__ */ __name((input) => {
      const useDualstackEndpoint = (0, import_util_middleware6.normalizeProvider)(input.useDualstackEndpoint ?? false);
      const { endpoint, useFipsEndpoint, urlParser, tls } = input;
      return Object.assign(input, {
        tls: tls ?? true,
        endpoint: endpoint
          ? (0, import_util_middleware6.normalizeProvider)(
              typeof endpoint === "string" ? urlParser(endpoint) : endpoint,
            )
          : () => getEndpointFromRegion({ ...input, useDualstackEndpoint, useFipsEndpoint }),
        isCustomEndpoint: !!endpoint,
        useDualstackEndpoint,
      });
    }, "resolveEndpointsConfig");
    var REGION_ENV_NAME = "AWS_REGION";
    var REGION_INI_NAME = "region";
    var NODE_REGION_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => env[REGION_ENV_NAME],
      configFileSelector: (profile) => profile[REGION_INI_NAME],
      default: () => {
        throw new Error("Region is missing");
      },
    };
    var NODE_REGION_CONFIG_FILE_OPTIONS = {
      preferredFile: "credentials",
    };
    var isFipsRegion = /* @__PURE__ */ __name(
      (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips")),
      "isFipsRegion",
    );
    var getRealRegion = /* @__PURE__ */ __name(
      (region) =>
        isFipsRegion(region)
          ? ["fips-aws-global", "aws-fips"].includes(region)
            ? "us-east-1"
            : region.replace(/fips-(dkr-|prod-)?|-fips/, "")
          : region,
      "getRealRegion",
    );
    var resolveRegionConfig = /* @__PURE__ */ __name((input) => {
      const { region, useFipsEndpoint } = input;
      if (!region) {
        throw new Error("Region is missing");
      }
      return Object.assign(input, {
        region: async () => {
          if (typeof region === "string") {
            return getRealRegion(region);
          }
          const providedRegion = await region();
          return getRealRegion(providedRegion);
        },
        useFipsEndpoint: async () => {
          const providedRegion = typeof region === "string" ? region : await region();
          if (isFipsRegion(providedRegion)) {
            return true;
          }
          return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
        },
      });
    }, "resolveRegionConfig");
    var getHostnameFromVariants = /* @__PURE__ */ __name(
      (variants = [], { useFipsEndpoint, useDualstackEndpoint }) =>
        variants.find(
          ({ tags }) =>
            useFipsEndpoint === tags.includes("fips") && useDualstackEndpoint === tags.includes("dualstack"),
        )?.hostname,
      "getHostnameFromVariants",
    );
    var getResolvedHostname = /* @__PURE__ */ __name(
      (resolvedRegion, { regionHostname, partitionHostname }) =>
        regionHostname
          ? regionHostname
          : partitionHostname
            ? partitionHostname.replace("{region}", resolvedRegion)
            : void 0,
      "getResolvedHostname",
    );
    var getResolvedPartition = /* @__PURE__ */ __name(
      (region, { partitionHash }) =>
        Object.keys(partitionHash || {}).find((key) => partitionHash[key].regions.includes(region)) ?? "aws",
      "getResolvedPartition",
    );
    var getResolvedSigningRegion = /* @__PURE__ */ __name(
      (hostname, { signingRegion, regionRegex, useFipsEndpoint }) => {
        if (signingRegion) {
          return signingRegion;
        } else if (useFipsEndpoint) {
          const regionRegexJs = regionRegex.replace("\\\\", "\\").replace(/^\^/g, "\\.").replace(/\$$/g, "\\.");
          const regionRegexmatchArray = hostname.match(regionRegexJs);
          if (regionRegexmatchArray) {
            return regionRegexmatchArray[0].slice(1, -1);
          }
        }
      },
      "getResolvedSigningRegion",
    );
    var getRegionInfo = /* @__PURE__ */ __name(
      (
        region,
        { useFipsEndpoint = false, useDualstackEndpoint = false, signingService, regionHash, partitionHash },
      ) => {
        const partition = getResolvedPartition(region, { partitionHash });
        const resolvedRegion = region in regionHash ? region : (partitionHash[partition]?.endpoint ?? region);
        const hostnameOptions = { useFipsEndpoint, useDualstackEndpoint };
        const regionHostname = getHostnameFromVariants(regionHash[resolvedRegion]?.variants, hostnameOptions);
        const partitionHostname = getHostnameFromVariants(partitionHash[partition]?.variants, hostnameOptions);
        const hostname = getResolvedHostname(resolvedRegion, { regionHostname, partitionHostname });
        if (hostname === void 0) {
          throw new Error(
            `Endpoint resolution failed for: ${{ resolvedRegion, useFipsEndpoint, useDualstackEndpoint }}`,
          );
        }
        const signingRegion = getResolvedSigningRegion(hostname, {
          signingRegion: regionHash[resolvedRegion]?.signingRegion,
          regionRegex: partitionHash[partition].regionRegex,
          useFipsEndpoint,
        });
        return {
          partition,
          signingService,
          hostname,
          ...(signingRegion && { signingRegion }),
          ...(regionHash[resolvedRegion]?.signingService && {
            signingService: regionHash[resolvedRegion].signingService,
          }),
        };
      },
      "getRegionInfo",
    );
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/credential-provider-imds/dist-cjs/index.js
var require_dist_cjs36 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/credential-provider-imds/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      DEFAULT_MAX_RETRIES: () => DEFAULT_MAX_RETRIES,
      DEFAULT_TIMEOUT: () => DEFAULT_TIMEOUT,
      ENV_CMDS_AUTH_TOKEN: () => ENV_CMDS_AUTH_TOKEN,
      ENV_CMDS_FULL_URI: () => ENV_CMDS_FULL_URI,
      ENV_CMDS_RELATIVE_URI: () => ENV_CMDS_RELATIVE_URI,
      Endpoint: () => Endpoint,
      fromContainerMetadata: () => fromContainerMetadata,
      fromInstanceMetadata: () => fromInstanceMetadata,
      getInstanceMetadataEndpoint: () => getInstanceMetadataEndpoint,
      httpRequest: () => httpRequest,
      providerConfigFromInit: () => providerConfigFromInit,
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_url = require("url");
    var import_property_provider2 = require_dist_cjs19();
    var import_buffer = require("buffer");
    var import_http = require("http");
    function httpRequest(options) {
      return new Promise((resolve, reject) => {
        const req = (0, import_http.request)({
          method: "GET",
          ...options,
          // Node.js http module doesn't accept hostname with square brackets
          // Refs: https://github.com/nodejs/node/issues/39738
          hostname: options.hostname?.replace(/^\[(.+)\]$/, "$1"),
        });
        req.on("error", (err) => {
          reject(
            Object.assign(
              new import_property_provider2.ProviderError("Unable to connect to instance metadata service"),
              err,
            ),
          );
          req.destroy();
        });
        req.on("timeout", () => {
          reject(new import_property_provider2.ProviderError("TimeoutError from instance metadata service"));
          req.destroy();
        });
        req.on("response", (res) => {
          const { statusCode = 400 } = res;
          if (statusCode < 200 || 300 <= statusCode) {
            reject(
              Object.assign(
                new import_property_provider2.ProviderError("Error response received from instance metadata service"),
                { statusCode },
              ),
            );
            req.destroy();
          }
          const chunks = [];
          res.on("data", (chunk) => {
            chunks.push(chunk);
          });
          res.on("end", () => {
            resolve(import_buffer.Buffer.concat(chunks));
            req.destroy();
          });
        });
        req.end();
      });
    }
    __name(httpRequest, "httpRequest");
    var isImdsCredentials = /* @__PURE__ */ __name(
      (arg) =>
        Boolean(arg) &&
        typeof arg === "object" &&
        typeof arg.AccessKeyId === "string" &&
        typeof arg.SecretAccessKey === "string" &&
        typeof arg.Token === "string" &&
        typeof arg.Expiration === "string",
      "isImdsCredentials",
    );
    var fromImdsCredentials = /* @__PURE__ */ __name(
      (creds) => ({
        accessKeyId: creds.AccessKeyId,
        secretAccessKey: creds.SecretAccessKey,
        sessionToken: creds.Token,
        expiration: new Date(creds.Expiration),
        ...(creds.AccountId && { accountId: creds.AccountId }),
      }),
      "fromImdsCredentials",
    );
    var DEFAULT_TIMEOUT = 1e3;
    var DEFAULT_MAX_RETRIES = 0;
    var providerConfigFromInit = /* @__PURE__ */ __name(
      ({ maxRetries = DEFAULT_MAX_RETRIES, timeout = DEFAULT_TIMEOUT }) => ({ maxRetries, timeout }),
      "providerConfigFromInit",
    );
    var retry = /* @__PURE__ */ __name((toRetry, maxRetries) => {
      let promise = toRetry();
      for (let i = 0; i < maxRetries; i++) {
        promise = promise.catch(toRetry);
      }
      return promise;
    }, "retry");
    var ENV_CMDS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
    var ENV_CMDS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
    var ENV_CMDS_AUTH_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
    var fromContainerMetadata = /* @__PURE__ */ __name((init = {}) => {
      const { timeout, maxRetries } = providerConfigFromInit(init);
      return () =>
        retry(async () => {
          const requestOptions = await getCmdsUri({ logger: init.logger });
          const credsResponse = JSON.parse(await requestFromEcsImds(timeout, requestOptions));
          if (!isImdsCredentials(credsResponse)) {
            throw new import_property_provider2.CredentialsProviderError(
              "Invalid response received from instance metadata service.",
              {
                logger: init.logger,
              },
            );
          }
          return fromImdsCredentials(credsResponse);
        }, maxRetries);
    }, "fromContainerMetadata");
    var requestFromEcsImds = /* @__PURE__ */ __name(async (timeout, options) => {
      if (process.env[ENV_CMDS_AUTH_TOKEN]) {
        options.headers = {
          ...options.headers,
          Authorization: process.env[ENV_CMDS_AUTH_TOKEN],
        };
      }
      const buffer = await httpRequest({
        ...options,
        timeout,
      });
      return buffer.toString();
    }, "requestFromEcsImds");
    var CMDS_IP = "169.254.170.2";
    var GREENGRASS_HOSTS = {
      localhost: true,
      "127.0.0.1": true,
    };
    var GREENGRASS_PROTOCOLS = {
      "http:": true,
      "https:": true,
    };
    var getCmdsUri = /* @__PURE__ */ __name(async ({ logger: logger3 }) => {
      if (process.env[ENV_CMDS_RELATIVE_URI]) {
        return {
          hostname: CMDS_IP,
          path: process.env[ENV_CMDS_RELATIVE_URI],
        };
      }
      if (process.env[ENV_CMDS_FULL_URI]) {
        const parsed = (0, import_url.parse)(process.env[ENV_CMDS_FULL_URI]);
        if (!parsed.hostname || !(parsed.hostname in GREENGRASS_HOSTS)) {
          throw new import_property_provider2.CredentialsProviderError(
            `${parsed.hostname} is not a valid container metadata service hostname`,
            {
              tryNextLink: false,
              logger: logger3,
            },
          );
        }
        if (!parsed.protocol || !(parsed.protocol in GREENGRASS_PROTOCOLS)) {
          throw new import_property_provider2.CredentialsProviderError(
            `${parsed.protocol} is not a valid container metadata service protocol`,
            {
              tryNextLink: false,
              logger: logger3,
            },
          );
        }
        return {
          ...parsed,
          port: parsed.port ? parseInt(parsed.port, 10) : void 0,
        };
      }
      throw new import_property_provider2.CredentialsProviderError(
        `The container metadata credential provider cannot be used unless the ${ENV_CMDS_RELATIVE_URI} or ${ENV_CMDS_FULL_URI} environment variable is set`,
        {
          tryNextLink: false,
          logger: logger3,
        },
      );
    }, "getCmdsUri");
    var _a;
    var InstanceMetadataV1FallbackError =
      ((_a = class extends import_property_provider2.CredentialsProviderError {
        constructor(message, tryNextLink = true) {
          super(message, tryNextLink);
          this.tryNextLink = tryNextLink;
          this.name = "InstanceMetadataV1FallbackError";
          Object.setPrototypeOf(this, _a.prototype);
        }
      }),
      __name(_a, "InstanceMetadataV1FallbackError"),
      _a);
    var import_node_config_provider2 = require_dist_cjs32();
    var import_url_parser2 = require_dist_cjs17();
    var Endpoint = /* @__PURE__ */ ((Endpoint2) => {
      Endpoint2["IPv4"] = "http://169.254.169.254";
      Endpoint2["IPv6"] = "http://[fd00:ec2::254]";
      return Endpoint2;
    })(Endpoint || {});
    var ENV_ENDPOINT_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT";
    var CONFIG_ENDPOINT_NAME = "ec2_metadata_service_endpoint";
    var ENDPOINT_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => env[ENV_ENDPOINT_NAME],
      configFileSelector: (profile) => profile[CONFIG_ENDPOINT_NAME],
      default: void 0,
    };
    var EndpointMode = /* @__PURE__ */ ((EndpointMode2) => {
      EndpointMode2["IPv4"] = "IPv4";
      EndpointMode2["IPv6"] = "IPv6";
      return EndpointMode2;
    })(EndpointMode || {});
    var ENV_ENDPOINT_MODE_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE";
    var CONFIG_ENDPOINT_MODE_NAME = "ec2_metadata_service_endpoint_mode";
    var ENDPOINT_MODE_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => env[ENV_ENDPOINT_MODE_NAME],
      configFileSelector: (profile) => profile[CONFIG_ENDPOINT_MODE_NAME],
      default: "IPv4",
      /* IPv4 */
    };
    var getInstanceMetadataEndpoint = /* @__PURE__ */ __name(
      async () =>
        (0, import_url_parser2.parseUrl)((await getFromEndpointConfig()) || (await getFromEndpointModeConfig())),
      "getInstanceMetadataEndpoint",
    );
    var getFromEndpointConfig = /* @__PURE__ */ __name(
      async () => (0, import_node_config_provider2.loadConfig)(ENDPOINT_CONFIG_OPTIONS)(),
      "getFromEndpointConfig",
    );
    var getFromEndpointModeConfig = /* @__PURE__ */ __name(async () => {
      const endpointMode = await (0, import_node_config_provider2.loadConfig)(ENDPOINT_MODE_CONFIG_OPTIONS)();
      switch (endpointMode) {
        case "IPv4":
          return "http://169.254.169.254";
        case "IPv6":
          return "http://[fd00:ec2::254]";
        default:
          throw new Error(`Unsupported endpoint mode: ${endpointMode}. Select from ${Object.values(EndpointMode)}`);
      }
    }, "getFromEndpointModeConfig");
    var STATIC_STABILITY_REFRESH_INTERVAL_SECONDS = 5 * 60;
    var STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS = 5 * 60;
    var STATIC_STABILITY_DOC_URL = "https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html";
    var getExtendedInstanceMetadataCredentials = /* @__PURE__ */ __name((credentials, logger3) => {
      const refreshInterval =
        STATIC_STABILITY_REFRESH_INTERVAL_SECONDS +
        Math.floor(Math.random() * STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS);
      const newExpiration = new Date(Date.now() + refreshInterval * 1e3);
      logger3.warn(
        `Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(newExpiration)}.
For more information, please visit: ` + STATIC_STABILITY_DOC_URL,
      );
      const originalExpiration = credentials.originalExpiration ?? credentials.expiration;
      return {
        ...credentials,
        ...(originalExpiration ? { originalExpiration } : {}),
        expiration: newExpiration,
      };
    }, "getExtendedInstanceMetadataCredentials");
    var staticStabilityProvider = /* @__PURE__ */ __name((provider, options = {}) => {
      const logger3 = options?.logger || console;
      let pastCredentials;
      return async () => {
        let credentials;
        try {
          credentials = await provider();
          if (credentials.expiration && credentials.expiration.getTime() < Date.now()) {
            credentials = getExtendedInstanceMetadataCredentials(credentials, logger3);
          }
        } catch (e) {
          if (pastCredentials) {
            logger3.warn("Credential renew failed: ", e);
            credentials = getExtendedInstanceMetadataCredentials(pastCredentials, logger3);
          } else {
            throw e;
          }
        }
        pastCredentials = credentials;
        return credentials;
      };
    }, "staticStabilityProvider");
    var IMDS_PATH = "/latest/meta-data/iam/security-credentials/";
    var IMDS_TOKEN_PATH = "/latest/api/token";
    var AWS_EC2_METADATA_V1_DISABLED = "AWS_EC2_METADATA_V1_DISABLED";
    var PROFILE_AWS_EC2_METADATA_V1_DISABLED = "ec2_metadata_v1_disabled";
    var X_AWS_EC2_METADATA_TOKEN = "x-aws-ec2-metadata-token";
    var fromInstanceMetadata = /* @__PURE__ */ __name(
      (init = {}) => staticStabilityProvider(getInstanceMetadataProvider(init), { logger: init.logger }),
      "fromInstanceMetadata",
    );
    var getInstanceMetadataProvider = /* @__PURE__ */ __name((init = {}) => {
      let disableFetchToken = false;
      const { logger: logger3, profile } = init;
      const { timeout, maxRetries } = providerConfigFromInit(init);
      const getCredentials = /* @__PURE__ */ __name(async (maxRetries2, options) => {
        const isImdsV1Fallback = disableFetchToken || options.headers?.[X_AWS_EC2_METADATA_TOKEN] == null;
        if (isImdsV1Fallback) {
          let fallbackBlockedFromProfile = false;
          let fallbackBlockedFromProcessEnv = false;
          const configValue = await (0, import_node_config_provider2.loadConfig)(
            {
              environmentVariableSelector: (env) => {
                const envValue = env[AWS_EC2_METADATA_V1_DISABLED];
                fallbackBlockedFromProcessEnv = !!envValue && envValue !== "false";
                if (envValue === void 0) {
                  throw new import_property_provider2.CredentialsProviderError(
                    `${AWS_EC2_METADATA_V1_DISABLED} not set in env, checking config file next.`,
                    { logger: init.logger },
                  );
                }
                return fallbackBlockedFromProcessEnv;
              },
              configFileSelector: (profile2) => {
                const profileValue = profile2[PROFILE_AWS_EC2_METADATA_V1_DISABLED];
                fallbackBlockedFromProfile = !!profileValue && profileValue !== "false";
                return fallbackBlockedFromProfile;
              },
              default: false,
            },
            {
              profile,
            },
          )();
          if (init.ec2MetadataV1Disabled || configValue) {
            const causes = [];
            if (init.ec2MetadataV1Disabled)
              causes.push("credential provider initialization (runtime option ec2MetadataV1Disabled)");
            if (fallbackBlockedFromProfile)
              causes.push(`config file profile (${PROFILE_AWS_EC2_METADATA_V1_DISABLED})`);
            if (fallbackBlockedFromProcessEnv)
              causes.push(`process environment variable (${AWS_EC2_METADATA_V1_DISABLED})`);
            throw new InstanceMetadataV1FallbackError(
              `AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${causes.join(
                ", ",
              )}].`,
            );
          }
        }
        const imdsProfile = (
          await retry(async () => {
            let profile2;
            try {
              profile2 = await getProfile(options);
            } catch (err) {
              if (err.statusCode === 401) {
                disableFetchToken = false;
              }
              throw err;
            }
            return profile2;
          }, maxRetries2)
        ).trim();
        return retry(async () => {
          let creds;
          try {
            creds = await getCredentialsFromProfile(imdsProfile, options, init);
          } catch (err) {
            if (err.statusCode === 401) {
              disableFetchToken = false;
            }
            throw err;
          }
          return creds;
        }, maxRetries2);
      }, "getCredentials");
      return async () => {
        const endpoint = await getInstanceMetadataEndpoint();
        if (disableFetchToken) {
          logger3?.debug("AWS SDK Instance Metadata", "using v1 fallback (no token fetch)");
          return getCredentials(maxRetries, { ...endpoint, timeout });
        } else {
          let token;
          try {
            token = (await getMetadataToken({ ...endpoint, timeout })).toString();
          } catch (error) {
            if (error?.statusCode === 400) {
              throw Object.assign(error, {
                message: "EC2 Metadata token request returned error",
              });
            } else if (error.message === "TimeoutError" || [403, 404, 405].includes(error.statusCode)) {
              disableFetchToken = true;
            }
            logger3?.debug("AWS SDK Instance Metadata", "using v1 fallback (initial)");
            return getCredentials(maxRetries, { ...endpoint, timeout });
          }
          return getCredentials(maxRetries, {
            ...endpoint,
            headers: {
              [X_AWS_EC2_METADATA_TOKEN]: token,
            },
            timeout,
          });
        }
      };
    }, "getInstanceMetadataProvider");
    var getMetadataToken = /* @__PURE__ */ __name(
      async (options) =>
        httpRequest({
          ...options,
          path: IMDS_TOKEN_PATH,
          method: "PUT",
          headers: {
            "x-aws-ec2-metadata-token-ttl-seconds": "21600",
          },
        }),
      "getMetadataToken",
    );
    var getProfile = /* @__PURE__ */ __name(
      async (options) => (await httpRequest({ ...options, path: IMDS_PATH })).toString(),
      "getProfile",
    );
    var getCredentialsFromProfile = /* @__PURE__ */ __name(async (profile, options, init) => {
      const credentialsResponse = JSON.parse(
        (
          await httpRequest({
            ...options,
            path: IMDS_PATH + profile,
          })
        ).toString(),
      );
      if (!isImdsCredentials(credentialsResponse)) {
        throw new import_property_provider2.CredentialsProviderError(
          "Invalid response received from instance metadata service.",
          {
            logger: init.logger,
          },
        );
      }
      return fromImdsCredentials(credentialsResponse);
    }, "getCredentialsFromProfile");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-defaults-mode-node/dist-cjs/index.js
var require_dist_cjs37 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-defaults-mode-node/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (
      (target = mod != null ? __create2(__getProtoOf2(mod)) : {}),
      __copyProps2(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule
          ? __defProp2(target, "default", { value: mod, enumerable: true })
          : target,
        mod,
      )
    );
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      resolveDefaultsModeConfig: () => resolveDefaultsModeConfig2,
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_config_resolver = require_dist_cjs35();
    var import_node_config_provider2 = require_dist_cjs32();
    var import_property_provider2 = require_dist_cjs19();
    var AWS_EXECUTION_ENV = "AWS_EXECUTION_ENV";
    var AWS_REGION_ENV = "AWS_REGION";
    var AWS_DEFAULT_REGION_ENV = "AWS_DEFAULT_REGION";
    var ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
    var DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];
    var IMDS_REGION_PATH = "/latest/meta-data/placement/region";
    var AWS_DEFAULTS_MODE_ENV = "AWS_DEFAULTS_MODE";
    var AWS_DEFAULTS_MODE_CONFIG = "defaults_mode";
    var NODE_DEFAULTS_MODE_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => {
        return env[AWS_DEFAULTS_MODE_ENV];
      },
      configFileSelector: (profile) => {
        return profile[AWS_DEFAULTS_MODE_CONFIG];
      },
      default: "legacy",
    };
    var resolveDefaultsModeConfig2 = /* @__PURE__ */ __name(
      ({
        region = (0, import_node_config_provider2.loadConfig)(import_config_resolver.NODE_REGION_CONFIG_OPTIONS),
        defaultsMode = (0, import_node_config_provider2.loadConfig)(NODE_DEFAULTS_MODE_CONFIG_OPTIONS),
      } = {}) =>
        (0, import_property_provider2.memoize)(async () => {
          const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
          switch (mode?.toLowerCase()) {
            case "auto":
              return resolveNodeDefaultsModeAuto(region);
            case "in-region":
            case "cross-region":
            case "mobile":
            case "standard":
            case "legacy":
              return Promise.resolve(mode?.toLocaleLowerCase());
            case void 0:
              return Promise.resolve("legacy");
            default:
              throw new Error(
                `Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`,
              );
          }
        }),
      "resolveDefaultsModeConfig",
    );
    var resolveNodeDefaultsModeAuto = /* @__PURE__ */ __name(async (clientRegion) => {
      if (clientRegion) {
        const resolvedRegion = typeof clientRegion === "function" ? await clientRegion() : clientRegion;
        const inferredRegion = await inferPhysicalRegion();
        if (!inferredRegion) {
          return "standard";
        }
        if (resolvedRegion === inferredRegion) {
          return "in-region";
        } else {
          return "cross-region";
        }
      }
      return "standard";
    }, "resolveNodeDefaultsModeAuto");
    var inferPhysicalRegion = /* @__PURE__ */ __name(async () => {
      if (process.env[AWS_EXECUTION_ENV] && (process.env[AWS_REGION_ENV] || process.env[AWS_DEFAULT_REGION_ENV])) {
        return process.env[AWS_REGION_ENV] ?? process.env[AWS_DEFAULT_REGION_ENV];
      }
      if (!process.env[ENV_IMDS_DISABLED]) {
        try {
          const { getInstanceMetadataEndpoint, httpRequest } = await Promise.resolve().then(() =>
            __toESM2(require_dist_cjs36()),
          );
          const endpoint = await getInstanceMetadataEndpoint();
          return (await httpRequest({ ...endpoint, path: IMDS_REGION_PATH })).toString();
        } catch (e) {}
      }
    }, "inferPhysicalRegion");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/middleware-host-header/dist-cjs/index.js
var require_dist_cjs38 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/middleware-host-header/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var index_exports = {};
    __export2(index_exports, {
      getHostHeaderPlugin: () => getHostHeaderPlugin2,
      hostHeaderMiddleware: () => hostHeaderMiddleware,
      hostHeaderMiddlewareOptions: () => hostHeaderMiddlewareOptions,
      resolveHostHeaderConfig: () => resolveHostHeaderConfig2,
    });
    module2.exports = __toCommonJS2(index_exports);
    var import_protocol_http13 = require_dist_cjs3();
    function resolveHostHeaderConfig2(input) {
      return input;
    }
    __name(resolveHostHeaderConfig2, "resolveHostHeaderConfig");
    var hostHeaderMiddleware = /* @__PURE__ */ __name(
      (options) => (next) => async (args) => {
        if (!import_protocol_http13.HttpRequest.isInstance(args.request)) return next(args);
        const { request } = args;
        const { handlerProtocol = "" } = options.requestHandler.metadata || {};
        if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
          delete request.headers["host"];
          request.headers[":authority"] = request.hostname + (request.port ? ":" + request.port : "");
        } else if (!request.headers["host"]) {
          let host = request.hostname;
          if (request.port != null) host += `:${request.port}`;
          request.headers["host"] = host;
        }
        return next(args);
      },
      "hostHeaderMiddleware",
    );
    var hostHeaderMiddlewareOptions = {
      name: "hostHeaderMiddleware",
      step: "build",
      priority: "low",
      tags: ["HOST"],
      override: true,
    };
    var getHostHeaderPlugin2 = /* @__PURE__ */ __name(
      (options) => ({
        applyToStack: /* @__PURE__ */ __name((clientStack) => {
          clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
        }, "applyToStack"),
      }),
      "getHostHeaderPlugin",
    );
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/middleware-logger/dist-cjs/index.js
var require_dist_cjs39 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/middleware-logger/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var index_exports = {};
    __export2(index_exports, {
      getLoggerPlugin: () => getLoggerPlugin2,
      loggerMiddleware: () => loggerMiddleware,
      loggerMiddlewareOptions: () => loggerMiddlewareOptions,
    });
    module2.exports = __toCommonJS2(index_exports);
    var loggerMiddleware = /* @__PURE__ */ __name(
      () => (next, context) => async (args) => {
        try {
          const response = await next(args);
          const { clientName, commandName, logger: logger3, dynamoDbDocumentClientOptions = {} } = context;
          const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
          const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
          const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;
          const { $metadata, ...outputWithoutMetadata } = response.output;
          logger3?.info?.({
            clientName,
            commandName,
            input: inputFilterSensitiveLog(args.input),
            output: outputFilterSensitiveLog(outputWithoutMetadata),
            metadata: $metadata,
          });
          return response;
        } catch (error) {
          const { clientName, commandName, logger: logger3, dynamoDbDocumentClientOptions = {} } = context;
          const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
          const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
          logger3?.error?.({
            clientName,
            commandName,
            input: inputFilterSensitiveLog(args.input),
            error,
            metadata: error.$metadata,
          });
          throw error;
        }
      },
      "loggerMiddleware",
    );
    var loggerMiddlewareOptions = {
      name: "loggerMiddleware",
      tags: ["LOGGER"],
      step: "initialize",
      override: true,
    };
    var getLoggerPlugin2 = /* @__PURE__ */ __name(
      (options) => ({
        applyToStack: /* @__PURE__ */ __name((clientStack) => {
          clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
        }, "applyToStack"),
      }),
      "getLoggerPlugin",
    );
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/middleware-recursion-detection/dist-cjs/index.js
var require_dist_cjs40 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/middleware-recursion-detection/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var index_exports = {};
    __export2(index_exports, {
      addRecursionDetectionMiddlewareOptions: () => addRecursionDetectionMiddlewareOptions,
      getRecursionDetectionPlugin: () => getRecursionDetectionPlugin2,
      recursionDetectionMiddleware: () => recursionDetectionMiddleware,
    });
    module2.exports = __toCommonJS2(index_exports);
    var import_protocol_http13 = require_dist_cjs3();
    var TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
    var ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
    var ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
    var recursionDetectionMiddleware = /* @__PURE__ */ __name(
      (options) => (next) => async (args) => {
        const { request } = args;
        if (!import_protocol_http13.HttpRequest.isInstance(request) || options.runtime !== "node") {
          return next(args);
        }
        const traceIdHeader =
          Object.keys(request.headers ?? {}).find((h) => h.toLowerCase() === TRACE_ID_HEADER_NAME.toLowerCase()) ??
          TRACE_ID_HEADER_NAME;
        if (request.headers.hasOwnProperty(traceIdHeader)) {
          return next(args);
        }
        const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
        const traceId = process.env[ENV_TRACE_ID];
        const nonEmptyString = /* @__PURE__ */ __name(
          (str) => typeof str === "string" && str.length > 0,
          "nonEmptyString",
        );
        if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
          request.headers[TRACE_ID_HEADER_NAME] = traceId;
        }
        return next({
          ...args,
          request,
        });
      },
      "recursionDetectionMiddleware",
    );
    var addRecursionDetectionMiddlewareOptions = {
      step: "build",
      tags: ["RECURSION_DETECTION"],
      name: "recursionDetectionMiddleware",
      override: true,
      priority: "low",
    };
    var getRecursionDetectionPlugin2 = /* @__PURE__ */ __name(
      (options) => ({
        applyToStack: /* @__PURE__ */ __name((clientStack) => {
          clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);
        }, "applyToStack"),
      }),
      "getRecursionDetectionPlugin",
    );
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-content-length/dist-cjs/index.js
var require_dist_cjs41 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-content-length/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      contentLengthMiddleware: () => contentLengthMiddleware,
      contentLengthMiddlewareOptions: () => contentLengthMiddlewareOptions,
      getContentLengthPlugin: () => getContentLengthPlugin2,
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_protocol_http13 = require_dist_cjs3();
    var CONTENT_LENGTH_HEADER = "content-length";
    function contentLengthMiddleware(bodyLengthChecker) {
      return (next) => async (args) => {
        const request = args.request;
        if (import_protocol_http13.HttpRequest.isInstance(request)) {
          const { body, headers } = request;
          if (
            body &&
            Object.keys(headers)
              .map((str) => str.toLowerCase())
              .indexOf(CONTENT_LENGTH_HEADER) === -1
          ) {
            try {
              const length = bodyLengthChecker(body);
              request.headers = {
                ...request.headers,
                [CONTENT_LENGTH_HEADER]: String(length),
              };
            } catch (error) {}
          }
        }
        return next({
          ...args,
          request,
        });
      };
    }
    __name(contentLengthMiddleware, "contentLengthMiddleware");
    var contentLengthMiddlewareOptions = {
      step: "build",
      tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
      name: "contentLengthMiddleware",
      override: true,
    };
    var getContentLengthPlugin2 = /* @__PURE__ */ __name(
      (options) => ({
        applyToStack: (clientStack) => {
          clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
        },
      }),
      "getContentLengthPlugin",
    );
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/getEndpointUrlConfig.js
var require_getEndpointUrlConfig = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/getEndpointUrlConfig.js"(
    exports2,
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getEndpointUrlConfig = void 0;
    var shared_ini_file_loader_1 = require_dist_cjs31();
    var ENV_ENDPOINT_URL = "AWS_ENDPOINT_URL";
    var CONFIG_ENDPOINT_URL = "endpoint_url";
    var getEndpointUrlConfig = (serviceId) => ({
      environmentVariableSelector: (env) => {
        const serviceSuffixParts = serviceId.split(" ").map((w) => w.toUpperCase());
        const serviceEndpointUrl = env[[ENV_ENDPOINT_URL, ...serviceSuffixParts].join("_")];
        if (serviceEndpointUrl) return serviceEndpointUrl;
        const endpointUrl = env[ENV_ENDPOINT_URL];
        if (endpointUrl) return endpointUrl;
        return void 0;
      },
      configFileSelector: (profile, config) => {
        if (config && profile.services) {
          const servicesSection =
            config[["services", profile.services].join(shared_ini_file_loader_1.CONFIG_PREFIX_SEPARATOR)];
          if (servicesSection) {
            const servicePrefixParts = serviceId.split(" ").map((w) => w.toLowerCase());
            const endpointUrl2 =
              servicesSection[
                [servicePrefixParts.join("_"), CONFIG_ENDPOINT_URL].join(
                  shared_ini_file_loader_1.CONFIG_PREFIX_SEPARATOR,
                )
              ];
            if (endpointUrl2) return endpointUrl2;
          }
        }
        const endpointUrl = profile[CONFIG_ENDPOINT_URL];
        if (endpointUrl) return endpointUrl;
        return void 0;
      },
      default: void 0,
    });
    exports2.getEndpointUrlConfig = getEndpointUrlConfig;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/getEndpointFromConfig.js
var require_getEndpointFromConfig = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/getEndpointFromConfig.js"(
    exports2,
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getEndpointFromConfig = void 0;
    var node_config_provider_1 = require_dist_cjs32();
    var getEndpointUrlConfig_1 = require_getEndpointUrlConfig();
    var getEndpointFromConfig = async (serviceId) =>
      (0, node_config_provider_1.loadConfig)(
        (0, getEndpointUrlConfig_1.getEndpointUrlConfig)(serviceId !== null && serviceId !== void 0 ? serviceId : ""),
      )();
    exports2.getEndpointFromConfig = getEndpointFromConfig;
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-endpoint/dist-cjs/index.js
var require_dist_cjs42 = __commonJS({
  "build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-endpoint/dist-cjs/index.js"(
    exports2,
    module2,
  ) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      endpointMiddleware: () => endpointMiddleware,
      endpointMiddlewareOptions: () => endpointMiddlewareOptions,
      getEndpointFromInstructions: () => getEndpointFromInstructions,
      getEndpointPlugin: () => getEndpointPlugin5,
      resolveEndpointConfig: () => resolveEndpointConfig2,
      resolveEndpointRequiredConfig: () => resolveEndpointRequiredConfig2,
      resolveParams: () => resolveParams,
      toEndpointV1: () => toEndpointV1,
    });
    module2.exports = __toCommonJS2(src_exports);
    var resolveParamsForS3 = /* @__PURE__ */ __name(async (endpointParams) => {
      const bucket = endpointParams?.Bucket || "";
      if (typeof endpointParams.Bucket === "string") {
        endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
      }
      if (isArnBucketName(bucket)) {
        if (endpointParams.ForcePathStyle === true) {
          throw new Error("Path-style addressing cannot be used with ARN buckets");
        }
      } else if (
        !isDnsCompatibleBucketName(bucket) ||
        (bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:")) ||
        bucket.toLowerCase() !== bucket ||
        bucket.length < 3
      ) {
        endpointParams.ForcePathStyle = true;
      }
      if (endpointParams.DisableMultiRegionAccessPoints) {
        endpointParams.disableMultiRegionAccessPoints = true;
        endpointParams.DisableMRAP = true;
      }
      return endpointParams;
    }, "resolveParamsForS3");
    var DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
    var IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
    var DOTS_PATTERN = /\.\./;
    var isDnsCompatibleBucketName = /* @__PURE__ */ __name(
      (bucketName) =>
        DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName),
      "isDnsCompatibleBucketName",
    );
    var isArnBucketName = /* @__PURE__ */ __name((bucketName) => {
      const [arn, partition, service, , , bucket] = bucketName.split(":");
      const isArn = arn === "arn" && bucketName.split(":").length >= 6;
      const isValidArn = Boolean(isArn && partition && service && bucket);
      if (isArn && !isValidArn) {
        throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
      }
      return isValidArn;
    }, "isArnBucketName");
    var createConfigValueProvider = /* @__PURE__ */ __name((configKey, canonicalEndpointParamKey, config) => {
      const configProvider = /* @__PURE__ */ __name(async () => {
        const configValue = config[configKey] ?? config[canonicalEndpointParamKey];
        if (typeof configValue === "function") {
          return configValue();
        }
        return configValue;
      }, "configProvider");
      if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
        return async () => {
          const credentials =
            typeof config.credentials === "function" ? await config.credentials() : config.credentials;
          const configValue = credentials?.credentialScope ?? credentials?.CredentialScope;
          return configValue;
        };
      }
      if (configKey === "accountId" || canonicalEndpointParamKey === "AccountId") {
        return async () => {
          const credentials =
            typeof config.credentials === "function" ? await config.credentials() : config.credentials;
          const configValue = credentials?.accountId ?? credentials?.AccountId;
          return configValue;
        };
      }
      if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
        return async () => {
          if (config.isCustomEndpoint === false) {
            return void 0;
          }
          const endpoint = await configProvider();
          if (endpoint && typeof endpoint === "object") {
            if ("url" in endpoint) {
              return endpoint.url.href;
            }
            if ("hostname" in endpoint) {
              const { protocol, hostname, port, path } = endpoint;
              return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
            }
          }
          return endpoint;
        };
      }
      return configProvider;
    }, "createConfigValueProvider");
    var import_getEndpointFromConfig = require_getEndpointFromConfig();
    var import_url_parser2 = require_dist_cjs17();
    var toEndpointV1 = /* @__PURE__ */ __name((endpoint) => {
      if (typeof endpoint === "object") {
        if ("url" in endpoint) {
          return (0, import_url_parser2.parseUrl)(endpoint.url);
        }
        return endpoint;
      }
      return (0, import_url_parser2.parseUrl)(endpoint);
    }, "toEndpointV1");
    var getEndpointFromInstructions = /* @__PURE__ */ __name(
      async (commandInput, instructionsSupplier, clientConfig, context) => {
        if (!clientConfig.isCustomEndpoint) {
          let endpointFromConfig;
          if (clientConfig.serviceConfiguredEndpoint) {
            endpointFromConfig = await clientConfig.serviceConfiguredEndpoint();
          } else {
            endpointFromConfig = await (0, import_getEndpointFromConfig.getEndpointFromConfig)(clientConfig.serviceId);
          }
          if (endpointFromConfig) {
            clientConfig.endpoint = () => Promise.resolve(toEndpointV1(endpointFromConfig));
          }
        }
        const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
        if (typeof clientConfig.endpointProvider !== "function") {
          throw new Error("config.endpointProvider is not set.");
        }
        const endpoint = clientConfig.endpointProvider(endpointParams, context);
        return endpoint;
      },
      "getEndpointFromInstructions",
    );
    var resolveParams = /* @__PURE__ */ __name(async (commandInput, instructionsSupplier, clientConfig) => {
      const endpointParams = {};
      const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
      for (const [name, instruction] of Object.entries(instructions)) {
        switch (instruction.type) {
          case "staticContextParams":
            endpointParams[name] = instruction.value;
            break;
          case "contextParams":
            endpointParams[name] = commandInput[instruction.name];
            break;
          case "clientContextParams":
          case "builtInParams":
            endpointParams[name] = await createConfigValueProvider(instruction.name, name, clientConfig)();
            break;
          case "operationContextParams":
            endpointParams[name] = instruction.get(commandInput);
            break;
          default:
            throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
        }
      }
      if (Object.keys(instructions).length === 0) {
        Object.assign(endpointParams, clientConfig);
      }
      if (String(clientConfig.serviceId).toLowerCase() === "s3") {
        await resolveParamsForS3(endpointParams);
      }
      return endpointParams;
    }, "resolveParams");
    var import_core6 = (init_dist_es(), __toCommonJS(dist_es_exports));
    var import_util_middleware6 = require_dist_cjs2();
    var endpointMiddleware = /* @__PURE__ */ __name(({ config, instructions }) => {
      return (next, context) => async (args) => {
        if (config.isCustomEndpoint) {
          (0, import_core6.setFeature)(context, "ENDPOINT_OVERRIDE", "N");
        }
        const endpoint = await getEndpointFromInstructions(
          args.input,
          {
            getEndpointParameterInstructions() {
              return instructions;
            },
          },
          { ...config },
          context,
        );
        context.endpointV2 = endpoint;
        context.authSchemes = endpoint.properties?.authSchemes;
        const authScheme = context.authSchemes?.[0];
        if (authScheme) {
          context["signing_region"] = authScheme.signingRegion;
          context["signing_service"] = authScheme.signingName;
          const smithyContext = (0, import_util_middleware6.getSmithyContext)(context);
          const httpAuthOption = smithyContext?.selectedHttpAuthScheme?.httpAuthOption;
          if (httpAuthOption) {
            httpAuthOption.signingProperties = Object.assign(
              httpAuthOption.signingProperties || {},
              {
                signing_region: authScheme.signingRegion,
                signingRegion: authScheme.signingRegion,
                signing_service: authScheme.signingName,
                signingName: authScheme.signingName,
                signingRegionSet: authScheme.signingRegionSet,
              },
              authScheme.properties,
            );
          }
        }
        return next({
          ...args,
        });
      };
    }, "endpointMiddleware");
    var import_middleware_serde6 = require_dist_cjs4();
    var endpointMiddlewareOptions = {
      step: "serialize",
      tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
      name: "endpointV2Middleware",
      override: true,
      relation: "before",
      toMiddleware: import_middleware_serde6.serializerMiddlewareOption.name,
    };
    var getEndpointPlugin5 = /* @__PURE__ */ __name(
      (config, instructions) => ({
        applyToStack: (clientStack) => {
          clientStack.addRelativeTo(
            endpointMiddleware({
              config,
              instructions,
            }),
            endpointMiddlewareOptions,
          );
        },
      }),
      "getEndpointPlugin",
    );
    var import_getEndpointFromConfig2 = require_getEndpointFromConfig();
    var resolveEndpointConfig2 = /* @__PURE__ */ __name((input) => {
      const tls = input.tls ?? true;
      const { endpoint, useDualstackEndpoint, useFipsEndpoint } = input;
      const customEndpointProvider =
        endpoint != null
          ? async () => toEndpointV1(await (0, import_util_middleware6.normalizeProvider)(endpoint)())
          : void 0;
      const isCustomEndpoint = !!endpoint;
      const resolvedConfig = Object.assign(input, {
        endpoint: customEndpointProvider,
        tls,
        isCustomEndpoint,
        useDualstackEndpoint: (0, import_util_middleware6.normalizeProvider)(useDualstackEndpoint ?? false),
        useFipsEndpoint: (0, import_util_middleware6.normalizeProvider)(useFipsEndpoint ?? false),
      });
      let configuredEndpointPromise = void 0;
      resolvedConfig.serviceConfiguredEndpoint = async () => {
        if (input.serviceId && !configuredEndpointPromise) {
          configuredEndpointPromise = (0, import_getEndpointFromConfig2.getEndpointFromConfig)(input.serviceId);
        }
        return configuredEndpointPromise;
      };
      return resolvedConfig;
    }, "resolveEndpointConfig");
    var resolveEndpointRequiredConfig2 = /* @__PURE__ */ __name((input) => {
      const { endpoint } = input;
      if (endpoint === void 0) {
        input.endpoint = async () => {
          throw new Error(
            "@smithy/middleware-endpoint: (default endpointRuleSet) endpoint is not set - you must configure an endpoint.",
          );
        };
      }
      return input;
    }, "resolveEndpointRequiredConfig");
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/index.js
var dist_es_exports3 = {};
__export(dist_es_exports3, {
  GetCityCommand: () => GetCityCommand,
  GetCurrentTimeCommand: () => GetCurrentTimeCommand,
  GetForecastCommand: () => GetForecastCommand,
  ListCitiesCommand: () => ListCitiesCommand,
  NoSuchResource: () => NoSuchResource,
  Weather: () => Weather,
  WeatherClient: () => WeatherClient,
  WeatherServiceException: () => WeatherServiceException,
  __Client: () => import_smithy_client11.Client,
  paginateListCities: () => paginateListCities,
});
module.exports = __toCommonJS(dist_es_exports3);

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/auth/httpAuthSchemeProvider.js
var import_util_middleware = __toESM(require_dist_cjs2());
var defaultWeatherHttpAuthSchemeParametersProvider = async (config, context, input) => {
  return {
    operation: (0, import_util_middleware.getSmithyContext)(context).operation,
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
  return Object.assign(config, {
    authSchemePreference: (0, import_util_middleware.normalizeProvider)(config.authSchemePreference ?? []),
  });
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters = (options) => {
  return Object.assign(options, {
    defaultSigningName: "",
  });
};
var commonParams = {
  endpoint: { type: "builtInParams", name: "endpoint" },
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
    "@aws-crypto/sha256-browser": "5.2.0",
    "@aws-crypto/sha256-js": "5.2.0",
    "@aws-sdk/middleware-host-header": "3.840.0",
    "@aws-sdk/middleware-logger": "3.840.0",
    "@aws-sdk/middleware-recursion-detection": "3.840.0",
    "@aws-sdk/middleware-user-agent": "3.844.0",
    "@aws-sdk/types": "3.840.0",
    "@aws-sdk/util-user-agent-browser": "3.840.0",
    "@aws-sdk/util-user-agent-node": "3.844.0",
    "@smithy/config-resolver": "^4.1.4",
    "@smithy/core": "^3.7.0",
    "@smithy/fetch-http-handler": "^5.1.0",
    "@smithy/hash-node": "^4.0.4",
    "@smithy/invalid-dependency": "^4.0.4",
    "@smithy/middleware-content-length": "^4.0.4",
    "@smithy/middleware-endpoint": "^4.1.14",
    "@smithy/middleware-retry": "^4.1.15",
    "@smithy/middleware-serde": "^4.0.8",
    "@smithy/middleware-stack": "^4.0.4",
    "@smithy/node-config-provider": "^4.1.3",
    "@smithy/node-http-handler": "^4.1.0",
    "@smithy/protocol-http": "^5.1.2",
    "@smithy/smithy-client": "^4.4.6",
    "@smithy/types": "^4.3.1",
    "@smithy/url-parser": "^4.0.4",
    "@smithy/util-base64": "^4.0.0",
    "@smithy/util-body-length-browser": "^4.0.0",
    "@smithy/util-body-length-node": "^4.0.0",
    "@smithy/util-defaults-mode-browser": "^4.0.22",
    "@smithy/util-defaults-mode-node": "^4.0.22",
    "@smithy/util-endpoints": "^3.0.6",
    "@smithy/util-middleware": "^4.0.4",
    "@smithy/util-retry": "^4.0.6",
    "@smithy/util-utf8": "^4.0.0",
    tslib: "^2.6.2",
  },
  devDependencies: {
    "@tsconfig/node18": "18.2.4",
    "@types/node": "^18.19.69",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    rimraf: "^3.0.0",
    typescript: "~5.8.3",
  },
  engines: {
    node: ">=18.0.0",
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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/runtimeConfig.js
var import_util_user_agent_node = __toESM(require_dist_cjs26());
var import_hash_node = __toESM(require_dist_cjs27());
var import_middleware_retry = __toESM(require_dist_cjs30());
var import_node_config_provider = __toESM(require_dist_cjs32());
var import_node_http_handler = __toESM(require_dist_cjs11());
var import_util_body_length_node = __toESM(require_dist_cjs33());
var import_util_retry = __toESM(require_dist_cjs29());

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/endpoint/ruleset.js
var ruleSet = {
  version: "1.0",
  parameters: {
    endpoint: {
      type: "string",
      builtIn: "SDK::Endpoint",
      documentation: "Endpoint used for making requests. Should be formatted as a URI.",
    },
  },
  rules: [
    {
      conditions: [
        {
          fn: "isSet",
          argv: [
            {
              ref: "endpoint",
            },
          ],
        },
      ],
      endpoint: {
        url: {
          ref: "endpoint",
        },
      },
      type: "endpoint",
    },
    {
      conditions: [],
      error: "(default endpointRuleSet) endpoint is not set - you must configure an endpoint.",
      type: "error",
    },
  ],
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/endpoint/endpointResolver.js
var import_util_endpoints = __toESM(require_dist_cjs15());
var cache = new import_util_endpoints.EndpointCache({
  size: 50,
  params: ["endpoint"],
});
var defaultEndpointResolver = (endpointParams, context = {}) => {
  return cache.get(endpointParams, () =>
    (0, import_util_endpoints.resolveEndpoint)(ruleSet, {
      endpointParams,
      logger: context.logger,
    }),
  );
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/runtimeConfig.shared.js
init_dist_es();
var import_smithy_client7 = __toESM(require_dist_cjs23());
var import_url_parser = __toESM(require_dist_cjs17());
var import_util_base646 = __toESM(require_dist_cjs8());
var import_util_utf84 = __toESM(require_dist_cjs7());
var getRuntimeConfig = (config) => {
  return {
    apiVersion: "2006-03-01",
    base64Decoder: config?.base64Decoder ?? import_util_base646.fromBase64,
    base64Encoder: config?.base64Encoder ?? import_util_base646.toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
    extensions: config?.extensions ?? [],
    httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultWeatherHttpAuthSchemeProvider,
    httpAuthSchemes: config?.httpAuthSchemes ?? [
      {
        schemeId: "smithy.api#noAuth",
        identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
        signer: new NoAuthSigner(),
      },
    ],
    logger: config?.logger ?? new import_smithy_client7.NoOpLogger(),
    urlParser: config?.urlParser ?? import_url_parser.parseUrl,
    utf8Decoder: config?.utf8Decoder ?? import_util_utf84.fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? import_util_utf84.toUtf8,
  };
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/runtimeConfig.js
var import_smithy_client8 = __toESM(require_dist_cjs23());
var import_util_defaults_mode_node = __toESM(require_dist_cjs37());
var import_smithy_client9 = __toESM(require_dist_cjs23());
var getRuntimeConfig2 = (config) => {
  (0, import_smithy_client9.emitWarningIfUnsupportedVersion)(process.version);
  const defaultsMode = (0, import_util_defaults_mode_node.resolveDefaultsModeConfig)(config);
  const defaultConfigProvider = () => defaultsMode().then(import_smithy_client8.loadConfigsForDefaultMode);
  const clientSharedValues = getRuntimeConfig(config);
  const loaderConfig = {
    profile: config?.profile,
    logger: clientSharedValues.logger,
  };
  return {
    ...clientSharedValues,
    ...config,
    runtime: "node",
    defaultsMode,
    bodyLengthChecker: config?.bodyLengthChecker ?? import_util_body_length_node.calculateBodyLength,
    defaultUserAgentProvider:
      config?.defaultUserAgentProvider ??
      (0, import_util_user_agent_node.createDefaultUserAgentProvider)({ clientVersion: package_default.version }),
    maxAttempts:
      config?.maxAttempts ??
      (0, import_node_config_provider.loadConfig)(import_middleware_retry.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
    requestHandler: import_node_http_handler.NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
    retryMode:
      config?.retryMode ??
      (0, import_node_config_provider.loadConfig)(
        {
          ...import_middleware_retry.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await defaultConfigProvider()).retryMode || import_util_retry.DEFAULT_RETRY_MODE,
        },
        config,
      ),
    sha256: config?.sha256 ?? import_hash_node.Hash.bind(null, "sha256"),
    streamCollector: config?.streamCollector ?? import_node_http_handler.streamCollector,
    userAgentAppId:
      config?.userAgentAppId ??
      (0, import_node_config_provider.loadConfig)(import_util_user_agent_node.NODE_APP_ID_CONFIG_OPTIONS, loaderConfig),
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
var import_protocol_http12 = __toESM(require_dist_cjs3());
var import_smithy_client10 = __toESM(require_dist_cjs23());
var resolveRuntimeExtensions = (runtimeConfig, extensions) => {
  const extensionConfiguration = Object.assign(
    (0, import_smithy_client10.getDefaultExtensionConfiguration)(runtimeConfig),
    (0, import_protocol_http12.getHttpHandlerExtensionConfiguration)(runtimeConfig),
    getHttpAuthExtensionConfiguration(runtimeConfig),
  );
  extensions.forEach((extension) => extension.configure(extensionConfiguration));
  return Object.assign(
    runtimeConfig,
    (0, import_smithy_client10.resolveDefaultRuntimeConfig)(extensionConfiguration),
    (0, import_protocol_http12.resolveHttpHandlerRuntimeConfig)(extensionConfiguration),
    resolveHttpAuthRuntimeConfig(extensionConfiguration),
  );
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/WeatherClient.js
var import_middleware_host_header = __toESM(require_dist_cjs38());
var import_middleware_logger = __toESM(require_dist_cjs39());
var import_middleware_recursion_detection = __toESM(require_dist_cjs40());
var import_middleware_user_agent = __toESM(require_dist_cjs25());
init_dist_es();
var import_middleware_content_length = __toESM(require_dist_cjs41());
var import_middleware_endpoint = __toESM(require_dist_cjs42());
var import_middleware_retry2 = __toESM(require_dist_cjs30());
var import_smithy_client11 = __toESM(require_dist_cjs23());
var WeatherClient = class extends import_smithy_client11.Client {
  constructor(...[configuration]) {
    let _config_0 = getRuntimeConfig2(configuration || {});
    super(_config_0);
    __publicField(this, "config");
    this.initConfig = _config_0;
    let _config_1 = resolveClientEndpointParameters(_config_0);
    let _config_2 = (0, import_middleware_user_agent.resolveUserAgentConfig)(_config_1);
    let _config_3 = (0, import_middleware_retry2.resolveRetryConfig)(_config_2);
    let _config_4 = (0, import_middleware_host_header.resolveHostHeaderConfig)(_config_3);
    let _config_5 = (0, import_middleware_endpoint.resolveEndpointConfig)(_config_4);
    let _config_6 = (0, import_middleware_endpoint.resolveEndpointRequiredConfig)(_config_5);
    let _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    let _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use((0, import_middleware_user_agent.getUserAgentPlugin)(this.config));
    this.middlewareStack.use((0, import_middleware_retry2.getRetryPlugin)(this.config));
    this.middlewareStack.use((0, import_middleware_content_length.getContentLengthPlugin)(this.config));
    this.middlewareStack.use((0, import_middleware_host_header.getHostHeaderPlugin)(this.config));
    this.middlewareStack.use((0, import_middleware_logger.getLoggerPlugin)(this.config));
    this.middlewareStack.use((0, import_middleware_recursion_detection.getRecursionDetectionPlugin)(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultWeatherHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config) => new DefaultIdentityProviderConfig({}),
      }),
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/commands/GetCityCommand.js
var import_middleware_endpoint2 = __toESM(require_dist_cjs42());
var import_middleware_serde2 = __toESM(require_dist_cjs4());
var import_smithy_client12 = __toESM(require_dist_cjs23());
var GetCityCommand = class extends import_smithy_client12.Command.classBuilder()
  .ep(commonParams)
  .m(function (Command, cs, config, o) {
    return [
      (0, import_middleware_serde2.getSerdePlugin)(config, this.serialize, this.deserialize),
      (0, import_middleware_endpoint2.getEndpointPlugin)(config, Command.getEndpointParameterInstructions()),
    ];
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
var import_middleware_endpoint3 = __toESM(require_dist_cjs42());
var import_middleware_serde3 = __toESM(require_dist_cjs4());
var import_smithy_client13 = __toESM(require_dist_cjs23());
var GetCurrentTimeCommand = class extends import_smithy_client13.Command.classBuilder()
  .ep(commonParams)
  .m(function (Command, cs, config, o) {
    return [
      (0, import_middleware_serde3.getSerdePlugin)(config, this.serialize, this.deserialize),
      (0, import_middleware_endpoint3.getEndpointPlugin)(config, Command.getEndpointParameterInstructions()),
    ];
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
var import_middleware_endpoint4 = __toESM(require_dist_cjs42());
var import_middleware_serde4 = __toESM(require_dist_cjs4());
var import_smithy_client14 = __toESM(require_dist_cjs23());
var GetForecastCommand = class extends import_smithy_client14.Command.classBuilder()
  .ep(commonParams)
  .m(function (Command, cs, config, o) {
    return [
      (0, import_middleware_serde4.getSerdePlugin)(config, this.serialize, this.deserialize),
      (0, import_middleware_endpoint4.getEndpointPlugin)(config, Command.getEndpointParameterInstructions()),
    ];
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
var import_middleware_endpoint5 = __toESM(require_dist_cjs42());
var import_middleware_serde5 = __toESM(require_dist_cjs4());
var import_smithy_client15 = __toESM(require_dist_cjs23());
var ListCitiesCommand = class extends import_smithy_client15.Command.classBuilder()
  .ep(commonParams)
  .m(function (Command, cs, config, o) {
    return [
      (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
      (0, import_middleware_endpoint5.getEndpointPlugin)(config, Command.getEndpointParameterInstructions()),
    ];
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
var import_smithy_client16 = __toESM(require_dist_cjs23());
var commands = {
  GetCityCommand,
  GetCurrentTimeCommand,
  GetForecastCommand,
  ListCitiesCommand,
};
var Weather = class extends WeatherClient {};
(0, import_smithy_client16.createAggregatedClient)(commands, Weather);

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/pagination/ListCitiesPaginator.js
init_dist_es();
var paginateListCities = createPaginator(WeatherClient, ListCitiesCommand, "nextToken", "nextToken", "pageSize");

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/models/WeatherServiceException.js
var import_smithy_client17 = __toESM(require_dist_cjs23());
var WeatherServiceException = class _WeatherServiceException extends import_smithy_client17.ServiceException {
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
    __publicField(this, "name", "NoSuchResource");
    __publicField(this, "$fault", "client");
    __publicField(this, "resourceType");
    Object.setPrototypeOf(this, _NoSuchResource.prototype);
    this.resourceType = opts.resourceType;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
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
  });
