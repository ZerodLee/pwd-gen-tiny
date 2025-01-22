import { defineConfig } from "rolldown";

export default defineConfig({
  input: "src/index.ts",
  output: [
    { file: "dist/index.mjs", format: "esm" },
    { file: "dist/index.cjs", format: "cjs" },
    { file: "dist/index.min.js", format: "iife", name: "pwdGenPro" },
    { file: "dist/index.umd.js", format: "umd", name: "pwdGenPro" },
  ],
});
