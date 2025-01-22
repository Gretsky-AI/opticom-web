import React, { useState } from 'react';
import WelcomeBlock from './components/sections/WelcomeBlock';
import LandingPage from './components/pages/LandingPage';
import CustomCursor from './components/common/CustomCursor';

const App: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleComplete = () => {
    setShowWelcome(false);
  };

  return (
    <main style={{ position: 'relative', width: '100vw', overflow: 'hidden' }}>
      <CustomCursor />
      {showWelcome ? <WelcomeBlock onComplete={handleComplete} /> : <LandingPage />}
    </main>
  );
};

export default App; 