angular.module('datatable').component('datatable', {
    templateUrl: '/js/datatable/datatable.html',
    bindings: {
        //same as directive attribute scope
    },
    controller: ['$timeout', '$http', function ($timeout, $http) {
        var ctrl = this;
		function tables()
		{
			$('#dataTable').DataTable();
		}

		$timeout(function(){
			tables();
        }, 0);
	}]
});