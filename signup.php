<?php
// სესიით ინფორმაციას ვინახავთ ცვლადებში.
session_start();
// აძლევს უფლებას ფრონტს ბექთან კავშირის ბლოკირებული უფლებების გარეშე
// ლოკალჰოსტიდან იღებს request-ებს
header('Access-Control-Allow-Origin: http://localhost:3000');
// რომელი HTTP მეთოდების გამოყენება შეგვიძლია ფრონტიდან
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include_once './conn.php'; 

// თუ მეთოდი არის პოსტი მაშინ გაეშვას პროგრამა.
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // ფრონტიდან გამოგზავნილ JSON ბაზას ინახავს $data-ში
    $data = json_decode(file_get_contents('php://input'), true);

    // გამოვყოფთ იმეილებს და პაროლებს დატადან და თრიმით whitespace-ბს ვაშორებთ
    $email = isset($data['email']) ? trim($data['email']) : '';
    $password = isset($data['password']) ? trim($data['password']) : '';

    if (empty($email) || empty($password)) {
        echo json_encode(['status' => 'error', 'message' => 'All fields are required.']);
        exit();
    }

    // ვჰეშავთ პაროლებს
    // $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    // ვამოწმებთ თუ არსებობს შეყვანილი იმეილი ბაზაში.
    $query = "SELECT * FROM user WHERE email = '$email'";
    $result = mysqli_query($conn, $query);

    // ვამოწმებთ თუ ქვაერიმ row დააბრუნა ესეიგი ეს იუზერი არსებობს ბაზაში.
    if (mysqli_num_rows($result) > 0) {
        echo json_encode(['status' => 'error', 'message' => 'Email is already registered.']);
    } else {
        $insertQuery = "INSERT INTO user (email, password) VALUES ('$email', '$password')";

        if (mysqli_query($conn, $insertQuery)) {
            echo json_encode(['status' => 'success', 'message' => 'User registered successfully.']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Error: ' . mysqli_error($conn)]);
        }
    }
    exit();
}
?>
