<?php
class DB_mysqli extends mysqli
{
	public $mysqli;
	protected $queryCount = 0;
	protected $qTime = array();
	protected $query;
	protected $dbsettings;
	protected $result;

	/**
	 * Constructor: Set database access data.
	 *
	 * @param string	The database host
	 * @param string	The database username
	 * @param string	The database password
	 * @param string	The database name
	 * @param integer	The database port
	 *
	 * @return void
	 */
	public function __construct($charset='utf8')
	{
		global $dbsettings;
		$this->time		= 0;
		@parent::__construct($dbsettings["server"], $dbsettings["user"], $dbsettings["pass"], $dbsettings["name"], 3306);
		if($this->connect_errno) {
			throw new Exception("Connection to database failed: ".$this->connect_error);
			exit;
		}
		parent::set_charset($charset);
		return true;
	}

	/**
	 * Close current database connection.
	 *
	 * @return void
	 */
	public function __destruct()
	{
		parent::close();
	}

	public function error_query ( $UserID , $Type , $Text ) {
		$QryInsertError   = "INSERT INTO errors SET ";
		$QryInsertError  .= "`error_sender` = '".$this->sql_escape($UserID)."', ";
		$QryInsertError  .= "`error_time` = '".time()."', ";
		$QryInsertError  .= "`error_type` = '".$Type."', ";
		$QryInsertError  .= "`error_text` = '".  $this->sql_escape($Text)  ."';";
		$this->query( $QryInsertError , "error" );
	}

	/**
	 * Purpose a query on selected database.
	 *
	 * @param string	The SQL query
	 *
	 * @return resource	Results of the query
	 */
	public function query($resource,$Type='normal')
	{
		$Timer	= microtime(true);
		if($result = parent::query($resource))
		{
			$this->time	+= (microtime(true) - $Timer);
			$this->queryCount++;
			return $result;
		}
		else
		{
			global $user;
//			echo $resource;
			$errno = $this->errno;
			//echo $this->errno;
			if($Type != 'error') $this->error_query($user['userId'],"SQL Error","SQL Error: ".$this->error."<br><br>Query Code: ".$resource);
			throw new \Exception("서버 에러가 발생하였습니다.", $errno);
		}
		return;

	}
	/**
	 * Purpose a query on selected database.
	 *
	 * @param string	The SQL query
	 *
	 * @return resource	Results of the query
	 */
	public function uniquequery($resource)
	{
		$Timer	= microtime(true);
		if($result = parent::query($resource))
		{
			$this->time	+= (microtime(true) - $Timer);
			$this->queryCount++;
			$Return = $result->fetch_array(MYSQLI_ASSOC);
			$result->close();
			return $Return;
		}
		else
		{
			global $user;
			$errno = $this->errno;
			$this->error_query($user['userId'],"SQL Error","SQL Error: ".$this->error."<br><br>Query Code: ".$resource);
			throw new \Exception("서버 에러가 발생하였습니다.", $errno);
		}
		return;

	}
	/**
	 * Returns the row of a query as an object.
	 *
	 * @param resource	The SQL query id
	 *
	 * @return object	The data of a row
	 */
	public function fetch_object($result)
	{
		return $result->fetch_object();
	}

	/**
	 * Returns the row of a query as an array.
	 *
	 * @param resource	The SQL query id
	 *
	 * @return array	The data of a row
	 */
	public function fetch_array($result)
	{
		return $result->fetch_array(MYSQLI_ASSOC);
	}

	/**
	 * Returns the row of a query as an array.
	 *
	 * @param resource	The SQL query id
	 *
	 * @return array	The data of a row
	 */
	public function fetch_assoc($result)
	{
		return $result->fetch_array(MYSQLI_ASSOC);
	}

	/**
	 * Returns the row of a query as an array.
	 *
	 * @param resource	The SQL query id
	 *
	 * @return array	The data of a row
	 */
	public function fetch_num($result)
	{
		return $result->fetch_array(MYSQLI_NUM);
	}

	/**
	 * Fetch a result row as an associative array.
	 *
	 * @param resource	The SQL query id
	 *
	 * @return array	The data of a row
	 */
	public function fetch($result)
	{
		return $result->fetch_assoc();
	}

	/**
	 * Returns the value from a result resource.
	 *
	 * @param resource	The SQL query id
	 * @param string	The column name to fetch
	 * @param integer	Row number in result to fetch
	 *
	 * @return mixed
	 */
	public function fetch_field($result, $field, $row = null)
	{
		if($row !== null)
		{
			$result->data_seek($row);
		}
		$this->result = $this->fetch($result);
		return $this->result[$field];
	}

	/**
	 * Get a row as an enumerated array.
	 *
	 * @param resource	The SQL query id
	 *
	 * @return array
	 */
	public function fetch_row($result)
	{
		$this->result = $result->fetch_row();
		return $this->result;
	}

	/**
	 * Returns the total row numbers of a query.
	 *
	 * @param resource	The SQL query id
	 *
	 * @return integer	The total row number
	 */
	public function num_rows($query)
	{
		return $query->num_rows;
	}

	/**
	 * Returns the number of affected rows by the last query.
	 *
	 * @return integer	Affected rows
	 */
	public function affected_rows()
	{
		$affected_rows = $this->mysqli->affected_rows;
		if($affected_rows < 0) { $affected_rows = 0; }
		return $affected_rows;
	}

