/**
 * ==========================================================================
 * CONTACT.JS - CONEXIÓN CON EL SERVIDOR BACKEND (NODE.JS / EXPRESS)
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

    // Feedback visual de carga
    const textoOriginal = btnEnviar.innerHTML;
    btnEnviar.disabled = true;
    btnEnviar.innerHTML = `<span>Enviando mensaje...</span> <i class="fas fa-spinner fa-spin"></i>`;
    alerta.style.display = "none";
    alerta.className = "form-alerta";

    // Detectar URL del backend (si corre en puerto 5000 o en el mismo origen)
    const backendUrl =
      window.location.port === "5000"
        ? "/api/contact"
        : "http://localhost:5000/api/contact";

    try {
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, email, asunto, mensaje })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alerta.className = "form-alerta exito";
        alerta.innerHTML = `<i class="fas fa-check-circle"></i> <span>${data.message || "¡Mensaje enviado con éxito!"}</span>`;
        alerta.style.display = "flex";
        form.reset();
      } else {
        throw new Error(data.message || "Ocurrió un error al procesar el mensaje.");
      }
    } catch (error) {
      console.warn("No se pudo conectar con el backend local:", error);
      
      // Fallback amigable si el servidor no está encendido
      alerta.className = "form-alerta error";
      alerta.innerHTML = `<i class="fas fa-exclamation-circle"></i> <span>Servidor backend no detectado en el puerto 5000. Iniciá el servidor con <code>npm start</code> o escribime directo a <strong>maylenspeso@gmail.com</strong>.</span>`;
      alerta.style.display = "flex";
    } finally {
      btnEnviar.disabled = false;
      btnEnviar.innerHTML = textoOriginal;
    }
  });
});
