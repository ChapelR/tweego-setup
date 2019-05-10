const gulp       = require('gulp'),
      concat     = require('gulp-concat'),
      uglify     = require('gulp-uglify'),
      babel      = require('gulp-babel'),
      clean      = require('gulp-clean-css'),
      autoprefix = require('gulp-autoprefixer'),
      jshint     = require('gulp-jshint'),
      noop       = require('gulp-noop'),
      config     = require('./src/config.json'),
      browsers   = config.broswers;

function processScripts (dir, out, name) {
    return gulp.src(dir)
        .pipe(concat(name))
        .pipe(config.javascript.transpile ? babel({
            presets : [
                ['@babel/preset-env', {
                    targets : browsers
                }]
            ]
        }) : noop())
        .pipe(config.javascript.minify ? 
            uglify().on('error', (e) => {console.log(e);}) : noop())
        .pipe(gulp.dest(out));
}

function processStyles (dir, out, name) {
    return gulp.src(dir)
        .pipe(concat(name))
        .pipe(config.css.minify ? clean() : noop())
        .pipe(config.css.autoprefix ? autoprefix({
            browsers
        }) : noop())
        .pipe(gulp.dest(out));
}

// linting 
function lint () {
    return gulp.src(config.directories['user-js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default', { beep : true }));
}

// build function
function compile (what) {
    const dir = config.directories;
    switch (what) {
        case 'vendor-js':
            return processScripts(dir['vendor-js'], dir['out-js'], dir['vendor-file-js']);
        case 'vendor-css':
            return processStyles(dir['vendor-css'], dir['out-css'], dir['vendor-file-css']);
        case 'user-js':
            return processScripts(dir['user-js'], dir['out-js'], dir['user-file-js']);
        case 'user-css':
            return processStyles(dir['user-css'], dir['out-css'], dir['user-file-css']);
    }
}

// tasks
gulp.task('vendorJS', () => compile('vendor-js'));
gulp.task('vendorCSS', () => compile('vendor-css'));
gulp.task('userJS', () => compile('user-js'));
gulp.task('userCSS', () => compile('user-css'));
gulp.task('build', gulp.parallel('vendorJS', 'userJS', 'vendorCSS', 'userCSS'));
gulp.task('lint', lint);