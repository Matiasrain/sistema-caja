<?php
include 'conexion.php';

$codBco = $_POST['codigo-bco'];
$codSuc = $_POST['sucursal-bco'];

$sql = "DELETE FROM bancos WHERE COD_BCO = '$codBco' AND SUC_BCO = '$codSuc'";

if ($conn->query($sql) === TRUE) {
  echo "<script>
    alert('Banco eliminado correctamente');
  </script>";
} else {
  echo "Error al eliminar los datos del banco: " . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>