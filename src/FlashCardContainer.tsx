import React, { useState } from 'react';
import FlashCard from './FlashCard';
import Navigation from './Navigation';

const FlashCardContainer: React.FC = () => {

  const handleNext = () => {
    throw new Error('Not implemented');
  };

  const handlePrev = () => {
    throw new Error('Not implemented');
  };

  return (
    <div>
      <FlashCard prompt={'test prompt'} answer={'test answer'} />
      <Navigation onNext={handleNext} onPrev={handlePrev} />
    </div>
  );
};

export default FlashCardContainer;