const logear_usuario = () => {
    let email = document.getElementById('email-id').value;
    let pass = document.getElementById('pass-id').value;
    let data = new FormData();
    data.append("email",email); 
    data.append("pass",pass); 
    data.append("metodo","logear_usuario"); 
    fetch("app/controller/usuario.php",{
        method:"POST",
        body: data
    }).then(respuesta => respuesta.json())
    .then(async respuesta => {
        if (respuesta[0] == 1) {
            await Swal.fire({icon: "success",title:`${respuesta[1]}`});
            window.location="index.php";
        }else {
            Swal.fire({icon: "error",title:`${respuesta[1]}`});
        }
    });
}

const registrar_usuario = () => {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let data = new FormData();
    data.append("nombre",nombre);
    data.append("apellido",apellido); 
    data.append("email",email);
    data.append("pass",pass); 
    data.append("metodo","registrar_usuario"); 
    fetch("app/controller/usuario.php",{
        method:"POST",
        body: data
    }).then(respuesta => respuesta.json())
    .then(async respuesta => {
        if (respuesta[0] == 1) {
            await Swal.fire({icon: "success",title:`${respuesta[1]}`});
            window.location="login.php";
        }else {
            Swal.fire({icon: "error",title:`${respuesta[1]}`});
        }
    });
}

window.addEventListener('DOMContentLoaded',() => {
    if (document.getElementById('btn-saludar')) {
        document.getElementById('btn-saludar').addEventListener('click',() => {
            logear_usuario();
        });                
    }
    if (document.getElementById('btn-registrar')) {
        document.getElementById('btn-registrar').addEventListener('click',() => {
            registrar_usuario();
        });        
    }
});

$(document).ready( function () {
    $('#myTable').DataTable();
} );
