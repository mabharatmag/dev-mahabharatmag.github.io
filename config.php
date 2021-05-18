<?php 

$server = "Localhost via UNIX socket";
$username = "satyajit";
$password = 123456;
$database = "mahabhar_comments";

$conn = mysqli_connect($server, $username, $password, $database);

if (!$conn) { // If Check Connection
    die("<script>alert('Connection Failed.')</script>");
}

?>