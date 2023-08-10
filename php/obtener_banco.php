<?php
include 'conexion.php';

$numeroBanco = $_POST['numeroBanco'];
$numeroSucursal = $_POST['numeroSucursal'];

//Esto es para  la parte de ingresar_cheque

// Consulta SQL para obtener el nombre del banco y de la sucursal
$sql = "SELECT NOM_BCO, NOM_SUC FROM bancos WHERE COD_BCO = $numeroBanco AND SUC_BCO = $numeroSucursal";
$resultado = $conn->query($sql);

if ($resultado !== false && $resultado->num_rows > 0) {
  $row = $resultado->fetch_assoc();
  $nombreBanco = $row['NOM_BCO'];
  $nombreSucursal = $row['NOM_SUC'];
  echo $nombreBanco . " - " . $nombreSucursal;
} else {
  echo "Banco no encontrado";
}




$conn->close();
?>
