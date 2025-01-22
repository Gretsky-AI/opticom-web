import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Twitter', url: 'https://x.com/0ptiCom', icon: '🐦' },
    { name: 'GitHub', url: 'https://github.com/Gretsky-AI', icon: '💻' },
    { name: 'DexScreener', url: '#', icon: '📊' },
    { name: 'University of Toronto', url: 'https://www.utoronto.ca', icon: '🎓' }
  ];

  const sectionLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Software Suite', id: 'software-suite' },
    { name: 'Roadmap', id: 'roadmap' },
    { name: 'Beta Access', id: 'beta-access' },
    { name: 'University Info', id: 'university-info' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Navigation</h3>
          <ul className={styles.linkList}>
            {sectionLinks.map((link, index) => (
              <li key={index}>
                <button 
                  onClick={() => handleScrollTo(link.id)}
                  className={styles.link}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Connect With Us</h3>
          <ul className={styles.socialList}>
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.url} 
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.icon}>{link.icon}</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>About Opticom</h3>
          <p className={styles.about}>
            Revolutionizing AI agent communication through innovative optimization technology.
            A research project at the University of Toronto.
          </p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © 2024-{new Date().getFullYear()} Opticom. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 