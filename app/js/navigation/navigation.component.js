angular.module('app').component('navigation', {
    templateUrl: '/js/navigation/navigation.html',
    bindings: {
        //same as directive attribute scope
    },
    controller: ['$timeout', '$http', '$location', function ($timeout, $http, $location) {
        var ctrl = this;

		ctrl.navigate = function (navRoute) {
			$location.url(navRoute);
        };
	}]
});