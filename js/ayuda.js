$(document).ready(function()
        { 
            
            $("#registro").click(function()
            {  window.location.href = "./registro.html";
            });

            $('#oscurin').click(function() {
                $('body').toggleClass('dark-mode');
              });
        });
