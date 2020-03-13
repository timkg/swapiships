const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public'),
    },
    devServer: {
        contentBase: "./public"
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [[
                  '@babel/preset-env',
                  {
                    "targets": {
                      "ie": "11"
                    }
                  }
                ], '@babel/preset-react']
              }
            }
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ]
      }
};
