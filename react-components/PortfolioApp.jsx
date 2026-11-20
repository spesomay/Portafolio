import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import "../styles/style.css";

export default function PortfolioApp() {
  const [darkMode, setDarkMode] = useState(true);

  // Sincronizar tema con localStorage y clase en el body
  useEffect(() => {
    const savedTheme = localStorage.getItem("maylen-portfolio-theme");
    if (savedTheme === "light") {
      setDarkMode(false);
      document.body.classList.add("light-mode");
    } else {
      setDarkMode(true);
      document.body.classList.remove("light-mode");
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const nextMode = !prev;
      if (nextMode) {
        document.body.classList.remove("light-mode");
        localStorage.setItem("maylen-portfolio-theme", "dark");
      } else {
        document.body.classList.add("light-mode");
        localStorage.setItem("maylen-portfolio-theme", "light");
      }
      return nextMode;
    });
  };

  return (
    <div className="portfolio-root">
      {/* Luces de fondo ambientales */}
      <div className="bg-ambient-layer">
        <div className="ambient-glow ambient-glow-1"></div>
        <div className="ambient-glow ambient-glow-2"></div>
        <div className="ambient-glow ambient-glow-3"></div>
      </div>

      {/* Navegación Sticky */}
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      {/* Contenido principal */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}
