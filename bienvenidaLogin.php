<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Datos Formulario</title>
    <meta http-equiv="Refresh" content="5;URL=index.html">
    <link rel="stylesheet" href="css\formulario.css">

</head>
<body>

<?php

//Incluimos los datos de conexión y las funciones.


include("DatosDB.php");
$conexion = new mysqli($host,$usuario,$clave,$basededatos);
if ($conexion->connect_errno) {
    echo "ERROR al conectar con la DB.";
    exit;
}

if(isset($_POST['correo'])){

    // 3. Variables $_POST[]
    $u = $_POST['correo'];
    $c =$_POST['password']; 

    if($u == "" || $_POST['password'] == null){ // Validamos que ningún campo quede vacío
        echo "<script>alert('Error: usuario y/o clave vacios!!');</script>"; // Se utiliza Javascript dentro de PHP
    }else{
        // 4. Cadena de SQL
        $sql =( " SELECT * FROM usuario WHERE CorreoElectronico='$u' AND Clave ='$c' " );

        // 5. Ejecuto cadena query()
        if(!$consulta = $conexion->query($sql)){
            echo "ERROR: no se pudo ejecutar la consulta!";
        }else{

            // 6. Cuento registros obtenidos del select. 
            // Como el nombre de usuario en la clave primaria no debería de haber mas de un registro con el mismo nombre.
            $filas = mysqli_num_rows($consulta);

            // 7. Comparo cantidad de registros encontrados
            if($filas == 0){
                echo "<script>alert('Error: usuario y/o clave incorrectos, Intente nuevamente');</script>";
                header('login.php');
            }else{
                echo "<script>alert('Usted se ha logueado correctamente, presione aceptar para continuar');</script>";
            }
        }

        // 4. Cadena de SQL
        $sql =( " SELECT Nombre, Apellido FROM usuario WHERE CorreoElectronico='$u' AND Clave ='$c' " );

        // 5. Ejecuto cadena query()
        if(!$consulta = $conexion->query($sql)){
            echo "ERROR: no se pudo ejecutar la consulta!";
        }else{

            // 6. Cuento registros obtenidos del select. 
            // Como el nombre de usuario en la clave primaria no debería de haber mas de un registro con el mismo nombre.
            $filas = mysqli_num_rows($consulta);

            // 7. Comparo cantidad de registros encontrados
            if($filas == 0){
                echo "<script>alert('Error: usuario y/o clave incorrectos, Intente nuevamente');</script>";
            }else{
  
                $resultado= mysqli_query($conexion,$sql);
                if($resultado) {
                    while($row=$resultado->fetch_array()){
                        $nombre= $row['Nombre'];
                        $apellido=$row['Apellido'];

                        echo "<center> <h1>Bienvenido $nombre $apellido a </h1></center><br><br> ";

                    }
                }

            
            }



            

        }
    }
}





?>

    

<center><img src="images/logoparaamarillo.png" alt="logo" width="50%"></center>
<br>




<center> <h4>Serás redirigido en unos segundos...</h4></center>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <!--<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"
        integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"
        integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn"
        crossorigin="anonymous"></script>
    <!-- Waypoints -->
    <script src="js/jquery.waypoints.min.js"></script>
    <!-- Main -->
    <script src="js/main.js"></script>

</body>

</html>