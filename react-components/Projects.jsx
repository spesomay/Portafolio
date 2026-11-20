import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "App-Mamá — E-commerce & Pedidos",
      badge: "Full-Stack · E-Commerce",
      description:
        "Plataforma web full-stack de comercio electrónico desarrollada a medida para un emprendimiento de repostería artesanal. Permite explorar catálogos de productos categorizados, gestionar carrito en tiempo real, procesar pedidos y administrar estados desde un panel de gestión.",
      tags: ["React.js", "Node.js", "Express", "MongoDB", "REST API"],
      demoUrl: "#contacto",
      repoUrl: "https://github.com/tu-usuario/app-mama",
      isCustomBanner: true,
      bannerIcon: "fa-cake-candles",
      bannerLabel: "App-Mamá"
    },
    {
      title: "UrbanaGest — Gestión Municipal",
      badge: "Front-End · Sector Público",
      description:
        "Solución digital de gestión municipal diseñada para acercar la administración pública a la ciudadanía. Facilita la solicitud ágil de turnos, seguimiento de reclamos barriales, consulta de noticias comunales e información de servicios con una interfaz intuitiva y accesible.",
      tags: ["JavaScript (ES6+)", "HTML5 Semántico", "CSS3 Moderno", "Diseño UI/UX"],
      demoUrl: "#contacto",
      repoUrl: "https://github.com/tu-usuario/urbanagest",
      image: "img/UrbanaGest.png"
    },
    {
      title: "MOOD — Recomendador de Actividades",
      badge: "Python · Backend & Web",
      description:
        "Aplicación web interactiva que analiza el estado de ánimo seleccionado por el usuario y recomienda planes culturales, gastronómicos y de entretenimiento en diferentes regiones del país, facilitando la toma de decisiones de ocio.",
      tags: ["Python", "SQLite", "JavaScript", "CSS3"],
      demoUrl: "#contacto",
      repoUrl: "https://github.com/tu-usuario/mood",
      image: "img/MOOD.png"
    }
  ];

  return (
    <section id="proyectos" className="section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">
            <i className="fas fa-folder-open"></i> Portfolio
          </span>
          <h2 className="section-title">
            Proyectos <span className="gradient-text">Destacados</span>
          </h2>
          <p className="section-subtitle">
            Aplicaciones reales y funcionales desarrolladas de punta a punta.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <article key={idx} className="project-card">
              <div className="project-media">
                <span className="project-type-tag">{proj.badge}</span>
                {proj.isCustomBanner ? (
                  <div className="project-banner-fallback">
                    <div className="banner-pattern"></div>
                    <i className={`fas ${proj.bannerIcon} banner-icon-showcase`}></i>
                    <span className="banner-label">{proj.bannerLabel}</span>
                  </div>
                ) : (
                  <img src={proj.image} alt={proj.title} className="project-img" />
                )}
              </div>

              <div className="project-body">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-description">{proj.description}</p>

                <div className="project-tech-tags">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a href={proj.demoUrl} className="project-btn primary" title="Ver Demostración">
                    <i className="fas fa-arrow-up-right-from-square"></i> Demo
                  </a>
                  <a
                    href={proj.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                    title="Código en GitHub"
                  >
                    <i className="fab fa-github"></i> Código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
