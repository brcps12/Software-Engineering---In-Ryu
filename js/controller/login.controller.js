(function(APP_NAME) {
	
	'use strict';

	angular
		.module(APP_NAME)
		.controller('loginController', loginController);

	loginController.$inject = ['$rootScope', '$http', 'AppConfig', '$stateParams', 'loginService'];

	function loginController($rootScope, $http, AppConfig, $stateParams, loginService) {
		let rs = this;

		rs.loginSubmit = loginSubmit;

		function loginSubmit() {
			return $http.post('/api/login', {
				username: rs.username,
				password: rs.password
			}).success(function(r) {
				if(r.request.result == 'success') {
					loginService.addUser(r.request.user);

					$rootScope.$broadcast('loginSuccess');
				} else {
					swal(
						'Error',
						r.request.msg,
						'error'
					)
				}
			})
		}
	}

})(__APP_NAME__);