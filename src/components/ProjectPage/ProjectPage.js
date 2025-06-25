import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectPage.css';

const ProjectPage = () => {
  const { id } = useParams();

  const projects = [
    {
      id: 'humedales-bajo-magdalena-tercera-2016',
      title: 'Apoyo al proceso de manejo y conservación de humedales en el Bajo Magdalena, a través del aprovechamiento de los recursos pesqueros con miras a la implementación de propuestas de Desarrollo Sostenible de los cuerpos de agua en la región - Tercera intervención',
      period: '2016',
      allies: ['Corporación de Desarrollo y Paz del Bajo Magdalena', 'Unión Europea', 'Prosperidad Social'],
      description: '',
      year: 2016
    },
    {
      id: 'humedales-bajo-magdalena-segunda-2016',
      title: 'Apoyo al proceso de manejo y conservación de humedales en el Bajo Magdalena, a través del aprovechamiento de los recursos pesqueros con miras a la implementación de propuestas de Desarrollo Sostenible de los cuerpos de agua en la región - Segunda intervención',
      period: '2016',
      allies: ['Corporación de Desarrollo y Paz del Bajo Magdalena', 'Unión Europea', 'Prosperidad Social'],
      description: '',
      year: 2016
    },
    {
      id: 'humedales-bajo-magdalena-primera-2016',
      title: 'Apoyo al proceso de manejo y conservación de humedales en el Bajo Magdalena, a través del aprovechamiento de los recursos pesqueros con miras a la implementación de propuestas de Desarrollo Sostenible de los cuerpos de agua en la región - Primera intervención',
      period: '2016',
      allies: ['Corporación de Desarrollo y Paz del Bajo Magdalena', 'Unión Europea', 'Prosperidad Social'],
      description: '',
      year: 2016
    },
    {
      id: 'plan-seguridad-alimentaria-penon-2015',
      title: 'Construcción participativa del Plan Municipal de Seguridad Alimentaria y Nutricional (PMSAN) "El Peñón Sin Hambre" del municipio de El Peñón, Bolívar',
      period: '2015',
      allies: ['Alcaldía Municipal de El Peñón, Bolívar'],
      description: '',
      year: 2015
    },
    {
      id: 'programa-nuevos-territorios-paz-2012-2015',
      title: 'Apoyo al Programa de Desarrollo y Paz en la gestión, formulación y puesta en marcha del Programa Nuevos Territorios de Paz de la Unión Europea en once municipios del bajo Magdalena',
      period: '2012-2015',
      allies: ['Corporación de Desarrollo y Paz del Bajo Magdalena', 'Entidades Territoriales', 'Organizaciones de Base Comunitaria', 'Redes Sociales', 'Colectivos de Comunicación Comunitarios'],
      description: '',
      year: 2015
    },
    {
      id: 'sistemas-agroforestales-montes-maria-2008-2011',
      title: 'Establecimiento de 180 hectáreas en sistemas agroforestales para mejorar la calidad de vida de 180 familias campesinas en la región montaña de los Montes de María',
      period: '2008-2011',
      allies: ['Unión Europea', 'Acción Social', 'CODESCAC'],
      description: '',
      year: 2011
    },
    {
      id: 'sistemas-alternativos-produccion-2009-2010',
      title: 'Implementación de cinco sistemas alternativos integrales de producción sostenible con 60 familias de productores agrícolas y piscícolas de los municipios de Mompox, el Peñón y Magangué en el departamento de Bolívar',
      period: '2009-2010',
      allies: ['Corporación para el Desarrollo Sostenible de la Región Caribe Colombiana – CODESCAC'],
      description: '',
      year: 2010
    },
    {
      id: 'alimentacion-escolar-tiquisio-2004-2015',
      title: 'Acompañamiento estratégico a los procesos de salud pública y prestación del servicio de Alimentación Escolar a menores de básica primaria del municipio de Tiquisio en el Sur de Bolívar',
      period: '2004-2005 y 2009-2015',
      allies: ['Alcaldía Municipal de Puerto Rico Tiquisio'],
      description: '',
      year: 2015
    },
    {
      id: 'reforestacion-san-jacinto-2007-2008',
      title: 'Reforestación de 64 hectáreas en áreas críticas de las micro cuencas que abastecen acueductos veredales y municipales en el municipio de San Jacinto del Cauca, Departamento de Bolívar',
      period: '2007-2008',
      allies: ['Corporación Autónoma Regional de Sucre - CARSUCRE', 'Corporación para el Desarrollo Sostenible de la Región Caribe Colombiana – CODESCAC'],
      description: '',
      year: 2008
    },
    {
      id: 'propuestas-ambientales-cultivos-ilicitos-2004-2007',
      title: 'Propuestas comunitarias ambientales alternativas a los cultivos de uso ilícito en los departamentos de Bolívar, Sucre y Córdoba',
      period: '2004-2007',
      allies: ['Agencia Canadiense de Cooperación Internacional "ACDI"', 'Corporación para el Desarrollo Sostenible de la Región Caribe Colombiana – CODESCAC'],
      description: '',
      year: 2007
    },
    {
      id: 'sistemas-alternativos-magdalena-bolivar-2006-2007',
      title: 'Diseño y establecimiento de cinco (5) sistemas alternativos de producción integral sostenible con 40 familias de los municipios de Plato y Tenerife en el Departamento del Magdalena y El Peñón en el Departamento de Bolívar',
      period: '2006-2007',
      allies: ['Corporación para el Desarrollo Sostenible de la Región Caribe Colombiana – CODESCAC'],
      description: '',
      year: 2007
    },
    {
      id: 'sistemas-agroforestales-albania-2005-2006',
      title: 'Establecimiento de sistemas agroforestales y silvopastoriles en el corregimiento de Albania, municipio de San Juan de Betulia',
      period: '2005-2006',
      allies: ['Corporación Autónoma Regional de Sucre - CARSUCRE', 'CODESCAC'],
      description: '',
      year: 2006
    },
  ];

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="project-page">
        <div className="container">
          <h1>Proyecto no encontrado</h1>
          <p>El proyecto que buscas no existe.</p>
        </div>
      </div>
    );
  }

  const generateGalleryImages = (projectId) => {
    return Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      src: process.env.REACT_APP_PROJECT_GALLERY_PLACEHOLDER || 'https://via.placeholder.com/400x300',
      alt: `${project.title} - Imagen ${i + 1}`
    }));
  };

  const galleryImages = generateGalleryImages(project.id);

  return (
    <div className="project-page">
      <section className="project-header">
        <div className="container">
          <h1>{project.title}</h1>
          <div className="project-meta">
            <span className="project-period">{project.period}</span>
          </div>
        </div>
      </section>

      <section className="project-content">
        <div className="container">
          <div className="project-info-grid">
            <div className="project-allies">
              <h2>Aliados Estratégicos</h2>
              <ul className="allies-list">
                {project.allies.map((ally, index) => (
                  <li key={index} className="ally-item">
                    <span className="ally-icon">🤝</span>
                    {ally}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="project-gallery">
            <h2>Galería de Ejecución</h2>
            <div className="gallery-grid">
              {galleryImages.map((image) => (
                <div key={image.id} className="gallery-item">
                  <img src={image.src} alt={image.alt} />
                  <div className="gallery-overlay">
                    <span className="gallery-icon">🔍</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;