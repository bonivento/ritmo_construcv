import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 'humedales-bajo-magdalena-tercera-2016',
      title: 'Conservación de humedales en el Bajo Magdalena',
      image: process.env.REACT_APP_PROJECTS_IMAGE_1,
      year: '2016',
      location: 'Bajo Magdalena'
    },
    {
      id: 'programa-nuevos-territorios-paz-2012-2015',
      title: 'Programa Nuevos Territorios de Paz',
      image: process.env.REACT_APP_PROJECTS_IMAGE_2,
      year: '2012-2015',
      location: 'Bajo Magdalena'
    },
    {
      id: 'sistemas-agroforestales-montes-maria-2008-2011',
      title: 'Sistemas agroforestales en los Montes de María',
      image: process.env.REACT_APP_PROJECTS_IMAGE_3,
      year: '2008-2011',
      location: 'Montes de María'
    },
    {
      id: 'propuestas-ambientales-cultivos-ilicitos-2004-2007',
      title: 'Alternativas ambientales a cultivos ilícitos',
      image: process.env.REACT_APP_PROJECTS_IMAGE_1,
      year: '2004-2007',
      location: 'Bolívar, Sucre y Córdoba'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1><span className="highlight">Construcvida</span></h1>
            <p>
              Desde el 2002 contribuyendo al desarrollo integral y la paz de Colombia
            </p>
            <div className="hero-buttons">
              <Link to="/proyectos" className="btn btn-primary">
                Nuestros Proyectos
              </Link>
              <Link to="/contactos" className="btn btn-secondary">
                Contactar
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src={process.env.REACT_APP_HERO_IMAGE} 
              alt="Construcción moderna" 
            />
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Nuestros Servicios</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3>Asesorías</h3>
            </div>
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>Consultorías Especializadas</h3>
            </div>
            <div className="service-card">
              <div className="service-icon">🤝</div>
              <h3>Acompañamiento en Procesos Organizacionales</h3>
            </div>
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>Ejecución de Proyectos</h3>
            </div>
            <div className="service-card">
              <div className="service-icon">🔬</div>
              <h3>Proyectos de Ciencia y Tecnología</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-carousel">
        <div className="container">
          <h2>Nuestros Proyectos Destacados</h2>
          <div className="carousel-container">
            <button className="carousel-btn prev" onClick={prevProject}>
              ‹
            </button>
            
            <div className="carousel-content">
              <div className="project-slide">
                <div className="project-slide-image">
                  <img src={projects[currentProject].image} alt={projects[currentProject].title} />
                  <div className="project-slide-overlay">
                    <div className="project-slide-info">
                      <h3>{projects[currentProject].title}</h3>
                      <div className="project-slide-details">
                        <span className="project-year">{projects[currentProject].year}</span>
                        <span className="project-location">{projects[currentProject].location}</span>
                      </div>
                      <Link to={`/proyecto/${projects[currentProject].id}`} className="btn btn-accent">
                        Ver Proyecto
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="carousel-btn next" onClick={nextProject}>
              ›
            </button>
          </div>

          <div className="carousel-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentProject ? 'active' : ''}`}
                onClick={() => setCurrentProject(index)}
              />
            ))}
          </div>

          <div className="carousel-footer">
            <Link to="/proyectos" className="btn btn-secondary">
              Ver Todos los Proyectos
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;