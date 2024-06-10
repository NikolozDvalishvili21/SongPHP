<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// თუ მეთოდი არის OPTIONS, მაშინ გამოიტანოს OK.
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

include_once './conn.php';

$data = json_decode(file_get_contents("php://input"), true);

// ვამოწმებთ თუ 'searchTerm' არსებობს JSON ბაზაში
if (isset($data['searchTerm'])) {
    // SQL INJECTION-ების ასაცილებლად special character-ების გამოყენების უფლებას ვზღუდავთ
    $searchTerm = mysqli_real_escape_string($conn, $data['searchTerm']);

    $query = "SELECT songs.SongName, songs.Duration, albums.title AS AlbumTitle, singers.FirstName, singers.LastName
    FROM songs
    JOIN albums ON songs.album_id = albums.album_id
    JOIN singers ON albums.singer_id = singers.singer_id
    WHERE songs.SongName LIKE '%$searchTerm%'
    ";

    $result = mysqli_query($conn, $query);
    $songs = [];

    // თუ შესრულდა მაშინ ჩამოუვლის ყველა row-ს და ამატებს songs ერეიში
    if ($result) {
        while ($row = mysqli_fetch_assoc($result)) {
            $songs[] = $row;
        }

        if (count($songs) > 0) {
            echo json_encode(['status' => 'success', 'songs' => $songs]);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'No songs found']);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Query failed']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid input']);
}

?>
