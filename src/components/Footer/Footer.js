import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              <img 
                src="https://github.com/user-attachments/assets/706a734b-e540-4092-8d3c-1d79edef83d3" 
                alt="CONSTRUCVIDA" 
                className="footer-logo-img"
              />
            </div>
          </div>
          
          <div className="footer-column">
            <div className="footer-brand">
              <h3>CONSTRUCVIDA</h3>
              <p>Corporación Construyendo Vida</p>
              <p className="footer-description">
                Organización de la sociedad civil comprometida con el desarrollo 
                integral y la paz en el caribe colombiano.
              </p>
            </div>
          </div>
          
          <div className="footer-column">
            <div className="footer-contact">
              <h4>Contacto</h4>
              <div className="footer-contact-items">
                <a href="mailto:construcvida@gmail.com" className="footer-contact-item" title="Email">
                  <span className="footer-contact-icon">✉️</span>
                </a>
                <a href="tel:+573215642958" className="footer-contact-item" title="Teléfono: +(57) 321 564 2958">
                  <span className="footer-contact-icon">📞</span>
                </a>
                <a href="https://facebook.com/construcvida" target="_blank" rel="noopener noreferrer" className="footer-contact-item" title="Facebook">
                  <span className="footer-contact-icon">📘</span>
                </a>
                <a href="https://twitter.com/construcvida" target="_blank" rel="noopener noreferrer" className="footer-contact-item" title="Twitter">
                  <span className="footer-contact-icon">🐦</span>
                </a>
                <a href="https://www.construcvida.org" target="_blank" rel="noopener noreferrer" className="footer-contact-item" title="Sitio web">
                  <span className="footer-contact-icon">🌐</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 CONSTRUCVIDA - Corporación Construyendo Vida. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;