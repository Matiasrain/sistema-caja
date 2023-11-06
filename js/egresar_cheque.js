function obtenerNombreBancoEgreso() {
  var numeroBanco = $('#bco-numeroe').val();
  var numeroSucursal = $('#suc-numeroe').val();
  console.log("fdfdf");
  $.ajax({
    
    url: '../php/obtener_Banco.php',
    method: 'POST',
    data: { numeroBanco: numeroBanco, numeroSucursal: numeroSucursal },
    success: function(response) {
      $('#bco-nombree').val(response);
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
    url: '../php/obtener_Banco.php',
    method: 'POST',
    data: { numeroBanco: numeroBanco, numeroSucursal: numeroSucursal },
    success: function(response) {
      $('#bco-numeroe').val(numeroBanco);
      $('#suc-numeroe').val(numeroSucursal);
      $('#bco-nombree').val(response);
    },
    error: function() {
      console.log('Error en la solicitud AJAX para obtener el nombre del banco');
    }
  });
}

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
function obtenerNombreBancoCaja() {
  var numeroBanco = $('#bco-numero').val();
  var numeroSucursal = $('#suc-numero').val();
  console.log("dfdfd");

  $.ajax({
    url: '../php/obtener_Banco.php',
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

function obtenerDatosCheque() {
    var numerocheque = $('#num_cheque').val();
    
      
    $.ajax({
      url: '../php/obtener_cheque.php',
      method: 'POST',
      data: { numero: numerocheque },
      success: function(response) {
        console.log(response);
        var valores = response.split(" - ");
        var endche = valores[0];
        var fecvto = valores[1];
        var impche = valores[2];
        var firche = valores[3];
        var cuitche = valores[4];
        var numeroBanco = valores[5];
        var numeroSucursal = valores[6];
        
        $('#endosantee').val(endche);
        $('#fec-vto').val(fecvto);
        $('#imp-che').val(impche);
        $('#fir-che').val(firche);
        $('#cuit-che').val(cuitche);
        $('#bco-numeroe').val(numeroBanco);
        $('#suc-numeroe').val(numeroSucursal);
        obtenerNombreBancoEgreso()
      } ,
      error: function() {
        // Manejar el error en caso de que la solicitud falle
      }
    });
    
  }

  
  function cerrarModalEgreso() {
    $('#modalEgresarCheque').modal('hide');
    
    
  }
  function cerrarModalEncontrar() {
    $('#exampleModal').modal('hide');
    

  }

//ENCONTRAR CHEQUES INGRESADOS

// function encontrarCheques() {
//   const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
  
//   const tableBody = document.querySelector('#tablacheques');

//   // Realizar la solicitud al servidor para obtener los cheques ingresados y no egresados
//   $.get('../php/obtener_cheques_ingresados.php') // Reemplaza la URL con la correcta para obtener los cheques
//     .done((res) => {
//       console.log(res);
//       let respuesta = JSON.parse(res)
//     // console.log(respuesta)
//     tableBody.innerHTML = '';
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



//         tr.append(codigo, codigo_suc,nro_cheque, fecha_vencimiento,fecha_ingreso,impcheque,endcheque, cod_cob, fircheque,cuitcheque)   //Con append sumo los valores de las variables a la tabla
        
        
        
//         tr.onclick = ()=>{
//             // console.log(`${objeto.cod_cob} ${objeto.nom_cob}`)
//              $('#bco-numero').val(objeto.cod_bco)
//              $('#suc-numero').val(objeto.suc_bco)
//              $('#num_cheque').val(objeto.nro_che)
//              $('#endosantee').val(objeto.end_che)
//              $('#fec-vto').val(objeto.fec_vto)
//              //$('#fec-in').val(objeto.fec_in)
//              $('#imp-che').val(objeto.imp_che)
//              $('#fir-che').val(objeto.fir_che)
//              $('#cuit-che').val(objeto.cuit_che)
//              //prueba de ingreso rechazados
//              $('#destino').val(objeto.dest_che)
//              $('#fecha-out').val(objeto.fec_out)

//              obtenerNombreBanco();
//              cerrarModalEncontrar();
//             //document.getElementById('codigo-cobrador').value = objeto.cod_cob
//         }
        
//         tableBody.append(tr);
        
        
//     })
//     myModal.show();
//   })
 
// }



function encontrarCheques() {
  const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
  const tableBody = document.querySelector('#tablacheques');

  // Realizar la solicitud al servidor para obtener los cheques ingresados y no egresados
  $.get('../php/obtener_cheques_ingresados.php')
      .done((res) => {
          try {
              let response = JSON.parse(res);

              // Verificar si no hay resultados
              if (response.sinResultados) {
                  // Mostrar mensaje en el cuadro modal
                  tableBody.innerHTML = '<tr><td colspan="10" style="color: red;"><b>No hay cheques sin egresar.</b></td></tr>';                  myModal.show();
              } else {
                  // Limpiar el contenido de la tabla
                  tableBody.innerHTML = '';

                  //RECORRO CON MAP LOS OBJETOS DEL JSON
                  response.cheques.map((objeto) => {
                      let tr = document.createElement('tr'); //tabla

                      let codigo = document.createElement('td');
                      codigo.innerHTML = objeto.cod_bco; //valor del cod_cob al input por INNERHTML
                      let codigo_suc = document.createElement('td')
                      codigo_suc.innerHTML = objeto.suc_bco

                      let nro_cheque = document.createElement('td')
                      nro_cheque.innerHTML = objeto.nro_che
                      let fecha_vencimiento = document.createElement('td')
                      fecha_vencimiento.innerHTML = objeto.fec_vto
                      let fecha_ingreso = document.createElement('td')
                      fecha_ingreso.innerHTML = objeto.fec_in
                      let impcheque = document.createElement('td')
                      impcheque.innerHTML = objeto.imp_che
                      let endcheque = document.createElement('td')
                      endcheque.innerHTML = objeto.end_che
                      let cod_cob = document.createElement('td')
                      cod_cob.innerHTML = objeto.cod_cob
                      let fircheque = document.createElement('td')
                      fircheque.innerHTML = objeto.fir_che
                      let cuitcheque = document.createElement('td')
                      cuitcheque.innerHTML = objeto.cuit_che

                      tr.append(codigo, codigo_suc,nro_cheque, fecha_vencimiento,fecha_ingreso,impcheque,endcheque, cod_cob, fircheque,cuitcheque)   //Con append sumo los valores de las variables a la tabla

                      tr.onclick = () => {
                        $('#bco-numero').val(objeto.cod_bco)
                                      $('#suc-numero').val(objeto.suc_bco)
                                      $('#num_cheque').val(objeto.nro_che)
                                      $('#endosantee').val(objeto.end_che)
                                      $('#fec-vto').val(objeto.fec_vto)
                                      //$('#fec-in').val(objeto.fec_in)
                                      $('#imp-che').val(objeto.imp_che)
                                      $('#fir-che').val(objeto.fir_che)
                                      $('#cuit-che').val(objeto.cuit_che)
                                      //prueba de ingreso rechazados
                                      $('#destino').val(objeto.dest_che)
                                      $('#fecha-out').val(objeto.fec_out)
                          
                                      obtenerNombreBanco();
                                      cerrarModalEncontrar();
                                      //document.getElementById('codigo-cobrador').value = objeto.cod_cob
                      };

                      tableBody.append(tr);
                  });

                  myModal.show();
              }
          } catch (error) {
              // Manejar el error al parsear JSON
              console.error('Error al parsear JSON:', error);

              // Mostrar mensaje de error en el cuadro modal
              tableBody.innerHTML = '<tr><td colspan="10">Error al obtener los datos.</td></tr>';
              myModal.show();
          }
      })
      .fail(() => {
          // Manejar el fallo en la solicitud AJAX
          console.error('Error en la solicitud AJAX');

          // Mostrar mensaje de error en el cuadro modal
          tableBody.innerHTML = '<tr><td colspan="10">Error al obtener los datos.</td></tr>';
          myModal.show();
      });
      
}




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
function cerrarModal() {
  $('#modalIngresarCheque').modal('hide');
}

function cerrarSesion() {
  localStorage.removeItem("isLoggedIn");
  window.location.reload(true);
  window.location.href = "login.html";

}



