(function () {
    'use strict';

	angular.module('app',).config(['$httpProvider', httpProviderConfig]);

    //gapiprovider.test('hello world');
	function httpProviderConfig($httpProvider) {
		
        //$httpProvider.interceptors.push('casInterceptor');
    }

    



})();