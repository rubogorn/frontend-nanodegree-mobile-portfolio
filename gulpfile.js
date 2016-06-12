var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');


gulp.task('default', function() {
    gulp.watch('views/sass/**/*.scss', ['styles']);
});

gulp.task('styles', function() {
    gulp.src('views/sass/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./views/css'))
});

gulp.task('compress', function() {
    gulp.src('views/js/**/*.js/')
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('views/dist'))
});

gulp.task('minify', function() {
    return gulp.src('views/html/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('views'))
});

gulp.task('imagemin', function() {
gulp.src('views/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('views/images/compressed/'))
});