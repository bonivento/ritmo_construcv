import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [showMapPopup, setShowMapPopup] = useState(false);
  const [showOrgChartPopup, setShowOrgChartPopup] = useState(false);

  const openMapPopup = () => {
    setShowMapPopup(true);
  };

  const closeMapPopup = () => {
    setShowMapPopup(false);
  };

  const openOrgChartPopup = () => {
    setShowOrgChartPopup(true);
  };

  const closeOrgChartPopup = () => {
    setShowOrgChartPopup(false);
  };

  const scrollToStrategicAxes = () => {
    const element = document.getElementById('strategic-axes-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCuadroMando = () => {
    const element = document.getElementById('cuadro-mando-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-text">
              <h1>Acerca de CONSTRUCVIDA</h1>
              <p className="lead">
                La Corporación Construyendo Vida "CONSTRUCVIDA" es una organización de la sociedad civil 
                que aflora con el propósito de contribuir a la construcción del desarrollo integral y la 
                paz en el caribe colombiano.
              </p>
            </div>
            <div className="about-image">
              <img 
                src={process.env.REACT_APP_ABOUT_IMAGE} 
                alt="Equipo CONSTRUCVIDA" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>Pilares Estratégicos</h2>
          <div className="values-grid">
            <div className="value-item clickable" onClick={scrollToCuadroMando}>
              <div className="value-icon">📊</div>
              <h3>Cuadro de Mando Integral</h3>
              <span className="click-hint">Hacer clic para ir a la sección</span>
            </div>
            <div className="value-item clickable" onClick={openMapPopup}>
              <div className="value-icon">🗺️</div>
              <h3>Mapa Estratégico</h3>
              <span className="click-hint">Hacer clic para ver el mapa</span>
            </div>
            <div className="value-item clickable" onClick={scrollToStrategicAxes}>
              <div className="value-icon">⚡</div>
              <h3>Ejes Estratégicos</h3>
              <span className="click-hint">Hacer clic para ir a la sección</span>
            </div>
            <div className="value-item clickable" onClick={openOrgChartPopup}>
              <div className="value-icon">🏛️</div>
              <h3>Estructura Institucional</h3>
              <span className="click-hint">Hacer clic para ver el organigrama</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cuadro-mando" id="cuadro-mando-section">
        <div className="container">
          <h2>Cuadro de Mando Integral</h2>
          
          <div className="mission-vision-grid">
            <div className="mission">
              <h3>Nuestra Misión</h3>
              <p>
                CONSTRUCVIDA proyecta convertirse en la ONG más exitosa de la región caribe colombiana 
                y demás regiones del País, proporcionando a su población objetivo la mejor experiencia 
                en los sectores de influencia. Aplicando tecnología de punta, productos de consultoría 
                competitiva, responsabilidad individual y corporativa, servicios inmejorables, 
                profesionales altamente capacitados y competentes.
              </p>
            </div>
            <div className="vision">
              <h3>Nuestra Visión</h3>
              <p>
                CONSTRUCVIDA pretende ser una organización líder que promueve procesos de desarrollo 
                integral y sostenible con buenas prácticas de inclusión en todo el territorio Nacional.
              </p>
            </div>
          </div>

          <div className="values-principles-grid">
            <div className="values-column">
              <h3>Valores</h3>
              <ul>
                <li>Respeto</li>
                <li>Lealtad</li>
                <li>Equidad</li>
                <li>Solidaridad</li>
                <li>Honestidad</li>
              </ul>
            </div>
            <div className="principles-column">
              <h3>Principios</h3>
              <ul>
                <li>Actitud ética</li>
                <li>Espíritu de servicio</li>
                <li>Inclusión</li>
                <li>Desarrollo sostenible</li>
                <li>Democracia participativa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="team" id="strategic-axes-section">
        <div className="container">
          <h2>Ejes Estratégicos</h2>
          <div className="strategic-axes">
            <div className="axis">
              <h3>Eje de Capital Social</h3>
              <p className="axis-description">
                Este primer eje estratégico de CONSTRUCVIDA, se refiere al mandato institucional de entender esta apuesta como las capacidades que adquieren las comunidades, en términos de aumento de la confianza, el empoderamiento, desarrollo organizacional, fortalecimiento de redes poblacionales o sociales, el relacionamiento político, la recuperación del tejido social y cohesión social, entre otros, que le permiten lograr sus objetivos comunes a través de la cooperación y la ayuda mutua. El Capital Social en CONSTRUCVIDA es un intangible que se materializa en beneficios tangibles y concretos en pro del desarrollo comunitario y local.
              </p>
              <h4>Áreas de trabajo:</h4>
              <ul>
                <li>Posconflicto y Paz</li>
                <li>Educación y Democracia Participativa</li>
                <li>Desarrollo con Enfoque Diferencial</li>
                <li>Estrategias de Salud y Bienestar Social</li>
                <li>Gestión Sociocultural</li>
              </ul>
            </div>
            <div className="axis">
              <h3>Eje de Inclusión Productiva</h3>
              <p className="axis-description">
                El segundo eje estratégico de CONSTRUCVIDA, se refiere al abordaje institucional de contar con una herramienta clave que puede contribuir a la superación de la pobreza y de la inequidad en la región caribe Colombiana, al impulsar procesos económicamente sostenibles que busquen aumentar los ingresos de las comunidades de menores recursos mediante su incorporación a las cadenas de valor. La inclusión productiva en CONSTRUCVIDA se hace posible desde la creación de condiciones que incrementen los activos empresariales de los agentes económicos más vulnerables para el crecimiento, contribuyendo así a un manejo más eficiente de los limitados recursos disponibles.
              </p>
              <h4>Áreas de trabajo:</h4>
              <ul>
                <li>Instalación de Capacidades Socioempresariales</li>
                <li>Fortalecimiento de Emprendimientos Productivos</li>
                <li>Encadenamientos Productivos</li>
                <li>Incidencia en Políticas Públicas de Desarrollo Rural</li>
              </ul>
            </div>
            <div className="axis">
              <h3>Eje de Ordenamiento Territorial</h3>
              <p className="axis-description">
                En CONSTRUCVIDA, el ordenamiento territorial es entendido como el conjunto de acciones de intervención estratégica, cuyo propósito fundamental es contribuir al sector público en la organización, armonización y administración de la ocupación y uso del espacio en donde se dinamizan los procesos de desarrollo con enfoque territorial en el caribe Colombiano, de tal modo, que éstos contribuyan al desarrollo humano ecológicamente sostenible, especialmente armónico y socialmente justo en la región.
              </p>
              <h4>Áreas de trabajo:</h4>
              <ul>
                <li>Planificación Territorial</li>
                <li>Gestión Ambiental Participativa</li>
                <li>Infraestructura Física y Equipamiento</li>
                <li>Fortalecimiento Integral de las Entidades Públicas</li>
                <li>Acompañamiento a las Entidades Públicas con Procesos del SGR</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="services-detail">
        <div className="container">
          <h2>Nuestros Servicios de Alta Calidad</h2>
          <p className="services-intro">
            CONSTRUCVIDA cuenta con el más valioso estándar de profesionales altamente calificado que proporciona sus servicios de forma integral, efectiva y oportuna. Siempre comprometidos con los valores y principios que rigen su actuar institucional.
          </p>
          <p className="services-offer">CONSTRUCVIDA te ofrece:</p>
          
          <div className="services-categories">
            <div className="service-category">
              <h3>Consultorías Especializadas en:</h3>
              <ul>
                <li>Dirección de Proyectos</li>
                <li>Administración Estratégica</li>
                <li>Gerencia del Marketing</li>
                <li>Gerencia Estratégica para la Innovación Tecnológica</li>
                <li>Gestión Integral de la Calidad</li>
                <li>Gerencia Ambiental y de Gestión del Riesgo</li>
              </ul>
            </div>
            
            <div className="service-category">
              <h3>Asesorías en:</h3>
              <ul>
                <li>Formulación de Instrumentos de Planificación Territorial: Planes de Ordenamiento Territorial (POT) y Planes de Desarrollo</li>
                <li>Formulación de Planes de Acción Territorial (PAT)</li>
                <li>Formulación de Planes de Seguridad Alimentaria</li>
                <li>Formulación e Implementación de Proyectos Productivos y Ambientales</li>
                <li>Formulación y Ejecución de Proyectos de Infraestructura y Saneamiento Básico</li>
                <li>Formulación y Ejecución de Proyectos con Enfoque Diferencial</li>
              </ul>
            </div>
            
            <div className="service-category">
              <h3>Acompañamiento en Procesos Organizacionales de:</h3>
              <ul>
                <li>Gestión del Talento Humano</li>
                <li>Fortalecimiento Organizacional</li>
                <li>Gestión de Redes Sociales y Productivas</li>
                <li>Implementación de Planes de Negocios Inclusivos y Estrategias de Mercado</li>
                <li>Formación y capacitación en temas ambientales (PSMV – PGIRS – POMCA)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {showMapPopup && (
        <div className="popup-overlay" onClick={closeMapPopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closeMapPopup}>
              ×
            </button>
            <div className="popup-header">
              <h3>Mapa Estratégico CONSTRUCVIDA</h3>
            </div>
            <div className="popup-image">
              <img 
                src="https://github.com/user-attachments/assets/c900a6c0-d746-4706-8e76-b2f829d18238" 
                alt="Mapa Estratégico CONSTRUCVIDA" 
              />
            </div>
          </div>
        </div>
      )}

      {showOrgChartPopup && (
        <div className="popup-overlay" onClick={closeOrgChartPopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closeOrgChartPopup}>
              ×
            </button>
            <div className="popup-header">
              <h3>Organigrama CONSTRUCVIDA</h3>
            </div>
            <div className="popup-image">
              <img 
                src="https://github.com/user-attachments/assets/6abbbccb-6c2a-4fe5-b63b-22bff68e904b" 
                alt="Organigrama CONSTRUCVIDA" 
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default About;