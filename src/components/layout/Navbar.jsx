import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { personal, navigation } from '../../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>{personal.initials}.</div>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {navigation.links.map(({ label, href }) => (
          <li key={label}>
            <a href={href} onClick={handleLinkClick}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.barOpen : ''}></span>
        <span className={menuOpen ? styles.barOpen : ''}></span>
        <span className={menuOpen ? styles.barOpen : ''}></span>
      </button>
    </nav>
  );
}
