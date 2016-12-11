<?php

namespace api\seat;

class extend {
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

        $db->query("SET AUTOCOMMIT=0");
        $db->query("BEGIN");

        try {
            $query = "
                SELECT
                    `end_time`
                FROM `issue`
                WHERE 
                    `sid` = '" . $db->sql_escape($user['sid']) . "'
                AND '" . $db->sql_escape($now->format("Y-m-d H:i:s")) . "' BETWEEN `start_time` AND `end_time`
                LIMIT 1
            ";

            $endTime = $db->uniquequery($query);

            if(!$endTime) {
                return [
                    'result' => 'failed',
                    'msg' => '발급받은 좌석이 없습니다.'
                ];
            }

            $endTime = new \DateTimeImmutable($endTime['end_time']);

            $diff = $endTime->getTimestamp() - $now->getTimestamp();

            // 연장은 남은 시간이 30분 미만을 때 가능하다.
            if($diff >= 60 * 30) {
                return [
                    'result' => 'failed',
                    'msg' => '잔여 시간이 30분 미만일 때 가능합니다.'
                ];
            }

            $query = "
                UPDATE `issue`
                SET
                    `end_time` = DATE_ADD(`end_time`, INTERVAL 6 HOUR)
                WHERE 
                    `sid` = '" . $db->sql_escape($user['sid']) . "'
                AND '" . $db->sql_escape($now->format("Y-m-d H:i:s")) . "' BETWEEN `start_time` AND `end_time`
            ";

            $data = $db->query($query);
            
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