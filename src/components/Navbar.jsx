import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobremi' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Logros', href: '#logros' },
  { label: 'Contacto', href: '#contacto' }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const sectionElements = Array.from(document.querySelectorAll('section[id]'));
    let animationFrameId;

    const updateActiveSection = () => {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight ?? 0;
      const readingPosition = window.scrollY + navbarHeight + window.innerHeight * 0.2;
      let currentSection = sectionElements[0]?.id ?? 'inicio';

      sectionElements.forEach((section) => {
        if (section.offsetTop <= readingPosition) {
          currentSection = section.id;
        }
      });

      const isAtPageBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;

      if (isAtPageBottom && sectionElements.length > 0) {
        currentSection = sectionElements[sectionElements.length - 1].id;
      }

      setActiveSection((previousSection) =>
        previousSection === currentSection ? previousSection : currentSection
      );
    };

    const handlePositionChange = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', handlePositionChange, { passive: true });
    window.addEventListener('resize', handlePositionChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handlePositionChange);
      window.removeEventListener('resize', handlePositionChange);
    };
  }, []);

  const handleNavClick = (sectionId) => {
    if (sectionId) {
      setActiveSection(sectionId);
    }
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <nav className="nav container">
        <Link to="/" className="logo" onClick={() => handleNavClick('inicio')}>
          <span>JCDR</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div id="main-navigation" className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => {
            const sectionId = item.href.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.href}
                href={item.href}
                className={isActive ? 'active' : ''}
                aria-current={isActive ? 'location' : undefined}
                onClick={() => handleNavClick(sectionId)}
              >
                {item.label}
              </a>
            );
          })}
<a
  className="btn btn-outline nav-cv"
  href="/badges/cv-juan-carlos.pdf"
  download="CV-Juan-Carlos-Diaz-Rodriguez.pdf"
>
  <FaDownload /> Descargar CV
</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
