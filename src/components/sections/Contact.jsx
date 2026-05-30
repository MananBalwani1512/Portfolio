import { useInView } from '../../hooks/useInView';
import { contact } from '../../data/portfolioData';
import styles from './Contact.module.css';

export default function Contact() {
  const [ref, isVisible] = useInView(0.15);
  const { label, heading, subtitle, links, availability } = contact;

  return (
    <section
      ref={ref}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
      id="contact"
    >
      <div className={`${styles.sectionLabel} ${isVisible ? styles.visible : ''}`}>
        {label}
      </div>

      <div className={styles.inner}>
        <div className={`${styles.lede} ${isVisible ? styles.visible : ''}`}>
          {heading.main}<br />
          <em>{heading.highlight}</em> {heading.end}
        </div>

        <p className={`${styles.sub} ${isVisible ? styles.visible : ''}`}>
          {subtitle}
        </p>

        <div className={`${styles.links} ${isVisible ? styles.visible : ''}`}>
          {links.map((link, idx) => (
            <a
              key={idx}
              className={`${styles.link} ${link.primary ? styles.linkPrimary : ''}`}
              href={link.href}
              target={link.type !== 'email' && link.type !== 'phone' ? '_blank' : undefined}
              rel={link.type !== 'email' && link.type !== 'phone' ? 'noopener noreferrer' : undefined}
            >
              <span className={styles.linkIcon}>{link.icon}</span>
              <span className={styles.linkText}>{link.text}</span>
            </a>
          ))}
        </div>

        <div className={`${styles.availability} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.availDot}></span>
          {availability}
        </div>
      </div>
    </section>
  );
}
