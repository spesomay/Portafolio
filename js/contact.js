/**
 * ==========================================================================
 * CONTACT.JS - FORMULARIO DE CONTACTO 100% ESTÁTICO (FORMSUBMIT AJAX)
 * Compatible con GitHub Pages y Live Server (sin necesidad de servidor Node.js)
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario-contacto");
  const alerta = document.getElementById("form-alerta");
  const btnEnviar = document.getElementById("btn-enviar");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const asunto = document.getElementById("asunto")?.value.trim() || "Contacto desde el Portafolio";
    const mensaje = document.getElementById("mensaje")?.value.trim();

    if (!nombre || !email || !mensaje) {
      if (alerta) {
        alerta.className = "form-alerta error";
        alerta.innerHTML = `<i class="fas fa-exclamation-circle"></i> <span>Por favor, completá los campos obligatorios.</span>`;
        alerta.style.display = "flex";
      }
      return;
    }

    const textoOriginal = btnEnviar.innerHTML;
    btnEnviar.disabled = true;
    btnEnviar.innerHTML = `<span>Enviando mensaje...</span> <i class="fas fa-spinner fa-spin"></i>`;
    if (alerta) {
      alerta.style.display = "none";
      alerta.className = "form-alerta";
    }

    try {
      // Envío asíncrono con FormSubmit AJAX (100% estático, directo a tu correo)
      const response = await fetch("https://formsubmit.co/ajax/maylenspeso@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          nombre,
          email,
          asunto,
          mensaje,
          _subject: `Nuevo mensaje de ${nombre} desde tu Portafolio Web`
        })
      });

      const data = await response.json();

      if (response.ok) {
        if (alerta) {
          alerta.className = "form-alerta exito";
          alerta.innerHTML = `<i class="fas fa-check-circle"></i> <span>¡Mensaje enviado con éxito! Te responderé a la brevedad.</span>`;
          alerta.style.display = "flex";
        }
        form.reset();
      } else {
        throw new Error(data.message || "Error al enviar mensaje");
      }
    } catch (error) {
      console.warn("Envío por fetch falló, utilizando envío por formulario nativo:", error);
      // Fallback nativo
      form.submit();
    } finally {
      btnEnviar.disabled = false;
      btnEnviar.innerHTML = textoOriginal;
    }
  });
});
