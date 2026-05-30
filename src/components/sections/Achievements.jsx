import { useInView } from '../../hooks/useInView';
import { achievements } from '../../data/portfolioData';
import styles from './Achievements.module.css';

export default function Achievements() {
  const [ref, isVisible] = useInView(0.15);
  const { label, heading, items } = achievements;

  return (
    <section
      ref={ref}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
      id="achievements"
    >
      <div className={`${styles.sectionLabel} ${isVisible ? styles.visible : ''}`}>
        {label}
      </div>

      <h2
        className={`${styles.sectionTitle} ${isVisible ? styles.visible : ''}`}
        dangerouslySetInnerHTML={{ __html: heading }}
      ></h2>

      <div className={styles.grid}>
        {items.map((achievement, idx) => (
          <div
            key={idx}
            className={`${styles.card} ${isVisible ? styles.visible : ''}`}
            style={{
              transitionDelay: isVisible ? `${0.05 + idx * 0.13}s` : '0s',
            }}
          >
            <div className={styles.icon}>{achievement.icon}</div>
            <div className={styles.num}>{achievement.num}</div>
            <div className={styles.title}>{achievement.title}</div>
            <div className={styles.desc}>{achievement.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
