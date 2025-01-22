import React from 'react';
import styles from './styles/ImageWithText.module.css';

const ImageWithText: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textWrapper}>
          <h3 className={styles.sectionTitle}>WELCOME TO OPTICOM:</h3>
          <p className={styles.text}>
            OptiCom is a bold and visionary project, focused on creating the world's first language uniquely tailored for AI agents. Traditional languages are no longer sufficient for the rapid, complex demands of AI systems. OptiCom transforms communication by introducing a framework that dramatically accelerates interaction, minimizes processing time, and optimizes memory usage. This new language sets the foundation for a more efficient, scalable, and intelligent AI ecosystem.
          </p>

          <div className={styles.imageContainer}>
            <img 
              src="/opticom.png" 
              alt="AI Communication Visualization" 
              className={styles.image}
            />
          </div>

          <h3 className={styles.sectionTitle}>JOIN THE REVOLUTION:</h3>
          <p className={styles.text}>
            We extend an open invitation to developers, researchers, and organizations to join us in shaping the future of AI communication. By leveraging our API, you can become a pioneer in the creation of OptiCom, the universal language for AI agents. Be part of a revolutionary movement that redefines how AI systems connect, collaborate, and evolve with unmatched speed and efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImageWithText; 