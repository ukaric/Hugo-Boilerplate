const gulp = require('gulp');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const config = require('../../config').images;

gulp.task('images:prod', function() {
  return gulp
    .src(config.src)
    .pipe(imagemin(config.options))
    .pipe(changed(config.dest))
    .pipe(gulp.dest(config.dest));
});
