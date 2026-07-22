import { FaCode, FaDatabase, FaChartLine, FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const highlights = [
  { title: 'Desarrollo web', icon: <FaCode /> },
  { title: 'Bases de datos', icon: <FaDatabase /> },
  { title: 'Inteligencia de negocios', icon: <FaChartLine /> },
  { title: 'Innovación tecnológica', icon: <FaLightbulb /> }
];

const About = () => {
  return (
    <section id="sobremi" className="section about-section">
      <div className="container about-grid">
        <div>
          <p className="eyebrow">Sobre mí</p>
          <h2>Conoce un poco más de mi formación y mis intereses profesionales.</h2>
          <p>
            Soy Juan Carlos Díaz Rodríguez, estudiante del noveno ciclo de Ingeniería de Sistemas en la Universidad Autónoma de Ica. Tengo interés en el desarrollo web, desarrollo de sistemas, bases de datos, inteligencia de negocios, aplicaciones educativas y soluciones tecnológicas innovadoras. Me gusta transformar necesidades reales en proyectos funcionales, organizados y fáciles de utilizar.
          </p>
          <Link className="btn btn-secondary" to="/sobre-mi">Conocer más sobre mí</Link>
        </div>
        <div className="about-cards">
          {highlights.map((item) => (
            <article className="info-card" key={item.title}>
              <div className="info-icon">{item.icon}</div>
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
