<?php

namespace api\seat;

class reqSeatReturn {
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
				SELECT `I`.`sid`, `I`.`id`
				FROM `issue` `I`
					INNER JOIN `seat` `S`
						ON `S`.`seat_no` = '" . $db->sql_escape($sno) . "'
						AND `S`.`rid` = '" . $db->sql_escape($rid) . "'
				WHERE
					`I`.`seat_id` = `S`.`seat_id`
				AND '" . $db->sql_escape($now->format("Y-m-d H:i:s")) . "' BETWEEN `start_time` AND `end_time`
				LIMIT 1
			";

			$sid = $db->uniquequery($query);

			if(!$sid) {
				return [
					'result' => 'failed',
					'msg' => '해당 좌석은 비어있는 좌석입니다.'
				];
			}

			$issue_id = $sid['id'];
			$sid = $sid['sid'];

			if($sid != $user['sid']) {
				$query = "
					SELECT 1
					FROM `alarm`
					WHERE
						`alarm_from` = '" . $db->sql_escape($user['sid']) . "'
					AND `issue_id` = '" . $db->sql_escape($issue_id) . "'
					LIMIT 1
				";

				if(!$db->uniquequery($query)) {
					\api\alarm\reg::regAlarm("반납 요청", "반납요청이 들어왔습니다. 좌석을 사용하지 않으시다면 반납을 부탁드리겠습니다.", "reqRet", $sid, $user['sid'], $issue_id);
				}
			}
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