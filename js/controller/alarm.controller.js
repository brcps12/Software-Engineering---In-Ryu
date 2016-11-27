(function(APP_NAME) {
	
	'use strict';

	angular
		.module(APP_NAME)
		.controller('alarmController', alarmController);

	alarmController.$inject = ['$rootScope', '$http', 'AppConfig', '$stateParams'];

	function alarmController($rootScope, $http, AppConfig, $stateParams) {
		var rs = this;
	}

})(__APP_NAME__);