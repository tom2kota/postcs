const gulp = require('gulp');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

gulp.task('css', function () {

    const processors = [
        autoprefixer({browsers: ['last 2 version']}),
        cssnano()
    ];

    return gulp.src('./src/styles/styleIn.css')
        .pipe(postcss(processors))
        .pipe(rename('styleOut.css'))
        .pipe(gulp.dest('./src/styles/'));
});