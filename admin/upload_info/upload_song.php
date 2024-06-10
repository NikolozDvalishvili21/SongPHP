<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include_once '../../conn.php';

// შევამოწმოთ თუ მეთოდი არის POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // ბაზის მოპოვება
    $postData = json_decode(file_get_contents("php://input"), true);

    // შევამოწმოთ თუ ეს field-ები არსებობს
    if (
        isset($postData['songTitle']) &&
        isset($postData['duration']) &&
        isset($postData['singerId']) &&
        isset($postData['albumId'])
    ) {
        $songTitle = $postData['songTitle'];
        $duration = $postData['duration'];
        $singerId = $postData['singerId'];
        $albumId = $postData['albumId'];

        
        $query = "INSERT INTO songs (SongName, Duration, singer_id, album_id) VALUES ('$songTitle', '$duration', '$singerId', '$albumId')";

        if (mysqli_query($conn, $query)) {
            echo json_encode(['message' => 'Song uploaded successfully']);
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
