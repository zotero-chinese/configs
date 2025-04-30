// @ts-check
import prettier from "markdownlint/style/prettier";
import type { Configuration } from "markdownlint";
import { searchReplaceConfig } from "./search-replace";

export const markdownlintConfig: Configuration = {
  ...prettier,

  "MD036": false,
  "MD040": false,
  "MD046": false,
  "MD049": false,

  "default": true,
  "MD003": {
    style: "atx",
  },
  "MD004": {
    style: "dash",
  },
  "MD013": false,
  "MD024": {
    siblings_only: true,
  },
  "MD025": {
    front_matter_title: "",
  },
  "MD033": {
    allowed_elements: [
      "br",
      "template",
      "script",
      "style",
      "ArtPlayer",
      "AudioPlayer",
      "AutoCatalog",
      "Badge",
      "BiliBili",
      "Catalog",
      "CodePen",
      "DemoProject",
      "FontIcon",
      "ProjectLink",
      "PDF",
      "Replit",
      "Share",
      "SiteInfo",
      "StackBlitz",
      "XiGua",
      "VideoPlayer",
      "YouTube",
      "AppearanceSwitch",
      "HopeIcon",
      "FlowChartPlayground",
      "IconDisplay",
      "KatexPlayground",
      "NetlifyBadge",
      "PrintButton",
      "ThemeColorPicker",
      "ToggleFullScreenButton",
      "ToggleRTLButton",
      "sub",
      "sup",
    ],
  },

  // 定义文档中涉及的专有名词
  "MD044": {
    code_blocks: false,
    html_elements: false,
    names: [
      "Zotero",
      "JavaScript",
      "GitHub",
      "WebDAV",
      "Android",
      "iOS",
      "macOS",
      "WPS",
      "Word",
      "ZotFile",
      "Zotero Chinese",
    ],
  },

  "search-replace": searchReplaceConfig,
};
