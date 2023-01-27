// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "prettier",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      modules: true,
    },
    ecmaVersion: "6",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier", "react-hooks", "module-resolver", "check-file", "react-native"],
  overrides: [
    {
      files: ["**/components/**/*.style**.ts", "src/App.tsx", "**/app/**", "**/navigation/**"],
      rules: {
        "no-restricted-imports": "off",
      },
    },
    {
      files: ["**/features/**"],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            paths: [
              {
                name: "react-native",
                importNames: ["StyleSheet"],
                message: "Please import StyleSheet only in *.styles.ts files within the `components` folder.",
              },
            ],
          },
        ],
      },
    },
    {
      files: ["**/components/atoms/**", "**/components/organisms/**", "**/components/molecules/**"],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            paths: [
              {
                name: "react-native",
                importNames: ["SafeAreaView", "StatusBar"],
                message:
                  "Please import SafeAreaView and/or StatusBar only in the highest level of components, which is the `template`",
              },
              {
                name: "app/hooks",
                message: "Please import redux related items in features files.",
              },
              {
                name: "react-redux",
                message: "Please import redux related items from app/hooks",
              },
              {
                name: "@reduxjs/toolkit",
                message: "Please import redux related items from app/hooks",
              },
            ],
            patterns: [
              {
                group: ["features/*"],
                message: "features are not related to components, you can't access them within components",
              },
            ],
          },
        ],
      },
    },
    {
      files: ["**/components/templates/**"],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            paths: [
              {
                name: "app/hooks",
                message: "Please import redux related items in features files.",
              },
              {
                name: "react-redux",
                message: "Please import redux related items from app/hooks",
              },
              {
                name: "@reduxjs/toolkit",
                message: "Please import redux related items from app/hooks",
              },
            ],
            patterns: [
              {
                group: ["features/*"],
                message: "features are not related to components, you can't access them within components",
              },
            ],
          },
        ],
      },
    },
  ],
  rules: {
    "react-native/no-inline-styles": 1,
    "prettier/prettier": [
      "error",
      {
        "no-inline-styles": true,
      },
    ],
    "module-resolver/use-alias": 2,
    "no-console": ["error", { allow: ["warn", "error", "tron"] }],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "check-file/filename-naming-convention": [
      "error",
      {
        "**/components/**": "PASCAL_CASE",
        "**/features/**": "PASCAL_CASE",
      },
      {
        ignoreMiddleExtensions: true,
      },
    ],
    "check-file/folder-naming-convention": [
      "error",
      {
        "src/**/": "CAMEL_CASE",
      },
    ],
  },
  globals: {
    JSX: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        paths: ["src"],
        alias: {
          assets: "./src/assets",
          atoms: "./src/components/atoms",
          molecules: "./src/components/molecules",
          organisms: "./src/components/organisms",
          templates: "./src/components/templates",
          navigation: "./src/navigation",
          app: "./src/app",
          features: "./src/features",
          localization: "./src/localization",
          utilities: "./src/utilities",
        },
      },
    },
  },
};
