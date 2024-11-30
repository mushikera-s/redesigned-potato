module.exports = {
  mode: "development",
  entry: "./src/index.tsx",  // エントリーポイントの指定
  output: {
    filename: "bundle.js",
    path: __dirname + '/dist'  // 絶対パスを相対的に指定
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      { test: /\.tsx?$/, use: ["ts-loader"] }
    ]
  }
};
