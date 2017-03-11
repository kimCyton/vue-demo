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
$page = isset($_GET['page']) ? $_GET['page'] : '1';
$pagesize = isset(	$_GET['pagesize']) ? $_GET['pagesize'] : '5';


$url = 'http://japi.juhe.cn/joke/content/text.from?page='.$page.'&pagesize='.$pagesize.'&key=89b289432563ca24a1868ac2b8c04f26';
$content = file_get_contents($url);
//$content = iconv('gbk', 'utf-8', $content);

echo $content;

?>