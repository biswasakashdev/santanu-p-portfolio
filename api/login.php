<?php

declare(strict_types=1);

require_once __DIR__ . '/bootstrap.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse([
        'error' => 'Method not allowed'
    ], 405);
}

$data = getJsonBody();

$username = $data['username'] ?? '';
$password = $data['password'] ?? '';

if ($username === '' || $password === '') {
    jsonResponse([
        'error' => 'Username and password are required'
    ], 400);
}

$adminUsername = getenv('ADMIN_USERNAME');
$adminPassword = getenv('ADMIN_PASSWORD');

if (
    $adminUsername === false ||
    $adminPassword === false
) {
    error_log('Admin credentials are not configured');

    jsonResponse([
        'error' => 'Internal server error'
    ], 500);
}

$usernameValid = hash_equals(
    $adminUsername,
    $username
);

$passwordValid = hash_equals(
    $adminPassword,
    $password
);

if (!$usernameValid || !$passwordValid) {
    jsonResponse([
        'error' => 'Invalid username or password'
    ], 401);
}

// Prevent session fixation
session_regenerate_id(true);

$_SESSION['admin_authenticated'] = true;

jsonResponse([
    'message' => 'Login successful'
]);