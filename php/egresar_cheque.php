<?php
include 'conexion.php';


if (isset($_POST['nro-che'])) {
    $nroChe = $_POST['nro-che'];
    $endChe = $_POST['endosante'];
    $codBco = $_POST['bco-numero'];
    $sucBco = $_POST['suc-numero'];
    $fecVto = $_POST['fec-vto'];
    $impChe = $_POST['importe'];
    $firChe = $_POST['firmante'];
    $cuitChe = $_POST['cuit'];
    $des_che = $_POST['dest-che'];
    $fechaOut = $_POST['fec-out'];
  
    $sql = "UPDATE cheques SET DES_CHE = '$des_che', FEC_OUT = '$fechaOut' WHERE NRO_CHE = '$nroChe'";
  
    //$sql = "INSERT INTO cheques (COD_COB, END_CHE, COD_BCO, SUC_BCO, NRO_CHE, FEC_VTO, IMP_CHE, FIR_CHE, CUIT_CHE, FEC_IN, TIP_VAL)
    //        VALUES ('$codCob', '$endChe', '$codBco', '$sucBco', '$nroChe', '$fecVto', '$impChe', '$firChe', '$cuitChe', NOW(),'CH')";
  
    if ($conn->query($sql) === TRUE) {
      //echo "Cheque guardado correctamente";
      echo "<script>
      alert('Cheque guardado correctamente');
      window.location.href = 'caja.php';
    </script>";
    } else {
      echo "Error al guardar el cheque: " . $conn->error;
    }
  } else {
    echo "No se recibieron datos del formulario";
  }
  
  $conn->close();
?>