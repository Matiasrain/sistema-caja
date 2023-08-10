<?php
$servername = "localhost"; // Cambiar si el servidor de la base de datos no se encuentra en localhost
$username = "root"; // Reemplazar con el nombre de usuario de la base de datos
$password = "1234"; // Reemplazar con la contraseña de la base de datos
$dbname = "sistema_caja"; // Reemplazar con el nombre de la base de datos

try {
    // Crear una nueva conexión a la base de datos utilizando PDO
    $conexion = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // En caso de error, muestra el mensaje de error y detiene la ejecución del script
    die("Error de conexión a la base de datos: " . $e->getMessage());
}
?>