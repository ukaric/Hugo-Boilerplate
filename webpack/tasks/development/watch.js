const gulp = require('gulp');
const config = require('../../config').watch;

gulp.task('watch', ['bs'], () => {
  gulp.watch(config.hugo, ['hugo:rebuild']);
  gulp.watch(config.styles, ['styles']);
  gulp.watch(config.scripts, ['webpack']);
  gulp.watch(config.images, ['images']);
});
