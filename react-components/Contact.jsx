import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
  });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "Enviando mensaje..." });

    try {
      const response = await fetch("https://formsubmit.co/maylenspeso@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...formData,
          _captcha: "false",
          _subject: "Nuevo contacto desde Portafolio React - Maylen Speso"
        })
      });

      if (response.ok) {
        setStatus({
          state: "success",
          message: "¡Mensaje enviado con éxito! Te responderé a la brevedad."
        });
        setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
      } else {
        throw new Error();
      }
    } catch {
      setStatus({
        state: "success",
        message: "¡Gracias por contactarme! También podés escribirme a maylenspeso@gmail.com"
      });
      setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
    }
  };

  return (
    <section id="contacto" className="section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">
            <i className="fas fa-paper-plane"></i> Charlemos
          </span>
          <h2 className="section-title">
            Ponte en <span className="gradient-text">Contacto</span>
          </h2>
          <p className="section-subtitle">
            ¿Tenés una propuesta laboral, proyecto en mente o querés conectar? Escríbeme.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Canales Directos */}
          <div className="contact-info-col">
            <p className="contact-lead-text">
              Estoy abierta a oportunidades como <strong>Desarrolladora Full-Stack Junior</strong> o{" "}
              <strong>Front-End</strong>, pasantías y proyectos innovadores.
            </p>

            <div className="contact-cards-list">
              <a
                href="https://www.linkedin.com/in/maylen-speso-a3630332b/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-card"
              >
                <div className="channel-icon">
                  <i className="fab fa-linkedin-in"></i>
                </div>
                <div className="channel-details">
                  <span className="channel-label">LinkedIn</span>
                  <span className="channel-value">in/maylen-speso</span>
                </div>
              </a>

              <a
                href="https://github.com/tu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-card"
              >
                <div className="channel-icon">
                  <i className="fab fa-github"></i>
                </div>
                <div className="channel-details">
                  <span className="channel-label">GitHub</span>
                  <span className="channel-value">github.com/maylenspeso</span>
                </div>
              </a>

              <a href="mailto:maylenspeso@gmail.com" className="contact-channel-card">
                <div className="channel-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="channel-details">
                  <span className="channel-label">Correo Electrónico</span>
                  <span className="channel-value">maylenspeso@gmail.com</span>
                </div>
              </a>

              <div className="contact-channel-card">
                <div className="channel-icon">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div className="channel-details">
                  <span className="channel-label">Ubicación & Modalidad</span>
                  <span className="channel-value">Buenos Aires, Argentina · Remoto / Híbrido</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="nombre" className="form-label">
                  Nombre y Apellido
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Tu nombre completo"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="nombre@ejemplo.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="asunto" className="form-label">
                  Asunto
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Propuesta laboral / Proyecto"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje" className="form-label">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Contame tu idea o propuesta..."
                  required
                ></textarea>
              </div>

              {status.state !== "idle" && (
                <div className={`form-status-alert ${status.state}`} style={{ display: "flex" }}>
                  <i
                    className={`fas ${
                      status.state === "loading"
                        ? "fa-spinner fa-spin"
                        : status.state === "success"
                        ? "fa-circle-check"
                        : "fa-circle-exclamation"
                    }`}
                  ></i>
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status.state === "loading"}
                className="btn btn-primary"
                style={{ width: "100%" }}
              >
                <span>{status.state === "loading" ? "Enviando..." : "Enviar Mensaje"}</span>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
