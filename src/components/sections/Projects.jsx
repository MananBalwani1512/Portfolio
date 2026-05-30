import { useInView } from '../../hooks/useInView';
import { projects } from '../../data/portfolioData';
import styles from './Projects.module.css';

export default function Projects() {
  const [ref, isVisible] = useInView(0.15);
  const { label, heading, items } = projects;

  return (
    <section
      ref={ref}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
      id="projects"
    >
      <div className={`${styles.sectionLabel} ${isVisible ? styles.visible : ''}`}>
        {label}
      </div>

      <h2
        className={`${styles.sectionTitle} ${isVisible ? styles.visible : ''}`}
        dangerouslySetInnerHTML={{ __html: heading }}
      ></h2>

      <div className={styles.grid}>
        {items.map((project, idx) => (
          project.featured ? (
            // Featured Project
            <div
              key={idx}
              className={`${styles.card} ${styles.cardFeatured} ${isVisible ? styles.visible : ''}`}
              style={{
                transitionDelay: isVisible ? '0.05s' : '0s',
              }}
            >
              <div>
                <div className={styles.badge}>Featured</div>
                <div className={`${styles.num} ${styles.numFeatured}`}>
                  {project.num}
                </div>
                <div className={styles.title}>{project.title}</div>
                <div className={styles.desc}>{project.description}</div>

                <div className={styles.tags}>
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <a href={project.github} className={styles.githubLink} target="_blank" rel="noopener noreferrer">
                  View on GitHub ↗
                </a>
              </div>

              <div className={styles.visual}>
                <div className={styles.gridLines}></div>
                <div className={styles.previewCode}>
                  <div className={styles.previewLabel}>ARCHITECTURE</div>
                  <div className={styles.previewLines}>
                    {project.preview.map((line, lineIdx) => (
                      <div key={lineIdx}>
                        {line.startsWith('→') ? (
                          <span>{line}</span>
                        ) : line.startsWith('@') && line.includes('(') ? (
                          <span>{line}</span>
                        ) : (
                          line
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {project.liveUrl && (
                <a href={project.liveUrl} className={styles.arrow} target="_blank" rel="noopener noreferrer">
                  ↗
                </a>
              )}              
              </div>
          ) : (
            // Regular Project
            <div
              key={idx}
              className={`${styles.card} ${isVisible ? styles.visible : ''}`}
              style={{
                transitionDelay: isVisible ? `${0.18 + (idx - 1) * 0.12}s` : '0s',
              }}
            >
              {project.liveUrl && (
                <a href={project.liveUrl} className={styles.arrow} target="_blank" rel="noopener noreferrer">
                  ↗
                </a>
              )}
              <div className={styles.num}>{project.num}</div>
              <div className={styles.title}>{project.title}</div>
              <div className={styles.desc}>{project.description}</div>

              <div className={styles.tags} style={{ marginTop: '1rem' }}>
                {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ marginTop: '1rem' }}>
                <a href={project.github} className={styles.githubLink} target="_blank" rel="noopener noreferrer">
                  View on GitHub ↗
                </a>
              </div>
            </div>
          )
        ))}

        {/* Placeholder */}
        <div className={`${styles.card} ${styles.cardPlaceholder} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.placeholderText}>
            More projects<br />
            coming soon
          </div>
        </div>
      </div>
    </section>
  );
}
