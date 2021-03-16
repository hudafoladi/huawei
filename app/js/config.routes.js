(function () {
    'use strict';

    // Collect the routes
    angular.module('app').constant('routines', getRoutes());

	// Configure the routes and route resolvers
	angular.module('app').config(['$routeProvider', '$locationProvider', 'routines', routeConfigurator]);

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
							content: '<i class="fas fa-fw fa-tachometer-alt"></i> <span>Dashboard</span></a>',
							divider: true
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
						title: 'DataTable',
						settings: {
							nav: 1,
							content: '<i class="fas fa-fw fa-table"></i><span>Tables</span>'
						}
					}
				},
				{
					url: '/test',
					name: 'testPage',
					subRoutes: [],
					config: {
						template: '<testpage></testpage>',
						component: 'testpage',
						title: 'TestPage',
						settings: {
							nav: 1,
							content: '<i class="fas fa-fw fa-chart-area"></i> <span>test</span></a>',
							divider: true,
							header: 'Testing Components'
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
						title: 'Charts',
						settings: {
							nav: 1,
							content: '<i class="fas fa-fw fa-chart-area"></i> <span>Charts</span></a>'
						}
					}
				}
			]
		}
})();