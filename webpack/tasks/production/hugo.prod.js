const gulp = require('gulp');
const bs = require('browser-sync');
const config = require('../../config.js').hugo.prod;
const cp = require('cross-spawn').spawn;

gulp.task('hugo:prod', done => {
  bs.notify('Compiling Hugo');

  cp('hugo', ['--config=' + config.config], { stdio: 'inherit' }).on(
    'close',
    done
  );
});
