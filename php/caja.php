<!DOCTYPE html>
<html>
<head>
  <title>Formulario de fecha</title>
  <link rel="stylesheet" type="text/css" href="../css/caja.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
  <link href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css" rel="stylesheet">
  <script>
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    // Si no ha iniciado sesión, redirigirlo a la página de login
    if (!isLoggedIn) {
      window.location.href = "../login.html";
    }
  </script>
</head>
<body>
  
  <!-- <header> -->
  <div class="main-container">
  <nav class="navbar navbar-expand-lg navbar-light w-100" style="background-color: #A30234;">
      <div class="container-fluid">
        <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link" href="../main.html"  id="dropdown2">
            <img src="../img/home.png" alt="Logo" style="width: 20px; height: 20px; margin-right: 5px;">
            INICIO
          </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="../img/cheque (2).png" alt="Logo" style="width: 25px; height: 25px; margin-right: 5px;">
            CAJA
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdown1">
              <li><a class="dropdown-item" href="caja.php">Caja</a></li>
              <li><a class="dropdown-item" href="../ingreso_rechazados.html">Ingreso de rechazados</a></li>
              <li><a class="dropdown-item" href="../cobranza_rechazados.html">Cobranza de rechazados</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="../img/stock-chart.png" alt="Logo" style="width: 20px; height: 20px; margin-right: 5px;">
              PARAMETROS
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdown2">
              <li><a class="dropdown-item" href="../bancos.html">Bancos</a></li>
              <li><a class="dropdown-item" href="../cobradores.html">Cobradores</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="../img/price-list.png" alt="Logo" style="width: 20px; height: 20px; margin-right: 5px;">
                LISTADOS
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdown2">
                <li><a class="dropdown-item" href="../carteradevalores.html">Cartera de valores</a></li>
              </ul>
            </li>
          <li class="nav-item">
          <button class="nav-link" onclick="cerrarSesion()" id="dropdown2">
            <img src="../img/exit.png" alt="Logo" style="width: 20px; height: 20px; margin-right: 5px;">
            SALIR
          </button>
          </li>
        </ul>
      </div>
    </nav>
    
    <div class="container">
        <div class="d-flex justify-content-between">
          <!--<a class="btn btn-primary" href="main.html">Volver</a>-->
          <!-- <a href="../main.html" class="btn btn-primary d-flex justify-content-center align-items-center" tabindex="-1" role="button" aria-disabled="true">Volver</a> -->

          <!--<h1 class="fecha">Caja del: <input type="date" id="fecha" name="fecha"></h1>-->
          <!-- <a href="login.html" class="btn btn-primary d-flex justify-content-center align-items-center" tabindex="-1" role="button" aria-disabled="true">Salir</a> -->
          
          
        </div>


        <!-- <div class="card mt-3">
          <div class="card-body">
        <form action="caja.php" method="POST" class="formcaja1">
            <h1 class="fecha">Caja del: <input type="date" id="fecha" name="fecha"></h1>
            <input type="submit" value="Consultar">
            </form>
      </div>
        </div> -->
        <div class="card mt-3 mb-3 border border-secondary">
  <div class="card-body d-flex justify-content-between align-items-center">
    <form action="caja.php" method="POST" class="formcaja1 d-flex" onsubmit="return validarFormulario()">
      <h1 class="fecha" style="margin-right: 10px;">Caja del: <input type="date" id="fecha" name="fecha"></h1>
      <input type="submit" value="Consultar" class="btn btn-secondary" >
      </div>
      <div id="mensaje-container" class="container" style="background-color: lightgray; padding: 20px;">
  <h2 style="margin-top: 20px; color: black;">Seleccione una fecha y presione "Consultar" para ver los resultados.</h2>

    </form>
  </div>
