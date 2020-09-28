module.exports = {
  mode: "development",
  entry: "./dist/index.js",

  optimization: {
    sideEffects: true,
    moduleIds: 'named',
  },
};
