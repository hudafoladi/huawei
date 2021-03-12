angular.module('datatable').component('datatable', {
    templateUrl: '/js/datatable/datatable.html',
    bindings: {
        //same as directive attribute scope
    },
    controller: ['$timeout', '$http', 'dataTableService', function ($timeout, $http, dataTableService) {
        var ctrl = this;
		ctrl.occupationList = [];
		ctrl.errorResponse = '';
		ctrl.successResponse= '';

		ctrl.formData = {
			firstName: '',
			lastName: '',
			occupation: '',
			gender: '',
			isActive: false
		}

		ctrl.datatable = [];

		function tables()
		{
			$('#dataTable').DataTable();
			
		}

		ctrl.tableHeader = 'DataTables Example';

		dataTableService.getDatatable().then(function(response){
			console.log('success', response);
			ctrl.datatable = response.data;

			$timeout(function(){
				tables();
			}, 0);
		},
		function(error){
			console.log('error', error);
			showError(error.data);


		});

		dataTableService.getOccupationList().then(function(response){
			console.log('success', response);
			ctrl.occupationList = response.data;
		},
		function(error){
			console.log('error', error);
			showError(error.data);

		});

		showSuccess = function(success)
		{
			ctrl.successResponse = success;
			$('#successToast').toast({animation: true, autohide: true, delay: 3000});
			$('#successToast').toast('show');
		}

		showError = function(error)
		{
			ctrl.errorResponse = error;
			$('#errorToast').toast({animation: true, autohide: true, delay: 3000});
			$('#errorToast').toast('show');
		}



		ctrl.saveForm = function(val){
			

			console.log(val)
			dataTableService.postFormData(val).then(function(response){
				console.log('success', response);
				showSuccess(response.data);
			},
			function(error){
				console.log('error', error);
				showError(error.data);

			});

		}

	}]
});