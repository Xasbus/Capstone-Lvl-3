export default {
  module: {
    rules: [
      {
        // exclude: /\.(jpg|png)/,
        use: "babel-loader",
        exclude: /\.(scss|css|otf|ttf|json)/,
        test: /\.js/,
      },
      {
        test: /\.(scss|css)/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png|mp4)/,
        type: "asset/resource",
      },
    ],
  },
  watch: true,
  watchOptions: { aggregateTimeout: 2000 },
  mode: "development",
  devtool: "source-map",
};
