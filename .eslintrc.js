module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: `plugin:react/recommended`,
    parser: `@babel/eslint-parser`,
    parserOptions: {
        ecmaVersion: 2016,
        sourceType: `module`,
        ecmaFeatures: {
            jsx: true
        },
        babelOptions: {
            configFile: `./.babelrc.js`
        }
    },
    plugins: [
        `prettier`
    ],
    rules: {
        'prettier/prettier' : `warn`
    }
}
