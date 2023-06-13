$(document).ready(function(){ 
            
    $("#registro").click(function(){  
        window.location.href = "./registro.html";
    });

    $("#ingresar").click(function() {       
    
        var nombre = $('#inputName').val();
        var apellidos = $('#inputSurname').val();
        var email = $('#inputEmail').val();
        var nickname = $('#inputNick').val();
        var contraseña = $('#inputPassword').val();
        var reContraseña = $('#inputPassword2').val();
    
        if (!nombre || !apellidos || !email || !nickname || !contraseña || !reContraseña) {
            $("#alerta").html("<p style='color: red; text-align: center;'>Complete todos los campos</p>");
          return;
        } 
        if (contraseña !== reContraseña) {
            $("#alerta").html("<p style='color: red; text-align: center;'>Las contraseñas no coinciden</p>");
            return;
        }  

        // sessionStorage
        sessionStorage.setItem('nombre', nombre);
        sessionStorage.setItem('apellidos', apellidos);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('nickname', nickname);
        sessionStorage.setItem('contraseña', contraseña);        

        window.location.href = "./settings.html";

    // Realizar la redirección solo si los campos están completos
    
    });




 });

