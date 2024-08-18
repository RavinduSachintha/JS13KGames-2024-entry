import { createRequire } from "module";
const require = createRequire(import.meta.url);
const esbuild = require("esbuild");
const gzipPlugin = require("@luncheon/esbuild-plugin-gzip");

esbuild
  .build({
    entryPoints: ["src/app.ts"],
    bundle: true,
    outfile: "public/bundle.js",
    format: "iife",
    minify: true,
    write: false,
    sourcemap: false,
    target: ["chrome58", "firefox57", "safari11", "edge16"],
    plugins: [
      gzipPlugin({
        uncompressed: true,
        gzip: true,
        brotli: false,
      }),
    ],
  })
  .catch(() => process.exit(1));
