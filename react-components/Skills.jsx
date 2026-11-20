import React from "react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Front-End",
      subtitle: "Interfaces reactivas y modernas",
      icon: "fa-desktop",
      color: "var(--accent-purple)",
      skills: [
        { name: "React.js", level: "Hooks / Componentes", icon: "fab fa-react" },
        { name: "JavaScript", level: "ES6+ / Asincronía", icon: "fab fa-js" },
        { name: "HTML5", level: "Semántico / Accesible", icon: "fab fa-html5" },
        { name: "CSS3", level: "Flexbox / Grid / Anim", icon: "fab fa-css3-alt" }
      ]
    },
    {
      title: "Back-End & DB",
      subtitle: "Lógica, APIs y persistencia",
      icon: "fa-server",
      color: "var(--accent-cyan)",
      skills: [
        { name: "Node.js", level: "Runtime & Servidores", icon: "fab fa-node-js" },
        { name: "Express.js", level: "APIs RESTful", icon: "fas fa-network-wired" },
        { name: "MongoDB", level: "NoSQL / Mongoose", icon: "fas fa-database" },
        { name: "Python", level: "Scripting & Datos", icon: "fab fa-python" }
      ]
    },
    {
      title: "Herramientas",
      subtitle: "Productividad y control",
      icon: "fa-toolbox",
      color: "var(--accent-emerald)",
      skills: [
        { name: "Git", level: "Control de versiones", icon: "fab fa-git-alt" },
        { name: "GitHub", level: "Flujos & Repositorios", icon: "fab fa-github" },
        { name: "Responsive", level: "Mobile-First", icon: "fas fa-mobile-screen-button" },
        { name: "Postman", level: "Pruebas de APIs", icon: "fas fa-vial" }
      ]
    }
  ];

  return (
    <section id="habilidades" className="section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">
            <i className="fas fa-laptop-code"></i> Stack Tecnológico
          </span>
          <h2 className="section-title">
            Habilidades & <span className="gradient-text">Herramientas</span>
          </h2>
          <p className="section-subtitle">
            Tecnologías con las que diseño, construyo y despliego aplicaciones web.
          </p>
        </div>

        <div className="skills-stack-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills-category-card">
              <div className="category-header">
                <div className="category-icon-box" style={{ color: category.color }}>
                  <i className={`fas ${category.icon}`}></i>
                </div>
                <div>
                  <h3 className="category-title">{category.title}</h3>
                  <span className="section-subtitle" style={{ fontSize: "0.85rem" }}>
                    {category.subtitle}
                  </span>
                </div>
              </div>

              <div className="skills-items-grid">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-pill">
                    <i className={skill.icon}></i>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
