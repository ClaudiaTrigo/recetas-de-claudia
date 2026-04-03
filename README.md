# Receptari d'una cuina moderna - Receptes Claudia

Este proyecto es una plataforma web dedicada al mundo de la gastronomía, desarrollada por **Claudia Trigo Joaquin** como parte del Máster de Desarrollo de Aplicaciones y Sitios Web (UOC, Abril 2025). El sitio ofrece un catálogo interactivo de recetas tradicionales y postres, con un diseño moderno y funcional.

## 🚀 Características Principales

- **Navegación Intuitiva**: Menú principal con acceso a categorías de recetas (platos principales y postres) y un formulario de propuestas.
- **Detalle de Recetas**: Cada receta incluye una breve presentación del plato, ingredientes detallados, pasos de preparación, tiempos, número de comensales, imagenes extras del plato y un vídeo explicativo de la receta.
- **Sistema de Comentarios y Valoración**:
  - Los usuarios pueden dejar comentarios y valorar las recetas mediante un sistema de estrellas.
  - Los comentarios se almacenan localmente en el navegador (`LocalStorage`) para que persistan entre sesiones.
  - Validación dinámica de formularios (nombre, email y longitud del mensaje).
- **Formulario de Propuestas**: Sección dedicada para que los usuarios sugieran nuevas recetas para el sitio.
- **Diseño Adaptativo (Responsive)**: Estilos desarrollados con SCSS utilizando variables personalizadas y mixins para garantizar una buena experiencia en diferentes dispositivos.
- **Iconografía Moderna**: Integración de iconos vectoriales mediante la librería Lucide.

## 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML5, SCSS (Sass), JavaScript (ES6+).
- **Empaquetador (Bundler)**: [Parcel](https://parceljs.org/) para la gestión de dependencias y compilación de activos.
- **Iconos**: [Lucide](https://lucide.dev/).
- **Gestión de Estilos**: Metodología modular con archivos SCSS parciales (`_variables.scss`, `_mixins.scss`, `_base.scss`, etc.).

## 📂 Estructura del Proyecto

```text
├── src/
│   ├── index.html          # Página principal (Portada)
│   ├── categoria.html      # Listado de recetas saladas
│   ├── categoria2.html     # Listado de postres
│   ├── categoria3.html     # Formulario de propuestas
│   ├── det[1-8].html       # Páginas de detalle de cada receta
│   ├── index.js            # Lógica principal, validaciones y LocalStorage
│   ├── assets/             # Imágenes de las recetas y logos
│   └── scss/               # Archivos de estilos Sass
├── package.json            # Configuración de dependencias y scripts
└── README.md               # Documentación del proyecto
```

## 🔧 Instalación y Desarrollo

Sigue estos pasos para ejecutar el proyecto localmente:

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/ClaudiaTrigo/recetas-de-claudia.git
   ```

2. **Instalar dependencias**:
   Asegúrate de tener [Node.js](https://nodejs.org/) instalado y ejecuta:
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run start
   ```
   El sitio estará disponible en `http://localhost:1234`.

4. **Compilar para producción**:
   ```bash
   npm run build
   ```
   Los archivos optimizados se generarán en la carpeta `dist/`.

## ✍️ Autora

**Claudia Trigo Joaquin** - Estudiante de la Universitat Oberta de Catalunya (UOC).

Demo en vivo: https://receptesdelaclaudia.netlify.app/