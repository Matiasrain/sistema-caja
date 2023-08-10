
function cerrarModalEncontrar() {
  $('#exampleModal').modal('hide');
}
//COD DEL MODAL
const myModal = document.getElementById('exampleModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  
  console.log('dasdsa')
  let table_body = document.querySelector('#tablabancos')

  $.get('./php/ver_bancos.php')
  .done((res)=>{
    let respuesta = JSON.parse(res)
    // console.log(respuesta)
    //RECORRO CON MAP LOS OBJETOS DEL JSON
    respuesta.map((objeto)=>{
        console.log(objeto)
        
        let tr = document.createElement('tr')   //tabla
        

        let codigo = document.createElement('td')
        codigo.innerHTML = objeto.cod_bco   //valor del cod_cob al input por INNERHTML
        
        let nombre = document.createElement('td')
        nombre.innerHTML = objeto.nom_bco

        let codigo_suc = document.createElement('td')
        codigo_suc.innerHTML = objeto.suc_bco

        let nombre_suc = document.createElement('td')
        nombre_suc.innerHTML = objeto.nom_suc

        tr.append(codigo, nombre, codigo_suc, nombre_suc)   //Con append sumo los valores de las variables a la tabla
        
        
        //
        tr.onclick = ()=>{
            // console.log(`${objeto.cod_cob} ${objeto.nom_cob}`)
             $('#codigo-banco').val(objeto.cod_bco)
             $('#nombre-banco').val(objeto.nom_bco)
             $('#sucursal-banco').val(objeto.suc_bco)
             $('#nombre-sucursal').val(objeto.nom_suc)
           
            //document.getElementById('codigo-cobrador').value = objeto.cod_cob
            cerrarModalEncontrar();
        }

        table_body.append(tr)
    })
  })
  
})

myModal.addEventListener('hide.bs.modal', () => {
    
  $('#tablabancos tr').remove()

})






//---------------







function habilitarGuardar() {
  var botones = document.querySelectorAll('.boton-accion');
  for (var i = 0; i < botones.length; i++) {
    botones[i].disabled = true;
    
  }

  document.getElementById('boton-agregar').disabled = true;
  document.getElementById('boton-guardar').disabled = false;
  botonsalirdeagregar = document.getElementById('boton-salirdeagregar');
  botonsalirdeagregar.style.display='block';
 
  
}
function deshabilitarGuardar(){
  var botones = document.querySelectorAll('.boton-accion');
  for (var i = 0; i < botones.length; i++) {
    botones[i].disabled = false;
    
  }
  document.getElementById('boton-agregar').disabled = false;
  document.getElementById('boton-guardar').disabled = true;
  botonsalirdeagregar = document.getElementById('boton-salirdeagregar');
  botonsalirdeagregar.style.display='none';
}

function abrirVentana() {
  window.open("./php/ver_bancos.php", "Ventana de Bancos", "height=400,width=600,scrollbars=yes");
}

function mostrarFiltro() {
  var filtroContainer = document.getElementById('filtro-container');
  filtroContainer.style.display = 'block';
}

function filtrarBusqueda() {
  var codigo1 = document.getElementById('filtro-codigo1').value;
  var codigo2 = document.getElementById('filtro-codigo2').value;

  // Realizar lógica de filtrado y obtención de datos según los códigos

  // Ejemplo: Asignar valores a los campos de destino
  document.getElementById('codigo-banco').value = codigo1;
  document.getElementById('sucursal-banco').value = codigo2;
  obtenerNombresBanco(codigo1, codigo2);
}
function cerrarfiltroBusqueda(){
  var filtroContainer = document.getElementById('filtro-container');
  filtroContainer.style.display = 'none';
}