	/**
	 * Returns the last inserted id of a table.
	 *
	 * @return integer	The last inserted id
	 */
	public function insert_id()
	{
		return $this->insert_id;
	}

	/**
	 * Escapes a string for a safe SQL query.
	 *
	 * @param string The string that is to be escaped.
	 *
	 * @return string Returns the escaped string, or false on error.
	 */
	public function sql_escape($string)
	{
		return parent::escape_string($string);
	}

	/**
	 * Returns used mysqli-Verions.
	 *
	 * @return string	mysqli-Version
	 */
	public function getVersion()
	{
		return parent::get_client_info();
	}

	/**
	 * Returns used mysqli-Verions.
	 *
	 * @return string	mysqli-Version
	 */
	public function getServerVersion()
	{
		return $this->server_info;
	}

	/**
	 * Type of database.
	 *
	 * @return string
	 */
	public function getDatabaseType()
	{
		return "mysqli";
	}

	/**
	 * Resets a mysqli resource to row number 0.
	 *
	 * @param resource	Resource to reset
	 *
	 * @return void
	 */
	public function reset_resource($result)
	{
		return $result->data_seek(0);
	}

	/**
	 * Frees stored result memory for the given statement handle.
	 *
	 * @param resource	The statement to free
	 *
	 * @return void
	 */
	public function free_result($resource)
	{
		return $resource->close();
	}

	public function multi_query($resource)
	{
		$Timer	= microtime(true);
		if(parent::multi_query($resource))
		{
			do {
			    if ($result = parent::store_result())
					$result->free();

				$this->queryCount++;

				if(!parent::more_results()) break;

			} while (parent::next_result());
		}

		$this->time	+= (microtime(true) - $Timer);
		$this->SQL[]	= $resource;

		if ($this->errno)
		{
			global $user;
			$errno = $this->errno;
			$this->error_query($user['userId'],"SQL Error","SQL Error: ".$this->error."<br><br>Query Code: ".$resource);
			throw new \Exception("서버 에러가 발생하였습니다.", $errno);
		}
	}

	public function get_sql()
	{
		return $this->queryCount;
	}

	// $db->save_sql(DOCUMENT_LIST,$DocIndex,array('link-id'),array_keys($DocIndex));
	public function save_sql($TBName,$array,$keys,$elements,$onlyText=false) {
		global $db;
		$QryInsertAbstract  = "UPDATE ".$TBName." SET ";
	//	$size = sizeof($keys);
	//	for($i=0;$i<$size;$i++){
	//		$key = $keys[$i];
		foreach($keys as $key) {
			if(is_null($array[$key])) {
				$WHERE[] = "`".$key."` IS NULL";
			} else {
				$WHERE[] = "`".$key."` = '".((is_array($array[$key])) ? ( (sizeof($array[$key]) > 0) ? $this->sql_escape(base64_encode(gzdeflate(serialize($array[$key]),9))) : '' ) : $this->sql_escape($array[$key]))."'";
			}
		//	unset($elements[array_search($key,$elements)]);
		}
		$QueryList = array();
//		$elements = array_values($elements);
//		$size = sizeof($elements);
//		for($i=0;$i<$size;$i++) if(!in_array($elements[$i],$keys)) {
//			$key = $elements[$i];
		foreach($elements as $key) {
			if(is_null($array[$key])) {
				$QueryList[] = "`".$key."` = NULL";
			} else {
				$QueryList[] = "`".$key."` = '".((is_array($array[$key])) ? ( (sizeof($array[$key]) > 0) ? $this->sql_escape(base64_encode(gzdeflate(serialize($array[$key]),9))) : '' ) : $this->sql_escape($array[$key]))."'";
			}
		}
		$QryInsertAbstract .= implode(",",$QueryList);
		$QryInsertAbstract .= " WHERE ".implode(" AND ",$WHERE)." LIMIT 1;";
		if($onlyText) return $QryInsertAbstract;
		$this->query($QryInsertAbstract);
//		$this->test += microtime(true)-$m;
	}

	public function del_sql($TBName,$array,$onlyText=false) {
		$QryDelete = "DELETE FROM ".$TBName." WHERE ";
		$QueryList = array();
		foreach($array as $key => $value) {
			if(is_null($value)) {
				$QueryList[] = "`".$key."` IS NULL";
			} else {
				$QueryList[] = "`".$key."` = '".((is_array($value)) ? ( (sizeof($value) > 0) ? $this->sql_escape(base64_encode(gzdeflate(serialize($value),9))) : '' ) : $this->sql_escape($value))."'";
			}
		}
		$QryDelete .= implode(' AND ',$QueryList).";";
		if($onlyText) return $QryDelete;
		$this->query($QryDelete);
	}

	public function insert_sql($TBName,$array,$onlyText=false) {
		$QryInsert  = "INSERT INTO `".$TBName."` SET ";
		$QueryList = array();
		foreach($array as $key => $value) {
			if(is_null($value)) {
				$QueryList[] = "`".$key."` = NULL";
			} else {
				$QueryList[] = "`".$key."` = '".((is_array($value)) ? ( (sizeof($value) > 0) ? $this->sql_escape(base64_encode(gzdeflate(serialize($value),9))) : '' ) : $this->sql_escape($value))."'";
			}
		}
		$QryInsert .= implode(',',$QueryList).";";
		if($onlyText) {
			return $QryInsert;
		} else {
			$this->query($QryInsert);
		}
	}
}
?>