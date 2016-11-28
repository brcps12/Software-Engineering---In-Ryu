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
	@api {post} /api/login Register
	@apiVersion 0.1.0
	@apiName Register
	@apiGroup User

	@apiDescription 서버에 아이디와 이름, 비밀번호를 등록합니다.

 	@apiParam {String} username 5자리 이상 20자리 이하의 아이디(학번)
 	@apiParam {String} password 6자리 이상의 영소문자, 대문자, 숫자, 특수문자로 이루어진 비밀번호
 	@apiParam {String} name 	학생 이름

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
		    "result": "success",
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
	@api {post} /api/loginCheck LoginCheck
	@apiVersion 0.1.0
	@apiName LoginCheck
	@apiGroup User

	@apiDescription 로그인이 되어있는지 체크합니다.

	@apiSuccess {Object}	request 			요청에 대한 응답 Object
	@apiSuccess {String}	reqeust.result 		'success' 또는 'failed'
	@apiSuccess {String}	reqeust.msg 		'logged' 또는 'loggedOut'
	@apiSuccess {Object}	[reqeust.user] 		유저에 대한 정보
	@apiSuccess {Number}	reqeust.user.sid	User ID
	@apiSuccess {String}	reqeust.user.uesrname	Username (학번 혹은 아이디)
	@apiSuccess {String}	reqeust.user.sname	학생 이름
	@apiSuccess {Number}	reqeust.user.auth	권한 (0은 학생, 1은 관리자)

	@apiSuccessExample Success-Response:
		{
		  "request": {
		    "result": "success",
		    "msg": "logged",
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
	@apiSuccess {Number}	reqeust.cols	 		열람실의 가로 크기
	@apiSuccess {Number}	reqeust.rows	 		열람실의 세로 크기
	@apiSuccess {Object[]}	reqeust.info 			좌석들에 대한 정보를 담은 Object Array
	@apiSuccess {Number}	reqeust.info.sno 		좌석 번호
	@apiSuccess {Number}	reqeust.info.rid 		열람실 ID
	@apiSuccess {Number}	reqeust.info.available 	해당 좌석이 발급 가능한지 여부 (0: 발급 불가능, 1: 발급 가능)
	@apiSuccess {Number}	reqeust.info.col	 	해당 좌석의 위치 (x)
	@apiSuccess {Number}	reqeust.info.row	 	해당 좌석의 위치 (y)

	@apiSuccessExample Success-Response:
		{
		  "request": {
		    "result": "success",
		    "cols": "2",
		    "rows": "2",
		    "info": [
		      {
		        "sno": "1",
		        "rid": "1",
		        "available": "0",
		        "col": "1",
		        "row": "1"
		      },
		      {
		        "sno": "2",
		        "rid": "1",
		        "available": "0",
		        "col": "2",
		        "row": "1"
		      },
		      {
		        "sno": "3",
		        "rid": "1",
		        "available": "1",
		        "col": "1",
		        "row": "2"
		      }
		    ]
		  }
		}
 
	@apiUse ErrorMsg
 */

/**
	@api {post} /api/seat/mySeat Get My Seat Information
	@apiVersion 0.1.0
	@apiName My Seat Info
	@apiGroup Seat

	@apiDescription 현재 시간을 기준으로 발급된 좌석에 대한 정보를 가져옵니다.

	@apiSuccess {Object}	request 				요청에 대한 응답 Object
	@apiSuccess {String}	reqeust.result 			'success' 또는 'failed'
	@apiSuccess {Object}	reqeust.info 			좌석들에 대한 정보를 담은 Object, 좌석이 발급되지 않았다면 null
	@apiSuccess {Number}	reqeust.info.sno 		좌석 번호
	@apiSuccess {String}	reqeust.info.rname 		열람실의 이름
	@apiSuccess {String}	reqeust.info.end_time	해당 좌석의 발급 종료 시간

	@apiSuccessExample Success-Response:
		{
		  "request": {
		    "result": "success",
		    "info": {
		      "sno": "1",
		      "rname": "법학학술정보관 - 제1열람실 3층",
		      "end_time": "22시 25분"
		    }
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
	@api {post} /api/seat/reqSeatReturn Request Returns Issued Seat
	@apiVersion 0.1.0
	@apiName Request Seat Retuns
	@apiGroup Seat

	@apiDescription 현재 시간을 기준으로 타인이 발급한 좌석에 대해 반납 요청을 합니다.

 	@apiParam {Number} sno 좌석번호
 	@apiParam {Number} rid 열람실 ID

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

/**
	@api {post} /api/alarm/getList Get Alarm List
	@apiVersion 0.1.0
	@apiName Alarm List
	@apiGroup Alarm

	@apiDescription 현재 등록된 알람들을 가져옵니다.

	@apiSuccess {Object}	request 				요청에 대한 응답 Object
	@apiSuccess {String}	reqeust.result 			'success' 또는 'failed'
	@apiSuccess {Object[]}	reqeust.list 			알람에 대한 Object Array
	@apiSuccess {Number}	reqeust.list.alarm_id 	알람 ID
	@apiSuccess {String}	reqeust.list.title 		해당 알람의 제목
	@apiSuccess {String}	reqeust.list.content 	해당 알람의 내용
	@apiSuccess {String}	reqeust.list.type	 	알람의 타입, {reqRet: 반납 요청이 들어옴, retExd: 발급 종료 30분 이전일 때}
	@apiSuccess {Number}	reqeust.list.is_read	알람을 읽었는지의 여부
	@apiSuccess {Number}	reqeust.notReadCnt 		읽지 않은 알람의 개수

	@apiSuccessExample Success-Response:
		{
		  "request": {
		    "result": "success",
		    "list": [
		      {
		        "alarm_id": "1",
		        "title": "반납 요청",
		        "content": "반납요청이 들어왔습니다. 좌석을 사용하지 않으시다면 반납을 부탁드리겠습니다.",
		        "type": "reqRet",
		        "is_read": "0"
		      },
		      {
		        "alarm_id": "3",
		        "title": "반납/연장 알림",
		        "content": "발급받으신 좌석이 발급 종료 30분 이전입니다. 사용하지 않으시면 반납을, 계속 사용하고 계시면 연장을 해주세요.",
		        "type": "retExd",
		        "is_read": "0"
		      }
		    ],
		    "notReadCnt": "2"
		  }
		}
 
	@apiUse ErrorMsg
 */


/**
	@api {post} /api/room/getList Get Reading Room List
	@apiVersion 0.1.0
	@apiName Reading Room List
	@apiGroup Room

	@apiDescription 서버에 등록된 열람실의 리스트를 가져옵니다.

	@apiSuccess {Object}	request 					요청에 대한 응답 Object
	@apiSuccess {String}	reqeust.result 				'success' 또는 'failed'
	@apiSuccess {Object[]}	reqeust.list 				열람실에 대한 Object Array
	@apiSuccess {Number}	reqeust.list.rid			열람실 ID
	@apiSuccess {String}	reqeust.list.rname 			열람실 이름
	@apiSuccess {Number}	reqeust.list.total_seats	열람실의 총 좌석수
	@apiSuccess {Number}	reqeust.list.able_seats		열람실의 발급 가능한 좌석수

	@apiSuccessExample Success-Response:
		{
		  "request": {
		    "result": "success",
		    "list": [
		      {
		        "rid": "1",
		        "rname": "법학학술정보관 - 제1열람실 3층",
		        "total_seats": "31",
		        "able_seats": "30"
		      }
		    ]
		  }
		}
 
	@apiUse ErrorMsg
 */