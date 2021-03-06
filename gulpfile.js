/// <vs BeforeBuild='jshint' />
// globals : require
var gulp = require('gulp');
var print = require('gulp-print');
var sourcemaps = require('gulp-sourcemaps');
var map = require('map-stream');
var uglify = require("gulp-uglify");
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var runSequence = require('run-sequence');
var jshint = require('gulp-jshint');
var rename = require("gulp-rename");
var minifyHTML = require('gulp-minify-html');
var watch = require('gulp-watch');
var jsdoc = require("gulp-jsdoc");
var fs = require('fs');
var gutil = require("gulp-util");
var concat = require("gulp-concat");
var gulpJsdoc2md = require("gulp-jsdoc-to-markdown");

gulp.task("default", function () {

	console.log("gulp works!");

	runSequence(
		'jshint',
		'buildjs',
		'buildcss',
		'buildhtml',
		function(error) {
			if (error) {
				console.log(error.message);
			} else {
				console.log('BUILD FINISHED SUCCESSFULLY');
			}			
		}
	);
	
});

gulp.task("watch", function() {
	
	gulp.watch([
		"src/**/*.js",
		"src/**/*.html",
		"src/**/*.less"
	],	["default"]);
	
	
});

gulp.task("jshint", function() {
	gulp.src([
		"src/**/*.js"
	],	{ base: './src' })
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
  	.pipe(jshint.reporter('fail'))
});

gulp.task("buildjs", ["buildjs-uglify", "build-debugjs", "jsdocs" ]);

gulp.task("buildjs-uglify", function() {
	//minify and publish 
	gulp.src([
		"src/**/*.js"
	], { base: './src' })
	.pipe(sourcemaps.init())
	.pipe(uglify())
	.pipe(rename({
            suffix: '.min'
       	}))
	.pipe(print())	
	.pipe(sourcemaps.write("."))
	.pipe(gulp.dest('dist'));	
})

gulp.task("build-debugjs", function() {
	//create the debug versions
	gulp.src([
		"src/**/*.js"
	], { base: './src' }
	).pipe(rename({
            suffix: '.debug'
    }))
	.pipe(gulp.dest('dist'));
	
});

gulp.task("jsdocs", function() {
	
	//create the documentation
	//gulp.src([
	//	"src/**/*.js"
	//], { base: './src' }
	//).pipe(jsdoc('./docs'));
	
	
	gulp.src([
		"src/**/*.js"
	])
	.pipe(concat("readme.md"))
	.pipe(gulpJsdoc2md({ template: fs.readFileSync("./readme.hbs", "utf8") }))
	.on("error", function(err){
		gutil.log("jsdoc2md failed:", err.message);
	})
	.pipe(gulp.dest("."));	
	
});

gulp.task("buildcss", function() {
	
	//build de minified version
	gulp.src([
		"src/**/*.less",
		"!src/less/**/*"
	], { base: './src' }).pipe(print())
	.pipe(sourcemaps.init())
	.pipe(less())
	.pipe(minifyCss())
	.pipe(sourcemaps.write("."))
	.pipe(rename({
            suffix: '.min'
       	}))	
	.pipe(gulp.dest('dist'));
	
	//build de debug version
	gulp.src([
		"src/**/*.less",
		"!src/less/**/*"
	], { base: './src' }).pipe(print())
	.pipe(sourcemaps.init())
	.pipe(less())
	.pipe(rename({
            suffix: '.debug'
       	}))
	.pipe(sourcemaps.write("."))		   
	.pipe(gulp.dest('dist'));	
	
});

gulp.task("buildhtml", function() {

	gulp.src([
		"src/**/*.html"
	], { base: './src' }).pipe(print())
	.pipe(minifyHTML({
		conditionals: true,
		comments : true
	}))
	.pipe(gulp.dest('dist'));
	
});