function obtenerNombresBanco(codigoBanco, codigoSucursal) {
  // Realizar la solicitud AJAX para obtener los nombres de banco y sucursal según los códigos
  $.ajax({
    url: './php/filtrar_bancos.php', // Reemplaza 'ruta_del_archivo_php.php' por la ruta correcta a tu archivo PHP
    method: 'POST',
    data: {
      codigoBanco: codigoBanco,
      codigoSucursal: codigoSucursal
    },
    success: function(response) {
      // Manejar la respuesta exitosa del servidor
      var data = JSON.parse(response);
      document.getElementById('nombre-banco').value = data.nombreBanco;
      document.getElementById('nombre-sucursal').value = data.nombreSucursal;
    },
    error: function() {
      // Manejar el error en la solicitud AJAX
      console.log('Error en la solicitud AJAX');
      
    }
  });
}

  
function eliminarBanco() {
  var codBco = document.getElementById('codigo-banco').value;
  var codSuc = document.getElementById('sucursal-banco').value;

  // if (confirm('¿Estás seguro de que deseas eliminar el banco?')) {
  //   var xhr = new XMLHttpRequest();
  //   xhr.open('POST', './php/eliminar_banco.php', true);
  //   xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  //   xhr.onreadystatechange = function() {
  //     if (xhr.readyState === 4 && xhr.status === 200) {
  //       alert('Banco eliminado correctamente');
  //       location.reload(); // Recargar la página después de eliminar
  //     }
  //   };
  //   xhr.send('codigo-bco=' + codBco + '&sucursal-bco=' + codSuc);
  // }
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success me-2',
      cancelButton: 'btn btn-danger me-2'
    },
    buttonsStyling: false
  });

  swalWithBootstrapButtons.fire({
    title: '¿Está seguro que desea eliminar el banco?',
    text: "¡No podrás revertir esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      // Aquí realiza la acción de eliminación del banco
      var xhr = new XMLHttpRequest();
      xhr.open('POST', './php/eliminar_banco.php', true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          swalWithBootstrapButtons.fire(
            '¡Eliminado!',
            'Tu archivo ha sido eliminado.',
            'success'
          ).then(() => {
            location.reload(); // Recargar la página después de eliminar
          });
        }
      };
      xhr.send('codigo-bco=' + codBco + '&sucursal-bco=' + codSuc);
    }
  });
}

// CODIGO PARA EL ALERTA DE ALTA BANCO
// function mostrarAlerta() {
//   Swal.fire({
//     icon: 'success',
//     title: 'Banco Guardado',
//     showConfirmButton: false,
//     timer: 1500
//   });
// }
function mostrarAlerta(tipo,mensaje) {
  Swal.fire({
    icon: tipo,
    title: mensaje,
    showConfirmButton: false,
    timer: 1500
  });
}

// Agrega un evento de escucha al formulario
document.getElementById("formulario-banco").addEventListener("submit", function (event) {
  // Previene el envío normal del formulario
  event.preventDefault();

  // Crea un objeto FormData con los datos del formulario
  const formData = new FormData(this);

  // Envia los datos mediante AJAX a procesar_cheque.php
  const request = new XMLHttpRequest();
  request.open("POST", "php/guardar_banco.php");
  request.onreadystatechange = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        // La solicitud se completó correctamente
        // Muestra la alerta de SweetAlert2

        const respuesta = JSON.parse(request.responseText);
        if (respuesta.error) {
          // Mostrar la alerta de error si el servidor envía un mensaje de error
          mostrarAlerta('error', respuesta.message);
        } else {
          // Mostrar la alerta de éxito si el cobrador se guarda correctamente
          mostrarAlerta('success', 'Banco Guardado');
        }
      } else {
        // Hubo un error en la solicitud
        // Puedes manejar el error aquí o mostrar una alerta de error si lo prefieres
        console.error("Error en la solicitud AJAX: " + request.status);
      }
    }
  };
  request.send(formData);
});

//         mostrarAlerta();
//       } else {
//         // Hubo un error en la solicitud
//         // Puedes manejar el error aquí o mostrar una alerta de error si lo prefieres
//         console.error("Error en la solicitud AJAX: " + request.status);
//       }
//     }
//   };
//   request.send(formData);
// });

  