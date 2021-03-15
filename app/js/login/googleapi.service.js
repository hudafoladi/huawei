(function () {
    'use strict';

	angular.module('googleapi', []).factory('googleApiService', ['$q', 'appConfig', googleApiService]);

	function googleApiService($q, appConfig) {
	

		var deferred = $q.defer();
		var promise = deferred.promise;

		// Asynchronously load the G+ SDK.
		var po = document.createElement('script');
		po.type = 'text/javascript';
		po.async = true;
		po.src = 'https://apis.google.com/js/client:platform.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(po, s);

		po.onload = function () {
			//Initialize Auth2 with our clientId
			gapi.load('auth2', function () {
				var googleAuthObj =
					gapi.auth2.init({
						client_id: appConfig.dev.googleApi.clientId,
						cookie_policy: appConfig.dev.googleApi.cookie_policy
					});
					deferred.resolve(googleAuthObj);
			});        
		};


		return {
			googleAuthPromise: promise
		}
	}
})();