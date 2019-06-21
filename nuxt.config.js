const pkg = require('./package')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
    ],
     script: [
      { src: 'https://raw.githubusercontent.com/LeaVerou/prefixfree/gh-pages/plugins/prefixfree.dynamic-dom.min.js' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { 
    name: 'circle',
    color: '#000',
    background: 'white' 
  },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl',
    './static/style/style.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
