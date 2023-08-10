
<?php
       

              // Conexión a la base de datos
include 'conexion.php';
// Consulta para obtener todas las filas de la tabla bancos
$sql = "SELECT * FROM bancos";
$result = $conn->query($sql);

$bancos = array();

if ($result && $result->num_rows > 0) {
while($row = $result->fetch_assoc()) {

  $nom_suc = str_replace('\\', ' ', $row['NOM_SUC']);

  $banco = array(
    'cod_bco' => $row['COD_BCO'],
    'nom_bco' => $row['NOM_BCO'],
    'suc_bco' => $row['SUC_BCO'],
    'nom_suc' => $nom_suc
  );

  $bancos[] = $banco;
}
} else {
echo "<tr><td colspan='4'>No se encontraron filas en la tabla cobrador.</td></tr>";
}

echo json_encode($bancos, JSON_UNESCAPED_UNICODE);

$conn->close();
?>
