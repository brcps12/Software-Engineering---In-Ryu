<?php

namespace api;

class register {
    public $result;

    function __construct() {
        global $stdio;

        if($stdio->method == "GET") {
            $this->result = $this->get();
        } else if($stdio->method == "POST") {
            $this->result = $this->post();
        } else
            $this->result = ['result'=> 'failed', 'msg' => '올바른 접근이 아닙니다.'];
    }

    function get () {
        return ['result'=> 'failed', 'msg' => '올바른 접근이 아닙니다.'];
    }

    function post() {
        global $stdio, $db, $account;

        $username = $stdio->getParam('username');
        $password = $stdio->getParam('password');
        $name = $stdio->getParam('name');

        if(!preg_match("/^[0-9a-z]{5,20}$/", $username)) {
            return [
                'result' => 'failed',
                'msg' => '아이디는 5~20자의 영문 소문자, 숫자만 사용 가능합니다.'
            ];
        }

        if(!preg_match("/^[!@#$%^*+=-a-zA-Z0-9]{6,}$/", $password)) {
            return [
                'result' => 'failed',
                'msg' => '비밀번호는 6자리 이상의 영소문자, 대문자, 숫자, 특수문자로만 사용 가능합니다.'
            ];
        }

        if(mb_strlen($name) < 1 || mb_strlen($name) > 10) {
            return [
                'result' => 'failed',
                'msg' => '이름은 길이는 10자리 미만이어야 합니다.'
            ];
        }


        $db->query("SET AUTOCOMMIT=0");
        $db->query("BEGIN");

        try {

            $query   = "
                SELECT 1
                FROM `student`
                WHERE
                    `username` = '" . $db->sql_escape($username) . "'
            ";

            if($db->uniquequery($query)) {
                return [
                    'result' => 'failed',
                    'msg' => '입력하신 아이디는 이미 등록되어 있습니다.'
                ];
            }

            $db->insert_sql(
                'student',
                [
                    'username' => $username,
                    'password' => hash('sha256', $password),
                    'sname' => $name,
                    'auth' => '0'
                ]
            );

            $db->query("COMMIT");
        } catch(\Exception $e) {
            $db->query("ROLLBACK");
            return [
                'result' => 'failed',
                'msg' => $e->getMessage() . " Code: " . $e->getCode()
            ];
        }

        return [
            'result' => 'success'
        ];
    }

}