function nuevoUsuario(){   

    let nuevoUsuario = document.getElementById("nuevoUsuario").value;
    let nuevaPass = document.getElementById("nuevaPass").value;
    let verificacionPass = document.getElementById("verificacionPass").value;

     if(nuevoUsuario.length == 0){
        Swal.fire({
            title: 'Error!',
            text: 'No puedes dejar el nombre de usuario vacio',
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
    }    else {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Se ha completado el registro!!!',
            showConfirmButton: false,
            timer: 1500
        })
    
    }
}