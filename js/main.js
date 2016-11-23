var __APP_NAME__ = "SmartSeat";


(function(APP_NAME) {
	'use strict';
	var myApp = angular.module(
		APP_NAME,
		['ui.router', 'oc.lazyLoad', 'ngStorage'],
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
					return $q.reject(response);
				}
			};
		}]);
	}]);

})(__APP_NAME__);