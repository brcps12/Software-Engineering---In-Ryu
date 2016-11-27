var __APP_NAME__ = "SmartSeat";


(function(APP_NAME, $) {
	'use strict';
	var myApp = angular.module(
		APP_NAME,
		['ui.router', 'oc.lazyLoad', 'ngStorage', 'ngAnimate'],
		function($httpProvider, $locationProvider) {
			$httpProvider.defaults.headers.post['Content-Type'] = 'application/json;charset=utf8';

			$locationProvider.html5Mode(true);
		}
	);

	// 상수 정의
	myApp.constant('AppConfig', {
		'ajaxUrl' : '.'
	})

	// 한글 입력 바로 되도록
	myApp.config(['$provide', function ($provide) {
		$provide.decorator('inputDirective', function($delegate, $log) {
			//$log.debug('Hijacking input directive');
			var directive = $delegate[0];
			angular.extend(directive.link, {
				post: function(scope, element, attr, ctrls) {
					element.on('compositionupdate', function (event) {
						//$log.debug('Composition update, faking end');
						element.triggerHandler('compositionend');
					})
				}
			});
			return $delegate;
		});
	}]);

	myApp.directive('ngEnter', function() {
		return function(scope, element, attrs) {
			element.bind("keydown keypress", function(event) {
				if(event.which === 13) {
					scope.$apply(function(){
						scope.$eval(attrs.ngEnter, {'event': event});
					});

					event.preventDefault();
				}
			});
		};
	});

	// 요청시 토큰 붙이기
	myApp.config(['$httpProvider', function($httpProvider) {

		$httpProvider.interceptors.push(['$q', '$localStorage', 'AppConfig' , function ($q, $localStorage, AppConfig) {
			return {
				'request': function (config) {
						config.url = AppConfig.ajaxUrl + config.url;
					return config;
				},
				'responseError': function (response) {
					swal(
						'Error',
						'서버 에러가 발생하였습니다',
						'error'
					)
					return $q.reject(response);
				}
			};
		}]);
	}]);

	myApp.factory('loginService', ['$localStorage', '$rootScope', function($localStorage, $rootScope) {
		return {
			isLogged: function() {
				return $localStorage.logged == true;
			},

			logout: function() {
				delete $localStorage.logged
				delete $localStorage.sid
				delete $localStorage.username
				delete $localStorage.sname
				delete $localStorage.auth

				$rootScope.$on("logout");
			},
			getUser: function() {
				return {
					sid: $localStorage.sid,
					username: $localStorage.username,
					sname: $localStorage.sname,
					auth: $localStorage.auth
				}
			},
			addUser: function(user) {
				$localStorage.logged = true;
				$localStorage.sid = user.sid;
				$localStorage.username = user.username;
				$localStorage.sname = user.sname;
				$localStorage.auth = user.auth;
			}
		}
	}]);

	myApp.run(['$rootScope', '$location', '$state', 'loginService', function($rootScope, $location, $state, loginService) {
		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
			$(window).scrollTop(0);

			if(toState.name == 'login' && loginService.isLogged()) {
				event.preventDefault();
				$state.go('main');
			}
			if(toState.authorization && !loginService.isLogged()) {
				event.preventDefault();
				$state.go('login');
			}
		})

		$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams, options) {
		});

		$rootScope.$on('loginSuccess', function() {
			$state.go('main');
		});

		$(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );
	}]);

})(__APP_NAME__, jQuery);