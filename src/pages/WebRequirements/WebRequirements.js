import React from 'react';
import { Link } from 'react-router-dom';
import './WebRequirements.css';

const WebRequirements = () => {
  return (
    <div className="maintenance-page">
      <section className="maintenance-content">
        <div className="container">
          <div className="maintenance-card">
            <div className="maintenance-icon">
              🔧
            </div>
            <h1>Página en Mantenimiento</h1>
            <p>
              Estamos trabajando para mejorar esta sección. 
              Pronto estará disponible con nuevas funcionalidades.
            </p>
            <div className="maintenance-details">
              <div className="detail-item">
                <span className="detail-icon">⏰</span>
                <span>Tiempo estimado: Próximamente</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">🔄</span>
                <span>Estado: En desarrollo</span>
              </div>
            </div>
            <div className="maintenance-actions">
              <Link to="/" className="btn btn-primary">
                Volver al Inicio
              </Link>
              <Link to="/contactos" className="btn btn-outline">
                Contáctanos
              </Link>
            </div>
            <p className="maintenance-note">
              Si necesitas información inmediata, no dudes en contactarnos directamente.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebRequirements;