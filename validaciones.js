function nuevoUsuario(evento){   
    evento.preventDefault();
    let nuevoUsuario = document.getElementById("nuevoUsuario").value;
    let apellido = document.getElementById("apellido").value;
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let nuevaPass = document.getElementById("nuevaPass").value;
    let verificacionPass = document.getElementById("verificacionPass").value;

     if(nuevoUsuario.length == 0 || nombre.length == 0 || apellido.length == 0){
        Swal.fire({
            title: 'Error!',
            text: 'No puedes dejar campos vacios',
            icon: 'error',
            timer: 1500
        })    
    }else if(nuevaPass != verificacionPass ){
        Swal.fire({
            title: 'Error!',
            text: 'Las contraseñas no son iguales',
            icon: 'error',
            timer: 1500
        })
        return false;
    } else if(edad < 18) {
        Swal.fire({
            title: 'Error!',
            text: 'La edad debe ser mayor a 18',
            icon: 'error',
            timer: 1500
        })
        return false;
    }  else {
        alert("registro completado")
        this.submit();
      
    } 
    
    
}


let boton = document.getElementById("form")

boton.addEventListener("submit", nuevoUsuario)

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function login() {
var a = getParameterByName('txt1');
var b = getParameterByName('txt2'); 

 if (document.getElementById("usuario").value == a && 
 document.getElementById("contraseña").value == b && document.getElementById("contraseña").value.length != 0) {
    alert("Bienvenido")
}

else {
    alert("credenciales invalidas");
}
}
