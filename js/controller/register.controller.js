(function(APP_NAME) {
	
	'use strict';

	angular
		.module(APP_NAME)
		.controller('registerController', registerController);

	registerController.$inject = ['$rootScope', '$http', 'AppConfig', '$stateParams'];

	function registerController($rootScope, $http, AppConfig, $stateParams) {
		var rs = this;

		rs.message = [
			'1번고객',
			'2번고객',
			'3번고객',
			'4번고객',
		];

		rs.test = false;
		rs.test2 = true;
	}

})(__APP_NAME__);