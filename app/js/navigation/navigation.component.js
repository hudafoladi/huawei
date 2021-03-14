angular.module('app').component('navigation', {
    templateUrl: '/js/navigation/navigation.html',
    bindings: {
        //same as directive attribute scope
    },
    controller: ['$timeout', '$http', '$location', '$route', function ($timeout, $http, $location, $route) {
        var ctrl = this;

		ctrl.navigate = function (navRoute) {
			$location.url(navRoute);
        };
	}]
});