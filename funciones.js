let usuario = "Isaac";
let contrasena = "Ort123";

function iniciarsesion () {
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contrasena").value;

    if (usuario === "Isaac" && contraseña === "Ort123") {
        alert ("Bienvenido a Drugstore Payment");
        window.location.href="Home.html";
    }else{
       alert ("Usuario y/o contraseña Incorrectas");
    }
}

function validarFormulario() {
    var contrasena = document.getElementById("contrasena").value;
    var contrasenaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    
    if (!contrasena.match(contrasenaRegex)) {
      document.getElementById("contrasenaError").textContent = "La contraseña debe contener al menos una mayúscula, una minúscula y un número, y tener al menos 6 caracteres.";
      return false;
    } else {
      document.getElementById("contrasenaError").textContent = "";
    }
  
    var usuario = document.getElementById("usuario").value;
    var usuarioRegex = /^[a-zA-Z0-9]{6,}$/;
  
    if (!usuario.match(usuarioRegex)) {
      document.getElementById("usuarioError").textContent = "El nombre de usuario debe contener al menos 6 caracteres alfanuméricos.";
      return false;
    } else {
      document.getElementById("usuarioError").textContent = "";
    }
    return true; 
  }
  
