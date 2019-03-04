module.exports = {
    "parser": "babel-eslint",
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': [
        'plugin:react/recommended',
        'eslint:recommended',
        "plugin:jest/recommended"
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'jest'
    ],
    'rules': {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-process-env': [
            'off'
        ]
    }
};
