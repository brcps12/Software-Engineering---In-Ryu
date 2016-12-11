(function(APP_NAME) {
	
	'use strict';

	angular
		.module(APP_NAME)
		.controller('mainController', mainController);

	mainController.$inject = ['$rootScope', '$http', 'AppConfig', '$stateParams', 'loginService', '$scope', '$q'];

	function mainController($rootScope, $http, AppConfig, $stateParams, loginService, $scope, $q) {
		let rs = this;

		rs.isLogged = loginService.isLogged;

		rs.logout = logout;

		rs.seatExtend = seatExtend;
		rs.seatReturn = seatReturn;

		rs.mySeat = false;
		rs.alarmCnt = 0;

		initialize();

		function initialize() {
			if(rs.isLogged()) {
				return $q.all([
					$http.post('/api/seat/mySeat')
					.success(function(r) {
						if(r.request.result == 'success') {
							rs.mySeat = r.request.info;
						}
					}), 
					loadAlarmList()
				]);
			}
		}

		function logout(event) {
			if(event)
				event.preventDefault();
			return $http.post('/api/logout')
			.success(function(r) {
				if(r.request.result == 'success') {
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
					initialize();
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
			let $tmpPromise;

			swal({
				title: '반납 하시겠습니까?',
				text: "다시 예약하시려면 좌석 정보를 확인 후 이용해주세요.",
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: '반납',
				cancelButtonText: '취소',
				showLoaderOnConfirm: true,
				preConfirm: function (email) {
					return $tmpPromise = $http.post('/api/seat/seatReturn')
				}
			}).then(function (r) {
				swal(
					'Success',
					"성공적으로 반납되었습니다",
					'success'
				)
				$scope.$apply(function() {
					rs.mySeat = false;
				});
			}, function(dismiss) {
				if (dismiss === 'cancel') { // you might also handle 'close' or 'timer' if you used those
					// ignore
				} else {
					throw dismiss;
				}
			})
			return $tmpPromise;
		}

		function loadAlarmList() {
			return $http.post('/api/alarm/getList', {
				type: 'main'
			})

			.success(function(r) {
				if(r.request.result == 'success') {
					rs.alarmCnt = r.request.notReadCnt;
				}
			})
		}

	}

})(__APP_NAME__);