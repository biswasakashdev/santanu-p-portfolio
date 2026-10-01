<?php

declare(strict_types=1);

session_start();

header('Content-Type: application/json; charset=utf-8');


function jsonResponse(
    mixed $data,
    int $statusCode = 200
): never {
    http_response_code($statusCode);

    echo json_encode(
        $data,
        JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
    );

    exit;
}


function getJsonBody(): array
{
    $body = file_get_contents('php://input');

    if ($body === false || trim($body) === '') {
        return [];
    }

    $data = json_decode($body, true);

    if (!is_array($data)) {
        jsonResponse([
            'error' => 'Invalid JSON body'
        ], 400);
    }

    return $data;
}


function requireAdmin(): void
{
    if (
        !isset($_SESSION['admin_authenticated']) ||
        $_SESSION['admin_authenticated'] !== true
    ) {
        jsonResponse([
            'error' => 'Unauthorized'
        ], 401);
    }
}


function generateUuid(): string
{
    $data = random_bytes(16);

    // UUID version 4
    $data[6] = chr((ord($data[6]) & 0x0f) | 0x40);

    // RFC 4122 variant
    $data[8] = chr((ord($data[8]) & 0x3f) | 0x80);

    return vsprintf(
        '%s%s-%s-%s-%s-%s%s%s',
        str_split(bin2hex($data), 4)
    );
}


function getDatabase(): PDO
{
    $host = getenv('DB_HOST');
    $port = getenv('DB_PORT') ?: '3306';
    $name = getenv('DB_NAME');
    $user = getenv('DB_USER');
    $password = getenv('DB_PASSWORD');

    if (
        !$host ||
        !$name ||
        !$user ||
        $password === false
    ) {
        error_log('Database environment variables are missing');

        jsonResponse([
            'error' => 'Internal server error'
        ], 500);
    }

    try {
        return new PDO(
            "mysql:unix_socket=/run/mysqld/mysqld.sock;dbname={$name};charset=utf8mb4",
            $user,
            $password,
            [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ]
        );
    } catch (PDOException $e) {
        error_log($e->getMessage());

        jsonResponse([
            'error' => 'Internal server error'
        ], 500);
    }
}