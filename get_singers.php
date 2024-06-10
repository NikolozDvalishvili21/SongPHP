<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include_once './conn.php';

$query = "SELECT * FROM singers";
$result = mysqli_query($conn, $query);

$singers = [];

while ($row = mysqli_fetch_assoc($result)) {
    $singers[] = $row;
}

echo json_encode(['status' => 'success', 'singers' => $singers]);
?>
