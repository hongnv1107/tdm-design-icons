import { defineConfig } from "tsup";

export default defineConfig([
  // 1. ESM Build (Bundleless for tree shaking and direct imports)
  // Maps to "module": "./es/index.js"
  {
    entry: [
      "src/**/*.ts",
      "src/**/*.tsx",
      "!src/**/*.test.ts",
      "!src/**/*.test.tsx",
      "!src/test.ts",
    ],
    format: ["esm"],
    outDir: "es",
    target: "es2017",
    bundle: false,
    splitting: false,
    sourcemap: true,
    dts: false, // Handled by tsc in package.json
    clean: true,
    shims: true,
    esbuildOptions(options) {
      options.banner = {
        js: '"use client";',
      };
    },
  },

  // 2. CJS Build (Bundleless)
  // Maps to "main": "./lib/index.js"
  {
    entry: [
      "src/**/*.ts",
      "src/**/*.tsx",
      "!src/**/*.test.ts",
      "!src/**/*.test.tsx",
      "!src/test.ts",
    ],
    format: ["cjs"],
    outDir: "lib",
    target: "es2017",
    bundle: false,
    splitting: false,
    sourcemap: true,
    dts: false, // Handled by tsc in package.json
    clean: true,
    shims: true,
    esbuildOptions(options) {
      options.banner = {
        js: '"use client";',
      };
    },
  },

  // 3. UMD/IIFE Build (Bundled for CDN)
  {
    entry: { "index.umd": "src/index.ts" },
    format: ["iife"],
    outDir: "dist",
    globalName: "icons",
    minify: false,
    bundle: true,
    platform: "browser",
    external: ["react", "react-dom"],
    esbuildOptions(options) {
      options.banner = {
        js: '"use client";',
      };
    },
  },
  {
    entry: { "index.umd.min": "src/index.ts" },
    format: ["iife"],
    outDir: "dist",
    globalName: "icons",
    minify: true,
    bundle: true,
    platform: "browser",
    external: ["react", "react-dom"],
    esbuildOptions(options) {
      options.banner = {
        js: '"use client";',
      };
    },
  },
]);
