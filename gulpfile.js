var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    clean = require('gulp-clean-css'),
    autoprefix = require('gulp-autoprefixer'),
    jshint = require('gulp-jshint'),
    noop = require('gulp-noop'),
    config = require('./src/config.json');

function processScripts (dir, out, name) {
    return gulp.src(dir)
        .pipe(concat(name))
        .pipe(config.javascript.transpile ? babel() : noop())
        .pipe(config.javascript.minify ? uglify().on('error', function(e){
            console.log(e);
        }) : noop())
        .pipe(gulp.dest(out));
}

function processStyles (dir, out, name) {
    return gulp.src(dir)
        .pipe(concat(name))
        .pipe(config.css.minify ? clean() : noop())
        .pipe(config.css.autoprefix ? autoprefix() : noop())
        .pipe(gulp.dest(out));
}

// linting 
function lint () {
    return gulp.src(config.directories['user-js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default', { beep : true }));
}

// build function
function build () {
    var dir = config.directories;
    processScripts(dir['vendor-js'], dir['out-js'], dir['vendor-file-js']);
    processScripts(dir['user-js'], dir['out-js'], dir['user-file-js']);
    processStyles(dir['vendor-css'], dir['out-css'], dir['vendor-file-css']);
    processStyles(dir['user-css'], dir['out-css'], dir['user-file-css']);
}

// tasks
gulp.task('build', build);
gulp.task('lint', lint);