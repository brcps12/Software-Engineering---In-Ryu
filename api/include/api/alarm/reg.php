<?php

namespace api\alarm;

class reg {
    public $result;

    public function __construct() {
        $this->result = ['result'=> 'failed', 'msg' => '올바른 접근이 아닙니다.'];
        self::pushSeatAlarm();
    }

    public static function regAlarm($title, $content, $type, $sid, $alarmFrom = null, $issueId = null) {
        global $db;

        try {
            $db->insert_sql(
                'alarm',
                [
                    'title' => $title,
                    'content' => $content,
                    'type' => $type,
                    'sid' => $sid,
                    'issue_id' => $issueId,
                    'alarm_from' => $alarmFrom
                ]
            );
        } catch(\Exception $e) {
            throw new \Exception($e->getMessage(), $e->getCode());
        }
    }

    public static function pushSeatAlarm() {
        global $db;

        $now = new \DateTimeImmutable();

        $title = "반납/연장 알림";
        $content = "발급받으신 좌석이 발급 종료 30분 이전입니다. 사용하지 않으시면 반납을, 계속 사용하고 계시면 연장을 해주세요.";

        $query = "
            SELECT `I`.`id` AS `issue_id`, `I`.`sid`
            FROM `issue` `I`
            WHERE
                `end_time` BETWEEN '" . $db->sql_escape($now->format("Y-m-d H:i:s")) . "' AND DATE_ADD('" . $db->sql_escape($now->format("Y-m-d H:i:s")) . "', INTERVAL 30 MINUTE)
            AND NOT EXISTS (SELECT 1 FROM `alarm` WHERE `issue_id` = `I`.`id` LIMIT 1)
        ";

        $data = $db->query($query);

        try {
            while($row = $db->fetch_assoc($data)) {
                self::regAlarm($title, $content, 'retExd', $row['sid'], null, $row['issue_id']);
            }
        } catch(\Exception $e) {

        }
    }
}