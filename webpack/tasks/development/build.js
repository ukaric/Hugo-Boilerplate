const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build', cb => {
  runSequence(
    'clean:all',
    'fonts',
    'styles',

    ['images', 'webpack'],
    'hugo',
    cb
  );
});
