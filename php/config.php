<?php 
    $conn = mysqli_connect("localhost", "root", "", "Chatsphere");
    if(!$conn){
        echo "Database not connected" . mysqli_connect_error();
    }
?>