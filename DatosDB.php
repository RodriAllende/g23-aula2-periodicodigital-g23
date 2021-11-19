<?php
$host="localhost";
$usuario= "root";
$clave="123456";
$basededatos="buenasnuevas";


$conn =new mysqli($host, $usuario, $clave ,$basededatos);
    mysqli_query($conn ,"SET character_set_result=utf8");
    if($conn->connect_error){
        die("Database error: " .$conn->connect_error);
    }
    ?>