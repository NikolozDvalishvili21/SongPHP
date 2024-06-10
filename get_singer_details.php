<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include_once './conn.php';

// ვამოწმებთ თუ გადაცემულია singer_id
if (isset($_GET['singerId'])) {
    // int-ად გადავიყვანოთ
    $singerId = intval($_GET['singerId']);

    $sql = "SELECT * FROM singers WHERE singer_id = ?";
    // ვამზადებთ ქვაერის რომ ყველა column-ი გამოვიტანოთ
    // არ ვაჩენთ ID-ს შეტევებისგან თავის დასაცავად.
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $singerId);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $singer = $result->fetch_assoc();
        echo json_encode(['status' => 'success', 'singer' => $singer]);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Singer not found']);
    }

    $stmt->close();
} else {
    echo json_encode(['status' => 'error', 'message' => 'singerId not provided']);
}

$conn->close();
