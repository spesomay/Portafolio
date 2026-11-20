import React from "react";

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="logo">
            <span className="logo-badge">&lt;MS /&gt;</span>
            <span>Maylen Speso</span>
          </div>

          <div className="footer-social-links">
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
            <a
              href="mailto:maylenspeso@gmail.com"
              className="social-icon-btn"
              title="Email"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>

          <button onClick={scrollToTop} className="back-to-top-btn" title="Volver al inicio">
            <span>Subir</span>
            <i className="fas fa-chevron-up"></i>
          </button>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Maylen Speso. Diseñado y programado con React & CSS moderno.</p>
          <p>Construido con altos estándares UX/UI y rendimiento web.</p>
        </div>
      </div>
    </footer>
  );
}
