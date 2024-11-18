const fs = require("fs");
const path = require("path");
const esbuild = require("esbuild");

const root = path.join(__dirname, "..");

const { spawn } = require("child_process");

const spawnProcess = async (command, args = [], options = { stdio: "inherit" }) => {
  const childProcess = spawn(command, args, options);

  childProcess.stdout?.pipe(process.stdout);
  childProcess.stderr?.pipe(process.stderr);

  return new Promise((resolve, reject) => {
    childProcess.on("error", reject);
    childProcess.on("exit", (code, signal) =>
      code === 0 ? resolve(0) : reject(`${command} failed with { code: ${code}, signal: ${signal} }`)
    );
  });
};

const generatedClientRoot = path.join(
  root,
  "build",
  "smithyprojections",
  "quickstart-gradle",
  "source",
  "typescript-client-codegen"
);

(async () => {
  await spawnProcess("touch", ["yarn.lock"], { cwd: generatedClientRoot });

  // installs dependencies.
  await spawnProcess("yarn", ["install"], { cwd: generatedClientRoot });
  // builds the client artifact.
  await spawnProcess("yarn", ["build"], { cwd: generatedClientRoot });

  // create a bundle of the client.
  const buildOptions = {
    platform: "node",
    target: ["es2020"],
    bundle: true,
    format: "cjs",
    mainFields: ["main"],
    allowOverwrite: true,
    entryPoints: [path.join(generatedClientRoot, "dist-es", "index.js")],
    supported: {
      //   "dynamic-import": false,
    },
    outfile: path.join(root, "generated-clients", "example-client.js"),
    // packages: "external",
    external: [],
  };

  const buildOptionsBrowser = {
    ...buildOptions,
    platform: "browser",
    target: ["chrome120"],
    mainFields: ["module", "browser", "main"],
    format: "esm",
  };

  await esbuild.build(buildOptions);
})();
