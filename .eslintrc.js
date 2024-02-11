module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    tsconfigRootDir: '.',
    ecmaFeatures: {},
  },
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    indent: [2, 2, { ignoredNodes: ['PropertyDefinition'], SwitchCase: 1 }],
    camelcase: 0,
    'no-shadow': 0,
    'no-useless-constructor': 0,
    '@typescript-eslint/no-shadow': 2,
    '@typescript-eslint/member-delimiter-style': 2,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
  },
  overrides: [{
    files: ['packages/i18n/src/**/*.ts'],
    rules: { 'max-len': 0 },
  }],
  settings: {
    'import/resolver': { node: { extensions: ['.js', '.ts'] } },
    react: { version: 'detect' },
  },
  ignorePatterns: [
    'node_modules',
    'build',
    'dist',
    'src/draft.ts'
  ],
};
