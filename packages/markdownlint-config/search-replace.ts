export const searchReplaceConfig = {
  rules: [
    {
      name: "直角引号",
      message: "请使用直角引号「」而不是弯引号",
      searchPattern: `/\s*“([^“”]+?)”\s*/g`,
      replace: "「$1」",
      searchScope: "text",
    },
    {
      name: "中括号",
      message: "不使用中括号【】",
      searchPattern: `/\s*【([^【】]+?)】\s*/g`,
      replace: "「$1」",
      searchScope: "text",
    },
    {
      name: "->",
      message: "请使用 '->' 作为步骤连接符号，两边空一格",
      searchPattern: `/=>|=》|-》/g`,
      replace: "->",
      searchScope: "text",
    },
    {
      name: "界面元素",
      message: "请使用直角引号包裹界面元素",
      searchPattern: "/`([^`]*)` ?->/g",
      replace: "「$1」->",
      searchScope: "text",
    },
    {
      name: "界面元素",
      message: "请使用直角引号包裹界面元素",
      searchPattern: "/-> ?`([^`]*)`/g",
      replace: "->「$1」",
      searchScope: "text",
    },
    // {
    //   name: "链接空格",
    //   message: "链接周围应有空格",
    //   searchPattern: `/(\S)(\[.*\]\(.*\))(\S)/g`,
    //   replace: "$1 $2 $3",
    //   searchScope: "text",
    // },
  ],
};

// 由于 MarkdownLint 加载包总是从用户的工作目录开始查找，
// 而 pnpm 中，该包不在 node_modules 下，导致 pnpm 无法工作
// 因此，我们直接打包这个规则
import * as rule from "markdownlint-rule-search-replace";
export default rule;
