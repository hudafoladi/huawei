(function () {
    'use strict';

	angular.module('app').config(['$httpProvider', httpProviderConfig]);

	function httpProviderConfig($httpProvider) {
		
        //$httpProvider.interceptors.push('casInterceptor');
    }

})();