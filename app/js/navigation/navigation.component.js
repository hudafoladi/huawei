angular.module('app').component('navigation', {
    templateUrl: '/js/navigation/navigation.html',
    bindings: {
        //same as directive attribute scope
    },
    controller: ['$timeout', '$http', '$location', '$route', 'routines', '$rootScope', function ($timeout, $http, $location, $route, routines, $rootScope) {
        var ctrl = this;
        ctrl.routines = routines;

        ctrl.currentRoute = $route.current;

		ctrl.navigate = function (navRoute) {
			$location.url(navRoute);
        };

        $rootScope.$on('$routeChangeStart', function (event, next, prev) {
            ctrl.currentRoute = next;
        });
	}]
});