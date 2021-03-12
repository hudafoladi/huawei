angular.module('datatable').factory('dataTableService', ['$http', dataTableService]);

function dataTableService($http) {
  
	return {
		getDatatable: function () {
			return $http.get('/js/datatable/datatable.json');
		},

		getOccupationList: function () {
			return $http.get('/js/datatable/occupation.json');
		},
		postFormData: function (data) {
			return $http.post('/testSaveFormData', data);
		}
	};
}