define({ "api": [
  {
    "type": "post",
    "url": "/api/alarm/getList",
    "title": "Get Alarm List",
    "version": "0.1.0",
    "name": "Alarm_List",
    "group": "Alarm",
    "description": "<p>현재 등록된 알람들을 가져옵니다.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>요청에 대한 응답 Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reqeust.result",
            "description": "<p>'success' 또는 'failed'</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "reqeust.list",
            "description": "<p>알람에 대한 Object Array</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reqeust.list.alarm_id",
            "description": "<p>알람 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reqeust.list.title",
            "description": "<p>해당 알람의 제목</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reqeust.list.content",
            "description": "<p>해당 알람의 내용</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reqeust.list.type",
            "description": "<p>알람의 타입, {reqRet: 반납 요청이 들어옴, retExd: 발급 종료 30분 이전일 때}</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reqeust.list.is_read",
            "description": "<p>알람을 읽었는지의 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reqeust.notReadCnt",
            "description": "<p>읽지 않은 알람의 개수</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"request\": {\n    \"result\": \"success\",\n    \"list\": [\n      {\n        \"alarm_id\": \"1\",\n        \"title\": \"반납 요청\",\n        \"content\": \"반납요청이 들어왔습니다. 좌석을 사용하지 않으시다면 반납을 부탁드리겠습니다.\",\n        \"type\": \"reqRet\",\n        \"is_read\": \"0\"\n      },\n      {\n        \"alarm_id\": \"3\",\n        \"title\": \"반납/연장 알림\",\n        \"content\": \"발급받으신 좌석이 발급 종료 30분 이전입니다. 사용하지 않으시면 반납을, 계속 사용하고 계시면 연장을 해주세요.\",\n        \"type\": \"retExd\",\n        \"is_read\": \"0\"\n      }\n    ],\n    \"notReadCnt\": \"2\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/example.js",
    "groupTitle": "Alarm",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>에러메시지가 반환된다.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\t\t{\n \t\t  \"request\": {\n  \t\t    \"result\": \"failed\",\n \t\t    \"msg\": \"Specific Error Message\"\n \t\t  }\n \t\t}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/room/getList",
    "title": "Get Reading Room List",
    "version": "0.1.0",
    "name": "Reading_Room_List",
    "group": "Room",
    "description": "<p>서버에 등록된 열람실의 리스트를 가져옵니다.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>요청에 대한 응답 Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reqeust.result",
            "description": "<p>'success' 또는 'failed'</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "reqeust.list",
            "description": "<p>열람실에 대한 Object Array</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reqeust.list.rid",
            "description": "<p>열람실 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reqeust.list.rname",
            "description": "<p>열람실 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reqeust.list.total_seats",
            "description": "<p>열람실의 총 좌석수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reqeust.list.able_seats",
            "description": "<p>열람실의 발급 가능한 좌석수</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"request\": {\n    \"result\": \"success\",\n    \"list\": [\n      {\n        \"rid\": \"1\",\n        \"rname\": \"법학학술정보관 - 제1열람실 3층\",\n        \"total_seats\": \"31\",\n        \"able_seats\": \"30\"\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/example.js",
    "groupTitle": "Room",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>에러메시지가 반환된다.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\t\t{\n \t\t  \"request\": {\n  \t\t    \"result\": \"failed\",\n \t\t    \"msg\": \"Specific Error Message\"\n \t\t  }\n \t\t}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/seat/mySeat",
    "title": "Get My Seat Information",
    "version": "0.1.0",
    "name": "My_Seat_Info",
    "group": "Seat",
    "description": "<p>현재 시간을 기준으로 발급된 좌석에 대한 정보를 가져옵니다.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>요청에 대한 응답 Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reqeust.result",
            "description": "<p>'success' 또는 'failed'</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reqeust.info",
            "description": "<p>좌석들에 대한 정보를 담은 Object, 좌석이 발급되지 않았다면 null</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reqeust.info.sno",
            "description": "<p>좌석 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reqeust.info.rname",
            "description": "<p>열람실의 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reqeust.info.end_time",
            "description": "<p>해당 좌석의 발급 종료 시간</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"request\": {\n    \"result\": \"success\",\n    \"info\": {\n      \"sno\": \"1\",\n      \"rname\": \"법학학술정보관 - 제1열람실 3층\",\n      \"end_time\": \"22시 25분\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/example.js",
    "groupTitle": "Seat",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>에러메시지가 반환된다.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\t\t{\n \t\t  \"request\": {\n  \t\t    \"result\": \"failed\",\n \t\t    \"msg\": \"Specific Error Message\"\n \t\t  }\n \t\t}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/seat/reqSeatReturn",
    "title": "Request Returns Issued Seat",
    "version": "0.1.0",
    "name": "Request_Seat_Retuns",
    "group": "Seat",
    "description": "<p>현재 시간을 기준으로 타인이 발급한 좌석에 대해 반납 요청을 합니다.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sno",
            "description": "<p>좌석번호</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rid",
            "description": "<p>열람실 ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>요청에 대한 응답 Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reqeust.result",
            "description": "<p>'success' 또는 'failed'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"request\": {\n    \"result\": \"success\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/example.js",
    "groupTitle": "Seat",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>에러메시지가 반환된다.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\t\t{\n \t\t  \"request\": {\n  \t\t    \"result\": \"failed\",\n \t\t    \"msg\": \"Specific Error Message\"\n \t\t  }\n \t\t}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/seat/extend",
    "title": "Extends Issued Seat",
    "version": "0.1.0",
    "name": "Seat_Extends",
    "group": "Seat",
    "description": "<p>발급된 좌석을 연장합니다. 좌석은 연장 종료 30분 미만일 때 가능합니다.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>요청에 대한 응답 Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reqeust.result",
            "description": "<p>'success' 또는 'failed'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"request\": {\n    \"result\": \"success\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/example.js",
    "groupTitle": "Seat",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>에러메시지가 반환된다.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\t\t{\n \t\t  \"request\": {\n  \t\t    \"result\": \"failed\",\n \t\t    \"msg\": \"Specific Error Message\"\n \t\t  }\n \t\t}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/seat/info",
    "title": "Get Seat Information",
    "version": "0.1.0",
    "name": "Seat_Info",
    "group": "Seat",
    "description": "<p>현재 시간을 기준으로 좌석의 사용 가능 여부를 가져옵니다.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rid",
            "description": "<p>열람실 ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>요청에 대한 응답 Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reqeust.result",
            "description": "<p>'success' 또는 'failed'</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reqeust.cols",
            "description": "<p>열람실의 가로 크기</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reqeust.rows",
            "description": "<p>열람실의 세로 크기</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "reqeust.info",
            "description": "<p>좌석들에 대한 정보를 담은 Object Array</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reqeust.info.sno",
            "description": "<p>좌석 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reqeust.info.rid",
            "description": "<p>열람실 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reqeust.info.available",
            "description": "<p>해당 좌석이 발급 가능한지 여부 (0: 발급 불가능, 1: 발급 가능)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reqeust.info.col",
            "description": "<p>해당 좌석의 위치 (x)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reqeust.info.row",
            "description": "<p>해당 좌석의 위치 (y)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"request\": {\n    \"result\": \"success\",\n    \"cols\": \"2\",\n    \"rows\": \"2\",\n    \"info\": [\n      {\n        \"sno\": \"1\",\n        \"rid\": \"1\",\n        \"available\": \"0\",\n        \"col\": \"1\",\n        \"row\": \"1\"\n      },\n      {\n        \"sno\": \"2\",\n        \"rid\": \"1\",\n        \"available\": \"0\",\n        \"col\": \"2\",\n        \"row\": \"1\"\n      },\n      {\n        \"sno\": \"3\",\n        \"rid\": \"1\",\n        \"available\": \"1\",\n        \"col\": \"1\",\n        \"row\": \"2\"\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/example.js",
    "groupTitle": "Seat",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>에러메시지가 반환된다.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\t\t{\n \t\t  \"request\": {\n  \t\t    \"result\": \"failed\",\n \t\t    \"msg\": \"Specific Error Message\"\n \t\t  }\n \t\t}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/seat/issue",
    "title": "Seat Issue",
    "version": "0.1.0",
    "name": "Seat_Issue",
    "group": "Seat",
    "description": "<p>좌석번호와 열람실 ID로 현재 시각으로 좌석을 발급받습니다.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sno",
            "description": "<p>좌석번호</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rid",
            "description": "<p>열람실 ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>요청에 대한 응답 Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reqeust.result",
            "description": "<p>'success' 또는 'failed'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"request\": {\n    \"result\": \"success\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/example.js",
    "groupTitle": "Seat",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>에러메시지가 반환된다.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\t\t{\n \t\t  \"request\": {\n  \t\t    \"result\": \"failed\",\n \t\t    \"msg\": \"Specific Error Message\"\n \t\t  }\n \t\t}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/seat/seatReturn",
    "title": "Returns Issued Seat",
    "version": "0.1.0",
    "name": "Seat_Retuns",
    "group": "Seat",
    "description": "<p>현재 시간을 기준으로 발급된 좌석을 반납합니다.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>요청에 대한 응답 Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reqeust.result",
            "description": "<p>'success' 또는 'failed'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"request\": {\n    \"result\": \"success\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/example.js",
    "groupTitle": "Seat",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>에러메시지가 반환된다.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\t\t{\n \t\t  \"request\": {\n  \t\t    \"result\": \"failed\",\n \t\t    \"msg\": \"Specific Error Message\"\n \t\t  }\n \t\t}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/currentTime",
    "title": "Get Current Time",
    "version": "0.1.0",
    "name": "currentTime",
    "group": "Server",
    "description": "<p>현재 시간을 마이크로초 단위로 가져옵니다.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>요청에 대한 응답 Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reqeust.result",
            "description": "<p>'success' 또는 'failed'</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reqeust.time",
            "description": "<p>현재 시간을 마이크로초 단위로 반환된다.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"request\": {\n    \"result\": \"success\",\n    \"time\": 1479876442000\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/example.js",
    "groupTitle": "Server",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>에러메시지가 반환된다.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\t\t{\n \t\t  \"request\": {\n  \t\t    \"result\": \"failed\",\n \t\t    \"msg\": \"Specific Error Message\"\n \t\t  }\n \t\t}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/login",
    "title": "Login",
    "version": "0.1.0",
    "name": "Login",
    "group": "User",
    "description": "<p>Username과 Password로 서버에 로그인을 시도합니다.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>학번 혹은 유저 아이디</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>비밀번호</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>요청에 대한 응답 Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reqeust.result",
            "description": "<p>'success' 또는 'failed'</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reqeust.user",
            "description": "<p>유저에 대한 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reqeust.user.sid",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reqeust.user.uesrname",
            "description": "<p>Username (학번 혹은 아이디)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reqeust.user.sname",
            "description": "<p>학생 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reqeust.user.auth",
            "description": "<p>권한 (0은 학생, 1은 관리자)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"request\": {\n    \"result\": \"success\",\n    \"user\": {\n      \"sid\": \"1\",\n      \"username\": \"2014001234\",\n      \"sname\": \"홍길동\",\n      \"auth\": \"0\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/example.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>에러메시지가 반환된다.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\t\t{\n \t\t  \"request\": {\n  \t\t    \"result\": \"failed\",\n \t\t    \"msg\": \"Specific Error Message\"\n \t\t  }\n \t\t}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/loginCheck",
    "title": "LoginCheck",
    "version": "0.1.0",
    "name": "LoginCheck",
    "group": "User",
    "description": "<p>로그인이 되어있는지 체크합니다.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>요청에 대한 응답 Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reqeust.result",
            "description": "<p>'success' 또는 'failed'</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reqeust.msg",
            "description": "<p>'logged' 또는 'loggedOut'</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "reqeust.user",
            "description": "<p>유저에 대한 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reqeust.user.sid",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reqeust.user.uesrname",
            "description": "<p>Username (학번 혹은 아이디)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reqeust.user.sname",
            "description": "<p>학생 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reqeust.user.auth",
            "description": "<p>권한 (0은 학생, 1은 관리자)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"request\": {\n    \"result\": \"success\",\n    \"msg\": \"logged\",\n    \"user\": {\n      \"sid\": \"1\",\n      \"username\": \"2014001234\",\n      \"sname\": \"홍길동\",\n      \"auth\": \"0\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/example.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>에러메시지가 반환된다.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\t\t{\n \t\t  \"request\": {\n  \t\t    \"result\": \"failed\",\n \t\t    \"msg\": \"Specific Error Message\"\n \t\t  }\n \t\t}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/logout",
    "title": "Logout",
    "version": "0.1.0",
    "name": "Logout",
    "group": "User",
    "description": "<p>로그아웃을 합니다.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>요청에 대한 응답 Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reqeust.result",
            "description": "<p>'success' 또는 'failed'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"request\": {\n    \"result\": \"success\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/example.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>에러메시지가 반환된다.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\t\t{\n \t\t  \"request\": {\n  \t\t    \"result\": \"failed\",\n \t\t    \"msg\": \"Specific Error Message\"\n \t\t  }\n \t\t}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/login",
    "title": "Register",
    "version": "0.1.0",
    "name": "Register",
    "group": "User",
    "description": "<p>서버에 아이디와 이름, 비밀번호를 등록합니다.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>5자리 이상 20자리 이하의 아이디(학번)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>6자리 이상의 영소문자, 대문자, 숫자, 특수문자로 이루어진 비밀번호</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>학생 이름</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>요청에 대한 응답 Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reqeust.result",
            "description": "<p>'success' 또는 'failed'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"request\": {\n    \"result\": \"success\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/example.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>에러메시지가 반환된다.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\t\t{\n \t\t  \"request\": {\n  \t\t    \"result\": \"failed\",\n \t\t    \"msg\": \"Specific Error Message\"\n \t\t  }\n \t\t}",
          "type": "json"
        }
      ]
    }
  }
] });
