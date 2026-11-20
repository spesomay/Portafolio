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
  // 2. MODO OSCURO / MODO CLARO (CON PERSISTENCIA)
  // ==========================================
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  const savedTheme = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.body.classList.add("dark-mode");
    if (themeIcon) {
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark-mode");

      if (themeIcon) {
        if (isDark) {
          themeIcon.classList.remove("fa-moon");
          themeIcon.classList.add("fa-sun");
        } else {
          themeIcon.classList.remove("fa-sun");
          themeIcon.classList.add("fa-moon");
        }
      }

      localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
    });
  }

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

      // Sincroniza el subrayado del menú superior aunque hagas clic desde "Ver Proyectos"
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
});