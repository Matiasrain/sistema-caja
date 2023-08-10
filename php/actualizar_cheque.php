<?php
include 'conexion.php';

$codBco = $_POST['bco-numero'];
$sucBco = $_POST['suc-numero'];
$nroChe = $_POST['num_cheque'];
$endChe = $_POST['endo-nombre'];
$fecVto = $_POST['fec-vto'];
$impChe = $_POST['imp-che'];
$firChe = $_POST['fir-che'];
$cuitChe = $_POST['cuit-che'];
$des_che = $_POST['destino'];
$fecha_rech = $_POST['fecha-rech'];
//$cob_rech = $_POST['fecha-cob-rech'];
$observacion = $_POST['obs'];

//$sql = "UPDATE cheques SET (COD_BCO, END_CHE, COD_BCO, SUC_BCO, NRO_CHE, FEC_VTO, IMP_CHE, FIR_CHE, CUIT_CHE, TIP_VAL,DES_CHE,FECH_RECH,OBS_RECH)
  //      VALUES ('$codBco', '$endChe', '$codBco', '$sucBco', '$nroChe', '$fecVto', '$impChe', '$firChe', '$cuitChe','CH','$des_che','$fecha_rech','$fecha_rech','$observacion')";

  $sql = "UPDATE cheques SET DES_CHE = '$des_che', FEC_RECH = '$fecha_rech', OBS_RECH = '$observacion' WHERE NRO_CHE = '$nroChe'";


//echo $sql;

if ($conn->query($sql) === TRUE) {
  //echo "Cheque guardado correctamente";
  echo "<script>
  alert('Cheque guardado correctamente');
  window.location.href = '../ingreso_rechazados.html';
 
</script>";
} else {
  echo "Error al guardar el cheque: " . $conn->error;
}

$conn->close();
?>