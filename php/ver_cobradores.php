
<?php
// Conexión a la base de datos
include 'conexion.php';
  // Consulta para obtener todas las filas de la tabla bancos
  $sql = "SELECT * FROM cobrador";
  $result = $conn->query($sql);

  $cobradores = '[';

if ($result && $result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $cobradores= $cobradores.
    '{"cod_cob":"'. $row['COD_COB']. '","nom_cob":"'.$row['NOM_COB']. '"},';
  }
} else {
  echo "<tr><td colspan='4'>No se encontraron filas en la tabla cobrador.</td></tr>";
}


$cobradores = substr($cobradores, 0, -1)."]";

echo $cobradores;

  $conn->close();
?>