import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './WebRequirements.css';

const WebRequirements = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const documents = [
    { name: "Primeros Estatutos", file: "01_Primeros_Estatutos.pdf" },
    { name: "Acta de Constitución", file: "02_acta_de_constitucion.pdf" },
    { name: "Lista de socios fundadores", file: "03_Lista_de_socios_fundadores.pdf" },
    { name: "Estatutos reformados 2020", file: "04_Estatutos_reformados_2020.pdf" },
    { name: "Estatutos reformados 2022", file: "05_Estatutos_reformados_2022.pdf" },
    { name: "Cédula de Ciudadanía - Representante Legal", file: "06_Cedula_Representante_Legal.pdf" },
    { name: "RUT", file: "07_RUT.pdf" },
    { name: "Certificado de Cámara de Comercio", file: "08_Certificado_Camara_de_Comercio.pdf" },
    { name: "Contraloría - Representante Legal", file: "09_Contraloria_Representante_Legal.pdf" },
    { name: "Contraloría - Construcvida", file: "10_Contraloria_Construcvida.pdf" },
    { name: "Procuraduría - Representante Legal", file: "11_Procuraduria_Representante_Legal.pdf" },
    { name: "Procuraduría - Construcvida", file: "12_Procuraduria_Construcvida.pdf" },
    { name: "Consulta RNMC - Representante Legal", file: "13_Consulta_RNMC_Representante_Legal.pdf" },
    { name: "Consulta RNMC - Construcvida", file: "14_Consulta_RNMC_Construcvida.pdf" },
    { name: "Policía Nacional - Representante Legal", file: "15_policia_nacional_representante_legal.pdf" },
    { name: "Policía Nacional - Construcvida", file: "16_policia_nacional_construcvida.pdf" },
    { name: "Certificado de Cargos Directivos", file: "17_Certificado_Cargos_Directivos.pdf" },
    { name: "Certificado de Cumplimiento RTE", file: "18_Certificado_Cumplimiento_RTE.pdf" },
    { name: "Certificado de Antecedentes Judiciales", file: "19_Certificado_Antecedentes_Judiciales.pdf" },
    { name: "Solicitud Régimen Tributario Especial", file: "Documento_Adicional.pdf" },
    { name: "Acta Nº 12 de Asamblea General", file: "Acta_12_Asamblea_General_Construcvida.pdf" },
    { name: "Balance Completo 2023-2024", file: "Balance_Completo_2023_2024_Final.pdf" },
    { name: "Composición Accionaria", file: "Composicion_Accionaria.pdf" },
    { name: "Informe Técnico y Financiero de Gestión 2024", file: "informe_tecnico_y_financiero_de_gestion_2024_construcvida.pdf" }
  ];

  const filteredDocuments = documents.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenDocument = (fileName) => {
    window.open(`/requerimientos_web/${fileName}`, '_blank');
  };

  return (
    <div className="documents-page">
      <section className="documents-header">
        <div className="container">
          <h1>Requerimiento Web</h1>
          <p>
            Documentación oficial de Construcvida disponible para consulta.
            Todos los documentos están listados para facilitar su acceso.
          </p>
        </div>
      </section>

      <section className="documents-content">
        <div className="container">
          <div className="search-section">
            <div className="search-box">
              <input
                type="text"
                placeholder="Buscar documentos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <span className="search-icon">🔍</span>
            </div>
            <p className="documents-count">
              {filteredDocuments.length} documento{filteredDocuments.length !== 1 ? 's' : ''} encontrado{filteredDocuments.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="documents-list">
            {filteredDocuments.map((doc, index) => (
              <div key={index} className="document-card">
                <div className="document-info">
                  <div className="document-icon">📄</div>
                  <div className="document-details">
                    <h3>{doc.name}</h3>
                    <span className="document-type">PDF</span>
                  </div>
                </div>
                <button
                  onClick={() => handleOpenDocument(doc.file)}
                  className="open-btn"
                  title={`Abrir ${doc.name}`}
                >
                  👁️
                </button>
              </div>
            ))}
          </div>

          {filteredDocuments.length === 0 && (
            <div className="no-results">
              <div className="no-results-icon">📂</div>
              <h3>No se encontraron documentos</h3>
              <p>Intenta con otros términos de búsqueda</p>
            </div>
          )}

          <div className="documents-footer">
            <div className="footer-info">
              <p>
                <strong>Nota:</strong> Todos los documentos están en formato PDF. 
                Si tienes problemas para visualizar algún archivo, por favor 
                <Link to="/contactos"> contáctanos</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebRequirements;