import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { TypeAnimation } from 'react-type-animation';

const backgroundTransition = keyframes`
  0% {
    background-color: white;
    color: black;
    transform: scale(1);
  }
  100% {
    background-color: black;
    color: white;
    transform: scale(1.4);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const WelcomeContainer = styled.div<{ isExiting: boolean; isClickable: boolean }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  animation: ${backgroundTransition} 0.5s ease-in-out forwards;
  animation-delay: 2.5s;
  cursor: ${props => props.isClickable ? 'pointer' : 'default'};
  pointer-events: ${props => props.isClickable ? 'auto' : 'none'};
`;

const TextContainer = styled.div<{ isExiting: boolean }>`
  font-size: 3rem;
  font-weight: bold;
  color: black;
  animation: ${backgroundTransition} 0.5s ease-in-out forwards;
  animation-delay: 2.5s;
`;

const ContinueText = styled.div<{ isVisible: boolean }>`
  font-size: 1rem;
  margin-top: 2rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 4s;
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
`;

interface WelcomeBlockProps {
  onComplete: () => void;
}

const WelcomeBlock: React.FC<WelcomeBlockProps> = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    // Total animation duration = typing (1s) + pause (1s) + typing "pticom" (~0.12s) + 
    // background transition delay (2.5s) + transition (0.5s) + fade in delay (4s) + fade (1s)
    const totalAnimationTime = 4500; // 5 seconds

    const timer = setTimeout(() => {
      setIsClickable(true);
    }, totalAnimationTime);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (!isClickable) return;
    setIsExiting(true);
    setTimeout(onComplete, 500);
  };

  return (
    <WelcomeContainer isExiting={isExiting} isClickable={isClickable} onClick={handleClick}>
      <TextContainer isExiting={isExiting}>
        <TypeAnimation
          sequence={[
            'O',
            1000,
            'Opticom',
            () => setIsTypingComplete(true)
          ]}
          wrapper="span"
          cursor={false}
          speed={20}
        />
      </TextContainer>
      <ContinueText isVisible={isTypingComplete}>press anywhere to continue</ContinueText>
    </WelcomeContainer>
  );
};

export default WelcomeBlock; 