/**
	@apiDefine ErrorMsg

	@apiError ServerError 에러메시지가 반환된다.

	@apiErrorExample Error-Response:
		{
 		  "request": {
  		    "result": "failed",
 		    "msg": "Specific Error Message"
 		  }
 		}
 */

/**
	@api {post} /api/currentTime Get Current Time
	@apiVersion 0.1.0
	@apiName currentTime
	@apiGroup Server

	@apiDescription 현재 시간을 마이크로초 단위로 가져옵니다.

	@apiSuccess {Object}	request 		요청에 대한 응답 Object
	@apiSuccess {String}	reqeust.result 	'success' 또는 'failed'
	@apiSuccess {Number}	reqeust.time 	현재 시간을 마이크로초 단위로 반환된다.

	@apiSuccessExample Success-Response:
		{
		  "request": {
		    "result": "success",
		    "time": 1479876442000
		  }
		}

	@apiUse ErrorMsg
 */

/**
	@api {post} /api/login Login
	@apiVersion 0.1.0
	@apiName Login
	@apiGroup User

	@apiDescription Username과 Password로 서버에 로그인을 시도합니다.

 	@apiParam {String} username 학번 혹은 유저 아이디
 	@apiParam {String} password 비밀번호

	@apiSuccess {Object}	request 			요청에 대한 응답 Object
	@apiSuccess {String}	reqeust.result 		'success' 또는 'failed'
	@apiSuccess {Object}	reqeust.user 		유저에 대한 정보
	@apiSuccess {Number}	reqeust.user.sid	User ID
	@apiSuccess {String}	reqeust.user.uesrname	Username (학번 혹은 아이디)
	@apiSuccess {String}	reqeust.user.sname	학생 이름
	@apiSuccess {Number}	reqeust.user.auth	권한 (0은 학생, 1은 관리자)

	@apiSuccessExample Success-Response:
		{
		  "request": {
		    "result": "success"
		    "user": {
		      "sid": "1",
		      "username": "2014001234",
		      "sname": "홍길동",
		      "auth": "0"
		    }
		  }
		}
 
	@apiUse ErrorMsg
 */

/**
	@api {post} /api/logout Logout
	@apiVersion 0.1.0
	@apiName Logout
	@apiGroup User

	@apiDescription 로그아웃을 합니다.

	@apiSuccess {Object}	request 			요청에 대한 응답 Object
	@apiSuccess {String}	reqeust.result 		'success' 또는 'failed'

	@apiSuccessExample Success-Response:
		{
		  "request": {
		    "result": "success"
		  }
		}
 
	@apiUse ErrorMsg
 */

/**
	@api {post} /api/seat/issue Seat Issue
	@apiVersion 0.1.0
	@apiName Seat Issue
	@apiGroup Seat

	@apiDescription 좌석번호와 열람실 ID로 현재 시각으로 좌석을 발급받습니다.

 	@apiParam {Number} sno 좌석번호
 	@apiParam {Number} rid 열람실 ID

	@apiSuccess {Object}	request 			요청에 대한 응답 Object
	@apiSuccess {String}	reqeust.result 		'success' 또는 'failed'

	@apiSuccessExample Success-Response:
		{
		  "request": {
		    "result": "success"
		  }
		}
 
	@apiUse ErrorMsg
 */

/**
	@api {post} /api/seat/info Get Seat Information
	@apiVersion 0.1.0
	@apiName Seat Info
	@apiGroup Seat

	@apiDescription 현재 시간을 기준으로 좌석의 사용 가능 여부를 가져옵니다.

 	@apiParam {Number} rid 열람실 ID

	@apiSuccess {Object}	request 				요청에 대한 응답 Object
	@apiSuccess {String}	reqeust.result 			'success' 또는 'failed'
	@apiSuccess {Object[]}	reqeust.info 			좌석들에 대한 정보를 담은 Object Array
	@apiSuccess {Number}	reqeust.info.sno 		좌석 번호
	@apiSuccess {Number}	reqeust.info.rid 		열람실 ID
	@apiSuccess {Number}	reqeust.info.available 	해당 좌석이 발급 가능한지 여부 (0: 발급 불가능, 1: 발급 가능)

	@apiSuccessExample Success-Response:
		{
		  "request": {
		    "result": "success",
		    "info": [
		      {
		        "sno": "1",
		        "rid": "1",
		        "available": "0"
		      },
		      {
		        "sno": "2",
		        "rid": "1",
		        "available": "0"
		      },
		      {
		        "sno": "3",
		        "rid": "1",
		        "available": "1"
		      }
		    ]
		  }
		}
 
	@apiUse ErrorMsg
 */

/**
	@api {post} /api/seat/seatReturn Returns Issued Seat
	@apiVersion 0.1.0
	@apiName Seat Retuns
	@apiGroup Seat

	@apiDescription 현재 시간을 기준으로 발급된 좌석을 반납합니다.

	@apiSuccess {Object}	request 				요청에 대한 응답 Object
	@apiSuccess {String}	reqeust.result 			'success' 또는 'failed'

	@apiSuccessExample Success-Response:
		{
		  "request": {
		    "result": "success"
		  }
		}
 
	@apiUse ErrorMsg
 */

/**
	@api {post} /api/seat/extend Extends Issued Seat
	@apiVersion 0.1.0
	@apiName Seat Extends
	@apiGroup Seat

	@apiDescription 발급된 좌석을 연장합니다. 좌석은 연장 종료 30분 미만일 때 가능합니다.

	@apiSuccess {Object}	request 				요청에 대한 응답 Object
	@apiSuccess {String}	reqeust.result 			'success' 또는 'failed'

	@apiSuccessExample Success-Response:
		{
		  "request": {
		    "result": "success"
		  }
		}
 
	@apiUse ErrorMsg
 */