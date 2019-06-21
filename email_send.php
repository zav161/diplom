<?php

header("Content-type: application/json; charset=utf-8");
$data = $_POST;
// print_r($myData);
$email_admin = "zav1930@mail.ru";
$name = $data['name'];
$client_email = $data['email'];
$subject = $data['subject'];
$msg = $data['msg'];
mail($email_admin, "Заявка с сайта Авто-Профи", "Имя: ".$name."\nEmail: ".$client_email."\nТема обращения: ".$subject."\nСообщение: ".$msg);
echo json_encode(['status'=>'success','msg' => 'Ваша заявка успешно отправлена']);

