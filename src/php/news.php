<?php
header('Content-type:text/html; charset="utf-8"');
/*
API:
	joke.php
		参数
		http://japi.juhe.cn/joke/content/list.from?key=您申请的KEY
		&page=1
		&pagesize=10
*/
$type = isset($_GET['type']) ? $_GET['type'] : 'top';


$url = 'http://v.juhe.cn/toutiao/index?type='.$type.'&key=c89dae422d800110367368a4a8bd20fc';
$content = file_get_contents($url);
//$content = iconv('gbk', 'utf-8', $content);

echo $content;

?>