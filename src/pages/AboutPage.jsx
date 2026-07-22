import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaHome, FaCode, FaDatabase, FaChartLine, FaLightbulb, FaFutbol, FaGamepad, FaBookOpen, FaLaptopCode, FaRocket, FaCodeBranch, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPhp, FaJava } from 'react-icons/fa';

const timeline = [
  {
    year: '2022',
    title: 'Inicio de Ingeniería',
    text: 'Comencé mi formación profesional en Ingeniería de Sistemas en la Universidad Autónoma de Ica, descubriendo diferentes áreas relacionadas con la tecnología, la informática y la programación.'
  },
  {
    year: '2023',
    title: 'Primeros pasos en programación',
    text: 'Empecé a desarrollar ejercicios y proyectos utilizando herramientas como PSeInt, Java y bases de datos, aprendiendo los fundamentos de la lógica de programación.'
  },
  {
    year: '2024',
    title: 'Desarrollo web',
    text: 'Fortalecí mis conocimientos en HTML, CSS, JavaScript, Bootstrap, PHP y MySQL, desarrollando páginas web y sistemas con formularios, registros y funciones interactivas.'
  },
  {
    year: '2025',
    title: 'Sistemas de información',
    text: 'Desarrollé proyectos más completos relacionados con gestión de gimnasios, reservas, expedientes, libros de reclamaciones y diferentes sistemas administrativos.'
  },
  {
    year: '2026',
    title: 'Innovación, inteligencia de negocios y proyectos',
    text: 'Actualmente desarrollo proyectos relacionados con React, análisis de datos, Power BI, inteligencia de negocios, chatbots y soluciones tecnológicas aplicadas a situaciones reales.'
  }
];

const stack = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'PHP', icon: <FaPhp /> },
  { name: 'MySQL', icon: <FaDatabase /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'SQL', icon: <FaDatabase /> },
  { name: 'Power BI', icon: <FaChartLine /> },
  { name: 'Git', icon: <FaCodeBranch /> },
  { name: 'GitHub', icon: <FaGithub /> }
];

const interests = [
  {
    title: 'Fútbol',
    text: 'Me gusta jugar como arquero y compartir partidos con mis amigos.',
    icon: <FaFutbol />
  },
  {
    title: 'Videojuegos',
    text: 'Disfruto los videojuegos de fútbol y los momentos de entretenimiento.',
    icon: <FaGamepad />
  },
  {
    title: 'Aprendizaje',
    text: 'Me gusta investigar, conocer nuevas herramientas y mejorar constantemente mis habilidades.',
    icon: <FaBookOpen />
  },
  {
    title: 'Tecnología',
    text: 'Tengo interés por los dispositivos, sistemas, aplicaciones y nuevas soluciones digitales.',
    icon: <FaLaptopCode />
  }
];

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="about-page">
      <header className="about-topbar">
        <Link to="/" className="logo about-logo">
          <span>JCDR</span>
        </Link>
        <Link className="btn btn-secondary about-back-btn" to="/">Volver al inicio</Link>
      </header>

      <section className="about-hero section">
        <div className="container about-hero-grid">
          <div className="about-hero-content">
            <p className="eyebrow">✦ Futuro Ingeniero de Sistemas</p>
            <h1>Más allá del código, THIS IS ME</h1>
            <p className="about-hero-description">
              Soy Juan Carlos Díaz Rodríguez, estudiante del noveno ciclo de Ingeniería de Sistemas en la Universidad Autónoma de Ica. Tengo 21 años y me apasiona el desarrollo web, la creación de sistemas de información, las bases de datos, la inteligencia de negocios y el uso de la tecnología para resolver problemas reales.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/proyectos">Ver mis proyectos</Link>
              <Link className="btn btn-secondary" to="/">Volver al inicio</Link>
            </div>
            <div className="about-highlights">
              <span><FaCode /> Desarrollo web</span>
              <span><FaDatabase /> Bases de datos</span>
              <span><FaChartLine /> Inteligencia de negocios</span>
              <span><FaLightbulb /> Innovación</span>
            </div>
          </div>

          <div className="about-photo-card">
            <img src="/foto.jfif" alt="Juan Carlos Díaz Rodríguez" />
            <div className="about-photo-badge">
              <FaRocket />
              <span>Estudiante • Creador • Aprendiz</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Sobre mí</p>
            <h2>Más que un estudiante, un creador de soluciones.</h2>
          </div>
          <div className="about-story-card">
            <p>
              Además de mi formación universitaria, me considero una persona responsable, curiosa y comprometida con mi crecimiento profesional. Tengo interés por el desarrollo de software, el diseño de páginas web, la administración de bases de datos, la inteligencia de negocios y las nuevas tecnologías.
            </p>
            <p>
              Disfruto convertir una idea en un proyecto funcional. Cada sistema que desarrollo representa una oportunidad para mejorar mis conocimientos, enfrentar nuevos desafíos y adquirir experiencia. Mi objetivo es crear soluciones digitales que puedan facilitar procesos y generar un aporte positivo para las personas y organizaciones.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-quote-card">
            <p>
              “Cada dificultad representa una oportunidad para aprender, mejorar y demostrar de lo que somos capaces. El éxito no depende solamente de avanzar rápido, sino de mantener la constancia, levantarse después de cada error y continuar trabajando hasta alcanzar nuestros objetivos.”
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Mi camino</p>
            <h2>Mi camino como estudiante de Ingeniería de Sistemas</h2>
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div className={`timeline-item ${index % 2 === 1 ? 'alt' : ''}`} key={item.year}>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Con lo que trabajo</p>
            <h2>Mi stack principal</h2>
          </div>
          <div className="stack-grid">
            {stack.map((item) => (
              <article className="stack-card" key={item.name}>
                <div className="stack-icon">{item.icon}</div>
                <h3>{item.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Lo que también forma parte de mí</p>
            <h2>Fuera del código</h2>
          </div>
          <div className="interests-grid">
            {interests.map((item) => (
              <article className="interest-card" key={item.title}>
                <div className="interest-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-gallery-card">
            <div>
              <p className="eyebrow">Galería personal</p>
              <h2>Algunas cosas que me representan</h2>
              <p>Más allá de la tecnología, me interesa crecer, aprender y construir experiencias significativas tanto a nivel profesional como personal.</p>
            </div>
            <div className="about-gallery-list">
              <span>⚡ Creatividad</span>
              <span>⚽ Constancia</span>
              <span>📚 Curiosidad</span>
              <span>💡 Innovación</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-page-footer">
        <div className="container about-page-footer-inner">
          <div>
            <p className="eyebrow">Siguiente paso</p>
            <h2>Si quieres conocer más de mis proyectos, te invito a explorar mi trabajo.</h2>
          </div>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/proyectos">Explorar proyectos <FaArrowRight /></Link>
            <Link className="btn btn-secondary" to="/"> <FaHome /> Inicio</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
