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
		      "auth": 0
		    }
		  }
		}
 
	@apiUse ErrorMsg
 */