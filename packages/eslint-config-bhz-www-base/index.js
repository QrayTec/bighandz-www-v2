module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    '@unocss'
  ],

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2019,
    sourceType: 'module',
    extraFileExtensions: ['.vue']
  },

  plugins: ['@typescript-eslint', 'prettier'],

  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true
  },

  rules: {
    'prettier/prettier': 'error',

    'no-var': 'error',

    'no-trailing-spaces': 'error',

    'no-eval': 'error',

    'no-loop-func': 'error',

    'no-new-object': 'error',

    'no-param-reassign': 'error',

    'no-dupe-class-members': 'error',

    'no-duplicate-imports': 'error',

    'object-shorthand': 'error',

    'prefer-const': 'error',

    'prefer-template': 'error',

    'prefer-arrow-callback': 'error',

    'template-curly-spacing': 'error',

    'space-before-blocks': 'error',

    'func-style': 'off',

    'arrow-spacing': 'error',

    eqeqeq: 'error',

    quotes: ['error', 'single'],

    semi: 'off',

    'no-plusplus': 'off',

    'no-shadow': 'off',

    'linebreak-style': ['error', 'unix'],

    'arrow-parens': ['error', 'as-needed'],

    'eol-last': ['error', 'always'],

    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 5,
        multiline: {
          max: 1
        }
      }
    ],

    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',

    'import/no-unresolved': 'off',

    'import/extensions': 'off',

    'vue/multi-word-component-names': 'off',

    '@typescript-eslint/no-shadow': 'error',

    '@typescript-eslint/member-delimiter-style': 'off',

    '@typescript-eslint/no-var-requires': 'off',

    '@typescript-eslint/ban-ts-ignore': 'off',

    '@typescript-eslint/class-name-casing': 'off',

    '@typescript-eslint/explicit-module-boundary-types': 'off',

    '@typescript-eslint/no-non-null-assertion': 'off'
  },

  overrides: [
    {
      files: ['*.vue'],
      parser: require.resolve('vue-eslint-parser')
    }
  ]
}
