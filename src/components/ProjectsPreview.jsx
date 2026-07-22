import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const ProjectsPreview = () => {
  const previewProjects = projects.slice(0, 3);

  return (
    <section id="proyectos" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Proyectos</p>
          <h2>Sistemas web realizados a lo largo de mi ciclo academico.</h2>
        </div>
        <div className="projects-grid">
          {previewProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
