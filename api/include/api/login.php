<?php

namespace api;

class login {
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

        if(!($user = $account->login($username, $password))) {
            return [
                'result' => 'failed',
                'msg' => '학번(아아디) 또는 비밀번호를 다시 확인해주세요'
            ];
        }

        unset($user['password']);

        return [
            'result' => 'success',
            'user' => $user
        ];
    }

}