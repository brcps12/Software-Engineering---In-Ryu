(function(APP_NAME) {
	
	'use strict';

	angular
		.module(APP_NAME)
		.controller('seatsViewController', seatsViewController);

	seatsViewController.$inject = ['$rootScope', '$scope', '$compile', '$http', 'AppConfig', '$stateParams', '$templateRequest', '$sce', '$state'];

	function seatsViewController($rootScope, $scope, $compile, $http, AppConfig, $stateParams, $templateRequest, $sce, $state) {
		var rs = this;

		rs.roomId = $stateParams.roomId;
		rs.currentMoment = moment();

		const templateUrl = $sce.getTrustedResourceUrl('/templates/seats/map/' + rs.roomId + '.tpl');

		$templateRequest(templateUrl)
			.then(function(r) {
	        	$compile(jQuery(".seat-map").html(r).contents())($scope);
			})
	}

})(__APP_NAME__);