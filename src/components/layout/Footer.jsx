import { useInView } from '../../hooks/useInView';
import { personal, navigation } from '../../data/portfolioData';
import styles from './Footer.module.css';

export default function Footer() {
  const [ref, isVisible] = useInView(0.5);

  return (
    <footer
      ref={ref}
      className={`${styles.footer} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.name}>
        {personal.name} — {personal.title}
      </div>

      <ul className={styles.footerLinks}>
        {navigation.links.map(({ label, href }) => (
          <li key={label}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>

      <div className={styles.copy}>
        © 2026 · {personal.location}
      </div>
    </footer>
  );
}
