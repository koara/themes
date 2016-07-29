const browserSync = require('browser-sync').create();
const gulp = require('gulp');

gulp.task('default', []);
gulp.task('serve', ['default'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});