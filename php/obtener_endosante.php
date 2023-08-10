<?php
include 'conexion.php';

$nroCheque = $_POST['numero'];

// Consulta SQL para obtener el campo "END_CHE" a partir del "NRO_CHE"
$sql = "SELECT END_CHE,FEC_VTO,IMP_CHE,FIR_CHE,CUIT_CHE FROM cheques WHERE NRO_CHE = $nroCheque";
$resultado = $conn->query($sql);

if ($resultado !== false && $resultado->num_rows > 0) {
  $row = $resultado->fetch_assoc();
  $endCheque = $row['END_CHE'];
  $fecvtocheque = $row['FEC_VTO'];
  $impcheque = $row['IMP_CHE'];
  $fircheque = $row['FIR_CHE'];
  $cuitcheque = $row['CUIT_CHE'];
  echo $endCheque . " - " . $fecvtocheque . " - " . $impcheque . " - " . $fircheque . " - " . $cuitcheque;
} else {
  echo "Cheque no encontrado";
}

$conn->close();
?>