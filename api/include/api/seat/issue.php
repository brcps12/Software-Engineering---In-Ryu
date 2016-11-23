<?php

namespace api\seat;

class issue {
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

        $sno = $stdio->getParam('sno');
        $rid = $stdio->getParam('rid');

        if(!($user = $account->getUser())) {
            $account->logout();
            return [
                'result' => 'failed',
                'msg' => '로그인을 해주시기 바랍니다.'
            ];
        }

        $query = "
            SELECT *
            FROM `seat`
            WHERE
                `seat_no` = '" . $db->sql_escape($sno) . "'
            AND `rid` = '" . $db->sql_escape($rid) . "'
        ";

        $seat = $db->uniquequery($query);

        if(!$seat) {
            return [
                'result' => 'failed',
                'msg' => '발급 정보가 잘못되었습니다.'
            ];
        }

        if($seat['available'] == 0) {
            return [
                'result' => 'failed',
                'msg' => '예약이 불가능한 좌석입니다.'
            ];
        }

        $seat_id = $seat['seat_id'];

        $now = new \DateTimeImmutable();

        $db->query("SET AUTOCOMMIT=0");
        $db->query("BEGIN");

        $query = "
            SELECT 1
            FROM `issue`
            WHERE
                `seat_id` = '" . $db->sql_escape($seat_id) . "'
            AND '" . $db->sql_escape($now->format("Y-m-d H:i:s")) . "' BETWEEN `start_time` AND `end_time`
        ";

        if($db->uniquequery($query)) {
            return [
                'result' => 'failed',
                'msg' => '해당 좌석은 이미 발급되어 있습니다.'
            ];
        }

        $query = "
            SELECT 1
            FROM `issue`
            WHERE
                `sid` = '" . $db->sql_escape($user['sid']) . "'
            AND '" . $db->sql_escape($now->format("Y-m-d H:i:s")) . "' BETWEEN `start_time` AND `end_time`
        ";

        if($db->uniquequery($query)) {
            return [
                'result' => 'failed',
                'msg' => '이미 발급받은 좌석이 있습니다. 먼저 사용하시는 좌석을 반납하여주세요.'
            ];
        }

        try {
            $db->insert_sql(
                'issue',
                [
                    'start_time' => $now->format("Y-m-d H:i:s"),
                    'end_time' => $now->modify("+3 hour")->format("Y-m-d H:i:s"),
                    'sid' => $user['sid'],
                    'seat_id' => $seat_id,
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