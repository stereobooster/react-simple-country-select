module.exports = {
  title: 'react-simple-country-select',
  components: 'src/index.js',
  skipComponentsWithoutExample: true,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
      'prop-types': 'prop-types',
      'react-waypoint': 'react-waypoint',
    },
  },
}
