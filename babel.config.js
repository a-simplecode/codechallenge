// eslint-disable-next-line no-undef
module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ios.ts", ".android.ts", ".ts", ".ios.tsx", ".android.tsx", ".tsx", ".jsx", ".js", ".json"],
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
    ],
  ],
};
