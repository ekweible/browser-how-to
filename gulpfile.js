var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css/'));
});

gulp.task('stage-dependencies', function() {
    gulp.src('./node_modules/normalize-css/normalize.css')
        .pipe(gulp.dest('./css/'));
});

gulp.task('dev', ['sass', 'stage-dependencies'], function() {
    livereload.listen();
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./css/**/*.css').on('changed', livereload.changed);
});

gulp.task('default', ['dev']);