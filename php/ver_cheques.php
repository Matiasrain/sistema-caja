
<?php
 
include 'conexion.php';

// Consulta para obtener todas las filas de la tabla bancos
$sql = "SELECT * FROM cheques WHERE FEC_RECH is null AND DES_CHE is not null AND FEC_OUT is not null";
$result = $conn->query($sql);

$cheques = array();

if ($result && $result->num_rows > 0) {
while($row = $result->fetch_assoc()) {

  //$nom_suc = str_replace('\\', ' ', $row['NOM_SUC']);

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
    //prueba
    'dest_che' => $row['DES_CHE'],
    'fec_out' => $row['FEC_OUT'],
    //fecha rechazados
    'fec_rech' => $row['FEC_RECH']
  );

  $cheques[] = $cheque;
}
} else {
  $cheques = array();
 // echo "<tr><td colspan='4'>No se encontraron filas en la tabla cobrador.</td></tr>";
}

echo json_encode($cheques, JSON_UNESCAPED_UNICODE);

$conn->close();
?>