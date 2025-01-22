import React from 'react';
import styles from './styles/ImageGrid.module.css';

const ImageGrid: React.FC = () => {
  // Array of exactly 9 images
  const images = [
    '/grid/1.png',
    '/grid/2.png',
    '/grid/3.png',
    '/grid/4.png',
    '/grid/5.png',
    '/grid/6.png',
    '/grid/7.png',
    '/grid/8.png',
    '/grid/9.png'
  ];

  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {images.map((src, index) => (
          <div 
            key={index} 
            className={styles.imageWrapper}
          >
            <img 
              src={src} 
              alt={`Grid image ${index + 1}`} 
              className={styles.image}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid; 