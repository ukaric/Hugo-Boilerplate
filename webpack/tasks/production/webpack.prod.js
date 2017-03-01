const gulp = require('gulp');
const webpack = require('webpack');
const path = require('path');
const config = require('../../webpack.config.prod');
const gutil = require('gulp-util');
const prod = '-p';
gulp.task('webpack:prod', cb => {
  webpack([config], (err, stats) => {
    // Error catching //
    if (err) {
      gutil.log(err.stack || err);

      if (err.details) {
        gutil.log(err.details);
      }
      return;
    }

    const info = stats.toJson();

    if (stats.hasErrors()) {
      gutil.log(info.errors);
    }

    if (stats.hasWarnings()) {
      gutil.log(info.warnings);
    }

    //Outputing the result//

    gutil.log(
      '[webpack] Completed\n' +
        stats.toString({
          assets: true,
          chunks: true,
          chunkModules: true,
          colors: true,
          hash: true,
          timings: true,
          version: true
        })
    );
    cb();
  });
});
