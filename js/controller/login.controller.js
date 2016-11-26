(function(APP_NAME) {
	
	'use strict';

	angular
		.module(APP_NAME)
		.controller('loginController', loginController);

	loginController.$inject = ['$rootScope', '$http', 'AppConfig', '$stateParams'];

	function loginController($rootScope, $http, AppConfig, $stateParams) {
		var rs = this;

		rs.loginstatus=false;
	}

})(__APP_NAME__);