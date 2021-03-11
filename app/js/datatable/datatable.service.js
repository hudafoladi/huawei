angular.module('datatable').factory('dataTableService', ['$http', dataTableService]);

function dataTableService($http) {
  
	return {
		getDatatable: function () {
			return $http.get('/js/datatable/datatable.json');
		}
	};
}