</div>



            <!--<button type="button" class="btn btn-primary" onclick="abrirVentana('../ingresar_cheque.html')">Ingresar cheque</button>-->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalIngresarCheque">Ingresar cheque</button>
             <!-- Modal para ingresar cheque -->
  <div class="modal fade" id="modalIngresarCheque" tabindex="-1" aria-labelledby="modalIngresarChequeLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <!-- Aquí se cargará el contenido de ingresar_cheque.html -->
        <div class="modal-body" id="modalBody">
          <!-- Contenido de la página "ingresar_cheque.html" se cargará aquí -->
          <div class="container">
  <h1 class="titulo">Alta de cheques</h1>

  <form action="procesar_cheque.php" method="POST" class="formulario" id="formulario-cheque">
    <div class="form-group">
      <label for="cobrador">Cobrador:</label>
      <div class="input-group">
        <!--<input type="number" id="cobrador-numero" name="cobrador-numero" class="form-control input-chico" placeholder="Número" required>-->
        <input type="number" id="cobrador-numero" name="cobrador-numero" class="form-control input-chico" placeholder="Número" required onchange="obtenerNombreCobrador()">
        <input type="text" id="cobrador-nombre" name="cobrador-nombre" class="form-control input-grande" placeholder="Nombre y Apellido" required>
      </div>
    </div>

    <div class="form-group">
      <label for="endosante">Endosante:</label>
      <input type="text" id="endosante" name="endosante" class="form-control input-grande" placeholder="Nombre y Apellido" required>
    </div>

    <div class="form-group">
      <label for="bco-numero">Banco:</label>
      <div class="input-group">
        <input type="number" id="bco-numero" name="bco-numero" class="form-control input-chico" placeholder="Número" required onchange="obtenerNombreBancoCaja()">
        <input type="number" id="suc-numero" name="suc-numero" class="form-control input-chico" placeholder="Sucursal" required onchange="obtenerNombreBancoCaja()">
        <input type="text" id="bco-nombre" name="bco-nombre" class="form-control input-grande" placeholder="Nombre del Banco" required>
      </div>
    </div>

    <div class="form-group">
      <label for="nro">Número:</label>
      <!--<input type="number" id="nro" name="nro" class="form-control input-grande" placeholder="Número" required>-->
      <input type="number" id="nro-cheque" name="nro-che" class="form-control input-chico" placeholder="Número" required onchange="obtenerNombreCobrador()">
      <input type="hidden" id="cobrador-nombre" name="cobrador-nombre" class="form-control input-grande">
    </div>

    <div class="form-group">
      <label for="fecha">Fecha de vencimiento:</label>
      <input type="date" id="fecha" name="fec-vto" class="form-control" required>
    </div>

    <div class="form-group">
      <label for="importe">Importe:</label>
      <input type="number" id="importe" name="importe" class="form-control" step="0.01" required>
    </div>

    <div class="form-group">
      <label for="firmante">Firmante:</label>
      <input type="text" id="firmante" name="firmante" class="form-control input-chico" placeholder="Firmante" required>
      <label for="cuit">CUIT:</label>
      <input type="text" id="cuit" name="cuit" class="form-control input-chico" placeholder="CUIT" required>
    </div>
    <br>

    <input type="submit" value="Aceptar" class="btn btn-primary">
    <!--<input type="button" value="Cancelar" onclick="window.location.href = 'php/caja.php';" class="btn btn-secondary">-->
    <input type="button" value="Cancelar" onclick="cerrarModal()" class="btn btn-secondary">
  </form>
</div>
        </div>
      </div>
    </div>
  </div>
           <!-- <button type="button" class="btn btn-danger" onclick="abrirVentana('../egresar_cheque.html')">Egresar cheque</button>
            <button type="button" class="btn btn-primary" onclick="abrirVentana('ingresar_documento.html')">Ingresar documento</button>-->
            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalEgresarCheque">Egresar cheque</button>
              <!-- Modal para ingresar cheque -->
  <div class="modal fade" id="modalEgresarCheque" tabindex="-1" aria-labelledby="modalEgresarChequeLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <!-- Aquí se cargará el contenido de Egresar_cheque.html -->
        <div class="modal-body" id="modalBody">
          <!-- Contenido de la página "Egresar_cheque.html" se cargará aquí -->
          <div class="container">
  <h1 class="titulo">Baja de cheques</h1>

  <form action="egresar_cheque.php" method="POST" class="formulario" id="formulario-cheque-egreso">
    <div class="form-group">
        <label for="bco-numero">Banco:</label>
        <div class="input-group">
        <input type="number" id="bco-numeroe" name="bco-numeroe" class="form-control input-chico" placeholder="Número" required onchange="obtenerNombreBancoEgreso()">
          <input type="number" id="suc-numeroe" name="suc-numeroe" class="form-control input-chico" placeholder="Sucursal" required onchange="obtenerNombreBancoEgreso()">
          <input type="text" id="bco-nombree" name="bco-nombree" class="form-control input-grande" placeholder="Nombre del Banco" required>
        </div>
      </div>
      <div class="form-group">
        <label for="nro">Número de cheque:</label>
        <!--<input type="number" id="nro" name="nro" class="form-control input-grande" placeholder="Número" required>-->
        <input type="number" id="num_cheque" name="nro-che" class="form-control input-chico" placeholder="Número" required onchange="obtenerDatosCheque()">
        <input type="hidden" id="cobrador-nombre" name="cobrador-nombre" class="form-control input-grande">
      </div>
    <div class="form-group">
      <label for="endosante">Endosante:</label>
      <input type="text" id="endosantee" name="endosantee" class="form-control input-grande" placeholder="Nombre y Apellido" required>
    </div>

    

    

    <div class="form-group">
      <label for="fecha">Fecha de vencimiento:</label>
      <input type="date" id="fec-vto" name="fec-vto" class="form-control" required>
    </div>

    <div class="form-group">
      <label for="importe">Importe:</label>
      <input type="number" id="imp-che" name="imp-che" class="form-control" step="0.01" required>
    </div>

    <div class="form-group">
      <label for="firmante">Firmante:</label>
      <input type="text" id="fir-che" name="fir-che" class="form-control input-chico"  required>
      <label for="cuit">CUIT:</label>
      <input type="text" id="cuit-che" name="cuit-che" class="form-control input-chico" placeholder="CUIT" required>
    </div>
    <div class="form-group">
        <label for="destino">Destino:</label>
        <input type="text" id="dest-che" name="dest-che" class="form-control" step="0.01" required>
      </div>
      <div class="form-group">
        <label for="fecha">Fecha de salida:</label>
        <input type="date" id="fec-out" name="fec-out" class="form-control" required>
      </div>
      
  
    <br>

    <input type="submit" value="Aceptar" class="btn btn-primary">
    <!--<input type="button" value="Cancelar" onclick="window.location.href = 'php/caja.php';" class="btn btn-secondary">-->
    
    <input type="button" value="Cancelar" onclick="cerrarModalEgreso()" class="btn btn-secondary">
    <!-- Botón para encontrar cheques ingresados y no egresados -->
