import {
  FaBootstrap,
  FaChartLine,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaFileExcel,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaLayerGroup,
  FaNetworkWired,
  FaPhp,
  FaReact,
  FaServer
} from 'react-icons/fa';

const iconMap = {
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  FaJsSquare: FaJsSquare,
  FaBootstrap: FaBootstrap,
  FaReact: FaReact,
  FaPhp: FaPhp,
  FaDatabase: FaDatabase,
  FaJava: FaJava,
  FaCode: FaCode,
  FaServer: FaServer,
  FaLayerGroup: FaLayerGroup,
  FaNetworkWired: FaNetworkWired,
  FaGitAlt: FaGitAlt,
  FaGithub: FaGithub,
  FaFileExcel: FaFileExcel,
  FaChartLine: FaChartLine
};

const Skills = ({ data }) => {
  const renderIcon = (iconName) => {
    const Component = iconMap[iconName];
    return Component ? <Component /> : <FaCode />;
  };

  return (
    <section id="habilidades" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Habilidades</p>
          <h2>Competencias que desarrollo con enfoque práctico.</h2>
        </div>
        <div className="skills-grid">
          {data.map((group) => (
            <article className="skill-card" key={group.category}>
              <h3>{group.category}</h3>
              <div className="skill-list">
                {group.items.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-top">
                      <span className="skill-icon">{renderIcon(skill.icon)}</span>
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
