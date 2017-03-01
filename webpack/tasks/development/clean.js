const gulp = require('gulp');
const config = require('../../config').del;
const rimraf = require('rimraf');

gulp.task(
  'clean:all',
  ['clean:js', 'clean:img', 'clean:styles', 'clean:fonts'],
  cb => rimraf(config.all, cb)
);

gulp.task('clean:js', cb => rimraf(config.js, cb));

gulp.task('clean:img', cb => rimraf(config.img, cb));

gulp.task('clean:styles', cb => rimraf(config.styles, cb));

gulp.task('clean:fonts', cb => rimraf(config.fonts, cb));
