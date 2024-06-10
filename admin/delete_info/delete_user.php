<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include_once '../../conn.php';

/// შევამოწმოთ თუ ID გადაეცა POST-ით
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($request->id)) {
    $id = $request->id;

    $query = "DELETE FROM user WHERE id = $id";

    if (mysqli_query($conn, $query)) {
        echo json_encode(['message' => 'Record deleted successfully']);
    } else {
        echo json_encode(['error' => mysqli_error($conn)]);
    }

    mysqli_close($conn);
} else {
    echo json_encode(['error' => 'ID not provided']);
}

?>
