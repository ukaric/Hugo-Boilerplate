const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build:prod', cb => {
  runSequence('fonts', ['styles:prod', 'images:prod', 'webpack:prod'], cb);
});
