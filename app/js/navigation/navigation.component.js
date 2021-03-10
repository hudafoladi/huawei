angular.module('app').component('navigation', {
    templateUrl: '/js/navigation/navigation.html',
    bindings: {
        //same as directive attribute scope
    },
    controller: ['$timeout', '$http', '$location', function ($timeout, $http, $location) {
        var ctrl = this;

		debugger;
		ctrl.navigate = function (navRoute) {
            console.log(navRoute);
			debugger;
			console.log($location.url());
			$location.url(navRoute);
        };
	}]
});