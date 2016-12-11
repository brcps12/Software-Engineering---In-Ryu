<?php

namespace api\alarm;

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

        $type = $stdio->getParam('type');

        if(!($user = $account->getUser())) {
            $account->logout();
            return [
                'result' => 'failed',
                'msg' => '로그인을 해주시기 바랍니다.'
            ];
        }

        $now = new \DateTime();

        if($type == 'main') {
            $query = "
                SELECT
                    COUNT(*) AS `notReadCnt`
                FROM `alarm` `A`
                    INNER JOIN `issue` `B`
                    ON `B`.`id` = `A`.`issue_id`
                    AND `start_time` <= '" . $db->sql_escape($now->format('Y-m-d H:i:s')) . "'
                    AND `end_time` >= '" . $db->sql_escape($now->format('Y-m-d H:i:s')) . "'
                WHERE
                    `A`.`sid` = '" . $db->sql_escape($user['sid']) . "'
                AND `is_read` = 0
            ";

            $notReadCnt = $db->uniquequery($query)['notReadCnt'];

            return [
                'result' => 'success',
                'notReadCnt' => $notReadCnt
            ];
        }

        $query = "
            SELECT 
                `alarm_id`,
                `title`,
                `content`,
                `type`,
                `is_read`,
                `date`
            FROM `alarm` `A`
                INNER JOIN `issue` `B`
                ON `B`.`id` = `A`.`issue_id`
                AND `start_time` <= '" . $db->sql_escape($now->format('Y-m-d H:i:s')) . "'
                AND `end_time` >= '" . $db->sql_escape($now->format('Y-m-d H:i:s')) . "'
            WHERE
                `A`.`sid` = '" . $db->sql_escape($user['sid']) . "'
            ORDER BY `alarm_id` DESC
            LIMIT 20
        ";

        $list = [];
        $notReadCnt = 0;

        try {
            $data = $db->query($query);

            while($row = $db->fetch_assoc($data)) {
                $list[] = $row;
            }

            $query = "
                SELECT
                    COUNT(*) AS `notReadCnt`
                FROM `alarm` `A`
                    INNER JOIN `issue` `B`
                    ON `B`.`id` = `A`.`issue_id`
                    AND `start_time` <= '" . $db->sql_escape($now->format('Y-m-d H:i:s')) . "'
                    AND `end_time` >= '" . $db->sql_escape($now->format('Y-m-d H:i:s')) . "'
                WHERE
                    `A`.`sid` = '" . $db->sql_escape($user['sid']) . "'
                AND `is_read` = 0
            ";

            $notReadCnt = $db->uniquequery($query)['notReadCnt'];

            $query = "
                UPDATE `alarm`
                SET `is_read` = 1 
                WHERE
                    `sid` = '" . $db->sql_escape($user['sid']) . "'
            ";
            $db->query($query);

        } catch(\Exception $e) {
            return [
                'result' => 'failed',
                'msg' => $e->getMessage() . " Code: " . $e->getCode()
            ];
        }

        return [
            'result' => 'success',
            'list' => $list,
            'notReadCnt' => $notReadCnt
        ];
    }

}