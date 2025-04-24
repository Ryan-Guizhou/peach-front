// Prettier 配置文件
// 适用于 Vue 3 + TypeScript 项目，配合 VS Code 使用效果最佳

module.exports = {
  semi: false,                 // 不使用语句末尾分号（Avoid semicolons at end of lines）
  singleQuote: true,          // 使用单引号而不是双引号（Use single quotes instead of double quotes）
  printWidth: 100,            // 每行最大长度（Maximum line width before wrapping）
  tabWidth: 2,                // 一个缩进使用两个空格（Indentation size: 2 spaces）
  useTabs: false,             // 使用空格代替 Tab（Use spaces instead of tabs）
  trailingComma: 'es5',       // 尾随逗号，仅在 ES5 中有效的位置加逗号（Trailing commas where valid in ES5）
  bracketSpacing: true,       // 对象文字中括号之间是否加空格（Add spaces between brackets in object literals）
  arrowParens: 'avoid',       // 箭头函数仅有一个参数时省略括号（Omit parentheses when possible in arrow functions）
  vueIndentScriptAndStyle: true, // 缩进 Vue 文件中的 <script> 和 <style> 标签（Indent contents inside <script> and <style> blocks in Vue）
  endOfLine: 'auto',          // 自动识别换行符（Maintain existing line endings - good for cross-platform）
  htmlWhitespaceSensitivity: 'ignore', // 忽略 HTML 空格敏感（Ignore whitespace sensitivity in HTML）
}
