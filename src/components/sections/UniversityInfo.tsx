import React from 'react';
import styles from './styles/UniversityInfo.module.css';

const UniversityInfo: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img 
            src="/uot.png" 
            alt="University of Toronto Campus" 
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.title}>University of Toronto</h2>
          <div className={styles.info}>
            <p>
              This project is being developed at the University of Toronto (UoT), one of Canada's most prestigious research universities, located in the heart of Toronto, Ontario. As part of our advanced studies in Artificial Intelligence, we are pushing the boundaries of AI communication technology.
            </p>
            <p>
              UofT's AI program is renowned for its innovative approach to artificial intelligence research and development. Our curriculum combines theoretical foundations with hands-on experience, preparing students to tackle real-world challenges in AI.
            </p>
            <p>
              The Opticom project represents our commitment to advancing AI technology. By developing more efficient communication protocols for AI agents, we're contributing to UofT's legacy of groundbreaking research and innovation in artificial intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityInfo; 