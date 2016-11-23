
(function(APP_NAME) {
	
	'use strict';

	angular
		.module(APP_NAME)
		.config(stateConfig);

    stateConfig.$inject = [ '$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$locationProvider' ];

    function stateConfig($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $locationProvider) {

    	var templatePath = "templates";
    	var controllerPath = "js/controller";

    	$urlRouterProvider.otherwise('/');

    	$stateProvider
    		.state('main', {
    			url: '/',
                templateUrl: templatePath + '/main.tpl',
                controller : 'mainController as rs',
                resolve: {
                    loadPlugin : ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load(controllerPath + "/main.controller.js");
                    }]
                },
                noLoading: true
    		})
    }
	
})(__APP_NAME__);