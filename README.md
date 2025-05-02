# 共享配置

## Prettier

在 `package.json` 中新建如下字段：

```json
{  
  "devDependencies": {
    "@zotero-chinese/prettier-config": "^0.1.3"
  },
  "prettier": "@zotero-chinese/prettier-config"
  }
```

## MarkdownLint

在 `package.json` 中：

```json
{
  "devDependencies": {
    "@zotero-chinese/markdownlint-config": "^0.1.3"
  }
}
```

在 `.markdownlint-cli2.mjs` 中：

```js
import { markdownlintcli2Config } from "@zotero-chinese/markdownlint-config";

export default markdownlintcli2Config;
```

## ES Lint

组织不设立 ES Lint 配置预设，请使用 `@antfu/eslint-config` 或 `@sxzz/eslint-config`。

## AutoCorrect

该工具未提供扩展预设的办法，且其 Prettier 插件尚不完善，因此需要手动配置，在 `.autocorrectrc` 中：

```yml
# yaml-language-server: $schema=https://huacnlee.github.io/autocorrect/schema.json
# Config rules
rules:
  # Auto add spacing between CJK (Chinese, Japanese, Korean) and English words.
  # 0 - off, 1 - error, 2 - warning
  space-word: 1
  # Add space between some punctuations.
  space-punctuation: 1
  # Add space between brackets (), [] when near the CJK.
  space-bracket: 1
  # Add space between ``, when near the CJK.
  space-backticks: 1
  # Add space between dash `-`
  space-dash: 0
  # Add space between dollar $ when near the CJK.
  space-dollar: 1
  # Convert to fullwidth.
  fullwidth: 1
  # To remove space near the fullwidth.
  no-space-fullwidth: 1
  # Fullwidth alphanumeric characters to halfwidth.
  halfwidth-word: 1
  # Fullwidth punctuations to halfwidth in english.
  halfwidth-punctuation: 1
  # Spellcheck
  spellcheck: 0
# Enable or disable in a specific context
context:
  # Enable or disable to format codeblock in Markdown or AsciiDoc etc.
  codeblock: 1
```

## Renovate Bot

参：[`zotero-chinese/renovate-config` 仓库](https://github.com/zotero-chinese/renovate-config)。
