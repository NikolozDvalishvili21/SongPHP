<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include_once '../../conn.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $postData = json_decode(file_get_contents("php://input"), true);

    if (
        isset($postData['album_title']) &&
        isset($postData['singer_id'])
    ) {
        $albumTitle = $postData['album_title'];
        $singerId = $postData['singer_id'];

        $query = "INSERT INTO albums (title, singer_id) VALUES ('$albumTitle', '$singerId')";

        if (mysqli_query($conn, $query)) {
            echo json_encode(['message' => 'Album uploaded successfully']);
        } else {
            echo json_encode(['error' => mysqli_error($conn)]);
        }
    } else {
        echo json_encode(['error' => 'Required fields are missing']);
    }
} else {
    echo json_encode(['error' => 'Invalid request method']);
}

mysqli_close($conn);
?>
