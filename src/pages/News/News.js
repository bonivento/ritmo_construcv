import React from 'react';
import './News.css';

const News = () => {
  return (
    <div className="news">
      <section className="news-header">
        <div className="container">
          <h1>Noticias</h1>
          <p>
            Mantente al día con las últimas noticias y actualizaciones de CONSTRUCVIDA
          </p>
        </div>
      </section>

      <section className="news-content">
        <div className="container">
          <div className="maintenance-notice">
            <div className="maintenance-icon">
              🚧
            </div>
            <h2>Página en Mantenimiento</h2>
            <p>
              Estamos trabajando para mejorar esta sección. 
              Pronto tendrás acceso a todas nuestras noticias y actualizaciones.
            </p>
            <div className="maintenance-info">
              <p>
                <strong>¿Qué encontrarás aquí próximamente?</strong>
              </p>
              <ul>
                <li>Noticias sobre nuestros proyectos</li>
                <li>Eventos y actividades</li>
                <li>Logros y reconocimientos</li>
                <li>Actualizaciones organizacionales</li>
              </ul>
            </div>
            <div className="contact-cta">
              <p>Para información inmediata, contáctanos:</p>
              <a href="mailto:construcvida@gmail.com" className="btn btn-primary">
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;