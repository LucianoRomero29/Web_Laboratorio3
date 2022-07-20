<?php

// $formGeneral = $_POST["General"];
// $formJoinUs  = $_POST["JoinUs"]; 

// //El que NO sea nulo, va a ser el form que envíe el email
// if(isset($_POST["General"])){
//     $nombre     = $formGeneral["name"];
//     $apellido   = $formGeneral["lastname"];
//     $email      = $formGeneral["email"];
//     $consulta   = $formGeneral["query"];

//     var_dump($formGeneral);
// }

// if(isset($_POST["JoinUs"])){
//     $nombre     = $formJoinUs["name"];
//     $apellido   = $formJoinUs["lastname"];
//     $email      = $formJoinUs["email"];
//     $dni        = $formJoinUs["dni"];
//     $telefono   = $formJoinUs["cellphone"];
//     $calle      = $formJoinUs["adress"];
//     $nro        = $formJoinUs["nro"];
//     $piso       = $formJoinUs["floor"];
//     $depto      = $formJoinUs["apartment"]; 
//     $puesto     = $formJoinUs["position"];
//     $pierna     = $formJoinUs["leg"];
//     $encontrado = $formJoinUs["find"];
//     $foto       = $formJoinUs["photo"];


//     var_dump($formGeneral);
// }

$header = "From: noreply@example.com" . "\r\n";
$header.= "Reply-To: noreply@example.com" . "\r\n";
$header.= "X-Mailer: PHP/". phpversion();

$destinatario = "Lucianooromero1@gmail.com"; 
$asunto = "Este mensaje es de prueba"; 
$cuerpo = ' 
<html> 
<head> 
   <title>Prueba de correo</title> 
</head> 
<body> 
<h1>Hola amigos!</h1> 
<p> 
<b>Bienvenidos a mi correo electrónico de prueba</b>. Estoy encantado de tener tantos lectores. Este cuerpo del mensaje es del artículo de envío de mails por PHP. Habría que cambiarlo para poner tu propio cuerpo. Por cierto, cambia también las cabeceras del mensaje. 
</p> 
</body> 
</html> 
'; 

@mail($destinatario,$asunto,$cuerpo,$header);
