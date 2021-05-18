<?php
if (isset ($_POST['submit'])){
  $name=$_POST["name"];
  $email=$_POST["email"];
  $msg=$_POST["message"];

  $to='mahabharatkgp@gmail.com';
  $subject='form submission';
  $header="From:$name<$email>";
 
 
}

if(mail($to, $subject, $msg, $header)){
    echo" Sent Successfully";
  }
else{
  echo"somthing went wrong";
}
?>