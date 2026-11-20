# 🚀 Portafolio Web Personal — Maylen Speso

> **Desarrolladora Web Full-Stack | Estudiante de Licenciatura en Sistemas**

Bienvenida a tu portafolio web con tu **diseño original conservado al 100%**, el diseño de **Habilidades y Herramientas** optimizado y un **servidor backend completo y funcional** desarrollado en Node.js y Express.

---

## 🛠️ ¿Qué incluye esta versión?

1. **Tu diseño visual original:**
   - Paleta de colores pastel y gradientes distintivos (`#7EDFFF`, `#FFB6E6`, `#FFEAB5`).
   - Cabecera fija (*sticky header*) con desplazamiento suave (*smooth scroll*).
   - Botón toggle de tema claro y oscuro con persistencia en `localStorage`.
   - SVG blob animado y formas decorativas flotantes (`blob1` a `blob6`, círculos).
   - Foto personal en círculo de 350px y botones con bordes en gradiente.
   - Sección "Sobre mí" con alternancia de personaje (`hola.png` y `ModoOscuroYo.png`).
   - Tus tarjetas de proyectos con bordes en gradiente y hover elevation:
     - **App-Mamá** (Full-Stack E-commerce para repostería en React, Node.js, Express, MongoDB).
     - **UrbanaGest** (Gestión municipal con `UrbanaGest.png`).
     - **MOOD** (Recomendador de actividades con `MOOD.png`).

2. **Sección de Habilidades y Herramientas (Conservada de la propuesta):**
   - Agrupada de forma clara y profesional:
     - **Front-End:** React.js, JavaScript, HTML5, CSS3.
     - **Back-End & DB:** Node.js, Express.js, MongoDB, Python.
     - **Herramientas:** Git, GitHub, Postman, Responsive Web.
   - Adaptada visualmente con tarjetas de borde en gradiente a juego con tu paleta.

3. **Backend en Node.js & Express 100% Funcional:**
   - **Archivo:** `server.js`
   - **Servidor estático:** Sirve todo tu portafolio en `http://localhost:5000`.
   - **Endpoint de Contacto:** `POST /api/contact`
     - Recibe los datos del formulario de `email.html` (nombre, email, asunto, mensaje).
     - Valida los campos.
     - Guarda automáticamente los mensajes recibidos en `data/messages.json` para que nunca pierdas un mensaje, incluso sin configurar correos.
     - Soporta envío automático a tu casilla mediante **Nodemailer** si completas las credenciales en `.env`.
   - **Endpoint de Diagnóstico:** `GET /api/health`
   - **Endpoint para ver mensajes:** `GET /api/messages`

---

## 🚦 Cómo poner en marcha el Backend

### 1. Iniciar el servidor
En tu terminal de Visual Studio Code (o PowerShell / CMD), ejecuta:

```bash
npm start
```
*(O también: `node server.js`)*

Verás el siguiente mensaje de confirmación:
```text
🚀 Servidor backend corriendo exitosamente en: http://localhost:5000
📁 Archivos estáticos disponibles en http://localhost:5000
📬 Endpoint de contacto activo en: http://localhost:5000/api/contact
```

### 2. Probar el portafolio y el formulario
1. Abre tu navegador en **`http://localhost:5000`**.
2. Navega a la página de contacto haciendo clic en el icono de correo o visitando **`http://localhost:5000/email.html`**.
3. Completa el formulario y presiona **"Enviar mensaje"**.
4. ¡Listo! Verás el mensaje de confirmación en pantalla, la notificación en la consola de tu terminal y el mensaje guardado en tu archivo `data/messages.json`.

---

## 📧 (Opcional) Configurar envío real de correos a tu Gmail

Por defecto, cada mensaje se guarda en `data/messages.json`. Si además deseas que te llegue un correo electrónico a tu bandeja de entrada:

1. Abre el archivo `.env` en la raíz del proyecto.
2. Genera una **Contraseña de Aplicación** en tu cuenta de Google:
   - Ve a [Seguridad de Google](https://myaccount.google.com/security).
   - Asegúrate de tener activada la *Verificación en dos pasos*.
   - Busca **"Contraseñas de aplicaciones"** y genera una para "Correo".
3. Completa en tu `.env`:
   ```env
   EMAIL_USER=tu_correo@gmail.com
   EMAIL_PASS=tu_password_de_aplicacion_generada
   EMAIL_RECEIVER=maylenspeso@gmail.com
   ```
4. Reinicia el servidor con `npm start`.
