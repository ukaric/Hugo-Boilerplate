const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const config = require('../../config').html;
gulp.task('html:prod', () => {
  gulp
    .src(config.src)
    .pipe(htmlmin(config.options))
    .pipe(gulp.dest(config.dest));
});
