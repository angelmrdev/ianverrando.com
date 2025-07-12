# 🌐 Web Profesional Diseñador Interiores/Gráfico-Web/Auodivusales

Este proyecto está desarrollado con tecnologías web puras y tiene como objetivo ser modular, escalable y fácilmente migrable a un servidor propio.

---

## 📋 Guía general del proyecto

- 💡 **Tecnologías**: HTML5, CSS modular, JavaScript vanilla
- 🔁 **Plantillas**: Uso de fragmentos HTML cargados dinámicamente para `nav`, `footer` y otros bloques comunes
- 🧩 **Templates reutilizables**: Secciones como tarjetas, FAQ, formularios, breadcrumbs
- 🧠 **Modularidad**: CSS dividido por función. Solo `main.css` es enlazado directamente; el resto se importa
- 📦 **Carga dinámica de componentes**: vía `fetch()` y `innerHTML` desde JS
- 🌗 **Modo oscuro**: con toggle controlado por JS y CSS variables
- ✨ **Animaciones**: integradas con AOS (Animate On Scroll)
- 📊 **Plugins incluidos**:
  - AOS (animaciones al hacer scroll)
  - Glider.js (slider/carrusel ligero)
  - Lucide Icons (iconos SVG modernos)
- ✅ **SEO friendly**: estructura clara, sitemap, `robots.txt`, metadatos en `head.html`

---

## 🛠️ Guía de diseño y programación

### 🔧 Enfoque general

Este proyecto está desarrollado como una **web estática modular**, usando HTML, CSS y JavaScript puro. No emplea frameworks ni motores de plantillas. Todo está pensado para ser:

- **Fácilmente mantenible**
- **Escalable**
- **Migrable**
- **SEO-friendly**

---

### 🧱 Estructura técnica

- Componentes comunes (`nav`, `footer`) en `_components/`, cargados vía JS.
- Templates visuales (`card-proyecto`, `faq`, etc.) en `_templates/`.
- Plantillas base (`post.html`, `proyecto.html`) en `_layouts/`.
- Datos (`blog.json`, `proyectos.json`) en `_data/`.
- Solo `main.css` y `main.js` se enlazan en HTML. Lo demás se importa o carga por JS.

---

### 🎨 Diseño y estilo

- Reset personalizado en `_reset.css`
- Variables de diseño en `_variables.css`
- Sistema grid/flex en `_layout.css`
- Clases utilitarias en `_utils.css`
- Estilos específicos por bloque en archivos separados

---

### ⚙️ Plugins y librerías externas

| Plugin / Librería | Uso principal | Método de carga |
|-------------------|----------------|-----------------|
| **AOS** (Animate on Scroll) | Animaciones scroll | CDN + `_aos-init.js` |
| **Glider.js** | Carrusel de contenido | CDN + `_glider-init.js` |
| **Lucide Icons** | Iconos SVG | Inline o por JS |
| **Modo Oscuro** | Toggle JS + CSS variables | `_darkmode.js` + `_darkmode.css` |
| **Formspree** | Formularios sin backend | Directo desde HTML |

---

### 🧠 Convenciones

- Prefijo `_` en archivos auxiliares
- Carga modular por `main.css` y `main.js`
- Templates copiados o cargados dinámicamente
- Preparado para conexión futura con CMS headless


---

### 📁 Estructura del proyecto

```plaintext
📁 _components/              # Componentes cargados dinámicamente en todas las páginas
├── footer.html             # Pie de página (footer común)
├── nav.html                # Navegación principal (menú/header)

📁 _data/                   # Archivos JSON con datos que se cargan desde JS
├── blog.json              # Entradas del blog
├── cert.json              # Certificaciones
├── edu.json               # Formación
├── meta.json              # Información general de la web
└── proyectos.json         # Proyectos personales/profesionales

📁 _layouts/                # Plantillas base reutilizables por tipo de contenido
├── post.html              # Estructura para página de entrada del blog
└── proyecto.html          # Estructura para página individual de proyecto

📁 _templates/              # Plantillas HTML copiables y reutilizables por secciones
├── breadcrumbs.html       # Rastro de navegación (breadcrumb)
├── card-blog.html         # Tarjeta resumen de entrada de blog
├── card-proyecto.html     # Tarjeta resumen de proyecto
├── carusel.html           # Carusels template
├── cta-section.html       # Sección de llamado a la acción
├── faq.html               # Preguntas frecuentes (bloque reutilizable)
├── formulario-contacto.html # Formulario HTML reutilizable
└── head.html              # Plantilla base para copiar en cada página <head>

📁 assets/
├── 📁 css/                # Hojas de estilo organizadas modularmente
│   ├── _animations.css
│   ├── _blog.css
│   ├── _carrusels.css
│   ├── _components.css
│   ├── _footer.css
│   ├── _forms.css
│   ├── _home.css
│   ├── _layout.css
│   ├── _nav.css
│   ├── _reset.css
│   ├── _utils.css
│   ├── _variables.css
│   └── main.css           # Archivo principal que importa todos los demás
├── 📁 img/                # Imágenes del sitio
└── 📁 js/                 # Scripts JS para funcionalidad, carga de plantillas y plugins
    ├── _aos-init.js
    ├── _breadcrumb.js
    ├── _darkmode.js
    ├── _glider-init.js
    ├── _nav-handler.js
    ├── _router.js
    ├── _template-loader.js
    └── main.js

📁 blog/
└── index.html             # Página de listado de entradas del blog

📁 proyectos/
└── index.html             # Página de listado de proyectos

📁 servicios/
└── index.html             # Página principal de servicios ofrecidos

📄 index.html               # Página de inicio / landing principal
📄 sobre-mi.html            # Página "Sobre mí"
📄 contacto.html            # Página de contacto
📄 preguntas-frecuentes.html # Preguntas frecuentes generales
📄 mapa-del-sitio.html      # Mapa visual del sitio
📄 aviso-legal.html         # Página de aviso legal
📄 politica-de-cookies.html # Página de política de cookies
📄 politica-de-privacidad.html # Página de privacidad
📄 404.html                 # Página de error personalizada
📄 humans.txt               # Créditos del autor
📄 robots.txt               # Archivo de reglas para bots de búsqueda
📄 sitemap.xml              # Mapa para indexación de buscadores
📄 manifest.webmanifest     # Configuración de PWA
📄 _readme.md               # Documentación del proyecto
```
