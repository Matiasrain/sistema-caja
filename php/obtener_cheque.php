<?php
include 'conexion.php';

//$numeroCobrador = $_POST['cobrador-numero'];
$numeroCheque = $_POST['numero'];

// Consulta SQL para obtener el nombre del cobrador
$sql = "SELECT COD_BCO,SUC_BCO,END_CHE,FEC_VTO,IMP_CHE,FIR_CHE,CUIT_CHE FROM cheques WHERE NRO_CHE = $numeroCheque";
$resultado = $conn->query($sql);

if ($resultado !== false && $resultado->num_rows > 0) {
    $row = $resultado->fetch_assoc();
    $numeroBanco = $row['COD_BCO'];
    $numeroSucursal = $row['SUC_BCO'];
    $endche = $row['END_CHE'];
    $fecvto = $row['FEC_VTO'];
    $impche = $row['IMP_CHE'];
    $firche = $row['FIR_CHE'];
    $cuitche = $row['CUIT_CHE'];
    

    //echo $endche. " - " . $fecvto. " - " . $impche. " - " . $firche . " - " . $cuitche . " - ". $numeroBanco . " - " . $numeroSucursal;
    $respuesta = $endche. " - " . $fecvto. " - " . $impche. " - " . $firche . " - " . $cuitche . " - ". $numeroBanco . " - " . $numeroSucursal;
    echo $respuesta;


  } else {
    echo "Cobrador no encontrado";
  }

$conn->close();
?>