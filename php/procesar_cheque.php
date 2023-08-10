<?php
include 'conexion.php';

$codCob = $_POST['cobrador-numero'];
$endChe = $_POST['endosante'];
$codBco = $_POST['bco-numero'];
$sucBco = $_POST['suc-numero'];
$nroChe = $_POST['nro-che'];
$fecVto = $_POST['fec-vto'];
$impChe = $_POST['importe'];
$firChe = $_POST['firmante'];
$cuitChe = $_POST['cuit'];

// Consulta para verificar si el número de cheque ya existe
$consultaExiste = "SELECT * FROM cheques WHERE NRO_CHE = '$nroChe'";
$resultadoExiste = $conn->query($consultaExiste);

if ($resultadoExiste->num_rows > 0) {
  // El número de cheque ya existe, devuelve una respuesta de error en JSON
  $response = array('error' => true, 'message' => 'El número de cheque ya existe. No se puede guardar.');
  echo json_encode($response);
} else {
  // El número de cheque no existe, realiza la inserción
  $sql = "INSERT INTO cheques (COD_COB, END_CHE, COD_BCO, SUC_BCO, NRO_CHE, FEC_VTO, IMP_CHE, FIR_CHE, CUIT_CHE, FEC_IN, TIP_VAL)
          VALUES ('$codCob', '$endChe', '$codBco', '$sucBco', '$nroChe', '$fecVto', '$impChe', '$firChe', '$cuitChe', NOW(),'CH')";

  if ($conn->query($sql) === TRUE) {
    // Cheque guardado correctamente, devuelve una respuesta de éxito en JSON
    $response = array('error' => false, 'message' => 'Cheque guardado correctamente');
    echo json_encode($response);
  } else {
    // Error al guardar el cheque, devuelve una respuesta de error en JSON
    $response = array('error' => true, 'message' => 'Error al guardar el cheque, el cobrador o el banco no existe'); //. $conn->error);
    echo json_encode($response);
  }
}

$conn->close();




?>
