<?php

require_once __DIR__ . '/bootstrap.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse([
        'error' => 'Method not allowed'
    ], 405);
}

session_unset();
session_destroy();

jsonResponse([
    'message' => 'Logged out successfully'
]);