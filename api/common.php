<?php
spl_autoload_register(null, false);
spl_autoload_register(function ($class) {
	global $path_prefix;
	$fname = $path_prefix . '/include/' . str_replace('\\', '/' , $class) . '.php';
	if(file_exists($fname)) 
		require_once ($fname);
});

error_reporting(E_ALL ^ E_NOTICE ^ E_DEPRECATED);
error_reporting(E_ALL);
ini_set('display_errors',1);
ini_set('display_startup_errors', 1);


require_once ($path_prefix . "/lib/MySQLi.php");
require_once ($path_prefix . "/lib/Account.php");

session_start();
header('Content-type: text/html; charset=utf-8');

include($path_prefix . "/../config.php");

$db = new DB_MySQLi();
unset($dbsettings);

$account = new Account();


?>