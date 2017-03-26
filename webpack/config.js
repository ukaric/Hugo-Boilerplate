const src = './src/';
const build = './build/';
const dev = build + 'development/';
const prod = build + 'production/';
const assets = src + 'assets/';
const devJS = dev + 'js/';

module.exports = {
  hugo: {
    dev: {
      src: src,
      dest: './build/dev',
      config: 'config.yaml'
    },
    prod: {
      src: src,
      dest: './build/prod',
      config: 'config.production.yaml'
    }
  },
  del: {
    all: build,
    img: src + 'static/img',
    styles: src + 'static/css',
    js: src + 'static/js',
    fonts: src + 'static/fonts'
  },
  styles: {
    src: assets + 'css/**/*.{css,sass,scss}',
    dest: src + '/static/css',
    reporter: {
      clearMessages: true,
      throwError: true
    }
  },
  fonts: {
    src: assets + 'fonts/**',
    dest: src + '/static/fonts'
  },
  images: {
    src: assets + 'img/**/*.{jpg,jpeg,png,gif,svg}',
    dest: src + 'static/img',
    options: {
      optimizationLevel: 3,
      progessive: true,
      interlaced: true
    }
  },
  browsersync: {
    development: {
      server: {
        baseDir: [dev, build, src]
      },
      port: 9999,
      ui: {
        port: 9997,
        weinre: {
          port: 9996
        },
      },
      open: false,
      files: [dev + '/css/*.css', dev + '/js/*.js', dev + '/img/**'],
      notify: {
        styles: [
          'display: hidden; padding: 5px 15px; font-family: sans-serif; position: fixed; font-size: 0.9em; z-index: 9999; right: 5px; top: 5px; border-bottom-right-radius: 5px; margin: 0px; color: #f8f8f8; text-align: center; background: linear-gradient(to left, #f85032 , #e73827);'
        ]
      },
      host: '185.112.23.195',
      logConnections: true,
      logFileChanges: true,
      logLevel: 'info',
    },
    production: {
      server: {
        baseDir: [prod]
      },
      port: 9998,
      open: false,
      notify: {
        styles: [
          'display: hidden; padding: 5px 15px; font-family: sans-serif; position: fixed; font-size: 0.9em; z-index: 9999; left: 0px; top: 0px; border-bottom-right-radius: 5px; margin: 0px; color: white; text-align: center; background-color: rgb(27, 32, 50);'
        ]
      }
    }
  },
  webpack: {
    entry: {
      app: './src/assets/js/src.js',
      vendors: './src/assets/js/vendor/vendor.js'
    }
  },
  html: {
    src: prod + '**/*.html',
    dest: prod,
    options: {

    }
  },
  watch: {
    hugo: [
      'config.yaml',
      src + 'data/**/*.{json,yml,csv}',
      src + 'layouts/**/*.{html,xml,txt}',
      src + 'content/**/*.{md,markdown}',
      src + '**/*.{html,markdown,md,yml,json,txt,xml}',
      src + 'static/**/*.{js,css}',
      src + '*'
    ],
    styles: assets + 'css/**/*.{css,scss,sass}',
    scripts: assets + 'js/**/*.js',
    images: assets + 'img/**/'
  }
};
