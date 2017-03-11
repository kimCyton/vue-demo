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
$pagesize = isset(	$_GET['pagesize']) ? $_GET['pagesize'] : '20';


$url = 'http://v.juhe.cn/weixin/query?pno='.$page.'&ps='.$pagesize.'&key=b0f151b673e7fb228b5b579123c94879';
$content = file_get_contents($url);
//$content = iconv('gbk', 'utf-8', $content);

echo $content;

?>