/**
 * ==========================================================================
 * SERVIDOR BACKEND (NODE.JS & EXPRESS) - PORTAFOLIO MAYLEN SPESO
 * ==========================================================================
 */

const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

// Cargar variables de entorno si existe .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Directorio y archivo para guardar los mensajes recibidos
const DATA_DIR = path.join(__dirname, "data");
const MESSAGES_FILE = path.join(DATA_DIR, "messages.json");

// Asegurar que exista la carpeta data y el archivo messages.json
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(MESSAGES_FILE)) {
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify([], null, 2), "utf8");
}

// --------------------------------------------------------------------------
// MIDDLEWARES
// --------------------------------------------------------------------------
app.use(cors()); // Habilita peticiones desde Live Server o cualquier origen
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir los archivos estáticos del frontend (HTML, CSS, JS, imágenes, etc.)
app.use(express.static(path.join(__dirname)));

// --------------------------------------------------------------------------
// RUTAS DE LA API
// --------------------------------------------------------------------------

// 1. Verificación de salud del servidor
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Servidor backend del portafolio en funcionamiento 🚀",
    timestamp: new Date().toISOString()
  });
});

// 2. Ruta para ver los mensajes recibidos (ideal para revisión local)
app.get("/api/messages", (req, res) => {
  try {
    const rawData = fs.readFileSync(MESSAGES_FILE, "utf8");
    const messages = JSON.parse(rawData);
    res.json({ success: true, total: messages.length, messages });
  } catch (error) {
    console.error("Error al leer mensajes:", error);
    res.status(500).json({ success: false, message: "Error al leer los mensajes." });
  }
});

// 3. Procesar formulario de contacto
app.post("/api/contact", async (req, res) => {
  try {
    const { nombre, email, asunto, mensaje } = req.body;

    // Validación básica de campos requeridos
    if (!nombre || !email || !mensaje) {
      return res.status(400).json({
        success: false,
        message: "Por favor, completa los campos requeridos (nombre, email y mensaje)."
      });
    }

    // Crear el objeto del nuevo mensaje
    const nuevoMensaje = {
      id: Date.now().toString(),
      fecha: new Date().toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" }),
      nombre: nombre.trim(),
      email: email.trim(),
      asunto: asunto ? asunto.trim() : "Sin asunto",
      mensaje: mensaje.trim()
    };

    // Guardar en data/messages.json
    try {
      const mensajesExistentes = JSON.parse(fs.readFileSync(MESSAGES_FILE, "utf8"));
      mensajesExistentes.push(nuevoMensaje);
      fs.writeFileSync(MESSAGES_FILE, JSON.stringify(mensajesExistentes, null, 2), "utf8");
    } catch (fsErr) {
      console.error("Error al persistir el mensaje en disco:", fsErr);
    }

    console.log("\n📬 =========================================");
    console.log(`¡Nuevo mensaje recibido de: ${nuevoMensaje.nombre} (${nuevoMensaje.email})`);
    console.log(`Asunto: ${nuevoMensaje.asunto}`);
    console.log(`Mensaje: ${nuevoMensaje.mensaje}`);
    console.log("=========================================\n");

    // Intento opcional de envío por correo si están configuradas las variables en .env
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailReceiver = process.env.EMAIL_RECEIVER || "maylenspeso@gmail.com";

    if (emailUser && emailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: process.env.EMAIL_SERVICE || "gmail",
          auth: {
            user: emailUser,
            pass: emailPass
          }
        });

        await transporter.sendMail({
          from: `"Portafolio Maylen Speso" <${emailUser}>`,
          to: emailReceiver,
          replyTo: nuevoMensaje.email,
          subject: `💼 Nuevo contacto: ${nuevoMensaje.asunto} (${nuevoMensaje.nombre})`,
          text: `Has recibido un nuevo mensaje desde tu portafolio:\n\nNombre: ${nuevoMensaje.nombre}\nEmail: ${nuevoMensaje.email}\nAsunto: ${nuevoMensaje.asunto}\n\nMensaje:\n${nuevoMensaje.mensaje}\n\nFecha: ${nuevoMensaje.fecha}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
              <h2 style="color: #6366f1;">Nuevo mensaje desde tu Portafolio Web</h2>
              <p><strong>Nombre:</strong> ${nuevoMensaje.nombre}</p>
              <p><strong>Email:</strong> <a href="mailto:${nuevoMensaje.email}">${nuevoMensaje.email}</a></p>
              <p><strong>Asunto:</strong> ${nuevoMensaje.asunto}</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 15px 0;">
              <p><strong>Mensaje:</strong></p>
              <blockquote style="background-color: #f9f9f9; padding: 12px 16px; border-left: 4px solid #6366f1; margin: 0;">
                ${nuevoMensaje.mensaje.replace(/\n/g, "<br>")}
              </blockquote>
              <p style="font-size: 12px; color: #888; margin-top: 20px;">Recibido el ${nuevoMensaje.fecha}</p>
            </div>
          `
        });

        console.log(`📧 Notificación por correo enviada con éxito a ${emailReceiver}`);
      } catch (mailError) {
        console.warn("⚠️ No se pudo enviar el correo mediante Nodemailer (revisá las credenciales en .env):", mailError.message);
      }
    } else {
      console.log("ℹ️ Correo guardado localmente en 'data/messages.json'. Para enviar correos reales, configura .env con tus credenciales.");
    }

    return res.status(200).json({
      success: true,
      message: "¡Gracias por contactarme! Tu mensaje ha sido recibido correctamente."
    });

  } catch (error) {
    console.error("Error al procesar el contacto:", error);
    return res.status(500).json({
      success: false,
      message: "Ocurrió un error en el servidor al enviar el mensaje."
    });
  }
});

// Ruta fallback para el frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// --------------------------------------------------------------------------
// INICIALIZACIÓN DEL SERVIDOR
// --------------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`\n🚀 Servidor backend corriendo exitosamente en: http://localhost:${PORT}`);
  console.log(`📁 Archivos estáticos disponibles en http://localhost:${PORT}`);
  console.log(`📬 Endpoint de contacto activo en: http://localhost:${PORT}/api/contact`);
  console.log(`🩺 Endpoint de diagnóstico en: http://localhost:${PORT}/api/health\n`);
});
