let gulp = require('gulp');
let sass = require('gulp-sass');
let typescript = require('gulp-typescript');

gulp.task('styles', function(){
    return gulp.src('src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('final/styles'));
})

gulp.task('scripts', function(){
    let tsConfig = typescript.createProject('tsconfig.json');
    return tsConfig.src()
    .pipe(tsConfig())
    .pipe(gulp.dest('final/scripts'));
})

gulp.task('html', function(){
    return gulp.src('src/index.html')
    .pipe(gulp.dest('final'));
})

gulp.task('default', gulp.parallel(['styles', 'scripts', 'html']));