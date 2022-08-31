const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
        'process.env':{
          OS1: JSON.stringify(process.env.OS1)
        }
    }
    
    )
  ]
}