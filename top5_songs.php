<?php
// აძლევს უფლებას ფრონტს ბექთან კავშირის ბლოკირებული უფლებების გარეშე

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include_once './conn.php';

$query = "
    SELECT 
        songs.SongName,
        singers.FirstName,
        singers.LastName,
        albums.Title AS AlbumTitle,
        songs.Duration
    FROM 
        songs
    JOIN 
        singers ON songs.singer_id = singers.singer_id
    JOIN 
        albums ON songs.album_id = albums.album_id
    LIMIT 4
";
$result = mysqli_query($conn, $query);

// ამ ერეიში წამოღებულ მონაცემს ვინახავ
$songs = [];

// while-ით შედეგში არსებულ ყველა row-ზე იტერაციას ვაკეთებ.
// ეს ფუნქცია იღებს შედეგების არსებულ ერეის, როგორც ასოციაციურ მასივს, სადაც key-ს არის სვეტების სახელები
// ფუნქციაში კი row-ებს ვამატებთ ერეიში.
while ($row = mysqli_fetch_assoc($result)) {
    $songs[] = $row;
}

echo json_encode(['status' => 'success', 'songs' => $songs]);
?>
