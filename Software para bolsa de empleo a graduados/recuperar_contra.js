document.getElementById('recoveryButton').addEventListener('click', function (event) {
    event.preventDefault(); // Prevenir el comportamiento de envío de formulario por defecto

    var emailInput = document.getElementById('email').value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(emailInput)) {
        alert("Por favor, introduce una dirección de correo electrónico válida.");
    } else {
        // Simulación de envío de correo con nueva contraseña
        alert("¡Revise su correo! Su nueva contraseña ha sido enviada.");
        // Aquí normalmente enviarías un correo real con la nueva contraseña
        document.getElementById('passwordRecoveryForm').submit();
    }
});
