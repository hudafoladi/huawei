(function () {
    'use strict';

    // Collect the routes
    angular.module('app').constant('routes', getRoutes());

	// Configure the routes and route resolvers
	angular.module('app').config(['$routeProvider', '$locationProvider', 'routes', routeConfigurator]);

	function routeConfigurator($routeProvider, $locationProvider, routes) {
        $locationProvider.html5Mode(true);
        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }

	    // Define the routes 
		function getRoutes() {
			return [
				{
					url: '/',
					name: 'Dashboard',
					subRoutes: [],
					config: {
						template: '<dashboard></dashboard>',
						component: 'dashboard',
						title: 'Home',
						settings: {
							nav: 1,
							content: '<i class="fa fa-users"></i> People'
						}
					}
				},
				{
					url: '/datatable',
					name: 'datatable',
					subRoutes: [],
					config: {
						template: '<datatable></datatable>',
						component: 'datatable',
						settings: {
							nav: 1,
							content: '<i class="fa fa-users"></i> datatable'
						}
					}
				},
				{
					url: '/chartsdisplay',
					name: 'chartsdisplay',
					subRoutes: [],
					config: {
						template: '<chartsdisplay></chartsdisplay>',
						component: 'chartsdisplay',
						settings: {
							nav: 1,
							content: '<i class="fa fa-users"></i> chartsdisplay'
						}
					}
				},
				{
					url: '/blank',
					name: 'HomePage',
					subRoutes: [],
					config: {
						templateUrl: '/js/blank/blank.html',
						title: 'Home',
						settings: {
							nav: 1,
							content: '<i class="fa fa-users"></i> People'
						}
					}
				},
			]
		}
})();