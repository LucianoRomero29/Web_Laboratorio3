<?php

//Mail enviado desde el select CONSULTA GENERAL
if(isset($_POST["General"])){
    $formGeneral = $_POST["General"];
    $email       = $formGeneral["email"];

    //Armo email 
    $post = array('from' => 'lucianooromero1@gmail.com',
        'fromName' => 'Deportivo Bidon Web',
        'apikey' => '389F18972B7310A4FA5EB4CA7D5A2ED2080630BE78883E78DA0A43271CD67F8FAFF33663A8CDD01B40D35FDF718EF472',
        'subject' => 'Consulta General',
        'to' =>  'lucianooromero1@gmail.com',
        'bodyHtml' => '
            <h1>Información del consultante: </h1>
            <b style="color: #5bc0de">Apellido: </b><p>' . $formGeneral["name"] . '</p><br>
            <b style="color: #5bc0de">Nombre: </b><p>' . $formGeneral["lastname"] . '</p><br>
            <b style="color: #5bc0de">Email: </b><p>' . $formGeneral["email"] . '</p><br>
            <b style="color: #5bc0de">Consulta: </b><p>' . $formGeneral["query"] . '</p><br>
        ',
        'bodyText' => 'Text Body',
        'isTransactional' => false
    );

    sendEmail($post);
}

//Mail enviado desde el select SÉ PARTE DE BIDON
if(isset($_POST["JoinUs"])){
    $formJoinUs = $_POST["JoinUs"];

    sendEmail($post);
}

function sendEmail($post){
    $url = 'https://api.elasticemail.com/v2/email/send';

    try{
        $ch = curl_init();
        curl_setopt_array($ch, array(
            CURLOPT_URL => $url,
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $post,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HEADER => false,
            CURLOPT_SSL_VERIFYPEER => false
        ));
        
        $result=curl_exec ($ch);
        curl_close ($ch);
        
        header("Location: contact.html");	
    }
    catch(Exception $ex){
        echo $ex->getMessage();
    }
}
