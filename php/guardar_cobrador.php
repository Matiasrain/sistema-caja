<?php

include 'conexion.php';

// Obtener los datos enviados por la solicitud AJAX
$codCob = $_POST['codigo-cob'];
$nomCob = $_POST['nombre-cob'];

// Consulta SQL para verificar si el código de cobrador ya existe
$consultaExiste = "SELECT * FROM cobrador WHERE COD_COB = '$codCob'";
$resultadoExiste = $conn->query($consultaExiste);

if ($resultadoExiste->num_rows > 0) {
  // El código de cobrador ya existe, devolver un mensaje de error
  $response = array('error' => true, 'message' => 'El código de cobrador ya existe. No se puede guardar.');
  echo json_encode($response);
} else {
  // El código de cobrador no existe, realizar la inserción
  $sql = "INSERT INTO cobrador (COD_COB, NOM_COB) 
          VALUES ('$codCob', '$nomCob')";

  if ($conn->query($sql) === TRUE) {
    $response = array('error' => false, 'message' => 'Cobrador guardado correctamente');
    echo json_encode($response);
  } else {
    $response = array('error' => true, 'message' => 'Error al guardar los datos del cobrador: ' . $conn->error);
    echo json_encode($response);
  }
}

// Cerrar la conexión
$conn->close();

?>