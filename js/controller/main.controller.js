(function(APP_NAME) {
	
	'use strict';

	angular
		.module(APP_NAME)
		.controller('mainController', mainController);

	mainController.$inject = ['$rootScope', '$http', 'AppConfig', '$stateParams', 'loginService'];

	function mainController($rootScope, $http, AppConfig, $stateParams, loginService) {
		let rs = this;

		rs.isLogged = loginService.isLogged;

		rs.logout = logout;

		rs.seatExtend = seatExtend;
		rs.seatReturn = seatReturn;

		rs.mySeat = false;

		initialize();

		function initialize() {
			if(rs.isLogged()) {
				return $http.post('/api/seat/mySeat')
				.success(function(r) {
					if(r.request.result == 'success') {
						rs.mySeat = r.request.info;
					}
				})
			}
		}

		function logout(event) {
			if(event)
				event.preventDefault();
			return $http.post('/api/logout')
			.success(function(r) {
				if(r.request.result == 'success') {
					loginService.logout();
					$rootScope.$broadcast('logoutSuccess');
				}
				else {
					swal(
						'Error',
						r.request.msg,
						'error'
					)
				}
			})
		}

		function seatExtend() {
			return $http.post('/api/seat/extend')
			.success(function(r) {
				if(r.request.result == 'success') {
					swal(
						'Success',
						"성공적으로 연장되었습니다",
						'success'
					)
				} else {
					swal(
						'Failed',
						r.request.msg,
						'error'
					)
				}
			})
		}

		function seatReturn() {
			return $http.post('/api/seat/seatReturn')
			.success(function(r) {
				if(r.request.result == 'success') {
					swal(
						'Success',
						"성공적으로 반납되었습니다",
						'success'
					)
				} else {
					swal(
						'Failed',
						r.request.msg,
						'error'
					)
				}
			})
		}

	}

})(__APP_NAME__);