define({ "api": [
  {
    "type": "post",
    "url": "/api/currentTime",
    "title": "Get Current Time",
    "version": "0.1.0",
    "name": "currentTime",
    "group": "Server",
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
          "content": "{\n  \"request\": {\n    \"result\": \"success\"\n    \"user\": {\n      \"sid\": \"1\",\n      \"username\": \"2014001234\",\n      \"sname\": \"홍길동\",\n      \"auth\": 0\n    }\n  }\n}",
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