<button type="button" class="btn btn-secondary" onclick="encontrarCheques()">
<img src="../img/list.png" alt="Logo" style="width: 20px; height: 20px; margin-right: 5px;">Encontrar</button>

<!-- MODAL DE BOOSTRAP -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">CHEQUES INGRESADOS Y SIN EGRESAR</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Cod. Bco</th>
                      <th>Suc. Bco</th>
                      <th>Nro Cheque</th>
                      <th>Fecha vto</th>
                      <th>Fecha Ing</th>
                      <th>Importe</th>
                      <th>Endosante</th>
                      <th>Cod. Cob</th>
                      <th>Firmante</th>
                      <th>Cuit</th>
                      <!-- <TH>Destino</TH>
                      <th>Fecha Salida</th>
                      <th>Fecha rechazados</th>
                      <th>Observacion</th> -->
                    </tr>
                  </thead>
                  <tbody id="tablacheques">
                    <tr>
                      <!--<td></td>
                      <td></td>-->
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
       <!-- </div>
      </div>-->
    
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            
          </div>
        </div>
      </div>
    </div>

  </form>
</div>
        </div>
      </div>
    </div>
  </div>
      
      



<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
include 'conexion.php';

$fecha = $_POST['fecha'];

// Consulta SQL para obtener los ingresos
$sql = "SELECT DISTINCT cheques.END_CHE, bancos.NOM_BCO,bancos.COD_BCO,cheques.NRO_CHE,cheques.SUC_BCO, cheques.IMP_CHE FROM cheques INNER JOIN bancos ON cheques.COD_BCO = bancos.COD_BCO WHERE cheques.FEC_IN = '$fecha'";
$resultado = $conn->query($sql);
echo ' <div class="container" >';

echo '<h1 class="tituloingreso" style="display: inline;">Ingresos del: '.'</h1>'.'<h2 class="tituloingreso" style="display: inline;">'.$fecha.'</h2>';

if ($resultado->num_rows > 0) {
    
    // Inicio de la tabla
    echo '<div class="tabla-contenedor">';
    echo '<table class="table">';
    echo '<thead class="table-dark">';
    echo '<tr>';
    echo '<th scope="col">ENDOSANTE</th>';
    echo '<th scope="col">BANCO</th>';
    echo '<th scope="col">COD BANCO</th>';
    echo '<th scope="col">SUC BANCO</th>';
    echo '<th scope="col">NUMERO</th>';
    echo '<th scope="col">IMPORTE</th>';
    echo '</tr>';
    echo '</thead>';
    echo '<tbody>';

    // Iterar sobre los resultados y generar las filas de la tabla
    while ($fila = $resultado->fetch_assoc()) {
        /*echo '<tr>';*/
        echo '<tr class="fila">';
        echo '<td>' . $fila['END_CHE'] . '</td>';
        echo '<td>' . $fila['NOM_BCO'] . '</td>';
        echo '<td>' . $fila['COD_BCO'] . '</td>';
        echo '<td>' . $fila['SUC_BCO'] . '</td>';
        echo '<td>' . $fila['NRO_CHE'] . '</td>';
        echo '<td>' .'$'. $fila['IMP_CHE'] . '</td>';
        echo '</tr>';
    }

    // Fin de la tabla
    echo '</tbody>';
    echo '</table>';
    echo'</div>';
    echo'</div>';
} else {
    // No se encontraron resultados
    // echo 'No se encontraron ingresos para la fecha seleccionada.';
    // No se encontraron resultados
    // echo 'No se encontraron egresos para la fecha seleccionada.';

if ($resultado->num_rows >= 0) {
    
  // Inicio de la tabla
  echo '<div class="tabla-contenedor">';
  echo '<table class="table">';
  echo '<thead class="table-dark">';
  echo '<tr>';
  echo '<th scope="col">ENDOSANTE</th>';
  echo '<th scope="col">BANCO</th>';
  echo '<th scope="col">COD BANCO</th>';
  echo '<th scope="col">SUC BANCO</th>';
  echo '<th scope="col">NUMERO</th>';
  echo '<th scope="col">IMPORTE</th>';
  echo '</tr>';
  echo '<tr class="fila">';
  echo '<td colspan="6" style="background-color: white; color: red; font-weight: bold;">NO HAY RESULTADOS</td>';
  echo '</tr>';
  echo '</thead>';
  echo '<tbody>';

  // Iterar sobre los resultados y generar las filas de la tabla
 

  // Fin de la tabla
  echo '</tbody>';
  echo '</table>';
  echo'</div>';
  echo'</div>';
}
}

