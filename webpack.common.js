export const common = {
  rules: [
    {
      test: /\.(mjs|js|jsx)$/,
      resolve: {
        fullySpecified: false,
        extensions: ['.mjs', '.js', '.jsx']
      },
      exclude: /node_modules/,
      use: 'babel-loader'
    },
    { 
      test: /\.(sass)$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]__[hash:base64:5]'
            }
          }
        }, 
        'sass-loader'
      ],
    },
    {
      test: /\.(png|jpe?g|gif|svg)$/,
      use: {
        loader: "file-loader",
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'media',
          publicPath: 'media'
        }
      }
    }
  ]
}