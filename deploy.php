<?php
// Simple Deployment Script for GitHub Webhooks
// Upload this to your public_html folder

// Configuration
$secret = 'CapiZapallarSecretKey'; // Can be anything
$deployPath = '/home/wwwcapns/public_html';

// Verify Signature
$signature = $_SERVER['HTTP_X_HUB_SIGNATURE'] ?? '';
$payload = file_get_contents('php://input');

if (!$signature) {
    header('HTTP/1.0 403 Forbidden');
    die('No signature provided.');
}

list($algo, $hash) = explode('=', $signature, 2);
$payloadHash = hash_hmac($algo, $payload, $secret);

if ($hash !== $payloadHash) {
    header('HTTP/1.0 403 Forbidden');
    die('Invalid signature.');
}

// Deploy
echo "Deploying to $deployPath...\n";
chdir($deployPath);
exec('git pull origin main 2>&1', $output);
print_r($output);
echo "\nDone.";
?>
