
  document.getElementById('botonAceptar').addEventListener('click', function(event) {
    event.preventDefault();

     // Obtener la opción seleccionada
     //-------------------- OPCION 1 --------------------------------------
     const opcionSeleccionada = document.querySelector('input[name="opcion"]:checked').value;
     if (opcionSeleccionada === 'opcion1') {
  
    // Obtener las fechas seleccionadas
    const fechaDesde = document.getElementById('fecha_desde').value;
    const fechaHasta = document.getElementById('fecha_hasta').value;
    // Verificar si las fechas están vacías
    if (fechaDesde.trim() === '' || fechaHasta.trim() === '') {
        console.log('Debes seleccionar ambas fechas');
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debe seleccionar ambas fechas'
          })
        return; // Salir de la función sin hacer nada
      }
    // Enviar las fechas al script PHP mediante AJAX
    $.ajax({
        url: './php/listados.php', // Ruta del script PHP que realizará la consulta a la base de datos
        method: 'POST',
        data: { fecha_desde: fechaDesde, fecha_hasta: fechaHasta },
        dataType: 'json',
        success: function(chequesFiltrados) {
            // Generar el contenido del modal con los cheques filtrados
            const contenidoModal = generarContenidoModal(chequesFiltrados);

            // Mostrar el modal con el contenido actualizado
           
            const modalLabel = document.getElementById('modalLabel');
            const contenidoModalElement = document.getElementById('contenidoModal');
            modalLabel.innerText = 'CARTERA DE VALORES';
            modalLabel.classList.add('text-center', 'mb-4'); // Agregar clases de Bootstrap para centrar y dar margen inferior
            //modalLabel.innerText = 'Cheques Desde ' + fechaDesde + ' Hasta ' + fechaHasta;
            contenidoModalElement.innerHTML = '<h5>DESDE ' + fechaDesde + ' HASTA ' + fechaHasta + '</h5>' + contenidoModal;
            $('#miModal').modal('show');
        },
        error: function(xhr, textStatus, errorThrown) {
            console.log(xhr.responseText);
            console.log(textStatus);
            console.log(errorThrown);
            alert('Error al obtener los cheques: ' + textStatus);
        }
    });
}else if (opcionSeleccionada === 'opcion2') {
    //---------------------------------------------OPCION 2-------------------------------
    // Obtener las fechas seleccionadas
    const fechaDesde = document.getElementById('fecha_desde').value;
    const fechaHasta = document.getElementById('fecha_hasta').value;
    // Verificar si las fechas están vacías
    if (fechaDesde.trim() === '' || fechaHasta.trim() === '') {
        console.log('Debes seleccionar ambas fechas');
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debe seleccionar ambas fechas'
          })
        return; // Salir de la función sin hacer nada
      }
    // Enviar las fechas al script PHP mediante AJAX
    $.ajax({
        url: './php/listados.php', // Ruta del script PHP que realizará la consulta a la base de datos
        method: 'POST',
        data: { fecha_desde: fechaDesde, fecha_hasta: fechaHasta },
        dataType: 'json',
        success: function(chequesFiltrados) {
            // Generar el contenido del modal con los cheques filtrados
            const contenidoModal = generarContenidoModalOp2(chequesFiltrados);

            // Mostrar el modal con el contenido actualizado
           
            const modalLabel = document.getElementById('modalLabel');
            const contenidoModalElement = document.getElementById('contenidoModal');
            modalLabel.innerText = 'CARTERA DE VALORES';
            modalLabel.classList.add('text-center', 'mb-4'); // Agregar clases de Bootstrap para centrar y dar margen inferior
            //modalLabel.innerText = 'Cheques Desde ' + fechaDesde + ' Hasta ' + fechaHasta;
            contenidoModalElement.innerHTML = '<h5>DESDE ' + fechaDesde + ' HASTA ' + fechaHasta + '</h5>' + contenidoModal;
            $('#miModal').modal('show');
        },
        error: function(xhr, textStatus, errorThrown) {
            console.log(xhr.responseText);
            console.log(textStatus);
            console.log(errorThrown);
            alert('Error al obtener los cheques: ' + textStatus);
        }
    });
}else if (opcionSeleccionada === 'opcion3') {
    //---------------------------------------------OPCION 3--------------------------------------
    // Obtener las fechas seleccionadas
    const fechaDesde = document.getElementById('fecha_desde').value;
    const fechaHasta = document.getElementById('fecha_hasta').value;
    // Verificar si las fechas están vacías
    if (fechaDesde.trim() === '' || fechaHasta.trim() === '') {
        console.log('Debes seleccionar ambas fechas');
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debe seleccionar ambas fechas'
          })
        return; // Salir de la función sin hacer nada
      }
    // Enviar las fechas al script PHP mediante AJAX
    $.ajax({
        url: './php/listados.php', // Ruta del script PHP que realizará la consulta a la base de datos
        method: 'POST',
        data: { fecha_desde: fechaDesde, fecha_hasta: fechaHasta },
        dataType: 'json',
        success: function(chequesFiltrados) {
            // Generar el contenido del modal con los cheques filtrados
            const contenidoModal = generarContenidoModalOp3(chequesFiltrados);

            // Mostrar el modal con el contenido actualizado
           
            const modalLabel = document.getElementById('modalLabel');
            const contenidoModalElement = document.getElementById('contenidoModal');
            modalLabel.innerText = 'CARTERA DE VALORES';
            modalLabel.classList.add('text-center', 'mb-4'); // Agregar clases de Bootstrap para centrar y dar margen inferior
            //modalLabel.innerText = 'Cheques Desde ' + fechaDesde + ' Hasta ' + fechaHasta;
            contenidoModalElement.innerHTML = '<h5>DESDE ' + fechaDesde + ' HASTA ' + fechaHasta + '</h5>' + contenidoModal;
            $('#miModal').modal('show');
        },
        error: function(xhr, textStatus, errorThrown) {
            console.log(xhr.responseText);
            console.log(textStatus);
            console.log(errorThrown);
            alert('Error al obtener los cheques: ' + textStatus);
        }
    });
}else{
    console.log('opcion no valida');
}   
});


  //EVENTO PARA IMPRIMIR Y REDIRIGE A UNA PAGINA PARA IMPRIMIRLO MEJOR
  document.getElementById('btnImprimir').addEventListener('click', function() {
    // Clonar el contenido del modal para la versión imprimible
    const contenidoModal = document.getElementById('contenidoModal').cloneNode(true);
    const estilosImprimir = `
        <style>
            body {
                font-family: Arial, sans-serif;
            }
            h1 {
                text-align: center;
                margin-bottom: 20px;
            }
            table {
                width: 100%;
                border-collapse: collapse;
            }
            th, td {
                border: 1px solid #ccc;
                padding: 8px;
                text-align: center;
            }
        </style>
    `;
  
    const ventanaImprimir = window.open();
    ventanaImprimir.document.open();
    ventanaImprimir.document.write('<html><head><title>Imprimir</title>');
    ventanaImprimir.document.write(estilosImprimir); // Agregar los estilos en línea
    ventanaImprimir.document.write('</head><body>');
    ventanaImprimir.document.write('<h1>CARTERA DE VALORES</h1>');
    ventanaImprimir.document.write(contenidoModal.outerHTML);
    ventanaImprimir.document.write('</body></html>');
    ventanaImprimir.document.close();

    // Esperar a que se cargue el contenido en la ventana antes de imprimir
    ventanaImprimir.onload = function() {
      
        ventanaImprimir.print();
        ventanaImprimir.close();
    };
});


