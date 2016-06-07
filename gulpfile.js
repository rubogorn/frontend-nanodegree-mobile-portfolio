var gulp = require('gulp');
var sass = require('gulp-sass');

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