module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'standard'

  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2],
    quotes: ['warn', 'single'],
    semi: ['error', 'never'],
    'no-var': ['error'],
    'no-console': ['off'],
    'no-unused-vars': ['warn'],
    'no-mixed-spaces-and-tabs': ['warn']
  }
}
