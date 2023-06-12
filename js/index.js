

$(document).ready(function()
        { 
            
            $("#agregar").click(function()
            {   // Obtener nombre
                var nombre= $("#nombre").val(); 
                if (nombre === "") {
                    return; // Salir de la función sin hacer nada
                  }
                
                //obtener apellidos               
                var apellidos = $("#apellidos").val().replace(/\s/g, "").toLowerCase();                
                if (apellidos === "") {
                    return; // Salir de la función sin hacer nada
                  }
                
                
                //obtener campo date   
                var date = new Date($('#bday').val());
                if (isNaN(date)) {
                    return; // Salir de la función sin hacer nada
                  }
                var day = date.getDate();
                var month = date.getMonth() + 1;
                var year = date.getFullYear();
                

                // calcular edad
                var today = new Date();
                var age = Math.floor((today-date) / (365.25 * 24 * 60 * 60 * 1000));
                
                // Crear nombre 
                var Fullname = nombre + " " + apellidos;

                // calcular primera letra del nombre
                var letra =nombre.substr(0,1);
                
                
                // Mostrar datos en html
                var add = letra + apellidos +age + "@mededatos.com.co"
                add+="<br>"        

                $("#miEtiqueta").append(add);
            });
        });

