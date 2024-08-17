import { createRequire } from "module";
const require = createRequire(import.meta.url);
const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["src/app.ts"],
    bundle: true,
    outfile: "public/bundle.js",
    format: "iife",
    minify: true,
    sourcemap: true,
    target: ["chrome58", "firefox57", "safari11", "edge16"],
  })
  .catch(() => process.exit(1));
