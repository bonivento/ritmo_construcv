# Construcvida - Sitio Web Oficial

Sitio web oficial de la Corporación Construcvida, organización de la sociedad civil dedicada al desarrollo integral y la construcción de paz en el Caribe Colombiano desde 2002.

## 📋 Descripción

Construcvida es una corporación sin ánimo de lucro que trabaja en la promoción del desarrollo integral y la paz en Colombia, con enfoque especial en el Caribe Colombiano. Desarrollamos programas en tres ejes estratégicos principales:

- **Capital Social**: Posconflicto y paz, educación participativa, desarrollo con enfoque diferencial
- **Inclusión Productiva**: Capacidades socioempresariales, emprendimientos productivos sostenibles
- **Ordenamiento Territorial**: Planificación territorial, gestión ambiental participativa, fortalecimiento institucional

## 🚀 Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y escritorio
- **Navegación Intuitiva**: Estructura clara con 5 páginas principales
- **Galería de Proyectos**: 12 proyectos históricos (2004-2016) con páginas individuales
- **Carrusel Interactivo**: Proyectos destacados en la página principal
- **Sistema de Filtros**: Categorización de proyectos por tipo (Ambientales, Productivos, Sociales, Paz y Desarrollo)
- **Formulario de Contacto**: Sistema de contacto directo
- **SEO Optimizado**: Estructura semántica y metadatos

## 🛠️ Tecnologías

- **React 18.2.0**: Framework principal
- **React Router DOM**: Navegación entre páginas
- **CSS3**: Estilos personalizados con variables CSS
- **JavaScript ES6+**: Lógica moderna
- **Responsive Design**: CSS Grid y Flexbox

## 🎨 Paleta de Colores

- **Azul Principal**: #0891C7
- **Verde Secundario**: #A4D65E  
- **Blanco**: #FFFFFF
- **Gris Claro**: #F5F5F5
- **Texto**: #333333

## 📁 Estructura del Proyecto

```
construvida/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navigation/
│   │   ├── Footer/
│   │   └── ProjectPage/
│   ├── pages/
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Projects/
│   │   ├── Contact/
│   │   └── WebRequirements/
│   ├── App.js
│   ├── App.css
│   └── index.js
├── recursos/
│   └── logo_corporacion.png
├── package.json
└── README.md
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/construcvida.git
cd construcvida
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
# Crea un archivo .env en la raíz del proyecto
REACT_APP_HERO_IMAGE=https://example.com/hero-image.jpg
REACT_APP_PROJECTS_IMAGE_1=https://example.com/project1.jpg
REACT_APP_PROJECTS_IMAGE_2=https://example.com/project2.jpg
REACT_APP_PROJECTS_IMAGE_3=https://example.com/project3.jpg
REACT_APP_PROJECT_GALLERY_PLACEHOLDER=https://example.com/gallery-placeholder.jpg
```

4. Inicia el servidor de desarrollo:
```bash
npm start
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 📄 Páginas

1. **Inicio** (`/`): Página principal con hero, servicios y carrusel de proyectos
2. **Acerca de** (`/acerca`): Información institucional, misión, visión y ejes estratégicos
3. **Proyectos** (`/proyectos`): Galería de proyectos con filtros por categoría
4. **Proyecto Individual** (`/proyecto/:id`): Páginas detalladas de cada proyecto
5. **Requerimientos Web** (`/requerimiento`): Página en mantenimiento
6. **Contactos** (`/contactos`): Información de contacto y formulario

## 🎯 Proyectos Destacados

El sitio incluye 12 proyectos históricos organizados cronológicamente:

- **2016**: Conservación de humedales en el Bajo Magdalena (3 intervenciones)
- **2015**: Plan de Seguridad Alimentaria "El Peñón Sin Hambre"
- **2012-2015**: Programa Nuevos Territorios de Paz
- **2008-2011**: Sistemas agroforestales en Montes de María
- **2004-2015**: Alimentación escolar en Tiquisio
- Y más proyectos de desarrollo rural y ambiental

## 🤝 Aliados Estratégicos

Trabajamos con organizaciones como:
- Unión Europea
- Corporación de Desarrollo y Paz del Bajo Magdalena
- CODESCAC
- CARSUCRE
- Alcaldías Municipales
- Organizaciones de Base Comunitaria

## 📱 Responsive Design

El sitio está optimizado para:
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px  
- **Escritorio**: 1024px+

## 🔧 Scripts Disponibles

```bash
npm start          # Inicia el servidor de desarrollo
npm run build      # Construye la aplicación para producción
npm test           # Ejecuta las pruebas
npm run eject      # Expone la configuración de webpack
```

## 📞 Contacto

- **Teléfono**: +(57) 300 670 6770
- **Email**: info@construcvida.org
- **Sitio Web**: www.construcvida.org
- **Ubicación**: Caribe Colombiano

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🤝 Contribución

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Notas de Desarrollo

- Las imágenes se cargan desde variables de entorno para facilitar el mantenimiento
- Los colores están definidos como variables CSS para consistencia
- El diseño sigue principios de accesibilidad web
- Optimizado para SEO con estructura semántica

---

**Construcvida** - Construyendo vida, desarrollando territorios, forjando paz desde 2002.