$(document).ready(function()
        { 
            
            $("#registro").click(function()
            {  window.location.href = "./registro.html";
            });

            $('#oscurin').click(function() {
              $('body').toggleClass('dark-mode');
            });


            $("#comienzaYA").click(function() {
                var origen = $('#origen').val();
                var destino = $('#destino').val();
                
                // Hacer algo con los valores obtenidos
                console.log("Origen:", origen);
                console.log("Destino:", destino);               
                
                sessionStorage.setItem('origen', origen);
                sessionStorage.setItem('destino', destino);

                $('#origen').val('');
                $('#destino').val('');              
              });
        });

