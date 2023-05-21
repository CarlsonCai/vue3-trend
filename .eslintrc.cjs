module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    'vue/setup-compiler-macros': true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-v-model-argument': 'off',
    'vue/no-v-for-template-key': 'off',
    'vue/multi-word-component-names': 0
  }
}
