import React from 'react';
import './Contact.css';

const Contact = () => {

  return (
    <div className="contact">
      <section className="contact-header">
        <div className="container">
          <h1>Contáctanos</h1>
          <p>
            Estamos aquí para ayudarte. Ponte en contacto con nosotros y 
            hagamos realidad tu próximo proyecto.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Información de Contacto</h2>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h3>Teléfono</h3>
                  <p>+(57) 321 564 2958</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>construcvida@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">🌐</div>
                <div className="contact-details">
                  <h3>Sitio Web</h3>
                  <p><a href="https://www.construcvida.org" target="_blank" rel="noopener noreferrer">www.construcvida.org</a></p>
                </div>
              </div>

              <div className="social-links">
                <h3>Síguenos</h3>
                <div className="social-icons">
                  <a href="https://facebook.com/construcvida" className="social-link" target="_blank" rel="noopener noreferrer">
                    <span className="social-icon">📘</span>
                    <span>Facebook</span>
                  </a>
                  <a href="https://twitter.com/construcvida" className="social-link" target="_blank" rel="noopener noreferrer">
                    <span className="social-icon">🐦</span>
                    <span>Twitter</span>
                  </a>
                  <a href="https://wa.me/573215642958" className="social-link" target="_blank" rel="noopener noreferrer">
                    <span className="social-icon">📞</span>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-message">
              <h2>¿Cómo podemos ayudarte?</h2>
              <p>
                Estamos aquí para apoyarte en tus proyectos y responder todas tus consultas. 
                No dudes en contactarnos a través de cualquiera de nuestros canales de comunicación.
              </p>
              <div className="contact-cta">
                <a href="mailto:construcvida@gmail.com" className="btn btn-primary">
                  Enviar Email
                </a>
                <a href="https://wa.me/573215642958" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;