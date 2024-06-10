<?php
// აძლევს უფლებას ფრონტს ბექთან კავშირის ბლოკირებული უფლებების გარეშე
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include_once './conn.php';

// კითხულობს JSON ბაზას HTTP POST-ში გაგზავნილს და აკონვერტირებს PHP ობჯექთად.
// როცა json_decode ვიყენებთ ძირითადად ობჯექთს ან ასოცირებულ ერეის გვიბრუნებს.
$data = json_decode(file_get_contents("php://input"));

// ვამოწმებ თუ song_name არსებობს JSON-ში
if (isset($data->song_name)) {
    $songName = $data->song_name;

     // $result-ში ვინახავთ ქვაერის შედეგს
    $query = "UPDATE songs SET likes = likes - 1 WHERE SongName = '$songName'";
    $result = mysqli_query($conn, $query);

    // თუ UPDATE წარმატებით შესრულდა შემდეგი ქვაერით ცხრილიდან ვშლით მონაცემს.
    if ($result) {
        $deleteQuery = "DELETE FROM likedsongs WHERE SongName = '$songName'";
        $deleteResult = mysqli_query($conn, $deleteQuery);
        
         // json_encode-ს გააქვს PHP array ან object value JSON string ფორმატში
        if ($deleteResult) {
               // status-ით მესიჯის სტატუსს ვუთითებთ, message-ით მესიჯი გამოგვაქ.
            echo json_encode(['status' => 'success', 'message' => 'Song unliked successfully']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Failed to delete unliked song']);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to unlike the song']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid input']);
}

$conn->close();

// <!-- {"status":"error","message":"Invalid input"} -->
?>
