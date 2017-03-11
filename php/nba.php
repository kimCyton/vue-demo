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
$url = 'http://op.juhe.cn/onebox/basketball/nba?key=e9f98f57be5fc56dafc2042a9f54c2ec';
$content = file_get_contents($url);
//$content = iconv('gbk', 'utf-8', $content);

echo $content;

?>