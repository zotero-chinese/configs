import path from "node:path";
import type { Config } from "prettier";

// const __dirname = import.meta.dirname;
// const prettierPluginAutocorrect = path.resolve(
//   `${__dirname}/../node_modules/prettier-plugin-autocorrect/lib/index.js`,
// );

export default {
  tabWidth: 2,
  printWidth: 80,
  proseWrap: "preserve",
  endOfLine: "lf",
  trailingComma: "all",
  overrides: [
    {
      files: "**/*.ts",
      options: {
        printWidth: 120,
      },
    },
    // {
    //   files: "**/*.md",
    //   options: {},
    // },
  ],
  // plugins: [prettierPluginAutocorrect],
} satisfies Config;
