module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "react-native/react-native": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react-native/all",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-native",
        "@typescript-eslint"
    ],
    "rules": {
        "react-native/no-color-literals": 0
    }
}
