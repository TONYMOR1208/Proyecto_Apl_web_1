
function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Validar el formato del correo electrónico usando una expresión regular
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email.match(emailRegex)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }

    if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return false;
    }

    
    return true;
}

// Agregamos un evento click para el botón de inicio de sesión
document.querySelector(".btn-container .btn").addEventListener("click", function (e) {
    if (!validateForm()) {
        e.preventDefault(); // Prevenir la acción predeterminada del botón
    }
});

// Agregamos un evento input para el campo de contraseña
document.getElementById("password").addEventListener("input", function () {
    var password = this.value;
    var passwordError = document.getElementById("password-error");

    if (password.length < 8) {
        passwordError.style.display = "block";
    } else {
        passwordError.style.display = "none";
    }
});

