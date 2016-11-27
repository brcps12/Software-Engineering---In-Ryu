(function(APP_NAME) {
	
	'use strict';

	angular
		.module(APP_NAME)
		.controller('seatsViewController', seatsViewController);

	seatsViewController.$inject = ['$rootScope', '$scope', '$compile', '$http', 'AppConfig', '$stateParams', '$templateRequest', '$sce', '$state'];

	function seatsViewController($rootScope, $scope, $compile, $http, AppConfig, $stateParams, $templateRequest, $sce, $state) {
		var rs = this;

		rs.roomId = $stateParams.roomId;
		var today = new Date();
		rs.year=today.getYear()+1900;
		rs.month=today.getMonth()+1;
		rs.day=today.getDate();
		rs.hour=ampm(today.getHours());
		rs.minute=addzero(today.getMinutes());
		rs.second=addzero(today.getSeconds());

		const templateUrl = $sce.getTrustedResourceUrl('/templates/seats/map/' + rs.roomId + '.tpl');

		$templateRequest(templateUrl)
			.then(function(r) {
	        	$compile(jQuery(".seat-map").html(r).contents())($scope);
			})
	}

	function addzero(i){
		if(i<10)
		{
			i="0"+i;
		}
		return i;
	}

	function ampm(i){
		if(i>=12)
		{
			i=i-12;
			i="오후 "+i;
		}
		else
		{
			i="오전 "+i;
		}
		return i;
	}
	
})(__APP_NAME__);