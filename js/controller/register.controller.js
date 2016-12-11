(function(APP_NAME) {
	
	'use strict';

	angular
		.module(APP_NAME)
		.controller('registerController', registerController);

	registerController.$inject = ['$rootScope', '$http', 'AppConfig', '$stateParams'];

	function registerController($rootScope, $http, AppConfig, $stateParams) {
		var rs = this;

		rs.register = register;

		function register() {
			if(rs.password != rs.password2) {
				swal(
					'Error',
					'패스워드가 서로 일치하지 않습니다.',
					'error'
				)
				return null;
			}

			return $http.post('/api/register', {
				name: rs.name,
				username: rs.username,
				password: rs.password
			}).success(function(r) {
				if(r.request.result == 'success') {
					swal(
						'Success',
						'가입 되었습니다.',
						'success'
					);

					history.back();
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