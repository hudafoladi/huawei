const gulp = require('gulp');
var config = require('./gulp.config')();
var gls = require('gulp-live-server');



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

function defaultTask(cb) {
	console.log('Starting Gulp..');

	cb();
  }
  
  exports.default = defaultTask