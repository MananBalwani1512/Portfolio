import { hero } from '../../data/portfolioData';
import styles from './Hero.module.css';

export default function Hero() {
  const { eyebrow, heading, subtitle, cta, status } = hero;

  return (
    <section className={styles.hero}>
      <div className={styles.ghostText}>ENGINEER</div>

      <div className={styles.statusPill}>
        <span className={styles.dot}></span>
        {status}
      </div>

      <div className={styles.eyebrow}>{eyebrow}</div>

      <h1 className={styles.heading}>
        {heading.main}<br />
        <em>{heading.highlight}</em>
      </h1>

      <p className={styles.sub}>{subtitle}</p>

      <div className={styles.ctaRow}>
        {cta.map((button, idx) => (
          <button
            key={idx}
            className={button.type === 'primary' ? styles.btnPrimary : styles.btnGhost}
          >
            {button.text}
          </button>
        ))}
      </div>

      <div className={styles.scrollHint}>
        Scroll
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
}
