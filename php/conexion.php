<?php
$servername = "localhost"; // Cambiar si el servidor de la base de datos no se encuentra en localhost
$username = "root"; // Reemplazar con el nombre de usuario de la base de datos
$password = "1234"; // Reemplazar con la contraseña de la base de datos
$dbname = "sistema_caja"; // Reemplazar con el nombre de la base de datos

// Crear una nueva conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar si hay errores en la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}



//echo "Conexión exitosa a la base de datos MySQL";

// Cerrar la conexión
//$conn->close();



?>