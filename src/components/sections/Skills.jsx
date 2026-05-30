import { useInView } from '../../hooks/useInView';
import { skills } from '../../data/portfolioData';
import styles from './Skills.module.css';

export default function Skills() {
  const [ref, isVisible] = useInView(0.15);
  const { label, heading, items, languages } = skills;

  return (
    <section
      ref={ref}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
      id="skills"
    >
      <div className={`${styles.sectionLabel} ${isVisible ? styles.visible : ''}`}>
        {label}
      </div>

      <h2
        className={`${styles.sectionTitle} ${isVisible ? styles.visible : ''}`}
        dangerouslySetInnerHTML={{ __html: heading }}
      ></h2>

      <div className={styles.grid}>
        {items.map((skill, idx) => (
          <div
            key={idx}
            className={`${styles.cell} ${isVisible ? styles.visible : ''}`}
            style={{
              transitionDelay: isVisible ? `${0.05 + idx * 0.07}s` : '0s',
            }}
          >
            <div className={styles.icon}>{skill.icon}</div>
            <div className={styles.name}>{skill.name}</div>
            <div className={styles.subtitle}>{skill.subtitle}</div>

            <div className={styles.barWrap}>
              <div
                className={`${styles.bar} ${isVisible ? styles.filled : ''}`}
                style={{
                  width: isVisible ? `${skill.level}%` : '0%',
                  transition: 'width 1.1s cubic-bezier(0.16,1,0.3,1)',
                }}
              ></div>
            </div>

            <div className={styles.tags}>
              {skill.tags.map((tag, tagIdx) => (
                <span key={tagIdx} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Languages row */}
      <div className={`${styles.langRow} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.langLabel}>Languages</div>
        <div className={styles.tags}>
          {languages.map((lang, idx) => (
            <span key={idx} className={styles.langTag}>
              {lang}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
