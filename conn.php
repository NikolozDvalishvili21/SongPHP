<?php 
    $server = "localhost";
    $user = "root";
    $password = "";
    $database = "songproject";

    $conn = mysqli_connect($server, $user, $password, $database);
    // echo "<pre>";
    // echo print_r($conn);
    // echo "</pre>";


    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }