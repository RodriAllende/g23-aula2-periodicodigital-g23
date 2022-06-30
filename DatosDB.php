<?php
$host="localhost";
$usuario= "id17997375_root";
$clave="(8Cp@VFFL+f<O=QT";
$basededatos="id17997375_buenasnuevasbd";


$conn =new mysqli($host, $usuario, $clave ,$basededatos);
    mysqli_query($conn ,"SET character_set_result=utf8mb4_unicode_ci");
    if($conn->connect_error){
        die("Database error: " .$conn->connect_error);
    }
    ?>

