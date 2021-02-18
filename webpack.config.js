const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // es6 jsx
      { 
        test: /\.jsx?/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      // css
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      // 图片
      {
        test: /\.(png|jpg|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            outputPath: 'imgs/',
            publicPath: 'build/imgs',
            limit: 10 * 1024            // 10kb
          }
        }
      },
      // 处理字体
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        use: {
          loader: 'url-loader',
          options: {
            outputPath: 'fonts',
            publicPath: 'build/fonts',
            limit: 10 * 1024   
          }
        }
      }
    ]
  },
  // devtool: 'source-map'
}