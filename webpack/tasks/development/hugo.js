const gulp = require('gulp');
const bs = require('browser-sync');
const config = require('../../config.js').hugo.dev;
const cp = require('cross-spawn').spawn;

gulp.task('hugo', done => {
  bs.notify('Compiling Hugo');

  cp('hugo', ['--config=' + config.config], { stdio: 'inherit' }).on(
    'close',
    done
  );
});

gulp.task('hugo:rebuild', ['hugo'], () => {
  bs.reload();
});
