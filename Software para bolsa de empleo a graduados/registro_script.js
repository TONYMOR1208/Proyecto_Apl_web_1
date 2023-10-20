function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (name.trim() === "") {
        alert("Por favor, ingresa tu nombre.");
        return false;
    }

    if (!email.match(emailRegex)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }

    if (username.trim() === "") {
        alert("Por favor, ingresa tu nombre de usuario.");
        return false;
    }

    if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return false;
    }

    if (password !== confirmPassword) {
        document.getElementById("password-error").style.display = "block";
        return false;
    }

    // Resto de la validación (si es necesario) aquí

    // Si la validación pasa, el formulario se enviará a "recu_contra.html"
    return true;
}