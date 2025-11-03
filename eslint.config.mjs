import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import importPlugin from "eslint-plugin-import";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      import: importPlugin,
    },
    settings: { //Added because it can't compile without extentions for local files
      "import/extensions": [
        ".js",
        ".jsx",
        ".ts",
        ".tsx",
        ".mjs",
        ".cjs",
        ".mts",
        ".cts",
        ".d.ts",
        ".css",
        ".scss",
        ".sass",
        ".less",
        ".pcss",
        ".postcss",
        ".tailwind",
        ".svg",
      ],
    },
    rules: {
      "import/extensions": ["error", "always", { ignorePackages: true }],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
