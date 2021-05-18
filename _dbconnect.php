<?php
$server = "localhost:3306";
$username = "mahabhar_satyajit";
$password = "ankita193";
$database = "mahabhar_commentsl";

$conn = mysqli_connect($server, $username, $password, $database);
if (!$conn){
//     echo "success";
// }
// else{
    die("Error". mysqli_connect_error());
}

?>