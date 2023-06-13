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
                event.preventDefault(); // Evitar el comportamiento predeterminado del botón
              // Aquí puedes realizar las acciones necesarias al hacer clic en el botón "Guardar"
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
                event.preventDefault(); // Evitar el comportamiento predeterminado del botón
              // Aquí puedes realizar las acciones necesarias al hacer clic en el botón "Guardar"
                $("#modalContraseña").hide();
            });

        // Modal metodos de Pago    
            $("#abrirMetodosPago").click(function() {
                $("#modalPago").show();
            });       
            $(window).click(function(event) {
                if (event.target == $("#modalPago")[0]) {
                $("#modalPago").hide();
                }
            });
            $("#GuardarmetodoPago").click(function(event) {
                event.preventDefault(); // Evitar el comportamiento predeterminado del botón
              // Aquí puedes realizar las acciones necesarias al hacer clic en el botón "Guardar"
                $("#modalPago").hide();
            });
            

              
});
      

