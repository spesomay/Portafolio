import React from "react";

export default function About() {
  return (
    <section id="sobre-mi" className="section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">
            <i className="fas fa-user-check"></i> Conóceme más
          </span>
          <h2 className="section-title">
            Sobre mí & <span className="gradient-text">Enfoque de Trabajo</span>
          </h2>
          <p className="section-subtitle">
            Cómo pienso, cómo resuelvo problemas y qué aporto en cada proyecto.
          </p>
        </div>

        <div className="about-grid">
          
          {/* Lado Visual: Ilustración de Personaje / Tarjeta de Resumen */}
          <div className="about-visual">
            <div className="about-avatar-box">
              <img src="img/hola.png" alt="Maylen Modo Claro" className="character-light" />
              <img src="img/ModoOscuroYo.png" alt="Maylen Modo Oscuro" className="character-dark" />
            </div>

            <div className="about-highlights-card">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div>
                  <strong>Formación Técnica:</strong>
                  <div>Egresada Escuela Técnica N°3 (Programación)</div>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-university"></i>
                </div>
                <div>
                  <strong>Carrera Universitaria:</strong>
                  <div>Estudiante de Licenciatura en Sistemas</div>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <div>
                  <strong>Mentalidad:</strong>
                  <div>Pragmatismo, código limpio y aprendizaje constante</div>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Texto: Historia y Pilares */}
          <div className="about-text-content">
            <h3 className="about-lead">
              Apasionada por la intersección entre la robustez de la arquitectura backend y la elegancia del frontend.
            </h3>

            <p className="about-p">
              Mi camino en la tecnología comenzó en la <strong>Escuela Técnica N°3</strong> con especialidad en <strong>Programación</strong>. Esta formación me otorgó una comprensión profunda de la lógica computacional, estructuras de datos y metodologías para abordar desafíos complejos de manera estructurada.
            </p>

            <p className="about-p">
              Actualmente profundizo mis conocimientos como <strong>Estudiante de la Licenciatura en Sistemas</strong>, incorporando conceptos avanzados de ingeniería de software, arquitectura de sistemas y trabajo colaborativo.
            </p>

            <p className="about-p">
              Mi <strong>enfoque pragmático</strong> me impulsa a priorizar soluciones que aporten verdadero valor: código legible, componentes reutilizables, interfaces accesibles y sistemas mantenibles a largo plazo.
            </p>

            <div className="about-pillars-grid">
              <div className="pillar-card">
                <div className="pillar-header">
                  <i className="fas fa-puzzle-piece pillar-icon"></i>
                  <span className="pillar-title">Resolución Pragmática</span>
                </div>
                <p className="pillar-desc">
                  Descomposición de problemas complejos en soluciones técnicas claras y eficientes.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-header">
                  <i className="fas fa-wand-magic-sparkles pillar-icon"></i>
                  <span className="pillar-title">Criterio UX/UI</span>
                </div>
                <p className="pillar-desc">
                  Cuidado milimétrico del diseño, adaptabilidad multidispositivo y accesibilidad web.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-header">
                  <i className="fas fa-code-merge pillar-icon"></i>
                  <span className="pillar-title">Clean Code & Git</span>
                </div>
                <p className="pillar-desc">
                  Buenas prácticas, control de versiones ordenado y arquitectura modular preparada para crecer.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-header">
                  <i className="fas fa-rocket pillar-icon"></i>
                  <span className="pillar-title">Evolución Continua</span>
                </div>
                <p className="pillar-desc">
                  Curiosidad activa y rápida asimilación de nuevas herramientas, librerías y estándares.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
