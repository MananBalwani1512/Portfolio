import { useInView } from '../../hooks/useInView';
import { experience } from '../../data/portfolioData';
import styles from './Experience.module.css';

export default function Experience() {
  const [ref, isVisible] = useInView(0.15);
  const { label, heading, items } = experience;

  return (
    <section
      ref={ref}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
      id="experience"
    >
      <div className={`${styles.sectionLabel} ${isVisible ? styles.visible : ''}`}>
        {label}
      </div>

      <h2
        className={`${styles.sectionTitle} ${isVisible ? styles.visible : ''}`}
        dangerouslySetInnerHTML={{ __html: heading }}
      ></h2>

      <div className={`${styles.timeline} ${isVisible ? styles.visible : ''}`}>
        {items.map((job, idx) => (
          <div
            key={idx}
            className={`${styles.item} ${isVisible ? styles.visible : ''}`}
            style={{
              transitionDelay: isVisible ? `${0.35 + idx * 0.2}s` : '0s',
            }}
          >
            <div className={styles.dot}></div>

            <div className={styles.date}>{job.date}</div>
            <div className={styles.role}>{job.role}</div>
            <div className={styles.company}>
              {job.company} · {job.location}
            </div>

            <ul className={styles.bullets}>
              {job.bullets.map((bullet, bulletIdx) => (
                <li key={bulletIdx}>{bullet}</li>
              ))}
            </ul>

            <div className={styles.chips}>
              {job.tags.map((tag, tagIdx) => (
                <span key={tagIdx} className={styles.chip}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
