//Haz tú validación en javascript acá

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contactForm");

    form.addEventListener("submit", function (event) {
        const nombre = form.elements["nombre"];
        const email = form.elements["email"];
        const asunto = form.elements["asunto"];
        const mensaje = form.elements["mensaje"];

        let hasError = false;
        let errorMessage = "";

        // El nombre debe tener al menos 3 caracteres
        if (nombre.value.trim().length < 3) {
            errorMessage += "El nombre debe tener al menos 3 caracteres.\n";
            hasError = true;
        }

        // El correo electrónico usa un patrón básico
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            errorMessage += "Por favor, ingrese un correo electrónico válido.\n";
            hasError = true;
        }

        // El asunto debe tener al menos 5 caracteres
        if (asunto.value.trim().length < 5) {
            errorMessage += "El asunto debe tener al menos 5 caracteres.\n";
            hasError = true;
        }

        // El mensaje debe tener al menos 10 caracteres
        if (mensaje.value.trim().length < 10) {
            errorMessage += "El mensaje debe tener al menos 10 caracteres.\n";
            hasError = true;
        }

        if (hasError) {
            event.preventDefault(); // Previene el envío del formulario
            alert("Errores en el formulario:\n" + errorMessage);
        }
    });
});
