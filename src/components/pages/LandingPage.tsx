import React, { useState, useEffect } from 'react';
import styles from './LandingPage.module.css';
import Navbar from '../layout/Navbar';
import ImageWithText from '../sections/ImageWithText';
import Roadmap from '../sections/Roadmap';
import SoftwareSuite from '../sections/SoftwareSuite';
import UniversityInfo from '../sections/UniversityInfo';
import BetaAccess from '../sections/BetaAccess';
import ContactForm from '../sections/ContactForm';
import ImageGrid from '../sections/ImageGrid';
import Footer from '../layout/Footer';

const LandingPage: React.FC = () => {
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      const halfwayPoint = window.innerHeight / 4;

      if (scrollingDown && currentScrollY > halfwayPoint) {
        setIsNavbarHidden(true);
      } else if (!scrollingDown || currentScrollY < halfwayPoint) {
        setIsNavbarHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    const throttledHandleScroll = () => {
      window.requestAnimationFrame(() => {
        handleScroll();
      });
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={styles.container}>
      <Navbar isHidden={isNavbarHidden} />
      <div id="home" className={styles.content}>
        <h1 className={styles.title}>Opticom</h1>
        <p className={styles.catchphrase}>
          Transforming the future of AI agents communication.
        </p>
      </div>
      <div>
        <img src="/banner.png" alt="AI Communication Visualization" className={'w-full'} />
      </div>
      <div id="software-suite">
        <SoftwareSuite />
      </div>
      <ImageWithText />
      <div id="roadmap">
        <Roadmap />
      </div>
      <div>
        <img src="/art.png" alt="AI Communication Visualization" className={'w-full'} />
      </div>
      <div id="beta-access">
        <BetaAccess />
      </div>
      <div id="university-info">
        <UniversityInfo />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <ImageGrid />
      <Footer />
    </div>
  );
};

export default LandingPage; 