function calcularTotalCheques(chequesFiltrados) {
    let total = 0;
    chequesFiltrados.forEach(cheque => {
      total += parseFloat(cheque.IMP_CHE);
    });
    return total;
  }
// Función para generar el contenido del modal con una tabla de los cheques filtrados
function generarContenidoModal(chequesFiltrados) {
    // Ordenar los cheques filtrados por fecha de vencimiento (opcional)
    chequesFiltrados.sort((a, b) => new Date(a.fec_vto) - new Date(b.fec_vto));
  
    // Crear una tabla para mostrar los cheques
    let contenidoModal = '<table class="table">';
    contenidoModal += '<thead><tr>';
    contenidoModal += '<th>Endosante</th>';
    contenidoModal += '<th>Cod. Bco</th>';
    contenidoModal += '<th>Suc. Bco</th>';
    contenidoModal += '<th>Nro de cheque</th>';
    contenidoModal += '<th>Fecha Vto</th>';
    contenidoModal += '<th>Importe</th>';
    contenidoModal += '</tr></thead>';
    contenidoModal += '<tbody>';
  
    let subtotal = 0;
    let fechaActual = null;
  
    chequesFiltrados.forEach(cheque => {
      // Calcular subtotal por día
      if (cheque.fec_vto !== fechaActual) {
        if (fechaActual !== null) {
          contenidoModal += '<tr class="subtotal-row">'; // Agregar clase "subtotal-row" a la fila de subtotal
          contenidoModal += '<td colspan="5" class="subtotal-row">Subtotal por día</td><td class="subtotal-row">$' + subtotal + '</td></tr>';
          subtotal = 0;
        }
        fechaActual = cheque.fec_vto;
      }
  
      // Agregar cada fila de cheque a la tabla
      contenidoModal += '<tr>';
      contenidoModal += '<td>' + cheque.END_CHE + '</td>';
      contenidoModal += '<td>' + cheque.COD_BCO + '</td>';
      contenidoModal += '<td>' + cheque.SUC_BCO + '</td>';
      contenidoModal += '<td>' + cheque.NRO_CHE + '</td>';
      contenidoModal += '<td>' + cheque.fec_vto + '</td>';
      contenidoModal += '<td>' + '$' + cheque.IMP_CHE + '</td>';
      contenidoModal += '</tr>';
  
      // Sumar al subtotal
      subtotal += parseFloat(cheque.IMP_CHE);
    });
  
    // Agregar el último subtotal por día
    if (fechaActual !== null) {
      contenidoModal += '<tr class="subtotal-row">'; // Agregar clase "subtotal-row" a la fila de subtotal
      contenidoModal += '<td colspan="5" class="subtotal-row">Subtotal por día</td><td class="subtotal-row">$' + subtotal + '</td></tr>';
    }
  
    contenidoModal += '</tbody>';
    contenidoModal += '<tfoot><tr>';
    contenidoModal += '<td colspan="5" class="total-row">Total</td>';
    contenidoModal += '<td class="total-row">$' + calcularTotalCheques(chequesFiltrados) + '</td>';
    contenidoModal += '</tr></tfoot>';
    contenidoModal += '</table>';
  
    return contenidoModal;
  }


  // OPCION 2 MODAL PARA LA OPCION 2
  function generarContenidoModalOp2(chequesFiltrados) {
    // Ordenar los cheques filtrados por fecha de vencimiento (opcional)
    // Ordenar los cheques filtrados por endosante (opcional)
    chequesFiltrados.sort((a, b) => {
        if (a.END_CHE < b.END_CHE) return -1;
        if (a.END_CHE > b.END_CHE) return 1;
        return 0;
    });

    // Crear una tabla para mostrar los cheques
    let contenidoModal = '<table class="table">';
    contenidoModal += '<thead><tr>';
    contenidoModal += '<th>Endosante</th>';
    contenidoModal += '<th>Cod. Bco</th>';
    contenidoModal += '<th>Suc. Bco</th>';
    contenidoModal += '<th>Nro de cheque</th>';
    contenidoModal += '<th>Fecha Vto</th>';
    contenidoModal += '<th>Importe</th>';
    contenidoModal += '</tr></thead>';
    contenidoModal += '<tbody>';

    let subtotal = 0;
    let endosanteActual = null;

    chequesFiltrados.forEach(cheque => {
        // Calcular subtotal por endosante
        if (cheque.END_CHE !== endosanteActual) {
            if (endosanteActual !== null) {
                contenidoModal += '<tr class="subtotal-row">'; // Agregar clase "subtotal-row" a la fila de subtotal
                contenidoModal += '<td colspan="5" class="subtotal-row">Subtotal por endosante</td><td class="subtotal-row">$' + subtotal + '</td></tr>';
                subtotal = 0;
            }
            endosanteActual = cheque.END_CHE;
        }

        // Agregar cada fila de cheque a la tabla
        contenidoModal += '<tr>';
        contenidoModal += '<td>' + cheque.END_CHE + '</td>';
        contenidoModal += '<td>' + cheque.COD_BCO + '</td>';
        contenidoModal += '<td>' + cheque.SUC_BCO + '</td>';
        contenidoModal += '<td>' + cheque.NRO_CHE + '</td>';
        contenidoModal += '<td>' + cheque.fec_vto + '</td>';
        contenidoModal += '<td>' + '$' + cheque.IMP_CHE + '</td>';
        contenidoModal += '</tr>';

        // Sumar al subtotal
        subtotal += parseFloat(cheque.IMP_CHE);
    });

    // Agregar el último subtotal por endosante
    if (endosanteActual !== null) {
        contenidoModal += '<tr class="subtotal-row">'; // Agregar clase "subtotal-row" a la fila de subtotal
        contenidoModal += '<td colspan="5" class="subtotal-row">Subtotal por endosante</td><td class="subtotal-row">$' + subtotal + '</td></tr>';
    }

    contenidoModal += '</tbody>';
    contenidoModal += '<tfoot><tr>';
    contenidoModal += '<td colspan="5" class="total-row">Total</td>';
    contenidoModal += '<td class="total-row">$' + calcularTotalCheques(chequesFiltrados) + '</td>';
    contenidoModal += '</tr></tfoot>';
    contenidoModal += '</table>';

    return contenidoModal;
  }

  //OPCION 3 MODAL PARA LA OPCION 3 --------------------------------
  function generarContenidoModalOp3(chequesFiltrados,opcionSeleccionada) {
    // Ordenar los cheques filtrados por fecha de vencimiento (opcional)
    chequesFiltrados.sort((a, b) => new Date(a.fec_vto) - new Date(b.fec_vto));

    // Crear una tabla para mostrar los cheques
    let contenidoModal = '<table class="table">';
    contenidoModal += '<thead><tr>';
    contenidoModal += '<th>Endosante</th>';
    contenidoModal += '<th>Cod. Bco</th>';
    contenidoModal += '<th>Suc. Bco</th>';
    contenidoModal += '<th>Nro de cheque</th>';
    contenidoModal += '<th>Fecha Vto</th>';
    contenidoModal += '<th>Importe</th>';
    contenidoModal += '</tr></thead>';
    contenidoModal += '<tbody>';

    let subtotal = 0;
    let fechaActual = null;
    let endosanteActual = null;

    chequesFiltrados.forEach(cheque => {
        // Calcular subtotal por día o subtotal por endosante según la opción seleccionada
        if ((opcionSeleccionada === 'opcion1' && cheque.fec_vto !== fechaActual) || (opcionSeleccionada === 'opcion2' && cheque.END_CHE !== endosanteActual)) {
            if (fechaActual !== null || endosanteActual !== null) {
                contenidoModal += '<tr class="subtotal-row">'; // Agregar clase "subtotal-row" a la fila de subtotal
                contenidoModal += '<td colspan="5" class="subtotal-row">Subtotal</td><td class="subtotal-row">$' + subtotal + '</td></tr>';
                subtotal = 0;
            }
            fechaActual = opcionSeleccionada === 'opcion1' ? cheque.fec_vto : null;
            endosanteActual = opcionSeleccionada === 'opcion2' ? cheque.END_CHE : null;
        }

        // Agregar cada fila de cheque a la tabla
        contenidoModal += '<tr>';
        contenidoModal += '<td>' + cheque.END_CHE + '</td>';
        contenidoModal += '<td>' + cheque.COD_BCO + '</td>';
        contenidoModal += '<td>' + cheque.SUC_BCO + '</td>';
        contenidoModal += '<td>' + cheque.NRO_CHE + '</td>';
        contenidoModal += '<td>' + cheque.fec_vto + '</td>';
        contenidoModal += '<td>' + '$' + cheque.IMP_CHE + '</td>';
        contenidoModal += '</tr>';

        // Sumar al subtotal
        subtotal += parseFloat(cheque.IMP_CHE);
    });

    // Agregar el último subtotal o total según la opción seleccionada
    if ((opcionSeleccionada === 'opcion1' && fechaActual !== null) || (opcionSeleccionada === 'opcion2' && endosanteActual !== null)) {
        contenidoModal += '<tr class="subtotal-row">'; // Agregar clase "subtotal-row" a la fila de subtotal
        contenidoModal += '<td colspan="5" class="subtotal-row">Subtotal</td><td class="subtotal-row">$' + subtotal + '</td></tr>';
    }

    // Agregar el total de todos los cheques
    contenidoModal += '<tr class="total-row">';
    contenidoModal += '<td colspan="5" class="total-row">Total</td>';
    contenidoModal += '<td class="total-row">$' + calcularTotalCheques(chequesFiltrados) + '</td>';
    contenidoModal += '</tr>';

    contenidoModal += '</tbody>';
    contenidoModal += '</table>';

    return contenidoModal;
  }