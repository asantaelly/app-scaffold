module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@assets": ["assets"],
            "@store": ["src/store"],
            "@hooks": ["src/hooks"],
            "@utils": ["src/tools"],
            "@themes": ["src/themes"],
            "@schemas": ["src/schemas"],
            "@screens": ["src/screens"],
            "@layouts": ["src/layouts"],
            "@navigation": ["src/navigation"],
            "@components": ["src/components"],
          },
        },
      ],
    ],
  };
};
