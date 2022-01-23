module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: [
        `eslint:recommended`,
        `plugin:react/recommended`,
        `plugin:react-hooks/recommended`,
    ],
    parser: `@babel/eslint-parser`,
    parserOptions: {
        ecmaVersion: 2016,
        sourceType: `module`,
        ecmaFeatures: {
            jsx: true
        },
        requireConfigFile: false,
        // babelOptions: {
        //     // configFile: `./.babelrc.js`
        // }
    },
    plugins: [
        `jsx`
    ],
    rules: {
        "react/prop-types": 0
    }
};
