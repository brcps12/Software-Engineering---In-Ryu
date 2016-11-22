
<?php
class AjaxStdIO {
	private $params;
	public $method;
	public $hashString;

	function __construct () {
		$this->_parseParams();
		$this->hashString = sha1($this->method . "-" . serialize($this->params));
	}

	public function getParam ($name, $default = null) {
		if(isset($this->params[$name]))
			return $this->params[$name];
		return $default;
	}

	public function readPOST ($name, $default = null) {
		if($this->method == "POST")
			return $this->getParam($name, $default);
		return $default;
	}

	public function readGET ($name, $default = null) {
		if($this->method == "GET")
			return $this->getParam($name, $default);
		return $default;
	}

	public function readPUT ($name, $default = null) {
		if($this->method == "PUT")
			return $this->getParam($name, $default);
		return $default;
	}

	public function readPATCH ($name, $default = null) {
		if($this->method == "PATCH") 
			return $this->getParam($name, $default);
		return $default;
	}

	public function readDELETE ($name, $default = null) {
		if($this->method == "DELETE")
			return $this->getParam($name, $default);
		return $default;
	}

	private function _parseParams() {
		$this->method = strtoupper($_SERVER['REQUEST_METHOD']);
		if(isset($_FILES) && count($_FILES) > 0 && isset($_FILES['file']) && is_array($_FILES['file']['name'])) {
			$newFILES = [];
			for($i = 0; $i < count($_FILES['file']['name']); $i++) {
				foreach(array_keys($_FILES['file']) as $key) {
					$newFILES[$i][$key] = $_FILES['file'][$key][$i];
				}
			}
			$_FILES = $newFILES;
			unset($newFILES);				
		}
		switch (strtoupper($this->method)) {
			case "GET" :
				$this->params = $_GET;
				break;
			case "POST" : 
				$this->params = $_POST;
				if(count($this->params) == 0) 
					$this->params = json_decode(file_get_contents('php://input'), true);
				if (count($this->params) == 1 && isset($this->params['data'])) {
					if(!is_array($this->params['data'])) 
						$this->params = json_decode($this->params['data'], true);
					else 
						$this->params = $this->params['data'];
					$this->method = (isset($this->params['method'])) ? strtoupper($this->params['method']) : 'PUT';

				}
				break;
			default :
				$this->params = json_decode(file_get_contents('php://input'), true);
				break;
		}
	}

	// $encoding == UTF-8
	public function return_msg( $data ) {
		session_write_close();
		header('Content-type: application/json;charset=utf-8');
		header("Connection: Keep-Alive");
		echo json_encode(array('request'=>$data));
		exit;
	}
}
?>