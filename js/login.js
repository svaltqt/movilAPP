$(document).ready(function()
        { 
            
            
            $("#registro").click(function(){
                window.location.href = "./registro.html";
            });
            $('#oscurin').click(function() {
                $('body').toggleClass('dark-mode');
              });

            $("#ingresar").click(function() {
                var storageEmail = sessionStorage.getItem('email');
                var storageContraseña = sessionStorage.getItem('contraseña');
            
                var email = $('#inputEmail').val();
                var contraseña = $('#inputPassword').val();
            
                // Verificar si los campos están vacíos
                if (!email || !contraseña) {
                    alert('Por favor, complete todos los campos.');
                    return;
                }
                if (storageContraseña !== contraseña){
                    alert('Los datos ingresados son incorrectos.');
                    return;
                }

                // Verificar si los valores coinciden con los almacenados en sessionStorage
                if (storageEmail !== email) {
                    alert('Los datos ingresados son incorrectos.');
                    return;
                }
            
                window.location.href = "./settings.html";
            });
            
        });

