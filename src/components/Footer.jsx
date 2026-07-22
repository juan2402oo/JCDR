import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { contactData } from '../data/contact';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo footer-logo">JCDR</div>
          <p>Transformando ideas en soluciones tecnológicas.</p>
        </div>
        <div>
          <h3>Enlaces rápidos</h3>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#sobremi">Sobre mí</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h3>Redes sociales</h3>
          <div className="footer-socials">
            <a href={contactData.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href={contactData.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href={contactData.whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href={contactData.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Juan Carlos Díaz Rodríguez. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
