var gulp = require('gulp');
var concat = require('gulp-concat');
var prefix = require('gulp-autoprefixer')
var sass = require('gulp-sass');
var watch = require('gulp-watch')



//first task 

gulp.task('gulptask', function () {

    console.log('hello everybody')
});



//html task 


//css task 

gulp.task('css', function () {
    return gulp.src('Starter-file/sass/style.scss')
        .pipe(sass())
        .pipe(prefix('last 2 version'))
        .pipe(gulp.dest('dist/css'))




});


//js task 




//watch task 


gulp.task('watch', function () {
    gulp.watch('Starter-file/sass/style.scss', gulp.series(['css']));

});