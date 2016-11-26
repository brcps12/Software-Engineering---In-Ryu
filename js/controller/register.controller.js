(function(APP_NAME) {
	
	'use strict';

	angular
		.module(APP_NAME)
		.controller('registerController', registerController);

	registerController.$inject = ['$rootScope', '$http', 'AppConfig', '$stateParams'];

	function registerController($rootScope, $http, AppConfig, $stateParams) {
		var rs = this;
	}

})(__APP_NAME__);