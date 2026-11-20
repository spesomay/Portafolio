document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. ANIMACIÓN DE LA FORMA BLOB (SVG)
  // ==========================================
  const blob = document.getElementById("blob");
  const shapes = [
    "M421.5,303Q380,356,332,390.5Q284,425,229,417Q174,409,123,374.5Q72,340,63.5,271.5Q55,203,99,147Q143,91,212.5,72.5Q282,54,344.5,95Q407,136,432.5,193Q458,250,421.5,303Z",
    "M432,300Q390,360,330,395Q270,430,215,410Q160,390,115,350Q70,310,65,250Q60,190,110,140Q160,90,230,70Q300,50,350,95Q400,140,440,195Q480,250,432,300Z",
    "M420,320Q380,380,315,410Q250,440,190,410Q130,380,95,320Q60,260,80,190Q100,120,160,90Q220,60,290,70Q360,80,400,140Q440,200,430,260Q420,320,420,320Z"
  ];

  let i = 0;
  if (blob) {
    setInterval(() => {
      i = (i + 1) % shapes.length;
      blob.setAttribute("d", shapes[i]);
    }, 3000);
  }

  // ==========================================
  // 2. MODO OSCURO / MODO CLARO (CON PERSISTENCIA Y COMPATIBILIDAD GITHUB PAGES)
  // ==========================================
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const fotoClara = document.querySelector(".foto-clara");
  const fotoOscura = document.querySelector(".foto-oscura");

  /**
   * Aplica el tema seleccionado asegurando contraste, ícono correcto
   * y visibilidad de las imágenes del tema sin rutas rotas.
   */
  function applyTheme(theme) {
    const isDark = theme === "dark";

    if (isDark) {
      document.body.classList.add("dark-mode");

      // Actualización accesible de ícono o imagen en el botón
      if (themeIcon) {
        if (themeIcon.tagName.toLowerCase() === "img") {
          themeIcon.src = "img/sun.svg";
          themeIcon.alt = "Modo claro";
        } else {
          themeIcon.classList.remove("fa-moon");
          themeIcon.classList.add("fa-sun");
        }
      }

      if (themeToggleBtn) {
        themeToggleBtn.setAttribute("title", "Cambiar a modo claro");
        themeToggleBtn.setAttribute("aria-label", "Cambiar a modo claro");
      }

      // Sincronización de ilustración "Sobre mí"
      if (fotoClara && fotoOscura) {
        fotoClara.style.display = "none";
        fotoOscura.style.display = "block";
      }
    } else {
      document.body.classList.remove("dark-mode");

      if (themeIcon) {
        if (themeIcon.tagName.toLowerCase() === "img") {
          themeIcon.src = "img/moon.svg";
          themeIcon.alt = "Modo oscuro";
        } else {
          themeIcon.classList.remove("fa-sun");
          themeIcon.classList.add("fa-moon");
        }
      }

      if (themeToggleBtn) {
        themeToggleBtn.setAttribute("title", "Cambiar a modo oscuro");
        themeToggleBtn.setAttribute("aria-label", "Cambiar a modo oscuro");
      }

      if (fotoClara && fotoOscura) {
        fotoClara.style.display = "block";
        fotoOscura.style.display = "none";
      }
    }

    localStorage.setItem("portfolio-theme", theme);
  }

  // Leer estado inicial desde localStorage o preferencia del sistema
  const savedTheme = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme ? savedTheme : (prefersDark ? "dark" : "light");

  applyTheme(initialTheme);

  // Alternar tema al hacer clic
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentIsDark = document.body.classList.contains("dark-mode");
      applyTheme(currentIsDark ? "light" : "dark");
    });
  }

  // Escuchar cambios de preferencia del sistema si el usuario no ha forzado un tema
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("portfolio-theme")) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });

  // ==========================================
  // 3. DESPLAZAMIENTO SUAVE (HEADER Y BOTONES INTERNOS)
  // ==========================================
  const allInternalLinks = document.querySelectorAll('a[href^="#"]');
  const headerLinks = document.querySelectorAll("header .btn-elegant");
  const headerOffset = 75;
  let isScrollingByClick = false;

  function smoothScrollTo(targetPosition, duration = 750) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    isScrollingByClick = true;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        isScrollingByClick = false;
      }
    }

    requestAnimationFrame(animation);
  }

  allInternalLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      e.preventDefault();

      // Sincroniza el subrayado del menú superior
      headerLinks.forEach((l) => {
        l.classList.remove("activo");
        if (l.getAttribute("href") === targetId) {
          l.classList.add("activo");
        }
      });

      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - (targetId === "#inicio" ? 0 : headerOffset);

      smoothScrollTo(offsetPosition, 750);
    });
  });

  // ==========================================
  // 4. INDICADOR ACTIVO DEL MENÚ AL SCROLLEAR
  // ==========================================
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    if (isScrollingByClick) return;

    let currentSection = "inicio";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.pageYOffset >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    headerLinks.forEach((link) => {
      link.classList.remove("activo");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("activo");
      }
    });
  });

  // ==========================================
  // 5. REDIRECCIÓN INTERACTIVA DE PROYECTOS (CARD CLICK)
  // ==========================================
  const projectCards = document.querySelectorAll(".card-proyecto[data-demo-url]");

  projectCards.forEach((card) => {
    card.addEventListener("click", (e) => {
      // Si el usuario hizo clic en un enlace o botón interno (como el botón de Código GitHub),
      // dejamos que el enlace propio maneje la navegación sin interferencia
      if (e.target.closest("a") || e.target.closest("button")) {
        return;
      }

      const demoUrl = card.getAttribute("data-demo-url");
      if (demoUrl && demoUrl !== "#") {
        window.open(demoUrl, "_blank", "noopener,noreferrer");
      }
    });
  });
});
