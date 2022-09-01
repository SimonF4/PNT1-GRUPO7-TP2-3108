function nuevoUsuario(){   

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
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Se ha completado el registro!!!',
            showConfirmButton: false,
            timer: 1500
        })
        setTimeout(() => {
            window.location.href = "https://aulavirtual.instituto.ort.edu.ar/";
        }, 3000);

       
    
    }
}

let boton = document.getElementById("botonRegistro")

boton.addEventListener("click", nuevoUsuario)