import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
  skipFormatting,
  // 禁用这个检查规则
  {
    name: 'app/disable-multi-word-check-for-index',
    files: ['src/**/index.vue'], // 只匹配 src 下的 index.vue
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },


  // 禁用 src/axios 目录下的所有 ESLint 检查
  {
    name: 'disable-eslint-for-axios',
    files: ['src/axios/**/*.{ts,js,vue}'], // 匹配 src/axios 目录下的所有文件
    rules: {
      // 禁用所有规则
      'no-unused-vars': 'off',
      'no-console': 'off',
      'no-debugger': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'vue/valid-template-root': 'off',
      'vue/no-v-model-argument': 'off',
      'vue/no-unused-vars': 'off',
      'vue/require-default-prop': 'off',
      'vue/multi-word-component-names': 'off',

      // 关闭空对象类型警告
      '@typescript-eslint/no-empty-object-type': 'off',

      // 关闭 Vue 类型检查警告
      'vue/no-unknown-property': 'off',
      // 可选：如果你的代码中用到了 requestType，关闭相关的类型检查
      'vue/require-prop-types': 'off',

    },
  },
]
