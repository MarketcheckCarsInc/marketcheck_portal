require('dotenv').config()
module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {}
        }
      ]
    })

    return config
  }
}
