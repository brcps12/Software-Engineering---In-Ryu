(function(APP_NAME) {

    'use strict';

    angular
        .module(APP_NAME)
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$locationProvider'];

    function stateConfig($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $locationProvider) {

        var templatePath = "/templates";
        var controllerPath = "/js/controller";

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: templatePath + '/main.tpl',
                controller: 'mainController as rs',
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load(controllerPath + "/main.controller.js");
                    }]
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: templatePath + '/login.tpl',
                controller: 'loginController as rs',
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load(controllerPath + "/login.controller.js");
                    }]
                }
            })
             .state('register', {
                url: '/register',
                templateUrl: templatePath + '/register.tpl',
                controller: 'registerController as rs',
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load(controllerPath + "/register.controller.js");
                    }]
                }
            })
             .state('seats', {
                url: '/seats',
                templateUrl: templatePath + '/seats.tpl',
                controller: 'seatsController as rs',
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load(controllerPath + "/seats.controller.js");
                    }]
                }
            })
             .state('seatsView', {
                url: '/seats/:roomId',
                templateUrl: templatePath + '/seats/view.tpl',
                controller: 'seatsViewController as rs',
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load(controllerPath + "/seats/view.controller.js");
                    }]
                }
            })
             .state('alarm', {
                url: '/alarm',
                templateUrl: templatePath + '/alarm.tpl',
                controller: 'alarmController as rs',
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load(controllerPath + "/alarm.controller.js");
                    }]
                },
                authorization: true
            })
    }

})(__APP_NAME__);
