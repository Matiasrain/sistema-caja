document.addEventListener('DOMContentLoaded', function() {
    // Obtener todas las filas de la tabla
    const filas = document.querySelectorAll('table tbody tr');
  
    // Agregar el evento click a cada fila
    filas.forEach(fila => {
      fila.addEventListener('click', function() {
        console.log(fila);
        console.log("click");
        // Remover la clase 'fila-seleccionada' de todas las filas
        filas.forEach(f => f.classList.remove('fila-seleccionada'));
  
        // Agregar la clase 'fila-seleccionada' a la fila clickeada
        this.classList.add('fila-seleccionada');
      });
    });
  });
  function abrirVentana(url,ancho,alto) {
    const ventanaAncho = ancho || 800; // Ancho predeterminado de la ventana en píxeles
    const ventanaAlto = alto || 600; // Alto predeterminado de la ventana en píxeles
  
      // Obtener el ancho y alto de la ventana emergente
  const ventanaAnchoReal = Math.min(window.innerWidth, ventanaAncho);
  const ventanaAltoReal = Math.min(window.innerHeight, ventanaAlto);

  // Calcular la posición centrada de la ventana emergente
  const ventanaIzquierda = (window.innerWidth - ventanaAnchoReal) / 2;
  const ventanaArriba = (window.innerHeight - ventanaAltoReal) / 2;

  const opciones = `width=${ventanaAnchoReal},height=${ventanaAltoReal},left=${ventanaIzquierda},top=${ventanaArriba},resizable=yes,scrollbars=yes`;
    window.open(url, '_blank', opciones);
    
  }
  
  function cerrarVentana() {
    window.close();
  }
  function cerrarModal() {
    $('#modalIngresarCheque').modal('hide');
  }
  function cerrarModalEgreso() {
    $('#modalEgresarCheque').modal('hide');
  }
  function cerrarModaEncontrar() {
    $('#exampleModal').modal('hide');
  }

// CODIGO PARA EL ALERTA DE ACEPTAR ALTA CHEQUE
function mostrarAlerta(tipo, mensaje) {
  Swal.fire({
    icon: tipo,
    title: mensaje,
    showConfirmButton: false,
    timer: 1500
  }).then(() => {
    
    
    setTimeout(() => {
      window.location.href = 'caja.php'; // Reemplaza 'caja.php' con la URL correcta
  }, 500);
});
}

// Agrega un evento de escucha al formulario
document.getElementById("formulario-cheque").addEventListener("submit", function (event) {
  // Previene el envío normal del formulario
  event.preventDefault();

  // Crea un objeto FormData con los datos del formulario
  const formData = new FormData(this);

  // Envia los datos mediante AJAX a procesar_cheque.php
  const request = new XMLHttpRequest();
  request.open("POST", "procesar_cheque.php");
  request.onreadystatechange = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        // La solicitud se completó correctamente
        // Muestra la alerta de SweetAlert2
        try {
          const respuesta = JSON.parse(request.responseText);
          if (respuesta.error) {
            // Mostrar la alerta de error si el servidor envía un mensaje de error
            mostrarAlerta('error', respuesta.message);
            //document.getElementById("formulario-cheque").reset(); // Resetea los campos del formulario
            document.getElementById("nro-cheque").value = '';
            var nroChequeInput = document.getElementById("nro-cheque");
            nroChequeInput.style.backgroundColor = "#ffcccc"; // Cambiar el fondo del campo a rojo

          } else {
            // Mostrar la alerta de éxito si el cheque se guarda correctamente
            mostrarAlerta('success', respuesta.message);
            cerrarModal();
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




//CODIGO PARA EL ALERTA DE BAJA CHEQUE

function mostrarAlertaEgreso() {
  Swal.fire({
      icon: 'success',
      title: 'Cheque Egresado',
      showConfirmButton: false,
      timer: 1500
  }).then(() => {
      cerrarModalEgreso();
      setTimeout(() => {
          location.reload(true);
      }, 500); // Espera 500 milisegundos antes de recargar la página
  });
}
// Agrega un evento de escucha al formulario
document.getElementById("formulario-cheque-egreso").addEventListener("submit", function (event) {
  // Previene el envío normal del formulario
  event.preventDefault();

  // Crea un objeto FormData con los datos del formulario
  const formData = new FormData(this);

  // Envia los datos mediante AJAX a procesar_cheque.php
  const request = new XMLHttpRequest();
  request.open("POST", "egresar_cheque.php");
  request.onreadystatechange = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        // La solicitud se completó correctamente
        // Muestra la alerta de SweetAlert2
        mostrarAlertaEgreso();
      } else {
        // Hubo un error en la solicitud
        // Puedes manejar el error aquí o mostrar una alerta de error si lo prefieres
        console.error("Error en la solicitud AJAX: " + request.status);
      }
    }
  };
  request.send(formData);
});
function validarFormulario() {
  var fechaInput = document.getElementById("fecha");

  if (fechaInput.value === "") {
    //alert("Por favor, seleccione una fecha antes de consultar.");
    Swal.fire({
      icon: 'error',
      title: 'Seleccione una fecha antes de consultar'
    })
    return false; // Evita que se envíe el formulario si la fecha está vacía
  }

  return true; // Envía el formulario si la fecha está seleccionada
}
function cerrarSesion() {
  localStorage.removeItem("isLoggedIn");
  window.location.reload(true);
  window.location.href = "../login.html";

}