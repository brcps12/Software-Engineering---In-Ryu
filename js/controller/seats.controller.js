(function(APP_NAME) {
	
	'use strict';

	angular
		.module(APP_NAME)
		.controller('seatsController', seatsController);

	seatsController.$inject = ['$rootScope', '$http', 'AppConfig', '$stateParams'];

	function seatsController($rootScope, $http, AppConfig, $stateParams) {
		var rs = this;
	}

})(__APP_NAME__);