//EGRESOS

$sql = "SELECT DISTINCT cheques.END_CHE, bancos.NOM_BCO,bancos.COD_BCO,cheques.NRO_CHE,cheques.SUC_BCO, cheques.IMP_CHE FROM cheques INNER JOIN bancos ON cheques.COD_BCO = bancos.COD_BCO WHERE cheques.FEC_OUT = '$fecha'";
$resultado = $conn->query($sql);
echo ' <div class="container" >';
echo '<h1 class="tituloingreso" style="display: inline;">Egresos del: '.'</h1>'.'<h2 style="display: inline;">'.$fecha.'</h2>';

if ($resultado->num_rows > 0) {
    // Inicio de la tabla
    echo '<div class="tabla-contenedor">';
    echo '<table class="table">';
    echo '<thead class="table-dark">';
    echo '<tr>';
    echo '<th scope="col">ENDOSANTE</th>';
    echo '<th scope="col">BANCO</th>';
    echo '<th scope="col">COD BANCO</th>';
    echo '<th scope="col">SUC BANCO</th>';
    echo '<th scope="col">NUMERO</th>';
    echo '<th scope="col">IMPORTE</th>';
    echo '</tr>';
    echo '</thead>';
    echo '<tbody>';

    // Iterar sobre los resultados y generar las filas de la tabla
    while ($fila = $resultado->fetch_assoc()) {
        echo '<tr class="fila">';
        echo '<td>' . $fila['END_CHE'] . '</td>';
        echo '<td>' . $fila['NOM_BCO'] . '</td>';
        echo '<td >' . $fila['COD_BCO'] . '</td>';
        echo '<td>' . $fila['SUC_BCO'] . '</td>';
        echo '<td>' . $fila['NRO_CHE'] . '</td>';
        echo '<td>' .'$'. $fila['IMP_CHE'] . '</td>';
        echo '</tr>';
    }

    // Fin de la tabla
    echo '</tbody>';
    echo '</table>';
    echo'</div>';
    echo'</div>';
 
} else {
    // No se encontraron resultados
    // echo 'No se encontraron egresos para la fecha seleccionada.';
    // No se encontraron resultados
    // echo 'No se encontraron egresos para la fecha seleccionada.';

if ($resultado->num_rows >= 0) {
    
  // Inicio de la tabla
  echo '<div class="tabla-contenedor">';
  echo '<table class="table">';
  echo '<thead class="table-dark">';
  echo '<tr>';
  echo '<th scope="col">ENDOSANTE</th>';
  echo '<th scope="col">BANCO</th>';
  echo '<th scope="col">COD BANCO</th>';
  echo '<th scope="col">SUC BANCO</th>';
  echo '<th scope="col">NUMERO</th>';
  echo '<th scope="col">IMPORTE</th>';
  echo '</tr>';
  echo '<tr class="fila">';
  echo '<td colspan="6" style="background-color: white; color: red; font-weight: bold;">NO HAY RESULTADOS</td>';
  echo '</tr>';
  echo '</thead>';
  echo '<tbody>';

  // Iterar sobre los resultados y generar las filas de la tabla
 

  // Fin de la tabla
  echo '</tbody>';
  echo '</table>';
  echo'</div>';
  echo'</div>';
}
}



// Cerrar la conexión
$conn->close();
}
?>
</div>
 <footer style="background-color: #A30234;"></footer>
</div>
 
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>  
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
<!-- <script src="../js/ingresar_cheque.js"></script> -->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="../js/egresar_cheque.js"></script>
<script src="../js/caja.js"></script>
</body>
</html>