<?php

$formGeneral = $_POST["General"];

// $formJoinUs  = $_POST["JoinUs"]; 

// //El que NO sea nulo, va a ser el form que envíe el email
if(isset($_POST["General"])){
   $nombre     = $formGeneral["name"];
   $apellido   = $formGeneral["lastname"];
   $email      = $formGeneral["email"];
   $consulta   = $formGeneral["query"];

   if(isset($nombre) || isset($apellido) || isset($email) || isset($consulta)){

      $header = "From: $email \r\n";
      $header.= "X-Mailer: PHP/" . phpversion() . " \r\n";
      $header.= "Mime-Version: 1.0 \r\n";
      $header.= "Content-Type: text/plain";

      $mensaje = "Este mensaje fue enviado por: $nombre \r\n";
      $mensaje.= "Su email es: $email \r\n";
      $mensaje.= "Mensaje: $consulta \r\n";
      $mensaje.= "Enviado el día: " . date("d/m/Y", time());

      $para = "Lucianooromero1@gmail.com";
      $asunto = "Probando envío de email";

      mail($para, $asunto, utf8_decode($mensaje), $header);

      header("Location: contact.html");
   }
}


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
