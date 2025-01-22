import React, { useEffect, useRef } from 'react';
import styles from './styles/SoftwareSuite.module.css';

const SoftwareSuite: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('Intersection:', entry.isIntersecting);
          if (entry.isIntersecting) {
            console.log('Adding animate class');
            entry.target.classList.add(styles.animate);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '50px' // Add some margin to trigger earlier
      }
    );

    if (sectionRef.current) {
      // Reset any existing animation class
      sectionRef.current.classList.remove(styles.animate);
      observer.observe(sectionRef.current);
      console.log('Observer set up');
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const softwareItems = [
    {
      title: "AI Agent Manager",
      description: "Create and deploy unique AI agents in various scenarios to collect communication data. This powerful tool enables comprehensive analysis of agent interactions, providing valuable insights for future optimization.",
      icon: "🤖",
      deliveryDate: "January 2025",
      githubLink: "#",
      isActive: true
    },
    {
      title: "Communication Optimizer",
      description: "Advanced LLM technology that streamlines AI agent communication by removing redundancy while preserving meaning. Transform verbose exchanges into concise, efficient interactions without losing context or intent.",
      icon: "⚡",
      deliveryDate: "End of February 2025",
      githubLink: "#",
      isActive: false
    },
    {
      title: "World Interface",
      description: "Connect AI agents to the world using optimized 'AI English'. Enable seamless interaction through popular platforms like Telegram and Twitter, allowing agents to engage in meaningful conversations and respond to social media posts.",
      icon: "🌐",
      deliveryDate: "End of March 2025",
      githubLink: "#",
      isActive: false
    }
  ];

  return (
    <section ref={sectionRef} className={`${styles.container} ${styles.initial}`}>
      <div className={styles.layersContainer}>
        {softwareItems.map((item, index) => (
          <div key={index} className={styles.layer}>
            <div className={styles.content}>
              <div className={styles.mainInfo}>
                <div className={styles.icon}>{item.icon}</div>
                <div>
                  <h3 className={styles.layerTitle}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </div>
              <div className={styles.rightSide}>
                <div className={styles.deliveryDate}>
                  <span className={styles.label}>Delivery:</span>
                  <span className={styles.date}>{item.deliveryDate}</span>
                </div>
                <a
                  href={item.githubLink}
                  className={`${styles.githubButton} ${!item.isActive && styles.disabled}`}
                  onClick={(e) => !item.isActive && e.preventDefault()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className={styles.githubIcon} viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                  </svg>
                  {item.isActive ? 'View GitHub' : 'Coming Soon'}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftwareSuite; 