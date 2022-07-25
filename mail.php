<?php

if(isset($_POST["General"])){

    $formGeneral = $_POST["General"];

    $nombre     = $formGeneral["name"];
    $apellido   = $formGeneral["lastname"];
    $email      = $formGeneral["email"];
    $consulta   = $formGeneral["query"];
 
    if(isset($nombre) || isset($apellido) || isset($email) || isset($consulta)){
 
        $header = getHeader();

        $mensaje = "Este mensaje fue enviado por: $nombre \r\n";
        $mensaje.= "Su email es: $email \r\n";
        $mensaje.= "Mensaje: $consulta \r\n";
        $mensaje.= "Enviado el día: " . date("d/m/Y", time());
        
        $asunto = "Probando envío de email";
    
        sendEmail($email, $asunto, $mensaje, $header);
        
    }
}

if(isset($_POST["JoinUs"])){

    $formJoinUs  = $_POST["JoinUs"]; 

    $nombre     = $formJoinUs["name"];
    $apellido   = $formJoinUs["lastname"];
    $email      = $formJoinUs["email"];
    $dni        = $formJoinUs["dni"];
    $telefono   = $formJoinUs["cellphone"];
    $calle      = $formJoinUs["adress"];
    $nro        = $formJoinUs["nro"];
    $piso       = $formJoinUs["floor"];
    $depto      = $formJoinUs["apartment"]; 
    $puesto     = $formJoinUs["position"];
    $pierna     = $formJoinUs["leg"];
    $encontrado = $formJoinUs["find"];
    $foto       = $formJoinUs["photo"];

    $header = getHeader($email);

    //Falta armar el mensaje

    $this->sendEmail($email, $asunto, $mensaje, $header);
    
}

function getHeader(){

    $header = "From: lucianooromero1@gmail.com \r\n";
    $header.= "X-Mailer: PHP/" . phpversion() . " \r\n";
    $header.= 'Mime-Version: 1.0 \r\n';
    $header.= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
 
    return $header;
}

function sendEmail($para, $asunto, $mensaje, $header){
    var_dump(mail($para, $asunto, utf8_decode($mensaje), $header));
        
    //header("Location: contact.html");
}