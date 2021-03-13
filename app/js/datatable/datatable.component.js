angular.module('datatable').component('datatable', {
    templateUrl: '/js/datatable/datatable.html',
    bindings: {
        //same as directive attribute scope
    },
    controller: ['$timeout', '$http', 'dataTableService', function ($timeout, $http, dataTableService) {
        var ctrl = this;

		ctrl.datatable = [];

		function tables()
		{
			$('#dataTable').DataTable();
		}

		ctrl.tableHeader = 'DataTables Example';

		dataTableService.getDatatable().then(function(response){
			debugger;
			console.log('success', response);
			ctrl.datatable = response.data;

			$timeout(function(){
				tables();
			}, 0);
		},
		function(error){
			console.log('error', error);
		});

	}]
});