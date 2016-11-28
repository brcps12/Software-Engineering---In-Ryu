(function(APP_NAME) {
	
	'use strict';

	angular
	.module(APP_NAME)
	.controller('seatsController', seatsController);

	seatsController.$inject = ['$rootScope', '$http', 'AppConfig', '$stateParams', '$state', '$interval', '$scope'];

	function seatsController($rootScope, $http, AppConfig, $stateParams, $state, $interval, $scope) {
		let rs = this;

		rs.currentMoment = moment();

		rs.roomList = [];

		rs.go = toGo;

		loadRoomList();
		let repeat = $interval(loadRoomList, 60000);

		function loadRoomList() {
			return $http.post('/api/room/getList')
			.success(function(r) {
				if(r.request.result == 'success') {
					rs.roomList = r.request.list;

					for(let i = 0; i < rs.roomList; i++) {
						rs.roomList[i].total_seats = parseInt(rs.roomList[i].total_seats);
						rs.roomList[i].able_seats = parseInt(rs.roomList[i].able_seats);
					}
				}
			})
		}

		function toGo(rid) {
			$state.go('seatsView', {'roomId': rid});
		}

		$scope.$on("$destroy",function(){
			$interval.cancel(repeat);
		});
	}
})(__APP_NAME__);