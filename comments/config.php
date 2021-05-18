<?php 

$server = "162.214.80.40";
$username = "mahabhar_satyajit";
$password = "ankita193";
$database = "mahabhar_comments";

$conn = mysqli_connect($server, $username, $password, $database);

if (!$conn) { // If Check Connection
    die("<script>alert('Connection Failed.')</script>");
}

?>