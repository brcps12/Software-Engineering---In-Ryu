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

		/*
		const templateUrl = $sce.getTrustedResourceUrl('/templates/seats/map/' + rs.roomId + '.tpl');
		*/
		rs.loopRange = $rootScope.loopRange;

		rs.roomInfo = {
			rows: 0,
			cols: 0
		}


		/*
		$templateRequest(templateUrl)
			.then(function(r) {
				$compile(jQuery(".seat-map").html(r).contents())($scope);
			})
		*/

		rs.seatInfo = {};

		rs.resv = resv;

		loadSeatInfo();

		function loadSeatInfo() {
			return $http.post('/api/seat/info', {
				rid: rs.roomId
			}).success(function(r) {
				if(r.request.result == 'success') {
					const info = r.request.info;

					rs.roomInfo.rows = r.request.rows;
					rs.roomInfo.cols = r.request.cols;

					for(let i = 0; i < info.length; i++) {
						const seat = info[i];
						if(!rs.seatInfo.hasOwnProperty(seat.row)) {
							rs.seatInfo[seat.row] = {};
						}

						rs.seatInfo[seat.row][seat.col] = seat;
					}
				} else {
					swal('Failed', r.request.msg, 'error');
				}
			})
		}

		function resv(event, seat) {
			console.log(event);
			if(rs.onDrawMotion)
				return;

			if(seat.available == 1) {
				let $tmpPromise;

				swal({
					title: '발급 받으겠습니까?',
					text: "발급받으시려면 계속 진행해주세요.",
					type: 'info',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: '발급받기',
					cancelButtonText: '취소',
					showLoaderOnConfirm: true,
					preConfirm: function (email) {
						return $tmpPromise = $http.post('/api/seat/issue', {
							rid: seat.rid,
							sno: seat.sno
						})
					}
				}).then(function (r) {
					if(r.data.request.result == 'success') {
						swal(
							'Success',
							"성공적으로 발급되었습니다",
							'success'
						)
						$scope.$apply(function() {
							seat.available = 0;
						});
					} else {
						swal(
							'Failed',
							r.data.request.msg,
							'error'
						)
					}
				}, function(dismiss) {
					if (dismiss === 'cancel') { // you might also handle 'close' or 'timer' if you used those
						// ignore
					} else {
						throw dismiss;
					}
				})
				return $tmpPromise;
			} else {
				let $tmpPromise;

				swal({
					title: '반납 요청 하시겠습니까?',
					text: "반납 요청을 하시려면 계속 진행해주세요.",
					type: 'info',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: '반납요청',
					cancelButtonText: '취소',
					showLoaderOnConfirm: true,
					preConfirm: function (email) {
						return $tmpPromise = $http.post('/api/seat/reqSeatReturn', {
							rid: seat.rid,
							sno: seat.sno
						})
					}
				}).then(function (r) {
					if(r.data.request.result == 'success') {
						swal(
							'Success',
							"성공적으로 요청되었습니다",
							'success'
						)
						$scope.$apply(function() {
							seat.available = 0;
						});
					} else {
						swal(
							'Failed',
							r.data.request.msg,
							'error'
						)
					}
				}, function(dismiss) {
					if (dismiss === 'cancel') { // you might also handle 'close' or 'timer' if you used those
						// ignore
					} else {
						throw dismiss;
					}
				})
				return $tmpPromise;
			}
		}

		const overlapWindow = jQuery(".overlap-window")

		const overlap = jQuery(".overlap")
		const container = jQuery(".seat-map-container")
		const map = jQuery(".seat-map")

		calcWindowSize()

		function calcWindowSize() {
				let containerSize = {
				width: container.innerWidth(),
				height: container.innerHeight(),
			}

			let mapSize = {
				width: map.outerWidth(),
				height: map.outerHeight(),
			}

			let overlapSize = {
				width: overlap.innerWidth(),
				height: overlap.innerHeight(),
			}

			const width = Math.min(overlapSize.width, containerSize.width * overlapSize.width / mapSize.width)
			const height = Math.min(overlapSize.height, containerSize.height * overlapSize.height / mapSize.height)

			overlapWindow.css("width", width + "px");
			overlapWindow.css("height", height + "px");
		}

		jQuery(".seat-map").draggable({
			revertDuration: 100,
			start: function(event, ui) {
				calcWindowSize();
				rs.onDrawMotion = true;
			},
			stop: function(event, ui) {
				rs.onDrawMotion = false;
			},
			revert : function(event, ui) {
				// on older version of jQuery use "draggable"
				// $(this).data("draggable")
				// on 2.x versions of jQuery use "ui-draggable"
				// $(this).data("ui-draggable")

				let containerSize = {
					width: container.innerWidth(),
					height: container.innerHeight(),
				}

				let mapSize = {
					width: map.outerWidth(),
					height: map.outerHeight(),
				}

				let overlapSize = {
					width: overlap.innerWidth(),
					height: overlap.innerHeight(),
				}

				const thisObj = $(this).data("uiDraggable");
				const top = thisObj.position.top;
				const left = thisObj.position.left;

				const maxTop = 0;
				const maxLeft = 0;
				const minTop = containerSize.height - mapSize.height;
				const minLeft = containerSize.width - mapSize.width;

				if(top > maxTop || left > maxLeft || top < minTop || left < minLeft) {
					const reTop =  Math.min(maxTop, Math.max(top, minTop));
					const reLeft = Math.min(maxLeft, Math.max(left, minLeft));
					thisObj.originalPosition = {
						top : reTop,
						left : reLeft
					};

					overlapWindow.css("top", -(reTop * overlapSize.width / mapSize.width) + "px");
					overlapWindow.css("left", -(reLeft * overlapSize.height / mapSize.height) + "px");

					return true;
				} else {
					return false;
				}
			},

			drag: function(event, ui) {
				let mapSize = {
					width: map.outerWidth(),
					height: map.outerHeight(),
				}

				let overlapSize = {
					width: overlap.innerWidth(),
					height: overlap.innerHeight(),
				}

				overlapWindow.css("top", -(ui.position.top * overlapSize.width / mapSize.width) + "px");
				overlapWindow.css("left", -(ui.position.left * overlapSize.height / mapSize.height) + "px");
			}
		})
	}

})(__APP_NAME__);