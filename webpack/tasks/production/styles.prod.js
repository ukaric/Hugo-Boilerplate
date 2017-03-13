const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const moduleImporter = require('sass-module-importer');
const importcss = require('postcss-import');
const autoprefixer = require('autoprefixer');
const fonts = require('postcss-font-magician');
const sourcemaps = require('gulp-sourcemaps');
const config = require('../../config').styles;
const cssnano = require('cssnano');

const preprocessros = [
  importcss,
  autoprefixer,
  fonts({
    hosted: ['./src/static/fonts', './fonts']
  })
];

const postprocessors = [cssnano];

gulp.task('styles:prod', () => {
  gulp
    .src(config.src)
    .pipe(sass({
      importer: moduleImporter()
    }))
    .pipe(postcss(preprocessros))
    .pipe(sourcemaps.init())
    .pipe(postcss(postprocessors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest));
});
