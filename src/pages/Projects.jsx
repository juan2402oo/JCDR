import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { projects } from '../data/projects';
import ChatModal from '../components/ChatModal';

const categories = ['Sitios web', 'Dashboard'];

const Projects = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const openChat = (project) => {
    setActiveProject(project);
    setChatOpen(true);
  };

  const closeChat = () => {
    setChatOpen(false);
    setActiveProject(null);
  };

  return (
    <>
      <Navbar />

      <main className="page-projects">
        <section className="section projects-hero">
          <div className="container">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <p className="eyebrow">Proyectos para mi portafolio</p>
                <h1>MIS PROYECTOS</h1>
                <p>
                  Exploro el desarrollo web, la analítica de datos y el diseño
                  de bases de datos con un enfoque práctico y orientado a
                  resultados.
                </p>
              </div>

              <Link className="btn btn-outline" to="/">
                ← Regresar al inicio
              </Link>
            </div>
          </div>
        </section>

        {categories.map((category) => {
          const items = projects.filter(
            (project) => project.category === category
          );

          return (
            <section key={category} className="section">
              <div className="container">
                <h2 className="category-title">{category}</h2>

                <div className="projects-grid">
                  {items.map((project) => (
                    <article
                      className="project-card detail-card"
                      key={project.id}
                    >
                      <img src={project.image} alt={project.title} />

                      <div className="project-body">
                        <h3>{project.title}</h3>

                        <p>{project.description}</p>

                        <div className="tech-tags">
                          {project.technologies.map((tech) => (
                            <span key={tech}>{tech}</span>
                          ))}
                        </div>

                        <div className="project-actions">

                          {/* SITIOS WEB */}
                          {project.category === 'Sitios web' && (
                            <>
                              <a
                                className="btn btn-primary"
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Ver proyecto
                              </a>

                              <button
                                className="btn btn-secondary"
                                onClick={() => openChat(project)}
                              >
                                Pregúntame sobre este proyecto
                              </button>
                            </>
                          )}

                          {/* DASHBOARD */}
                          {project.category === 'Dashboard' && (
                            <>
                              <a
                                className="btn btn-primary"
                                href={project.powerbi}
                                download
                              >
                                Descargar Power BI
                              </a>

                              {project.pdf && (
                                <a
                                  className="btn btn-outline"
                                  href={project.pdf}
                                  download
                                >
                                  Descargar PDF
                                </a>
                              )}
                            </>
                          )}

                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {chatOpen && activeProject && (
          <ChatModal
            project={activeProject}
            onClose={closeChat}
          />
        )}
      </main>

      <Footer />
    </>
  );
};

export default Projects;