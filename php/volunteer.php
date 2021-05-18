<?php
if (isset ($_POST['submit'])){
  $name1=$_POST["name"];
  $name2=$_POST["number"];
  $email=$_POST["email"];
  $msg1=$_POST["message1"];
  $msg2=$_POST["message2"];
  $msg3=$_POST["message3"];
  

  $to='mahabharatkgp@gmail.com';
  $subject='volunteer';
  $header="From:$name<$email>";
  $message =" 
  কেন যুক্ত হতে চান? 
  ".$msg1;

  $message .="  
  কিভাবে সাহায্য করবেন?
  ".$msg2;

   $message .=" 
   আপনার মতামত
    ".$msg3;

    $message .=" 
   WhatsApp Number
    ".$name2;
    
 
}

if(mail($to, $subject,  $message,  $header)){
    echo" Sent Successfully";
  }
else{
  echo"somthing went wrong";
}
?>