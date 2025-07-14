// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/types/dist-es/auth/auth.js
var HttpAuthLocation;
(function (HttpAuthLocation2) {
  HttpAuthLocation2["HEADER"] = "header";
  HttpAuthLocation2["QUERY"] = "query";
})(HttpAuthLocation || (HttpAuthLocation = {}));

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js
var HttpApiKeyAuthLocation;
(function (HttpApiKeyAuthLocation2) {
  HttpApiKeyAuthLocation2["HEADER"] = "header";
  HttpApiKeyAuthLocation2["QUERY"] = "query";
})(HttpApiKeyAuthLocation || (HttpApiKeyAuthLocation = {}));

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/types/dist-es/endpoint.js
var EndpointURLScheme;
(function (EndpointURLScheme2) {
  EndpointURLScheme2["HTTP"] = "http";
  EndpointURLScheme2["HTTPS"] = "https";
})(EndpointURLScheme || (EndpointURLScheme = {}));

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/types/dist-es/extensions/checksum.js
var AlgorithmId;
(function (AlgorithmId2) {
  AlgorithmId2["MD5"] = "md5";
  AlgorithmId2["CRC32"] = "crc32";
  AlgorithmId2["CRC32C"] = "crc32c";
  AlgorithmId2["SHA1"] = "sha1";
  AlgorithmId2["SHA256"] = "sha256";
})(AlgorithmId || (AlgorithmId = {}));

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/types/dist-es/http.js
var FieldPosition;
(function (FieldPosition2) {
  FieldPosition2[(FieldPosition2["HEADER"] = 0)] = "HEADER";
  FieldPosition2[(FieldPosition2["TRAILER"] = 1)] = "TRAILER";
})(FieldPosition || (FieldPosition = {}));

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/types/dist-es/middleware.js
var SMITHY_CONTEXT_KEY = "__smithy_context";

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/types/dist-es/profile.js
var IniSectionType;
(function (IniSectionType2) {
  IniSectionType2["PROFILE"] = "profile";
  IniSectionType2["SSO_SESSION"] = "sso-session";
  IniSectionType2["SERVICES"] = "services";
})(IniSectionType || (IniSectionType = {}));

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/types/dist-es/transfer.js
var RequestHandlerProtocol;
(function (RequestHandlerProtocol2) {
  RequestHandlerProtocol2["HTTP_0_9"] = "http/0.9";
  RequestHandlerProtocol2["HTTP_1_0"] = "http/1.0";
  RequestHandlerProtocol2["TDS_8_0"] = "tds/8.0";
})(RequestHandlerProtocol || (RequestHandlerProtocol = {}));

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js
var getSmithyContext = (context) => context[SMITHY_CONTEXT_KEY] || (context[SMITHY_CONTEXT_KEY] = {});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js
var normalizeProvider = (input) => {
  if (typeof input === "function") return input;
  const promisified = Promise.resolve(input);
  return () => promisified;
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/auth/httpAuthSchemeProvider.js
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
  return Object.assign(config, {
    authSchemePreference: normalizeProvider(config.authSchemePreference ?? []),
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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
var fromUtf8 = (input) => new TextEncoder().encode(input);

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-crypto/util/build/module/convertToBuffer.js
var fromUtf82 =
  typeof Buffer !== "undefined" && Buffer.from
    ? function (input) {
        return Buffer.from(input, "utf8");
      }
    : fromUtf8;
function convertToBuffer(data) {
  if (data instanceof Uint8Array) return data;
  if (typeof data === "string") {
    return fromUtf82(data);
  }
  if (ArrayBuffer.isView(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }
  return new Uint8Array(data);
}

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-crypto/util/build/module/isEmptyData.js
function isEmptyData(data) {
  if (typeof data === "string") {
    return data.length === 0;
  }
  return data.byteLength === 0;
}

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-crypto/sha256-browser/build/module/constants.js
var SHA_256_HASH = { name: "SHA-256" };
var SHA_256_HMAC_ALGO = {
  name: "HMAC",
  hash: SHA_256_HASH,
};
var EMPTY_DATA_SHA_256 = new Uint8Array([
  227, 176, 196, 66, 152, 252, 28, 20, 154, 251, 244, 200, 153, 111, 185, 36, 39, 174, 65, 228, 100, 155, 147, 76, 164,
  149, 153, 27, 120, 82, 184, 85,
]);

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/util-locate-window/dist-es/index.js
var fallbackWindow = {};
function locateWindow() {
  if (typeof window !== "undefined") {
    return window;
  } else if (typeof self !== "undefined") {
    return self;
  }
  return fallbackWindow;
}

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-crypto/sha256-browser/build/module/webCryptoSha256.js
var Sha256 =
  /** @class */
  (function () {
    function Sha2564(secret) {
      this.toHash = new Uint8Array(0);
      this.secret = secret;
      this.reset();
    }
    Sha2564.prototype.update = function (data) {
      if (isEmptyData(data)) {
        return;
      }
      var update = convertToBuffer(data);
      var typedArray = new Uint8Array(this.toHash.byteLength + update.byteLength);
      typedArray.set(this.toHash, 0);
      typedArray.set(update, this.toHash.byteLength);
      this.toHash = typedArray;
    };
    Sha2564.prototype.digest = function () {
      var _this = this;
      if (this.key) {
        return this.key.then(function (key) {
          return locateWindow()
            .crypto.subtle.sign(SHA_256_HMAC_ALGO, key, _this.toHash)
            .then(function (data) {
              return new Uint8Array(data);
            });
        });
      }
      if (isEmptyData(this.toHash)) {
        return Promise.resolve(EMPTY_DATA_SHA_256);
      }
      return Promise.resolve()
        .then(function () {
          return locateWindow().crypto.subtle.digest(SHA_256_HASH, _this.toHash);
        })
        .then(function (data) {
          return Promise.resolve(new Uint8Array(data));
        });
    };
    Sha2564.prototype.reset = function () {
      var _this = this;
      this.toHash = new Uint8Array(0);
      if (this.secret && this.secret !== void 0) {
        this.key = new Promise(function (resolve, reject) {
          locateWindow()
            .crypto.subtle.importKey("raw", convertToBuffer(_this.secret), SHA_256_HMAC_ALGO, false, ["sign"])
            .then(resolve, reject);
        });
        this.key.catch(function () {});
      }
    };
    return Sha2564;
  })();

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/tslib/tslib.es6.mjs
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P
      ? value
      : new P(function (resolve) {
          resolve(value);
        });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: [],
    },
    f,
    y,
    t,
    g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return (
    (g.next = verb(0)),
    (g["throw"] = verb(1)),
    (g["return"] = verb(2)),
    typeof Symbol === "function" &&
      (g[Symbol.iterator] = function () {
        return this;
      }),
    g
  );
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while ((g && ((g = 0), op[0] && (_ = 0)), _))
      try {
        if (
          ((f = 1),
          y &&
            (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) &&
            !(t = t.call(y, op[1])).done)
        )
          return t;
        if (((y = 0), t)) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-crypto/sha256-js/build/module/constants.js
var BLOCK_SIZE = 64;
var DIGEST_LENGTH = 32;
var KEY = new Uint32Array([
  1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401,
  607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628,
  770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
  113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
  2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
  659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
  2428436474, 2756734187, 3204031479, 3329325298,
]);
var INIT = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
var MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-crypto/sha256-js/build/module/RawSha256.js
var RawSha256 =
  /** @class */
  (function () {
    function RawSha2562() {
      this.state = Int32Array.from(INIT);
      this.temp = new Int32Array(64);
      this.buffer = new Uint8Array(64);
      this.bufferLength = 0;
      this.bytesHashed = 0;
      this.finished = false;
    }
    RawSha2562.prototype.update = function (data) {
      if (this.finished) {
        throw new Error("Attempted to update an already finished hash.");
      }
      var position = 0;
      var byteLength = data.byteLength;
      this.bytesHashed += byteLength;
      if (this.bytesHashed * 8 > MAX_HASHABLE_LENGTH) {
        throw new Error("Cannot hash more than 2^53 - 1 bits");
      }
      while (byteLength > 0) {
        this.buffer[this.bufferLength++] = data[position++];
        byteLength--;
        if (this.bufferLength === BLOCK_SIZE) {
          this.hashBuffer();
          this.bufferLength = 0;
        }
      }
    };
    RawSha2562.prototype.digest = function () {
      if (!this.finished) {
        var bitsHashed = this.bytesHashed * 8;
        var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
        var undecoratedLength = this.bufferLength;
        bufferView.setUint8(this.bufferLength++, 128);
        if (undecoratedLength % BLOCK_SIZE >= BLOCK_SIZE - 8) {
          for (var i = this.bufferLength; i < BLOCK_SIZE; i++) {
            bufferView.setUint8(i, 0);
          }
          this.hashBuffer();
          this.bufferLength = 0;
        }
        for (var i = this.bufferLength; i < BLOCK_SIZE - 8; i++) {
          bufferView.setUint8(i, 0);
        }
        bufferView.setUint32(BLOCK_SIZE - 8, Math.floor(bitsHashed / 4294967296), true);
        bufferView.setUint32(BLOCK_SIZE - 4, bitsHashed);
        this.hashBuffer();
        this.finished = true;
      }
      var out = new Uint8Array(DIGEST_LENGTH);
      for (var i = 0; i < 8; i++) {
        out[i * 4] = (this.state[i] >>> 24) & 255;
        out[i * 4 + 1] = (this.state[i] >>> 16) & 255;
        out[i * 4 + 2] = (this.state[i] >>> 8) & 255;
        out[i * 4 + 3] = (this.state[i] >>> 0) & 255;
      }
      return out;
    };
    RawSha2562.prototype.hashBuffer = function () {
      var _a = this,
        buffer = _a.buffer,
        state = _a.state;
      var state0 = state[0],
        state1 = state[1],
        state2 = state[2],
        state3 = state[3],
        state4 = state[4],
        state5 = state[5],
        state6 = state[6],
        state7 = state[7];
      for (var i = 0; i < BLOCK_SIZE; i++) {
        if (i < 16) {
          this.temp[i] =
            ((buffer[i * 4] & 255) << 24) |
            ((buffer[i * 4 + 1] & 255) << 16) |
            ((buffer[i * 4 + 2] & 255) << 8) |
            (buffer[i * 4 + 3] & 255);
        } else {
          var u = this.temp[i - 2];
          var t1_1 = ((u >>> 17) | (u << 15)) ^ ((u >>> 19) | (u << 13)) ^ (u >>> 10);
          u = this.temp[i - 15];
          var t2_1 = ((u >>> 7) | (u << 25)) ^ ((u >>> 18) | (u << 14)) ^ (u >>> 3);
          this.temp[i] = ((t1_1 + this.temp[i - 7]) | 0) + ((t2_1 + this.temp[i - 16]) | 0);
        }
        var t1 =
          ((((((state4 >>> 6) | (state4 << 26)) ^
            ((state4 >>> 11) | (state4 << 21)) ^
            ((state4 >>> 25) | (state4 << 7))) +
            ((state4 & state5) ^ (~state4 & state6))) |
            0) +
            ((state7 + ((KEY[i] + this.temp[i]) | 0)) | 0)) |
          0;
        var t2 =
          ((((state0 >>> 2) | (state0 << 30)) ^
            ((state0 >>> 13) | (state0 << 19)) ^
            ((state0 >>> 22) | (state0 << 10))) +
            ((state0 & state1) ^ (state0 & state2) ^ (state1 & state2))) |
          0;
        state7 = state6;
        state6 = state5;
        state5 = state4;
        state4 = (state3 + t1) | 0;
        state3 = state2;
        state2 = state1;
        state1 = state0;
        state0 = (t1 + t2) | 0;
      }
      state[0] += state0;
      state[1] += state1;
      state[2] += state2;
      state[3] += state3;
      state[4] += state4;
      state[5] += state5;
      state[6] += state6;
      state[7] += state7;
    };
    return RawSha2562;
  })();

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js
var Sha2562 =
  /** @class */
  (function () {
    function Sha2564(secret) {
      this.secret = secret;
      this.hash = new RawSha256();
      this.reset();
    }
    Sha2564.prototype.update = function (toHash) {
      if (isEmptyData(toHash) || this.error) {
        return;
      }
      try {
        this.hash.update(convertToBuffer(toHash));
      } catch (e) {
        this.error = e;
      }
    };
    Sha2564.prototype.digestSync = function () {
      if (this.error) {
        throw this.error;
      }
      if (this.outer) {
        if (!this.outer.finished) {
          this.outer.update(this.hash.digest());
        }
        return this.outer.digest();
      }
      return this.hash.digest();
    };
    Sha2564.prototype.digest = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          return [2, this.digestSync()];
        });
      });
    };
    Sha2564.prototype.reset = function () {
      this.hash = new RawSha256();
      if (this.secret) {
        this.outer = new RawSha256();
        var inner = bufferFromSecret(this.secret);
        var outer = new Uint8Array(BLOCK_SIZE);
        outer.set(inner);
        for (var i = 0; i < BLOCK_SIZE; i++) {
          inner[i] ^= 54;
          outer[i] ^= 92;
        }
        this.hash.update(inner);
        this.outer.update(outer);
        for (var i = 0; i < inner.byteLength; i++) {
          inner[i] = 0;
        }
      }
    };
    return Sha2564;
  })();
