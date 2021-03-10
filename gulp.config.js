module.exports = function () {
	var config = {


		
		/**
         * Node Settings
        */
        //defaultPort: 7203,
        nodeServer: './server.js',
        nodeServers: {
            localhost: {
                serverScript: 'server.js',
                rootFolder: ['./app'],
                port: 3000,
                useLiveReload: true,
                softWatches: ['app/**/*.css', 'app/**/*.html'],
                hardWatches: ['app/**/*.js']
            },
            build: {
                serverScript: 'server.js',
                rootFolder: ['build'],
                port: 3000,
                useLiveReload: false,
                softWatches: ['build/**/*.css', 'build/**/*.html'],
                hardWatches: ['build/**/*.js']
            }
        }
	};
	return config;
};