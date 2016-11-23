<?php

namespace api\seat;

class seatReturn {
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

        $now = new \DateTimeImmutable();

        if(!($user = $account->getUser())) {
            $account->logout();
            return [
                'result' => 'failed',
                'msg' => '로그인을 해주시기 바랍니다.'
            ];
        }

        try {
            $query = "
                UPDATE `issue`
                SET
                    `end_time` = '" . $db->sql_escape($now->format("Y-m-d H:i:s")) . "'
                WHERE 
                    `sid` = '" . $db->sql_escape($user['sid']) . "'
                AND '" . $db->sql_escape($now->format("Y-m-d H:i:s")) . "' BETWEEN `start_time` AND `end_time`
                LIMIT 1
            ";

            $data = $db->query($query);
        } catch(\Exception $e) {
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