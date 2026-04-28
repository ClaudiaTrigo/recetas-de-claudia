# Receptari d'una cuina moderna - Receptes Claudia

Este proyecto es una plataforma web avanzada dedicada a la gastronomía, desarrollada por mi, **Claudia Trigo Joaquin** como parte del **Módulo 3: Imágenes y animación en la web** del Máster de Diseño y Desarrollo Web (UOC, Abril 2026). El sitio combina recetas tradicionales con técnicas modernas de optimización y rendimiento web.

## 🚀 Características Principales

- **Optimización Multimedia**: Implementación de un pipeline de procesamiento de imágenes para garantizar carga rápida y alta calidad.
- **Imágenes Responsive & Art Direction**: Uso de etiquetas `<picture>` y atributos `srcset/sizes` para adaptar el contenido visual a cualquier dispositivo y resolución, incluyendo gestión de dirección de arte en páginas de detalle.
- **Interactividad & Animación**: Incorporación de recursos gráficos SVG con animaciones CSS y efectos de transición suaves.
- **Diseño Creativo con Clip-Path**: Uso de máscaras de recorte avanzadas para crear formas no rectangulares integradas en el diseño.
- **Sistema de Comentarios**: Persistencia de datos mediante `LocalStorage` y validaciones dinámicas.
- **Accesibilidad (WCAG 2.0 AA)**: Estructura semántica, enlaces de salto, textos alternativos y contrastes optimizados para garantizar la inclusión.

## 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML5, SCSS (Sass), JavaScript (ES6+).
- **Procesamiento de Imágenes**: [Sharp](https://sharp.pixelplumbing.com/) para la generación automática de formatos **WebP** y versiones redimensionadas.
- **Empaquetador (Bundler)**: [Parcel](https://parceljs.org/) para la gestión de dependencias y compilación.
- **Iconografía**: [Lucide](https://lucide.dev/).
- **Gestión de Estilos**: Arquitectura modular con variables, mixins y responsive design.

## 📸 Optimización y Multimedia

El proyecto incluye un flujo de trabajo automatizado para la gestión de activos:
- **Formatos de Nueva Generación**: Conversión automática de imágenes a `.webp` para reducir el peso.
- **Resolución Variable**: Generación de versiones `-small` para dispositivos móviles.
- **SVG Animado**: Un logotipo interactivo en la portada que reacciona a la interacción del usuario.
- **Clip-Path**: Imágenes destacadas con formas geométricas complejas para un estilo visual único.

## 📂 Estructura del Proyecto

```text
├── src/
│   ├── index.html          # Portada con SVG y Clip-Path
│   ├── categoria[1-3].html # Listados y formularios
│   ├── det[1-8].html       # Detalle de recetas con Dirección de Arte
│   ├── assets/             # Activos originales y optimizados
│   ├── scss/               # Estilos modulares (BEM/Variables/Mixins)
│   └── index.js            # Lógica de componentes e interactividad
├── generate-images.js      # Script de automatización con Sharp
├── package.json            # Configuración y scripts (build/start)
└── README.md               # Documentación del proyecto
```

## 🔧 Instalación y Desarrollo

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/ClaudiaTrigo/recetas-de-claudia.git
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Optimizar imágenes**:
   Para procesar las imágenes originales y generar las versiones responsive:
   ```bash
   node generate-images.js
   ```

4. **Iniciar entorno local**:
   ```bash
   npm run start
   ```

5. **Compilar para producción**:
   ```bash
   npm run build
   ```

## ✍️ Autora

**Claudia Trigo Joaquin** - Estudiante de la Universitat Oberta de Catalunya (UOC).

---
Demo en vivo: [receptesdelaclaudia.netlify.app](https://receptesdelaclaudia.netlify.app/)
