import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["index.ts", "search-replace.ts"],
  clean: true,
});
