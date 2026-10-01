<?php

declare(strict_types=1);

require_once __DIR__ . '/bootstrap.php';

$method = $_SERVER['REQUEST_METHOD'];

$db = getDatabase();


/*
 * POST /api/proposals
 *
 * Public endpoint.
 *
 * Creates a new proposal.
 */
if ($method === 'POST') {

    $data = getJsonBody();

    $name = trim($data['name'] ?? '');
    $organisation = trim($data['organisation'] ?? '');
    $email = trim($data['email'] ?? '');
    $purpose = trim($data['purpose'] ?? '');

    if (
        $name === '' ||
        $organisation === '' ||
        $email === '' ||
        $purpose === ''
    ) {
        jsonResponse([
            'error' => 'All fields are required'
        ], 400);
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        jsonResponse([
            'error' => 'Invalid email address'
        ], 400);
    }

    $id = generateUuid();

    $stmt = $db->prepare(
        'INSERT INTO proposals
        (id, name, organisation, email, purpose)
        VALUES
        (:id, :name, :organisation, :email, :purpose)'
    );

    $stmt->execute([
        ':id' => $id,
        ':name' => $name,
        ':organisation' => $organisation,
        ':email' => $email,
        ':purpose' => $purpose,
    ]);

    jsonResponse([
        'message' => 'Proposal submitted successfully'
    ], 201);
}


/*
 * Everything below this point requires admin authentication.
 */
// requireAdmin();


/*
 * GET /api/proposals
 *
 * Get all proposals.
 */
if ($method === 'GET') {

    $stmt = $db->query(
        'SELECT
            id,
            name,
            organisation,
            email,
            purpose,
            created_at
         FROM proposals
         ORDER BY created_at DESC'
    );

    $proposals = $stmt->fetchAll();

    jsonResponse([
        'data' => $proposals
    ]);
}


/*
 * DELETE /api/proposal
 *
 * Delete multiple proposals.
 *
 * Body:
 *
 * {
 *   "post_id": [
 *      "id-1",
 *      "id-2"
 *   ]
 * }
 */
if ($method === 'DELETE') {

    $data = getJsonBody();

    $ids = $data['post_id'] ?? null;

    if (!is_array($ids) || count($ids) === 0) {
        jsonResponse([
            'error' => 'post_id must be a non-empty array'
        ], 400);
    }

    // Remove invalid/duplicate IDs
    $ids = array_values(
        array_unique(
            array_filter(
                $ids,
                fn ($id) =>
                    is_string($id) &&
                    preg_match(
                        '/^[0-9a-fA-F-]{36}$/',
                        $id
                    )
            )
        )
    );

    if (count($ids) === 0) {
        jsonResponse([
            'error' => 'No valid proposal IDs provided'
        ], 400);
    }

    $placeholders = implode(
        ',',
        array_fill(0, count($ids), '?')
    );

    $stmt = $db->prepare(
        "DELETE FROM proposals
         WHERE id IN ($placeholders)"
    );

    $stmt->execute($ids);

    jsonResponse([
        'message' => 'Proposals deleted',
        'deleted_count' => $stmt->rowCount()
    ]);
}


jsonResponse([
    'error' => 'Method not allowed'
], 405);