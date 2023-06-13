$(document).ready(function()
        { 

            
            $("#salir").click(function()
            {  window.location.href = "./index.html";
            });

            var modal = $("#modalCuenta");
            var OpenModal = $("#abrirCuenta");            
            var form = $("#cuenta-form");

              OpenModal.click(function() {
                modal.show();
              });            
              
            
              $(window).click(function(event) {
                if (event.target == modal[0]) {
                  modal.hide();
                }
              });
            
              form.submit(function(event) {
                event.preventDefault(); // Evitar el envío del formulario
                // Aquí puedes realizar las acciones necesarias al hacer clic en el botón "Guardar"
                console.log("Formulario enviado");
                modal.hide();
              });
});
      

