/// <vs BeforeBuild='jshint' />
// globals : require
var gulp = require('gulp');
var less = require('gulp-less');
var print = require('gulp-print');
//var merge = require('merge-stream');
//var jsdoc = require("gulp-jsdoc");
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');
var map = require('map-stream');
//var fs = require('fs');
var gxml = require('gulp-xml2js');
var flatten = require("gulp-flatten");
var concat = require("gulp-concat");
//var path = require('path');
var uglify = require("gulp-uglify");
var sourcemaps = require('gulp-sourcemaps');
var reporters = require("reporters");
var rename = require("gulp-rename");
var minifyCss = require('gulp-minify-css');

gulp.task("default", function () {
	
	gulp.src(
		[
			"src/**/*.js"
		], 
		{ base: './src' }
	)
	.pipe(print())
//	.pipe(sourcemaps.init())
	.pipe(uglify())
//	.pipe(print())
//	.pipe(sourcemaps.write("."))
	.pipe(gulp.dest('dist'));
		

	
});