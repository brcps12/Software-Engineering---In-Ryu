(function(APP_NAME) {
	
	'use strict';

	angular
		.module(APP_NAME)
		.controller('alarmController', alarmController);

	alarmController.$inject = ['$rootScope', '$http', 'AppConfig', '$stateParams'];

	function alarmController($rootScope, $http, AppConfig, $stateParams) {
		let rs = this;

		rs.alarmList = [];

		loadAlarmList();

		function loadAlarmList() {
			return $http.post('/api/alarm/getList')

			.success(function(r) {
				if(r.request.result == 'success') {
					rs.alarmList = r.request.list;
				} else {
					swal('Failed', r.request.msg, 'error');
				}
			})
		}
	}

})(__APP_NAME__);