function bufferFromSecret(secret) {
  var input = convertToBuffer(secret);
  if (input.byteLength > BLOCK_SIZE) {
    var bufferHash = new RawSha256();
    bufferHash.update(input);
    input = bufferHash.digest();
  }
  var buffer = new Uint8Array(BLOCK_SIZE);
  buffer.set(input);
  return buffer;
}

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-crypto/supports-web-crypto/build/module/supportsWebCrypto.js
var subtleCryptoMethods = ["decrypt", "digest", "encrypt", "exportKey", "generateKey", "importKey", "sign", "verify"];
function supportsWebCrypto(window2) {
  if (supportsSecureRandom(window2) && typeof window2.crypto.subtle === "object") {
    var subtle = window2.crypto.subtle;
    return supportsSubtleCrypto(subtle);
  }
  return false;
}
function supportsSecureRandom(window2) {
  if (typeof window2 === "object" && typeof window2.crypto === "object") {
    var getRandomValues2 = window2.crypto.getRandomValues;
    return typeof getRandomValues2 === "function";
  }
  return false;
}
function supportsSubtleCrypto(subtle) {
  return (
    subtle &&
    subtleCryptoMethods.every(function (methodName) {
      return typeof subtle[methodName] === "function";
    })
  );
}

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-crypto/sha256-browser/build/module/crossPlatformSha256.js
var Sha2563 =
  /** @class */
  (function () {
    function Sha2564(secret) {
      if (supportsWebCrypto(locateWindow())) {
        this.hash = new Sha256(secret);
      } else {
        this.hash = new Sha2562(secret);
      }
    }
    Sha2564.prototype.update = function (data, encoding) {
      this.hash.update(convertToBuffer(data));
    };
    Sha2564.prototype.digest = function () {
      return this.hash.digest();
    };
    Sha2564.prototype.reset = function () {
      this.hash.reset();
    };
    return Sha2564;
  })();

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/bowser/src/constants.js
var BROWSER_ALIASES_MAP = {
  "Amazon Silk": "amazon_silk",
  "Android Browser": "android",
  Bada: "bada",
  BlackBerry: "blackberry",
  Chrome: "chrome",
  Chromium: "chromium",
  Electron: "electron",
  Epiphany: "epiphany",
  Firefox: "firefox",
  Focus: "focus",
  Generic: "generic",
  "Google Search": "google_search",
  Googlebot: "googlebot",
  "Internet Explorer": "ie",
  "K-Meleon": "k_meleon",
  Maxthon: "maxthon",
  "Microsoft Edge": "edge",
  "MZ Browser": "mz",
  "NAVER Whale Browser": "naver",
  Opera: "opera",
  "Opera Coast": "opera_coast",
  PhantomJS: "phantomjs",
  Puffin: "puffin",
  QupZilla: "qupzilla",
  QQ: "qq",
  QQLite: "qqlite",
  Safari: "safari",
  Sailfish: "sailfish",
  "Samsung Internet for Android": "samsung_internet",
  SeaMonkey: "seamonkey",
  Sleipnir: "sleipnir",
  Swing: "swing",
  Tizen: "tizen",
  "UC Browser": "uc",
  Vivaldi: "vivaldi",
  "WebOS Browser": "webos",
  WeChat: "wechat",
  "Yandex Browser": "yandex",
  Roku: "roku",
};
var BROWSER_MAP = {
  amazon_silk: "Amazon Silk",
  android: "Android Browser",
  bada: "Bada",
  blackberry: "BlackBerry",
  chrome: "Chrome",
  chromium: "Chromium",
  electron: "Electron",
  epiphany: "Epiphany",
  firefox: "Firefox",
  focus: "Focus",
  generic: "Generic",
  googlebot: "Googlebot",
  google_search: "Google Search",
  ie: "Internet Explorer",
  k_meleon: "K-Meleon",
  maxthon: "Maxthon",
  edge: "Microsoft Edge",
  mz: "MZ Browser",
  naver: "NAVER Whale Browser",
  opera: "Opera",
  opera_coast: "Opera Coast",
  phantomjs: "PhantomJS",
  puffin: "Puffin",
  qupzilla: "QupZilla",
  qq: "QQ Browser",
  qqlite: "QQ Browser Lite",
  safari: "Safari",
  sailfish: "Sailfish",
  samsung_internet: "Samsung Internet for Android",
  seamonkey: "SeaMonkey",
  sleipnir: "Sleipnir",
  swing: "Swing",
  tizen: "Tizen",
  uc: "UC Browser",
  vivaldi: "Vivaldi",
  webos: "WebOS Browser",
  wechat: "WeChat",
  yandex: "Yandex Browser",
};
var PLATFORMS_MAP = {
  tablet: "tablet",
  mobile: "mobile",
  desktop: "desktop",
  tv: "tv",
};
var OS_MAP = {
  WindowsPhone: "Windows Phone",
  Windows: "Windows",
  MacOS: "macOS",
  iOS: "iOS",
  Android: "Android",
  WebOS: "WebOS",
  BlackBerry: "BlackBerry",
  Bada: "Bada",
  Tizen: "Tizen",
  Linux: "Linux",
  ChromeOS: "Chrome OS",
  PlayStation4: "PlayStation 4",
  Roku: "Roku",
};
var ENGINE_MAP = {
  EdgeHTML: "EdgeHTML",
  Blink: "Blink",
  Trident: "Trident",
  Presto: "Presto",
  Gecko: "Gecko",
  WebKit: "WebKit",
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/bowser/src/utils.js
var Utils = class _Utils {
  /**
   * Get first matched item for a string
   * @param {RegExp} regexp
   * @param {String} ua
   * @return {Array|{index: number, input: string}|*|boolean|string}
   */
  static getFirstMatch(regexp, ua) {
    const match = ua.match(regexp);
    return (match && match.length > 0 && match[1]) || "";
  }
  /**
   * Get second matched item for a string
   * @param regexp
   * @param {String} ua
   * @return {Array|{index: number, input: string}|*|boolean|string}
   */
  static getSecondMatch(regexp, ua) {
    const match = ua.match(regexp);
    return (match && match.length > 1 && match[2]) || "";
  }
  /**
   * Match a regexp and return a constant or undefined
   * @param {RegExp} regexp
   * @param {String} ua
   * @param {*} _const Any const that will be returned if regexp matches the string
   * @return {*}
   */
  static matchAndReturnConst(regexp, ua, _const) {
    if (regexp.test(ua)) {
      return _const;
    }
    return void 0;
  }
  static getWindowsVersionName(version) {
    switch (version) {
      case "NT":
        return "NT";
      case "XP":
        return "XP";
      case "NT 5.0":
        return "2000";
      case "NT 5.1":
        return "XP";
      case "NT 5.2":
        return "2003";
      case "NT 6.0":
        return "Vista";
      case "NT 6.1":
        return "7";
      case "NT 6.2":
        return "8";
      case "NT 6.3":
        return "8.1";
      case "NT 10.0":
        return "10";
      default:
        return void 0;
    }
  }
  /**
   * Get macOS version name
   *    10.5 - Leopard
   *    10.6 - Snow Leopard
   *    10.7 - Lion
   *    10.8 - Mountain Lion
   *    10.9 - Mavericks
   *    10.10 - Yosemite
   *    10.11 - El Capitan
   *    10.12 - Sierra
   *    10.13 - High Sierra
   *    10.14 - Mojave
   *    10.15 - Catalina
   *
   * @example
   *   getMacOSVersionName("10.14") // 'Mojave'
   *
   * @param  {string} version
   * @return {string} versionName
   */
  static getMacOSVersionName(version) {
    const v = version
      .split(".")
      .splice(0, 2)
      .map((s) => parseInt(s, 10) || 0);
    v.push(0);
    if (v[0] !== 10) return void 0;
    switch (v[1]) {
      case 5:
        return "Leopard";
      case 6:
        return "Snow Leopard";
      case 7:
        return "Lion";
      case 8:
        return "Mountain Lion";
      case 9:
        return "Mavericks";
      case 10:
        return "Yosemite";
      case 11:
        return "El Capitan";
      case 12:
        return "Sierra";
      case 13:
        return "High Sierra";
      case 14:
        return "Mojave";
      case 15:
        return "Catalina";
      default:
        return void 0;
    }
  }
  /**
   * Get Android version name
   *    1.5 - Cupcake
   *    1.6 - Donut
   *    2.0 - Eclair
   *    2.1 - Eclair
   *    2.2 - Froyo
   *    2.x - Gingerbread
   *    3.x - Honeycomb
   *    4.0 - Ice Cream Sandwich
   *    4.1 - Jelly Bean
   *    4.4 - KitKat
   *    5.x - Lollipop
   *    6.x - Marshmallow
   *    7.x - Nougat
   *    8.x - Oreo
   *    9.x - Pie
   *
   * @example
   *   getAndroidVersionName("7.0") // 'Nougat'
   *
   * @param  {string} version
   * @return {string} versionName
   */
  static getAndroidVersionName(version) {
    const v = version
      .split(".")
      .splice(0, 2)
      .map((s) => parseInt(s, 10) || 0);
    v.push(0);
    if (v[0] === 1 && v[1] < 5) return void 0;
    if (v[0] === 1 && v[1] < 6) return "Cupcake";
    if (v[0] === 1 && v[1] >= 6) return "Donut";
    if (v[0] === 2 && v[1] < 2) return "Eclair";
    if (v[0] === 2 && v[1] === 2) return "Froyo";
    if (v[0] === 2 && v[1] > 2) return "Gingerbread";
    if (v[0] === 3) return "Honeycomb";
    if (v[0] === 4 && v[1] < 1) return "Ice Cream Sandwich";
    if (v[0] === 4 && v[1] < 4) return "Jelly Bean";
    if (v[0] === 4 && v[1] >= 4) return "KitKat";
    if (v[0] === 5) return "Lollipop";
    if (v[0] === 6) return "Marshmallow";
    if (v[0] === 7) return "Nougat";
    if (v[0] === 8) return "Oreo";
    if (v[0] === 9) return "Pie";
    return void 0;
  }
  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  static getVersionPrecision(version) {
    return version.split(".").length;
  }
  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions('1.10.2.1',  '1.8.2.1.90')    // 1
   *   compareVersions('1.010.2.1', '1.09.2.1.90');  // 1
   *   compareVersions('1.10.2.1',  '1.10.2.1');     // 0
   *   compareVersions('1.10.2.1',  '1.0800.2');     // -1
   *   compareVersions('1.10.2.1',  '1.10',  true);  // 0
   *
   * @param {String} versionA versions versions to compare
   * @param {String} versionB versions versions to compare
   * @param {boolean} [isLoose] enable loose comparison
   * @return {Number} comparison result: -1 when versionA is lower,
   * 1 when versionA is bigger, 0 when both equal
   */
  /* eslint consistent-return: 1 */
  static compareVersions(versionA, versionB, isLoose = false) {
    const versionAPrecision = _Utils.getVersionPrecision(versionA);
    const versionBPrecision = _Utils.getVersionPrecision(versionB);
    let precision = Math.max(versionAPrecision, versionBPrecision);
    let lastPrecision = 0;
    const chunks = _Utils.map([versionA, versionB], (version) => {
      const delta = precision - _Utils.getVersionPrecision(version);
      const _version = version + new Array(delta + 1).join(".0");
      return _Utils.map(_version.split("."), (chunk) => new Array(20 - chunk.length).join("0") + chunk).reverse();
    });
    if (isLoose) {
      lastPrecision = precision - Math.min(versionAPrecision, versionBPrecision);
    }
    precision -= 1;
    while (precision >= lastPrecision) {
      if (chunks[0][precision] > chunks[1][precision]) {
        return 1;
      }
      if (chunks[0][precision] === chunks[1][precision]) {
        if (precision === lastPrecision) {
          return 0;
        }
        precision -= 1;
      } else if (chunks[0][precision] < chunks[1][precision]) {
        return -1;
      }
    }
    return void 0;
  }
  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  static map(arr, iterator) {
    const result = [];
    let i;
    if (Array.prototype.map) {
      return Array.prototype.map.call(arr, iterator);
    }
    for (i = 0; i < arr.length; i += 1) {
      result.push(iterator(arr[i]));
    }
    return result;
  }
  /**
   * Array::find polyfill
   *
   * @param  {Array} arr
   * @param  {Function} predicate
   * @return {Array}
   */
  static find(arr, predicate) {
    let i;
    let l;
    if (Array.prototype.find) {
      return Array.prototype.find.call(arr, predicate);
    }
    for (i = 0, l = arr.length; i < l; i += 1) {
      const value = arr[i];
      if (predicate(value, i)) {
        return value;
      }
    }
    return void 0;
  }
  /**
   * Object::assign polyfill
   *
   * @param  {Object} obj
   * @param  {Object} ...objs
   * @return {Object}
   */
  static assign(obj, ...assigners) {
    const result = obj;
    let i;
    let l;
    if (Object.assign) {
      return Object.assign(obj, ...assigners);
    }
    for (i = 0, l = assigners.length; i < l; i += 1) {
      const assigner = assigners[i];
      if (typeof assigner === "object" && assigner !== null) {
        const keys = Object.keys(assigner);
        keys.forEach((key) => {
          result[key] = assigner[key];
        });
      }
    }
    return obj;
  }
  /**
   * Get short version/alias for a browser name
   *
   * @example
   *   getBrowserAlias('Microsoft Edge') // edge
   *
   * @param  {string} browserName
   * @return {string}
   */
  static getBrowserAlias(browserName) {
    return BROWSER_ALIASES_MAP[browserName];
  }
  /**
   * Get short version/alias for a browser name
   *
   * @example
   *   getBrowserAlias('edge') // Microsoft Edge
   *
   * @param  {string} browserAlias
   * @return {string}
   */
  static getBrowserTypeByAlias(browserAlias) {
    return BROWSER_MAP[browserAlias] || "";
  }
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/bowser/src/parser-browsers.js
var commonVersionIdentifier = /version\/(\d+(\.?_?\d+)+)/i;
var browsersList = [
  /* Googlebot */
  {
    test: [/googlebot/i],
    describe(ua) {
      const browser = {
        name: "Googlebot",
      };
      const version =
        Utils.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  /* Opera < 13.0 */
  {
    test: [/opera/i],
    describe(ua) {
      const browser = {
        name: "Opera",
      };
      const version =
        Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  /* Opera > 13.0 */
  {
    test: [/opr\/|opios/i],
    describe(ua) {
      const browser = {
        name: "Opera",
      };
      const version =
        Utils.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/SamsungBrowser/i],
    describe(ua) {
      const browser = {
        name: "Samsung Internet for Android",
      };
      const version =
        Utils.getFirstMatch(commonVersionIdentifier, ua) ||
        Utils.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/Whale/i],
    describe(ua) {
      const browser = {
        name: "NAVER Whale Browser",
      };
      const version =
        Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/MZBrowser/i],
    describe(ua) {
      const browser = {
        name: "MZ Browser",
      };
      const version =
        Utils.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, ua) ||
        Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/focus/i],
    describe(ua) {
      const browser = {
        name: "Focus",
      };
      const version =
        Utils.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/swing/i],
    describe(ua) {
      const browser = {
        name: "Swing",
      };
      const version =
        Utils.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/coast/i],
    describe(ua) {
      const browser = {
        name: "Opera Coast",
      };
      const version =
        Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/opt\/\d+(?:.?_?\d+)+/i],
    describe(ua) {
      const browser = {
        name: "Opera Touch",
      };
      const version =
        Utils.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/yabrowser/i],
    describe(ua) {
      const browser = {
        name: "Yandex Browser",
      };
      const version =
        Utils.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, ua) ||
        Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/ucbrowser/i],
    describe(ua) {
      const browser = {
        name: "UC Browser",
      };
      const version =
        Utils.getFirstMatch(commonVersionIdentifier, ua) ||
        Utils.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/Maxthon|mxios/i],
    describe(ua) {
      const browser = {
        name: "Maxthon",
      };
      const version =
        Utils.getFirstMatch(commonVersionIdentifier, ua) ||
        Utils.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/epiphany/i],
    describe(ua) {
      const browser = {
        name: "Epiphany",
      };
      const version =
        Utils.getFirstMatch(commonVersionIdentifier, ua) ||
        Utils.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/puffin/i],
    describe(ua) {
      const browser = {
        name: "Puffin",
      };
      const version =
        Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/sleipnir/i],
    describe(ua) {
      const browser = {
        name: "Sleipnir",
      };
      const version =
        Utils.getFirstMatch(commonVersionIdentifier, ua) ||
        Utils.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/k-meleon/i],
    describe(ua) {
      const browser = {
        name: "K-Meleon",
      };
      const version =
        Utils.getFirstMatch(commonVersionIdentifier, ua) ||
        Utils.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/micromessenger/i],
    describe(ua) {
      const browser = {
        name: "WeChat",
      };
      const version =
        Utils.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, ua) ||
        Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/qqbrowser/i],
    describe(ua) {
      const browser = {
        name: /qqbrowserlite/i.test(ua) ? "QQ Browser Lite" : "QQ Browser",
      };
      const version =
        Utils.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, ua) ||
        Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/msie|trident/i],
    describe(ua) {
      const browser = {
        name: "Internet Explorer",
      };
      const version = Utils.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/\sedg\//i],
    describe(ua) {
      const browser = {
        name: "Microsoft Edge",
      };
      const version = Utils.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/edg([ea]|ios)/i],
    describe(ua) {
      const browser = {
        name: "Microsoft Edge",
      };
      const version = Utils.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/vivaldi/i],
    describe(ua) {
      const browser = {
        name: "Vivaldi",
      };
      const version = Utils.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/seamonkey/i],
    describe(ua) {
      const browser = {
        name: "SeaMonkey",
      };
      const version = Utils.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/sailfish/i],
    describe(ua) {
      const browser = {
        name: "Sailfish",
      };
      const version = Utils.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/silk/i],
    describe(ua) {
      const browser = {
        name: "Amazon Silk",
      };
      const version = Utils.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/phantom/i],
    describe(ua) {
      const browser = {
        name: "PhantomJS",
      };
      const version = Utils.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/slimerjs/i],
    describe(ua) {
      const browser = {
        name: "SlimerJS",
      };
      const version = Utils.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(ua) {
      const browser = {
        name: "BlackBerry",
      };
      const version =
        Utils.getFirstMatch(commonVersionIdentifier, ua) ||
        Utils.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/(web|hpw)[o0]s/i],
    describe(ua) {
      const browser = {
        name: "WebOS Browser",
      };
      const version =
        Utils.getFirstMatch(commonVersionIdentifier, ua) ||
        Utils.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/bada/i],
    describe(ua) {
      const browser = {
        name: "Bada",
      };
      const version = Utils.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/tizen/i],
    describe(ua) {
      const browser = {
        name: "Tizen",
      };
      const version =
        Utils.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, ua) ||
        Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/qupzilla/i],
    describe(ua) {
      const browser = {
        name: "QupZilla",
      };
      const version =
        Utils.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, ua) ||
        Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/firefox|iceweasel|fxios/i],
    describe(ua) {
      const browser = {
        name: "Firefox",
      };
      const version = Utils.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/electron/i],
    describe(ua) {
      const browser = {
        name: "Electron",
      };
      const version = Utils.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/MiuiBrowser/i],
    describe(ua) {
      const browser = {
        name: "Miui",
      };
      const version = Utils.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/chromium/i],
    describe(ua) {
      const browser = {
        name: "Chromium",
      };
      const version =
        Utils.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, ua) ||
        Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/chrome|crios|crmo/i],
    describe(ua) {
      const browser = {
        name: "Chrome",
      };
      const version = Utils.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  {
    test: [/GSA/i],
    describe(ua) {
      const browser = {
        name: "Google Search",
      };
      const version = Utils.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  /* Android Browser */
  {
    test(parser) {
      const notLikeAndroid = !parser.test(/like android/i);
      const butAndroid = parser.test(/android/i);
      return notLikeAndroid && butAndroid;
    },
    describe(ua) {
      const browser = {
        name: "Android Browser",
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  /* PlayStation 4 */
  {
    test: [/playstation 4/i],
    describe(ua) {
      const browser = {
        name: "PlayStation 4",
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  /* Safari */
  {
    test: [/safari|applewebkit/i],
    describe(ua) {
      const browser = {
        name: "Safari",
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser.version = version;
      }
      return browser;
    },
  },
  /* Something else */
  {
    test: [/.*/i],
    describe(ua) {
      const regexpWithoutDeviceSpec = /^(.*)\/(.*) /;
      const regexpWithDeviceSpec = /^(.*)\/(.*)[ \t]\((.*)/;
      const hasDeviceSpec = ua.search("\\(") !== -1;
      const regexp = hasDeviceSpec ? regexpWithDeviceSpec : regexpWithoutDeviceSpec;
      return {
        name: Utils.getFirstMatch(regexp, ua),
        version: Utils.getSecondMatch(regexp, ua),
      };
    },
  },
];
var parser_browsers_default = browsersList;

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/bowser/src/parser-os.js
var parser_os_default = [
  /* Roku */
  {
    test: [/Roku\/DVP/],
    describe(ua) {
      const version = Utils.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, ua);
      return {
        name: OS_MAP.Roku,
        version,
      };
    },
  },
  /* Windows Phone */
  {
    test: [/windows phone/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, ua);
      return {
        name: OS_MAP.WindowsPhone,
        version,
      };
    },
  },
  /* Windows */
  {
    test: [/windows /i],
    describe(ua) {
      const version = Utils.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, ua);
      const versionName = Utils.getWindowsVersionName(version);
      return {
        name: OS_MAP.Windows,
        version,
        versionName,
      };
    },
  },
  /* Firefox on iPad */
  {
    test: [/Macintosh(.*?) FxiOS(.*?)\//],
    describe(ua) {
      const result = {
        name: OS_MAP.iOS,
      };
      const version = Utils.getSecondMatch(/(Version\/)(\d[\d.]+)/, ua);
      if (version) {
        result.version = version;
      }
      return result;
    },
  },
  /* macOS */
  {
    test: [/macintosh/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, ua).replace(/[_\s]/g, ".");
      const versionName = Utils.getMacOSVersionName(version);
      const os = {
        name: OS_MAP.MacOS,
        version,
      };
      if (versionName) {
        os.versionName = versionName;
      }
      return os;
    },
  },
  /* iOS */
  {
    test: [/(ipod|iphone|ipad)/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, ua).replace(/[_\s]/g, ".");
      return {
        name: OS_MAP.iOS,
        version,
      };
    },
  },
  /* Android */
  {
    test(parser) {
      const notLikeAndroid = !parser.test(/like android/i);
      const butAndroid = parser.test(/android/i);
      return notLikeAndroid && butAndroid;
    },
    describe(ua) {
      const version = Utils.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, ua);
      const versionName = Utils.getAndroidVersionName(version);
      const os = {
        name: OS_MAP.Android,
        version,
      };
      if (versionName) {
        os.versionName = versionName;
      }
      return os;
    },
  },
  /* WebOS */
  {
    test: [/(web|hpw)[o0]s/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, ua);
      const os = {
        name: OS_MAP.WebOS,
      };
      if (version && version.length) {
        os.version = version;
      }
      return os;
    },
  },
  /* BlackBerry */
  {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(ua) {
      const version =
        Utils.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, ua) ||
        Utils.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, ua) ||
        Utils.getFirstMatch(/\bbb(\d+)/i, ua);
      return {
        name: OS_MAP.BlackBerry,
        version,
      };
    },
  },
  /* Bada */
  {
    test: [/bada/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, ua);
      return {
        name: OS_MAP.Bada,
        version,
      };
    },
  },
  /* Tizen */
  {
    test: [/tizen/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, ua);
      return {
        name: OS_MAP.Tizen,
        version,
      };
    },
  },
  /* Linux */
  {
    test: [/linux/i],
    describe() {
      return {
        name: OS_MAP.Linux,
      };
    },
  },
  /* Chrome OS */
  {
    test: [/CrOS/],
    describe() {
      return {
        name: OS_MAP.ChromeOS,
      };
    },
  },
  /* Playstation 4 */
  {
    test: [/PlayStation 4/],
    describe(ua) {
      const version = Utils.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, ua);
      return {
        name: OS_MAP.PlayStation4,
        version,
      };
    },
  },
];

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/bowser/src/parser-platforms.js
var parser_platforms_default = [
  /* Googlebot */
  {
    test: [/googlebot/i],
    describe() {
      return {
        type: "bot",
        vendor: "Google",
      };
    },
  },
  /* Huawei */
  {
    test: [/huawei/i],
    describe(ua) {
      const model = Utils.getFirstMatch(/(can-l01)/i, ua) && "Nova";
      const platform = {
        type: PLATFORMS_MAP.mobile,
        vendor: "Huawei",
      };
      if (model) {
        platform.model = model;
      }
      return platform;
    },
  },
  /* Nexus Tablet */
  {
    test: [/nexus\s*(?:7|8|9|10).*/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: "Nexus",
      };
    },
  },
  /* iPad */
  {
    test: [/ipad/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: "Apple",
        model: "iPad",
      };
    },
  },
  /* Firefox on iPad */
  {
    test: [/Macintosh(.*?) FxiOS(.*?)\//],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: "Apple",
        model: "iPad",
      };
    },
  },
  /* Amazon Kindle Fire */
  {
    test: [/kftt build/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: "Amazon",
        model: "Kindle Fire HD 7",
      };
    },
  },
  /* Another Amazon Tablet with Silk */
  {
    test: [/silk/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: "Amazon",
      };
    },
  },
  /* Tablet */
  {
    test: [/tablet(?! pc)/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
      };
    },
  },
  /* iPod/iPhone */
  {
    test(parser) {
      const iDevice = parser.test(/ipod|iphone/i);
      const likeIDevice = parser.test(/like (ipod|iphone)/i);
      return iDevice && !likeIDevice;
    },
    describe(ua) {
      const model = Utils.getFirstMatch(/(ipod|iphone)/i, ua);
      return {
        type: PLATFORMS_MAP.mobile,
        vendor: "Apple",
        model,
      };
    },
  },
  /* Nexus Mobile */
  {
    test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
    describe() {
      return {
        type: PLATFORMS_MAP.mobile,
        vendor: "Nexus",
      };
    },
  },
  /* Mobile */
  {
    test: [/[^-]mobi/i],
    describe() {
      return {
        type: PLATFORMS_MAP.mobile,
      };
    },
  },
  /* BlackBerry */
  {
    test(parser) {
      return parser.getBrowserName(true) === "blackberry";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.mobile,
        vendor: "BlackBerry",
      };
    },
  },
  /* Bada */
  {
    test(parser) {
      return parser.getBrowserName(true) === "bada";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.mobile,
      };
    },
  },
  /* Windows Phone */
  {
    test(parser) {
      return parser.getBrowserName() === "windows phone";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.mobile,
        vendor: "Microsoft",
      };
    },
  },
  /* Android Tablet */
  {
    test(parser) {
      const osMajorVersion = Number(String(parser.getOSVersion()).split(".")[0]);
      return parser.getOSName(true) === "android" && osMajorVersion >= 3;
    },
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
      };
    },
  },
  /* Android Mobile */
  {
    test(parser) {
      return parser.getOSName(true) === "android";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.mobile,
      };
    },
  },
  /* desktop */
  {
    test(parser) {
      return parser.getOSName(true) === "macos";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.desktop,
        vendor: "Apple",
      };
    },
  },
  /* Windows */
  {
    test(parser) {
      return parser.getOSName(true) === "windows";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.desktop,
      };
    },
  },
  /* Linux */
  {
    test(parser) {
      return parser.getOSName(true) === "linux";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.desktop,
      };
    },
  },
  /* PlayStation 4 */
  {
    test(parser) {
      return parser.getOSName(true) === "playstation 4";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.tv,
      };
    },
  },
  /* Roku */
  {
    test(parser) {
      return parser.getOSName(true) === "roku";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.tv,
      };
    },
  },
];

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/bowser/src/parser-engines.js
var parser_engines_default = [
  /* EdgeHTML */
  {
    test(parser) {
      return parser.getBrowserName(true) === "microsoft edge";
    },
    describe(ua) {
      const isBlinkBased = /\sedg\//i.test(ua);
      if (isBlinkBased) {
        return {
          name: ENGINE_MAP.Blink,
        };
      }
      const version = Utils.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, ua);
      return {
        name: ENGINE_MAP.EdgeHTML,
        version,
      };
    },
  },
  /* Trident */
  {
    test: [/trident/i],
    describe(ua) {
      const engine = {
        name: ENGINE_MAP.Trident,
      };
      const version = Utils.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        engine.version = version;
      }
      return engine;
    },
  },
  /* Presto */
  {
    test(parser) {
      return parser.test(/presto/i);
    },
    describe(ua) {
      const engine = {
        name: ENGINE_MAP.Presto,
      };
      const version = Utils.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        engine.version = version;
      }
      return engine;
    },
  },
  /* Gecko */
  {
    test(parser) {
      const isGecko = parser.test(/gecko/i);
      const likeGecko = parser.test(/like gecko/i);
      return isGecko && !likeGecko;
    },
    describe(ua) {
      const engine = {
        name: ENGINE_MAP.Gecko,
      };
      const version = Utils.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        engine.version = version;
      }
      return engine;
    },
  },
  /* Blink */
  {
    test: [/(apple)?webkit\/537\.36/i],
    describe() {
      return {
        name: ENGINE_MAP.Blink,
      };
    },
  },
  /* WebKit */
  {
    test: [/(apple)?webkit/i],
    describe(ua) {
      const engine = {
        name: ENGINE_MAP.WebKit,
      };
      const version = Utils.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        engine.version = version;
      }
      return engine;
    },
  },
];

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/bowser/src/parser.js
var Parser = class {
  /**
   * Create instance of Parser
   *
   * @param {String} UA User-Agent string
   * @param {Boolean} [skipParsing=false] parser can skip parsing in purpose of performance
   * improvements if you need to make a more particular parsing
   * like {@link Parser#parseBrowser} or {@link Parser#parsePlatform}
   *
   * @throw {Error} in case of empty UA String
   *
   * @constructor
   */
  constructor(UA, skipParsing = false) {
    if (UA === void 0 || UA === null || UA === "") {
      throw new Error("UserAgent parameter can't be empty");
    }
    this._ua = UA;
    this.parsedResult = {};
    if (skipParsing !== true) {
      this.parse();
    }
  }
  /**
   * Get UserAgent string of current Parser instance
   * @return {String} User-Agent String of the current <Parser> object
   *
   * @public
   */
  getUA() {
    return this._ua;
  }
  /**
   * Test a UA string for a regexp
   * @param {RegExp} regex
   * @return {Boolean}
   */
  test(regex) {
    return regex.test(this._ua);
  }
  /**
   * Get parsed browser object
   * @return {Object}
   */
  parseBrowser() {
    this.parsedResult.browser = {};
    const browserDescriptor = Utils.find(parser_browsers_default, (_browser) => {
      if (typeof _browser.test === "function") {
        return _browser.test(this);
      }
      if (_browser.test instanceof Array) {
        return _browser.test.some((condition) => this.test(condition));
      }
      throw new Error("Browser's test function is not valid");
    });
    if (browserDescriptor) {
      this.parsedResult.browser = browserDescriptor.describe(this.getUA());
    }
    return this.parsedResult.browser;
  }
  /**
   * Get parsed browser object
   * @return {Object}
   *
   * @public
   */
  getBrowser() {
    if (this.parsedResult.browser) {
      return this.parsedResult.browser;
    }
    return this.parseBrowser();
  }
  /**
   * Get browser's name
   * @return {String} Browser's name or an empty string
   *
   * @public
   */
  getBrowserName(toLowerCase) {
    if (toLowerCase) {
      return String(this.getBrowser().name).toLowerCase() || "";
    }
    return this.getBrowser().name || "";
  }
  /**
   * Get browser's version
   * @return {String} version of browser
   *
   * @public
   */
  getBrowserVersion() {
    return this.getBrowser().version;
  }
  /**
   * Get OS
   * @return {Object}
   *
   * @example
   * this.getOS();
   * {
   *   name: 'macOS',
   *   version: '10.11.12'
   * }
   */
  getOS() {
    if (this.parsedResult.os) {
      return this.parsedResult.os;
    }
    return this.parseOS();
  }
  /**
   * Parse OS and save it to this.parsedResult.os
   * @return {*|{}}
   */
  parseOS() {
    this.parsedResult.os = {};
    const os = Utils.find(parser_os_default, (_os) => {
      if (typeof _os.test === "function") {
        return _os.test(this);
      }
      if (_os.test instanceof Array) {
        return _os.test.some((condition) => this.test(condition));
      }
      throw new Error("Browser's test function is not valid");
    });
    if (os) {
      this.parsedResult.os = os.describe(this.getUA());
    }
    return this.parsedResult.os;
  }
  /**
   * Get OS name
   * @param {Boolean} [toLowerCase] return lower-cased value
   * @return {String} name of the OS — macOS, Windows, Linux, etc.
   */
  getOSName(toLowerCase) {
    const { name } = this.getOS();
    if (toLowerCase) {
      return String(name).toLowerCase() || "";
    }
    return name || "";
  }
  /**
   * Get OS version
   * @return {String} full version with dots ('10.11.12', '5.6', etc)
   */
  getOSVersion() {
    return this.getOS().version;
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  getPlatform() {
    if (this.parsedResult.platform) {
      return this.parsedResult.platform;
    }
    return this.parsePlatform();
  }
  /**
   * Get platform name
   * @param {Boolean} [toLowerCase=false]
   * @return {*}
   */
  getPlatformType(toLowerCase = false) {
    const { type } = this.getPlatform();
    if (toLowerCase) {
      return String(type).toLowerCase() || "";
    }
    return type || "";
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  parsePlatform() {
    this.parsedResult.platform = {};
    const platform = Utils.find(parser_platforms_default, (_platform) => {
      if (typeof _platform.test === "function") {
        return _platform.test(this);
      }
      if (_platform.test instanceof Array) {
        return _platform.test.some((condition) => this.test(condition));
      }
      throw new Error("Browser's test function is not valid");
    });
    if (platform) {
      this.parsedResult.platform = platform.describe(this.getUA());
    }
    return this.parsedResult.platform;
  }
  /**
   * Get parsed engine
   * @return {{}}
   */
  getEngine() {
    if (this.parsedResult.engine) {
      return this.parsedResult.engine;
    }
    return this.parseEngine();
  }
  /**
   * Get engines's name
   * @return {String} Engines's name or an empty string
   *
   * @public
   */
  getEngineName(toLowerCase) {
    if (toLowerCase) {
      return String(this.getEngine().name).toLowerCase() || "";
    }
    return this.getEngine().name || "";
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  parseEngine() {
    this.parsedResult.engine = {};
    const engine = Utils.find(parser_engines_default, (_engine) => {
      if (typeof _engine.test === "function") {
        return _engine.test(this);
      }
      if (_engine.test instanceof Array) {
        return _engine.test.some((condition) => this.test(condition));
      }
      throw new Error("Browser's test function is not valid");
    });
    if (engine) {
      this.parsedResult.engine = engine.describe(this.getUA());
    }
    return this.parsedResult.engine;
  }
  /**
   * Parse full information about the browser
   * @returns {Parser}
   */
  parse() {
    this.parseBrowser();
    this.parseOS();
    this.parsePlatform();
    this.parseEngine();
    return this;
  }
  /**
   * Get parsed result
   * @return {ParsedResult}
   */
  getResult() {
    return Utils.assign({}, this.parsedResult);
  }
  /**
   * Check if parsed browser matches certain conditions
   *
   * @param {Object} checkTree It's one or two layered object,
   * which can include a platform or an OS on the first layer
   * and should have browsers specs on the bottom-laying layer
   *
   * @returns {Boolean|undefined} Whether the browser satisfies the set conditions or not.
   * Returns `undefined` when the browser is no described in the checkTree object.
   *
   * @example
   * const browser = Bowser.getParser(window.navigator.userAgent);
   * if (browser.satisfies({chrome: '>118.01.1322' }))
   * // or with os
   * if (browser.satisfies({windows: { chrome: '>118.01.1322' } }))
   * // or with platforms
   * if (browser.satisfies({desktop: { chrome: '>118.01.1322' } }))
   */
  satisfies(checkTree) {
    const platformsAndOSes = {};
    let platformsAndOSCounter = 0;
    const browsers = {};
    let browsersCounter = 0;
    const allDefinitions = Object.keys(checkTree);
    allDefinitions.forEach((key) => {
      const currentDefinition = checkTree[key];
      if (typeof currentDefinition === "string") {
        browsers[key] = currentDefinition;
        browsersCounter += 1;
      } else if (typeof currentDefinition === "object") {
        platformsAndOSes[key] = currentDefinition;
        platformsAndOSCounter += 1;
      }
    });
    if (platformsAndOSCounter > 0) {
      const platformsAndOSNames = Object.keys(platformsAndOSes);
      const OSMatchingDefinition = Utils.find(platformsAndOSNames, (name) => this.isOS(name));
      if (OSMatchingDefinition) {
        const osResult = this.satisfies(platformsAndOSes[OSMatchingDefinition]);
        if (osResult !== void 0) {
          return osResult;
        }
      }
      const platformMatchingDefinition = Utils.find(platformsAndOSNames, (name) => this.isPlatform(name));
      if (platformMatchingDefinition) {
        const platformResult = this.satisfies(platformsAndOSes[platformMatchingDefinition]);
        if (platformResult !== void 0) {
          return platformResult;
        }
      }
    }
    if (browsersCounter > 0) {
      const browserNames = Object.keys(browsers);
      const matchingDefinition = Utils.find(browserNames, (name) => this.isBrowser(name, true));
      if (matchingDefinition !== void 0) {
        return this.compareVersion(browsers[matchingDefinition]);
      }
    }
    return void 0;
  }
  /**
   * Check if the browser name equals the passed string
   * @param browserName The string to compare with the browser name
   * @param [includingAlias=false] The flag showing whether alias will be included into comparison
   * @returns {boolean}
   */
  isBrowser(browserName, includingAlias = false) {
    const defaultBrowserName = this.getBrowserName().toLowerCase();
    let browserNameLower = browserName.toLowerCase();
    const alias = Utils.getBrowserTypeByAlias(browserNameLower);
    if (includingAlias && alias) {
      browserNameLower = alias.toLowerCase();
    }
    return browserNameLower === defaultBrowserName;
  }
  compareVersion(version) {
    let expectedResults = [0];
    let comparableVersion = version;
    let isLoose = false;
    const currentBrowserVersion = this.getBrowserVersion();
    if (typeof currentBrowserVersion !== "string") {
      return void 0;
    }
    if (version[0] === ">" || version[0] === "<") {
      comparableVersion = version.substr(1);
      if (version[1] === "=") {
        isLoose = true;
        comparableVersion = version.substr(2);
      } else {
        expectedResults = [];
      }
      if (version[0] === ">") {
        expectedResults.push(1);
      } else {
        expectedResults.push(-1);
      }
    } else if (version[0] === "=") {
      comparableVersion = version.substr(1);
    } else if (version[0] === "~") {
      isLoose = true;
      comparableVersion = version.substr(1);
    }
    return expectedResults.indexOf(Utils.compareVersions(currentBrowserVersion, comparableVersion, isLoose)) > -1;
  }
  isOS(osName) {
    return this.getOSName(true) === String(osName).toLowerCase();
  }
  isPlatform(platformType) {
    return this.getPlatformType(true) === String(platformType).toLowerCase();
  }
  isEngine(engineName) {
    return this.getEngineName(true) === String(engineName).toLowerCase();
  }
  /**
   * Is anything? Check if the browser is called "anything",
   * the OS called "anything" or the platform called "anything"
   * @param {String} anything
   * @param [includingAlias=false] The flag showing whether alias will be included into comparison
   * @returns {Boolean}
   */
  is(anything, includingAlias = false) {
    return this.isBrowser(anything, includingAlias) || this.isOS(anything) || this.isPlatform(anything);
  }
  /**
   * Check if any of the given values satisfies this.is(anything)
   * @param {String[]} anythings
   * @returns {Boolean}
   */
  some(anythings = []) {
    return anythings.some((anything) => this.is(anything));
  }
};
var parser_default = Parser;

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/bowser/src/bowser.js
var Bowser = class {
  /**
   * Creates a {@link Parser} instance
   *
   * @param {String} UA UserAgent string
   * @param {Boolean} [skipParsing=false] Will make the Parser postpone parsing until you ask it
   * explicitly. Same as `skipParsing` for {@link Parser}.
   * @returns {Parser}
   * @throws {Error} when UA is not a String
   *
   * @example
   * const parser = Bowser.getParser(window.navigator.userAgent);
   * const result = parser.getResult();
   */
  static getParser(UA, skipParsing = false) {
    if (typeof UA !== "string") {
      throw new Error("UserAgent should be a string");
    }
    return new parser_default(UA, skipParsing);
  }
  /**
   * Creates a {@link Parser} instance and runs {@link Parser.getResult} immediately
   *
   * @param UA
   * @return {ParsedResult}
   *
   * @example
   * const result = Bowser.parse(window.navigator.userAgent);
   */
  static parse(UA) {
    return new parser_default(UA).getResult();
  }
  static get BROWSER_MAP() {
    return BROWSER_MAP;
  }
  static get ENGINE_MAP() {
    return ENGINE_MAP;
  }
  static get OS_MAP() {
    return OS_MAP;
  }
  static get PLATFORMS_MAP() {
    return PLATFORMS_MAP;
  }
};
var bowser_default = Bowser;

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/util-user-agent-browser/dist-es/index.js
var createDefaultUserAgentProvider =
  ({ serviceId, clientVersion }) =>
  async (config) => {
    const parsedUA =
      typeof window !== "undefined" && window?.navigator?.userAgent
        ? bowser_default.parse(window.navigator.userAgent)
        : void 0;
    const sections = [
      ["aws-sdk-js", clientVersion],
      ["ua", "2.1"],
      [`os/${parsedUA?.os?.name || "other"}`, parsedUA?.os?.version],
      ["lang/js"],
      ["md/browser", `${parsedUA?.browser?.name ?? "unknown"}_${parsedUA?.browser?.version ?? "unknown"}`],
    ];
    if (serviceId) {
      sections.push([`api/${serviceId}`, clientVersion]);
    }
    const appId = await config?.userAgentAppId?.();
    if (appId) {
      sections.push([`app/${appId}`]);
    }
    return sections;
  };

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js
var getHttpHandlerExtensionConfiguration = (runtimeConfig) => {
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
};
var resolveHttpHandlerRuntimeConfig = (httpHandlerExtensionConfiguration) => {
  return {
    httpHandler: httpHandlerExtensionConfiguration.httpHandler(),
  };
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/protocol-http/dist-es/httpRequest.js
var HttpRequest = class _HttpRequest {
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
  static clone(request) {
    const cloned = new _HttpRequest({
      ...request,
      headers: { ...request.headers },
    });
    if (cloned.query) {
      cloned.query = cloneQuery(cloned.query);
    }
    return cloned;
  }
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
  clone() {
    return _HttpRequest.clone(this);
  }
};
function cloneQuery(query) {
  return Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
      ...carry,
      [paramName]: Array.isArray(param) ? [...param] : param,
    };
  }, {});
}

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/protocol-http/dist-es/httpResponse.js
var HttpResponse = class {
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
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js
var escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
var hexEncode = (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/querystring-builder/dist-es/index.js
function buildQueryString(query) {
  const parts = [];
  for (let key of Object.keys(query).sort()) {
    const value = query[key];
    key = escapeUri(key);
    if (Array.isArray(value)) {
      for (let i = 0, iLen = value.length; i < iLen; i++) {
        parts.push(`${key}=${escapeUri(value[i])}`);
      }
    } else {
      let qsEntry = key;
      if (value || typeof value === "string") {
        qsEntry += `=${escapeUri(value)}`;
      }
      parts.push(qsEntry);
    }
  }
  return parts.join("&");
}

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/fetch-http-handler/dist-es/create-request.js
function createRequest(url, requestOptions) {
  return new Request(url, requestOptions);
}

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js
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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js
var keepAliveSupport = {
  supported: void 0,
};
var FetchHttpHandler = class _FetchHttpHandler {
  static create(instanceOrOptions) {
    if (typeof instanceOrOptions?.handle === "function") {
      return instanceOrOptions;
    }
    return new _FetchHttpHandler(instanceOrOptions);
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
    const queryString = buildQueryString(request.query || {});
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
    let removeSignalEventListener = () => {};
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
            response: new HttpResponse({
              headers: transformedHeaders,
              reason: response.statusText,
              statusCode: response.status,
              body: body2,
            }),
          }));
        }
        return {
          response: new HttpResponse({
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
          const onAbort = () => {
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            reject(abortError);
          };
          if (typeof abortSignal.addEventListener === "function") {
            const signal = abortSignal;
            signal.addEventListener("abort", onAbort, { once: true });
            removeSignalEventListener = () => signal.removeEventListener("abort", onAbort);
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
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-base64/dist-es/constants.browser.js
var alphabetByEncoding = {};
var alphabetByValue = new Array(64);
for (let i = 0, start = "A".charCodeAt(0), limit = "Z".charCodeAt(0); i + start <= limit; i++) {
  const char = String.fromCharCode(i + start);
  alphabetByEncoding[char] = i;
  alphabetByValue[i] = char;
}
for (let i = 0, start = "a".charCodeAt(0), limit = "z".charCodeAt(0); i + start <= limit; i++) {
  const char = String.fromCharCode(i + start);
  const index = i + 26;
  alphabetByEncoding[char] = index;
  alphabetByValue[index] = char;
}
for (let i = 0; i < 10; i++) {
  alphabetByEncoding[i.toString(10)] = i + 52;
  const char = i.toString(10);
  const index = i + 52;
  alphabetByEncoding[char] = index;
  alphabetByValue[index] = char;
}
alphabetByEncoding["+"] = 62;
alphabetByValue[62] = "+";
alphabetByEncoding["/"] = 63;
alphabetByValue[63] = "/";
var bitsPerLetter = 6;
var bitsPerByte = 8;
var maxLetterValue = 63;

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-base64/dist-es/fromBase64.browser.js
var fromBase64 = (input) => {
  let totalByteLength = (input.length / 4) * 3;
  if (input.slice(-2) === "==") {
    totalByteLength -= 2;
  } else if (input.slice(-1) === "=") {
    totalByteLength--;
  }
  const out = new ArrayBuffer(totalByteLength);
  const dataView = new DataView(out);
  for (let i = 0; i < input.length; i += 4) {
    let bits = 0;
    let bitLength = 0;
    for (let j = i, limit = i + 3; j <= limit; j++) {
      if (input[j] !== "=") {
        if (!(input[j] in alphabetByEncoding)) {
          throw new TypeError(`Invalid character ${input[j]} in base64 string.`);
        }
        bits |= alphabetByEncoding[input[j]] << ((limit - j) * bitsPerLetter);
        bitLength += bitsPerLetter;
      } else {
        bits >>= bitsPerLetter;
      }
    }
    const chunkOffset = (i / 4) * 3;
    bits >>= bitLength % bitsPerByte;
    const byteLength = Math.floor(bitLength / bitsPerByte);
    for (let k = 0; k < byteLength; k++) {
      const offset = (byteLength - k - 1) * bitsPerByte;
      dataView.setUint8(chunkOffset + k, (bits & (255 << offset)) >> offset);
    }
  }
  return new Uint8Array(out);
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
var fromUtf83 = (input) => new TextEncoder().encode(input);

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js
var toUtf8 = (input) => {
  if (typeof input === "string") {
    return input;
  }
  if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
    throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
  }
  return new TextDecoder("utf-8").decode(input);
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-base64/dist-es/toBase64.browser.js
function toBase64(_input) {
  let input;
  if (typeof _input === "string") {
    input = fromUtf83(_input);
  } else {
    input = _input;
  }
  const isArrayLike = typeof input === "object" && typeof input.length === "number";
  const isUint8Array =
    typeof input === "object" && typeof input.byteOffset === "number" && typeof input.byteLength === "number";
  if (!isArrayLike && !isUint8Array) {
    throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
  }
  let str = "";
  for (let i = 0; i < input.length; i += 3) {
    let bits = 0;
    let bitLength = 0;
    for (let j = i, limit = Math.min(i + 3, input.length); j < limit; j++) {
      bits |= input[j] << ((limit - j - 1) * bitsPerByte);
      bitLength += bitsPerByte;
    }
    const bitClusterCount = Math.ceil(bitLength / bitsPerLetter);
    bits <<= bitClusterCount * bitsPerLetter - bitLength;
    for (let k = 1; k <= bitClusterCount; k++) {
      const offset = (bitClusterCount - k) * bitsPerLetter;
      str += alphabetByValue[(bits & (maxLetterValue << offset)) >> offset];
    }
    str += "==".slice(0, 4 - bitClusterCount);
  }
  return str;
}

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js
var streamCollector = async (stream) => {
  if ((typeof Blob === "function" && stream instanceof Blob) || stream.constructor?.name === "Blob") {
    if (Blob.prototype.arrayBuffer !== void 0) {
      return new Uint8Array(await stream.arrayBuffer());
    }
    return collectBlob(stream);
  }
  return collectStream(stream);
};
async function collectBlob(blob) {
  const base64 = await readToBase64(blob);
  const arrayBuffer = fromBase64(base64);
  return new Uint8Array(arrayBuffer);
}
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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-body-length-browser/dist-es/calculateBodyLength.js
var TEXT_ENCODER = typeof TextEncoder == "function" ? new TextEncoder() : null;
var calculateBodyLength = (body) => {
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
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-retry/dist-es/config.js
var RETRY_MODES;
(function (RETRY_MODES2) {
  RETRY_MODES2["STANDARD"] = "standard";
  RETRY_MODES2["ADAPTIVE"] = "adaptive";
})(RETRY_MODES || (RETRY_MODES = {}));
var DEFAULT_MAX_ATTEMPTS = 3;
var DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/service-error-classification/dist-es/constants.js
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
];
var TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
var TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
var NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];
var NODEJS_NETWORK_ERROR_CODES = ["EHOSTUNREACH", "ENETUNREACH", "ENOTFOUND"];

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/service-error-classification/dist-es/index.js
var isClockSkewCorrectedError = (error) => error.$metadata?.clockSkewCorrected;
var isBrowserNetworkError = (error) => {
  const errorMessages = /* @__PURE__ */ new Set([
    "Failed to fetch",
    "NetworkError when attempting to fetch resource",
    "The Internet connection appears to be offline",
    "Load failed",
    "Network request failed",
  ]);
  const isValid = error && error instanceof TypeError;
  if (!isValid) {
    return false;
  }
  return errorMessages.has(error.message);
};
var isThrottlingError = (error) =>
  error.$metadata?.httpStatusCode === 429 ||
  THROTTLING_ERROR_CODES.includes(error.name) ||
  error.$retryable?.throttling == true;
var isTransientError = (error, depth = 0) =>
  isClockSkewCorrectedError(error) ||
  TRANSIENT_ERROR_CODES.includes(error.name) ||
  NODEJS_TIMEOUT_ERROR_CODES.includes(error?.code || "") ||
  NODEJS_NETWORK_ERROR_CODES.includes(error?.code || "") ||
  TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0) ||
  isBrowserNetworkError(error) ||
  (error.cause !== void 0 && depth <= 10 && isTransientError(error.cause, depth + 1));
var isServerError = (error) => {
  if (error.$metadata?.httpStatusCode !== void 0) {
    const statusCode = error.$metadata.httpStatusCode;
    if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
      return true;
    }
    return false;
  }
  return false;
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js
var DefaultRateLimiter = class _DefaultRateLimiter {
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
      await new Promise((resolve) => _DefaultRateLimiter.setTimeoutFn(resolve, delay));
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
    if (isThrottlingError(response)) {
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
};
DefaultRateLimiter.setTimeoutFn = setTimeout;

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-retry/dist-es/constants.js
var DEFAULT_RETRY_DELAY_BASE = 100;
var MAXIMUM_RETRY_DELAY = 20 * 1e3;
var THROTTLING_RETRY_DELAY_BASE = 500;
var INITIAL_RETRY_TOKENS = 500;
var RETRY_COST = 5;
var TIMEOUT_RETRY_COST = 10;
var NO_RETRY_INCREMENT = 1;
var INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
var REQUEST_HEADER = "amz-sdk-request";

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js
var getDefaultRetryBackoffStrategy = () => {
  let delayBase = DEFAULT_RETRY_DELAY_BASE;
  const computeNextBackoffDelay = (attempts) => {
    return Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
  };
  const setDelayBase = (delay) => {
    delayBase = delay;
  };
  return {
    computeNextBackoffDelay,
    setDelayBase,
  };
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js
var createDefaultRetryToken = ({ retryDelay, retryCount, retryCost }) => {
  const getRetryCount = () => retryCount;
  const getRetryDelay = () => Math.min(MAXIMUM_RETRY_DELAY, retryDelay);
  const getRetryCost = () => retryCost;
  return {
    getRetryCount,
    getRetryDelay,
    getRetryCost,
  };
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js
var StandardRetryStrategy = class {
  constructor(maxAttempts) {
    this.maxAttempts = maxAttempts;
    this.mode = RETRY_MODES.STANDARD;
    this.capacity = INITIAL_RETRY_TOKENS;
    this.retryBackoffStrategy = getDefaultRetryBackoffStrategy();
    this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
  }
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
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js
var AdaptiveRetryStrategy = class {
  constructor(maxAttemptsProvider, options) {
    this.maxAttemptsProvider = maxAttemptsProvider;
    this.mode = RETRY_MODES.ADAPTIVE;
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
};

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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/cache/EndpointCache.js
var EndpointCache = class {
  constructor({ size, params }) {
    this.data = /* @__PURE__ */ new Map();
    this.parameters = [];
    this.capacity = size ?? 50;
    if (params) {
      this.parameters = params;
    }
  }
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
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js
var IP_V4_REGEX = new RegExp(
  `^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`,
);
var isIpAddress = (value) => IP_V4_REGEX.test(value) || (value.startsWith("[") && value.endsWith("]"));

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js
var VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
var isValidHostLabel = (value, allowSubDomains = false) => {
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
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js
var customEndpointFunctions = {};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js
var debugId = "endpoints";

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js
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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js
var EndpointError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "EndpointError";
  }
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js
var booleanEquals = (value1, value2) => value1 === value2;

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js
var getAttrPathList = (path) => {
  const parts = path.split(".");
  const pathList = [];
  for (const part of parts) {
    const squareBracketIndex = part.indexOf("[");
    if (squareBracketIndex !== -1) {
      if (part.indexOf("]") !== part.length - 1) {
        throw new EndpointError(`Path: '${path}' does not end with ']'`);
      }
      const arrayIndex = part.slice(squareBracketIndex + 1, -1);
      if (Number.isNaN(parseInt(arrayIndex))) {
        throw new EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
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
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js
var getAttr = (value, path) =>
  getAttrPathList(path).reduce((acc, index) => {
    if (typeof acc !== "object") {
      throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
    } else if (Array.isArray(acc)) {
      return acc[parseInt(index)];
    }
    return acc[index];
  }, value);

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js
var isSet = (value) => value != null;

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/lib/not.js
var not = (value) => !value;

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js
var DEFAULT_PORTS = {
  [EndpointURLScheme.HTTP]: 80,
  [EndpointURLScheme.HTTPS]: 443,
};
var parseURL = (value) => {
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
  if (!Object.values(EndpointURLScheme).includes(scheme)) {
    return null;
  }
  const isIp = isIpAddress(hostname);
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
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js
var stringEquals = (value1, value2) => value1 === value2;

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/lib/substring.js
var substring = (input, start, stop, reverse) => {
  if (start >= stop || input.length < stop) {
    return null;
  }
  if (!reverse) {
    return input.substring(start, stop);
  }
  return input.substring(input.length - stop, input.length - start);
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js
var uriEncode = (value) =>
  encodeURIComponent(value).replace(/[!*'()]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js
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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js
var evaluateTemplate = (template, options) => {
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
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js
var getReferenceValue = ({ ref }, options) => {
  const referenceRecord = {
    ...options.endpointParams,
    ...options.referenceRecord,
  };
  return referenceRecord[ref];
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js
var evaluateExpression = (obj, keyName, options) => {
  if (typeof obj === "string") {
    return evaluateTemplate(obj, options);
  } else if (obj["fn"]) {
    return callFunction(obj, options);
  } else if (obj["ref"]) {
    return getReferenceValue(obj, options);
  }
  throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js
var callFunction = ({ fn, argv }, options) => {
  const evaluatedArgs = argv.map((arg) =>
    ["boolean", "number"].includes(typeof arg) ? arg : evaluateExpression(arg, "arg", options),
  );
  const fnSegments = fn.split(".");
  if (fnSegments[0] in customEndpointFunctions && fnSegments[1] != null) {
    return customEndpointFunctions[fnSegments[0]][fnSegments[1]](...evaluatedArgs);
  }
  return endpointFunctions[fn](...evaluatedArgs);
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js
var evaluateCondition = ({ assign, ...fnArgs }, options) => {
  if (assign && assign in options.referenceRecord) {
    throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
  }
  const value = callFunction(fnArgs, options);
  options.logger?.debug?.(`${debugId} evaluateCondition: ${toDebugString(fnArgs)} = ${toDebugString(value)}`);
  return {
    result: value === "" ? true : !!value,
    ...(assign != null && { toAssign: { name: assign, value } }),
  };
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js
var evaluateConditions = (conditions = [], options) => {
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
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js
var getEndpointHeaders = (headers, options) =>
  Object.entries(headers).reduce(
    (acc, [headerKey, headerVal]) => ({
      ...acc,
      [headerKey]: headerVal.map((headerValEntry) => {
        const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
        if (typeof processedExpr !== "string") {
          throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
        }
        return processedExpr;
      }),
    }),
    {},
  );

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperty.js
var getEndpointProperty = (property, options) => {
  if (Array.isArray(property)) {
    return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
  }
  switch (typeof property) {
    case "string":
      return evaluateTemplate(property, options);
    case "object":
      if (property === null) {
        throw new EndpointError(`Unexpected endpoint property: ${property}`);
      }
      return getEndpointProperties(property, options);
    case "boolean":
      return property;
    default:
      throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
  }
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js
var getEndpointProperties = (properties, options) =>
  Object.entries(properties).reduce(
    (acc, [propertyKey, propertyVal]) => ({
      ...acc,
      [propertyKey]: getEndpointProperty(propertyVal, options),
    }),
    {},
  );

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js
var getEndpointUrl = (endpointUrl, options) => {
  const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
  if (typeof expression === "string") {
    try {
      return new URL(expression);
    } catch (error) {
      console.error(`Failed to construct URL with ${expression}`, error);
      throw error;
    }
  }
  throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js
var evaluateEndpointRule = (endpointRule, options) => {
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
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateErrorRule.js
var evaluateErrorRule = (errorRule, options) => {
  const { conditions, error } = errorRule;
  const { result, referenceRecord } = evaluateConditions(conditions, options);
  if (!result) {
    return;
  }
  throw new EndpointError(
    evaluateExpression(error, "Error", {
      ...options,
      referenceRecord: { ...options.referenceRecord, ...referenceRecord },
    }),
  );
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTreeRule.js
var evaluateTreeRule = (treeRule, options) => {
  const { conditions, rules } = treeRule;
  const { result, referenceRecord } = evaluateConditions(conditions, options);
  if (!result) {
    return;
  }
  return evaluateRules(rules, {
    ...options,
    referenceRecord: { ...options.referenceRecord, ...referenceRecord },
  });
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js
var evaluateRules = (rules, options) => {
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
      throw new EndpointError(`Unknown endpoint rule: ${rule}`);
    }
  }
  throw new EndpointError(`Rules evaluation failed`);
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js
var resolveEndpoint = (ruleSetObject, options) => {
  const { endpointParams, logger } = options;
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
      throw new EndpointError(`Missing required parameter: '${requiredParam}'`);
    }
  }
  const endpoint = evaluateRules(rules, { endpointParams, logger, referenceRecord: {} });
  options.logger?.debug?.(`${debugId} Resolved endpoint: ${toDebugString(endpoint)}`);
  return endpoint;
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/endpoint/endpointResolver.js
var cache = new EndpointCache({
  size: 50,
  params: ["endpoint"],
});
var defaultEndpointResolver = (endpointParams, context = {}) => {
  return cache.get(endpointParams, () =>
    resolveEndpoint(ruleSet, {
      endpointParams,
      logger: context.logger,
    }),
  );
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/resolveAuthOptions.js
var resolveAuthOptions = (candidateAuthOptions, authSchemePreference) => {
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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
function convertHttpAuthSchemesToMap(httpAuthSchemes) {
  const map = /* @__PURE__ */ new Map();
  for (const scheme of httpAuthSchemes) {
    map.set(scheme.schemeId, scheme);
  }
  return map;
}
var httpAuthSchemeMiddleware = (config, mwOptions) => (next, context) => async (args) => {
  const options = config.httpAuthSchemeProvider(
    await mwOptions.httpAuthSchemeParametersProvider(config, context, args.input),
  );
  const authSchemePreference = config.authSchemePreference ? await config.authSchemePreference() : [];
  const resolvedOptions = resolveAuthOptions(options, authSchemePreference);
  const authSchemes = convertHttpAuthSchemesToMap(config.httpAuthSchemes);
  const smithyContext = getSmithyContext(context);
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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js
var httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
  step: "serialize",
  tags: ["HTTP_AUTH_SCHEME"],
  name: "httpAuthSchemeMiddleware",
  override: true,
  relation: "before",
  toMiddleware: "endpointV2Middleware",
};
var getHttpAuthSchemeEndpointRuleSetPlugin = (
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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js
var deserializerMiddleware = (options, deserializer) => (next, context) => async (args) => {
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
        if (HttpResponse.isInstance(response)) {
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
};
var findHeader = (pattern, headers) => {
  return (headers.find(([k]) => {
    return k.match(pattern);
  }) || [void 0, void 0])[1];
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js
var serializerMiddleware = (options, serializer) => (next, context) => async (args) => {
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
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js
var deserializerMiddlewareOption = {
  name: "deserializerMiddleware",
  step: "deserialize",
  tags: ["DESERIALIZER"],
  override: true,
};
var serializerMiddlewareOption = {
  name: "serializerMiddleware",
  step: "serialize",
  tags: ["SERIALIZER"],
  override: true,
};
function getSerdePlugin(config, serializer, deserializer) {
  return {
    applyToStack: (commandStack) => {
      commandStack.add(deserializerMiddleware(config, deserializer), deserializerMiddlewareOption);
      commandStack.add(serializerMiddleware(config, serializer), serializerMiddlewareOption);
    },
  };
}

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js
var httpAuthSchemeMiddlewareOptions = {
  step: "serialize",
  tags: ["HTTP_AUTH_SCHEME"],
  name: "httpAuthSchemeMiddleware",
  override: true,
  relation: "before",
  toMiddleware: serializerMiddlewareOption.name,
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js
var defaultErrorHandler = (signingProperties) => (error) => {
  throw error;
};
var defaultSuccessHandler = (httpResponse, signingProperties) => {};
var httpSigningMiddleware = (config) => (next, context) => async (args) => {
  if (!HttpRequest.isInstance(args.request)) {
    return next(args);
  }
  const smithyContext = getSmithyContext(context);
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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js
var httpSigningMiddlewareOptions = {
  step: "finalizeRequest",
  tags: ["HTTP_SIGNING"],
  name: "httpSigningMiddleware",
  aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
  override: true,
  relation: "after",
  toMiddleware: "retryMiddleware",
};
var getHttpSigningPlugin = (config) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(httpSigningMiddleware(config), httpSigningMiddlewareOptions);
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/normalizeProvider.js
var normalizeProvider2 = (input) => {
  if (typeof input === "function") return input;
  const promisified = Promise.resolve(input);
  return () => promisified;
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-hex-encoding/dist-es/index.js
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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/deref.js
var deref = (schemaRef) => {
  if (typeof schemaRef === "function") {
    return schemaRef();
  }
  return schemaRef;
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/TypeRegistry.js
var TypeRegistry = class _TypeRegistry {
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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/schemas/Schema.js
var Schema = class {
  constructor(name, traits) {
    this.name = name;
    this.traits = traits;
  }
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/schemas/ListSchema.js
var ListSchema = class _ListSchema extends Schema {
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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/schemas/MapSchema.js
var MapSchema = class _MapSchema extends Schema {
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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/schemas/StructureSchema.js
var StructureSchema = class _StructureSchema extends Schema {
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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/schemas/ErrorSchema.js
var ErrorSchema = class _ErrorSchema extends StructureSchema {
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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/schemas/sentinels.js
var SCHEMA = {
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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/schemas/SimpleSchema.js
var SimpleSchema = class _SimpleSchema extends Schema {
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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js
var NormalizedSchema = class _NormalizedSchema {
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
    return typeof schema === "number" && schema >= SCHEMA.TIMESTAMP_DEFAULT && schema <= SCHEMA.TIMESTAMP_EPOCH_SECONDS;
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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/serde/parse-utils.js
var MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/serde/date-utils.js
var RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
var RFC3339_WITH_OFFSET = new RegExp(
  /^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/,
);
var IMF_FIXDATE = new RegExp(
  /^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/,
);
var RFC_850_DATE = new RegExp(
  /^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/,
);
var ASC_TIME = new RegExp(
  /^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/,
);
var FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1e3;

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/submodules/serde/lazy-json.js
var LazyJsonString = function LazyJsonString2(val) {
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
LazyJsonString.from = (object) => {
  if (object && typeof object === "object" && (object instanceof LazyJsonString || "deserializeJSON" in object)) {
    return object;
  } else if (typeof object === "string" || Object.getPrototypeOf(object) === String.prototype) {
    return LazyJsonString(String(object));
  }
  return LazyJsonString(JSON.stringify(object));
};
LazyJsonString.fromObject = LazyJsonString.from;

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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js
var DefaultIdentityProviderConfig = class {
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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js
var NoAuthSigner = class {
  async sign(httpRequest, identity, signingProperties) {
    return httpRequest;
  }
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js
var createIsIdentityExpiredFunction = (expirationMs) => (identity) =>
  doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
var EXPIRATION_MS = 3e5;
var isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
var doesIdentityRequireRefresh = (identity) => identity.expiration !== void 0;

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js
var getAllAliases = (name, aliases) => {
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
};
var getMiddlewareNameWithAliases = (name, aliases) => {
  return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
};
var constructStack = () => {
  let absoluteEntries = [];
  let relativeEntries = [];
  let identifyOnResolve = false;
  const entriesNameSet = /* @__PURE__ */ new Set();
  const sort = (entries) =>
    entries.sort(
      (a, b) =>
        stepWeights[b.step] - stepWeights[a.step] ||
        priorityWeights[b.priority || "normal"] - priorityWeights[a.priority || "normal"],
    );
  const removeByName = (toRemove) => {
    let isRemoved = false;
    const filterCb = (entry) => {
      const aliases = getAllAliases(entry.name, entry.aliases);
      if (aliases.includes(toRemove)) {
        isRemoved = true;
        for (const alias of aliases) {
          entriesNameSet.delete(alias);
        }
        return false;
      }
      return true;
    };
    absoluteEntries = absoluteEntries.filter(filterCb);
    relativeEntries = relativeEntries.filter(filterCb);
    return isRemoved;
  };
  const removeByReference = (toRemove) => {
    let isRemoved = false;
    const filterCb = (entry) => {
      if (entry.middleware === toRemove) {
        isRemoved = true;
        for (const alias of getAllAliases(entry.name, entry.aliases)) {
          entriesNameSet.delete(alias);
        }
        return false;
      }
      return true;
    };
    absoluteEntries = absoluteEntries.filter(filterCb);
    relativeEntries = relativeEntries.filter(filterCb);
    return isRemoved;
  };
  const cloneTo = (toStack) => {
    absoluteEntries.forEach((entry) => {
      toStack.add(entry.middleware, { ...entry });
    });
    relativeEntries.forEach((entry) => {
      toStack.addRelativeTo(entry.middleware, { ...entry });
    });
    toStack.identifyOnResolve?.(stack.identifyOnResolve());
    return toStack;
  };
  const expandRelativeMiddlewareList = (from) => {
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
  };
  const getMiddlewareList = (debug = false) => {
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
  };
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
          if (!override) throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
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
          if (!override) throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
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
      const filterCb = (entry) => {
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
      };
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
};
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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/smithy-client/dist-es/client.js
var Client = class {
  constructor(config) {
    this.config = config;
    this.middlewareStack = constructStack();
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
        .catch(() => {});
    } else {
      return handler(command).then((result) => result.output);
    }
  }
  destroy() {
    this.config?.requestHandler?.destroy?.();
    delete this.handlers;
  }
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/smithy-client/dist-es/command.js
var Command = class {
  constructor() {
    this.middlewareStack = constructStack();
  }
  static classBuilder() {
    return new ClassBuilder();
  }
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
    const { logger } = configuration;
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog,
      outputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        commandInstance: this,
        ...smithyContext,
      },
      ...additionalContext,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
};
var ClassBuilder = class {
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
  init(cb) {
    this._init = cb;
  }
  ep(endpointParameterInstructions) {
    this._ep = endpointParameterInstructions;
    return this;
  }
  m(middlewareSupplier) {
    this._middlewareFn = middlewareSupplier;
    return this;
  }
  s(service, operation, smithyContext = {}) {
    this._smithyContext = {
      service,
      operation,
      ...smithyContext,
    };
    return this;
  }
  c(additionalContext = {}) {
    this._additionalContext = additionalContext;
    return this;
  }
  n(clientName, commandName) {
    this._clientName = clientName;
    this._commandName = commandName;
    return this;
  }
  f(inputFilter = (_) => _, outputFilter = (_) => _) {
    this._inputFilterSensitiveLog = inputFilter;
    this._outputFilterSensitiveLog = outputFilter;
    return this;
  }
  ser(serializer) {
    this._serializer = serializer;
    return this;
  }
  de(deserializer) {
    this._deserializer = deserializer;
    return this;
  }
  sc(operation) {
    this._operationSchema = operation;
    this._smithyContext.operationSchema = operation;
    return this;
  }
  build() {
    const closure = this;
    let CommandRef;
    return (CommandRef = class extends Command {
      static getEndpointParameterInstructions() {
        return closure._ep;
      }
      constructor(...[input]) {
        super();
        this.serialize = closure._serializer;
        this.deserialize = closure._deserializer;
        this.input = input ?? {};
        closure._init(this);
        this.schema = closure._operationSchema;
      }
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
    });
  }
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/smithy-client/dist-es/defaults-mode.js
var loadConfigsForDefaultMode = (mode) => {
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
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js
var getChecksumConfiguration2 = (runtimeConfig) => {
  const checksumAlgorithms = [];
  for (const id in AlgorithmId) {
    const algorithmId = AlgorithmId[id];
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
};
var resolveChecksumRuntimeConfig2 = (clientConfig) => {
  const runtimeConfig = {};
  clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
    runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
  });
  return runtimeConfig;
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/smithy-client/dist-es/extensions/retry.js
var getRetryConfiguration = (runtimeConfig) => {
  return {
    setRetryStrategy(retryStrategy) {
      runtimeConfig.retryStrategy = retryStrategy;
    },
    retryStrategy() {
      return runtimeConfig.retryStrategy;
    },
  };
};
var resolveRetryRuntimeConfig = (retryStrategyConfiguration) => {
  const runtimeConfig = {};
  runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
  return runtimeConfig;
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js
var getDefaultExtensionConfiguration = (runtimeConfig) => {
  return Object.assign(getChecksumConfiguration2(runtimeConfig), getRetryConfiguration(runtimeConfig));
};
var resolveDefaultRuntimeConfig = (config) => {
  return Object.assign(resolveChecksumRuntimeConfig2(config), resolveRetryRuntimeConfig(config));
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js
var NoOpLogger = class {
  trace() {}
  debug() {}
  info() {}
  warn() {}
  error() {}
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/querystring-parser/dist-es/index.js
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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/url-parser/dist-es/index.js
var parseUrl = (url) => {
  if (typeof url === "string") {
    return parseUrl(new URL(url));
  }
  const { hostname, pathname, port, protocol, search } = url;
  let query;
  if (search) {
    query = parseQueryString(search);
  }
  return {
    hostname,
    port: port ? parseInt(port) : void 0,
    protocol,
    path: pathname,
    query,
  };
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/runtimeConfig.shared.js
var getRuntimeConfig = (config) => {
  return {
    apiVersion: "2006-03-01",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
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
    logger: config?.logger ?? new NoOpLogger(),
    urlParser: config?.urlParser ?? parseUrl,
    utf8Decoder: config?.utf8Decoder ?? fromUtf83,
    utf8Encoder: config?.utf8Encoder ?? toUtf8,
  };
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/property-provider/dist-es/memoize.js
var memoize = (provider, isExpired, requiresRefresh) => {
  let resolved;
  let pending;
  let hasResult;
  let isConstant = false;
  const coalesceProvider = async () => {
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
  };
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
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-defaults-mode-browser/dist-es/constants.js
var DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js
var resolveDefaultsModeConfig = ({ defaultsMode } = {}) =>
  memoize(async () => {
    const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
    switch (mode?.toLowerCase()) {
      case "auto":
        return Promise.resolve(isMobileBrowser() ? "mobile" : "standard");
      case "mobile":
      case "in-region":
      case "cross-region":
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
  });
var isMobileBrowser = () => {
  const parsedUA =
    typeof window !== "undefined" && window?.navigator?.userAgent
      ? bowser_default.parse(window.navigator.userAgent)
      : void 0;
  const platform = parsedUA?.platform?.type;
  return platform === "tablet" || platform === "mobile";
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/runtimeConfig.browser.js
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
      config?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({ clientVersion: package_default.version }),
    maxAttempts: config?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
    requestHandler: FetchHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
    retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE),
    sha256: config?.sha256 ?? Sha2563,
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
var resolveRuntimeExtensions = (runtimeConfig, extensions) => {
  const extensionConfiguration = Object.assign(
    getDefaultExtensionConfiguration(runtimeConfig),
    getHttpHandlerExtensionConfiguration(runtimeConfig),
    getHttpAuthExtensionConfiguration(runtimeConfig),
  );
  extensions.forEach((extension) => extension.configure(extensionConfiguration));
  return Object.assign(
    runtimeConfig,
    resolveDefaultRuntimeConfig(extensionConfiguration),
    resolveHttpHandlerRuntimeConfig(extensionConfiguration),
    resolveHttpAuthRuntimeConfig(extensionConfiguration),
  );
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/middleware-host-header/dist-es/index.js
function resolveHostHeaderConfig(input) {
  return input;
}
var hostHeaderMiddleware = (options) => (next) => async (args) => {
  if (!HttpRequest.isInstance(args.request)) return next(args);
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
};
var hostHeaderMiddlewareOptions = {
  name: "hostHeaderMiddleware",
  step: "build",
  priority: "low",
  tags: ["HOST"],
  override: true,
};
var getHostHeaderPlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js
var loggerMiddleware = () => (next, context) => async (args) => {
  try {
    const response = await next(args);
    const { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = context;
    const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
    const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
    const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;
    const { $metadata, ...outputWithoutMetadata } = response.output;
    logger?.info?.({
      clientName,
      commandName,
      input: inputFilterSensitiveLog(args.input),
      output: outputFilterSensitiveLog(outputWithoutMetadata),
      metadata: $metadata,
    });
    return response;
  } catch (error) {
    const { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = context;
    const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
    const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
    logger?.error?.({
      clientName,
      commandName,
      input: inputFilterSensitiveLog(args.input),
      error,
      metadata: error.$metadata,
    });
    throw error;
  }
};
var loggerMiddlewareOptions = {
  name: "loggerMiddleware",
  tags: ["LOGGER"],
  step: "initialize",
  override: true,
};
var getLoggerPlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js
var TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
var ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
var ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
var recursionDetectionMiddleware = (options) => (next) => async (args) => {
  const { request } = args;
  if (!HttpRequest.isInstance(request) || options.runtime !== "node") {
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
  const nonEmptyString = (str) => typeof str === "string" && str.length > 0;
  if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
    request.headers[TRACE_ID_HEADER_NAME] = traceId;
  }
  return next({
    ...args,
    request,
  });
};
var addRecursionDetectionMiddlewareOptions = {
  step: "build",
  tags: ["RECURSION_DETECTION"],
  name: "recursionDetectionMiddleware",
  override: true,
  priority: "low",
};
var getRecursionDetectionPlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js
var DEFAULT_UA_APP_ID = void 0;
function isValidUserAgentAppId(appId) {
  if (appId === void 0) {
    return true;
  }
  return typeof appId === "string" && appId.length <= 50;
}
function resolveUserAgentConfig(input) {
  const normalizedAppIdProvider = normalizeProvider2(input.userAgentAppId ?? DEFAULT_UA_APP_ID);
  const { customUserAgent } = input;
  return Object.assign(input, {
    customUserAgent: typeof customUserAgent === "string" ? [[customUserAgent]] : customUserAgent,
    userAgentAppId: async () => {
      const appId = await normalizedAppIdProvider();
      if (!isValidUserAgentAppId(appId)) {
        const logger = input.logger?.constructor?.name === "NoOpLogger" || !input.logger ? console : input.logger;
        if (typeof appId !== "string") {
          logger?.warn("userAgentAppId must be a string or undefined.");
        } else if (appId.length > 50) {
          logger?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
        }
      }
      return appId;
    },
  });
}

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js
var isVirtualHostableS3Bucket = (value, allowSubDomains = false) => {
  if (allowSubDomains) {
    for (const label of value.split(".")) {
      if (!isVirtualHostableS3Bucket(label)) {
        return false;
      }
    }
    return true;
  }
  if (!isValidHostLabel(value)) {
    return false;
  }
  if (value.length < 3 || value.length > 63) {
    return false;
  }
  if (value !== value.toLowerCase()) {
    return false;
  }
  if (isIpAddress(value)) {
    return false;
  }
  return true;
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js
var ARN_DELIMITER = ":";
var RESOURCE_DELIMITER = "/";
var parseArn = (value) => {
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
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json
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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js
var selectedPartitionsInfo = partitions_default;
var selectedUserAgentPrefix = "";
var partition = (value) => {
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
};
var getUserAgentPrefix = () => selectedUserAgentPrefix;

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/util-endpoints/dist-es/aws.js
var awsEndpointFunctions = {
  isVirtualHostableS3Bucket,
  parseArn,
  partition,
};
customEndpointFunctions.aws = awsEndpointFunctions;

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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/middleware-user-agent/dist-es/check-features.js
var ACCOUNT_ID_ENDPOINT_REGEX = /\d{12}\.ddb/;
async function checkFeatures(context, config, args) {
  const request = args.request;
  if (request?.headers?.["smithy-protocol"] === "rpc-v2-cbor") {
    setFeature2(context, "PROTOCOL_RPC_V2_CBOR", "M");
  }
  if (typeof config.retryStrategy === "function") {
    const retryStrategy = await config.retryStrategy();
    if (typeof retryStrategy.acquireInitialRetryToken === "function") {
      if (retryStrategy.constructor?.name?.includes("Adaptive")) {
        setFeature2(context, "RETRY_MODE_ADAPTIVE", "F");
      } else {
        setFeature2(context, "RETRY_MODE_STANDARD", "E");
      }
    } else {
      setFeature2(context, "RETRY_MODE_LEGACY", "D");
    }
  }
  if (typeof config.accountIdEndpointMode === "function") {
    const endpointV2 = context.endpointV2;
    if (String(endpointV2?.url?.hostname).match(ACCOUNT_ID_ENDPOINT_REGEX)) {
      setFeature2(context, "ACCOUNT_ID_ENDPOINT", "O");
    }
    switch (await config.accountIdEndpointMode?.()) {
      case "disabled":
        setFeature2(context, "ACCOUNT_ID_MODE_DISABLED", "Q");
        break;
      case "preferred":
        setFeature2(context, "ACCOUNT_ID_MODE_PREFERRED", "P");
        break;
      case "required":
        setFeature2(context, "ACCOUNT_ID_MODE_REQUIRED", "R");
        break;
    }
  }
  const identity = context.__smithy_context?.selectedHttpAuthScheme?.identity;
  if (identity?.$source) {
    const credentials = identity;
    if (credentials.accountId) {
      setFeature2(context, "RESOLVED_ACCOUNT_ID", "T");
    }
    for (const [key, value] of Object.entries(credentials.$source ?? {})) {
      setFeature2(context, key, value);
    }
  }
}

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js
var USER_AGENT = "user-agent";
var X_AMZ_USER_AGENT = "x-amz-user-agent";
var SPACE = " ";
var UA_NAME_SEPARATOR = "/";
var UA_NAME_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
var UA_VALUE_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
var UA_ESCAPE_CHAR = "-";

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/middleware-user-agent/dist-es/encode-features.js
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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js
var userAgentMiddleware = (options) => (next, context) => async (args) => {
  const { request } = args;
  if (!HttpRequest.isInstance(request)) {
    return next(args);
  }
  const { headers } = request;
  const userAgent = context?.userAgent?.map(escapeUserAgent) || [];
  const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
  await checkFeatures(context, options, args);
  const awsContext = context;
  defaultUserAgent.push(
    `m/${encodeFeatures(Object.assign({}, context.__smithy_context?.features, awsContext.__aws_sdk_context?.features))}`,
  );
  const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
  const appId = await options.userAgentAppId();
  if (appId) {
    defaultUserAgent.push(escapeUserAgent([`app/${appId}`]));
  }
  const prefix = getUserAgentPrefix();
  const sdkUserAgentValue = (prefix ? [prefix] : [])
    .concat([...defaultUserAgent, ...userAgent, ...customUserAgent])
    .join(SPACE);
  const normalUAValue = [
    ...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")),
    ...customUserAgent,
  ].join(SPACE);
  if (options.runtime !== "browser") {
    if (normalUAValue) {
      headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT] ? `${headers[USER_AGENT]} ${normalUAValue}` : normalUAValue;
    }
    headers[USER_AGENT] = sdkUserAgentValue;
  } else {
    headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
  }
  return next({
    ...args,
    request,
  });
};
var escapeUserAgent = (userAgentPair) => {
  const name = userAgentPair[0]
    .split(UA_NAME_SEPARATOR)
    .map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR))
    .join(UA_NAME_SEPARATOR);
  const version = userAgentPair[1]?.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
  const prefixSeparatorIndex = name.indexOf(UA_NAME_SEPARATOR);
  const prefix = name.substring(0, prefixSeparatorIndex);
  let uaName = name.substring(prefixSeparatorIndex + 1);
  if (prefix === "api") {
    uaName = uaName.toLowerCase();
  }
  return [prefix, uaName, version]
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
};
var getUserAgentMiddlewareOptions = {
  name: "getUserAgentMiddleware",
  step: "build",
  priority: "low",
  tags: ["SET_USER_AGENT", "USER_AGENT"],
  override: true,
};
var getUserAgentPlugin = (config) => ({
  applyToStack: (clientStack) => {
    clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-content-length/dist-es/index.js
var CONTENT_LENGTH_HEADER = "content-length";
function contentLengthMiddleware(bodyLengthChecker) {
  return (next) => async (args) => {
    const request = args.request;
    if (HttpRequest.isInstance(request)) {
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
var contentLengthMiddlewareOptions = {
  step: "build",
  tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
  name: "contentLengthMiddleware",
  override: true,
};
var getContentLengthPlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js
var resolveParamsForS3 = async (endpointParams) => {
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
};
var DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
var IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
var DOTS_PATTERN = /\.\./;
var isDnsCompatibleBucketName = (bucketName) =>
  DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
var isArnBucketName = (bucketName) => {
  const [arn, partition2, service, , , bucket] = bucketName.split(":");
  const isArn = arn === "arn" && bucketName.split(":").length >= 6;
  const isValidArn = Boolean(isArn && partition2 && service && bucket);
  if (isArn && !isValidArn) {
    throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
  }
  return isValidArn;
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js
var createConfigValueProvider = (configKey, canonicalEndpointParamKey, config) => {
  const configProvider = async () => {
    const configValue = config[configKey] ?? config[canonicalEndpointParamKey];
    if (typeof configValue === "function") {
      return configValue();
    }
    return configValue;
  };
  if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
    return async () => {
      const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
      const configValue = credentials?.credentialScope ?? credentials?.CredentialScope;
      return configValue;
    };
  }
  if (configKey === "accountId" || canonicalEndpointParamKey === "AccountId") {
    return async () => {
      const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
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
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.browser.js
var getEndpointFromConfig = async (serviceId) => void 0;

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js
var toEndpointV1 = (endpoint) => {
  if (typeof endpoint === "object") {
    if ("url" in endpoint) {
      return parseUrl(endpoint.url);
    }
    return endpoint;
  }
  return parseUrl(endpoint);
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js
var getEndpointFromInstructions = async (commandInput, instructionsSupplier, clientConfig, context) => {
  if (!clientConfig.isCustomEndpoint) {
    let endpointFromConfig;
    if (clientConfig.serviceConfiguredEndpoint) {
      endpointFromConfig = await clientConfig.serviceConfiguredEndpoint();
    } else {
      endpointFromConfig = await getEndpointFromConfig(clientConfig.serviceId);
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
};
var resolveParams = async (commandInput, instructionsSupplier, clientConfig) => {
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
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js
var endpointMiddleware = ({ config, instructions }) => {
  return (next, context) => async (args) => {
    if (config.isCustomEndpoint) {
      setFeature(context, "ENDPOINT_OVERRIDE", "N");
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
      const smithyContext = getSmithyContext(context);
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
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js
var endpointMiddlewareOptions = {
  step: "serialize",
  tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
  name: "endpointV2Middleware",
  override: true,
  relation: "before",
  toMiddleware: serializerMiddlewareOption.name,
};
var getEndpointPlugin = (config, instructions) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(
      endpointMiddleware({
        config,
        instructions,
      }),
      endpointMiddlewareOptions,
    );
  },
});

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js
var resolveEndpointConfig = (input) => {
  const tls = input.tls ?? true;
  const { endpoint, useDualstackEndpoint, useFipsEndpoint } = input;
  const customEndpointProvider =
    endpoint != null ? async () => toEndpointV1(await normalizeProvider(endpoint)()) : void 0;
  const isCustomEndpoint = !!endpoint;
  const resolvedConfig = Object.assign(input, {
    endpoint: customEndpointProvider,
    tls,
    isCustomEndpoint,
    useDualstackEndpoint: normalizeProvider(useDualstackEndpoint ?? false),
    useFipsEndpoint: normalizeProvider(useFipsEndpoint ?? false),
  });
  let configuredEndpointPromise = void 0;
  resolvedConfig.serviceConfiguredEndpoint = async () => {
    if (input.serviceId && !configuredEndpointPromise) {
      configuredEndpointPromise = getEndpointFromConfig(input.serviceId);
    }
    return configuredEndpointPromise;
  };
  return resolvedConfig;
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointRequiredConfig.js
var resolveEndpointRequiredConfig = (input) => {
  const { endpoint } = input;
  if (endpoint === void 0) {
    input.endpoint = async () => {
      throw new Error(
        "@smithy/middleware-endpoint: (default endpointRuleSet) endpoint is not set - you must configure an endpoint.",
      );
    };
  }
  return input;
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-browser/rng.js
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
      );
    }
  }
  return getRandomValues(rnds8);
}

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-browser/stringify.js
var byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
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

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-browser/native.js
var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native_default = {
  randomUUID,
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/uuid/dist/esm-browser/v4.js
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
var v4_default = v4;

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-retry/dist-es/util.js
var asSdkError = (error) => {
  if (error instanceof Error) return error;
  if (error instanceof Object) return Object.assign(new Error(), error);
  if (typeof error === "string") return new Error(error);
  return new Error(`AWS SDK error wrapper for ${error}`);
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-retry/dist-es/configurations.js
var resolveRetryConfig = (input) => {
  const { retryStrategy, retryMode: _retryMode, maxAttempts: _maxAttempts } = input;
  const maxAttempts = normalizeProvider(_maxAttempts ?? DEFAULT_MAX_ATTEMPTS);
  return Object.assign(input, {
    maxAttempts,
    retryStrategy: async () => {
      if (retryStrategy) {
        return retryStrategy;
      }
      const retryMode = await normalizeProvider(_retryMode)();
      if (retryMode === RETRY_MODES.ADAPTIVE) {
        return new AdaptiveRetryStrategy(maxAttempts);
      }
      return new StandardRetryStrategy(maxAttempts);
    },
  });
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.browser.js
var isStreamingPayload = (request) => request?.body instanceof ReadableStream;

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js
var retryMiddleware = (options) => (next, context) => async (args) => {
  let retryStrategy = await options.retryStrategy();
  const maxAttempts = await options.maxAttempts();
  if (isRetryStrategyV2(retryStrategy)) {
    retryStrategy = retryStrategy;
    let retryToken = await retryStrategy.acquireInitialRetryToken(context["partition_id"]);
    let lastError = new Error();
    let attempts = 0;
    let totalRetryDelay = 0;
    const { request } = args;
    const isRequest = HttpRequest.isInstance(request);
    if (isRequest) {
      request.headers[INVOCATION_ID_HEADER] = v4_default();
    }
    while (true) {
      try {
        if (isRequest) {
          request.headers[REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
        }
        const { response, output } = await next(args);
        retryStrategy.recordSuccess(retryToken);
        output.$metadata.attempts = attempts + 1;
        output.$metadata.totalRetryDelay = totalRetryDelay;
        return { response, output };
      } catch (e) {
        const retryErrorInfo = getRetryErrorInfo(e);
        lastError = asSdkError(e);
        if (isRequest && isStreamingPayload(request)) {
          (context.logger instanceof NoOpLogger ? console : context.logger)?.warn(
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
    if (retryStrategy?.mode) context.userAgent = [...(context.userAgent || []), ["cfg/retry-mode", retryStrategy.mode]];
    return retryStrategy.retry(next, args);
  }
};
var isRetryStrategyV2 = (retryStrategy) =>
  typeof retryStrategy.acquireInitialRetryToken !== "undefined" &&
  typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" &&
  typeof retryStrategy.recordSuccess !== "undefined";
var getRetryErrorInfo = (error) => {
  const errorInfo = {
    error,
    errorType: getRetryErrorType(error),
  };
  const retryAfterHint = getRetryAfterHint(error.$response);
  if (retryAfterHint) {
    errorInfo.retryAfterHint = retryAfterHint;
  }
  return errorInfo;
};
var getRetryErrorType = (error) => {
  if (isThrottlingError(error)) return "THROTTLING";
  if (isTransientError(error)) return "TRANSIENT";
  if (isServerError(error)) return "SERVER_ERROR";
  return "CLIENT_ERROR";
};
var retryMiddlewareOptions = {
  name: "retryMiddleware",
  tags: ["RETRY"],
  step: "finalizeRequest",
  priority: "high",
  override: true,
};
var getRetryPlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
  },
});
var getRetryAfterHint = (response) => {
  if (!HttpResponse.isInstance(response)) return;
  const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
  if (!retryAfterHeaderName) return;
  const retryAfter = response.headers[retryAfterHeaderName];
  const retryAfterSeconds = Number(retryAfter);
  if (!Number.isNaN(retryAfterSeconds)) return new Date(retryAfterSeconds * 1e3);
  const retryAfterDate = new Date(retryAfter);
  return retryAfterDate;
};

// build/smithyprojections/quickstart-gradle/source/typescript-client-codegen/dist-es/WeatherClient.js
var WeatherClient = class extends Client {
  config;
  constructor(...[configuration]) {
    let _config_0 = getRuntimeConfig2(configuration || {});
    super(_config_0);
    this.initConfig = _config_0;
    let _config_1 = resolveClientEndpointParameters(_config_0);
    let _config_2 = resolveUserAgentConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveEndpointConfig(_config_4);
    let _config_6 = resolveEndpointRequiredConfig(_config_5);
    let _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    let _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
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
var GetCityCommand = class extends Command.classBuilder()
  .ep(commonParams)
  .m(function (Command2, cs, config, o) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command2.getEndpointParameterInstructions()),
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
export { GetCityCommand, WeatherClient };
/*! Bundled license information:

bowser/src/bowser.js:
  (*!
   * Bowser - a browser detector
   * https://github.com/lancedikson/bowser
   * MIT License | (c) Dustin Diaz 2012-2015
   * MIT License | (c) Denis Demchenko 2015-2019
   *)
*/
