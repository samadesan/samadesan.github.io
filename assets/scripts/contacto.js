document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById('contact-form');
    const check = document.getElementById('aceptar-politica');
    const botonEnviar = document.getElementById('envio-formulario'); // ID corregido

    botonEnviar.addEventListener('click', function(event) {
        // Limpiar errores previos
        document.querySelectorAll('.error-msj').forEach(el => {
            el.textContent = "";
            el.style.display = "none";
        });

        let errores = false;

        // 1. Validar inputs de texto y textarea
        const inputs = formulario.querySelectorAll('input[type="text"], textarea');
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                mostrarError(input, "Este campo es obligatorio");
                errores = true;
            }
        });

        // 2. Validar Email (Específico)
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            mostrarError(email, "Introduce un correo electrónico válido");
            errores = true;
        }

        // 3. Validar Checkbox
        if (!check.checked) {
            mostrarError(check, "Debes aceptar la política de privacidad");
            errores = true;
        }

        if (errores) {
            event.preventDefault(); // Detiene el envío si hay errores
        } else {
            alert("¡Mensaje listo para enviar! Se abrirá tu gestor de correo.");
            // El formulario seguirá su curso hacia el 'mailto'
        }
    });

    function mostrarError(elemento, mensaje) {
        // Buscamos el párrafo de error que está justo después del input (o cerca)
        const contenedor = elemento.closest('div');
        const errorSpan = contenedor.querySelector('.error-msj');
        if (errorSpan) {
            errorSpan.textContent = mensaje;
            errorSpan.style.color = "var(--danger-red)"; // Usando tu variable de root
            errorSpan.style.display = "block";
            errorSpan.style.fontSize = "0.7rem";
            errorSpan.style.marginTop = "5px";
        }
    }
});