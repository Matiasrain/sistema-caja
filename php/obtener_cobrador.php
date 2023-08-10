<?php
include 'conexion.php';

//$numeroCobrador = $_POST['cobrador-numero'];
$numeroCobrador = $_POST['numero'];

// Consulta SQL para obtener el nombre del cobrador
$sql = "SELECT NOM_COB FROM cobrador WHERE COD_COB = $numeroCobrador";
$resultado = $conn->query($sql);


if ($resultado !== false && $resultado->num_rows > 0) {
    $row = $resultado->fetch_assoc();
    $nombreCobrador = $row['NOM_COB'];
    echo $nombreCobrador;
  } else {
    echo "Cobrador no encontrado";
  }

$conn->close();
?>