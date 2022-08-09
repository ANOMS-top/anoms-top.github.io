<?php
 $to = "tigercrl@icloud.com";
 $subject = $_POST['subject'];
 $body = "From, ".$_POST['name']."\n\n"."Email, ".$_POST['email']."\n\n".$_POST['message'];
 if (mail($to, $subject, $body)) {
  $responseArray = array('class' => 'alert alert-success', 'message' => '消息已成功发送！ 我们会尽快回复您！');
  } else {
$responseArray = array('class' => 'alert alert-danger', 'message' => '提交表单时出错！ 请稍后再试');
     
  }

    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;

 ?>