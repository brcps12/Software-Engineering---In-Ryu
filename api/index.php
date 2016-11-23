<?php
require_once ("common.php");
require_once ("lib/AjaxStdIO.php");
$stdio = new AjaxStdIO();


function return_msg( $data ) {
	global $stdio;
	try {
		session_write_close();
		header('Content-type: application/json;charset=utf-8');
		if($stdio->getParam('callback'))
			echo $stdio->getParam('callback') . '(';
		echo json_encode(array('request'=>$data), JSON_UNESCAPED_UNICODE);
		if($stdio->getParam('callback'))
			echo ')';		
	} catch (Exception $e) {
		echo $e->getMessage();
	}
	exit;
}

$mode = $_SERVER['REQUEST_URI'];

if($mode == '/api' || $mode == '/api/') {
	header("Location: ./docs");
	exit;
}

if($mode == '/api/currentTime') {
	return_msg([
		'result' => 'success',
		'time' => time() * 1000
	]);
}

if(substr($mode, 0, 4) == '/api') {
	$mode = str_replace('/', '\\', $mode);
	if(class_exists($mode, true)) {
		$res = (new $mode())->result;
		return_msg( $res );
	}
}
return_msg(['result' => 'failed', 'msg' => '잘못된 접근입니다.']);

?>