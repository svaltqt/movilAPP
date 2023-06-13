$(document).ready(function()
        { 

            
            $("#salir").click(function()
            {  window.location.href = "./index.html";
            });

    // Modal Cuenta    
            $("#abrirCuenta").click(function() {
                $("#modalCuenta").show();
            });       
            $(window).click(function(event) {
                if (event.target == $("#modalCuenta")[0]) {
                $("#modalCuenta").hide();
                }
            });

            $("#GuardarCuenta").click(function(event) {
                event.preventDefault(); 
                
                var nombre = $('#inputName').val();
                var apellidos = $('#inputApellidos').val();
                var email = $('#inputEmail').val();

                
                if (nombre !== "") {
                    sessionStorage.setItem('nombre', nombre);
                }
                if (apellidos !== "") {
                    sessionStorage.setItem('apellidos', apellidos);
                    
                }
                if (email !== "") {
                    sessionStorage.setItem('email', email);
                }             
                
                
                $("#modalCuenta").hide();
            });

    // Modal Contraseña    
            $("#abrirContraseña").click(function() {
                $("#modalContraseña").show();
            });       
            $(window).click(function(event) {
                if (event.target == $("#modalContraseña")[0]) {
                $("#modalContraseña").hide();
                }
            });
            $("#GuardarContraseña").click(function(event) {
                event.preventDefault();
                
                var storageContraseña = sessionStorage.getItem('contraseña');
                var actual = $('#inputPassword').val();
                var nueva = $('#inputPassword2').val();
                
                
                if (actual === "" || nueva === "") {
                  $("#resultadoContraseña").html("<p style='color: red; text-align: center;'>Por favor, complete todos los campos.</p>");
                  return;
                }
                
                if (storageContraseña !== actual) {
                  $("#resultadoContraseña").html("<p style='color: red; text-align: center;'>La contraseña actual es incorrecta.</p>");
                  return;
                }
                
                sessionStorage.setItem('contraseña', nueva);                
                $("#modalContraseña").hide();
              });
              
              

        // Modal Metodos de Pago    
        $("#abrirMetodosPago").click(function() {
            $("#modalPago").show();
        });       
        
        $(window).click(function(event) {
            if (event.target == $("#modalPago")[0]) {
                $("#modalPago").hide();
            }
        });
        
        $("#GuardarMetodoPago").click(function() {                
            var numeroTarjeta = $('#inputNum').val();
            var fechaExpedicion = $('#inputFecha').val();
            var nombreTarjeta = $('#inputTarjeta').val();
            var csv = $('#inputCSV').val();
            
            $("#resultadoMetodo").html("");          
            if (numeroTarjeta ==="" || fechaExpedicion ==="" || nombreTarjeta ==="" || csv === "" || csv ==="") {
                $("#resultadoMetodo").html("<p style='color: red; text-align: center;'>Por favor, complete todos los campos.</p>");
                return;
            } 
            if (csv.length !== 3 || isNaN(csv)) {
                $("#resultadoMetodo").html("<p style='color: red; text-align: center;'>El número CSV debe tener 3 dígitos y ser numérico.</p>");
                return;
            }
            if (numeroTarjeta.length !== 16 || isNaN(numeroTarjeta)) {
                $("#resultadoMetodo").html("<p style='color: red; text-align: center;'>El número de tarjeta debe tener 16 dígitos y ser numérico.</p>");
                return;
            }
            if (fechaExpedicion.length !== 4 || isNaN(fechaExpedicion)) {
                $("#resultadoMetodo").html("<p style='color: red; text-align: center;'>La fecha de expedición debe tener 4 dígitos y ser numérica.</p>");
                return;
            }
            if (/\d/.test(nombreTarjeta)) {
                $("#resultadoMetodo").html("<p style='color: red; text-align: center;'>El campo nombre no debe contener números.</p>");
                return;
            }
            sessionStorage.setItem('numeroTarjeta', numeroTarjeta);
            sessionStorage.setItem('fechaExpedicion', fechaExpedicion);
            sessionStorage.setItem('nombreTarjeta', nombreTarjeta);
            sessionStorage.setItem('csv', csv);
            
            
            $('#inputNum').val('');
            $('#inputFecha').val('');
            $('#inputTarjeta').val('');
            $('#inputCSV').val('');
            
            // Cerrar el modal
            $("#modalPago").hide();
        });
        
        
              


    // Modal Historial    
            $("#abrirHistorial").click(function() {
                $("#modalHistorial").show();
            });       
            $(window).click(function(event) {
                if (event.target == $("#modalHistorial")[0]) {
                $("#modalHistorial").hide();
                }
            });          
            

              
});
      

