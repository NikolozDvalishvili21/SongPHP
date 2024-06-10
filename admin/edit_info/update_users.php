<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include '../../conn.php';

$data = json_decode(file_get_contents("php://input"), true);

$id = intval(mysqli_real_escape_string($conn, $data['id']));
$email = mysqli_real_escape_string($conn, $data['email']);
$password = mysqli_real_escape_string($conn, $data['password']);
$user_role = intval(mysqli_real_escape_string($conn, $data['roles']));

$query = "UPDATE user SET email = '$email', roles = $user_role, password = '$password' WHERE id = $id";
if (mysqli_query($conn, $query)) {
    echo json_encode(array('id' => $id, 'email' => $email, 'roles' => $user_role, 'password' => $password));
} else {
    echo json_encode(array('error' => 'Error updating user'));
}
?>
