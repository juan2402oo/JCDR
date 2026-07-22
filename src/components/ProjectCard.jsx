import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      <img src={project.image} alt={project.title} />
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-tags">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <Link className="btn btn-outline" to="/proyectos">Explorar colección</Link>
      </div>
    </article>
  );
};

export default ProjectCard;
