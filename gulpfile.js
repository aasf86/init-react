var gulp = require("gulp");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserSync = require("browser-sync");
var watch = require("gulp-watch");
var concatCss = require('gulp-concat-css');

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
	
	watch("./app/**/*",  browserSync.reload);
	
});


gulp.task("do-it-baby", () => {

	var b = browserify({
		entries: './src/app.jsx',
		debug: true,
        extensions: ['.js', '.jsx']
		// defining transforms here will avoid crashing your stream		
	}).transform(babelify.configure({
        // Use all of the ES2015 spec
        presets: ["es2015", "react"]
    }));
	 
	return b.bundle()
		.pipe(source('app.js'))
		.pipe(buffer())        
	// Add transformation tasks to the pipeline here.		
		.pipe(gulp.dest('./app'));
        
        //.pipe(source('style.css'))
        //.pipe(concatCss('css/**/*.css'))
        //.pipe(buffer())
});

gulp.task("watch-it-baby", () => {
	
	watch("./src/**/*.jsx", () => {
		gulp.run("do-it-baby");
	});
    
	watch("./src/**/*.css", () => {
		gulp.run("do-it-baby-css");
	});
    	
	watch("./src/**/*.html", () => {
		gulp.run("do-it-baby-html");
	});
    	        
});

gulp.task('do-it-baby-css', () => {        
  return gulp.src('./src/css/**/*.css')
    .pipe(concatCss("css/style.css"))
    .pipe(gulp.dest('./app'));        
});

gulp.task('do-it-baby-html', function() {
    return gulp.src('./src/**/*.html')	
    .pipe(gulp.dest('./app'));
});

gulp.task('run-all', ['do-it-baby', 'do-it-baby-css', 'watch-it-baby', 'do-it-baby-html', 'serve']);