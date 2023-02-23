module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:storybook/recommended'],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    // project: 'tsconfig.json',
    tsconfigRootDir: __dirname
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    "vue/require-default-prop": "off"
  },
  settings: {
    vue: {
      version: 'detect'
    }
  }
};