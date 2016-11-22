(function(APP_NAME) {
	
	'use strict';

	angular
		.module(APP_NAME)
		.controller('mainController', mainController);

	mainController.$inject = ['$rootScope', '$http', 'AppConfig', '$stateParams'];

	function mainController($rootScope, $http, AppConfig, $stateParams) {
		var rs = this;
	}

})(__APP_NAME__);