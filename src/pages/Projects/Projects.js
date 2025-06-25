import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'humedales-bajo-magdalena-tercera-2016',
      title: 'Apoyo al proceso de manejo y conservación de humedales en el Bajo Magdalena, a través del aprovechamiento de los recursos pesqueros con miras a la implementación de propuestas de Desarrollo Sostenible de los cuerpos de agua en la región - Tercera intervención',
      category: 'environmental',
      image: process.env.REACT_APP_PROJECTS_IMAGE_1,
      description: '',
      location: 'Bajo Magdalena',
      year: '2016',
      status: 'completed'
    },
    {
      id: 'humedales-bajo-magdalena-segunda-2016',
      title: 'Apoyo al proceso de manejo y conservación de humedales en el Bajo Magdalena, a través del aprovechamiento de los recursos pesqueros con miras a la implementación de propuestas de Desarrollo Sostenible de los cuerpos de agua en la región - Segunda intervención',
      category: 'environmental',
      image: process.env.REACT_APP_PROJECTS_IMAGE_2,
      description: '',
      location: 'Bajo Magdalena',
      year: '2016',
      status: 'completed'
    },
    {
      id: 'humedales-bajo-magdalena-primera-2016',
      title: 'Apoyo al proceso de manejo y conservación de humedales en el Bajo Magdalena, a través del aprovechamiento de los recursos pesqueros con miras a la implementación de propuestas de Desarrollo Sostenible de los cuerpos de agua en la región - Primera intervención',
      category: 'environmental',
      image: process.env.REACT_APP_PROJECTS_IMAGE_3,
      description: '',
      location: 'Bajo Magdalena',
      year: '2016',
      status: 'completed'
    },
    {
      id: 'plan-seguridad-alimentaria-penon-2015',
      title: 'Construcción participativa del Plan Municipal de Seguridad Alimentaria y Nutricional (PMSAN) "El Peñón Sin Hambre" del municipio de El Peñón, Bolívar',
      category: 'social',
      image: process.env.REACT_APP_PROJECTS_IMAGE_1,
      description: '',
      location: 'El Peñón, Bolívar',
      year: '2015',
      status: 'completed'
    },
    {
      id: 'programa-nuevos-territorios-paz-2012-2015',
      title: 'Apoyo al Programa de Desarrollo y Paz en la gestión, formulación y puesta en marcha del Programa Nuevos Territorios de Paz de la Unión Europea en once municipios del bajo Magdalena (Magangué, Pinillos, Mompox, El Peñón, Pijiño del Carmen, El Banco, Plato, Tenerife, Sabanas de San Ángel, Salamina y Pivijay)',
      category: 'peace',
      image: process.env.REACT_APP_PROJECTS_IMAGE_2,
      description: '',
      location: 'Bajo Magdalena',
      year: '2015',
      status: 'completed'
    },
    {
      id: 'sistemas-agroforestales-montes-maria-2008-2011',
      title: 'Establecimiento de 180 hectáreas en sistemas agroforestales para mejorar la calidad de vida de 180 familias campesinas en la región montaña de los Montes de María (municipios de Chalán, Coloso, Ovejas, Los Palmitos y Morroa)',
      category: 'productive',
      image: process.env.REACT_APP_PROJECTS_IMAGE_3,
      description: '',
      location: 'Montes de María',
      year: '2011',
      status: 'completed'
    },
    {
      id: 'sistemas-alternativos-produccion-2009-2010',
      title: 'Implementación de cinco sistemas alternativos integrales de producción sostenible con 60 familias de productores agrícolas y piscícolas de los municipios de Mompox, el Peñón y Magangué en el departamento de Bolívar',
      category: 'productive',
      image: process.env.REACT_APP_PROJECTS_IMAGE_1,
      description: '',
      location: 'Bolívar',
      year: '2010',
      status: 'completed'
    },
    {
      id: 'alimentacion-escolar-tiquisio-2004-2015',
      title: 'Acompañamiento estratégico a los procesos de salud pública y prestación del servicio de Alimentación Escolar a menores de básica primaria del municipio de Tiquisio en el Sur de Bolívar',
      category: 'social',
      image: process.env.REACT_APP_PROJECTS_IMAGE_2,
      description: '',
      location: 'Tiquisio, Bolívar',
      year: '2015',
      status: 'completed'
    },
    {
      id: 'reforestacion-san-jacinto-2007-2008',
      title: 'Reforestación de 64 hectáreas en áreas críticas de las micro cuencas que abastecen acueductos veredales y municipales en el municipio de San Jacinto del Cauca, Departamento de Bolívar',
      category: 'environmental',
      image: process.env.REACT_APP_PROJECTS_IMAGE_3,
      description: '',
      location: 'San Jacinto del Cauca, Bolívar',
      year: '2008',
      status: 'completed'
    },
    {
      id: 'propuestas-ambientales-cultivos-ilicitos-2004-2007',
      title: 'Propuestas comunitarias ambientales alternativas a los cultivos de uso ilícito en los departamentos de Bolívar, Sucre y Córdoba',
      category: 'environmental',
      image: process.env.REACT_APP_PROJECTS_IMAGE_1,
      description: '',
      location: 'Bolívar, Sucre y Córdoba',
      year: '2007',
      status: 'completed'
    },
    {
      id: 'sistemas-alternativos-magdalena-bolivar-2006-2007',
      title: 'Diseño y establecimiento de cinco (5) sistemas alternativos de producción integral sostenible con 40 familias de los municipios de Plato y Tenerife en el Departamento del Magdalena y El Peñón en el Departamento de Bolívar',
      category: 'productive',
      image: process.env.REACT_APP_PROJECTS_IMAGE_2,
      description: '',
      location: 'Magdalena y Bolívar',
      year: '2007',
      status: 'completed'
    },
    {
      id: 'sistemas-agroforestales-albania-2005-2006',
      title: 'Establecimiento de sistemas agroforestales y silvopastoriles en el corregimiento de Albania, municipio de San Juan de Betulia',
      category: 'productive',
      image: process.env.REACT_APP_PROJECTS_IMAGE_3,
      description: '',
      location: 'San Juan de Betulia',
      year: '2006',
      status: 'completed'
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects">
      <section className="projects-header">
        <div className="container">
          <h1>Nuestros Proyectos</h1>
          <p>
            Conoce los proyectos y programas que desarrollamos para promover el desarrollo 
            integral y la construcción de paz en el territorio colombiano.
          </p>
        </div>
      </section>

      <section className="projects-content">
        <div className="container">
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              Todos
            </button>
            <button 
              className={`filter-btn ${filter === 'environmental' ? 'active' : ''}`}
              onClick={() => setFilter('environmental')}
            >
              Ambientales
            </button>
            <button 
              className={`filter-btn ${filter === 'productive' ? 'active' : ''}`}
              onClick={() => setFilter('productive')}
            >
              Productivos
            </button>
            <button 
              className={`filter-btn ${filter === 'social' ? 'active' : ''}`}
              onClick={() => setFilter('social')}
            >
              Sociales
            </button>
            <button 
              className={`filter-btn ${filter === 'peace' ? 'active' : ''}`}
              onClick={() => setFilter('peace')}
            >
              Paz y Desarrollo
            </button>
          </div>

          <div className="projects-grid">
            {filteredProjects.map(project => (
              <Link key={project.id} to={`/proyecto/${project.id}`} className="project-card-link">
                <div className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <span className={`status ${project.status}`}>
                        {project.status === 'completed' ? 'Ejecutado' : 'En Ejecución'}
                      </span>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-details">
                      <div className="detail">
                        <span className="detail-label">Ubicación:</span>
                        <span className="detail-value">{project.location}</span>
                      </div>
                      <div className="detail">
                        <span className="detail-label">Año:</span>
                        <span className="detail-value">{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Projects;