import React, { useState } from 'react';

interface FlashCardProps {
  prompt: string;
  answer: string;
}

const FlashCard: React.FC<FlashCardProps> = ({ prompt, answer }) => {

  return (
    <div>
      {prompt}
    </div>
  );
};

export default FlashCard;