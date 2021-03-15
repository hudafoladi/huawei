var config = {
	dev:{
		googleApi: {
			clientId: '701327315815-iuoj4f11rfp4q30flpcsvvtfe2eja0jk.apps.googleusercontent.com',
			cookie_policy: 'single_host_origin'
		}
	},
	prod:{
		googleApi: {
			clientId: '',
			cookie_policy: 'single_host_origin'
		}
	}
};

angular.module('app').value('appConfig', config);