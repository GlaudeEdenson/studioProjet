<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"]== "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "glaudeedenson@gmail.com";
    $sujet = "Formulaire de contatct E-studio";
    $body = "Nom: $name\nEmail: $email\nMessage: $message";

    $headers = "From : $email";

    if (mail($to, $sujet, $body, $headers)) {
       echo json_encode(["Succes"=> true, "Message" => "Le mail a été envoyé avec succès"]); 
    }else{
        echo json_encode(["Succes"=> false, "Message" => "Echèc lors de l'envoie de l'email"]); 
    }
}else{
    echo json_encode(["succes" => true, "message" => "Methode non autorisé"]);
}