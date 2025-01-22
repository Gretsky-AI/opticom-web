import React, { useEffect, useRef } from 'react';
import styles from './styles/Roadmap.module.css';

interface RoadmapStep {
  number: number;
  title: string;
  description: string;
  completed: boolean;
}

const steps: RoadmapStep[] = [
  {
    number: 1,
    title: "Initial Development",
    description: "Development of core functionality and basic infrastructure. Setting up the foundation for secure and efficient communication.",
    completed: true
  },
  {
    number: 2,
    title: "Beta Testing",
    description: "Launch of beta version with selected partners. Gathering feedback and implementing improvements based on real-world usage.",
    completed: true
  },
  {
    number: 3,
    title: "Advanced Features",
    description: "Implementation of advanced features including AI-powered optimization, enhanced security protocols, and scalability improvements.",
    completed: false
  },
  {
    number: 4,
    title: "Global Launch",
    description: "Full-scale launch with complete feature set. Opening platform for global adoption and continuous improvement based on community feedback.",
    completed: false
  }
];

const Roadmap: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.roadmap} ref={sectionRef}>
      <div className={styles.stepsContainer}>
        {steps.map((step) => (
          <div 
            key={step.number} 
            className={`${styles.step} ${step.completed ? styles.completed : ''}`}
          >
            <div className={styles.stepNumber}>{step.number}</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap; 