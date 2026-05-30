import { useInView } from '../../hooks/useInView';
import { certifications } from '../../data/portfolioData';
import styles from './Certifications.module.css';

export default function Certifications() {
  const [ref, isVisible] = useInView(0.15);
  const { label, heading, items } = certifications;

  return (
    <section
      ref={ref}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
      id="certifications"
    >
      <div className={`${styles.sectionLabel} ${isVisible ? styles.visible : ''}`}>
        {label}
      </div>
      <h2
        className={`${styles.sectionTitle} ${isVisible ? styles.visible : ''}`}
        dangerouslySetInnerHTML={{ __html: heading }}
      ></h2>

      <div className={styles.grid}>
        {items.map((cert, idx) => (
          <div
            key={idx}
            className={`${styles.card} ${isVisible ? styles.visible : ''}`}
            style={{
              transitionDelay: isVisible ? `${0.05 + idx * 0.13}s` : '0s',
            }}
          >
            {cert.url && (
                <a href={cert.url} className={styles.arrow} target="_blank" rel="noopener noreferrer">
                  ↗
                </a>
              )}
            <div className={styles.logoBox}>{cert.logo}</div>
            <div className={styles.title}>{cert.title}</div>
            <div className={styles.issuer}>{cert.issuer}</div>
            <div className={styles.date}>{cert.date}</div>
            <div className={styles.credentialId}>
              ID: <span>{cert.credentialId}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
