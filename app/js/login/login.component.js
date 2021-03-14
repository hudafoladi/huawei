angular.module('login').component('login', {
    templateUrl: '/js/login/login.html',
    bindings: {
        //same as directive attribute scope
    },
    controller: ['$timeout', '$http', '$scope', function ($timeout, $http, $scope) {
        var ctrl = this;
		//ctrl.profileName = '';

		// var googleUser = {};
        // var startApp = function() {
        //   gapi.load('auth2', function(){
        //     // Retrieve the singleton for the GoogleAuth library and set up the client.
        //     auth2 = gapi.auth2.init({
        //       client_id: '701327315815-iuoj4f11rfp4q30flpcsvvtfe2eja0jk.apps.googleusercontent.com',
        //       cookiepolicy: 'single_host_origin',
        //       // Request scopes in addition to 'profile' and 'email'
        //       //scope: 'additional_scope'
        //     });
        //     attachSignin(document.getElementById('customGoogleSignin'));
        //   });
        // };
      
        // function attachSignin(element) {
        //   console.log(element.id);
        //   auth2.attachClickHandler(element, {},
        //       function(googleUser) {
		// 		var profileName = googleUser.getBasicProfile().getName();
        //         console.log("Signed in: " + profileName);
		// 		ctrl.profileName = 'profileName: ' + profileName;
        //       }, function(error) {
        //         alert(JSON.stringify(error, undefined, 2));
        //       });
        // }

        // startApp();


		// $scope.$on('event:google-plus-signin-success', function (event,authResult) {
		// 	// Send login to server or save into cookie
		// 	debugger;
		// });
		// $scope.$on('event:google-plus-signin-failure', function (event,authResult) {
		// 	// Auth failure or signout detected
		// 	debugger;

		// });

		// var googleUser = {};
        // ctrl.startApp = function() {
        //   gapi.load('auth2', function(){
        //     // Retrieve the singleton for the GoogleAuth library and set up the client.
        //     auth2 = gapi.auth2.init({
        //       client_id: '701327315815-iuoj4f11rfp4q30flpcsvvtfe2eja0jk.apps.googleusercontent.com',
        //       cookiepolicy: 'single_host_origin',
        //       // Request scopes in addition to 'profile' and 'email'
        //       //scope: 'additional_scope'
        //     });
        //     ctrl.attachSignin(document.getElementById('customGoogleSignin'));
        //   });
        // };
    
		// var test= 'testscope';
		// ctrl.googleSigninSuccess = function(googleUser, ctrl) {
		// 	debugger;
		// 	var profileName = googleUser.getBasicProfile().getName();
		// 	console.log("Signed in: " + profileName);
		// 	ctrl.profileName = 'profileName: ' + profileName;
		// }
		// ctrl.googleSigninFailure = function(error) {
		// 	alert(JSON.stringify(error, undefined, 2));
		// }

        // ctrl.attachSignin = function(element) {
		// 	//debugger;
        //   console.log(element.id);
        //   auth2.attachClickHandler(element, {}, ctrl.googleSigninSuccess, ctrl.googleSigninFailure);
        // }

        // //ctrl.startApp();


		// function onSignIn(googleUser)
		// {
		// 	var profile = googleUser.getBasicProfile();
		// 	console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
		// 	console.log('Name: ' + profile.getName());
		// 	console.log('Image URL: ' + profile.getImageUrl());
		// 	console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
		// }
		// window.onSignIn = onSignIn;

		
	}]
});