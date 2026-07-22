import { useState } from 'react';
import { achievements } from '../data/achievements';
import { FaTrophy, FaMedal, FaCertificate } from 'react-icons/fa';

const filters = ['Ver todo', 'Certificados', 'Cursos', 'Módulos', 'Destacados'];

const Achievements = () => {
  const [activeFilter, setActiveFilter] = useState('Ver todo');

  const filtered = achievements.filter((item) => {
    if (activeFilter === 'Ver todo') return true;
    if (activeFilter === 'Destacados') return item.featured;
    return item.category === activeFilter;
  });

  return (
    <section id="logros" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Logros</p>
          <h2>Certificados, cursos y módulos que fortalecen mi perfil profesional.</h2>
        </div>

        <div className="filter-group" role="tablist" aria-label="Filtrar logros">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="achievements-grid">
          {filtered.map((item) => (
            <article className="achievement-card" key={item.id}>
              <div className="achievement-card-badge">
                {item.badgeImage ? (
                  <img
                    src={item.badgeImage}
                    alt={`Insignia de ${item.title}`}
                    className="achievement-card-badge-image"
                  />
                ) : (
                  <div className="achievement-card-badge-placeholder">
                    Insignia
                  </div>
                )}
              </div>
              <div className="achievement-icon">
                {item.featured ? <FaTrophy /> : item.type === 'Certificado' ? <FaCertificate /> : <FaMedal />}
              </div>
              <div className="achievement-body">
                <div className="achievement-badges">
                  {item.featured && <span className="badge featured">Destacado</span>}
                  <span className="badge">{item.type}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.platform}</p>
                <p className="achievement-meta">Año {item.year}</p>
                <a
                  className="btn btn-outline"
                  href={item.link}
                  target={item.link && item.link.startsWith('http') ? '_blank' : '_self'}
                  rel={item.link && item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  Ver credencial
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
