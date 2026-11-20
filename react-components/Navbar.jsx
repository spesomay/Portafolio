import React, { useState, useEffect } from "react";

export default function Navbar({ darkMode, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["inicio", "sobre-mi", "habilidades", "proyectos", "contacto"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      const headerHeight = 74;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <a href="#inicio" className="logo" onClick={(e) => handleNavClick(e, "#inicio")}>
          <span className="logo-badge">&lt;MS /&gt;</span>
          <span>Maylen Speso</span>
        </a>

        {/* Menú de Navegación */}
        <nav className={`nav-menu ${mobileMenuOpen ? "open" : ""}`}>
          {[
            { id: "inicio", label: "Inicio" },
            { id: "sobre-mi", label: "Sobre mí" },
            { id: "habilidades", label: "Habilidades" },
            { id: "proyectos", label: "Proyectos" },
            { id: "contacto", label: "Contacto" }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? "active" : ""}`}
              onClick={(e) => handleNavClick(e, `#${item.id}`)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Acciones del Encabezado */}
        <div className="header-actions">
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

          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            aria-label="Cambiar tema"
          >
            <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle-btn"
            aria-label="Alternar menú móvil"
          >
            <i className={`fas ${mobileMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
}
