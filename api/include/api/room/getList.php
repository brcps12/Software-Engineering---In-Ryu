<?php

namespace api\room;

class getList {
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

        $query = "
            SELECT
                `R`.`rid`,
                `R`.`rname`,
                COUNT(*) AS `total_seats`
            FROM `reading_room` `R`
                INNER JOIN `seat` `S`
                ON `R`.`rid` = `S`.`rid`
            GROUP BY `R`.`rid`
        ";

        $list = [];

        try {
            $data = $db->query($query);

            while($row = $db->fetch_assoc($data)) {
                $query = "
                    SELECT
                        COUNT(*) AS `used`
                    FROM `issue` `I`
                        INNER JOIN `seat` `S`
                        ON `S`.`rid` = '" . $db->sql_escape($row['rid']) . "'
                        AND `S`.`seat_id` = `I`.`seat_id`
                    WHERE
                        '" . $db->sql_escape($now->format("Y-m-d H:i:s")) . "' BETWEEN `start_time` AND `end_time`
                ";

                $row['able_seats'] = ($row['total_seats'] - $db->uniquequery($query)['used']) . "";
                $list[] = $row;
            }

        } catch(\Exception $e) {
            return [
                'result' => 'failed',
                'msg' => $e->getMessage() . " Code: " . $e->getCode()
            ];
        }

        return [
            'result' => 'success',
            'list' => $list
        ];
    }

}