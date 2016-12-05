/**
 * Created by tsv on 26.11.16.
 */
var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    gp_sourcemaps = require('gulp-sourcemaps'),
    templateCache = require('gulp-angular-templatecache'),
    ngAnnotate = require('gulp-ng-annotate'),
    cleanCSS = require('gulp-clean-css'),
    htmlmin = require('gulp-htmlmin');

var minconfig = {
    collapseWhitespace: true,
    removeComments:     true,
    maxLineLength:      130
};

gulp.task('minify-css', function() {
    return gulp.src('./css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('../front_public/css/'));
});

gulp.task('js-fef', function(){
    return gulp.src([
            'js/**/*.js'
        ])
        .pipe(gp_sourcemaps.init())
        .pipe(gp_concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(gulp.dest('../front_public/js'))
        .pipe(gp_uglify())
        .pipe(gp_sourcemaps.write('./'))
        .pipe(gulp.dest('../front_public/js'));
});

gulp.task('css-fef', function () {
    return gulp.src([
            'css/*.css'
        ])
        .pipe(gp_concat({ path: 'all.css'}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('../front_public/css'));
});

gulp.task('html-fef', function () {
    return gulp.src(['./templates/**/*.html'])
        .pipe(htmlmin(minconfig))
        .pipe(gulp.dest('../front_public/templates/'));
});

gulp.task('html-index', function () {
    return gulp.src(['index.html'])
        .pipe(htmlmin(minconfig))
        .pipe(gulp.dest('../front_public/'));
});

gulp.task('watch', function () {
    gulp.watch('app/**/*.js', ['js-fef']);
    gulp.watch('app/**/*.html', ['html-fef'])
});

gulp.task('default', ['js-fef', 'html-fef', 'html-index', 'css-fef'], function(){});