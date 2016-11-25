(function(APP_NAME, $) {
	
	'use strict';

	angular
		.module(APP_NAME)
		.controller('globalController', globalController);

	globalController.$inject = ['$rootScope', '$http', 'AppConfig', '$stateParams'];

	function globalController($rootScope, $http, AppConfig, $stateParams) {
		var rs = this;


		$("#owl-demo").owlCarousel({

			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem:true,
			autoPlay: 3000

		});
		
	}

})(__APP_NAME__, jQuery);