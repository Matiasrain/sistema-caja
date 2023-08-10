<?php
include 'conexion.php';
// Obtener los datos enviados por la solicitud AJAX
$codBco = $_POST['codigo-bco'];
$codSuc = $_POST['sucursal-bco'];
$nomBco = $_POST['nombre-bco'];
$nomSuc = $_POST['nombre-suc'];

// Consulta SQL para verificar si el código de cobrador ya existe
$consultaExiste = "SELECT * FROM bancos WHERE COD_BCO = '$codBco'";
$resultadoExiste = $conn->query($consultaExiste);


if ($resultadoExiste->num_rows > 0) {
  // El código de cobrador ya existe, devolver un mensaje de error
  $response = array('error' => true, 'message' => 'El código de Banco ya existe. No se puede guardar.');
  echo json_encode($response);
} else {
  // El código de cobrador no existe, realizar la inserción
  $sql = "INSERT INTO bancos (COD_BCO, NOM_BCO, SUC_BCO , NOM_SUC)
          VALUES ('$codBco', '$nomBco', '$codSuc', '$nomSuc')";

  if ($conn->query($sql) === TRUE) {
    $response = array('error' => false, 'message' => 'Banco guardado correctamente');
    echo json_encode($response);
  } else {
    $response = array('error' => true, 'message' => 'Error al guardar los datos del Banco: ' . $conn->error);
    echo json_encode($response);
  }
}

// Cerrar la conexión
$conn->close();
?>