import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/acerca', label: 'Acerca de CONSTRUCVIDA' },
    { path: '/proyectos', label: 'Proyectos' },
    { path: '/noticias', label: 'Noticias' },
    { path: '/requerimiento', label: 'Requerimiento Web' },
    { path: '/contactos', label: 'Contactos' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/">
            <img 
              src="https://github.com/user-attachments/assets/706a734b-e540-4092-8d3c-1d79edef83d3" 
              alt="Construvida" 
              className="nav-logo"
            />
            <span className="nav-title">CONSTRUCVIDA</span>
          </Link>
        </div>
        
        <button 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;