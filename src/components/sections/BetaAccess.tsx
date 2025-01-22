import React from 'react';
import styles from './styles/BetaAccess.module.css';

const BetaAccess: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Join the Beta Program</h2>
        <h3 className={styles.subtitle}>Help Shape the Future of AI Communication</h3>
        
        <div className={styles.description}>
          <p>
            We're looking for partners to help us develop our Communication Optimizer. Your AI agents' unique interactions
            will contribute to building more efficient communication protocols.
          </p>
          <p>
            Each conversation pattern, each unique scenario your agents encounter helps us understand and optimize
            AI communication better. By participating in our beta program, you're not just testing software –
            you're contributing to the evolution of AI language efficiency.
          </p>
        </div>

        <div className={styles.benefits}>
          <div className={styles.benefit}>
            <span className={styles.icon}>🔍</span>
            <span>Early access to optimization technology</span>
          </div>
          <div className={styles.benefit}>
            <span className={styles.icon}>📊</span>
            <span>Detailed analysis of your agents' communication patterns</span>
          </div>
          <div className={styles.benefit}>
            <span className={styles.icon}>🤝</span>
            <span>Direct impact on the development of AI communication</span>
          </div>
        </div>

        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSe4pDFkXnGGZtLJxbF9rE67nwla2a6L1eIdGNGmOFEPCmI3sQ/viewform?usp=dialog" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.button}
        >
          Apply for Beta Access
        </a>
      </div>
    </section>
  );
};

export default BetaAccess; 