import { useInView } from '../../hooks/useInView';
import { about } from '../../data/portfolioData';
import styles from './About.module.css';

export default function About() {
  const [ref, isVisible] = useInView(0.15);
  const { label, heading, paragraphs, stats } = about;

  return (
    <section
      ref={ref}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
      id="about"
    >
      <div className={`${styles.sectionLabel} ${isVisible ? styles.visible : ''}`}>
        {label}
      </div>

      <div className={styles.grid}>
        {/* Portrait */}
        <div className={`${styles.portrait} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.monogram}>MB</div>
          <div className={`${styles.corner} ${styles.cornerTL}`}></div>
          <div className={`${styles.corner} ${styles.cornerBR}`}></div>
        </div>

        {/* Text column */}
        <div className={`${styles.textCol} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.heading}>
            {heading.main}<br />
            <em>{heading.highlight}</em>
          </h2>

          {paragraphs.map((para, idx) => (
            <p key={idx} className={styles.para}>
              {para}
            </p>
          ))}

          {/* Stats */}
          <div className={styles.statRow}>
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`${styles.stat} ${isVisible ? styles.visible : ''}`}
                style={{ transitionDelay: `${0.3 + idx * 0.15}s` }}
              >
                <div className={styles.statNum}>{stat.num}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
