angular.module('testpage').component('testpage', {
    templateUrl: '/js/testpage/testpage.html',
    bindings: {
        //same as directive attribute scope
    },
    controller: ['$timeout', '$http', function ($timeout, $http) {
        var ctrl = this;
		

        ctrl.datepickerPopup = {
            opened: false,
            dateValue: '',
            dateOptions : {
                // dateDisabled: function (data) {
                //         var date = data.date,
                //         mode = data.mode;
                //         return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
                // },
                formatYear: 'yy',
                maxDate: new Date(2025, 5, 22),
                minDate: new Date(1990, 5, 22),
                startingDay: 1
            },
            open: function(){
                ctrl.datepickerPopup.opened = true; 
            }
        }

	}]
});