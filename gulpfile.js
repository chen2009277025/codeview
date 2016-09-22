
/**
 * Created by chenjianhui on 16/9/19.
 */
var gulp = require('gulp'),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    minifyCss = require("gulp-minify-css"),
    minifyHtml = require("gulp-minify-html"),
    less = require("gulp-less");



gulp.task('minify-js', function () {
    gulp.src('dev/js/**/*.js') // 要压缩的js文件
        .pipe(uglify())  //使用uglify进行压缩,更多配置请参考：
        .pipe(gulp.dest('public/js')); //压缩后的路径
});

gulp.task('concat', function () {
    gulp.src('dev/js/**/*.js')  //要合并的文件
        .pipe(concat('all.js'))  // 合并匹配到的js文件并命名为 "all.js"
        .pipe(gulp.dest('public/js'));
});


gulp.task('compile-less', function () {
    gulp.src('dev/less/**/*.less')
        .pipe(less())
        .pipe(minifyCss())
        .pipe(gulp.dest('public/css'));
});

gulp.task('compile-plugins', function () {
//先把文件移动到对应目录,然后压缩js和css
    gulp.src(['dev/plugins/codemirrorlibs/**/*.*'])
        .pipe(gulp.dest('public/plugins/codemirrorlibs'));

    gulp.src(['dev/plugins/ueditor/**/*.*'])
        .pipe(gulp.dest('public/plugins/ueditor'));

    gulp.src('public/plugins/**/*.js')
        .pipe(gulp.dest('public/plugins'));

    gulp.src('public/plugins/**/*.css')
        .pipe(gulp.dest('public/plugins'));

    gulp.src('public/css/**/*.css')
        .pipe(gulp.dest('public/css'));

    // gulp.src(['public/fonts/**/*.*'])
    //     .pipe(gulp.dest('public/fonts'));

});

gulp.task('minify-html', function () {
    gulp.src('dev/views/*.ejs') // 要压缩的html文件
        .pipe(minifyHtml()) //压缩
        .pipe(gulp.dest('views'));
});

gulp.task("default",['minify-js','compile-less','compile-plugins'])