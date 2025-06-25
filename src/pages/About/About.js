import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-text">
              <h1>Acerca de Construvida</h1>
              <p className="lead">
                La Corporación Construyendo Vida "Construcvida" es una organización de la sociedad civil 
                que aflora con el propósito de contribuir a la construcción del desarrollo integral y la 
                paz en el caribe colombiano.
              </p>
            </div>
            <div className="about-image">
              <img 
                src={process.env.REACT_APP_ABOUT_IMAGE} 
                alt="Equipo Construvida" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission">
              <h2>Nuestra Misión</h2>
              <p>
                Construcvida proyecta convertirse en la ONG más exitosa de la región caribe colombiana 
                y demás regiones del País, proporcionando a su población objetivo la mejor experiencia 
                en los sectores de influencia. Aplicando tecnología de punta, productos de consultoría 
                competitiva, responsabilidad individual y corporativa, servicios inmejorables, 
                profesionales altamente capacitados y competentes.
              </p>
            </div>
            <div className="vision">
              <h2>Nuestra Visión</h2>
              <p>
                Construcvida pretende ser una organización líder que promueve procesos de desarrollo 
                integral y sostenible con buenas prácticas de inclusión en todo el territorio Nacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>Pilares Estratégicos</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">📊</div>
              <h3>Cuadro de Mando Integral</h3>
              <p>Sistema de gestión estratégica para el seguimiento y evaluación de objetivos.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🗺️</div>
              <h3>Mapa Estratégico</h3>
              <p>Representación visual de cómo creamos valor para nuestros beneficiarios.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">⚡</div>
              <h3>Ejes Estratégicos</h3>
              <p>Áreas fundamentales de trabajo para el desarrollo integral.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🏛️</div>
              <h3>Estructura Institucional</h3>
              <p>Organización sólida que garantiza el cumplimiento de nuestra misión.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h2>Ejes Estratégicos</h2>
          <div className="strategic-axes">
            <div className="axis">
              <h3>Capital Social</h3>
              <ul>
                <li>Posconflicto y Paz</li>
                <li>Educación y Democracia Participativa</li>
                <li>Desarrollo con Enfoque Diferencial</li>
                <li>Estrategias de Salud y Bienestar Social</li>
                <li>Gestión Sociocultural</li>
              </ul>
            </div>
            <div className="axis">
              <h3>Inclusión Productiva</h3>
              <ul>
                <li>Instalación de Capacidades Socioempresariales</li>
                <li>Fortalecimiento de Emprendimientos Productivos</li>
                <li>Encadenamientos Productivos</li>
                <li>Incidencia en Políticas Públicas de Desarrollo Rural</li>
              </ul>
            </div>
            <div className="axis">
              <h3>Ordenamiento Territorial</h3>
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

    </div>
  );
};

export default About;