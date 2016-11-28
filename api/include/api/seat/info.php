<?php

namespace api\seat;

class info {
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

        $rid = $stdio->getParam('rid');

        $now = new \DateTimeImmutable();

        $query = "
            SELECT 1
            FROM `reading_room`
            WHERE 
                `rid` = '" . $db->sql_escape($rid) . "'
        ";

        if(!$db->uniquequery($query)) {
            return [
                'result' => 'failed',
                'msg' => '열람실 정보를 불러올 수 없습니다.'
            ];
        }

        try {
            $query = "
                SELECT
                    `seat_no` AS `sno`,
                    `rid`,
                    `col`,
                    `row`,
                    IF(EXISTS(
                            SELECT 1 FROM `issue`
                            WHERE 
                                `seat_id` = `S`.`seat_id`
                            AND '" . $db->sql_escape($now->format("Y-m-d H:i:s")) . "' BETWEEN `start_time` AND `end_time`
                            LIMIT 1
                        ),
                        0,
                        `available`
                    ) AS `available`
                FROM `seat` `S`
                WHERE
                    `rid` = '" . $db->sql_escape($rid) . "'
            ";

            $data = $db->query($query);

            $info = [];

            while($row = $db->fetch_assoc($data)) {
                $info[] = $row;
            }

            $query = "
                SELECT
                    `rows`,
                    `cols`
                FROM `reading_room`
                WHERE
                    `rid` = '" . $db->sql_escape($rid) . "'
            ";

            $data = $db->uniquequery($query);

            $rows = $data['rows'];
            $cols = $data['cols'];
        } catch(\Exception $e) {
            return [
                'result' => 'failed',
                'msg' => $e->getMessage() . " Code: " . $e->getCode()
            ];
        }

        return [
            'result' => 'success',
            'rows' => $rows,
            'cols' => $cols,
            'info' => $info
        ];
    }

}