import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import ProjectPage from './components/ProjectPage/ProjectPage';
import WebRequirements from './pages/WebRequirements/WebRequirements';
import Contact from './pages/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<About />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/proyecto/:id" element={<ProjectPage />} />
          <Route path="/requerimiento" element={<WebRequirements />} />
          <Route path="/contactos" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;