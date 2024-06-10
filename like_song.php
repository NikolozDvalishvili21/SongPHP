<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include_once './conn.php';

$data = json_decode(file_get_contents("php://input"));

if (isset($data->song_name)) {
    $songName = $data->song_name;

    $query = "UPDATE songs SET likes = likes + 1 WHERE SongName = '$songName'";
    $result = mysqli_query($conn, $query);

    if ($result) {
        // შეტანა likedsongs ცხრილში.
        $insertQuery = "INSERT INTO likedsongs (SongName) VALUES ('$songName')";
        $insertResult = mysqli_query($conn, $insertQuery);
        
        if ($insertResult) {
            echo json_encode(['status' => 'success', 'message' => 'Song liked successfully']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Failed to insert liked song']);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to like the song']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid input']);
}

$conn->close();
?>
