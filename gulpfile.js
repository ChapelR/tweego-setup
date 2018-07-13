var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean-css'),
    autoprefix = require('gulp-autoprefixer'),
    jshint = require('gulp-jshint');

function processScripts (dir, out, name) {
    return gulp.src(dir)
        .pipe(concat(name))
        .pipe(uglify().on('error', function(e){
            console.log(e);
        }))
        .pipe(gulp.dest(out));
}

function processStyles (dir, out, name) {
    return gulp.src(dir)
        .pipe(concat(name))
        .pipe(clean())
        .pipe(autoprefix())
        .pipe(gulp.dest(out));
}

// linting 
function lint () {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default', { beep : true }));
}

// build function
function build () {
    processScripts('./vendor/**/*.js', './project/scripts', 'bundle.min.js');
    processScripts('./src/scripts/**/*.js', './project/scripts', 'user.min.js');
    processStyles('./vendor/**/*.css', './project/styles', 'bundle.min.css');
    processScripts('./src/styles/**/*.css', './project/styles', 'user.min.css');
}

// tasks
gulp.task('build', build);
gulp.task('lint', lint);