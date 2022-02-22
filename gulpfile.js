var gulp = require('gulp'),
    watch = require('gulp-watch'),
    vinyl = require('vinyl-fs'),
    concat = require('gulp-concat'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass')(require('sass')),
    minify = require('gulp-minify'),
    livereload = require('gulp-livereload'),
    css_sass = require('sass-css-stream'),
    sourceMap = require('gulp-sourcemaps')
    


    gulp.task('html' , function( ) {

        require('./server')

        livereload.listen()

        return watch('stage/html/**/*.pug' , () => {
            vinyl.src('stage/html/*.pug')
            .pipe(pug({ pretty : true }))
            .pipe(gulp.dest('Dist'))
            .pipe(livereload())
        })
        
    })

    gulp.task('css' , function( ) {
        

        return watch('stage/css/**/*.scss' , () => {
            gulp.src('stage/css/**/*.scss')
            .pipe(sourceMap.init())
            .pipe(sass({outputStyle: 'compressed'}))
            
            
            .pipe(concat('all.css'))
            .pipe(sourceMap.write('.'))
            .pipe(gulp.dest('Dist/css'))
            .pipe(livereload())
        })
    })

    gulp.task('js' , function( ) {
        

        return watch('stage/js/*.js' , () => {
            gulp.src('stage/js/*.js')
            .pipe(concat('all.js'))
            .pipe(gulp.dest('Dist/js'))
            .pipe(livereload())
        })
    })

  

    gulp.task('watch' , ['html' , 'css' , 'js'])