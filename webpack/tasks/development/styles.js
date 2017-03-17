const gulp = require('gulp');
const notify = require('gulp-notify');
const sass = require('gulp-sass');
const moduleImporter = require('sass-module-importer');
const path = require('path');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');

var cached = require('gulp-cached');
var sassInheritance = require('gulp-sass-inheritance');
var filter = require('gulp-filter');
var gulpif = require('gulp-if');


const sassPartialsImported = require('gulp-sass-partials-imported');

const importcss = require('postcss-import');
const autoprefixer = require('autoprefixer');
const fonts = require('postcss-font-magician');
const config = require('../../config').styles;


const preprocessros = [
  importcss
];

gulp.task('styles', () => {
  return gulp
    .src(config.src)
    .pipe(
      plumber({
        errorHandler: notify.onError({
          title: 'Error in Style task.',
          message: '<%= error.message %>',
          sound: 'Notification.IM',
          onLast: true,
          wait: true
        })
      })
    )
    .pipe(cached('sassfiles'))
    .pipe(sassPartialsImported('src/assets/css'))
    .pipe(sass({
      importer: moduleImporter(),
      includePaths: 'src/assets/css'
    }))
    .pipe(postcss(preprocessros))
    .pipe(gulp.dest(config.dest))
    .pipe(
      notify({
        title: 'PostCSS',
        message: 'PostCSS transformation done !',
        icon: path.join(__dirname, '../', 'postcss.png'),
        sound: false,
        onLast: true
      })
    );
});
