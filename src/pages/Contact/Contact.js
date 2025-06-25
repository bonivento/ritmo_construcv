import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('¡Gracias por tu mensaje! Te responderemos pronto.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

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
                  <p>+(57) 300 670 6770</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>info@construcvida.org</p>
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
                  <a href="https://wa.me/573006706770" className="social-link" target="_blank" rel="noopener noreferrer">
                    <span className="social-icon">📞</span>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Envíanos un Mensaje</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nombre Completo *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Correo Electrónico *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Teléfono</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Asunto *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Seleccionar asunto...</option>
                      <option value="collaboration">Oportunidades de Colaboración</option>
                      <option value="consultation">Consulta General</option>
                      <option value="programs">Información sobre Programas</option>
                      <option value="partnership">Alianzas Estratégicas</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensaje *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    placeholder="Cuéntanos sobre tu consulta o propuesta de colaboración..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;