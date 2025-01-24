export default {
  module: {
    rules: [
      {
        exclude: /\.(jpg|png)/,
        use: "babel-loader",
      },
    ],
  },
  watch: true,
  mode: "development",
  devtool: "source-map",
};
