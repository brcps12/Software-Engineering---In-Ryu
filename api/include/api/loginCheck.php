<?php

namespace api;

class loginCheck {
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

        if(!($user = $account->getUser())) {
            $account->logout();
            return [
                'result' => 'success',
                'msg' => 'loggedOut'
            ];
        }

        return [
            'result' => 'success',
            'msg' => 'logged',
            'user' => $user
        ];
    }

}