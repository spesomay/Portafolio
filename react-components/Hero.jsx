import React from "react";

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById("proyectos");
    if (el) {
      const headerHeight = 74;
      const offset = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          
          {/* Lado Izquierdo: Presentación y Acciones */}
          <div className="hero-content">
            <div className="status-pill">
              <span className="status-dot"></span>
              <span>Disponible para nuevos desafíos / Junior Full-Stack</span>
            </div>

            <p className="hero-greeting">¡Hola mundo! 👋 Soy</p>
            <h1 className="hero-title">
              Maylen <span className="gradient-text">Speso</span>
            </h1>

            <div className="hero-roles">
              <span className="role-badge primary">
                <i className="fas fa-layer-group"></i> Desarrolladora Web Full-Stack
              </span>
              <span className="role-badge">
                <i className="fas fa-graduation-cap"></i> Estudiante de Lic. en Sistemas
              </span>
            </div>

            <p className="hero-description">
              Especializada en construir experiencias digitales intuitivas, atractivas y escalables.
              Combino una sólida base técnica en lógica de programación con una pasión continua por las
              tecnologías modernas del ecosistema JavaScript.
            </p>

            <div className="hero-cta-group">
              <a href="#proyectos" onClick={scrollToProjects} className="btn btn-primary">
                <span>Ver Proyectos</span>
                <i className="fas fa-arrow-right"></i>
              </a>
              <a
                href="pdf/Speso Maylen-cv-2026.pdf"
                download="Speso-Maylen-CV.pdf"
                className="btn btn-secondary"
              >
                <i className="fas fa-file-arrow-down"></i>
                <span>Descargar CV</span>
              </a>
            </div>

            <div className="hero-social-strip">
              <span className="hero-social-label">Conectemos:</span>
              <a
                href="https://github.com/tu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="GitHub"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/maylen-speso-a3630332b/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#contacto" className="social-icon-btn" title="Contacto" aria-label="Contacto">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Lado Derecho: Tarjeta Visual y Avatar */}
          <div className="hero-visual-wrapper">
            <div className="avatar-backdrop-glow"></div>

            <div className="avatar-card">
              <img src="img/yo2024.jpg" alt="Fotografía de Maylen Speso" className="avatar-img" />
            </div>

            {/* Chips Flotantes */}
            <div className="floating-chip chip-1">
              <i className="fab fa-react"></i>
              <span>React.js</span>
            </div>
            <div className="floating-chip chip-2">
              <i className="fab fa-node-js"></i>
              <span>Node.js</span>
            </div>
            <div className="floating-chip chip-3">
              <i className="fab fa-js"></i>
              <span>JavaScript</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
