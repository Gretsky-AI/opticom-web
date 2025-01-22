import React from 'react';
import styles from './Navbar.module.css';

interface NavbarProps {
  isHidden: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isHidden }) => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`${styles.navbar} ${isHidden ? styles.hidden : ''}`}>
      <a target='_blank' href="https://x.com/0ptiCom" className={styles.navLink}>x</a>
      <a target='_blank' href="https://github.com/Gretsky-AI" className={styles.navLink}>github</a>
      <button onClick={() => handleScrollTo('roadmap')} className={styles.navLink}>roadmap</button>
    </nav>
  );
};

export default Navbar; 