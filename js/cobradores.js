
function cerrarModalEncontrar() {
  $('#exampleModal').modal('hide');
}

const myModal = document.getElementById('exampleModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  console.log('dasdsa')
  let table_body = document.querySelector('#tablaCobradores')

  $.get('./php/ver_cobradores.php')
  .done((res)=>{
    let respuesta = JSON.parse(res)
    // console.log(respuesta)
    //RECORRO CON MAP LOS OBJETOS DEL JSON
    respuesta.map((objeto)=>{
        console.log(objeto)
        
        let tr = document.createElement('tr')   //tabla

        let codigo = document.createElement('td')
        codigo.innerHTML = objeto.cod_cob   //valor del cod_cob al input por INNERHTML
        
        let nombre = document.createElement('td')
        nombre.innerHTML = objeto.nom_cob

        tr.append(codigo, nombre)   //Con append sumo los valores de las variables a la tabla

        //
        tr.onclick = ()=>{
            // console.log(`${objeto.cod_cob} ${objeto.nom_cob}`)
             $('#codigo-cobrador').val(objeto.cod_cob)
             $('#nombre-cobrador').val(objeto.nom_cob)
            //document.getElementById('codigo-cobrador').value = objeto.cod_cob
            cerrarModalEncontrar();
        }

        table_body.append(tr)
    })
  })
})

myModal.addEventListener('hide.bs.modal', () => {
    
  $('#tablaCobradores tr').remove()

})



function abrirVentana() {
    window.open("./php/ver_cobradores.php", "Ventana de Cobradores", "height=400,width=600,scrollbars=yes");
  }
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
  

  function insertarDatosEncontrar(codigo, nombreCobrador, nombre, nombreSucursal) {
    console.log(codigo);
    console.log(nombreCobrador);
    console.log(sucursal);
    console.log(nombreSucursal);
    document.getElementById('codigo-cobrador').value = codigo;
    document.getElementById('nombre-cobrador').value = nombre;
    
  }


  // CODIGO PARA EL ALERTA DE ALTA COBRADOR
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
  request.open("POST", "php/guardar_cobrador.php");
  request.onreadystatechange = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        // La solicitud se completó correctamente
        try {
          const respuesta = JSON.parse(request.responseText);
          if (respuesta.error) {
            // Mostrar la alerta de error si el servidor envía un mensaje de error
            mostrarAlerta('error', respuesta.message);
          } else {
            // Mostrar la alerta de éxito si el cheque se guarda correctamente
            mostrarAlerta('success', respuesta.message);
          }
        } catch (error) {
          console.error("Error al analizar la respuesta JSON:", error);
          // Aquí puedes manejar el caso cuando la respuesta no es un objeto JSON válido
          // Por ejemplo, mostrar una alerta de error genérica
          mostrarAlerta('error', 'Error en la respuesta del servidor');
        }
      } else {
        // Hubo un error en la solicitud
        console.error("Error en la solicitud AJAX: " + request.status);
      }
    }
  };
  request.send(formData);
});



// CODIGO PARA ELIMINAR Y ALERTA COBRADOR

function eliminarCobrador() {
  var codCob = document.getElementById('codigo-cobrador').value;
  var nomCob = document.getElementById('nombre-cobrador').value;

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success me-2',
      cancelButton: 'btn btn-danger me-2'
    },
    buttonsStyling: false
  });

  swalWithBootstrapButtons.fire({
    title: '¿Está seguro que desea eliminar el cobrador?',
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
      xhr.open('POST', './php/eliminar_cobrador.php', true);
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
      xhr.send('codigo-cob=' + codCob + '&nombre-cob=' + nomCob);
    }
  });
}