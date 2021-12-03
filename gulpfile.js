const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const browserSync = require('browser-sync');

const styles = () => {
    return src('src/styles/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(concat('main.css'))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(dest('dist'))
        .pipe(browserSync.stream())
};

const pugToHTML = () => {
    return src('src/*.pug')
        .pipe(
            pug({
                pretty: true
            })
        )
        .pipe(dest('dist'))
};

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
}

watch('src/**/*.pug', pugToHTML);
watch('src/styles/**/*.css', styles);
watch('dist/index.html').on('change', browserSync.reload);

exports.styles = styles;
exports.pugToHTML = pugToHTML;
exports.watchFiles = watchFiles;
exports.default = series(pugToHTML, styles, watchFiles);