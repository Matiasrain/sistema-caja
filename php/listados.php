<?php
include 'conexion_pdo.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fechaDesde = $_POST['fecha_desde'];
    $fechaHasta = $_POST['fecha_hasta'];
    // Obtener la opción seleccionada (si está definida)
    $opcion = isset($_POST['opcion']) ? $_POST['opcion'] : '';

    // Consulta SQL para obtener los ingresos
    $consulta = "SELECT DISTINCT cheques.END_CHE, cheques.COD_BCO, cheques.SUC_BCO,cheques.NRO_CHE,cheques.fec_vto, cheques.IMP_CHE FROM cheques WHERE cheques.fec_vto BETWEEN :fechaDesde AND :fechaHasta";

    // Si la opción es 'opcion2' (corte por cobrador), agregamos el filtro a la consulta
    if ($opcion === 'opcion2') {
        $consulta .= " ORDER BY cheques.END_CHE";
    }

    $stmt = $conexion->prepare($consulta);
    $stmt->bindParam(':fechaDesde', $fechaDesde);
    $stmt->bindParam(':fechaHasta', $fechaHasta);
    $stmt->execute();

    $cheques = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Devolver los resultados en formato JSON
    header('Content-Type: application/json');
    echo json_encode($cheques);
    exit;
}
?>