<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include_once $_SERVER['DOCUMENT_ROOT'] . '/Project/conn.php';



$query = "SELECT * FROM likedsongs";
$result = mysqli_query($conn, $query);

$likedsongs = array();
while ($row = mysqli_fetch_assoc($result)) {
    $likedsongs[] = $row;
}

echo json_encode($likedsongs);

$conn->close();
?>
