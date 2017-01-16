module.exports = {
  entry: [
    './client/src/index.js'
  ],
  output: {
    path: __dirname + '/client/src/dist',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel", 
        query: { presets: ['es2015', 'react', 'stage-1'] }
      }
    ]
  }
}