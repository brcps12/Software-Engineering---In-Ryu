(function(APP_NAME) {
	
	'use strict';

	angular
		.module(APP_NAME)
		.controller('globalController', globalController);

	globalController.$inject = ['$rootScope', '$http', 'AppConfig', '$stateParams'];

	function globalController($rootScope, $http, AppConfig, $stateParams) {
		var rs = this;

		
	}

})(__APP_NAME__);