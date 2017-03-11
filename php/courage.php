<?php
header('Content-type:text/html; charset="utf-8"');
/*
API:
	courage.php
		参数
		http://api.avatardata.cn/MingRenMingYan/LookUp?key=8fe681cb74434c8f9be17f42c6528b41&keyword=%E5%A4%A9%E6%89%8D&page=1&rows=5
		&page=1
		&pagesize=10
*/
$page = isset($_GET['page']) ? $_GET['page'] : '1';
$rows = isset($_GET['rows']) ? $_GET['rows'] : '20';
$keyword = isset($_GET['keyword']) ? $_GET['keyword'] : '天才';


$url = 'http://api.avatardata.cn/MingRenMingYan/LookUp?keyword='.$keyword.'&page='.$page.'&rows='.$rows.'&key=8fe681cb74434c8f9be17f42c6528b41';
$content = file_get_contents($url);
//$content = iconv('gbk', 'utf-8', $content);

echo $content;

?>