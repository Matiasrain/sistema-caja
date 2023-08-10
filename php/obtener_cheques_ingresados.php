
<?php
include 'conexion.php';

$sql = "SELECT * FROM cheques WHERE FEC_OUT IS NULL";
$resultado = $conn->query($sql);

// if ($resultado->num_rows > 0) {
//   $cheques = array();
//   while ($row = $resultado->fetch_assoc()) {
//     $cheques[] = $row;
//   }
//   echo json_encode($cheques);
// } else {
//   echo json_encode(array());
// }
$cheques = array();

if ($resultado && $resultado->num_rows > 0) {
while($row = $resultado->fetch_assoc()) {


  $cheque = array(
    'cod_bco' => $row['COD_BCO'],
    'suc_bco' => $row['SUC_BCO'],
    'nro_che' => $row['NRO_CHE'],
    'fec_vto' => $row['FEC_VTO'],
    'fec_in' => $row['FEC_IN'],
    'imp_che' => $row['IMP_CHE'],
    'end_che' => $row['END_CHE'],
    'cod_cob' => $row['COD_COB'],
    'fir_che' => $row['FIR_CHE'],
    'cuit_che' => $row['CUIT_CHE'],
  );

  $cheques[] = $cheque;
}
} else {
echo "<tr><td colspan='4'>No se encontraron filas en la tabla.</td></tr>";
}

echo json_encode($cheques, JSON_UNESCAPED_UNICODE);
$conn->close();
?>
