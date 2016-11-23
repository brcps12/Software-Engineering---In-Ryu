define({ "api": [
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"request\": {\n    \"result\": \"success\",\n    \"info\": [\n      {\n        \"sno\": \"1\",\n        \"rid\": \"1\",\n        \"available\": \"0\"\n      },\n      {\n        \"sno\": \"2\",\n        \"rid\": \"1\",\n        \"available\": \"0\"\n      },\n      {\n        \"sno\": \"3\",\n        \"rid\": \"1\",\n        \"available\": \"1\"\n      }\n    ]\n  }\n}",
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
          "content": "{\n  \"request\": {\n    \"result\": \"success\"\n    \"user\": {\n      \"sid\": \"1\",\n      \"username\": \"2014001234\",\n      \"sname\": \"홍길동\",\n      \"auth\": \"0\"\n    }\n  }\n}",
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
  }
] });
