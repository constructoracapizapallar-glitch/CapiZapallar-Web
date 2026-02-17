<?php
// retell_proxy.php - Proxy seguro para iniciar llamadas con Retell AI
// Evita problemas de CORS al hacer la petición desde el mismo servidor

// Configuración
$RETELL_API_KEY = "key_598bdfd698134f603eb07d374774";
$RETELL_URL = "https://api.retellai.com/v2/create-web-call";

// CORS Headers (por si acaso, aunque sea same-origin)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Manejo de Preflight OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Solo permitir POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method Not Allowed"]);
    exit;
}

// Leer el JSON recibido
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE);

if (!isset($input['agentId'])) {
    http_response_code(400);
    echo json_encode(["error" => "Missing agentId"]);
    exit;
}

// Preparar los datos para Retell
$data = [
    "agent_id" => $input['agentId'],
    "metadata" => $input['metadata'] ?? []
];

// Iniciar CURL
$ch = curl_init($RETELL_URL);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer $RETELL_API_KEY",
    "Content-Type: application/json"
]);

// Ejecutar
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if (curl_errno($ch)) {
    http_response_code(500);
    echo json_encode(["error" => "CURL Error: " . curl_error($ch)]);
} else {
    http_response_code($httpCode);
    echo $response;
}

curl_close($ch);
?>
