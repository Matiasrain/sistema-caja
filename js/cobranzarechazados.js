function obtenerNombreCobrador() {
    var numeroCobrador = $('#cobrador-numero').val();
      console.log("xfeddf");
    $.ajax({
      url: '../php/obtener_Cobrador.php',
      method: 'POST',
      data: { numero: numeroCobrador },
      success: function(response) {
        $('#cobrador-nombre').val(response);
      },
      error: function() {
        // Manejar el error en caso de que la solicitud falle
      }
    });
  }

  function obtenerNombreBanco() {
    var numeroBanco = $('#bco-numero').val();
    var numeroSucursal = $('#suc-numero').val();
    console.log("dfdfd");
  
    $.ajax({
      url: './php/obtener_banco.php',
      method: 'POST',
      data: { numeroBanco: numeroBanco, numeroSucursal: numeroSucursal },
      success: function(response) {
        $('#bco-nombre').val(response);
      },
      error: function() {
        console.log('Error en la solicitud AJAX para obtener el nombre del banco');
      }
    });
  }


  function cerrarModal() {
    $('#modalIngresarCheque').modal('hide');
  }
  function cerrarModalEncontrar() {
    $('#exampleModal').modal('hide');
  }
  
  function cerrarSesion() {
    localStorage.removeItem("isLoggedIn");
    window.location.reload(true);
    window.location.href = "login.html";
  
  }
  
 // --------------------------INGRESO DE RECHAZADOS---------------------------------


function obtenerNombreEndosante() {
  var numeroEndosante = $('#num_cheque').val();
    
  $.ajax({
    url: './php/obtener_endosante.php',
    method: 'POST',
    data: { numero: numeroEndosante },
    success: function(response) {
      var valores = response.split(" - ");
      var endCheque = valores[0];
      var fecvtocheque = valores[1];
      var impcheque = valores[2];
      var fircheque = valores[3];
      var cuitcheque = valores[4];
      
      $('#endo-nombre').val(endCheque);
      $('#fec-vto').val(fecvtocheque);
      $('#imp-che').val(impcheque);
      $('#fir-che').val(fircheque);
      $('#cuit-che').val(cuitcheque);
    },
    error: function() {
      // Manejar el error en caso de que la solicitud falle
    }
  });
}

// //-----------------------------------COD DEL MODAL ------------------------------------------
// const myModal = document.getElementById('exampleModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
  
//   console.log('dasdsa')
//   let table_body = document.querySelector('#tablacheques')

//   $.get('./php/ver_cheques_rechazados.php')
//   .done((res)=>{
//     let respuesta = JSON.parse(res)
//     // console.log(respuesta)
//     //RECORRO CON MAP LOS OBJETOS DEL JSON
//     respuesta.map((objeto)=>{
//         console.log(objeto)
        
//         let tr = document.createElement('tr')   //tabla
        

//         let codigo = document.createElement('td')
//         codigo.innerHTML = objeto.cod_bco   //valor del cod_cob al input por INNERHTML

//         let codigo_suc = document.createElement('td')
//         codigo_suc.innerHTML = objeto.suc_bco

//         let nro_cheque = document.createElement('td')
//         nro_cheque.innerHTML = objeto.nro_che
//         let fecha_vencimiento = document.createElement('td')
//         fecha_vencimiento.innerHTML = objeto.fec_vto
//         let fecha_ingreso = document.createElement('td')
//         fecha_ingreso.innerHTML = objeto.fec_in
//         let impcheque = document.createElement('td')
//         impcheque.innerHTML = objeto.imp_che
//         let endcheque = document.createElement('td')
//         endcheque.innerHTML = objeto.end_che
//         let cod_cob = document.createElement('td')
//         cod_cob.innerHTML = objeto.cod_cob
//         let fircheque = document.createElement('td')
//         fircheque.innerHTML = objeto.fir_che
//         let cuitcheque = document.createElement('td')
//         cuitcheque.innerHTML = objeto.cuit_che
//         //prueba de ingreso rechazados
//         let destche = document.createElement('td')
//         destche.innerHTML = objeto.dest_che
//         let fecout = document.createElement('td')
//         fecout.innerHTML = objeto.fec_out
//         let fecrech = document.createElement('td')
//         fecrech.innerHTML = objeto.fec_rech
//         let obsche = document.createElement('td')
//         obsche.innerHTML=objeto.obs_che


//         tr.append(codigo, codigo_suc,nro_cheque, fecha_vencimiento,fecha_ingreso,impcheque,endcheque, cod_cob, fircheque,cuitcheque,destche,fecout,fecrech,obsche)   //Con append sumo los valores de las variables a la tabla
        
        
//         //
//         tr.onclick = ()=>{
//             // console.log(`${objeto.cod_cob} ${objeto.nom_cob}`)
//              $('#bco-numero').val(objeto.cod_bco)
//              $('#suc-numero').val(objeto.suc_bco)
//              $('#num_cheque').val(objeto.nro_che)
//              $('#endo-nombre').val(objeto.end_che)
//              $('#fec-vto').val(objeto.fec_vto)
//              //$('#fec-in').val(objeto.fec_in)
//              $('#imp-che').val(objeto.imp_che)
//              $('#fir-che').val(objeto.fir_che)
//              $('#cuit-che').val(objeto.cuit_che)
//              //prueba de ingreso rechazados
//              $('#destino').val(objeto.dest_che)
//              $('#fecha-out').val(objeto.fec_out)
//              //cobranza rechazados
//              $('#fecha-rech').val(objeto.fec_rech)
//              $('#obs_che').val(objeto.obs_che)

