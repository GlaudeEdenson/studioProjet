<?php
// Activer l'affichage des erreurs pour le débogage
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Définir les en-têtes pour le CORS et JSON
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

try {
    // Récupérer les données JSON envoyées dans le corps de la requête
    $data = json_decode(file_get_contents("php://input"), true);

    // Vérifiez si la méthode est POST
    if ($_SERVER["REQUEST_METHOD"] !== "POST") {
        echo json_encode(["success" => false, "message" => "Cette API accepte uniquement les requêtes POST."]);
        exit;
    }

    if (!$data) {
        echo json_encode(["success" => false, "message" => "Aucune donnée reçue ou erreur de décodage JSON."]);
        exit;
    }

    // Valider les champs
    if (empty($data["name"]) || empty($data["email"]) || empty($data["message"])) {
        echo json_encode(["success" => false, "message" => "Veuillez remplir tous les champs !"]);
        exit;
    }

    // Sanitize et valider les données
    $name = htmlspecialchars(trim($data["name"]));
    $email = filter_var(trim($data["email"]), FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars(trim($data["message"]));

    if (!$email) {
        echo json_encode(["success" => false, "message" => "Adresse e-mail invalide."]);
        exit;
    }

    // Préparer l'e-mail
    $destinaire = "edeninform76@gmail.com";
    $sujet = "Formulaire de contact |E-Studio|";
    $content = "Nom: $name\n";
    $content .= "Email: $email\n";
    $content .= "Message: $message\n";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Tenter d'envoyer l'email
    if (mail($destinaire, $sujet, $content, $headers)) {
        echo json_encode(["success" => true, "message" => "Mail envoyé avec succès"]);
    } else {
        echo json_encode(["success" => false, "message" => "Erreur lors de l'envoi de l'email"]);
    }
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Erreur serveur : " . $e->getMessage()]);
}
exit;
