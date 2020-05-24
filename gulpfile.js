var { src, dest, watch } = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
sass.compiler = require('node-sass');

function css() {
    return src('src/sass/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(dest('dist/css'))
        .pipe(cleanCSS())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(dest('dist/css'))
};

exports.default = function () {
    watch('src/sass/**/*.scss', css);
    watch('src/modules/*.scss', css);
}

// exports.default = css;