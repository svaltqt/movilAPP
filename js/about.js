$(document).ready(function()
        { 
            
            $("#registro").click(function()
            {  window.location.href = "./registro.html";
            });
            
            $('#oscurin').click(function() {
                $('body').toggleClass('dark-mode');
              });

            $("#ingresar").click(function()
            {  window.location.href = "./settings.html";
            });

            $("#enviarComentario1").click(function(event) {
              event.preventDefault();
              var nombre = $("#nombre1").val();
              var comentario = $("#comentario1").val();
              
              if (nombre === "" || comentario ==="") {
                return;
              }
              
              $("#cajaComentarios1").append("<p><strong>" + nombre + ":</strong> " + comentario + "</p>");
              $("#nombre1").val("");
              $("#comentario1").val("");
            });
            
            $("#enviarComentario2").click(function(event) {
              event.preventDefault();
              var nombre = $("#nombre2").val();
              var comentario = $("#comentario2").val();
              
              if (nombre === "" || comentario ==="") {
                return;
              }
              
              $("#cajaComentarios2").append("<p><strong>" + nombre + ":</strong> " + comentario + "</p>");
              $("#nombre2").val("");
              $("#comentario2").val("");
            });
            

        });