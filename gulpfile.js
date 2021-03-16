const gulp = require('gulp');
const uglifyes = require('uglify-es');
const composer = require('gulp-uglify/composer');
const uglify = composer(uglifyes, console);
var browserify = require('browserify');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var del = require('del');

var $ = require('gulp-load-plugins')({ lazy: true }); //lazy load plugins as used

var config = require('./gulp.config')();
var gls = require('gulp-live-server');

gulp.task('clean-build-vendor', function (done) {
	var delFolderContents = [].concat(config.vendorDrop + '/');
	log('Cleaning: ' + $.util.colors.blue(delFolderContents));
	return del(delFolderContents, done);
});

gulp.task('build-vendor', ['clean-build-vendor'], function () {
	log('Starting build-vendor: ...');
	// set up the browserify instance on a task basis
	var b = browserify({
	  entries: './vendor.js',                   // vendor source file
	  debug: true
	});
	return b.bundle()
		.pipe(source('vendor.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: false}))
		.pipe(uglify()) 							  // uglify code
		.pipe(sourcemaps.write('./'))                 // write sourcemap
		.pipe($.if('*.js', $.rev())) // app.js --> app-1j8889jr.js
		.pipe($.revReplace())
		.pipe(gulp.dest(config.vendorDrop));
});

// gulp.task('inject-vendor', ['build-vendor'],function (done) {
// 	log('Starting inject-vendor: ...');
// 	var vsources = gulp.src([config.vendor], { read: false });
// 	log('vendor files: ' + config.vendor);
// 	return gulp
// 		.src(config.index)
// 		.pipe($.plumber())
// 		.pipe($.inject(vsources, { relative: true, name: 'vendor' }))
// 		.pipe(gulp.dest(config.client));
// });



gulp.task('serve-dev', function (cb) {
	startServer(config.nodeServers.localhost);
	cb();
});

function startServer(config) {

	var server = gls([config.serverScript, config.rootFolder, config.port, config.useLiveReload]);

	//static server 
	//var server = gls.static(config.rootFolder, config.port);
	server.start();

	if (config.useLiveReload == true) {
		//use gulp.watch to trigger server actions(notify, start or stop) 
		gulp.watch(config.softWatches, function (cb) {
			console.log('applying softwatch..');
			//only apply
			//console.log('file',file);
			//console.log('server',server);
			server.notify.apply(server, [cb]);
		});

		//restart server and reload
		gulp.watch(config.hardWatches, function (file) {
			console.log('applying hardwatch..');
			server.start.bind(server)();
			server.notify.apply(server, [file]);
		});
	}
}

function log(msg) {
    if (typeof (msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}

function defaultTask(cb) {
	console.log('Starting Gulp..');

	cb();
  }
  
  exports.default = defaultTask