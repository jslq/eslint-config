module.exports = {
    env: {
        es6: true,
        node: true,
        jest: true,
        browser: true
    },

    extends: ['airbnb-base', 'plugin:vue/recommended'],

    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },

    globals: {
        window: false,
        document: false,
        navigator: false
    },
    
    rules: {
        'no-new': 0,
        'no-shadow': 0,
        camelcase: 1,
        'no-bitwise': 0,
        'func-names': 0,
        'no-console': 0,
        'no-plusplus': 0,
        'arrow-parens': 2,
        'comma-dangle': 0,
        'default-case': 0,
        'no-unused-vars': 1,
        'prefer-template': 2,
        'consistent-return': 0,
        'no-param-reassign': 0,
        'no-nested-ternary': 0,
        'operator-linebreak': 0,
        'vue/attributes-order': 0,
        'object-curly-newline': 1,
        'no-underscore-dangle': 1,
        'no-unused-expressions': 0,
        'no-restricted-globals': 0,
        'function-paren-newline': 0,
        'class-methods-use-this': 0,
        'max-len': ['error', { code: 150 }],
        'prefer-destructuring': ['error', { object: true, array: false }],
        'vue/require-v-for-key': 0,
        'vue/require-default-prop': 0,
        'vue/no-unused-components': 0,
        'vue/singleline-html-element-content-newline': 0,
        'vue/name-property-casing': ['error', 'kebab-case'],
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        'vue/html-closing-bracket-newline': 2,
    }
}