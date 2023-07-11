const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');

const { watch, series } = require('gulp');


function buildStyles() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./src/css'));
};


exports.default = function() {

    watch('sass/**/*.scss', series(buildStyles));
  };