//              obtenerNombreBanco();
//              cerrarModalEncontrar();
           
//             //document.getElementById('codigo-cobrador').value = objeto.cod_cob
//         }

//         table_body.append(tr)
//     })
//   })
  
// })

// myModal.addEventListener('hide.bs.modal', () => {
    
//   $('#tablacheques tr').remove()

// })

//-----------------------------------COD DEL MODAL ------------------------------------------
//-----------------------------------COD DEL MODAL ------------------------------------------
const myModal = document.getElementById('exampleModal');
const myInput = document.getElementById('myInput');

myModal.addEventListener('shown.bs.modal', () => {
  console.log('dasdsa');
  let table_body = document.querySelector('#tablacheques');

  $.get('./php/ver_cheques_rechazados.php')
    .done((res) => {
      let respuesta = JSON.parse(res);

      // Limpiar el contenido de la tabla
      table_body.innerHTML = '';

      //RECORRO CON MAP LOS OBJETOS DEL JSON
      respuesta.map((objeto) => {
        let tr = document.createElement('tr'); //tabla

        let codigo = document.createElement('td');
        codigo.innerHTML = objeto.cod_bco; //valor del cod_cob al input por INNERHTML

        let codigo_suc = document.createElement('td');
        codigo_suc.innerHTML = objeto.suc_bco;

        let nro_cheque = document.createElement('td');
        nro_cheque.innerHTML = objeto.nro_che; // Corregir el nombre de la variable

        let fecha_vencimiento = document.createElement('td');
        fecha_vencimiento.innerHTML = objeto.fec_vto;

        let fecha_ingreso = document.createElement('td');
        fecha_ingreso.innerHTML = objeto.fec_in;

        let impcheque = document.createElement('td');
        impcheque.innerHTML = objeto.imp_che;

        let endcheque = document.createElement('td');
        endcheque.innerHTML = objeto.end_che;

        let cod_cob = document.createElement('td');
        cod_cob.innerHTML = objeto.cod_cob;

        let fircheque = document.createElement('td');
        fircheque.innerHTML = objeto.fir_che;

        let cuitcheque = document.createElement('td');
        cuitcheque.innerHTML = objeto.cuit_che;

        let destche = document.createElement('td');
        destche.innerHTML = objeto.dest_che;

        let fecout = document.createElement('td');
        fecout.innerHTML = objeto.fec_out;

        let fecrech = document.createElement('td');
        fecrech.innerHTML = objeto.fec_rech;

        let obsche = document.createElement('td');
        obsche.innerHTML = objeto.obs_che;

        tr.append(codigo, codigo_suc, nro_cheque, fecha_vencimiento, fecha_ingreso, impcheque, endcheque, cod_cob, fircheque, cuitcheque, destche, fecout, fecrech, obsche); //Con append sumo los valores de las variables a la tabla

        tr.onclick = () => {
          $('#bco-numero').val(objeto.cod_bco);
          $('#suc-numero').val(objeto.suc_bco);
          $('#num_cheque').val(objeto.nro_che);
          $('#endo-nombre').val(objeto.end_che);
          $('#fec-vto').val(objeto.fec_vto);
          $('#imp-che').val(objeto.imp_che);
          $('#fir-che').val(objeto.fir_che);
          $('#cuit-che').val(objeto.cuit_che);
          $('#destino').val(objeto.dest_che);
          $('#fecha-out').val(objeto.fec_out);
          $('#fecha-rech').val(objeto.fec_rech);
          $('#obs_che').val(objeto.obs_che);

          obtenerNombreBanco();
          cerrarModalEncontrar();
        };

        table_body.append(tr);
      });

      // Verificar si no hay resultados después de recorrer el array
      if (respuesta.length === 0) {
        // Mostrar mensaje en el cuadro modal
        table_body.innerHTML = '<tr><td colspan="14" style="color: red;"><b>No hay cheques rechazados.</b></td></tr>';
      }
    })
    .fail(() => {
      // Manejar el fallo en la solicitud AJAX
      console.error('Error en la solicitud AJAX');

      // Mostrar mensaje de error en el cuadro modal
      table_body.innerHTML = '<tr><td colspan="14">Error al obtener los datos.</td></tr>';
    });
});

myModal.addEventListener('hide.bs.modal', () => {
  $('#tablacheques tr').remove();
});








//---------------
// ALERTA OK CHEQUE COBRADO
function mostrarAlerta() {
  Swal.fire({
    icon: 'success',
    title: 'Cheque Cobrado',
    showConfirmButton: false,
    timer: 1500
  }).then(() => {
    cerrarModal();
    document.getElementById("formulario-cheque").reset(); // Resetea los campos del formulario
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
  request.open("POST", "php/actualizar_cheque_rechazado.php");
  request.onreadystatechange = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        // La solicitud se completó correctamente
        // Muestra la alerta de SweetAlert2
        mostrarAlerta();
      } else {
        // Hubo un error en la solicitud
        console.error("Error en la solicitud AJAX: " + request.status);
      }
    }
  };
  request.send(formData);
});
