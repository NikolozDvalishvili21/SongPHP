<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include_once '../../conn.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $postData = json_decode(file_get_contents("php://input"), true);

    if (
        isset($postData['firstName']) &&
        isset($postData['lastName']) &&
        isset($postData['description']) &&
        isset($postData['age']) &&
        isset($postData['topAlbum'])
    ) {
        $firstName = $postData['firstName'];
        $lastName = $postData['lastName'];
        $description = $postData['description'];
        $age = $postData['age'];
        $topAlbum = $postData['topAlbum'];

        $query = "INSERT INTO singers (FirstName, LastName, Description, Age, Top_Album) VALUES ('$firstName', '$lastName', '$description', '$age', '$topAlbum')";

        if (mysqli_query($conn, $query)) {
            echo json_encode(['message' => 'Singer uploaded successfully']);
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
