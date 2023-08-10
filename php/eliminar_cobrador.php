<?php
include 'conexion.php';

$codCob = $_POST['codigo-cob'];
$nomCob = $_POST['nombre-cob'];

$sql = "DELETE FROM cobrador WHERE COD_COB = '$codCob' AND NOM_COB = '$nomCob'";

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