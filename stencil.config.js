const sass = require('@stencil/sass');

exports.config = {
  namespace: 'recurrent-design',
  outputTargets:[
    { 
      type: 'dist' 
    },
    { 
      type: 'www',
      serviceWorker: false
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/scss/abstracts/variables.scss',
        'src/scss/abstracts/mixins.scss'
      ]
    })
  ],
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
