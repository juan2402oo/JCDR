import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { contactData } from '../data/contact';

const Hero = () => {
  return (
    <section id="inicio" className="hero section">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">Estudiante de Ingeniería de Sistemas</p>
          <h1>¡Hola, soy Juan Carlos!</h1>
          <p className="hero-description">
            Desarrollo soluciones web, sistemas de información, bases de datos y proyectos de inteligencia de negocios orientados a resolver problemas reales mediante la tecnología.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#proyectos">Ver proyectos</a>
            <a className="btn btn-secondary" href="#contacto">Contáctame</a>
          </div>
          <div className="social-links">
            <a href={contactData.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href={contactData.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href={contactData.whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href={`mailto:${contactData.institutionalEmail}`} aria-label="Correo institucional"><FaEnvelope /></a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-card">
            <img src="/perfil.png" alt="Juan Carlos Díaz Rodríguez" className="avatar-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
