<?php
header('Content-type:text/html; charset="utf-8"');

/*
API:
	历史上的今天.php

		参数
		v	 			string	是	版本，当前：1.0	
		month		int			是	月份，如：10	
		day			int			是	日，如：1
*/
$month = isset($_GET['month']) ? $_GET['month'] : 1;
$day = isset($_GET['day']) ? $_GET['day'] : 1;

$url = 'http://api.juheapi.com/japi/toh?v=1.0&month='.$month.'&day='.$day.'&key=9354dc6515224ed101f4bc2a79985b38';

$content = file_get_contents($url);
//$content = iconv('gbk', 'utf-8', $content);

echo $content;

?>