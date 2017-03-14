<?php
header('Content-type:text/html; charset="utf-8"');
/*
API:
	drive.php
		参数
		http://api.avatardata.cn/Jztk/Query?key=735bc71f82064e06b9fd98179e119419&subject=4&model=c1
		key String  是   应用APPKEY

        subject String  是   选择考试科目类型，1：科目1；4：科目4
        model   String  是   驾照类型，可选择参数为：c1,c2,a1,a2,b1,b2；当subject=4时可省略
        testType    String  是   测试类型，rand：随机测试（随机100个题目），order：顺序测试（所选科目全部题目）

        dtype   String  否   返回结果格式：可选JSON/XML，默认为JSON
        format  Boolean 否   当返回结果格式为JSON时，是否对其进行格式化，为了节省流量默认为false，测试时您可以传入true来熟悉返回内容
*/
$subject = isset($_GET['subject']) ? $_GET['subject'] : '1';    // 1 or 4
$model = isset($_GET['model']) ? $_GET['model'] : 'c1';    // c1,c2,a1,a2,b1,b2 当subject=4时可省略


$url = 'http://api.avatardata.cn/Jztk/Query?subject='.$subject.'&model='.$model.'&key=735bc71f82064e06b9fd98179e119419';
$content = file_get_contents($url);
//$content = iconv('gbk', 'utf-8', $content);

echo $content;

?>