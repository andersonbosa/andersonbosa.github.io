
/* Requires & Plugins & Addons */

const webpack = require('webpack')
const HtmlsWebpackPlugin = require('htmls-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')

/* Configurations */
const isProduction = process.env.NODE_ENV === 'production'
const stylesHandler = 'style-loader'

/**
 * Returns the requested directory from the root directory. *
 *
 * @param {string} pathname
 * @return {string} path
 */
function getPathFromRoot (pathname) {
  return path.resolve(__dirname, '..', pathname)
}

/**
 * @typedef ModuleRule
 * @property {Regex} test
 * @property {String} loader
 */

/**
 * @type {ModuleRule[]}
 */
const commonRules = [
  {
    test: /\.(js|jsx)$/i,
    loader: 'babel-loader'
  },
  {
    test: /\.css$/i,
    use: [stylesHandler, 'css-loader']
  },
  {
    test: /\.s[ac]ss$/i,
    use: [stylesHandler, 'css-loader', 'sass-loader']
  },
  {
    test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i
  }
]

const vueRules = [
  {
    test: /\.vue$/,
    loader: 'vue-loader'
  }
]

const webpackBundleConfig = {
  mode: isProduction ? 'production' : 'development',

  entry: getPathFromRoot('src/main.js'),

  output: {
    path: getPathFromRoot('docs/'),
    filename: 'bundle.js'
    // filename: '[name].[hash:6].bundle.js',
  },

  plugins: [
    new VueLoaderPlugin(),
    new HtmlsWebpackPlugin({
      htmls: [
        {
          src: getPathFromRoot('public/template.ejs'), /* template path */
          filename: 'index.html' /* output filename, */
        }
      ]
    })
  ],

  module: {
    rules: [
      ...commonRules,
      ...vueRules
    ]
  }
}

module.exports = () => {
  if (isProduction) {
    /* setup to prd */
  } else {
    webpackBundleConfig.devServer = {
      open: true,
      host: 'localhost'
    }
  }
  return webpackBundleConfig
}
