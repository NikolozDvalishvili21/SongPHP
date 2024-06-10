<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include_once './conn.php';

$query = "
    SELECT 
        songs.song_id,
        songs.SongName AS SongName,
        singers.FirstName,
        singers.LastName,
        albums.Title AS AlbumTitle,
        songs.Duration AS Duration
    FROM 
        songs
    JOIN 
        singers ON songs.singer_id = singers.singer_id
    JOIN 
        albums ON songs.album_id = albums.album_id
";
$result = mysqli_query($conn, $query);

$songs = [];

// while-ით შედეგში არსებულ ყველა row-ზე იტერაციას ვაკეთებ.
// ეს ფუნქცია იღებს შედეგების არსებულ ერეის, როგორც ასოციაციურ მასივს, სადაც key-ს არის სვეტების სახელები
// ფუნქციაში კი row-ებს ვამატებთ ერეიში.
while ($row = mysqli_fetch_assoc($result)) {
    $songs[] = $row;
}

echo json_encode(['status' => 'success', 'songs' => $songs]);
?>
