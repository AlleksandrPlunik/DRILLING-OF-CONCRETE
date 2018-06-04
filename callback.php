<?php
require "config.php";

header('Content-type: text/html; charset=utf-8');
session_start();
$post = $_POST;

if (isset($post['callback_submit'])) {
    try {
        $client = new SoapClient('http://turbosms.in.ua/api/wsdl.html');
        
        $auth = array(
            'login' => LOGIN,
            'password' => PASSWORD
        );
        // Авторизируемся на сервере
        $result = $client->Auth($auth);

        // Текст сообщения ОБЯЗАТЕЛЬНО отправлять в кодировке UTF-8
        $text = CALLBACK_MESSAGE 
            . $post['phone'] . ', ' 
            . $post['day'] . ' в ' 
            . $post['time'];

        $sms = array(
            'sender' => SENDER,
            'destination' => NUMBERS,
            'text' => $text
        );
        if (isset($_SESSION['lastSmsTime'])) {
            if ((time() - $_SESSION['lastSmsTime']) > SMS_TIME_SECONDS) {
                $result = $client->SendSMS($sms);

                if (isset($result->SendSMSResult->ResultArray[1])) {
                    $_SESSION['lastSmsTime'] = time();
                    exit(json_encode(array('status' => true, 'message' => 'Заявка отправлена!')));
                }

                exit(json_encode(array('status' => false, 'message' => 'Во время отправки заявки случилась ошибка. Пожалуйста попробуйте снова!')));
            } else {
                exit(json_encode(array('status' => true, 'message' => 'Вы не можете отправлять заявку так часто. Попробуйте позже.')));
            }
        } else {
            $result = $client->SendSMS($sms);

            if (isset($result->SendSMSResult->ResultArray[1])) {
                $_SESSION['lastSmsTime'] = time();
                exit(json_encode(array('status' => true, 'message' => 'Заявка отправлена!')));
            }

            exit(json_encode(array('status' => false, 'message' => 'Во время отправки заявки случилась ошибка. Пожалуйста попробуйте снова!')));
        }
    } catch(Exception $e) {
        exit(json_encode(array('status' => false, 'message' => 'Во время отправки заявки случилась ошибка. Пожалуйста попробуйте снова!')));
    }
}
