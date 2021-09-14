module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },

  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.android.js',
          '.android.ts',
          '.android.tsx',
          '.ios.js',
          '.ios.ts',
          '.ios.tsx',
          '.js',
          '.native.js',
          '.ts',
          '.tsx',
        ],
      },
    },
  },

  plugins: [
    'simple-import-sort',
    'react',
    'prettier',
    'import',
    'react-hooks',
    'babel',
  ],
  extends: ['eslint:recommended', 'plugin:react/recommended'],

  rules: {
    'babel/no-unused-expressions': 'off',

    'import/extensions': 'off',
    'import/named': 'off',
    'import/no-unresolved': [
      'error',
      {
        caseSensitive: false,
      },
    ],

    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        jsxBracketSameLine: false,
        printWidth: 80,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
        endOfLine: 'auto',
      },
    ],

    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Packages.
          ['^@?\\w'],
          // Things that start with `~/`.
          ['^~/'],
          ['^../'],
          ['^./'],
        ],
      },
    ],

    'react/jsx-sort-props': ['error', { shorthandFirst: true }],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/no-unused-prop-types': 'off',
  },
  globals: {
    __DEV__: true,
    jasmine: true,
  },
};
