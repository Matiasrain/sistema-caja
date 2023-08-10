<?php
// Conexión a la base de datos
include 'conexion.php';

$codigoBanco = $_POST['codigoBanco'];
$codigoSucursal = $_POST['codigoSucursal'];

// Consulta para obtener los nombres de banco y sucursal según los códigos
$sql = "SELECT NOM_BCO, NOM_SUC FROM bancos WHERE COD_BCO = '$codigoBanco' AND SUC_BCO = '$codigoSucursal'";
$result = $conn->query($sql);

if ($result && $result->num_rows > 0) {
  // Obtener el resultado de la consulta
  $row = $result->fetch_assoc();
  
  // Obtener los nombres de banco y sucursal
  $nombreBanco = $row['NOM_BCO'];
  $nombreSucursal = $row['NOM_SUC'];
  
  // Devolver los nombres como una respuesta en formato JSON
  $response = array(
    'nombreBanco' => $nombreBanco,
    'nombreSucursal' => $nombreSucursal
  );
  
  echo json_encode($response);
} else {
  // No se encontró ningún registro que coincida con los códigos proporcionados
  $response = array(
    'nombreBanco' => "No se encontro",
    'nombreSucursal' => "No se encontro"
  );
  
  echo json_encode($response);
}

$conn->close();
?>