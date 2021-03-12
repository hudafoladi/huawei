(function () {
    'use strict';

    angular.module('app', [
        'ngAnimate',
        'ngRoute',          // routing
        'ngSanitize',       // sanitizes html bindings (ex: sidebar.js)

        //'app.templateCache',

        // Custom modules 
                   // common functions, logger, spinner
        //'common.bootstrap', // bootstrap dialog wrapper functions

        // 3rd Party Modules
        //'ui.bootstrap',    // ui-bootstrap (ex: carousel, pagination, dialog)
        //'infinite-scroll',
        //'ngJqxsettings',
        // 'breeze.angular',
        // 'breeze.directives',
        //'angulartics',
        //'angulartics.google.analytics',   
        //'rx',
        //'ngStorage',

       
        
        //App Directives
        //'app.directives',
        
        //App Filters
        //'app.filters',
        
        //Custom Modules
        'dashboard',
        'chartsdisplay',
		'datatable'

    ]);
})();