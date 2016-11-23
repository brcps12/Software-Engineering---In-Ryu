<?php

class Account {
	public $result;

	function __construct() {

	}

	function login ($username, $password) {
		global $db;

		if(!isset($username, $password)) {
			return false;
		}

		$query = "
			SELECT *
			FROM `student`
			WHERE 
				`username` = '" . $db->sql_escape($username) . "'
			AND `password` = '" . $db->sql_escape($this->getHash($password)) . "'
		";

		$userRow = $db->uniquequery($query);

		$value = array ();
		$value [] = $userRow['sid'];
		$value [] = hash("sha256", $userRow['password'] . " - " . $userRow['username']);

		$_SESSION['logged'] = implode("/%/", $value);

		return $userRow;
	}

	function getUser() {
		if(isset($_SESSION['logged'])) {
			$value = explode("/%/", $_SESSION['logged']);
			$userID = $value[0];
			if(is_numeric($userID)) {
				$userRow = $db->uniquequery("SELECT * FROM `student` WHERE `sid`='" . $userID . "' LIMIT 1");
				if(hash("sha256", $userRow['password'] . " - " . $userRow['username']) == $value[1]) {
					return $userRow;
				}
			}
		}

		return false;
	}

	function logout() {
		unset($_SESSION['logged']);

		return true;
	}

	function getHash($value) {
		return hash('sha256', $value);
	}

}