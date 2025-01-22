import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const cursor = document.querySelector('.custom-cursor') as HTMLElement;
    
    const moveCursor = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        if (cursor) {
          cursor.style.left = `${e.clientX}px`;
          cursor.style.top = `${e.clientY}px`;
        }
      });
    };

    if (!isMobile) {
      window.addEventListener('mousemove', moveCursor);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div 
      className="custom-cursor" 
      style={{
        width: '8px',
        height: '8px',
        backgroundColor: 'white',
        borderRadius: '50%',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        transition: 'width 0.2s, height 0.2s, transform 0.1s',
        transform: 'translate(-50%, -50%)'
      }}
    />
  );
};

export default CustomCursor; 