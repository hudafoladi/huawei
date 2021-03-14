angular.module('layout').component('layout', {
    templateUrl: '/js/layout/layout.html',
    bindings: {
        //same as directive attribute scope
    },
    controller: ['$timeout', '$http', '$scope', function ($timeout, $http, $scope) {
        var ctrl = this;
        ctrl.isLoggedIn = false;
        ctrl.isLoading = true;

        ctrl.profile = {
            fullName: 'guest',
            email: 'noreply@email.com'
        }

        function checkGoogleisSignedIn(){
            debugger;
            if(gapi.auth2 == undefined || gapi.auth2.getAuthInstance() == null)
            {
                 //Initialize Auth2 with our clientId
                 gapi.load('auth2', function () {
                    var googleAuthObj =
                    gapi.auth2.init({
                        client_id: '701327315815-iuoj4f11rfp4q30flpcsvvtfe2eja0jk.apps.googleusercontent.com',
                        cookie_policy: 'single_host_origin'
                    });

                    

                    var currentuser = gapi.auth2.getAuthInstance();
                    
                    currentuser.then(function(authResult){
                        if(authResult.isSignedIn.get())
                        {
                            
                            $scope.$apply(function(){ 
                                ctrl.isLoading = false;
                                var profile = authResult.currentUser.get().getBasicProfile();
                                ctrl.profile = {
                                    fullName: profile.getName(),
                                    email: profile.getEmail() 
                                };
                                ctrl.isLoggedIn = true;
                            });
                           
                        }
                        else
                        {
                            $scope.$apply(function(){ 
                                ctrl.isLoading = false;
                            });
                        }
                        
                    });
                  
                });
            }
            else
            {
                var currentuser = gapi.auth2.getAuthInstance();
                
                if(currentuser.isSignedIn.get())
                {
                    ctrl.isLoggedIn = true;
                }
            }
        }

        
        $timeout(function(){
            checkGoogleisSignedIn();
        }, 0);

        $scope.$on('event:google-plus-signin-success', function (event,authResult) {
			// Send login to server or save into cookie
            
            var profile = authResult.getBasicProfile();
            ctrl.profile = {
                fullName: profile.getName(),
                email: profile.getEmail() 
            };

            $scope.$apply(function(){ 
                ctrl.isLoggedIn = true;
            });
		});

		$scope.$on('event:google-plus-signin-failure', function (event,authResult) {
			// Auth failure or signout detected
			//debugger;

		});


        ctrl.logout = function(){
            //$('#logoutModal').modal('dispose');
            var currentuser = gapi.auth2.getAuthInstance();
            currentuser.signOut();
            console.log('Signed out');

            $timeout(function(){
                $scope.$apply(function(){ 
                    ctrl.isLoggedIn = false;
                });
			}, 0);

            
        }

	}]
});