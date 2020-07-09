//Adds the dependencies that we added to the project
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

//Compile SASS into CSS and reload the browser
gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'css/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
});

// Move the javascript files into our /src/js folder
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("./js"))
        .pipe(browserSync.stream());
});

//Static Server and watching SCSS/HTML files
gulp.task('serve', gulp.parallel('sass', function() {

    browserSync.init({
        server: ""
        // server: "./src"
    });

    gulp.watch(gulp.parallel('node_modules/bootstrap/scss/bootstrap.scss', 'css/*.scss', 'sass'));
    gulp.watch("./*.html").on('change', browserSync.reload);
}));

// gulp.task('default', ['js', 'serve']);
gulp.task('default', gulp.parallel('js', 'serve'));