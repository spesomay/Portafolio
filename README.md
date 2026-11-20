# 🚀 Portafolio Web Personal — Maylen Speso

> **Desarrolladora Web Full-Stack | Estudiante de Licenciatura en Sistemas**
> Despliegue en GitHub Pages: `https://spesomay.github.io/portafolio/`

Portafolio web personal construido con **HTML5 semántico, CSS3 moderno y JavaScript puro (vanilla)**, optimizado para cargar instantáneamente en **GitHub Pages** y en local mediante la extensión **Live Server** de Visual Studio Code.

---

## 🌟 Características

1. **100% Estático y Ágil:**
   - Sin dependencias de Node.js, librerías pesadas ni procesos de compilación (*build*).
   - Rutas 100% relativas para funcionar en cualquier subdirectorio (ej. `/portafolio/`).
   - Scroll vertical único y fluido, sin dobles barras ni desbordes laterales.

2. **Proyectos Interactivos (Demos en Vivo):**
   - **App-Mamá:** E-commerce y plataforma de pedidos para repostería desplegada en Vercel (`https://app-mama.vercel.app`).
   - **UrbanaGest:** Plataforma web de gestión de trámites municipales (`https://urbanagest.vercel.app`).
   - **MOOD:** Recomendador interactivo de actividades según el estado de ánimo (`https://mood-app.vercel.app`).
   - Al hacer clic o tocar en cualquier área de la tarjeta o en su botón *"Visitar Web / Demo"*, se abre la aplicación en una pestaña nueva (`target="_blank"` y `rel="noopener noreferrer"`).
   - Sin botones de código para mantener la atención del reclutador en la experiencia de usuario de tus proyectos.

3. **Modo Oscuro / Claro con Persistencia:**
   - Botón toggle de alto contraste que conmuta entre modo oscuro y claro.
   - Persistencia de la preferencia del usuario en `localStorage`.
   - Alternancia de la ilustración del personaje en "Sobre mí" (`img/hola.png` en modo claro y `img/ModoOscuroYo.png` en modo oscuro).

4. **Contacto Integrado y Formulario Funcional:**
   - Todos los botones de email del portafolio redirigen directamente a `email.html`.
   - Formulario conectado a **FormSubmit AJAX**: envía los mensajes directamente a `maylenspeso@gmail.com` desde el navegador con notificación en pantalla sin recargar la página.

5. **Acceso a CV:**
   - Descarga directa de tu currículum desde `pdf/Speso Maylen -cv.pdf`.

---

## 📁 Estructura Limpia del Repositorio

```text
portafolio/
│
├── index.html                   # Página principal (Hero, Sobre mí, Habilidades, Proyectos)
├── email.html                   # Página de contacto
├── README.md                    # Documentación del proyecto
│
├── styles/
│   ├── style.css                # Estilos globales, variables, diseño responsive y dark mode
│   └── email.css                # Estilos específicos del formulario de contacto
│
├── js/
│   ├── js.js                    # Animación blob, modo oscuro, scroll suave y clics de proyectos
│   └── contact.js               # Envío asíncrono del formulario mediante FormSubmit AJAX
│
├── img/                         # Ilustraciones, fotos, íconos SVG y capturas
│   ├── hola.png
│   ├── ModoOscuroYo.png
│   ├── hola-dark.png
│   ├── moon.svg
│   ├── sun.svg
│   ├── yo2024.jpg
│   ├── UrbanaGest.png
│   └── MOOD.png
│
└── pdf/
    ├── Speso Maylen -cv.pdf     # Tu currículum listo para descarga
    └── Speso Maylen-cv-2026.pdf
```

---

## 🚀 Cómo probar en Local y Desplegar

### 1. Ejecución Local (Live Server)
1. Abre la carpeta del proyecto en **Visual Studio Code**.
2. Haz clic derecho sobre `index.html` y selecciona **"Open with Live Server"**.
3. Se abrirá automáticamente en tu navegador (ej. `http://127.0.0.1:5500/index.html`).

### 2. Despliegue en GitHub Pages
1. Haz un commit y push a tu rama principal:
   ```bash
   git add .
   git commit -m "Portafolio estático optimizado para GitHub Pages"
   git push origin main
   ```
2. En tu repositorio de GitHub, ve a **Settings** > **Pages**.
3. En **Source**, selecciona `Deploy from a branch` y elige la rama `main` / `root`.
4. En pocos segundos tu web estará activa en:
   **`https://spesomay.github.io/portafolio/`**
