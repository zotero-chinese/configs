import { markdownlintConfig } from "./markdownlint";

/**
 * @see https://github.com/DavidAnson/markdownlint-cli2?tab=readme-ov-file#markdownlint-cli2jsonc
 */
export const markdownlintcli2Config = {
  config: markdownlintConfig,
  customRules: ["@zotero-chinese/markdownlint-config/search-replace"],

  globs: ["**/*.md"],
  // Ignore files referenced by .gitignore (only valid at root)
  gitignore: true,
};
