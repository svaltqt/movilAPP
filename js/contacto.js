$(document).ready(function()
        { 
            
            $("#registro").click(function()
            {  window.location.href = "./registro.html";
            });

            $("#ingresar").click(function()
            {  window.location.href = "./settings.html";
            });

            $('#oscurin').click(function() {
                $('body').toggleClass('dark-mode');
              });
        });