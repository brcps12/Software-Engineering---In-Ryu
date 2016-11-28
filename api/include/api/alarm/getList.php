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

        if(!($user = $account->getUser())) {
            $account->logout();
            return [
                'result' => 'failed',
                'msg' => '로그인을 해주시기 바랍니다.'
            ];
        }

        $query = "
            SELECT 
                `alarm_id`,
                `title`,
                `content`,
                `type`,
                `is_read`
            FROM `alarm`
            WHERE
                `sid` = '" . $db->sql_escape($user['sid']) . "'
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
                FROM `alarm`
                WHERE
                    `sid` = '" . $db->sql_escape($user['sid']) . "'
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